(function() {
    const originalFetch = window.fetch.bind(window);
    const unsafeMethods = new Set(['POST', 'PUT', 'PATCH', 'DELETE']);
    let csrfTokenPromise = null;

    function getApiBaseUrl() {
        return String(window.PPOB_API_BASE_URL || '').replace(/\/+$/, '');
    }

    function getCredentialsMode() {
        return window.PPOB_IS_NATIVE ? 'include' : 'same-origin';
    }

    function getRequestUrl(input) {
        if (typeof input === 'string') return input;
        if (input instanceof URL) return input.href;
        if (input && typeof input.url === 'string') return input.url;
        return '';
    }

    function getRequestMethod(input, init) {
        return String(init?.method || input?.method || 'GET').toUpperCase();
    }

    function isProtectedOrigin(url) {
        try {
            const rawUrl = String(url || '');
            if (window.PPOB_IS_NATIVE && rawUrl.startsWith('/api/')) return true;

            const requestUrl = new URL(rawUrl, window.location.origin);
            if (requestUrl.origin === window.location.origin) return true;

            const apiBaseUrl = getApiBaseUrl();
            return Boolean(apiBaseUrl && requestUrl.origin === new URL(apiBaseUrl).origin);
        } catch (_error) {
            return false;
        }
    }

    async function fetchCsrfToken() {
        const response = await originalFetch('/api/auth/csrf', {
            method: 'GET',
            credentials: getCredentialsMode(),
            cache: 'no-store',
        });
        const result = await response.json().catch(function() { return {}; });
        if (!response.ok || !result?.csrfToken) {
            throw new Error(result?.error || 'Token keamanan belum siap');
        }
        return result.csrfToken;
    }

    async function getCsrfToken() {
        if (!csrfTokenPromise) {
            csrfTokenPromise = fetchCsrfToken().catch(function(error) {
                csrfTokenPromise = null;
                throw error;
            });
        }
        return csrfTokenPromise;
    }

    window.refreshCsrfToken = function() {
        csrfTokenPromise = null;
        return getCsrfToken();
    };

    window.fetch = async function secureFetch(input, init) {
        const requestInit = init ? { ...init } : {};
        const method = getRequestMethod(input, requestInit);
        const url = getRequestUrl(input);

        if (unsafeMethods.has(method) && isProtectedOrigin(url)) {
            const headers = new Headers(requestInit.headers || (input && input.headers) || undefined);
            if (!headers.has('x-csrf-token')) {
                headers.set('x-csrf-token', await getCsrfToken());
            }
            requestInit.headers = headers;
            requestInit.credentials = getCredentialsMode();
        }

        return originalFetch(input, requestInit);
    };
})();
