document.addEventListener('DOMContentLoaded', function() {
    const authSubtitle = document.getElementById('authSubtitle');
    const authMessage = document.getElementById('authMessage');
    const authDevelopmentBanner = document.getElementById('authDevelopmentBanner');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authViews = document.querySelectorAll('.auth-view');
    const loginForm = document.getElementById('loginView');
    const registerForm = document.getElementById('registerView');
    const otpForm = document.getElementById('otpView');
    const forgotPasswordForm = document.getElementById('forgotPasswordView');
    const forgotOtpForm = document.getElementById('forgotOtpView');
    const otpEmailText = document.getElementById('otpEmailText');
    const forgotOtpEmailText = document.getElementById('forgotOtpEmailText');
    const backToRegisterBtn = document.getElementById('backToRegister');
    const openForgotPasswordBtn = document.getElementById('openForgotPassword');
    const backToLoginBtn = document.getElementById('backToLogin');
    const backToForgotBtn = document.getElementById('backToForgot');
    const loginTurnstileGroup = document.getElementById('loginTurnstileGroup');
    const loginTurnstileWidget = document.getElementById('loginTurnstileWidget');
    const loginTurnstileTokenInput = document.getElementById('loginTurnstileToken');
    const turnstileGroup = document.getElementById('turnstileGroup');
    const turnstileWidget = document.getElementById('turnstileWidget');
    const turnstileTokenInput = document.getElementById('turnstileToken');
    const forgotTurnstileGroup = document.getElementById('forgotTurnstileGroup');
    const forgotTurnstileWidget = document.getElementById('forgotTurnstileWidget');
    const forgotTurnstileTokenInput = document.getElementById('forgotTurnstileToken');
    const localCaptchaGroup = document.getElementById('localCaptchaGroup');
    const captchaQuestion = document.getElementById('captchaQuestion');
    const refreshCaptchaBtn = document.getElementById('refreshCaptcha');
    const captchaAnswerInput = document.getElementById('captchaAnswer');
    const registerTermsEl = document.getElementById('registerTerms');
    const googleAuthSection = document.getElementById('googleAuthSection');
    const googleWebButton = document.getElementById('googleWebButton');
    const googleNativeButton = document.getElementById('googleNativeButton');
    const passwordToggles = document.querySelectorAll('[data-toggle-password]');
    let pendingEmail = '';
    let pendingForgotEmail = '';
    let googleLoginBusy = false;

    // Saat dibuka dari tombol PPOB di bot Telegram, Telegram memberi initData
    // bertanda tangan. Di luar Telegram nilainya kosong, jadi bagian Telegram di
    // halaman ini dilewati. Aplikasi Android tidak pernah dibuka dari Telegram.
    const telegramWebApp = window.PPOB_IS_NATIVE ? null : window.Telegram?.WebApp;
    const telegramInitData = String(telegramWebApp?.initData || '');
    const isTelegramMiniApp = Boolean(telegramInitData);
    const telegramAuthBox = document.getElementById('telegramAuthBox');
    const telegramAuthText = document.getElementById('telegramAuthText');
    const telegramLoginButton = document.getElementById('telegramLoginButton');
    // Diisi saat user logout, supaya halaman login di dalam Telegram tidak
    // langsung memasukkannya lagi ke akun yang baru saja ditinggalkan.
    const TELEGRAM_AUTO_LOGIN_OFF_KEY = 'ppob_telegram_auto_login_off';
    // Akun Telegram ini belum tertaut: login berikutnya sekalian menautkannya.
    let telegramLinkPending = false;

    async function loadDevelopmentNotice() {
        if (!authDevelopmentBanner) return;
        try {
            const response = await fetch('/api/settings/public', {
                cache: 'no-store',
                credentials: 'same-origin',
            });
            if (!response.ok) throw new Error('Gagal memuat setting public');
            const result = await response.json();
            const development = result?.data?.developmentMode || {};
            const enabled = development.enabled === true;
            authDevelopmentBanner.hidden = !enabled;
            authDevelopmentBanner.setAttribute('aria-hidden', String(!enabled));
            const textEl = authDevelopmentBanner.querySelector('span');
            if (enabled && textEl && development.message) textEl.textContent = development.message;
        } catch (_error) {
            authDevelopmentBanner.hidden = true;
            authDevelopmentBanner.setAttribute('aria-hidden', 'true');
        }
    }
    let captchaId = '';
    let captchaProvider = 'local';
    let turnstileSiteKey = '';
    let loginTurnstileRequired = false;
    const turnstileWidgets = {
        login: { id: null, widget: loginTurnstileWidget, tokenInput: loginTurnstileTokenInput },
        register: { id: null, widget: turnstileWidget, tokenInput: turnstileTokenInput },
        forgot: { id: null, widget: forgotTurnstileWidget, tokenInput: forgotTurnstileTokenInput },
    };

    function showMessage(message, type) {
        authMessage.textContent = message || '';
        authMessage.className = type ? `auth-message ${type}` : 'auth-message';
    }

    function showView(viewId) {
        authViews.forEach(function(view) {
            view.classList.toggle('active', view.id === viewId);
        });
        authTabs.forEach(function(tab) {
            tab.classList.toggle('active', tab.dataset.authView === viewId);
        });

        // authSubtitle sekarang judul halaman (h1), jadi teksnya menyebut
        // langkah yang sedang dijalani.
        if (viewId === 'loginView') authSubtitle.textContent = 'Masuk ke akun kamu';
        if (viewId === 'registerView') authSubtitle.textContent = 'Buat akun baru';
        if (viewId === 'otpView') authSubtitle.textContent = 'Cek email kamu';
        if (viewId === 'forgotPasswordView') authSubtitle.textContent = 'Atur ulang password';
        if (viewId === 'forgotOtpView') authSubtitle.textContent = 'Masukkan kode reset';
        showMessage('');
        if (captchaProvider === 'turnstile') {
            if (viewId === 'loginView') {
                if (loginTurnstileRequired) {
                    renderTurnstileFor('login');
                } else if (loginTurnstileGroup) {
                    loginTurnstileGroup.hidden = true;
                }
            }
            if (viewId === 'registerView') renderTurnstileFor('register');
            if (viewId === 'forgotPasswordView') renderTurnstileFor('forgot');
        }
    }

    async function postJson(url, payload) {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });
        const result = await response.json();
        if (!response.ok) {
            const error = new Error(result?.error || 'Request gagal');
            error.status = response.status;
            error.payload = result || {};
            error.requireTurnstile = Boolean(result?.requireTurnstile);
            throw error;
        }
        return result;
    }

    function clearLegacyAuthState() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('role');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('username');
    }

    function getPostLoginRedirect(role) {
        const normalizedRole = String(role || 'USER').toLowerCase();
        if (normalizedRole === 'admin') return 'admin.html';

        const params = new URLSearchParams(window.location.search);
        const next = String(params.get('next') || '').trim();
        const sku = String(params.get('sku') || '').trim();
        const allowedNext = next === 'user.html' ? 'user.html' : 'user.html';
        if (!sku) return allowedNext;
        return `${allowedNext}?sku=${encodeURIComponent(sku)}`;
    }

    // Aplikasi Android selalu dibuka di halaman login lebih dulu. Tanpa penutup
    // ini, user yang sesinya masih aktif sempat melihat form login berkelebat
    // sebelum dipindahkan ke dashboard. Di website tidak dipakai, karena di sana
    // halaman login memang tujuan yang diminta user.
    function createNativeBootOverlay() {
        if (!window.PPOB_IS_NATIVE || !document.body) return null;

        const overlay = document.createElement('div');
        overlay.className = 'app-boot-overlay';
        overlay.setAttribute('role', 'status');
        overlay.setAttribute('aria-label', 'Memeriksa sesi login');
        const spinner = document.createElement('span');
        spinner.className = 'app-boot-spinner';
        spinner.setAttribute('aria-hidden', 'true');
        overlay.appendChild(spinner);
        document.body.appendChild(overlay);
        return overlay;
    }

    async function redirectAuthenticatedSession() {
        const bootOverlay = createNativeBootOverlay();
        // Jaring pengaman: kalau jaringan menggantung, halaman login tetap
        // muncul daripada aplikasi terlihat macet di layar kosong.
        const overlayTimeout = bootOverlay
            ? window.setTimeout(function() { bootOverlay.remove(); }, 6000)
            : null;
        const dismissOverlay = function() {
            if (overlayTimeout) window.clearTimeout(overlayTimeout);
            if (bootOverlay) bootOverlay.remove();
        };

        try {
            const response = await fetch('/api/auth/me', { credentials: 'same-origin' });
            const result = await response.json().catch(function() { return {}; });
            if (!response.ok || !result?.user) {
                dismissOverlay();
                return;
            }

            // Penutup sengaja dibiarkan terpasang sampai halaman tujuan terbuka.
            window.location.href = getPostLoginRedirect(result.user.role);
        } catch (_error) {
            // Tetap tampilkan halaman login kalau sesi belum valid.
            dismissOverlay();
        }
    }

    // ===== Telegram Mini App =====

    function setTelegramBox(text, options = {}) {
        if (!telegramAuthBox) return;
        telegramAuthBox.hidden = !text;
        // textContent, bukan innerHTML: nama dari Telegram diisi user sendiri.
        if (telegramAuthText) telegramAuthText.textContent = text || '';
        if (telegramLoginButton) telegramLoginButton.hidden = !options.showButton;
    }

    function isTelegramAutoLoginOff() {
        try {
            return sessionStorage.getItem(TELEGRAM_AUTO_LOGIN_OFF_KEY) === '1';
        } catch (_error) {
            return false;
        }
    }

    function clearTelegramAutoLoginOff() {
        try {
            sessionStorage.removeItem(TELEGRAM_AUTO_LOGIN_OFF_KEY);
        } catch (_error) {
            // Penyimpanan diblokir: tidak apa-apa, cuma tanda logout.
        }
    }

    async function linkTelegramToSession() {
        await postJson('/api/auth/telegram/link', { initData: telegramInitData });
    }

    async function loginWithTelegram() {
        setTelegramBox('Menghubungkan akun Telegram...');
        try {
            const result = await postJson('/api/auth/telegram', { initData: telegramInitData });
            if (!result.linkRequired) {
                clearLegacyAuthState();
                window.location.href = getPostLoginRedirect(result.user.role);
                return;
            }

            // Belum tertaut. Kalau sesi web sudah ada di Telegram ini, langsung
            // tautkan ke akun itu tanpa meminta login lagi.
            const me = await fetch('/api/auth/me', { credentials: 'same-origin' });
            const meResult = await me.json().catch(function() { return {}; });
            if (me.ok && meResult?.user) {
                await linkTelegramToSession();
                window.location.href = getPostLoginRedirect(meResult.user.role);
                return;
            }

            telegramLinkPending = true;
            const nama = result.telegram?.firstName || result.telegram?.username || '';
            setTelegramBox(
                `Halo${nama ? ` ${nama}` : ''}! Masuk sekali dengan akun PPOB-mu supaya Telegram ini tertaut. ` +
                'Berikutnya kamu langsung masuk dari bot. Belum punya akun? Daftar dulu, lalu masuk.',
            );
        } catch (error) {
            // Server belum menyalakan login Telegram: halaman berjalan seperti
            // biasa tanpa pesan yang membingungkan pembeli.
            if (error.status === 503) {
                setTelegramBox('');
            } else {
                setTelegramBox(error.message || 'Login Telegram gagal. Kamu tetap bisa masuk dengan email.', { showButton: true });
            }
            await redirectAuthenticatedSession();
        }
    }

    function setGoogleLoginBusy(busy) {
        googleLoginBusy = Boolean(busy);
        googleAuthSection?.classList.toggle('is-busy', googleLoginBusy);
        if (googleNativeButton) googleNativeButton.disabled = googleLoginBusy;
    }

    async function completeGoogleLogin(idToken) {
        if (googleLoginBusy) return;
        const token = String(idToken || '').trim();
        if (!token) throw new Error('Token login Google tidak tersedia.');

        setGoogleLoginBusy(true);
        showMessage('Memverifikasi akun Google...');
        try {
            const result = await postJson('/api/auth/google', { idToken: token });
            clearLegacyAuthState();
            window.location.href = getPostLoginRedirect(result.user.role);
        } catch (error) {
            if (window.PPOB_IS_NATIVE && typeof window.PPOB_NATIVE_GOOGLE_SIGN_OUT === 'function') {
                await window.PPOB_NATIVE_GOOGLE_SIGN_OUT().catch(function() {});
            }
            showMessage(error.message || 'Login Google gagal. Silakan coba lagi.', 'failed');
        } finally {
            setGoogleLoginBusy(false);
        }
    }

    function loadGoogleIdentityScript() {
        if (window.google?.accounts?.id) return Promise.resolve();
        return new Promise(function(resolve, reject) {
            const existing = document.querySelector('script[data-google-identity]');
            if (existing) {
                existing.addEventListener('load', resolve, { once: true });
                existing.addEventListener('error', function() {
                    reject(new Error('Layanan login Google gagal dimuat.'));
                }, { once: true });
                return;
            }

            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.defer = true;
            script.dataset.googleIdentity = 'true';
            script.addEventListener('load', resolve, { once: true });
            script.addEventListener('error', function() {
                reject(new Error('Layanan login Google gagal dimuat.'));
            }, { once: true });
            document.head.appendChild(script);
        });
    }

    async function initializeGoogleAuth() {
        if (!googleAuthSection) return;
        // Di aplikasi Android login Google ditiadakan, user memakai email saja.
        // Di website tombolnya tetap tersedia seperti biasa.
        if (window.PPOB_IS_NATIVE) {
            googleAuthSection.hidden = true;
            return;
        }

        try {
            const response = await fetch('/api/auth/google-config', {
                credentials: window.PPOB_IS_NATIVE ? 'include' : 'same-origin',
                cache: 'no-store',
            });
            const result = await response.json().catch(function() { return {}; });
            const config = result?.data || {};
            if (!response.ok || !config.enabled) return;

            googleAuthSection.hidden = false;
            if (window.PPOB_IS_NATIVE) {
                if (window.PPOB_NATIVE_GOOGLE_AUTH_READY !== true) {
                    googleAuthSection.hidden = true;
                    console.warn('[auth] google-services.json APK belum memuat OAuth client Google.');
                    return;
                }
                if (!googleNativeButton || typeof window.PPOB_NATIVE_GOOGLE_SIGN_IN !== 'function') {
                    throw new Error('Modul login Google APK belum tersedia.');
                }
                googleNativeButton.hidden = false;
                googleNativeButton.addEventListener('click', async function() {
                    if (googleLoginBusy) return;
                    try {
                        setGoogleLoginBusy(true);
                        showMessage('Membuka pilihan akun Google...');
                        const nativeResult = await window.PPOB_NATIVE_GOOGLE_SIGN_IN();
                        setGoogleLoginBusy(false);
                        await completeGoogleLogin(nativeResult?.idToken);
                    } catch (error) {
                        setGoogleLoginBusy(false);
                        const text = String(error?.message || '');
                        const canceled = /cancel|batal|dismiss/i.test(text);
                        showMessage(
                            canceled ? 'Login Google dibatalkan.' : (text || 'Login Google gagal dibuka.'),
                            'failed',
                        );
                    }
                });
                return;
            }

            await loadGoogleIdentityScript();
            if (!window.google?.accounts?.id || !googleWebButton) {
                throw new Error('Layanan login Google tidak tersedia.');
            }

            googleWebButton.hidden = false;
            window.google.accounts.id.initialize({
                client_id: config.clientId,
                callback: function(response) {
                    void completeGoogleLogin(response?.credential);
                },
                auto_select: false,
                cancel_on_tap_outside: true,
                use_fedcm_for_prompt: true,
            });
            const availableWidth = Math.floor(
                googleWebButton.getBoundingClientRect().width
                || googleAuthSection.getBoundingClientRect().width
                || 320
            );
            window.google.accounts.id.renderButton(googleWebButton, {
                type: 'standard',
                theme: 'outline',
                size: 'large',
                shape: 'rectangular',
                text: 'continue_with',
                locale: 'id',
                width: Math.min(Math.max(availableWidth, 240), 400),
            });
        } catch (error) {
            googleAuthSection.hidden = true;
            console.warn('[auth] Login Google tidak dapat disiapkan:', error.message);
        }
    }

    function waitForTurnstile() {
        return new Promise(function(resolve, reject) {
            let tries = 0;
            const timer = setInterval(function() {
                tries += 1;
                if (window.turnstile?.render) {
                    clearInterval(timer);
                    resolve(window.turnstile);
                    return;
                }
                if (tries >= 80) {
                    clearInterval(timer);
                    reject(new Error('Cloudflare Turnstile belum bisa dimuat'));
                }
            }, 100);
        });
    }

    async function renderTurnstileFor(key) {
        const config = turnstileWidgets[key];
        if (captchaProvider !== 'turnstile' || !turnstileSiteKey || !config?.widget) return;
        if (config.id !== null) {
            window.turnstile?.reset?.(config.id);
            if (config.tokenInput) config.tokenInput.value = '';
            return;
        }

        const turnstile = await waitForTurnstile();
        config.id = turnstile.render(config.widget, {
            sitekey: turnstileSiteKey,
            theme: 'light',
            callback: function(token) {
                if (config.tokenInput) config.tokenInput.value = token || '';
            },
            'expired-callback': function() {
                if (config.tokenInput) config.tokenInput.value = '';
            },
            'error-callback': function() {
                if (config.tokenInput) config.tokenInput.value = '';
                showMessage('Verifikasi keamanan gagal dimuat. Refresh halaman atau coba lagi.', 'failed');
            },
        });
    }

    async function renderTurnstile() {
        return renderTurnstileFor('register');
    }

    async function loadCaptchaConfig() {
        try {
            const response = await fetch('/api/auth/captcha-config', { credentials: 'same-origin' });
            const result = await response.json().catch(function() { return {}; });
            const data = result?.data || {};
            captchaProvider = !window.PPOB_IS_NATIVE && data.provider === 'turnstile' && data.turnstileSiteKey
                ? 'turnstile'
                : 'local';
            turnstileSiteKey = String(data.turnstileSiteKey || '');
        } catch (_error) {
            captchaProvider = 'local';
            turnstileSiteKey = '';
        }

        const useTurnstile = captchaProvider === 'turnstile';
        if (loginTurnstileGroup) loginTurnstileGroup.hidden = !(useTurnstile && loginTurnstileRequired);
        if (turnstileGroup) turnstileGroup.hidden = !useTurnstile;
        if (forgotTurnstileGroup) forgotTurnstileGroup.hidden = !useTurnstile;
        if (localCaptchaGroup) localCaptchaGroup.hidden = useTurnstile;
        if (captchaAnswerInput) captchaAnswerInput.required = !useTurnstile;
        if (refreshCaptchaBtn) refreshCaptchaBtn.hidden = useTurnstile;

        if (useTurnstile) {
            captchaId = '';
            if (captchaAnswerInput) captchaAnswerInput.value = '';
            if (loginForm?.classList.contains('active') && loginTurnstileRequired) await renderTurnstileFor('login');
            if (registerForm?.classList.contains('active')) await renderTurnstileFor('register');
            if (forgotPasswordForm?.classList.contains('active')) await renderTurnstileFor('forgot');
        } else if (registerForm?.classList.contains('active')) {
            await loadCaptcha();
        }
    }

    async function loadCaptcha() {
        if (captchaProvider === 'turnstile') {
            await renderTurnstileFor('register');
            return;
        }
        try {
            const response = await fetch('/api/auth/captcha');
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result?.error || 'Gagal memuat captcha');
            }
            captchaId = result?.data?.id || '';
            captchaQuestion.textContent = result?.data?.code || 'Captcha tidak tersedia';
            document.getElementById('captchaAnswer').value = '';
        } catch (error) {
            captchaId = '';
            captchaQuestion.textContent = 'Captcha gagal dimuat';
            showMessage(error.message, 'failed');
        }
    }

    function togglePassword(button) {
        const input = document.getElementById(button.dataset.togglePassword);
        if (!input) return;

        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        button.setAttribute('aria-label', isHidden ? 'Sembunyikan password' : 'Tampilkan password');
        const icon = button.querySelector('i');
        if (icon) {
            icon.className = isHidden ? 'fas fa-eye-slash' : 'fas fa-eye';
        }
    }

    function resetTurnstileFor(key) {
        const config = turnstileWidgets[key];
        if (!config) return;
        if (config.tokenInput) config.tokenInput.value = '';
        if (config.id !== null) {
            window.turnstile?.reset?.(config.id);
        }
    }

    function getTurnstileTokenOrThrow(key) {
        if (captchaProvider !== 'turnstile') return '';
        if (key === 'login' && !loginTurnstileRequired) return '';
        const config = turnstileWidgets[key];
        const token = String(config?.tokenInput?.value || '').trim();
        if (!token) {
            throw new Error('Selesaikan verifikasi keamanan dulu.');
        }
        return token;
    }

    async function setLoginTurnstileRequired(required) {
        loginTurnstileRequired = Boolean(required && captchaProvider === 'turnstile');
        if (loginTurnstileGroup) loginTurnstileGroup.hidden = !loginTurnstileRequired;
        if (loginTurnstileRequired) {
            await renderTurnstileFor('login');
        } else {
            resetTurnstileFor('login');
        }
    }

    authTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            showView(tab.dataset.authView);
            if (tab.dataset.authView === 'registerView') {
                loadCaptcha();
            }
        });
    });

    passwordToggles.forEach(function(button) {
        button.addEventListener('click', function() {
            togglePassword(button);
        });
    });

    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const submitButton = loginForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        showMessage('Memproses login...');

        try {
            const turnstileToken = getTurnstileTokenOrThrow('login');
            const result = await postJson('/api/auth/login', {
                email: document.getElementById('loginEmail').value.trim(),
                password: document.getElementById('loginPassword').value,
                turnstileToken,
            });
            clearLegacyAuthState();
            clearTelegramAutoLoginOff();
            if (telegramLinkPending) {
                showMessage('Menautkan akun Telegram...');
                await linkTelegramToSession().catch(function(error) {
                    // Login tetap berhasil; penautan dicoba lagi saat dibuka dari bot.
                    console.warn('Gagal menautkan Telegram:', error);
                });
            }

            window.location.href = getPostLoginRedirect(result.user.role);
        } catch (error) {
            if (error.requireTurnstile) {
                await setLoginTurnstileRequired(true);
                // Pesan dari server bisa sudah berakhir titik; jangan sampai jadi "..".
                const reason = String(error.message || 'Login gagal').replace(/\.+$/, '');
                showMessage(`${reason}. Selesaikan verifikasi keamanan lalu coba lagi.`, 'failed');
            } else {
                showMessage(error.message, 'failed');
                resetTurnstileFor('login');
            }
        } finally {
            submitButton.disabled = false;
        }
    });

    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const submitButton = registerForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        showMessage('Mengirim OTP ke email...');

        try {
            const email = document.getElementById('registerEmail').value.trim();
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (password !== confirmPassword) {
                throw new Error('Ulangi password tidak sama');
            }
            if (!registerTermsEl?.checked) {
                throw new Error('Centang persetujuan Kebijakan Privasi dan Syarat & Ketentuan dulu');
            }
            const turnstileToken = String(turnstileTokenInput?.value || '').trim();
            if (captchaProvider === 'turnstile') {
                if (!turnstileToken) {
                    throw new Error('Selesaikan verifikasi keamanan dulu.');
                }
            } else if (!captchaId) {
                throw new Error('Captcha belum siap. Refresh captcha dulu.');
            }

            await postJson('/api/auth/register', {
                username: document.getElementById('registerUsername').value.trim(),
                email,
                password,
                captchaId,
                captchaAnswer: document.getElementById('captchaAnswer').value.trim(),
                turnstileToken,
            });
            pendingEmail = email;
            otpEmailText.textContent = pendingEmail;
            showView('otpView');
            showMessage('Kode OTP sudah dikirim. Cek inbox atau folder spam email kamu.', 'success');
        } catch (error) {
            showMessage(error.message, 'failed');
            loadCaptcha();
            resetTurnstileFor('register');
        } finally {
            submitButton.disabled = false;
        }
    });

    otpForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const submitButton = otpForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        showMessage('Memverifikasi OTP...');

        try {
            await postJson('/api/auth/verify-otp', {
                email: pendingEmail,
                otp: document.getElementById('otpCode').value.trim(),
            });
            document.getElementById('loginEmail').value = pendingEmail;
            document.getElementById('loginPassword').value = '';
            showView('loginView');
            showMessage('Akun sudah dibuat. Masuk dengan email dan password tadi.', 'success');
        } catch (error) {
            showMessage(error.message, 'failed');
        } finally {
            submitButton.disabled = false;
        }
    });

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const submitButton = forgotPasswordForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            showMessage('Mengirim OTP reset password...');

            try {
                const email = document.getElementById('forgotEmail').value.trim();
                const newPassword = document.getElementById('forgotNewPassword').value;
                const confirmPassword = document.getElementById('forgotConfirmPassword').value;
                if (newPassword !== confirmPassword) {
                    throw new Error('Ulangi password baru tidak sama');
                }
                const turnstileToken = getTurnstileTokenOrThrow('forgot');

                await postJson('/api/auth/forgot-password/request', {
                    email,
                    newPassword,
                    turnstileToken,
                });
                pendingForgotEmail = email;
                if (forgotOtpEmailText) forgotOtpEmailText.textContent = pendingForgotEmail;
                showView('forgotOtpView');
                showMessage('Jika email terdaftar, OTP reset sudah dikirim.', 'success');
            } catch (error) {
                showMessage(error.message, 'failed');
                resetTurnstileFor('forgot');
            } finally {
                submitButton.disabled = false;
            }
        });
    }

    if (forgotOtpForm) {
        forgotOtpForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const submitButton = forgotOtpForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            showMessage('Memverifikasi OTP reset...');

            try {
                await postJson('/api/auth/password-change/verify', {
                    email: pendingForgotEmail,
                    otp: document.getElementById('forgotOtpCode').value.trim(),
                });
                document.getElementById('loginEmail').value = pendingForgotEmail;
                document.getElementById('loginPassword').value = '';
                showView('loginView');
                showMessage('Password sudah diganti. Masuk dengan password baru.', 'success');
            } catch (error) {
                showMessage(error.message, 'failed');
            } finally {
                submitButton.disabled = false;
            }
        });
    }

    if (openForgotPasswordBtn) {
        openForgotPasswordBtn.addEventListener('click', function() {
            const loginEmail = document.getElementById('loginEmail')?.value?.trim();
            if (loginEmail) {
                document.getElementById('forgotEmail').value = loginEmail;
            }
            showView('forgotPasswordView');
        });
    }

    if (backToLoginBtn) {
        backToLoginBtn.addEventListener('click', function() {
            showView('loginView');
        });
    }

    if (backToForgotBtn) {
        backToForgotBtn.addEventListener('click', function() {
            showView('forgotPasswordView');
        });
    }

    if (backToRegisterBtn) {
        backToRegisterBtn.addEventListener('click', function() {
            showView('registerView');
            loadCaptcha();
        });
    }

    if (refreshCaptchaBtn) {
        refreshCaptchaBtn.addEventListener('click', loadCaptcha);
    }

    if (telegramLoginButton) {
        telegramLoginButton.addEventListener('click', function() {
            clearTelegramAutoLoginOff();
            void loginWithTelegram();
        });
    }

    loadCaptchaConfig();

    // Tombol Daftar dan kalimat "Buka akun gratis dengan [email]" di halaman
    // depan membuka form Daftar langsung, dengan email yang sudah diketik.
    const landingParams = new URLSearchParams(window.location.search);
    if (landingParams.get('daftar') === '1') {
        showView('registerView');
        const landingEmail = String(landingParams.get('email') || '').trim();
        const registerEmailInput = document.getElementById('registerEmail');
        if (landingEmail && registerEmailInput) registerEmailInput.value = landingEmail.slice(0, 254);
    }

    // Google memblokir login di browser bawaan aplikasi, termasuk Telegram,
    // jadi tombolnya tidak ditawarkan di sana.
    if (!isTelegramMiniApp) initializeGoogleAuth();
    loadDevelopmentNotice();
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) void loadDevelopmentNotice();
    });

    if (isTelegramMiniApp) {
        if (typeof telegramWebApp.ready === 'function') telegramWebApp.ready();
        if (typeof telegramWebApp.expand === 'function') telegramWebApp.expand();
        if (isTelegramAutoLoginOff()) {
            setTelegramBox('Kamu baru saja keluar. Tekan tombol di bawah untuk masuk lagi dengan Telegram.', { showButton: true });
            redirectAuthenticatedSession();
        } else {
            void loginWithTelegram();
        }
    } else {
        redirectAuthenticatedSession();
    }
});
