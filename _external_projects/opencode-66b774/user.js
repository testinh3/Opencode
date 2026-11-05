document.addEventListener('DOMContentLoaded', function() {
    let userEmail = 'User';
    const balanceValueEl = document.getElementById('balanceValue');
    const balanceNoteEl = document.getElementById('balanceNote');
    const balanceRetryBtn = document.getElementById('balanceRetryBtn');
    const dashboardVpnBalanceEl = document.getElementById('dashboardVpnBalance');
    const dashboardVpnBalanceNoteEl = document.getElementById('dashboardVpnBalanceNote');
    const topupVpnBalanceBtn = document.getElementById('topupVpnBalanceBtn');
    const accountVpnBalanceInfoEl = document.getElementById('accountVpnBalanceInfo');
    const tbody = document.getElementById('transaction-list');
    const historyPaginationEl = document.getElementById('historyPagination');
    const historyPrevPageBtn = document.getElementById('historyPrevPage');
    const historyNextPageBtn = document.getElementById('historyNextPage');
    const historyPageInfoEl = document.getElementById('historyPageInfo');
    const historyFilterEl = document.getElementById('historyFilter');
    const historyListTitleEl = document.getElementById('historyListTitle');
    const pageTitleEl = document.getElementById('pageTitle');
    const dashboardViews = document.querySelectorAll('.dashboard-view');
    const promoBannerEl = document.getElementById('promoBanner');
    const promoHeadlineEl = document.getElementById('promoHeadline');
    const promoSubtitleEl = document.getElementById('promoSubtitle');
    const promoPriceWrapEl = document.getElementById('promoPriceWrap');
    const promoOriginalPriceEl = document.getElementById('promoOriginalPrice');
    const promoFinalPriceEl = document.getElementById('promoFinalPrice');
    const promoCountdownEl = document.getElementById('promoCountdown');
    const promoBuyNowBtn = document.getElementById('promoBuyNowBtn');
    const promoDotsEl = document.getElementById('promoDots');
    const dashboardServiceStatusCardEl = document.getElementById('dashboardServiceStatusCard');
    const dashboardServiceStatusBadgeEl = document.getElementById('dashboardServiceStatusBadge');
    const dashboardServiceStatusIconEl = document.getElementById('dashboardServiceStatusIcon');
    const dashboardServiceStatusLabelEl = document.getElementById('dashboardServiceStatusLabel');
    const dashboardCutoffTickerEl = document.getElementById('dashboardCutoffTicker');
    const dashboardCutoffTickerTextEl = document.getElementById('dashboardCutoffTickerText');
    const dashboardAnnouncementsSectionEl = document.getElementById('dashboardAnnouncementsSection');
    const dashboardAnnouncementCountEl = document.getElementById('dashboardAnnouncementCount');
    const dashboardAnnouncementListEl = document.getElementById('dashboardAnnouncementList');
    const dashboardBannerSectionEl = document.getElementById('dashboardBannerSection');
    const dashboardBannerTrackEl = document.getElementById('dashboardBannerTrack');
    const dashboardBannerDotsEl = document.getElementById('dashboardBannerDots');
    const shortcutCategoryGridEl = document.getElementById('shortcutCategoryGrid');
    const ongoingOrdersSectionEl = document.getElementById('ongoingOrdersSection');
    const ongoingOrderListEl = document.getElementById('ongoingOrderList');
    const refreshOngoingOrdersBtn = document.getElementById('refreshOngoingOrders');
    const dashboardRecentPurchasesSectionEl = document.getElementById('dashboardRecentPurchasesSection');
    const dashboardRecentPurchasesListEl = document.getElementById('dashboardRecentPurchasesList');
    const dashboardPopularSectionEl = document.getElementById('dashboardPopularSection');
    const dashboardPopularListEl = document.getElementById('dashboardPopularList');
    const dashboardRecentHistoryBtn = document.getElementById('dashboardRecentHistoryBtn');
    const dashboardFavoritesSectionEl = document.getElementById('dashboardFavoritesSection');
    const dashboardFavoritesListEl = document.getElementById('dashboardFavoritesList');
    const dashboardFavoriteSectionCountEl = document.getElementById('dashboardFavoriteSectionCount');
    const dashboardFavoritesEmptyEl = document.getElementById('dashboardFavoritesEmpty');
    const dashboardOpenFavoritesBuyBtn = document.getElementById('dashboardOpenFavoritesBuyBtn');
    const historyOngoingOrdersSectionEl = document.getElementById('historyOngoingOrdersSection');
    const historyOngoingOrderListEl = document.getElementById('historyOngoingOrderList');
    const refreshHistoryOngoingOrdersBtn = document.getElementById('refreshHistoryOngoingOrders');
    const productGridEl = document.getElementById('prepaidProductGrid');
    const productStatusEl = document.getElementById('productStatus');
    const productSearchEl = document.getElementById('productSearch');
    const categoryFilterEl = document.getElementById('categoryFilter');
    const brandFilterEl = document.getElementById('brandFilter');
    const typeFilterEl = document.getElementById('typeFilter');
    const categoryFilterCustomEl = document.getElementById('categoryFilterCustom');
    const brandFilterCustomEl = document.getElementById('brandFilterCustom');
    const typeFilterCustomEl = document.getElementById('typeFilterCustom');
    const productTypeQuickFilterEl = document.getElementById('productTypeQuickFilter');
    const buyTypeSwipeHintEl = document.getElementById('buyTypeSwipeHint');
    const buyFavoriteToggleBtn = document.getElementById('buyFavoriteToggle');
    const buyFavoriteCountEl = document.getElementById('buyFavoriteCount');
    const categoryListEl = document.getElementById('categoryList');
    const brandListEl = document.getElementById('brandList');
    const typeListEl = document.getElementById('typeList');
    const categoryCountEl = document.getElementById('categoryCount');
    const brandCountEl = document.getElementById('brandCount');
    const typeCountEl = document.getElementById('typeCount');
    const refreshProductsBtn = document.getElementById('refreshProducts');
    const loadMoreProductsBtn = document.getElementById('loadMoreProducts');
    const hideProductsBtn = document.getElementById('hideProducts');
    const buySectionEl = document.getElementById('buySection');
    const buyStepNavEl = document.getElementById('buyStepNav');
    const buyStepBackBtn = document.getElementById('buyStepBack');
    const buyStepTrailEl = document.getElementById('buyStepTrail');
    const productPaginationEl = document.getElementById('productPagination');
    const productPrevPageBtn = document.getElementById('productPrevPage');
    const productNextPageBtn = document.getElementById('productNextPage');
    const productPageInfoEl = document.getElementById('productPageInfo');
    const accountEmailEl = document.getElementById('accountEmail');
    const accountUsernameEl = document.getElementById('accountUsername');
    const accountRoleEl = document.getElementById('accountRole');
    const accountCreatedAtEl = document.getElementById('accountCreatedAt');
    const accountTransactionCountEl = document.getElementById('accountTransactionCount');
    const accountPaymentCountEl = document.getElementById('accountPaymentCount');
    const accountBalanceInfoEl = document.getElementById('accountBalanceInfo');
    const togglePasswordChangeBtn = document.getElementById('togglePasswordChangeBtn');
    const passwordChangePanelEl = document.getElementById('passwordChangePanel');
    const checkoutPanelEl = document.getElementById('checkoutPanel');
    const checkoutViewContentEl = document.getElementById('checkoutViewContent');
    const checkoutFormEl = document.getElementById('checkoutForm');
    const checkoutProductNameEl = document.getElementById('checkoutProductName');
    const checkoutSkuEl = document.getElementById('checkoutSku');
    const checkoutPriceEl = document.getElementById('checkoutPrice');
    const checkoutCategoryEl = document.getElementById('checkoutCategory');
    const checkoutStatusEl = document.getElementById('checkoutStatus');
    const checkoutProcessTipsEl = document.getElementById('checkoutProcessTips');
    const checkoutProcessTipsTrackEl = document.getElementById('checkoutProcessTipsTrack');
    const checkoutProcessTipsDotsEl = document.getElementById('checkoutProcessTipsDots');
    const customerNoGroupEl = document.getElementById('customerNoGroup');
    const customerNoLabelEl = document.getElementById('customerNoLabel');
    const customerNoInputEl = document.getElementById('customerNoInput');
    const customerNoReminderEl = document.getElementById('customerNoReminder');
    const singleGameUsernameCheckEl = document.getElementById('singleGameUsernameCheck');
    const checkGameUsernameBtn = document.getElementById('checkGameUsernameBtn');
    const gameUsernameCheckStatusEl = document.getElementById('gameUsernameCheckStatus');
    const mlAccountFieldsEl = document.getElementById('mlAccountFields');
    const mlUserIdInputEl = document.getElementById('mlUserIdInput');
    const mlZoneIdInputEl = document.getElementById('mlZoneIdInput');
    const mlUsernameCheckEl = document.getElementById('mlUsernameCheck');
    const checkMlUsernameBtn = document.getElementById('checkMlUsernameBtn');
    const mlUsernameCheckStatusEl = document.getElementById('mlUsernameCheckStatus');
    const savedDestinationBoxEl = document.getElementById('savedDestinationBox');
    const savedDestinationListEl = document.getElementById('savedDestinationList');
    const savedDestinationEmptyEl = document.getElementById('savedDestinationEmpty');
    const savedDestinationCountEl = document.getElementById('savedDestinationCount');
    const savedDestinationLabelInputEl = document.getElementById('savedDestinationLabelInput');
    const saveCurrentDestinationBtn = document.getElementById('saveCurrentDestinationBtn');
    const saveCurrentMlDestinationBtn = document.getElementById('saveCurrentMlDestinationBtn');
    const savedDestinationToggleBtn = document.getElementById('savedDestinationToggle');
    const savedDestinationStatusEl = document.getElementById('savedDestinationStatus');
    const paymentMethodInputEl = document.getElementById('paymentMethodInput');
    const paymentMethodCustomEl = document.getElementById('paymentMethodCustom');
    const closeCheckoutBtn = document.getElementById('closeCheckout');
    const cancelCheckoutBtn = document.getElementById('cancelCheckout');
    const checkoutQrisSaveEl = document.getElementById('checkoutQrisSave');
    const checkoutResultListEl = document.getElementById('checkoutResultList');
    const quickNumberInputEl = document.getElementById('quickNumberInput');
    const quickNumberHintEl = document.getElementById('quickNumberHint');
    const quickNumberActionsEl = document.getElementById('quickNumberActions');
    const buyNumberGroupEl = document.getElementById('buyNumberGroup');
    const buyNumberInputEl = document.getElementById('buyNumberInput');
    const buyNumberHintEl = document.getElementById('buyNumberHint');
    const brandStepTitleEl = document.getElementById('brandStepTitle');
    const submitCheckoutBtn = document.getElementById('submitCheckout');
    const checkoutPaymentResultEl = document.getElementById('checkoutPaymentResult');
    const checkoutPaymentTitleEl = document.getElementById('checkoutPaymentTitle');
    const checkoutQrisImageEl = document.getElementById('checkoutQrisImage');
    const checkoutPaymentInfoEl = document.getElementById('checkoutPaymentInfo');
    const checkoutPaymentHintsEl = document.getElementById('checkoutPaymentHints');
    const checkoutPaymentActionsEl = document.getElementById('checkoutPaymentActions');
    const checkoutSnapSheetEl = document.getElementById('checkoutSnapSheet');
    const checkoutSnapContainerEl = document.getElementById('checkoutSnapContainer');
    const checkoutPaymentStateEl = document.getElementById('checkoutPaymentState');
    const checkoutProgressEl = document.getElementById('checkoutProgress');
    const checkoutProgressStepEls = Array.from(document.querySelectorAll('[data-checkout-step]'));
    const checkoutReviewEl = document.getElementById('checkoutReview');
    const checkoutReviewTitleEl = document.getElementById('checkoutReviewTitle');
    const checkoutReviewListEl = document.getElementById('checkoutReviewList');
    const checkoutReviewNoteEl = document.getElementById('checkoutReviewNote');
    const checkoutReviewBackBtn = document.getElementById('checkoutReviewBack');
    const openSnapPaymentBtn = document.getElementById('openSnapPayment');
    const refreshPaymentStatusBtn = document.getElementById('refreshPaymentStatus');
    const cancelPaymentOrderBtn = document.getElementById('cancelPaymentOrder');
    const checkoutContactCsBtn = document.getElementById('checkoutContactCs');
    const checkoutPaymentNoteEl = document.getElementById('checkoutPaymentNote');
    const checkoutDoneBtn = document.getElementById('checkoutDoneBtn');
    const checkoutRetryBtn = document.getElementById('checkoutRetryBtn');
    const checkoutHistoryBtn = document.getElementById('checkoutHistoryBtn');
    const checkoutSummaryEl = document.getElementById('checkoutSummary');
    const topupFormEl = document.getElementById('topupForm');
    const topupAmountInputEl = document.getElementById('topupAmountInput');
    const submitTopupBtn = document.getElementById('submitTopup');
    const topupMinInfoEl = document.getElementById('topupMinInfo');
    const topupStatusEl = document.getElementById('topupStatus');
    const topupPaymentResultEl = document.getElementById('topupPaymentResult');
    const topupPaymentTitleEl = document.getElementById('topupPaymentTitle');
    const topupQrisImageEl = document.getElementById('topupQrisImage');
    const topupPaymentInfoEl = document.getElementById('topupPaymentInfo');
    const topupPaymentHintsEl = document.getElementById('topupPaymentHints');
    const topupSnapSheetEl = document.getElementById('topupSnapSheet');
    const topupSnapContainerEl = document.getElementById('topupSnapContainer');
    const openTopupSnapPaymentBtn = document.getElementById('openTopupSnapPayment');
    const refreshTopupStatusBtn = document.getElementById('refreshTopupStatus');
    const topupQrisSaveEl = document.getElementById('topupQrisSave');
    const topupShopBtn = document.getElementById('topupShopBtn');
    const topupPpobQuickEl = document.getElementById('topupPpobQuick');
    const csWhatsappNumberTextEl = document.getElementById('csWhatsappNumberText');

    if (checkoutViewContentEl && checkoutPanelEl) {
        checkoutViewContentEl.appendChild(checkoutPanelEl);
    }
    const csWhatsappStatusTextEl = document.getElementById('csWhatsappStatusText');
    const csEmailTextEl = document.getElementById('csEmailText');
    const openCsWhatsappBtn = document.getElementById('openCsWhatsappBtn');
    const openCsEmailBtn = document.getElementById('openCsEmailBtn');
    const passwordChangeFormEl = document.getElementById('passwordChangeForm');
    const currentPasswordInputEl = document.getElementById('currentPasswordInput');
    const newPasswordInputEl = document.getElementById('newPasswordInput');
    const confirmNewPasswordInputEl = document.getElementById('confirmNewPasswordInput');
    const requestPasswordChangeOtpBtn = document.getElementById('requestPasswordChangeOtpBtn');
    const passwordChangeOtpPanelEl = document.getElementById('passwordChangeOtpPanel');
    const passwordChangeOtpFormEl = document.getElementById('passwordChangeOtpForm');
    const passwordChangeOtpInputEl = document.getElementById('passwordChangeOtpInput');
    const verifyPasswordChangeOtpBtn = document.getElementById('verifyPasswordChangeOtpBtn');
    const passwordChangeStatusEl = document.getElementById('passwordChangeStatus');
    const ANNOUNCEMENT_DISMISS_KEY = 'ppob_dismissed_announcements';
    const BANNER_AUTOPLAY_MS = 5000;
    let bannerAutoplayTimer = null;
    let bannerItems = [];
    let bannerScrollFrame = null;
    // Info bergeser di kartu proses, muncul kalau pesanan sudah selama ini diproses.
    const PROCESS_TIPS_DELAY_MS = 60 * 1000;
    let processTipsShowTimer = null;
    let processTipsAutoplayTimer = null;
    let processTipsScrollFrame = null;
    let processTipsOrderCode = '';

    // Polling status bayar: rapat di awal lalu melebar, bertahan sedikit lebih lama dari masa berlaku QRIS.
    const PAYMENT_POLL_MIN_DELAY_MS = 4000;
    const PAYMENT_POLL_MAX_DELAY_MS = 15000;
    const PAYMENT_POLL_TOTAL_MS = 16 * 60 * 1000;

    let prepaidProducts = [];
    // Tahap checkout yang sedang tampil: detail (form), pay, process, done.
    const CHECKOUT_STEPS = ['detail', 'pay', 'process', 'done'];
    let checkoutPhase = 'detail';
    // Tahap sebelumnya yang sedang dilihat ringkasannya. Kosong berarti yang
    // tampil adalah tahap berjalan.
    let checkoutReviewStep = '';
    let selectedCategory = '';
    let selectedBrand = '';
    let selectedType = '';
    let buyFavoriteOnly = false;
    // Favorit yang produknya sedang tidak tersedia tidak ikut di katalog umum,
    // jadi disimpan terpisah dan hanya dipakai di daftar favorit.
    let unavailableFavoriteProducts = [];
    let favoriteProductSkus = new Set();
    let savedDestinations = [];
    let savedDestinationRequestId = 0;
    let savedDestinationPanelOpen = false;
    let selectedCheckoutProduct = null;
    let visibleProductLimit = 10;
    const productPageSize = 10;
    // Jumlah tombol tipe yang tampil sebelum "Tampilkan tipe lain" di layar lebar.
    const TYPE_CHIP_COLLAPSED_COUNT = 11;
    let buyTypeChipsExpanded = false;
    let productPage = 1;
    let activeCheckoutOrderCode = null;
    // Pesanan yang terakhir digambar di layar checkout. Tidak memakai
    // paymentOrdersCache karena cache itu dikosongkan kalau daftar pesanan
    // gagal dimuat.
    let shownCheckoutOrder = null;
    let activeTopupOrderCode = null;
    let checkoutPaymentScrollUntil = 0;
    let checkoutFinalHideTimer = null;
    let checkoutFinalCountdownTimer = null;
    let topupFinalHideTimer = null;
    let topupFinalCountdownTimer = null;
    let topupMinAmount = 10000;
    let operationsConfig = {
        productPurchaseEnabled: true,
        topupEnabled: true,
        qrisEnabled: true,
        gameUsernameCheckEnabled: true,
        message: '',
        cutOff: {
            enabled: true,
            startTime: '23:30',
            endTime: '00:30',
            timeZone: 'Asia/Jakarta',
            message: '',
            activeMessage: '',
            isActive: false,
        },
    };
    let paymentGatewayConfig = {
        provider: 'autogopay',
        midtrans: {
            clientKey: '',
            snapJsUrl: 'https://app.sandbox.midtrans.com/snap/snap.js',
            isProduction: false,
        },
    };
    let midtransSnapScriptPromise = null;
    let midtransSnapScriptKey = '';
    const embeddedSnapTokens = {
        checkout: '',
        topup: '',
    };
    const embeddingSnapTokens = {
        checkout: '',
        topup: '',
    };
    let resettingMidtransSnap = false;
    let activeMidtransEmbedRequest = '';
    let activeFancyFilterEl = null;
    let promoCountdownTimer = null;
    let promoCarouselTimer = null;
    let promoPriceRefreshTimer = null;
    let currentPromoIndex = 0;
    let activePromoItemsCache = [];
    let quickServiceProductsCache = [];
    let trendingProductStatsCache = [];
    const POPULAR_PRODUCT_LIMIT = 3;
    let paymentOrdersCache = [];
    let lastOngoingRefreshAt = 0;
    let productSyncSnapshot = null;
    let productAutoSyncTimer = null;
    let productAutoSyncInFlight = false;
    let landingSkuIntentHandled = false;
    let transactionRowsCache = [];
    // Riwayat: loading, ready, atau failed. Daftar kosong saat loading atau
    // failed tidak boleh ditulis sebagai "belum ada pesanan".
    let historyLoadState = 'loading';
    let historyFilter = 'all';
    let transactionPage = 1;
    const transactionPageSize = 10;
    let userPromoBannerConfig = {
        enabled: false,
        title: '',
        subtitle: '',
        sku: '',
        originalPrice: null,
        finalPrice: null,
        durationHours: null,
        expiresAt: null,
        isExpired: false,
        isActive: false,
        activeCount: 0,
        items: [],
    };
    const receiptWebsiteUrl = `${window.location.origin}/`;
    const receiptAdText = 'Butuh kuota cepat dan stabil? Cek paket terbaru di 1FORCR KUOTA.';
    const csWhatsappDefaultMessage = 'Halo CS 1FORCR KUOTA, saya butuh bantuan.';
    const csEmailAddress = 'support@1forcrkuota.com';
    const qrisUnavailableMessage = 'Mohon maaf Qris sedang tidak tersedia kali ini, gunakan metode saldo terlebih dahulu';
    let localRole = 'USER';
    let localUsername = '';
    let csWhatsappNumber = '';
    const shownOrderToastKeys = new Set();
    const refreshedSavedDestinationOrders = new Set();

    if (accountEmailEl) accountEmailEl.textContent = userEmail;
    if (accountUsernameEl) accountUsernameEl.textContent = localUsername || '-';
    if (accountRoleEl) accountRoleEl.textContent = localRole;

    function applySessionUser(user) {
        userEmail = String(user?.email || 'User');
        localUsername = String(user?.username || 'Pengguna').trim() || 'Pengguna';
        localRole = String(user?.role || 'USER').toUpperCase();
        if (accountEmailEl) accountEmailEl.textContent = userEmail;
        if (accountUsernameEl) accountUsernameEl.textContent = localUsername || '-';
        if (accountRoleEl) accountRoleEl.textContent = localRole;
    }

    // Judul Beranda cukup sapaan dengan nama user. Dulu berisi beberapa kalimat
    // promosi yang diketik bergantian, tapi judul yang terus berubah membuat
    // halaman sulit dikenali dan ikut dibacakan ulang oleh pembaca layar.
    function getDashboardTitle() {
        const name = String(localUsername || '').trim() || 'Pengguna';
        return `Halo, ${name}`;
    }

    async function loadCurrentSession() {
        try {
            const response = await fetch('/api/auth/me', { credentials: 'same-origin' });
            const result = await response.json().catch(function() { return {}; });
            if (!response.ok || !result?.user) {
                window.location.href = 'login.html';
                return false;
            }
            const role = String(result.user.role || '').toUpperCase();
            if (role === 'ADMIN') {
                window.location.href = 'admin.html';
                return false;
            }
            if (role !== 'USER') {
                window.location.href = 'login.html';
                return false;
            }
            applySessionUser(result.user);
            return true;
        } catch (_error) {
            window.location.href = 'login.html';
            return false;
        }
    }

    function formatRupiah(amount) {
        if (typeof amount !== 'number') return '-';
        return `Rp ${amount.toLocaleString('id-ID')}`;
    }

    function formatDateTime(value) {
        if (!value) return '-';
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return '-';
        return date.toLocaleString('id-ID', {
            dateStyle: 'medium',
            timeStyle: 'short',
        });
    }

    function getOrderExpiryHint(order) {
        const expiresAt = order?.expiresAt;
        if (!expiresAt) return '';

        const expiryDate = new Date(expiresAt);
        if (Number.isNaN(expiryDate.getTime())) return '';

        const now = new Date();
        const sameDay = now.toDateString() === expiryDate.toDateString();
        const timeText = expiryDate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
        if (sameDay) return `Berlaku sampai ${timeText}`;
        const dateText = expiryDate.toLocaleDateString('id-ID');
        return `Berlaku sampai ${dateText} ${timeText}`;
    }

    function formatTimeCountdown(totalSeconds) {
        const safe = Math.max(0, Number(totalSeconds) || 0);
        const hours = String(Math.floor(safe / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((safe % 3600) / 60)).padStart(2, '0');
        const seconds = String(Math.floor(safe % 60)).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function createTextElement(tag, className, text) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        element.textContent = text;
        return element;
    }

    function showConfirmDialog(options) {
        return new Promise(function(resolve) {
            const title = String(options?.title || 'Konfirmasi');
            const message = String(options?.message || 'Lanjutkan?');
            const confirmText = String(options?.confirmText || 'Iya');
            const cancelText = String(options?.cancelText || 'Batal');

            const overlay = document.createElement('div');
            overlay.className = 'confirm-overlay';

            const dialog = document.createElement('div');
            dialog.className = 'confirm-dialog';
            dialog.setAttribute('role', 'dialog');
            dialog.setAttribute('aria-modal', 'true');
            dialog.setAttribute('aria-label', title);

            const heading = document.createElement('h3');
            heading.textContent = title;
            dialog.appendChild(heading);

            const text = document.createElement('p');
            text.textContent = message;
            dialog.appendChild(text);

            const actions = document.createElement('div');
            actions.className = 'confirm-actions';

            const cancelBtn = document.createElement('button');
            cancelBtn.type = 'button';
            cancelBtn.className = 'btn-secondary';
            cancelBtn.textContent = cancelText;

            const confirmBtn = document.createElement('button');
            confirmBtn.type = 'button';
            confirmBtn.className = 'btn-primary';
            confirmBtn.textContent = confirmText;

            actions.appendChild(cancelBtn);
            actions.appendChild(confirmBtn);
            dialog.appendChild(actions);
            overlay.appendChild(dialog);
            document.body.appendChild(overlay);

            const onEsc = function(e) {
                if (e.key === 'Escape') {
                    cleanup(false);
                }
            };
            const cleanup = function(result) {
                document.removeEventListener('keydown', onEsc);
                overlay.remove();
                resolve(result);
            };

            cancelBtn.addEventListener('click', function() { cleanup(false); });
            confirmBtn.addEventListener('click', function() { cleanup(true); });
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) cleanup(false);
            });
            document.addEventListener('keydown', onEsc);
            cancelBtn.focus();
        });
    }

    function isLoadingStatusMessage(message, type) {
        if (type === 'loading') return true;
        if (type === 'success' || type === 'failed') return false;
        return /memuat|membuat|menunggu|menyiapkan|mengecek|memverifikasi|mengirim|menyimpan|mengupload|menghapus|diproses|sedang|bentar/i.test(String(message || ''));
    }

    function setStatusElement(element, message, type, baseClass) {
        if (!element) return;
        element.textContent = message || '';
        const classes = [baseClass || 'checkout-status'];
        if (type && type !== 'loading') classes.push(type);
        if (message && isLoadingStatusMessage(message, type)) classes.push('loading');
        element.className = classes.join(' ');
    }

    function setProductStatus(message, type) {
        setStatusElement(productStatusEl, message, type, 'product-status');
    }

    function setSavedDestinationStatus(message, type) {
        setStatusElement(savedDestinationStatusEl, message, type, 'checkout-status');
    }

    function updateHorizontalScrollHint(container, hint) {
        if (!container || !hint) return;
        window.requestAnimationFrame(function() {
            const style = window.getComputedStyle(container);
            const visible = style.display !== 'none' && !container.hidden;
            hint.hidden = !visible || container.scrollWidth <= container.clientWidth + 6;
        });
    }

    function updateFavoriteFilterControls() {
        const count = favoriteProductSkus.size;
        if (buyFavoriteCountEl) buyFavoriteCountEl.textContent = String(count);

        [
            [buyFavoriteToggleBtn, buyFavoriteOnly],
        ].forEach(function(entry) {
            const button = entry[0];
            const active = entry[1];
            if (!button) return;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');

            // Saat daftar favorit sedang dibuka, tombolnya tidak perlu lagi
            // menawarkan "Favorit saya" karena user sudah ada di sana. Yang
            // dibutuhkan justru jalan kembali ke katalog untuk menambah favorit.
            const icon = button.querySelector('i');
            if (icon) icon.className = active ? 'fas fa-plus' : 'far fa-star';
            const label = button.querySelector('span');
            if (label) label.textContent = active ? 'Tambah produk favorit' : 'Favorit saya';
            const countEl = button.querySelector('strong');
            if (countEl) countEl.hidden = active;
            button.setAttribute(
                'aria-label',
                active ? 'Tambah produk favorit, kembali ke semua produk' : `Favorit saya, ${count} produk`,
            );
        });
    }

    async function loadUserFavorites() {
        try {
            const response = await fetch('/api/user/favorites', {
                cache: 'no-store',
                credentials: 'same-origin',
            });
            if (!response.ok) throw new Error('Gagal memuat produk favorit');
            const result = await response.json();
            const items = Array.isArray(result?.data) ? result.data : [];
            favoriteProductSkus = new Set(
                items
                    .map(function(item) { return String(item?.buyerSkuCode || '').trim(); })
                    .filter(Boolean)
            );
            unavailableFavoriteProducts = items
                .filter(function(item) { return item && item.available === false && item.product; })
                .map(function(item) {
                    return Object.assign({}, item.product, {
                        product_disruption: true,
                        disruption_message: item.unavailableReason || item.product.disruption_message || '',
                    });
                });
        } catch (_error) {
            favoriteProductSkus = new Set();
            unavailableFavoriteProducts = [];
        }
        updateFavoriteFilterControls();
        renderDashboardFavorites();
    }

    // Produk yang sudah ada di katalog dipakai apa adanya. Sisanya diambil dari
    // data favorit supaya produk yang dimatikan admin tetap terlihat.
    function getFavoriteFallbackProducts() {
        if (!unavailableFavoriteProducts.length) return [];
        const catalogSkus = new Set(prepaidProducts.map(function(product) {
            return String(product?.buyer_sku_code || '').trim();
        }));
        return unavailableFavoriteProducts.filter(function(product) {
            const sku = String(product?.buyer_sku_code || '').trim();
            return sku && !catalogSkus.has(sku) && favoriteProductSkus.has(sku);
        });
    }

    function renderDashboardFavorites() {
        if (!dashboardFavoritesSectionEl || !dashboardFavoritesListEl) return;
        // Akun yang belum pernah menandai favorit tidak perlu melihat panel
        // kosong di Beranda. Cara menambah favorit ada di menu Beli.
        if (!prepaidProducts.length || !favoriteProductSkus.size) {
            dashboardFavoritesSectionEl.hidden = true;
            return;
        }

        // Favorit hanya menampilkan produk yang benar-benar bisa dibeli. Produk yang
        // sedang gangguan atau sudah hilang dari katalog tidak ikut ditampilkan.
        const favoriteMatches = prepaidProducts.filter(function(product) {
            return favoriteProductSkus.has(String(product?.buyer_sku_code || '').trim());
        });
        const availableFavorites = favoriteMatches.filter(function(product) {
            return !isDisruptedProduct(product);
        });
        const unavailableFavoriteCount = favoriteProductSkus.size - availableFavorites.length;
        const favoriteProducts = availableFavorites
            .slice(0, 6)
            .map(getDisplayProduct)
            .filter(Boolean);

        // Favorit yang sedang bermasalah tetap ditampilkan dengan tanda gangguan
        // memakai sisa tempat, supaya user tahu pilihannya masih tersimpan.
        const unavailableFavorites = favoriteMatches
            .filter(isDisruptedProduct)
            .concat(getFavoriteFallbackProducts())
            .slice(0, Math.max(0, 6 - favoriteProducts.length))
            .map(getDisplayProduct)
            .filter(Boolean);

        dashboardFavoritesSectionEl.hidden = false;
        dashboardFavoritesListEl.innerHTML = '';
        // "0 dari 2 produk" terbaca seperti angka yang salah, padahal maksudnya
        // favoritnya masih ada tapi sedang tidak bisa dibeli. Jadi saat tidak ada
        // satu pun yang tersedia, yang ditulis keterangannya, bukan angka nol.
        const favoriteCount = favoriteProductSkus.size;
        const noFavoriteAvailable = favoriteCount > 0 && availableFavorites.length === 0;
        if (dashboardFavoriteSectionCountEl) {
            let countLabel = `${favoriteCount} produk`;
            if (noFavoriteAvailable) {
                countLabel = `${favoriteCount} favorit tidak tersedia`;
            } else if (unavailableFavoriteCount > 0) {
                countLabel = `${availableFavorites.length} dari ${favoriteCount} siap dibeli`;
            }
            dashboardFavoriteSectionCountEl.textContent = countLabel;
            dashboardFavoriteSectionCountEl.classList.toggle('dashboard-section-count-muted', noFavoriteAvailable);
        }

        const visibleFavorites = favoriteProducts.concat(unavailableFavorites);
        const hasFavoriteProducts = visibleFavorites.length > 0;
        dashboardFavoritesListEl.hidden = !hasFavoriteProducts;
        if (dashboardFavoritesEmptyEl) {
            dashboardFavoritesEmptyEl.hidden = hasFavoriteProducts;
            dashboardFavoritesEmptyEl.textContent = favoriteCount && !hasFavoriteProducts
                ? `${favoriteCount} produk favorit kamu sedang tidak bisa dibeli. Semuanya tampil lagi di sini begitu produknya aktif kembali.`
                : 'Belum ada produk favorit. Simpan produk dari menu Beli untuk menampilkannya di sini.';
        }
        if (!hasFavoriteProducts) return;

        visibleFavorites.forEach(function(product) {
            dashboardFavoritesListEl.appendChild(createProductCard(product));
        });
    }

    function openFavoriteProductsInBuy() {
        buyFavoriteOnly = true;
        resetProductLimit();
        showView('buyView');
        updateFavoriteFilterControls();
        renderProductFilters();
        renderProductGrid();
    }

    async function toggleProductFavorite(buyerSkuCode) {
        const sku = String(buyerSkuCode || '').trim();
        if (!sku) return;
        const currentlyFavorite = favoriteProductSkus.has(sku);

        try {
            const response = await fetch(`/api/user/favorites/${encodeURIComponent(sku)}`, {
                method: currentlyFavorite ? 'DELETE' : 'POST',
                credentials: 'same-origin',
            });
            const result = await response.json().catch(function() { return {}; });
            if (!response.ok) throw new Error(result?.error || 'Gagal mengubah produk favorit');

            if (currentlyFavorite) {
                favoriteProductSkus.delete(sku);
            } else {
                favoriteProductSkus.add(sku);
            }
            updateFavoriteFilterControls();
            renderProductGrid();
            renderDashboardFavorites();
            showToast({
                type: 'success',
                title: currentlyFavorite ? 'Favorit dihapus' : 'Masuk favorit',
                message: currentlyFavorite
                    ? 'Produk sudah dihapus dari daftar favorit.'
                    : 'Produk tersimpan dan bisa dibuka lewat filter Favorit saya.',
            });
        } catch (error) {
            showToast({
                type: 'failed',
                title: 'Favorit belum berubah',
                message: error.message,
            });
        }
    }

    function setButtonLoading(button, loading, loadingHtml) {
        if (!button) return;
        if (loading) {
            if (!button.dataset.originalHtml) button.dataset.originalHtml = button.innerHTML;
            button.disabled = true;
            button.classList.add('is-loading');
            if (loadingHtml) button.innerHTML = loadingHtml;
            return;
        }
        button.disabled = false;
        button.classList.remove('is-loading');
        if (button.dataset.originalHtml) {
            button.innerHTML = button.dataset.originalHtml;
            delete button.dataset.originalHtml;
        }
    }

    function getToastContainer() {
        let container = document.getElementById('userToastContainer');
        if (container) return container;

        container = document.createElement('div');
        container.id = 'userToastContainer';
        container.className = 'toast-container';
        container.setAttribute('aria-live', 'polite');
        container.setAttribute('aria-atomic', 'false');
        document.body.appendChild(container);
        return container;
    }

    function showToast(options) {
        const container = getToastContainer();
        const type = String(options?.type || 'info');
        const toast = document.createElement('div');
        toast.className = `app-toast ${type}`;
        toast.setAttribute('role', 'status');

        const icon = document.createElement('i');
        icon.className = options?.icon || (
            type === 'success'
                ? 'fas fa-circle-check'
                : type === 'failed'
                    ? 'fas fa-circle-xmark'
                    : type === 'warning'
                        ? 'fas fa-triangle-exclamation'
                        : 'fas fa-circle-info'
        );

        const body = document.createElement('div');
        body.className = 'app-toast-body';

        const title = document.createElement('strong');
        title.textContent = options?.title || 'Informasi';

        const message = document.createElement('span');
        message.textContent = options?.message || '';

        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.className = 'app-toast-close';
        closeBtn.setAttribute('aria-label', 'Tutup notifikasi');
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';

        body.appendChild(title);
        if (message.textContent) body.appendChild(message);
        toast.appendChild(icon);
        toast.appendChild(body);
        toast.appendChild(closeBtn);
        container.appendChild(toast);

        const removeToast = function() {
            toast.classList.add('closing');
            setTimeout(function() {
                toast.remove();
            }, 180);
        };

        closeBtn.addEventListener('click', removeToast);
        setTimeout(removeToast, Number(options?.duration || 6000));
    }

    function showOrderToast(order, context) {
        const status = String(order?.status || '').toUpperCase();
        if (!order || !status || status === 'WAITING_PAYMENT') return;

        const code = order.orderCode || order.refId || '';
        const key = `${context || 'order'}:${code}:${status}`;
        if (shownOrderToastKeys.has(key)) return;
        shownOrderToastKeys.add(key);

        const productName = order.productName || order.buyerSkuCode || (context === 'topup' ? 'Topup Saldo' : 'Produk');
        const amount = typeof order.amount === 'number' ? formatRupiah(order.amount) : '';
        const detail = String(order.message || '').trim();

        if (context === 'topup') {
            if (status === 'SUCCESS') {
                showToast({
                    type: 'success',
                    title: 'Topup saldo berhasil',
                    message: `${amount || 'Saldo'} sudah masuk ke akun kamu.`,
                });
            } else if (status === 'EXPIRED') {
                showToast({
                    type: 'warning',
                    title: 'QRIS topup kedaluwarsa',
                    message: 'Buat pembayaran topup baru untuk melanjutkan.',
                });
            } else if (status === 'CANCELED') {
                showToast({
                    type: 'warning',
                    title: 'Topup dibatalkan',
                    message: detail || 'Pembayaran QRIS dibatalkan.',
                });
            } else if (status === 'FAILED') {
                showToast({
                    type: 'failed',
                    title: 'Topup gagal',
                    message: detail || 'Pembayaran topup belum berhasil.',
                });
            }
            return;
        }

        if (status === 'SUCCESS') {
            showToast({
                type: 'success',
                title: 'Pembelian berhasil',
                message: `${productName}${amount ? ` senilai ${amount}` : ''} berhasil diproses.`,
            });
        } else if (status === 'REFUNDED') {
            showToast({
                type: 'warning',
                title: 'Produk sedang gangguan',
                message: detail || 'Pembelian gagal. Produk ini sedang gangguan dan saldo dikembalikan.',
            });
        } else if (status === 'FAILED') {
            showToast({
                type: 'failed',
                title: 'Produk sedang gangguan',
                message: detail || `${productName} sedang gangguan dan belum bisa diproses.`,
            });
        } else if (status === 'PROCESSING') {
            showToast({
                type: 'info',
                title: 'Pembayaran diterima',
                message: `${productName} sedang diproses.`,
                duration: 5000,
            });
        } else if (status === 'EXPIRED') {
            showToast({
                type: 'warning',
                title: 'QRIS kedaluwarsa',
                message: 'Buat pembayaran ulang untuk membeli produk ini.',
            });
        } else if (status === 'CANCELED') {
            showToast({
                type: 'warning',
                title: 'Pembayaran dibatalkan',
                message: detail || 'Pembayaran QRIS dibatalkan.',
            });
        }
    }

    function escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function getJsPdfCtor() {
        return window.jspdf?.jsPDF || null;
    }

    function getBuyerTransactionCode(item) {
        return [item?.orderCode, item?.refId].filter(Boolean).join(' / ') || '-';
    }

    function getBuyerFriendlyNote(item) {
        const status = String(item?.status || '').toLowerCase();
        const typeLabel = String(item?.typeLabel || '').toLowerCase();
        if (status.includes('sukses')) {
            return typeLabel.includes('topup')
                ? 'Topup saldo berhasil.'
                : 'Transaksi berhasil diproses.';
        }
        if (status.includes('gagal')) {
            return typeLabel.includes('topup')
                ? 'Topup belum berhasil. Silakan buat pembayaran ulang jika masih dibutuhkan.'
                : 'Transaksi belum berhasil. Jika pembayaran sudah diterima, dana akan menjadi saldo akun dan bisa dipakai untuk membeli produk lain.';
        }
        return typeLabel.includes('topup')
            ? 'Topup sedang diproses. Cek status secara berkala.'
            : 'Transaksi sedang diproses. Cek status secara berkala di menu Riwayat.';
    }

    function getBuyerReceiptRows(item, options = {}) {
        const dateTime = item?.createdAt ? formatDateTime(item.createdAt) : item?.date;
        const rows = [
            ['Tanggal & Jam', dateTime || '-'],
            ['Jenis', item?.typeLabel || '-'],
        ];

        if (options.includeStatus) {
            rows.push(['Status', item?.status || '-']);
        }

        rows.push(
            ['Produk', item?.product || '-'],
            ['Nominal', item?.amount || '-'],
            ['Kode Transaksi', getBuyerTransactionCode(item)],
            ['Tujuan', item?.customerNo || '-'],
        );

        if (item?.serialNumber && String(item.status || '').toLowerCase().includes('sukses')) {
            rows.push(['SN/Token', item.serialNumber]);
        }

        rows.push(['Keterangan', getBuyerFriendlyNote(item)]);
        return rows;
    }

    function downloadUserReceiptPdf(item) {
        const JsPDF = getJsPdfCtor();
        if (!JsPDF) return false;

        const code = item.orderCode || item.refId || 'transaksi';
        const rows = getBuyerReceiptRows(item);

        const doc = new JsPDF({ unit: 'pt', format: 'a4' });
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const marginX = 40;
        const contentWidth = pageWidth - (marginX * 2);
        const labelWidth = 140;
        const valueWidth = contentWidth - labelWidth - 14;
        let y = 36;

        const ensureSpace = function(spaceNeeded) {
            if (y + spaceNeeded <= pageHeight - 40) return;
            doc.addPage();
            y = 40;
        };

        doc.setFillColor(44, 62, 80);
        doc.rect(marginX, y, contentWidth, 58, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.text('Nota Transaksi', marginX + 14, y + 24);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.text('1FORCR KUOTA', marginX + 14, y + 42);
        y += 76;

        doc.setTextColor(35, 47, 62);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.text(`Status: ${item.status || 'Proses'}`, marginX, y);
        y += 16;

        doc.setDrawColor(225, 232, 240);
        doc.line(marginX, y, marginX + contentWidth, y);
        y += 14;

        rows.forEach(function(row) {
            const label = String(row[0] || '-');
            const value = String(row[1] || '-');
            const wrappedValue = doc.splitTextToSize(value, valueWidth);
            const rowHeight = Math.max(16, wrappedValue.length * 13) + 4;
            ensureSpace(rowHeight + 10);

            doc.setFont('helvetica', 'bold');
            doc.setFontSize(10);
            doc.setTextColor(100, 116, 139);
            doc.text(label, marginX, y);

            doc.setFont('helvetica', 'normal');
            doc.setTextColor(30, 41, 59);
            doc.text(wrappedValue, marginX + labelWidth, y);

            y += rowHeight;
            doc.setDrawColor(241, 245, 249);
            doc.line(marginX, y - 6, marginX + contentWidth, y - 6);
        });

        ensureSpace(36);
        y += 8;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        doc.setTextColor(71, 85, 105);
        doc.text(`Website: ${receiptWebsiteUrl}`, marginX, y);
        y += 14;
        const adLines = doc.splitTextToSize(receiptAdText, contentWidth);
        doc.text(adLines, marginX, y);

        doc.save(`nota-${code}.pdf`);
        return true;
    }

    function buildUserReceiptHtml(item) {
        const code = getBuyerTransactionCode(item);
        const rows = getBuyerReceiptRows(item);
        const tableRows = rows.map(function(row) {
            return `<tr><td>${escapeHtml(row[0])}</td><td>${escapeHtml(row[1])}</td></tr>`;
        }).join('');

        return `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Nota ${escapeHtml(code)}</title>
  <style>
    body { font-family: Arial, sans-serif; padding: 20px; color: #1f2937; background: #f8fafc; }
    .receipt { max-width: 760px; margin: 0 auto; background: #fff; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; }
    .head { padding: 20px; border-bottom: 1px solid #e5e7eb; }
    .brand { font-size: 22px; font-weight: 800; margin: 0 0 4px; color: #0f172a; }
    .sub { margin: 0; color: #64748b; font-size: 13px; }
    .body { padding: 20px; }
    .status { display:inline-block; padding: 6px 10px; border-radius: 999px; font-weight: 700; margin-bottom: 10px; background:#e2e8f0; color:#334155; }
    table { width: 100%; border-collapse: collapse; margin-top: 6px; }
    td { padding: 8px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
    td:first-child { width: 32%; color: #64748b; }
    .foot { padding: 14px 20px 18px; border-top: 1px solid #e5e7eb; background: #f8fafc; }
    .foot p { margin: 0 0 6px; font-size: 13px; color: #475569; }
    .foot a { color: #1d4ed8; text-decoration: none; }
    @media print { body { background:#fff; padding:0; } .receipt { border: none; } }
  </style>
</head>
<body>
  <div class="receipt">
    <div class="head">
      <h1 class="brand">1FORCR KUOTA</h1>
      <p class="sub">Nota Digital Transaksi</p>
    </div>
    <div class="body">
      <span class="status">${escapeHtml(item.status || 'Proses')}</span>
      <table>
        ${tableRows}
      </table>
    </div>
    <div class="foot">
      <p><strong>Website:</strong> <a href="${escapeHtml(receiptWebsiteUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(receiptWebsiteUrl)}</a></p>
      <p>${escapeHtml(receiptAdText)}</p>
    </div>
  </div>
</body>
</html>`;
    }

    function downloadUserReceipt(item) {
        if (downloadUserReceiptPdf(item)) return;
        const content = buildUserReceiptHtml(item);
        const blob = new Blob([content], { type: 'text/html;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        const code = item.orderCode || item.refId || 'transaksi';
        a.href = url;
        a.download = `nota-${code}.html`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    }

    function showTransactionDetail(item) {
        const overlay = document.createElement('div');
        overlay.className = 'confirm-overlay transaction-detail-overlay';

        const dialog = document.createElement('div');
        dialog.className = 'confirm-dialog transaction-detail-dialog';
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');
        dialog.setAttribute('aria-label', 'Detail transaksi');

        // Status sudah tampil sebagai badge di bawah judul, jadi tidak diulang di daftar rincian.
        const rows = getBuyerReceiptRows(item, { includeStatus: false });

        const header = document.createElement('div');
        header.className = 'transaction-detail-head';
        const title = createTextElement('h3', '', 'Detail Transaksi');
        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.className = 'app-toast-close';
        closeBtn.setAttribute('aria-label', 'Tutup detail');
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        header.appendChild(title);
        header.appendChild(closeBtn);
        dialog.appendChild(header);

        const statusClass = item.status === 'Sukses' ? 'success' : (item.status === 'Gagal' ? 'failed' : 'pending');
        const statusBadge = createTextElement('span', `status ${statusClass}`, item.status || 'Proses');
        dialog.appendChild(statusBadge);

        const grid = document.createElement('div');
        grid.className = 'transaction-detail-grid';
        rows.forEach(function(row) {
            const label = createTextElement('span', '', row[0]);
            const value = createTextElement('strong', '', row[1]);
            grid.appendChild(label);
            grid.appendChild(value);
        });
        dialog.appendChild(grid);

        const actions = document.createElement('div');
        actions.className = 'confirm-actions';
        const receiptBtn = document.createElement('button');
        receiptBtn.type = 'button';
        receiptBtn.className = 'btn-primary';
        receiptBtn.innerHTML = '<i class="fas fa-file-download"></i> Download Nota';
        receiptBtn.addEventListener('click', function() {
            downloadUserReceipt(item);
        });
        const doneBtn = document.createElement('button');
        doneBtn.type = 'button';
        doneBtn.className = 'btn-secondary';
        doneBtn.textContent = 'Tutup';
        actions.appendChild(doneBtn);
        actions.appendChild(receiptBtn);
        dialog.appendChild(actions);

        const cleanup = function() {
            document.removeEventListener('keydown', onEsc);
            overlay.remove();
        };
        const onEsc = function(e) {
            if (e.key === 'Escape') cleanup();
        };

        closeBtn.addEventListener('click', cleanup);
        doneBtn.addEventListener('click', cleanup);
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) cleanup();
        });
        document.addEventListener('keydown', onEsc);
        overlay.appendChild(dialog);
        document.body.appendChild(overlay);
        doneBtn.focus();
    }

    function togglePassword(button) {
        const input = document.getElementById(button.dataset.togglePassword || '');
        if (!input) return;

        const isHidden = input.type === 'password';
        input.type = isHidden ? 'text' : 'password';
        button.setAttribute('aria-label', isHidden ? 'Sembunyikan password' : 'Tampilkan password');
        const icon = button.querySelector('i');
        if (icon) {
            icon.className = isHidden ? 'fas fa-eye-slash' : 'fas fa-eye';
        }
    }

    function updateHistoryPagination(totalRows, totalPages) {
        if (!historyPaginationEl) return;
        historyPaginationEl.hidden = totalRows <= transactionPageSize;
        if (historyPageInfoEl) {
            historyPageInfoEl.textContent = `Halaman ${transactionPage} / ${totalPages}`;
        }
        if (historyPrevPageBtn) {
            historyPrevPageBtn.disabled = transactionPage <= 1;
        }
        if (historyNextPageBtn) {
            historyNextPageBtn.disabled = transactionPage >= totalPages;
        }
    }

    // Filter Riwayat: semua, diproses, berhasil, gagal. Pesanan yang masih
    // berjalan tampil di bagian "Sedang diproses" di atas daftar, jadi tidak
    // diulang di daftarnya.
    const HISTORY_FILTERS = {
        all: { title: 'Semua pesanan', empty: 'Belum ada pesanan. Pesanan pertamamu akan muncul di sini.' },
        process: { title: 'Diproses', empty: 'Tidak ada pesanan yang sedang diproses.' },
        success: { title: 'Berhasil', empty: 'Belum ada pesanan yang berhasil.' },
        failed: { title: 'Gagal', empty: 'Tidak ada pesanan yang gagal.' },
    };

    function getHistoryRowFilter(row) {
        if (row.status === 'Sukses') return 'success';
        if (row.status === 'Gagal') return 'failed';
        return 'process';
    }

    function getOngoingOrderCount() {
        return paymentOrdersCache.filter(function(order) {
            return isOngoingOrderStatus(order?.status);
        }).length;
    }

    function updateHistoryFilterUi() {
        const counts = { all: transactionRowsCache.length + getOngoingOrderCount(), process: getOngoingOrderCount(), success: 0, failed: 0 };
        transactionRowsCache.forEach(function(row) {
            counts[getHistoryRowFilter(row)] += 1;
        });
        if (historyFilterEl) {
            historyFilterEl.querySelectorAll('[data-history-filter]').forEach(function(button) {
                const active = button.dataset.historyFilter === historyFilter;
                button.classList.toggle('active', active);
                button.setAttribute('aria-pressed', active ? 'true' : 'false');
            });
            historyFilterEl.querySelectorAll('[data-history-count]').forEach(function(countEl) {
                const value = counts[countEl.dataset.historyCount];
                countEl.textContent = historyLoadState === 'ready' ? String(value || 0) : '';
            });
        }
        if (historyListTitleEl) historyListTitleEl.textContent = HISTORY_FILTERS[historyFilter].title;
        // Pesanan berjalan hanya relevan untuk "Semua" dan "Diproses".
        if (historyOngoingOrdersSectionEl) {
            const hasOngoing = getOngoingOrderCount() > 0;
            historyOngoingOrdersSectionEl.hidden = !hasOngoing || (historyFilter !== 'all' && historyFilter !== 'process');
        }
    }

    function appendHistoryStateRow(message, action) {
        const row = document.createElement('tr');
        row.className = 'tx-state-row';
        const cell = document.createElement('td');
        cell.colSpan = 5;
        cell.className = 'tx-empty';
        cell.appendChild(createTextElement('p', '', message));
        if (action) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = action.primary ? 'btn-primary compact-action' : 'text-button';
            button.textContent = action.label;
            button.addEventListener('click', action.onClick);
            cell.appendChild(button);
        }
        row.appendChild(cell);
        tbody.appendChild(row);
    }

    function renderTransactionPage() {
        tbody.innerHTML = '';
        updateHistoryFilterUi();
        const rows = historyFilter === 'all'
            ? transactionRowsCache
            : transactionRowsCache.filter(function(row) { return getHistoryRowFilter(row) === historyFilter; });
        const totalRows = rows.length;
        const totalPages = Math.max(1, Math.ceil(totalRows / transactionPageSize));
        transactionPage = Math.min(Math.max(1, transactionPage), totalPages);
        updateHistoryPagination(totalRows, totalPages);

        if (!totalRows) {
            if (historyLoadState === 'loading') {
                appendHistoryStateRow('Memuat riwayat...');
            } else if (historyLoadState === 'failed') {
                appendHistoryStateRow('Riwayat gagal dimuat. Periksa koneksi internet, lalu muat ulang.', {
                    label: 'Muat ulang riwayat',
                    onClick: function() { void loadUserTransactions(); },
                });
            } else if (historyFilter === 'process' && getOngoingOrderCount()) {
                appendHistoryStateRow('Pesanan yang sedang diproses ada di atas.');
            } else {
                appendHistoryStateRow(HISTORY_FILTERS[historyFilter].empty, historyFilter === 'all'
                    ? { label: 'Mulai belanja', primary: true, onClick: function() { showView('buyView'); } }
                    : null);
            }
            return;
        }

        const startIndex = (transactionPage - 1) * transactionPageSize;
        const visibleTransactions = rows.slice(startIndex, startIndex + transactionPageSize);

        visibleTransactions.forEach(function(t) {
            const filterKey = getHistoryRowFilter(t);
            const statusClass = filterKey === 'success' ? 'success' : (filterKey === 'failed' ? 'failed' : 'pending');
            const row = document.createElement('tr');
            row.className = 'tx-row';
            // Seluruh baris bisa diketuk untuk melihat detail. Tombol Detail
            // tetap ada supaya bisa dijangkau dengan keyboard.
            row.addEventListener('click', function(event) {
                if (event.target.closest('button')) return;
                showTransactionDetail(t);
            });

            const productCell = document.createElement('td');
            productCell.className = 'tx-product';
            productCell.appendChild(createTextElement('strong', '', t.product));
            const meta = [t.customerNo, t.typeLabel === 'Topup Saldo' ? 'Saldo PPOB' : ''].filter(Boolean).join(' · ');
            if (meta) productCell.appendChild(createTextElement('small', '', meta));
            row.appendChild(productCell);

            row.appendChild(createTextElement('td', 'tx-date', formatDateTime(t.createdAt || t.date)));
            row.appendChild(createTextElement('td', 'tx-amount num', t.amount));

            const statusCell = document.createElement('td');
            statusCell.className = 'tx-status';
            statusCell.appendChild(createTextElement('span', `status ${statusClass}`, t.status === 'Proses' ? 'Diproses' : (t.status === 'Sukses' ? 'Berhasil' : t.status)));
            row.appendChild(statusCell);

            const actionCell = document.createElement('td');
            actionCell.className = 'tx-action';
            const detailBtn = document.createElement('button');
            detailBtn.type = 'button';
            detailBtn.className = 'text-button';
            detailBtn.textContent = 'Detail';
            detailBtn.setAttribute('aria-label', `Detail ${t.product}`);
            detailBtn.addEventListener('click', function() {
                showTransactionDetail(t);
            });
            actionCell.appendChild(detailBtn);
            row.appendChild(actionCell);
            tbody.appendChild(row);
        });
    }

    function renderTransactions(transactions) {
        transactionRowsCache = Array.isArray(transactions) ? transactions : [];
        transactionPage = 1;
        renderTransactionPage();
        renderDashboardRecentPurchases();
    }

    function renderDashboardRecentPurchases() {
        if (!dashboardRecentPurchasesSectionEl || !dashboardRecentPurchasesListEl) return;

        const seenSkus = new Set();
        const recentPurchases = transactionRowsCache
            .filter(function(item) {
                const sku = String(item?.buyerSkuCode || '').trim();
                return item?.typeLabel === 'Pembelian Produk'
                    && item?.status === 'Sukses'
                    && sku
                    && !seenSkus.has(sku)
                    && seenSkus.add(sku);
            })
            .slice(0, 3);

        dashboardRecentPurchasesSectionEl.hidden = !recentPurchases.length;
        dashboardRecentPurchasesListEl.innerHTML = '';
        renderDashboardPopularProducts();
        if (!recentPurchases.length) return;

        recentPurchases.forEach(function(item) {
            const sku = String(item.buyerSkuCode || '').trim();
            const product = findProductBySku(sku);
            const card = document.createElement('article');
            card.className = 'dashboard-recent-purchase-card';

            const icon = document.createElement('span');
            icon.className = 'dashboard-recent-purchase-icon';
            appendBrandLogoOrIcon(icon, product || {
                brand: '',
                category: '',
                product_name: item.product,
            }, getProductIconClass(product || { product_name: item.product }));

            const content = document.createElement('div');
            content.className = 'dashboard-recent-purchase-content';
            content.appendChild(createTextElement('strong', '', item.product || 'Produk'));
            content.appendChild(createTextElement(
                'small',
                '',
                [item.customerNo, item.amount].filter(Boolean).join(' · ')
            ));

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn-secondary compact-action dashboard-reorder-button';
            button.dataset.reorderSku = sku;
            button.dataset.reorderCustomerNo = item.customerNo || '';
            button.disabled = !product;
            button.title = product ? 'Beli produk ini lagi ke nomor yang sama' : 'Produk sudah tidak tersedia';
            button.textContent = product ? 'Beli lagi' : 'Tidak tersedia';
            button.setAttribute('aria-label', product
                ? `Beli lagi ${item.product || 'produk ini'}${item.customerNo ? ` ke ${item.customerNo}` : ''}`
                : `${item.product || 'Produk'} tidak tersedia`);

            card.appendChild(icon);
            card.appendChild(content);
            card.appendChild(button);
            dashboardRecentPurchasesListEl.appendChild(card);
        });
    }

    renderTransactions([]);

    const BALANCE_NOTE_PPOB = 'Untuk pulsa, kuota, token PLN, dan top up game.';
    const BALANCE_NOTE_VPN = 'Khusus untuk beli dan perpanjang akun VPN.';
    // Saldo PPOB terakhir yang termuat, dipakai pilihan bayar di checkout.
    // null berarti belum atau gagal dimuat.
    let currentPpobBalance = null;

    // Saldo yang belum atau gagal dimuat tidak ditulis "Rp 0", karena user akan
    // mengira saldonya memang kosong.
    function setBalanceFailed() {
        if (!balanceValueEl) return;
        balanceValueEl.textContent = 'Belum termuat';
        balanceValueEl.classList.add('is-pending');
        if (balanceNoteEl) balanceNoteEl.textContent = 'Saldo gagal dimuat. Periksa koneksi internet, lalu muat ulang.';
        if (balanceRetryBtn) balanceRetryBtn.hidden = false;
        currentPpobBalance = null;
        renderPaymentMethodFilter();
    }

    function setBalance(amount) {
        if (!balanceValueEl) return;
        const topupPpobBalanceEl = document.getElementById('topupPpobBalanceText');
        const safeAmount = typeof amount === 'number' && !Number.isNaN(amount) ? Math.max(0, amount) : 0;
        const formatted = `Rp ${safeAmount.toLocaleString('id-ID')}`;
        balanceValueEl.textContent = formatted;
        balanceValueEl.classList.remove('is-pending');
        if (balanceNoteEl) {
            balanceNoteEl.textContent = safeAmount > 0
                ? BALANCE_NOTE_PPOB
                : 'Masih kosong. Isi dulu, atau bayar langsung pakai QRIS saat membeli.';
        }
        if (balanceRetryBtn) balanceRetryBtn.hidden = true;
        if (accountBalanceInfoEl) accountBalanceInfoEl.textContent = formatted;
        if (topupPpobBalanceEl) topupPpobBalanceEl.textContent = formatted;
        currentPpobBalance = safeAmount;
        renderPaymentMethodFilter();
    }

    function setDashboardVpnBalance(amount) {
        if (!dashboardVpnBalanceEl) return;
        const failed = amount === null;
        dashboardVpnBalanceEl.textContent = failed ? 'Belum termuat' : formatRupiah(Math.max(0, Number(amount) || 0));
        dashboardVpnBalanceEl.classList.toggle('is-pending', failed);
        if (dashboardVpnBalanceNoteEl) {
            dashboardVpnBalanceNoteEl.textContent = failed
                ? 'Saldo VPN gagal dimuat. Buka menu VPN untuk mencoba lagi.'
                : BALANCE_NOTE_VPN;
        }
        if (accountVpnBalanceInfoEl) accountVpnBalanceInfoEl.textContent = failed ? 'Belum termuat' : formatRupiah(Math.max(0, Number(amount) || 0));
    }

    async function loadWalletBalance() {
        if (balanceValueEl) {
            balanceValueEl.textContent = 'Memuat...';
            balanceValueEl.classList.add('is-pending');
        }
        if (balanceRetryBtn) balanceRetryBtn.hidden = true;
        try {
            const response = await fetch('/api/wallet', { credentials: 'same-origin' });
            if (!response.ok) throw new Error('Gagal memuat saldo');
            const result = await response.json();
            const amount = Number(result?.data?.balance || 0);
            setBalance(amount);
        } catch (_err) {
            setBalanceFailed();
        }
    }

    async function loadAccountProfile() {
        try {
            const response = await fetch('/api/user/profile', { credentials: 'same-origin' });
            if (!response.ok) throw new Error('Gagal memuat profil akun');
            const result = await response.json();
            const profile = result?.data || {};

            if (accountEmailEl) accountEmailEl.textContent = profile.email || userEmail;
            if (accountUsernameEl) accountUsernameEl.textContent = profile.username || localUsername || '-';
            if (accountRoleEl) accountRoleEl.textContent = String(profile.role || localRole || '-').toUpperCase();
            if (accountCreatedAtEl) accountCreatedAtEl.textContent = formatDateTime(profile.createdAt);
            if (accountTransactionCountEl) accountTransactionCountEl.textContent = String(profile.totalTransactions || 0);
            if (accountPaymentCountEl) accountPaymentCountEl.textContent = String(profile.totalPaymentOrders || 0);

            if (typeof profile.balance === 'number') {
                setBalance(profile.balance);
            }
        } catch (_error) {
            if (accountCreatedAtEl && accountCreatedAtEl.textContent.trim() === '') {
                accountCreatedAtEl.textContent = '-';
            }
        }
    }

    function setPasswordChangePanelVisible(visible) {
        if (!passwordChangePanelEl) return;
        passwordChangePanelEl.hidden = !visible;
        if (togglePasswordChangeBtn) {
            togglePasswordChangeBtn.textContent = visible ? 'Batal ganti password' : 'Ganti password';
            togglePasswordChangeBtn.setAttribute('aria-expanded', visible ? 'true' : 'false');
        }
        if (visible) {
            currentPasswordInputEl?.focus();
        }
    }

    function applyTopupMinAmountUi(value) {
        const safeMin = Number.isFinite(value) && value > 0 ? Math.trunc(value) : 10000;
        topupMinAmount = safeMin;

        if (topupAmountInputEl) {
            topupAmountInputEl.min = String(safeMin);
            // Contoh nominal sudah ada di tombol cepat di atasnya, jadi isian ini
            // cukup menawarkan nominal lain. Batas minimal ditulis di bawahnya.
            topupAmountInputEl.placeholder = 'Atau ketik nominal lain';
        }
        // Nominal cepat di bawah batas minimal dari admin disembunyikan.
        document.querySelectorAll('[data-quick-topup], [data-topup-ppob-amount]').forEach(function(chip) {
            const value = Number(chip.dataset.quickTopup || chip.dataset.topupPpobAmount || 0);
            chip.hidden = value < safeMin;
        });
        if (topupMinInfoEl) {
            topupMinInfoEl.textContent = `Minimal Rp ${safeMin.toLocaleString('id-ID')}`;
        }
    }

    function getOperationsMessage(fallback) {
        return String(operationsConfig.message || fallback || 'Layanan transaksi sedang maintenance. Coba lagi nanti.').trim();
    }

    function normalizeCutOffSetting(cutOff = {}) {
        return {
            enabled: cutOff.enabled !== false,
            startTime: /^\d{2}:\d{2}$/.test(String(cutOff.startTime || '')) ? String(cutOff.startTime) : '23:30',
            endTime: /^\d{2}:\d{2}$/.test(String(cutOff.endTime || '')) ? String(cutOff.endTime) : '00:30',
            timeZone: String(cutOff.timeZone || 'Asia/Jakarta').trim() || 'Asia/Jakarta',
            message: String(cutOff.message || '').trim(),
            activeMessage: String(cutOff.activeMessage || '').trim(),
            isActive: Boolean(cutOff.isActive),
        };
    }

    function cutOffTimeToMinutes(value) {
        const safeValue = /^\d{2}:\d{2}$/.test(String(value || '')) ? String(value) : '00:00';
        const parts = safeValue.split(':').map(function(part) {
            return Number(part);
        });
        return ((parts[0] || 0) * 60) + (parts[1] || 0);
    }

    function getCutOffCurrentMinutes(timeZone) {
        try {
            const parts = new Intl.DateTimeFormat('en-US', {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            }).formatToParts(new Date());
            const hour = Number(parts.find(function(part) { return part.type === 'hour'; })?.value || 0);
            const minute = Number(parts.find(function(part) { return part.type === 'minute'; })?.value || 0);
            return ((hour % 24) * 60) + minute;
        } catch (_error) {
            const now = new Date();
            return (now.getHours() * 60) + now.getMinutes();
        }
    }

    function isDailyCutOffActive(cutOff = operationsConfig.cutOff) {
        const safeCutOff = normalizeCutOffSetting(cutOff);
        if (!safeCutOff.enabled) return false;
        const startMinute = cutOffTimeToMinutes(safeCutOff.startTime);
        const endMinute = cutOffTimeToMinutes(safeCutOff.endTime);
        if (startMinute === endMinute) return false;
        const currentMinute = getCutOffCurrentMinutes(safeCutOff.timeZone);
        if (startMinute < endMinute) {
            return currentMinute >= startMinute && currentMinute < endMinute;
        }
        return currentMinute >= startMinute || currentMinute < endMinute;
    }

    function getCutOffMessage() {
        const cutOff = normalizeCutOffSetting(operationsConfig.cutOff);
        return cutOff.activeMessage
            || cutOff.message
            || `Sedang maintenance harian/cut off. Transaksi kembali normal jam ${cutOff.endTime}.`;
    }

    function renderDashboardServiceStatus() {
        if (!dashboardServiceStatusCardEl) return;

        const cutOffActive = isDailyCutOffActive();
        const productEnabled = operationsConfig.productPurchaseEnabled !== false;
        const topupEnabled = operationsConfig.topupEnabled !== false;
        const qrisEnabled = operationsConfig.qrisEnabled !== false;
        let statusKey = 'online';
        let statusLabel = 'Online';
        let statusIcon = 'fa-circle-check';

        if (cutOffActive) {
            statusKey = 'cutoff';
            statusLabel = 'Cut off';
            statusIcon = 'fa-clock';
        } else if (!productEnabled && !topupEnabled) {
            statusKey = 'maintenance';
            statusLabel = 'Maintenance';
            statusIcon = 'fa-screwdriver-wrench';
        } else if (!productEnabled || !topupEnabled || !qrisEnabled) {
            statusKey = 'partial';
            statusLabel = 'Maintenance';
            statusIcon = 'fa-screwdriver-wrench';
        }

        dashboardServiceStatusCardEl.dataset.status = statusKey;
        // Saat layanan normal tidak ada yang perlu diberitahukan, jadi penanda ini
        // hanya muncul ketika sedang cut off atau maintenance.
        dashboardServiceStatusCardEl.hidden = statusKey === 'online';
        const iconEl = dashboardServiceStatusIconEl?.querySelector('i');
        if (iconEl) iconEl.className = `fas ${statusIcon}`;
        if (dashboardServiceStatusLabelEl) dashboardServiceStatusLabelEl.textContent = statusLabel;
        if (dashboardCutoffTickerEl && dashboardCutoffTickerTextEl) {
            const cutOff = normalizeCutOffSetting(operationsConfig.cutOff);
            let detail = '';
            if (cutOffActive) {
                detail = cutOff.endTime
                    ? `Buka lagi pukul ${cutOff.endTime}`
                    : 'Pembelian sedang ditutup sementara';
            } else if (statusKey !== 'online') {
                detail = String(operationsConfig.message || '').trim()
                    || 'Sebagian layanan sedang ditutup sementara';
            }

            dashboardCutoffTickerEl.hidden = !detail;
            dashboardCutoffTickerTextEl.textContent = detail;
            // Teks panjang dipangkas di layar, jadi kalimat utuhnya disimpan di
            // tooltip supaya tetap bisa dibaca.
            dashboardCutoffTickerEl.title = detail;
        }
    }

    function isProductPurchaseBlocked() {
        return operationsConfig.productPurchaseEnabled === false || isDailyCutOffActive();
    }

    function getProductPurchaseBlockedMessage() {
        if (operationsConfig.productPurchaseEnabled === false) {
            return getOperationsMessage('Pembelian produk sedang maintenance. Coba lagi nanti.');
        }
        return getCutOffMessage();
    }

    function applyOperationsSetting(source) {
        const cutOff = normalizeCutOffSetting(source?.cutOff || operationsConfig.cutOff);
        operationsConfig = {
            productPurchaseEnabled: source?.productPurchaseEnabled !== false,
            topupEnabled: source?.topupEnabled !== false,
            qrisEnabled: source?.qrisEnabled !== false,
            gameUsernameCheckEnabled: source?.gameUsernameCheckEnabled !== false,
            message: String(source?.message || '').trim(),
            cutOff,
        };

        const topupDisabled = operationsConfig.topupEnabled === false || operationsConfig.qrisEnabled === false;
        [document.getElementById('topupBalance'), submitTopupBtn].forEach(function(button) {
            if (!button) return;
            button.disabled = topupDisabled;
            button.title = operationsConfig.qrisEnabled === false
                ? qrisUnavailableMessage
                : (topupDisabled ? getOperationsMessage('Topup saldo sedang maintenance.') : '');
        });

        if (operationsConfig.qrisEnabled === false) {
            setTopupStatus(qrisUnavailableMessage, 'failed');
        } else if (topupDisabled) {
            setTopupStatus(getOperationsMessage('Topup saldo sedang maintenance. Coba lagi nanti.'), 'failed');
        } else if (
            topupStatusEl
            && topupStatusEl.classList.contains('failed')
            && (
                topupStatusEl.textContent.toLowerCase().includes('maintenance')
                || topupStatusEl.textContent.toLowerCase().includes('qris')
            )
        ) {
            setTopupStatus('');
        }

        syncPaymentMethodUi();
        applyCheckoutIdentityFieldMode(selectedCheckoutProduct);
        renderDashboardServiceStatus();
        updateQuickServices(quickServiceProductsCache);
        if (prepaidProducts.length) {
            renderProductGrid();
            renderDashboardFavorites();
        }
    }

    function applyPaymentGatewayConfig(source) {
        const previousKey = midtransSnapScriptKey;
        const nextMidtrans = source?.midtrans || paymentGatewayConfig.midtrans || null;
        paymentGatewayConfig = {
            provider: String(source?.provider || 'autogopay').toLowerCase(),
            midtrans: nextMidtrans,
        };
        const config = paymentGatewayConfig.midtrans || {};
        midtransSnapScriptKey = `${config.clientKey || ''}|${config.snapJsUrl || ''}`;
        if (previousKey && previousKey !== midtransSnapScriptKey && !window.snap) {
            midtransSnapScriptPromise = null;
        }
        if (paymentGatewayConfig.provider === 'midtrans' && config.clientKey && config.snapJsUrl) {
            setTimeout(function() {
                ensureMidtransSnapScript().catch(function() {});
            }, 0);
        }
    }

    function isMidtransOrder(order) {
        return String(order?.paymentProvider || '').toUpperCase() === 'MIDTRANS_SNAP'
            || Boolean(order?.snapToken);
    }

    function getSnapContainer(type) {
        return type === 'topup' ? topupSnapContainerEl : checkoutSnapContainerEl;
    }

    function getSnapSheet(type) {
        return type === 'topup' ? topupSnapSheetEl : checkoutSnapSheetEl;
    }

    function syncSnapSheetBodyState() {
        const sheetOpen = [checkoutSnapSheetEl, topupSnapSheetEl].some(function(sheet) {
            return sheet && !sheet.hidden;
        });
        document.body.classList.toggle('snap-sheet-open', sheetOpen);
    }

    function setSnapSheetVisible(type, visible) {
        const sheet = getSnapSheet(type);
        if (!sheet) return;
        sheet.hidden = !visible;
        sheet.setAttribute('aria-hidden', String(!visible));
        syncSnapSheetBodyState();
    }

    function shouldEmbedSnapPayment() {
        return Boolean(window.PPOB_IS_NATIVE)
            || window.matchMedia('(max-width: 768px)').matches;
    }

    function isSnapEmbedOpen(type, snapToken) {
        const container = getSnapContainer(type);
        const sheet = getSnapSheet(type);
        return Boolean(
            container
            && sheet
            && !sheet.hidden
            && !container.hidden
            && embeddedSnapTokens[type] === snapToken
            && container.querySelector('iframe#snap-midtrans')
        );
    }

    function setSnapPaymentButtonVisible(type, visible) {
        const button = type === 'topup' ? openTopupSnapPaymentBtn : openSnapPaymentBtn;
        if (button) button.hidden = !visible;
    }

    function closeSnapPaymentSheet(type) {
        try {
            if (window.snap && typeof window.snap.hide === 'function') {
                window.snap.hide();
            }
        } catch (_error) {
            // Container tetap ditutup jika runtime Midtrans sudah selesai lebih dulu.
        }
        activeMidtransEmbedRequest = '';
        resetSnapContainer(type);
        setSnapPaymentButtonVisible(type, true);
        if (type === 'topup') {
            setTopupStatus('Pembayaran belum selesai. Tekan Buka pembayaran untuk melanjutkan.');
        } else {
            setCheckoutStatus('Pembayaran belum selesai. Tekan Buka pembayaran untuk melanjutkan.');
        }
    }

    function resetSnapContainer(type) {
        const container = getSnapContainer(type);
        embeddedSnapTokens[type] = '';
        embeddingSnapTokens[type] = '';
        setSnapSheetVisible(type, false);
        if (!container) return;
        container.hidden = true;
        container.innerHTML = '';
    }

    function resetMidtransSnapRuntime() {
        if (!window.snap || resettingMidtransSnap) return;

        const config = paymentGatewayConfig.midtrans || {};
        resettingMidtransSnap = true;
        try {
            if (typeof window.snap.reset === 'function') {
                window.snap.reset();
            }
            if (config.clientKey && typeof window.snap.init === 'function') {
                window.snap.init(config.clientKey);
            }
            embeddedSnapTokens.checkout = '';
            embeddedSnapTokens.topup = '';
            embeddingSnapTokens.checkout = '';
            embeddingSnapTokens.topup = '';
        } catch (error) {
            console.warn('Gagal reset pembayaran Midtrans:', error);
        } finally {
            resettingMidtransSnap = false;
        }
    }

    function ensureMidtransSnapScript() {
        const config = paymentGatewayConfig.midtrans || {};
        if (window.snap) return Promise.resolve(window.snap);
        if (midtransSnapScriptPromise) return midtransSnapScriptPromise;
        if (!config.clientKey || !config.snapJsUrl) {
            const missing = [];
            if (!config.clientKey) missing.push('Client Key');
            if (!config.snapJsUrl) missing.push('Snap JS URL');
            return Promise.reject(new Error(`Konfigurasi pembayaran belum lengkap: ${missing.join(', ')}`));
        }

        midtransSnapScriptPromise = new Promise(function(resolve, reject) {
            const script = document.createElement('script');
            script.src = config.snapJsUrl;
            script.dataset.clientKey = config.clientKey;
            script.async = true;
            script.onload = function() {
                if (window.snap) resolve(window.snap);
                else reject(new Error('Pembayaran gagal dimuat'));
            };
            script.onerror = function() {
                reject(new Error('Gagal memuat pembayaran'));
            };
            document.head.appendChild(script);
        });

        return midtransSnapScriptPromise;
    }

    async function openSnapPayment(order, type, options = {}) {
        if (!order?.snapToken) {
            throw new Error('Token pembayaran tidak tersedia');
        }
        const container = getSnapContainer(type);
        if (!container) {
            throw new Error('Container pembayaran tidak tersedia');
        }
        const force = Boolean(options.force);
        let embedPayment = false;
        if (embeddingSnapTokens[type] === order.snapToken) {
            if (force) {
                embeddingSnapTokens[type] = '';
                if (activeMidtransEmbedRequest === `${type}:${order.snapToken}`) {
                    activeMidtransEmbedRequest = '';
                }
            } else {
                if (type === 'topup') setTopupStatus('Panel pembayaran sedang terbuka. Selesaikan pembayaran terlebih dahulu.');
                else setCheckoutStatus('Panel pembayaran sedang terbuka. Selesaikan pembayaran terlebih dahulu.');
                return;
            }
        }

        const snapRequestKey = `${type}:${order.snapToken}`;
        if (!force && activeMidtransEmbedRequest === snapRequestKey) {
            if (type === 'topup') setTopupStatus('Menyiapkan pembayaran...');
            else setCheckoutStatus('Menyiapkan pembayaran...');
            return;
        }

        activeMidtransEmbedRequest = snapRequestKey;

        const clearPopupState = function() {
            if (activeMidtransEmbedRequest === snapRequestKey) {
                activeMidtransEmbedRequest = '';
            }
            if (embeddingSnapTokens[type] === order.snapToken) {
                embeddingSnapTokens[type] = '';
            }
            if (embeddedSnapTokens[type] === order.snapToken) {
                embeddedSnapTokens[type] = '';
            }
            if (embedPayment) {
                setTimeout(function() {
                    resetSnapContainer(type);
                    setSnapPaymentButtonVisible(type, true);
                }, 0);
            }
        };

        const refreshAfterSnapCallback = function(showToast) {
            refreshSinglePaymentOrder(order.orderCode, { showToast: Boolean(showToast) })
                .then(function(data) {
                    const nextStatus = String(data?.order?.status || '');
                    if (!isFinalOrderStatus(nextStatus)) {
                        pollPaymentOrder(order.orderCode, type).catch(function() {});
                    }
                })
                .catch(function() {});
        };

        try {
            if (!paymentGatewayConfig.midtrans?.clientKey) {
                await loadPublicSettings();
            }
            const snap = await ensureMidtransSnapScript();
            resetMidtransSnapRuntime();
            embedPayment = shouldEmbedSnapPayment() && typeof snap.embed === 'function';
            embeddingSnapTokens[type] = order.snapToken;
            embeddedSnapTokens[type] = order.snapToken;
            container.hidden = true;
            container.innerHTML = '';
            if (type === 'topup') {
                setTopupStatus(embedPayment
                    ? 'Panel pembayaran siap. Pilih metode pembayaran lalu selesaikan transaksi.'
                    : 'Jendela pembayaran sudah dibuka. Pilih QRIS lalu selesaikan pembayaran.');
            } else {
                setCheckoutStatus(embedPayment
                    ? 'Panel pembayaran siap. Pilih metode pembayaran lalu selesaikan transaksi.'
                    : 'Jendela pembayaran sudah dibuka. Pilih QRIS lalu selesaikan pembayaran.');
            }

            const snapOptions = {
                onSuccess: function() {
                    clearPopupState();
                    if (type === 'topup') setTopupStatus('Pembayaran diterima. Memperbarui saldo...', 'success');
                    else setCheckoutStatus('Pembayaran diterima. Produk sedang diproses...', 'success');
                    refreshAfterSnapCallback(true);
                },
                onPending: function() {
                    if (embedPayment) clearPopupState();
                    refreshAfterSnapCallback(true);
                },
                onError: function() {
                    clearPopupState();
                    if (type === 'topup') setTopupStatus('Pembayaran gagal atau dibatalkan.', 'failed');
                    else setCheckoutStatus('Pembayaran gagal atau dibatalkan.', 'failed');
                    refreshAfterSnapCallback(true);
                },
                onClose: function() {
                    clearPopupState();
                    if (type === 'topup') setTopupStatus('Pembayaran belum selesai. Kamu bisa buka pembayaran lagi.', '');
                    else setCheckoutStatus('Pembayaran belum selesai. Kamu bisa buka pembayaran lagi.', '');
                    refreshAfterSnapCallback(false);
                },
            };

            if (embedPayment) {
                container.hidden = false;
                setSnapSheetVisible(type, true);
                setSnapPaymentButtonVisible(type, false);
                snap.embed(order.snapToken, {
                    ...snapOptions,
                    embedId: container.id,
                });
            } else {
                snap.pay(order.snapToken, snapOptions);
            }
            if (type === 'checkout') {
                keepCheckoutPaymentInView();
            }
            if (activeMidtransEmbedRequest === snapRequestKey) {
                activeMidtransEmbedRequest = '';
            }
        } catch (error) {
            if (activeMidtransEmbedRequest === snapRequestKey) {
                activeMidtransEmbedRequest = '';
            }
            embeddedSnapTokens[type] = '';
            embeddingSnapTokens[type] = '';
            resetSnapContainer(type);
            throw error;
        }
    }

    function maybeOpenSnapPayment(order, type, options = {}) {
        if (!isMidtransOrder(order) || !order?.snapToken) return;
        openSnapPayment(order, type, options).catch(function(error) {
            if (type === 'topup') setTopupStatus(error.message, 'failed');
            else setCheckoutStatus(error.message, 'failed');
        });
    }

    async function openCheckoutPaymentWindow(order) {
        if (!isMidtransOrder(order) || !order?.snapToken || isFinalOrderStatus(order.status)) return false;
        try {
            await openSnapPayment(order, 'checkout', { force: true });
            requestCheckoutPaymentScroll();
            return true;
        } catch (error) {
            setCheckoutStatus(`Pembayaran belum terbuka: ${error.message}. Klik Buka pembayaran untuk mencoba lagi.`, 'failed');
            return false;
        }
    }

    async function openTopupPaymentWindow(order) {
        if (!isMidtransOrder(order) || !order?.snapToken || isFinalOrderStatus(order.status)) return false;
        try {
            await openSnapPayment(order, 'topup', { force: true });
            return true;
        } catch (error) {
            setTopupStatus(`Pembayaran belum terbuka: ${error.message}. Klik Buka pembayaran untuk mencoba lagi.`, 'failed');
            return false;
        }
    }

    function applyCustomerServiceWhatsapp(number) {
        const normalized = String(number || '').trim();
        csWhatsappNumber = normalized;

        if (csWhatsappNumberTextEl) {
            csWhatsappNumberTextEl.textContent = normalized || '-';
        }
        if (csWhatsappStatusTextEl) {
            csWhatsappStatusTextEl.textContent = normalized ? 'Tersedia' : 'Belum tersedia';
        }
        if (openCsWhatsappBtn) {
            openCsWhatsappBtn.disabled = !normalized;
        }
    }

    function normalizeUserPromoItem(item) {
        const source = item && typeof item === 'object' ? item : {};
        const originalPrice = Number(source.originalPrice || 0);
        const finalPrice = Number(source.finalPrice || 0);
        const durationHours = Number(source.durationHours || 0);
        return {
            enabled: source.enabled !== false,
            title: String(source.title || '').trim(),
            subtitle: String(source.subtitle || '').trim(),
            sku: String(source.sku || '').trim(),
            originalPrice: Number.isFinite(originalPrice) && originalPrice > 0 ? Math.trunc(originalPrice) : null,
            finalPrice: Number.isFinite(finalPrice) && finalPrice > 0 ? Math.trunc(finalPrice) : null,
            durationHours: Number.isFinite(durationHours) && durationHours > 0 ? Math.trunc(durationHours) : null,
            expiresAt: source.expiresAt ? String(source.expiresAt) : null,
            isExpired: Boolean(source.isExpired),
            isActive: Boolean(source.isActive),
        };
    }

    function applyUserPromoBannerSetting(value) {
        const source = value && typeof value === 'object' ? value : {};
        const rawItems = Array.isArray(source.items)
            ? source.items
            : (source.sku || source.title || source.subtitle ? [source] : []);
        const items = rawItems
            .map(normalizeUserPromoItem)
            .filter(function(item) {
                return item.sku || item.title || item.subtitle || item.originalPrice || item.finalPrice;
            });
        const firstItem = items[0] || normalizeUserPromoItem(source);
        const activeCount = items.filter(function(item) {
            return item.isActive || (source.enabled !== false && item.enabled && !item.isExpired);
        }).length;
        userPromoBannerConfig = {
            enabled: Boolean(source.enabled),
            title: firstItem.title,
            subtitle: firstItem.subtitle,
            sku: firstItem.sku,
            originalPrice: firstItem.originalPrice,
            finalPrice: firstItem.finalPrice,
            durationHours: firstItem.durationHours,
            expiresAt: firstItem.expiresAt,
            isExpired: Boolean(firstItem.isExpired),
            isActive: activeCount > 0,
            activeCount,
            items,
        };
        currentPromoIndex = 0;
    }

    async function loadPublicSettings() {
        try {
            const response = await fetch('/api/settings/public', {
                cache: 'no-store',
                credentials: 'same-origin',
            });
            if (!response.ok) throw new Error('Gagal memuat pengaturan');
            const result = await response.json();
            const minFromApi = Number(result?.data?.topupMinAmount || 0);
            const csWhatsappFromApi = String(result?.data?.csWhatsappNumber || '');
            applyUserPromoBannerSetting(result?.data?.userPromoBanner || null);
            applyTopupMinAmountUi(minFromApi);
            applyOperationsSetting(result?.data?.operations || null);
            applyPaymentGatewayConfig(result?.data?.paymentGateway || null);
            applyCustomerServiceWhatsapp(csWhatsappFromApi);
            if (!csWhatsappFromApi) {
                loadCustomerServiceContact().catch(function() {});
            }
            refreshPromoPriceViews();
        } catch (_error) {
            applyTopupMinAmountUi(topupMinAmount);
            applyOperationsSetting(operationsConfig);
            applyPaymentGatewayConfig(paymentGatewayConfig);
            applyCustomerServiceWhatsapp(csWhatsappNumber);
            applyUserPromoBannerSetting(null);
            refreshPromoPriceViews();
        }
    }

    function renderDashboardAnnouncements(items) {
        if (!dashboardAnnouncementsSectionEl || !dashboardAnnouncementListEl) return;
        const announcements = Array.isArray(items) ? items.filter(Boolean).slice(0, 5) : [];
        dashboardAnnouncementListEl.innerHTML = '';
        if (!announcements.length) {
            dashboardAnnouncementsSectionEl.hidden = true;
            return;
        }

        // Pengumuman yang sudah ditutup user tidak ditampilkan lagi. Kuncinya memuat
        // updatedAt, jadi kalau admin mengubah isinya, pengumuman itu muncul kembali.
        const visible = announcements.filter(function(item) {
            return !isAnnouncementDismissed(item);
        });

        dashboardAnnouncementsSectionEl.hidden = visible.length === 0;
        if (!visible.length) return;

        visible.forEach(function(item) {
            dashboardAnnouncementListEl.appendChild(createAnnouncementCard(item));
        });
    }

    function getAnnouncementKey(item) {
        return `${String(item?.id || '')}:${String(item?.updatedAt || item?.createdAt || '')}`;
    }

    function getDismissedAnnouncements() {
        try {
            const raw = window.localStorage.getItem(ANNOUNCEMENT_DISMISS_KEY);
            const parsed = raw ? JSON.parse(raw) : [];
            return Array.isArray(parsed) ? parsed : [];
        } catch (_error) {
            return [];
        }
    }

    function isAnnouncementDismissed(item) {
        return getDismissedAnnouncements().includes(getAnnouncementKey(item));
    }

    function dismissAnnouncement(item) {
        try {
            const dismissed = getDismissedAnnouncements();
            dismissed.push(getAnnouncementKey(item));
            // Simpan 30 terakhir saja supaya tidak menumpuk di penyimpanan browser.
            window.localStorage.setItem(
                ANNOUNCEMENT_DISMISS_KEY,
                JSON.stringify(dismissed.slice(-30))
            );
        } catch (_error) {
            // Kalau penyimpanan browser diblokir, pengumuman cukup hilang untuk sesi ini.
        }
    }

    function createAnnouncementCard(item) {
        const card = document.createElement('article');
        card.className = 'announcement-card';

        if (item.imageUrl) {
            const image = document.createElement('img');
            image.className = 'announcement-card-image';
            image.src = item.imageUrl;
            image.alt = '';
            // Gambar dimuat dari CDN pengirimnya dan baru diunduh saat terlihat,
            // jadi tidak menambah beban server maupun waktu buka halaman.
            image.loading = 'lazy';
            image.decoding = 'async';
            image.referrerPolicy = 'no-referrer';
            image.addEventListener('error', function() {
                image.remove();
            });
            card.appendChild(image);
        }

        const body = document.createElement('div');
        body.className = 'announcement-card-body';
        body.appendChild(createTextElement('strong', '', item.title || 'Pengumuman'));
        if (item.body) body.appendChild(createTextElement('p', '', item.body));
        if (item.linkUrl) {
            const link = document.createElement('a');
            link.className = 'announcement-card-link';
            link.href = item.linkUrl;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = 'Selengkapnya';
            body.appendChild(link);
        }
        card.appendChild(body);

        const closeBtn = document.createElement('button');
        closeBtn.type = 'button';
        closeBtn.className = 'announcement-card-close';
        closeBtn.setAttribute('aria-label', 'Tutup pengumuman');
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        closeBtn.addEventListener('click', function() {
            dismissAnnouncement(item);
            card.remove();
            if (dashboardAnnouncementListEl && !dashboardAnnouncementListEl.children.length) {
                dashboardAnnouncementsSectionEl.hidden = true;
            }
        });
        card.appendChild(closeBtn);

        return card;
    }

    // Banner memakai scroll-snap supaya geser manual terasa alami di HP tanpa
    // pustaka tambahan. Geser otomatis tinggal menggulir kontainernya.
    function stopBannerAutoplay() {
        if (bannerAutoplayTimer) {
            clearInterval(bannerAutoplayTimer);
            bannerAutoplayTimer = null;
        }
    }

    function getActiveBannerIndex() {
        if (!dashboardBannerTrackEl || !dashboardBannerTrackEl.children.length) return 0;
        const width = dashboardBannerTrackEl.clientWidth || 1;
        return Math.round(dashboardBannerTrackEl.scrollLeft / width);
    }

    function setActiveBannerDot(activeIndex) {
        if (!dashboardBannerDotsEl) return;
        Array.from(dashboardBannerDotsEl.children).forEach(function(dot, index) {
            dot.classList.toggle('active', index === activeIndex);
            dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
        });
    }

    function updateBannerDots() {
        setActiveBannerDot(getActiveBannerIndex());
    }

    // Titik indikator harus ikut berpindah setiap banner bergeser, baik karena
    // geser otomatis maupun digeser sendiri oleh user. Pembaruannya dibungkus
    // requestAnimationFrame supaya tidak dihitung puluhan kali per detik selama
    // animasi gulir berjalan.
    function handleBannerScroll() {
        if (bannerScrollFrame) return;
        bannerScrollFrame = requestAnimationFrame(function() {
            bannerScrollFrame = null;
            updateBannerDots();
        });
    }

    function goToBanner(index) {
        if (!dashboardBannerTrackEl || !bannerItems.length) return;
        const total = bannerItems.length;
        const safeIndex = ((index % total) + total) % total;
        dashboardBannerTrackEl.scrollTo({
            left: safeIndex * dashboardBannerTrackEl.clientWidth,
            behavior: 'smooth',
        });
        setActiveBannerDot(safeIndex);
    }

    function startBannerAutoplay() {
        stopBannerAutoplay();
        if (bannerItems.length <= 1) return;
        bannerAutoplayTimer = setInterval(function() {
            // Berhenti sementara kalau tab sedang tidak dilihat, supaya tidak
            // menggeser di belakang layar.
            if (document.hidden) return;
            goToBanner(getActiveBannerIndex() + 1);
        }, BANNER_AUTOPLAY_MS);
    }

    function renderDashboardBanners(items) {
        if (!dashboardBannerSectionEl || !dashboardBannerTrackEl || !dashboardBannerDotsEl) return;
        bannerItems = Array.isArray(items) ? items.filter(function(item) {
            return item && item.imageUrl;
        }) : [];

        stopBannerAutoplay();
        dashboardBannerTrackEl.innerHTML = '';
        dashboardBannerDotsEl.innerHTML = '';
        dashboardBannerSectionEl.hidden = bannerItems.length === 0;
        if (!bannerItems.length) return;

        bannerItems.forEach(function(item, index) {
            const slide = document.createElement(item.linkUrl ? 'a' : 'div');
            slide.className = 'banner-slide';
            if (item.linkUrl) {
                slide.href = item.linkUrl;
                slide.target = '_blank';
                slide.rel = 'noopener noreferrer';
            }

            const image = document.createElement('img');
            image.src = item.imageUrl;
            image.alt = item.label || '';
            // Banner pertama dimuat lebih dulu, sisanya menyusul saat digeser.
            image.loading = index === 0 ? 'eager' : 'lazy';
            image.decoding = 'async';
            image.referrerPolicy = 'no-referrer';
            image.addEventListener('error', function() {
                slide.remove();
            });
            slide.appendChild(image);
            dashboardBannerTrackEl.appendChild(slide);

            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = index === 0 ? 'banner-dot active' : 'banner-dot';
            dot.setAttribute('aria-label', `Banner ${index + 1}`);
            dot.addEventListener('click', function() {
                goToBanner(index);
                startBannerAutoplay();
            });
            dashboardBannerDotsEl.appendChild(dot);
        });

        dashboardBannerDotsEl.hidden = bannerItems.length <= 1;
        dashboardBannerTrackEl.addEventListener('scroll', handleBannerScroll, { passive: true });
        updateBannerDots();
        startBannerAutoplay();
    }

    async function loadDashboardBanners() {
        if (!dashboardBannerSectionEl) return;
        try {
            const response = await fetch('/api/user/banners', { cache: 'no-store' });
            if (!response.ok) throw new Error('Gagal memuat banner');
            const result = await response.json();
            renderDashboardBanners(result?.data || []);
        } catch (_error) {
            renderDashboardBanners([]);
        }
    }

    async function loadDashboardAnnouncements() {
        if (!dashboardAnnouncementsSectionEl) return;
        try {
            const response = await fetch('/api/user/announcements', {
                cache: 'no-store',
                credentials: 'same-origin',
            });
            if (!response.ok) throw new Error('Gagal memuat pengumuman');
            const result = await response.json();
            renderDashboardAnnouncements(result?.data || []);
        } catch (_error) {
            renderDashboardAnnouncements([]);
        }
    }

    async function loadCustomerServiceContact() {
        try {
            const response = await fetch('/api/contact/cs', {
                cache: 'no-store',
                credentials: 'same-origin',
            });
            if (!response.ok) throw new Error('Gagal memuat kontak CS');
            const result = await response.json();
            const contact = result?.data || {};
            applyCustomerServiceWhatsapp(String(contact.csWhatsappNumber || ''));
            if (csEmailTextEl) {
                csEmailTextEl.textContent = String(contact.email || csEmailAddress);
            }
        } catch (_error) {
            applyCustomerServiceWhatsapp(csWhatsappNumber);
            if (csEmailTextEl) {
                csEmailTextEl.textContent = csEmailAddress;
            }
        }
    }

    function normalizeProductSyncSnapshot(metaOrData) {
        if (!metaOrData) return null;
        return {
            total: Number(metaOrData.syncTotal ?? metaOrData.total ?? 0),
            active: Number(metaOrData.syncActive ?? metaOrData.active ?? 0),
            lastSyncedAt: metaOrData.lastSyncedAt ? String(metaOrData.lastSyncedAt) : null,
            priceVersion: metaOrData.priceVersion ? String(metaOrData.priceVersion) : null,
        };
    }

    function hasProductSyncChanged(nextSnapshot) {
        if (!nextSnapshot) return false;
        if (!productSyncSnapshot) return false;
        return productSyncSnapshot.total !== nextSnapshot.total
            || productSyncSnapshot.active !== nextSnapshot.active
            || String(productSyncSnapshot.lastSyncedAt || '') !== String(nextSnapshot.lastSyncedAt || '')
            || String(productSyncSnapshot.priceVersion || '') !== String(nextSnapshot.priceVersion || '');
    }

    async function loadDigiflazzProducts(options) {
        if (!productGridEl || !productStatusEl) return;

        const silent = Boolean(options?.silent);
        const showSyncedNotice = Boolean(options?.showSyncedNotice);
        if (!silent) {
            setProductStatus('Memuat produk...', 'loading');
        }

        try {
            const response = await fetch('/api/products?active=true&take=2000', { cache: 'no-store' });
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const result = await response.json();
            const nextSnapshot = normalizeProductSyncSnapshot(result?.meta || null);
            if (nextSnapshot) productSyncSnapshot = nextSnapshot;

            if (!Array.isArray(result?.data)) {
                productGridEl.innerHTML = '';
                clearProductMenus();
                prepaidProducts = [];
                renderDashboardCategoryShortcuts();
                renderDashboardFavorites();
                renderDashboardRecentPurchases();
                updateLoadMoreButton(0, 0);
                setProductStatus(result?.data?.message || result?.message || 'Produk belum tersedia. Admin perlu memperbarui data produk.');
                return;
            }

            const products = result.data;
            prepaidProducts = products
                .filter(isActivePrepaidProduct)
                .sort(sortProducts);
            renderDashboardRecentPurchases();

            if (!prepaidProducts.length) {
                productGridEl.innerHTML = '';
                clearProductMenus();
                renderDashboardCategoryShortcuts();
                renderDashboardFavorites();
                renderDashboardRecentPurchases();
                updateLoadMoreButton(0, 0);
                setProductStatus(products.length
                    ? 'Produk prabayar belum aktif.'
                    : 'Belum ada produk prabayar.');
                return;
            }

            const quickServiceSkusFromApi = Array.isArray(result?.meta?.quickServiceSkus)
                ? result.meta.quickServiceSkus
                : [];
            await loadTrendingProductStats(POPULAR_PRODUCT_LIMIT);
            const quickServiceProducts = buildQuickServiceProducts(quickServiceSkusFromApi);

            renderDashboardCategoryShortcuts();
            updateQuickServices(quickServiceProducts);
            renderDashboardFavorites();
            renderDashboardRecentPurchases();
            resetProductLimit();
            renderProductFilters();
            renderProductGrid();
            handleLandingSkuIntent();
            if (showSyncedNotice) {
                showToast({
                    type: 'success',
                    title: 'Produk diperbarui',
                    message: 'Daftar produk sudah otomatis mengikuti hasil sync admin.',
                });
            }
        } catch (_err) {
            if (silent) return;
            productGridEl.innerHTML = '';
            clearProductMenus();
            prepaidProducts = [];
            renderDashboardCategoryShortcuts({ failed: true });
            renderDashboardFavorites();
            renderDashboardRecentPurchases();
            updateLoadMoreButton(0, 0);
            setProductStatus('Produk belum bisa dimuat dari database.', 'failed');
        }
    }

    async function checkProductSyncUpdates(options) {
        if (productAutoSyncInFlight) return;
        productAutoSyncInFlight = true;
        try {
            const response = await fetch('/api/products/summary', { cache: 'no-store' });
            if (!response.ok) return;
            const result = await response.json();
            const nextSnapshot = normalizeProductSyncSnapshot(result?.data || null);
            if (!productSyncSnapshot) {
                productSyncSnapshot = nextSnapshot;
                return;
            }
            if (!hasProductSyncChanged(nextSnapshot)) return;
            productSyncSnapshot = nextSnapshot;
            await loadDigiflazzProducts({
                silent: true,
                showSyncedNotice: Boolean(options?.showSyncedNotice),
            });
        } catch (_error) {
            // Auto sync is best-effort; manual refresh remains available.
        } finally {
            productAutoSyncInFlight = false;
        }
    }

    function startProductAutoSync() {
        if (productAutoSyncTimer) clearInterval(productAutoSyncTimer);
        productAutoSyncTimer = setInterval(function() {
            checkProductSyncUpdates({ showSyncedNotice: false });
        }, 60000);
    }

    function isActivePrepaidProduct(product) {
        const disrupted = isDisruptedProduct(product);
        return Boolean(product?.buyer_sku_code)
            && (product.buyer_product_status !== false || disrupted)
            && (product.seller_product_status !== false || disrupted);
    }

    function isDisruptedProduct(product) {
        return Boolean(product?.product_disruption || product?.auto_disabled_at || product?.disruption_at);
    }

    function getProductDisruptionMessage(product) {
        return String(
            product?.disruption_message
            || product?.auto_disabled_reason
            || 'Produk ini sedang gangguan dan belum bisa dibeli. Silakan pilih produk lain.'
        );
    }

    function sortProducts(a, b) {
        const categoryA = a.category || '';
        const categoryB = b.category || '';
        const brandA = a.brand || '';
        const brandB = b.brand || '';
        const priceA = typeof a.price === 'number' ? a.price : Number.MAX_SAFE_INTEGER;
        const priceB = typeof b.price === 'number' ? b.price : Number.MAX_SAFE_INTEGER;

        return categoryA.localeCompare(categoryB)
            || brandA.localeCompare(brandB)
            || priceA - priceB
            || String(a.product_name || '').localeCompare(String(b.product_name || ''));
    }

    function getProductIconClass(product) {
        const text = `${product.category || ''} ${product.brand || ''} ${product.product_name || ''}`.toLowerCase();
        if (text.includes('game')) return 'fa-gamepad';
        if (text.includes('data') || text.includes('internet') || text.includes('kuota')) return 'fa-wifi';
        if (text.includes('pln') || text.includes('listrik')) return 'fa-bolt';
        if (text.includes('voucher')) return 'fa-ticket-alt';
        if (text.includes('e-money') || text.includes('emoney') || text.includes('wallet')) return 'fa-wallet';
        return 'fa-phone-alt';
    }

    // Logo bisa datang dalam dua bentuk: file di server ini seperti cara lama,
    // atau URL https di Cloudflare R2 setelah logo dipindahkan ke sana. Bentuk
    // lain sengaja ditolak supaya tidak ada tautan asing yang dipasang sebagai
    // sumber gambar.
    function resolveLogoAssetUrl(rawUrl, localFolder) {
        const logoUrl = String(rawUrl || '').trim();
        if (!logoUrl) return '';
        if (/^https:\/\//i.test(logoUrl)) return logoUrl;

        const normalizedUrl = logoUrl.startsWith(localFolder) ? `/${logoUrl}` : logoUrl;
        if (!normalizedUrl.startsWith(`/${localFolder}`)) return '';
        return typeof window.PPOB_RESOLVE_PUBLIC_ASSET_URL === 'function'
            ? window.PPOB_RESOLVE_PUBLIC_ASSET_URL(normalizedUrl)
            : normalizedUrl;
    }

    function getProductBrandLogoUrl(product) {
        return resolveLogoAssetUrl(product?.brand_logo_url, 'logo/brands/');
    }

    function getProductCategoryLogoUrl(product) {
        return resolveLogoAssetUrl(product?.category_logo_url, 'logo/categories/');
    }

    function appendBrandLogoOrIcon(container, product, iconClass, options) {
        const fallbackIconClass = iconClass || getProductIconClass(product || {});
        const preferCategoryLogo = Boolean(options?.preferCategoryLogo);
        const logoUrl = preferCategoryLogo
            ? (getProductCategoryLogoUrl(product) || getProductBrandLogoUrl(product))
            : getProductBrandLogoUrl(product);
        const fallback = document.createElement('i');
        fallback.className = `fas ${fallbackIconClass} brand-logo-fallback`;
        if (logoUrl) {
            const img = document.createElement('img');
            img.className = 'brand-logo-img';
            img.src = logoUrl;
            img.alt = `Logo ${preferCategoryLogo ? (product?.category || product?.brand || 'menu') : (product?.brand || product?.product_name || 'brand')}`;
            img.loading = 'eager';
            img.decoding = 'async';
            img.addEventListener('error', function() {
                container.classList.remove('has-brand-logo');
                img.remove();
                container.appendChild(fallback);
            }, { once: true });
            container.classList.add('has-brand-logo');
            container.appendChild(img);
            return;
        }

        container.appendChild(fallback);
    }

    // Akun yang belum punya riwayat melihat produk yang paling sering dibeli,
    // ditambah pilihan admin (quickServiceSkus), sebagai beberapa baris pendek di
    // Beranda. Begitu ada pembelian, tempatnya dipakai "Beli lagi".
    function updateQuickServices(products) {
        quickServiceProductsCache = Array.isArray(products) ? products.filter(Boolean) : [];
        renderDashboardPopularProducts();
        renderPromoBanner(quickServiceProductsCache);
    }

    function renderDashboardPopularProducts() {
        if (!dashboardPopularSectionEl || !dashboardPopularListEl) return;
        const hasRecentPurchases = Boolean(dashboardRecentPurchasesSectionEl && !dashboardRecentPurchasesSectionEl.hidden);
        const products = quickServiceProductsCache.map(getDisplayProduct).filter(Boolean);
        dashboardPopularSectionEl.hidden = hasRecentPurchases || !products.length;
        dashboardPopularListEl.innerHTML = '';
        if (dashboardPopularSectionEl.hidden) return;

        const productBlocked = isProductPurchaseBlocked();
        products.forEach(function(product) {
            const row = document.createElement('article');
            row.className = 'dashboard-recent-purchase-card dashboard-popular-row';

            const icon = document.createElement('span');
            icon.className = 'dashboard-recent-purchase-icon';
            appendBrandLogoOrIcon(icon, product, getProductIconClass(product));

            const content = document.createElement('div');
            content.className = 'dashboard-recent-purchase-content';
            content.appendChild(createTextElement('strong', '', product.product_name || product.buyer_sku_code || 'Produk'));
            const purchaseCount = Number(product.trending_purchase_count || 0);
            content.appendChild(createTextElement(
                'small',
                '',
                [formatRupiah(Number(product.price || 0)), purchaseCount > 0 ? `${purchaseCount}x dibeli` : ''].filter(Boolean).join(' · ')
            ));

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'btn-secondary compact-action btn-service';
            button.dataset.sku = product.buyer_sku_code || '';
            button.dataset.productName = product.product_name || product.buyer_sku_code || 'Produk';
            button.disabled = productBlocked;
            button.title = productBlocked ? getProductPurchaseBlockedMessage() : '';
            button.textContent = productBlocked && isDailyCutOffActive() ? 'Cut off' : (productBlocked ? 'Maintenance' : 'Beli');
            button.setAttribute('aria-label', `Beli ${product.product_name || product.buyer_sku_code || 'produk'}`);

            row.appendChild(icon);
            row.appendChild(content);
            row.appendChild(button);
            dashboardPopularListEl.appendChild(row);
        });
    }

    async function loadTrendingProductStats(limit) {
        try {
            const response = await fetch(`/api/products/trending?take=${encodeURIComponent(limit || POPULAR_PRODUCT_LIMIT)}`, { cache: 'no-store' });
            const result = await response.json().catch(function() { return {}; });
            if (!response.ok) throw new Error(result?.error || 'Gagal memuat produk rame');
            trendingProductStatsCache = Array.isArray(result?.data) ? result.data : [];
        } catch (_error) {
            trendingProductStatsCache = [];
        }
        return trendingProductStatsCache;
    }

    function attachTrendingMeta(product, stat, source) {
        if (!product) return null;
        return {
            ...product,
            trending_purchase_count: Number(stat?.purchaseCount || 0),
            trending_last_purchased_at: stat?.lastPurchasedAt || null,
            trending_source: source || 'fallback',
        };
    }

    function buildQuickServiceProducts(quickServiceSkusFromApi) {
        const limit = POPULAR_PRODUCT_LIMIT;
        const pickedSkus = new Set();
        const items = [];

        trendingProductStatsCache.forEach(function(stat) {
            if (items.length >= limit) return;
            const sku = String(stat?.buyerSkuCode || '').trim();
            if (!sku || pickedSkus.has(sku)) return;
            const product = prepaidProducts.find(function(item) {
                return item.buyer_sku_code === sku && !isDisruptedProduct(item);
            });
            if (!product) return;
            pickedSkus.add(sku);
            items.push(attachTrendingMeta(product, stat, 'trending'));
        });

        (Array.isArray(quickServiceSkusFromApi) ? quickServiceSkusFromApi : []).forEach(function(sku) {
            if (items.length >= limit) return;
            const safeSku = String(sku || '').trim();
            if (!safeSku || pickedSkus.has(safeSku)) return;
            const product = prepaidProducts.find(function(item) {
                return item.buyer_sku_code === safeSku && !isDisruptedProduct(item);
            });
            if (!product) return;
            pickedSkus.add(safeSku);
            items.push(attachTrendingMeta(product, null, 'admin'));
        });

        prepaidProducts.forEach(function(product) {
            if (items.length >= limit) return;
            const sku = String(product?.buyer_sku_code || '').trim();
            if (!sku || pickedSkus.has(sku) || isDisruptedProduct(product)) return;
            pickedSkus.add(sku);
            items.push(attachTrendingMeta(product, null, 'fallback'));
        });

        return items.slice(0, limit);
    }

    function getActiveProductPromo(productOrSku) {
        const sku = typeof productOrSku === 'string'
            ? productOrSku
            : String(productOrSku?.buyer_sku_code || '');
        if (!sku) return null;
        return getActiveUserPromoItems().find(function(item) {
            return String(item.sku || '') === sku && Number(item.finalPrice || 0) > 0;
        }) || null;
    }

    function getDisplayProduct(product) {
        if (!product) return null;
        const promo = getActiveProductPromo(product);
        if (!promo) return product;
        const promoFinalPrice = Number(promo.finalPrice || 0);
        const promoOriginalPrice = Number(promo.originalPrice || product.price || product.base_price || 0);
        if (!Number.isFinite(promoFinalPrice) || promoFinalPrice <= 0) return product;
        return {
            ...product,
            price: Math.trunc(promoFinalPrice),
            base_price: Number.isFinite(promoOriginalPrice) && promoOriginalPrice > 0
                ? Math.trunc(promoOriginalPrice)
                : Number(product.base_price || product.price || 0),
            is_promo_active: true,
            promo_original_price: Number.isFinite(promoOriginalPrice) && promoOriginalPrice > 0
                ? Math.trunc(promoOriginalPrice)
                : null,
            promo_final_price: Math.trunc(promoFinalPrice),
            promo_expires_at: promo.expiresAt || null,
        };
    }

    function refreshPromoPriceViews() {
        renderPromoBanner(quickServiceProductsCache);
        if (prepaidProducts.length) {
            renderProductGrid();
            renderDashboardPopularProducts();
        }
        if (selectedCheckoutProduct?.buyer_sku_code) {
            const rawProduct = findProductBySku(selectedCheckoutProduct.buyer_sku_code) || selectedCheckoutProduct;
            selectedCheckoutProduct = getDisplayProduct(rawProduct);
            if (checkoutPriceEl) {
                checkoutPriceEl.textContent = selectedCheckoutProduct.is_promo_active && selectedCheckoutProduct.promo_original_price
                    ? `${formatRupiah(selectedCheckoutProduct.price)} (Promo dari ${formatRupiah(selectedCheckoutProduct.promo_original_price)})`
                    : formatRupiah(selectedCheckoutProduct.price);
            }
        }
    }

    function getPromoExpiryMs(item) {
        const expiresAtDate = item?.expiresAt ? new Date(item.expiresAt) : null;
        return expiresAtDate && !Number.isNaN(expiresAtDate.getTime())
            ? expiresAtDate.getTime()
            : null;
    }

    function isUserPromoItemActive(item) {
        const expiryMs = getPromoExpiryMs(item);
        return Boolean(
            userPromoBannerConfig.enabled
            && item?.enabled
            && (item.isActive || !item.isExpired)
            && (!expiryMs || expiryMs > Date.now())
        );
    }

    function getActiveUserPromoItems() {
        return (userPromoBannerConfig.items || []).filter(isUserPromoItemActive);
    }

    function clearPromoTimers() {
        if (promoCountdownTimer) {
            clearInterval(promoCountdownTimer);
            promoCountdownTimer = null;
        }
        if (promoCarouselTimer) {
            clearInterval(promoCarouselTimer);
            promoCarouselTimer = null;
        }
        if (promoPriceRefreshTimer) {
            clearTimeout(promoPriceRefreshTimer);
            promoPriceRefreshTimer = null;
        }
    }

    function renderPromoDots() {
        if (!promoDotsEl) return;
        promoDotsEl.innerHTML = '';
        if (activePromoItemsCache.length <= 1) return;
        activePromoItemsCache.forEach(function(_item, index) {
            const dot = document.createElement('button');
            dot.className = index === currentPromoIndex ? 'promo-dot active' : 'promo-dot';
            dot.type = 'button';
            dot.setAttribute('aria-label', `Promo ${index + 1}`);
            dot.addEventListener('click', function() {
                showPromoSlide(index, true);
            });
            promoDotsEl.appendChild(dot);
        });
    }

    function renderEmptyPromoBanner() {
        clearPromoTimers();
        activePromoItemsCache = [];
        currentPromoIndex = 0;
        promoBannerEl.hidden = false;
        promoBannerEl.classList.add('promo-empty');
        promoBannerEl.classList.remove('promo-switching');
        promoHeadlineEl.textContent = 'Belum ada promo';
        promoSubtitleEl.textContent = 'Tunggu promo menarik berikutnya.';
        if (promoPriceWrapEl) promoPriceWrapEl.hidden = true;
        if (promoCountdownEl) promoCountdownEl.textContent = '--:--:--';
        if (promoBuyNowBtn) {
            promoBuyNowBtn.dataset.sku = '';
            promoBuyNowBtn.dataset.productName = '';
            promoBuyNowBtn.dataset.promoFinalPrice = '';
            promoBuyNowBtn.dataset.promoOriginalPrice = '';
            promoBuyNowBtn.disabled = true;
        }
        if (promoDotsEl) promoDotsEl.innerHTML = '';
    }

    function showPromoSlide(index, animate = false) {
        if (!promoBannerEl || !promoHeadlineEl || !promoSubtitleEl || !promoBuyNowBtn) return;
        if (!activePromoItemsCache.length) {
            renderEmptyPromoBanner();
            return;
        }
        currentPromoIndex = (index + activePromoItemsCache.length) % activePromoItemsCache.length;
        const promoItem = activePromoItemsCache[currentPromoIndex];
        if (!isUserPromoItemActive(promoItem)) {
            refreshPromoPriceViews();
            return;
        }
        const featured = findProductBySku(promoItem.sku) || {
            buyer_sku_code: promoItem.sku,
            product_name: promoItem.title || promoItem.sku,
            brand: '',
            category: '',
            price: promoItem.finalPrice || promoItem.originalPrice || 0,
            base_price: promoItem.originalPrice || promoItem.finalPrice || 0,
        };
        const originalPrice = Number(promoItem.originalPrice || 0);
        const finalPrice = Number(promoItem.finalPrice || 0);
        const defaultHeadline = featured?.buyer_sku_code
            ? `Promo cepat: ${featured.product_name || featured.buyer_sku_code}`
            : 'Promo produk pilihan sedang berjalan';
        const defaultSubtitle = featured?.buyer_sku_code
            ? `Checkout langsung QRIS untuk ${featured.brand || 'produk pilihan'} dengan harga promo.`
            : 'Pilih produk favorit kamu dan selesaikan pembayaran QRIS lebih cepat.';

        promoBannerEl.hidden = false;
        promoBannerEl.classList.remove('promo-empty');
        if (animate) {
            promoBannerEl.classList.remove('promo-switching');
            void promoBannerEl.offsetWidth;
            promoBannerEl.classList.add('promo-switching');
        }
        promoHeadlineEl.textContent = promoItem.title || defaultHeadline;
        promoSubtitleEl.textContent = promoItem.subtitle || defaultSubtitle;
        promoBuyNowBtn.dataset.sku = featured?.buyer_sku_code || '';
        promoBuyNowBtn.dataset.productName = featured?.product_name || featured?.buyer_sku_code || '';
        promoBuyNowBtn.dataset.promoFinalPrice = finalPrice > 0 ? String(finalPrice) : '';
        promoBuyNowBtn.dataset.promoOriginalPrice = originalPrice > 0 ? String(originalPrice) : '';
        promoBuyNowBtn.disabled = !featured?.buyer_sku_code;

        if (promoPriceWrapEl && promoOriginalPriceEl && promoFinalPriceEl && originalPrice > 0 && finalPrice > 0) {
            promoOriginalPriceEl.textContent = formatRupiah(originalPrice);
            promoFinalPriceEl.textContent = formatRupiah(finalPrice);
            promoPriceWrapEl.hidden = false;
        } else if (promoPriceWrapEl) {
            promoPriceWrapEl.hidden = true;
        }

        renderPromoDots();
        startPromoCountdown(getPromoExpiryMs(promoItem));
    }

    function startPromoCarousel() {
        if (promoCarouselTimer) {
            clearInterval(promoCarouselTimer);
            promoCarouselTimer = null;
        }
        if (!promoBannerEl) return;
        if (activePromoItemsCache.length <= 1) return;
        promoCarouselTimer = setInterval(function() {
            showPromoSlide(currentPromoIndex + 1, true);
        }, 5000);
    }

    function schedulePromoPriceRefresh() {
        if (promoPriceRefreshTimer) {
            clearTimeout(promoPriceRefreshTimer);
            promoPriceRefreshTimer = null;
        }
        const now = Date.now();
        const nextExpiry = getActiveUserPromoItems()
            .map(getPromoExpiryMs)
            .filter(function(expiryMs) {
                return Number.isFinite(expiryMs) && expiryMs > now;
            })
            .sort(function(a, b) { return a - b; })[0];
        if (!nextExpiry) return;
        promoPriceRefreshTimer = setTimeout(function() {
            refreshPromoPriceViews();
        }, Math.max(1000, nextExpiry - now + 300));
    }

    function renderPromoBanner(_products) {
        if (!promoBannerEl || !promoHeadlineEl || !promoSubtitleEl || !promoBuyNowBtn) return;
        const activeItems = getActiveUserPromoItems();
        if (!activeItems.length) {
            renderEmptyPromoBanner();
            return;
        }
        activePromoItemsCache = activeItems;
        currentPromoIndex = Math.min(currentPromoIndex, activePromoItemsCache.length - 1);
        showPromoSlide(currentPromoIndex, false);
        startPromoCarousel();
        schedulePromoPriceRefresh();
    }

    function startPromoCountdown(expiresAtMs) {
        if (!promoCountdownEl) return;
        if (promoCountdownTimer) {
            clearInterval(promoCountdownTimer);
            promoCountdownTimer = null;
        }

        if (!(Number.isFinite(expiresAtMs) && expiresAtMs > 0)) {
            promoCountdownEl.textContent = 'Promo aktif';
            return;
        }

        const render = function() {
            const now = new Date();
            const deadline = new Date(expiresAtMs);
            const diffMs = deadline.getTime() - now.getTime();
            if (diffMs <= 0) {
                promoCountdownEl.textContent = '00:00:00';
                if (promoCountdownTimer) {
                    clearInterval(promoCountdownTimer);
                    promoCountdownTimer = null;
                }
                refreshPromoPriceViews();
                return;
            }
            promoCountdownEl.textContent = formatTimeCountdown(Math.floor(diffMs / 1000));
        };

        render();
        promoCountdownTimer = setInterval(render, 1000);
    }


    function getShortcutCategoryValue(product) {
        return String(product?.category || 'Lainnya').trim() || 'Lainnya';
    }

    function getShortcutCategories() {
        return Array.from(new Set(prepaidProducts.map(getShortcutCategoryValue)))
            .filter(Boolean)
            .sort(function(a, b) { return a.localeCompare(b, 'id'); });
    }

    function getShortcutCategoryIconClass(category) {
        const text = String(category || '').toLowerCase();
        if (text.includes('game')) return 'fa-gamepad';
        if (text.includes('data') || text.includes('internet') || text.includes('kuota')) return 'fa-wifi';
        if (text.includes('pln') || text.includes('listrik')) return 'fa-bolt';
        if (text.includes('voucher')) return 'fa-ticket-alt';
        if (text.includes('masa aktif')) return 'fa-calendar-check';
        if (text.includes('e-money') || text.includes('emoney') || text.includes('wallet')) return 'fa-wallet';
        if (text.includes('gas')) return 'fa-fire-flame-simple';
        if (text.includes('tv')) return 'fa-tv';
        return 'fa-mobile-alt';
    }

    function renderDashboardCategoryShortcuts(options = {}) {
        if (!shortcutCategoryGridEl) return;
        shortcutCategoryGridEl.innerHTML = '';
        // Menandai kerangka pemuatan sudah selesai: kartu asli baru boleh
        // memakai animasi muncul, dan pembaca layar berhenti mengumumkan
        // bahwa kategori sedang dimuat.
        shortcutCategoryGridEl.removeAttribute('aria-busy');
        shortcutCategoryGridEl.removeAttribute('aria-label');

        const categories = getShortcutCategories().sort(compareShortcutCategories);
        if (!categories.length) {
            // Produk gagal dimuat atau memang belum ada: kotaknya tetap ada,
            // isinya satu kalimat yang memberi tahu langkah berikutnya.
            const state = document.createElement('div');
            state.className = 'menu-shortcut-state';
            state.appendChild(createTextElement('p', '', options.failed
                ? 'Daftar produk gagal dimuat. Periksa koneksi internet, lalu coba lagi.'
                : 'Produk belum tersedia saat ini. Coba lagi beberapa saat lagi.'));
            const retry = document.createElement('button');
            retry.type = 'button';
            retry.className = 'text-button';
            retry.textContent = 'Muat ulang produk';
            retry.addEventListener('click', function() {
                void loadDigiflazzProducts();
            });
            state.appendChild(retry);
            shortcutCategoryGridEl.appendChild(state);
            return;
        }

        // Kartu VPN ikut dihitung karena ada di grid yang sama.
        shortcutCategoryGridEl.style.setProperty('--tile-columns', String(getBalancedTileColumns(categories.length + 1)));
        categories.forEach(function(category) {
            const categoryProducts = prepaidProducts.filter(function(product) {
                return getShortcutCategoryValue(product) === category;
            });
            const count = categoryProducts.length;
            // Logo kategori dari admin lebih dulu. Kalau belum diunggah, logo
            // brand produk pertama di kategori itu yang dipakai.
            const logoProduct = categoryProducts.find(function(product) {
                return getProductCategoryLogoUrl(product);
            }) || categoryProducts[0] || null;
            const button = document.createElement('button');
            button.className = 'menu-shortcut-card';
            button.type = 'button';
            button.dataset.shortcutCategory = category;
            appendBrandLogoOrIcon(button, logoProduct, getShortcutCategoryIconClass(category), { preferCategoryLogo: true });
            const labelEl = document.createElement('span');
            labelEl.textContent = category;
            const metaEl = document.createElement('small');
            metaEl.textContent = `${count} produk`;
            button.appendChild(labelEl);
            button.appendChild(metaEl);
            shortcutCategoryGridEl.appendChild(button);
        });

        // VPN bukan produk Digiflazz, tapi bagi user ia satu jenis belanjaan
        // juga. Tile-nya menggantikan kartu promo VPN yang dulu muncul di
        // Beranda dan menu Beli sekaligus.
        const vpnButton = document.createElement('button');
        vpnButton.className = 'menu-shortcut-card menu-shortcut-vpn';
        vpnButton.type = 'button';
        vpnButton.dataset.openVpn = '';
        appendVpnMenuLogo(vpnButton);
        vpnButton.appendChild(createTextElement('span', '', 'VPN'));
        vpnButton.appendChild(createTextElement('small', '', 'SSH, VMess, Trojan'));
        shortcutCategoryGridEl.appendChild(vpnButton);
    }

    // Logo yang sama dengan kartu Menu VPN lama. Kalau gagal dimuat, ikon
    // perisai yang tampil. Class-nya sengaja bukan brand-logo-img, karena ini
    // bukan logo dari data produk.
    const VPN_MENU_LOGO_URL = 'https://cdn.1forcrkuota.com/uploads/logo-menu/202609/logovpnFix.png';

    function appendVpnMenuLogo(container) {
        const fallback = document.createElement('i');
        fallback.className = 'fas fa-shield-alt brand-logo-fallback';
        fallback.setAttribute('aria-hidden', 'true');
        const img = document.createElement('img');
        img.className = 'menu-logo-img';
        img.src = VPN_MENU_LOGO_URL;
        img.alt = '';
        img.decoding = 'async';
        img.addEventListener('error', function() {
            img.replaceWith(fallback);
        }, { once: true });
        container.appendChild(img);
    }

    // Jumlah kolom grid kategori di desktop dipilih supaya baris terakhir
    // sebisa mungkin penuh: 8 kartu jadi 4 + 4, 10 kartu jadi 5 + 5, 9 kartu
    // jadi 3 + 3 + 3. Kalau sama-sama tersisa, 4 kolom yang dipilih.
    function getBalancedTileColumns(count) {
        let best = 4;
        let bestEmpty = Infinity;
        [4, 5, 3].forEach(function(columns) {
            const empty = (columns - (count % columns)) % columns;
            if (empty < bestEmpty) {
                best = columns;
                bestEmpty = empty;
            }
        });
        return best;
    }

    // Urutan kategori mengikuti kebutuhan yang paling sering, bukan abjad,
    // supaya Pulsa dan Data tidak terselip di urutan terakhir.
    const SHORTCUT_CATEGORY_ORDER = ['pulsa', 'data', 'pln', 'games', 'e-money', 'masa aktif', 'aktivasi voucher'];

    function compareShortcutCategories(a, b) {
        const rank = function(label) {
            const index = SHORTCUT_CATEGORY_ORDER.indexOf(String(label || '').trim().toLowerCase());
            return index < 0 ? SHORTCUT_CATEGORY_ORDER.length : index;
        };
        return rank(a) - rank(b) || String(a).localeCompare(String(b), 'id');
    }

    function clearProductMenus() {
        if (categoryListEl) categoryListEl.innerHTML = '';
        if (brandListEl) brandListEl.innerHTML = '';
        if (typeListEl) typeListEl.innerHTML = '';
        if (categoryCountEl) categoryCountEl.textContent = '0';
        if (brandCountEl) brandCountEl.textContent = '0';
        if (typeCountEl) typeCountEl.textContent = '0';
        if (categoryFilterEl) categoryFilterEl.innerHTML = '<option value="">Semua kategori</option>';
        if (brandFilterEl) brandFilterEl.innerHTML = '<option value="">Semua brand</option>';
        if (typeFilterEl) typeFilterEl.innerHTML = '<option value="">Semua tipe</option>';
        if (categoryFilterCustomEl) categoryFilterCustomEl.innerHTML = '';
        if (brandFilterCustomEl) brandFilterCustomEl.innerHTML = '';
        if (typeFilterCustomEl) typeFilterCustomEl.innerHTML = '';
    }

    function getCategories() {
        return Array.from(new Set(prepaidProducts.map(function(product) {
            return product.category || 'Lainnya';
        }))).sort();
    }

    function getProductsForCategory(category) {
        if (!category) return prepaidProducts;
        return prepaidProducts.filter(function(product) {
            return (product.category || 'Lainnya') === category;
        });
    }

    function getBrandsForCategory(category) {
        return Array.from(new Set(getProductsForCategory(category).map(function(product) {
            return product.brand || 'Tanpa Brand';
        }))).sort();
    }

    function getProductsForCategoryBrand(category, brand) {
        return getProductsForCategory(category).filter(function(product) {
            const productBrand = product.brand || 'Tanpa Brand';
            return !brand || productBrand === brand;
        });
    }

    function getTypesForSelection(category, brand) {
        return Array.from(new Set(getProductsForCategoryBrand(category, brand).map(function(product) {
            return product.type || 'Tanpa Type';
        }))).sort();
    }

    function countByValue(products, fieldName, fallback) {
        return products.reduce(function(map, product) {
            const key = product[fieldName] || fallback;
            map[key] = (map[key] || 0) + 1;
            return map;
        }, {});
    }

    function getFilterIconClass(type, label) {
        const text = String(label || '').toLowerCase();
        if (type === 'category') {
            if (text.includes('game')) return 'fa-gamepad';
            if (text.includes('pulsa')) return 'fa-mobile-screen-button';
            if (text.includes('data') || text.includes('kuota') || text.includes('internet')) return 'fa-wifi';
            if (text.includes('pln') || text.includes('listrik')) return 'fa-bolt';
            if (text.includes('e-money') || text.includes('emoney') || text.includes('wallet') || text.includes('uang')) return 'fa-wallet';
            if (text.includes('voucher')) return 'fa-ticket';
            if (text.includes('gas')) return 'fa-fire-flame-simple';
            if (text.includes('tv')) return 'fa-tv';
            if (text.includes('sms') || text.includes('telpon')) return 'fa-phone';
            return 'fa-shapes';
        }
        if (type === 'brand') {
            if (text.includes('mobile legend')) return 'fa-gamepad';
            if (text.includes('free fire')) return 'fa-fire';
            if (text.includes('dana') || text.includes('ovo') || text.includes('gopay') || text.includes('shopee') || text.includes('link')) return 'fa-wallet';
            if (text.includes('pln')) return 'fa-bolt';
            if (text.includes('axis') || text.includes('xl') || text.includes('telkomsel') || text.includes('indosat') || text.includes('tri') || text.includes('smartfren')) return 'fa-signal';
            return 'fa-store';
        }
        if (text.includes('promo')) return 'fa-bullhorn';
        if (text.includes('membership')) return 'fa-id-card';
        if (text.includes('voucher')) return 'fa-ticket';
        if (text.includes('flash')) return 'fa-bolt';
        if (text.includes('edukasi')) return 'fa-graduation-cap';
        return 'fa-tags';
    }

    function createFilterChip(type, value, label, count, isActive, logoProduct = null, logoOptions = null) {
        const button = document.createElement('button');
        button.className = isActive ? 'filter-chip active' : 'filter-chip';
        button.type = 'button';
        button.dataset.filterType = type;
        button.dataset.filterValue = value;
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');

        appendBrandLogoOrIcon(button, logoProduct, getFilterIconClass(type, label), logoOptions);

        const textWrap = document.createElement('span');
        textWrap.className = 'filter-chip-text';
        const title = document.createElement('strong');
        title.textContent = label;
        const meta = document.createElement('small');
        meta.textContent = `${count} produk`;
        textWrap.appendChild(title);
        textWrap.appendChild(meta);
        button.appendChild(textWrap);
        return button;
    }

    function createFilterStepHint(iconClass, text) {
        const hint = document.createElement('div');
        hint.className = 'filter-step-hint';
        const icon = document.createElement('i');
        icon.className = `fas ${iconClass}`;
        const label = document.createElement('span');
        label.textContent = text;
        hint.appendChild(icon);
        hint.appendChild(label);
        return hint;
    }

    function renderProductFilters() {
        const categories = getCategories();

        if (selectedCategory && !categories.includes(selectedCategory)) {
            selectedCategory = '';
        }

        const brands = getBrandsForCategory(selectedCategory);
        if (selectedBrand && !brands.includes(selectedBrand)) {
            selectedBrand = '';
        }
        const types = getTypesForSelection(selectedCategory, selectedBrand);
        if (selectedType && !types.includes(selectedType)) {
            selectedType = '';
        }

        renderCategoryFilter(categories);
        renderBrandFilter(brands);
        renderTypeFilter(types);
        renderProductTypeQuickFilter(types);
        renderCategoryMenu(categories);
        renderBrandMenu(brands);
        renderTypeMenu(types);
    }

    function renderCategoryFilter(categories) {
        if (!categoryFilterEl) return;

        categoryFilterEl.innerHTML = '';
        categoryFilterEl.appendChild(new Option('Semua kategori', ''));
        categories.forEach(function(category) {
            categoryFilterEl.appendChild(new Option(category, category));
        });
        categoryFilterEl.value = selectedCategory;
        renderFancyFilterSelect(categoryFilterEl, categoryFilterCustomEl, 'Semua kategori');
    }

    function renderBrandFilter(brands) {
        if (!brandFilterEl) return;

        brandFilterEl.innerHTML = '';
        brandFilterEl.appendChild(new Option('Semua brand', ''));
        brands.forEach(function(brand) {
            brandFilterEl.appendChild(new Option(brand, brand));
        });
        brandFilterEl.value = selectedBrand;
        renderFancyFilterSelect(brandFilterEl, brandFilterCustomEl, 'Semua brand');
    }

    function renderTypeFilter(types) {
        if (!typeFilterEl) return;

        typeFilterEl.innerHTML = '';
        typeFilterEl.appendChild(new Option('Semua tipe', ''));
        types.forEach(function(type) {
            typeFilterEl.appendChild(new Option(type, type));
        });
        typeFilterEl.value = selectedType;
        renderFancyFilterSelect(typeFilterEl, typeFilterCustomEl, 'Semua tipe');
    }

    function renderProductTypeQuickFilter(types) {
        if (!productTypeQuickFilterEl) return;

        productTypeQuickFilterEl.innerHTML = '';
        const hasBrand = Boolean(selectedBrand) && !buyFavoriteOnly;
        productTypeQuickFilterEl.hidden = !hasBrand;
        productTypeQuickFilterEl.classList.toggle('is-empty', !hasBrand || !types.length);
        if (!hasBrand) {
            updateHorizontalScrollHint(productTypeQuickFilterEl, buyTypeSwipeHintEl);
            return;
        }

        const baseProducts = getProductsForCategoryBrand(selectedCategory, selectedBrand);
        const counts = countByValue(baseProducts, 'type', 'Tanpa Type');
        const totalCount = baseProducts.length;
        const allButton = document.createElement('button');
        allButton.type = 'button';
        allButton.className = selectedType ? 'type-filter-chip' : 'type-filter-chip active';
        allButton.dataset.typeFilterValue = '';
        allButton.innerHTML = `<span>Semua</span><strong>${totalCount}</strong>`;
        productTypeQuickFilterEl.appendChild(allButton);

        types.forEach(function(type) {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = selectedType === type ? 'type-filter-chip active' : 'type-filter-chip';
            button.dataset.typeFilterValue = type;
            button.innerHTML = `<span>${escapeHtml(type)}</span><strong>${counts[type] || 0}</strong>`;
            productTypeQuickFilterEl.appendChild(button);
        });

        // Di layar lebar tombol tipe membungkus ke baris berikutnya. Kalau
        // tipenya banyak (Data Telkomsel punya 24), yang tampil dibatasi dua
        // baris dulu supaya daftar produknya tidak terdorong jauh ke bawah.
        const collapsible = types.length > TYPE_CHIP_COLLAPSED_COUNT;
        productTypeQuickFilterEl.classList.toggle('is-collapsed', collapsible && !buyTypeChipsExpanded);
        if (collapsible) {
            const moreButton = document.createElement('button');
            moreButton.type = 'button';
            moreButton.className = 'type-filter-more text-button';
            moreButton.setAttribute('aria-expanded', buyTypeChipsExpanded ? 'true' : 'false');
            moreButton.textContent = buyTypeChipsExpanded
                ? 'Ringkas daftar tipe'
                : `Tampilkan ${types.length - TYPE_CHIP_COLLAPSED_COUNT} tipe lain`;
            moreButton.addEventListener('click', function() {
                buyTypeChipsExpanded = !buyTypeChipsExpanded;
                renderProductTypeQuickFilter(types);
            });
            productTypeQuickFilterEl.appendChild(moreButton);
        }
        updateHorizontalScrollHint(productTypeQuickFilterEl, buyTypeSwipeHintEl);
    }

    // Pilihan bayar tampil sebagai dua kartu yang langsung menyebut isi saldo,
    // bukan dropdown. Select aslinya tetap jadi sumber nilai yang dikirim.
    function renderPaymentMethodFilter() {
        if (!paymentMethodInputEl || !paymentMethodCustomEl) return;
        const hadFocus = paymentMethodCustomEl.contains(document.activeElement);
        paymentMethodCustomEl.innerHTML = '';
        paymentMethodCustomEl.classList.add('payment-method-options');
        paymentMethodCustomEl.setAttribute('role', 'radiogroup');
        paymentMethodCustomEl.setAttribute('aria-label', 'Bayar pakai');

        const price = Number(selectedCheckoutProduct?.price || 0);
        Array.from(paymentMethodInputEl.options).forEach(function(option) {
            const isWallet = option.value === 'WALLET_BALANCE';
            const checked = paymentMethodInputEl.value === option.value;
            const shortfall = isWallet && currentPpobBalance !== null && price > currentPpobBalance
                ? price - currentPpobBalance
                : 0;
            let note;
            if (isWallet) {
                note = currentPpobBalance === null
                    ? 'Saldo belum termuat'
                    : `Saldo PPOB ${formatRupiah(currentPpobBalance)}${shortfall ? `, kurang ${formatRupiah(shortfall)}` : ''}`;
            } else {
                note = operationsConfig.qrisEnabled === false
                    ? 'Sedang tidak tersedia'
                    : 'Dari e-wallet atau m-banking apa pun';
            }

            const button = document.createElement('button');
            button.type = 'button';
            button.className = checked ? 'payment-method-option active' : 'payment-method-option';
            button.setAttribute('role', 'radio');
            button.setAttribute('aria-checked', checked ? 'true' : 'false');
            button.dataset.paymentMethod = option.value;
            // Saldo yang tidak cukup tetap terlihat, tapi tidak bisa dipilih.
            button.disabled = Boolean(shortfall) && !checked;
            button.appendChild(createTextElement('strong', '', isWallet ? 'Saldo' : 'QRIS'));
            button.appendChild(createTextElement('small', '', note));
            button.addEventListener('click', function() {
                if (paymentMethodInputEl.value === option.value) return;
                paymentMethodInputEl.value = option.value;
                paymentMethodInputEl.dispatchEvent(new Event('change', { bubbles: true }));
            });
            paymentMethodCustomEl.appendChild(button);
        });
        if (hadFocus) paymentMethodCustomEl.querySelector('.payment-method-option.active')?.focus();
    }

    function getPaymentMethodLabel(value) {
        const method = String(value || '').toUpperCase();
        if (method === 'DIRECT_QRIS' && operationsConfig.qrisEnabled === false) return 'Bayar langsung (QRIS tidak tersedia)';
        if (method === 'WALLET_BALANCE') return 'Pakai saldo';
        return 'Bayar langsung (QRIS)';
    }

    function syncPaymentMethodUi() {
        if (!paymentMethodInputEl) return;
        const selectedValue = paymentMethodInputEl.value || 'DIRECT_QRIS';
        const selectedOption = Array.from(paymentMethodInputEl.options).find(function(option) {
            return option.value === selectedValue;
        });
        if (selectedOption) {
            selectedOption.selected = true;
        }

        renderPaymentMethodFilter();
        if (!selectedCheckoutProduct) return;
        // Ini juga terpanggil setiap pengaturan publik dimuat ulang (tiap 60
        // detik). Di luar tahap isi detail, kartu bayar atau proses sedang tampil
        // dan tidak boleh diganti form lagi: form itu masih berisi produk dan
        // nomor yang sama, jadi menekan Bayar di situ membeli produknya dua kali.
        if (checkoutPhase !== 'detail') return;

        if (selectedValue === 'WALLET_BALANCE') {
            setCheckoutQrisVisible(false);
            setCheckoutStatus('Pembayaran akan dipotong dari saldo akun kamu.');
        } else if (operationsConfig.qrisEnabled === false) {
            setCheckoutQrisVisible(false);
            setCheckoutStatus(qrisUnavailableMessage, 'failed');
        } else {
            // Dropdown sudah menulis "Bayar langsung (QRIS)", tidak perlu diulang di bawahnya.
            setCheckoutStatus('');
        }
    }

    function closeFancyFilterSelect(exceptHost) {
        document.querySelectorAll('.fancy-filter-select.open').forEach(function(host) {
            if (exceptHost && host === exceptHost) return;
            host.classList.remove('open');
            const trigger = host.querySelector('.fancy-filter-trigger');
            if (trigger) trigger.setAttribute('aria-expanded', 'false');
        });
        if (!exceptHost || !exceptHost.classList.contains('open')) {
            activeFancyFilterEl = null;
        }
    }

    function renderFancyFilterSelect(nativeSelectEl, hostEl, fallbackLabel) {
        if (!nativeSelectEl || !hostEl) return;
        hostEl.innerHTML = '';
        hostEl.classList.remove('open');

        const selectedOption = nativeSelectEl.options[nativeSelectEl.selectedIndex] || null;
        const trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.className = 'fancy-filter-trigger';
        trigger.setAttribute('aria-haspopup', 'listbox');
        trigger.setAttribute('aria-expanded', 'false');

        const triggerText = document.createElement('span');
        triggerText.className = 'fancy-filter-trigger-text';
        triggerText.textContent = nativeSelectEl === paymentMethodInputEl
            ? getPaymentMethodLabel(nativeSelectEl.value)
            : (selectedOption?.textContent || fallbackLabel || 'Pilih');
        trigger.appendChild(triggerText);

        const triggerIcon = document.createElement('i');
        triggerIcon.className = 'fas fa-chevron-down';
        trigger.appendChild(triggerIcon);

        const menu = document.createElement('div');
        menu.className = 'fancy-filter-menu';
        menu.setAttribute('role', 'listbox');
        menu.setAttribute('tabindex', '-1');

        Array.from(nativeSelectEl.options).forEach(function(option) {
            const optionBtn = document.createElement('button');
            optionBtn.type = 'button';
            optionBtn.className = option.selected ? 'fancy-filter-option active' : 'fancy-filter-option';
            optionBtn.setAttribute('role', 'option');
            optionBtn.setAttribute('aria-selected', option.selected ? 'true' : 'false');
            optionBtn.textContent = nativeSelectEl === paymentMethodInputEl
                ? getPaymentMethodLabel(option.value)
                : option.textContent;
            optionBtn.addEventListener('click', function() {
                nativeSelectEl.value = option.value;
                nativeSelectEl.dispatchEvent(new Event('change', { bubbles: true }));
                closeFancyFilterSelect();
            });
            menu.appendChild(optionBtn);
        });

        trigger.addEventListener('click', function() {
            const willOpen = !hostEl.classList.contains('open');
            closeFancyFilterSelect(hostEl);
            hostEl.classList.toggle('open', willOpen);
            trigger.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
            activeFancyFilterEl = willOpen ? hostEl : null;
            if (willOpen) {
                const activeOption = menu.querySelector('.fancy-filter-option.active');
                if (activeOption) activeOption.scrollIntoView({ block: 'nearest' });
            }
        });

        hostEl.appendChild(trigger);
        hostEl.appendChild(menu);
    }

    function renderCategoryMenu(categories) {
        if (!categoryListEl || !categoryCountEl) return;

        const counts = countByValue(prepaidProducts, 'category', 'Lainnya');
        categoryListEl.innerHTML = '';
        categoryListEl.style.setProperty('--tile-columns', String(getBalancedTileColumns(categories.length + 1)));
        // Urutan, tampilan, dan logonya sama dengan tile kategori di Beranda:
        // logo kategori dari admin, kalau belum ada logo brand produk pertama.
        categories.slice().sort(compareShortcutCategories).forEach(function(category) {
            const categoryProduct = prepaidProducts.find(function(product) {
                return (product.category || 'Lainnya') === category && getProductCategoryLogoUrl(product);
            }) || prepaidProducts.find(function(product) {
                return (product.category || 'Lainnya') === category;
            }) || null;
            const chip = createFilterChip(
                'category',
                category,
                category,
                counts[category] || 0,
                selectedCategory === category,
                categoryProduct,
                { preferCategoryLogo: true }
            );
            const icon = chip.querySelector('.brand-logo-fallback');
            if (icon) icon.className = `fas ${getShortcutCategoryIconClass(category)} brand-logo-fallback`;
            categoryListEl.appendChild(chip);
        });
        const vpnChip = document.createElement('button');
        vpnChip.type = 'button';
        vpnChip.className = 'filter-chip';
        vpnChip.dataset.openVpn = '';
        appendVpnMenuLogo(vpnChip);
        vpnChip.insertAdjacentHTML('beforeend', '<span class="filter-chip-text"><strong>VPN</strong><small>SSH, VMess, Trojan</small></span>');
        categoryListEl.appendChild(vpnChip);
        categoryCountEl.textContent = String(categories.length);
    }

    function renderBrandMenu(brands) {
        if (!brandListEl || !brandCountEl) return;

        const categoryProducts = getProductsForCategory(selectedCategory);
        const counts = countByValue(categoryProducts, 'brand', 'Tanpa Brand');
        const column = brandListEl.closest('.browser-column');
        brandListEl.innerHTML = '';
        const isLocked = !selectedCategory;
        if (column) {
            column.hidden = isLocked;
            column.classList.toggle('is-locked', isLocked);
        }
        if (isLocked) {
            brandCountEl.textContent = '0';
            return;
        }
        brands.forEach(function(brand) {
            const brandProduct = categoryProducts.find(function(product) {
                return (product.brand || 'Tanpa Brand') === brand && getProductBrandLogoUrl(product);
            }) || categoryProducts.find(function(product) {
                return (product.brand || 'Tanpa Brand') === brand;
            }) || null;
            brandListEl.appendChild(createFilterChip(
                'brand',
                brand,
                brand,
                counts[brand] || 0,
                selectedBrand === brand,
                brandProduct
            ));
        });
        brandCountEl.textContent = String(brands.length);
    }

    function renderTypeMenu(types) {
        if (!typeListEl || !typeCountEl) return;

        const column = typeListEl.closest('.browser-column');
        if (column) column.hidden = true;
        const baseProducts = getProductsForCategoryBrand(selectedCategory, selectedBrand);
        const counts = countByValue(baseProducts, 'type', 'Tanpa Type');
        typeListEl.innerHTML = '';
        const isLocked = !selectedBrand;
        typeListEl.closest('.browser-column')?.classList.toggle('is-locked', isLocked);
        if (isLocked) {
            typeListEl.appendChild(createFilterStepHint('fa-arrow-left', 'Pilih brand dulu'));
            typeCountEl.textContent = '0';
            return;
        }
        types.forEach(function(type) {
            typeListEl.appendChild(createFilterChip(
                'type',
                type,
                type,
                counts[type] || 0,
                selectedType === type
            ));
        });
        typeCountEl.textContent = String(types.length);
    }

    function setSelectedCategory(category) {
        selectedCategory = category;
        selectedBrand = '';
        selectedType = '';
        // Kategori yang cuma punya satu brand (mis. PLN) langsung ke daftar produk,
        // tidak perlu satu ketukan ekstra untuk memilih brand satu-satunya.
        if (selectedCategory) {
            const brands = getBrandsForCategory(selectedCategory);
            if (brands.length === 1) selectedBrand = brands[0];
        }
        // Nomor HP yang sudah diketik langsung memilih operatornya.
        if (selectedCategory && !selectedBrand && isPhoneNumberCategory(selectedCategory)) {
            const brands = detectPhoneOperators(buyCustomerNo).map(function(operator) {
                return findOperatorBrand(selectedCategory, operator);
            }).filter(Boolean);
            if (brands.length === 1) selectedBrand = brands[0];
        }
        resetProductLimit();
        renderProductFilters();
        renderProductGrid();
        scrollBuyStepIntoView();
    }

    function setSelectedBrand(brand) {
        selectedBrand = brand;
        selectedType = '';
        buyTypeChipsExpanded = false;
        resetProductLimit();
        renderProductFilters();
        renderProductGrid();
        scrollBuyStepIntoView();
    }

    function scrollBuyStepIntoView() {
        if (!buySectionEl || !isViewActive('buyView')) return;
        const top = buySectionEl.getBoundingClientRect().top + window.scrollY - 12;
        if (window.scrollY > top) window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    }

    // ===== Nomor HP lebih dulu untuk pulsa, kuota, dan masa aktif =====
    //
    // Nomor HP di Indonesia tidak bisa pindah operator, jadi awalan empat digit
    // pertama cukup untuk menebak operatornya. Langkah memilih operator dilewati
    // dan nomornya ikut terisi di checkout. 0851 dipakai Telkomsel dan by.U,
    // jadi untuk awalan itu user tetap memilih sendiri.
    const OPERATOR_PREFIXES = [
        { key: 'TELKOMSEL', label: 'Telkomsel', prefixes: ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'] },
        { key: 'BYU', label: 'by.U', prefixes: ['0851'] },
        { key: 'INDOSAT', label: 'Indosat', prefixes: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'] },
        { key: 'XL', label: 'XL', prefixes: ['0817', '0818', '0819', '0859', '0877', '0878'] },
        { key: 'AXIS', label: 'AXIS', prefixes: ['0831', '0832', '0833', '0838'] },
        { key: 'TRI', label: 'Tri', prefixes: ['0895', '0896', '0897', '0898', '0899'] },
        { key: 'SMARTFREN', label: 'Smartfren', prefixes: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'] },
    ];
    const OPERATOR_BRAND_ALIASES = {
        INDOSAT: ['INDOSAT', 'IM3', 'INDOSATOOREDOO'],
        TRI: ['TRI', 'THREE', '3'],
    };
    const PHONE_NUMBER_CATEGORIES = ['pulsa', 'data', 'masa aktif'];
    let buyCustomerNo = '';

    function normalizePhoneNumber(value) {
        let digits = String(value || '').replace(/\D/g, '');
        if (digits.startsWith('62')) digits = `0${digits.slice(2)}`;
        else if (digits.startsWith('8')) digits = `0${digits}`;
        return digits;
    }

    function isPhoneNumberCategory(category) {
        return PHONE_NUMBER_CATEGORIES.includes(String(category || '').trim().toLowerCase());
    }

    function detectPhoneOperators(number) {
        const digits = normalizePhoneNumber(number);
        if (digits.length < 4) return [];
        const prefix = digits.slice(0, 4);
        return OPERATOR_PREFIXES.filter(function(operator) {
            return operator.prefixes.includes(prefix);
        });
    }

    // Nama brand di katalog mengikuti Digiflazz ("TELKOMSEL", "by.U"), jadi
    // dibandingkan tanpa huruf besar kecil dan tanda baca.
    function findOperatorBrand(category, operator) {
        const aliases = OPERATOR_BRAND_ALIASES[operator.key] || [operator.key];
        return getBrandsForCategory(category).find(function(brand) {
            return aliases.includes(String(brand || '').toUpperCase().replace(/[^A-Z0-9]/g, ''));
        }) || '';
    }

    function describeOperators(operators) {
        return operators.map(function(operator) { return operator.label; }).join(' atau ');
    }

    function setBuyCustomerNo(value, source) {
        buyCustomerNo = String(value || '').trim();
        if (source !== quickNumberInputEl && quickNumberInputEl) quickNumberInputEl.value = buyCustomerNo;
        if (source !== buyNumberInputEl && buyNumberInputEl) buyNumberInputEl.value = buyCustomerNo;
    }

    // Beranda: setelah operator dikenali, tombol "Pulsa Telkomsel" dan "Kuota
    // Telkomsel" langsung membuka daftar produknya.
    function renderQuickNumberActions() {
        if (!quickNumberActionsEl || !quickNumberHintEl) return;
        const digits = normalizePhoneNumber(buyCustomerNo);
        const operators = detectPhoneOperators(digits);
        quickNumberActionsEl.innerHTML = '';

        if (!digits) {
            quickNumberHintEl.textContent = 'Operatornya kami kenali dari nomor.';
            quickNumberActionsEl.hidden = true;
            return;
        }
        if (!operators.length) {
            quickNumberHintEl.textContent = digits.length < 4
                ? 'Lanjutkan mengetik nomornya.'
                : 'Operator nomor ini belum dikenali. Pilih kategori di bawah.';
            quickNumberActionsEl.hidden = true;
            return;
        }

        quickNumberHintEl.textContent = `Nomor ${describeOperators(operators)}. Pilih yang mau dibeli:`;
        [['Pulsa', 'Pulsa'], ['Data', 'Kuota']].forEach(function([category, label]) {
            operators.forEach(function(operator) {
                const brand = findOperatorBrand(category, operator);
                if (!brand) return;
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'btn-secondary compact-action';
                button.dataset.quickCategory = category;
                button.dataset.quickBrand = brand;
                button.textContent = `${label} ${operator.label}`;
                quickNumberActionsEl.appendChild(button);
            });
        });
        quickNumberActionsEl.hidden = !quickNumberActionsEl.children.length;
    }

    // Menu Beli: nomor yang dikenali langsung memilih operatornya.
    function applyBuyNumberToSelection() {
        if (!buyNumberHintEl || !isPhoneNumberCategory(selectedCategory)) return;
        const digits = normalizePhoneNumber(buyCustomerNo);
        const operators = detectPhoneOperators(digits);
        if (!digits) {
            buyNumberHintEl.textContent = 'Operatornya kami pilihkan dari nomor ini.';
            return;
        }
        if (!operators.length) {
            buyNumberHintEl.textContent = digits.length < 4
                ? 'Lanjutkan mengetik nomornya.'
                : 'Operator nomor ini belum dikenali. Pilih operatornya di bawah.';
            return;
        }
        const brands = operators.map(function(operator) {
            return findOperatorBrand(selectedCategory, operator);
        }).filter(Boolean);
        if (brands.length === 1) {
            buyNumberHintEl.textContent = `Nomor ${describeOperators(operators)}.`;
            if (selectedBrand !== brands[0]) setSelectedBrand(brands[0]);
            return;
        }
        if (brands.length > 1) {
            buyNumberHintEl.textContent = `Nomor ini bisa ${describeOperators(operators)}. Pilih operatornya di bawah.`;
            if (selectedBrand && !brands.includes(selectedBrand)) setSelectedBrand('');
            return;
        }
        buyNumberHintEl.textContent = `Nomor ${describeOperators(operators)}, tapi produknya belum tersedia di kategori ini.`;
    }

    // Menu Beli berjalan per langkah: kategori, lalu brand, lalu produk.
    // Pencarian dan favorit langsung menampilkan daftar produk.
    function getBuyStep() {
        const keyword = (productSearchEl?.value || '').trim();
        if (keyword) return 'search';
        if (buyFavoriteOnly) return 'favorite';
        if (!selectedCategory) return 'category';
        if (!selectedBrand) return 'brand';
        return 'products';
    }

    function renderBuyStep() {
        const step = getBuyStep();
        const categoryColumn = categoryListEl?.closest('.browser-column');
        const brandColumn = brandListEl?.closest('.browser-column');
        if (categoryColumn) categoryColumn.hidden = step !== 'category';
        if (brandColumn) brandColumn.hidden = step !== 'brand';
        const browser = categoryColumn?.closest('.product-step-browser');
        if (browser) browser.hidden = step !== 'category' && step !== 'brand';
        if (productTypeQuickFilterEl) {
            const typeCount = step === 'products'
                ? getTypesForSelection(selectedCategory, selectedBrand).length
                : 0;
            productTypeQuickFilterEl.hidden = typeCount <= 1;
            if (typeCount <= 1 && buyTypeSwipeHintEl) buyTypeSwipeHintEl.hidden = true;
        }
        // Di langkah produk, kategori dan brand sudah tertulis di jejak navigasi,
        // jadi tidak perlu diulang di setiap kartu.
        if (productGridEl) productGridEl.classList.toggle('is-in-context', step === 'products');

        const phoneCategory = isPhoneNumberCategory(selectedCategory);
        if (buyNumberGroupEl) {
            buyNumberGroupEl.hidden = !phoneCategory || (step !== 'brand' && step !== 'products');
            if (buyNumberInputEl && document.activeElement !== buyNumberInputEl) {
                buyNumberInputEl.value = buyCustomerNo;
                // Nomor yang dibawa dari Beranda: keterangannya langsung
                // menyebut operator yang dikenali.
                const operators = detectPhoneOperators(buyCustomerNo);
                if (buyNumberHintEl && operators.length) {
                    buyNumberHintEl.textContent = `Nomor ${describeOperators(operators)}.`;
                }
            }
        }
        if (brandStepTitleEl) brandStepTitleEl.textContent = phoneCategory ? 'Atau pilih operatornya' : 'Pilih brand';

        if (!buyStepNavEl || !buyStepTrailEl) return;
        let trail = [];
        if (step === 'search') trail = ['Hasil pencarian'];
        else if (step === 'favorite') trail = ['Favorit saya'];
        else if (step === 'brand') trail = [selectedCategory];
        else if (step === 'products') {
            trail = [selectedCategory];
            if (String(selectedBrand).toLowerCase() !== String(selectedCategory).toLowerCase()) trail.push(selectedBrand);
        }
        trail = trail.filter(Boolean);
        buyStepNavEl.hidden = trail.length === 0;
        buyStepTrailEl.textContent = trail.join(' \u203a ');
    }

    function goBackBuyStep() {
        const step = getBuyStep();
        if (step === 'search') {
            if (productSearchEl) productSearchEl.value = '';
            resetProductLimit();
            renderProductGrid();
            return;
        }
        if (step === 'favorite') {
            buyFavoriteOnly = false;
            resetProductLimit();
            updateFavoriteFilterControls();
            renderProductFilters();
            renderProductGrid();
            return;
        }
        if (step === 'products') {
            // Kalau brand tadi dipilih otomatis (kategori satu brand), kembali langsung ke kategori.
            if (getBrandsForCategory(selectedCategory).length <= 1) setSelectedCategory('');
            else setSelectedBrand('');
            return;
        }
        if (step === 'brand') setSelectedCategory('');
    }

    function openCategoryInBuy(category) {
        if (isProductPurchaseBlocked()) {
            showToast({
                type: 'warning',
                title: isDailyCutOffActive() ? 'Sedang cut off' : 'Pembelian maintenance',
                message: getProductPurchaseBlockedMessage(),
            });
            return;
        }
        const value = String(category || '').trim();
        const match = getCategories().find(function(item) {
            return String(item || '').trim() === value;
        }) || value;
        buyFavoriteOnly = false;
        if (productSearchEl) productSearchEl.value = '';
        updateFavoriteFilterControls();
        showView('buyView');
        setSelectedCategory(match);
    }

    function setSelectedType(type) {
        selectedType = type;
        resetProductLimit();
        renderProductFilters();
        renderProductGrid();
    }

    function handleFilterChipClick(button) {
        const type = button.dataset.filterType;
        const value = button.dataset.filterValue || '';

        if (type === 'category') {
            setSelectedCategory(value);
            return;
        }

        if (type === 'brand') {
            setSelectedBrand(value);
            return;
        }

        if (type === 'type') {
            setSelectedType(value);
        }
    }

    function getFilteredProducts() {
        const keyword = (productSearchEl?.value || '').trim().toLowerCase();
        // Di daftar favorit, produk yang sedang tidak tersedia ikut ditampilkan
        // dengan tanda gangguan. Di katalog umum produk itu tetap disembunyikan.
        const source = buyFavoriteOnly
            ? prepaidProducts.concat(getFavoriteFallbackProducts())
            : prepaidProducts;

        return source.filter(function(product) {
            const productCategory = product.category || 'Lainnya';
            const productBrand = product.brand || 'Tanpa Brand';
            const productType = product.type || 'Tanpa Type';
            // Pencarian mencari di semua produk. Pilihan kategori/brand tetap tersimpan
            // dan dipakai lagi setelah kotak pencarian dikosongkan.
            const ignoreSelection = buyFavoriteOnly || Boolean(keyword);
            const matchesCategory = ignoreSelection || !selectedCategory || productCategory === selectedCategory;
            const matchesBrand = ignoreSelection || !selectedBrand || productBrand === selectedBrand;
            const matchesType = ignoreSelection || !selectedType || productType === selectedType;
            const searchable = [
                product.product_name,
                product.buyer_sku_code,
                product.brand,
                product.category,
                product.type,
                product.desc,
            ].filter(Boolean).join(' ').toLowerCase();
            return matchesCategory
                && matchesBrand
                && matchesType
                && (!buyFavoriteOnly || favoriteProductSkus.has(String(product.buyer_sku_code || '')))
                && (!keyword || searchable.includes(keyword));
        });
    }

    function renderProductGrid() {
        renderProductGridContent();
        renderBuyStep();
    }

    function renderProductGridContent() {
        if (!productGridEl || !productStatusEl) return;

        const keyword = (productSearchEl?.value || '').trim();
        const products = getFilteredProducts();
        const totalPages = Math.max(1, Math.ceil(products.length / productPageSize));
        if (productPage > totalPages) productPage = totalPages;
        if (productPage < 1) productPage = 1;
        const pageStart = (productPage - 1) * productPageSize;
        const visibleProducts = products.slice(pageStart, pageStart + productPageSize);
        productGridEl.innerHTML = '';
        productGridEl.classList.remove('grouped-by-type');

        if (!prepaidProducts.length) {
            setProductStatus('Belum ada produk prabayar.');
            updateLoadMoreButton(0, 0);
            return;
        }

        // Di langkah kategori dan brand, pilihan kartunya sudah menjelaskan diri sendiri.
        if (!buyFavoriteOnly && !keyword && (!selectedCategory || !selectedBrand)) {
            setProductStatus('');
            updateLoadMoreButton(0, 0);
            return;
        }

        if (!products.length) {
            setProductStatus(buyFavoriteOnly
                ? 'Belum ada produk favorit yang cocok dengan pencarian.'
                : 'Produk tidak ditemukan.');
            updateLoadMoreButton(0, 0);
            return;
        }

        setProductStatus(keyword || buyFavoriteOnly
            ? `${products.length} produk`
            : `${products.length} produk, dari yang termurah`);
        // Daftarnya rata, urut dari harga termurah. Dulu tiap halaman dipecah
        // per tipe, sehingga muncul judul seperti "GamesMAX, 1 produk tampil"
        // untuk satu kartu. Tipenya tertulis di kartu dan bisa dipilih lewat
        // tombol tipe di atas daftar.
        visibleProducts.map(getDisplayProduct).filter(Boolean).forEach(function(product) {
            productGridEl.appendChild(createProductCard(product));
        });
        updateLoadMoreButton(visibleProducts.length, products.length);
    }

    function resetProductLimit() {
        visibleProductLimit = productPageSize;
        productPage = 1;
    }

    function goToProductPage(page) {
        productPage = page;
        renderProductGrid();
        const anchor = buyStepNavEl && !buyStepNavEl.hidden ? buyStepNavEl : productStatusEl;
        anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function showMoreProducts() {
        visibleProductLimit += productPageSize;
        renderProductGrid();
    }

    function hideSomeProducts() {
        visibleProductLimit = Math.max(productPageSize, visibleProductLimit - productPageSize);
        renderProductGrid();
    }

    function updateLoadMoreButton(_visibleCount, totalCount) {
        const totalPages = Math.ceil(Number(totalCount || 0) / productPageSize);
        if (productPaginationEl) productPaginationEl.hidden = totalPages <= 1;
        if (productPageInfoEl) productPageInfoEl.textContent = `${productPage} / ${Math.max(1, totalPages)}`;
        if (productPrevPageBtn) productPrevPageBtn.disabled = productPage <= 1;
        if (productNextPageBtn) productNextPageBtn.disabled = productPage >= totalPages;
        if (loadMoreProductsBtn) loadMoreProductsBtn.hidden = true;
        if (hideProductsBtn) hideProductsBtn.hidden = true;
    }

    function createProductCard(product) {
        const card = document.createElement('article');
        const productDisrupted = isDisruptedProduct(product);
        card.className = productDisrupted ? 'prepaid-product-card product-disrupted' : 'prepaid-product-card';

        const top = document.createElement('div');
        top.className = 'prepaid-product-top';

        const icon = document.createElement('span');
        icon.className = 'prepaid-product-icon';
        appendBrandLogoOrIcon(icon, product, getProductIconClass(product));
        top.appendChild(icon);

        const topActions = document.createElement('div');
        topActions.className = 'prepaid-product-top-actions';
        topActions.appendChild(createTextElement(
            'span',
            productDisrupted ? 'product-badge product-badge-disrupted' : 'product-badge',
            productDisrupted ? 'Gangguan' : (product.category || 'Prabayar')
        ));
        const sku = String(product.buyer_sku_code || '').trim();
        const isFavorite = favoriteProductSkus.has(sku);
        const favoriteButton = document.createElement('button');
        favoriteButton.type = 'button';
        favoriteButton.className = isFavorite ? 'product-favorite-button active' : 'product-favorite-button';
        favoriteButton.dataset.favoriteSku = sku;
        favoriteButton.setAttribute('aria-label', isFavorite ? 'Hapus dari favorit' : 'Tambahkan ke favorit');
        favoriteButton.setAttribute('aria-pressed', isFavorite ? 'true' : 'false');
        favoriteButton.title = isFavorite ? 'Hapus dari favorit' : 'Tambahkan ke favorit';
        favoriteButton.innerHTML = `<i class="${isFavorite ? 'fas' : 'far'} fa-star"></i>`;
        topActions.appendChild(favoriteButton);
        top.appendChild(topActions);

        const body = document.createElement('div');
        body.appendChild(createTextElement('h3', '', product.product_name || product.buyer_sku_code || 'Produk'));
        body.appendChild(createTextElement('p', 'product-meta', [product.brand, product.type].filter(Boolean).join(' · ') || '-'));
        const priceEl = document.createElement('div');
        priceEl.className = product.is_promo_active ? 'product-price product-price-promo' : 'product-price';
        if (product.is_promo_active && product.promo_original_price && product.promo_final_price) {
            const promoLabel = document.createElement('span');
            promoLabel.className = 'product-promo-label';
            promoLabel.textContent = 'Promo';
            const original = document.createElement('span');
            original.className = 'product-price-original';
            original.textContent = formatRupiah(product.promo_original_price);
            const final = document.createElement('span');
            final.className = 'product-price-final';
            final.textContent = formatRupiah(product.promo_final_price);
            priceEl.appendChild(promoLabel);
            priceEl.appendChild(original);
            priceEl.appendChild(final);
        } else {
            priceEl.textContent = formatRupiah(product.price);
        }
        body.appendChild(priceEl);

        const button = document.createElement('button');
        button.className = 'btn-service';
        button.type = 'button';
        button.dataset.sku = product.buyer_sku_code || '';
        button.dataset.productName = product.product_name || product.buyer_sku_code || 'Produk';
        const productBlocked = isProductPurchaseBlocked();
        button.dataset.productDisrupted = productDisrupted ? '1' : '0';
        button.disabled = productBlocked && !productDisrupted;
        button.title = productBlocked
            ? getProductPurchaseBlockedMessage()
            : (productDisrupted ? getProductDisruptionMessage(product) : '');
        button.textContent = productDisrupted
            ? 'Gangguan'
            : (productBlocked && isDailyCutOffActive() ? 'Cut off' : (productBlocked ? 'Maintenance' : 'Beli'));

        card.appendChild(top);
        card.appendChild(body);
        card.appendChild(button);

        return card;
    }

    function mapStatus(value) {
        const text = (value || '').toLowerCase();
        if (text.includes('success') || text.includes('sukses')) return 'Sukses';
        if (text.includes('failed') || text.includes('gagal')) return 'Gagal';
        return 'Proses';
    }

    function mapOrderStatusToHistoryStatus(status) {
        const value = String(status || '').toUpperCase();
        if (value === 'SUCCESS') return 'Sukses';
        if (['FAILED', 'EXPIRED', 'CANCELED'].includes(value)) return 'Gagal';
        return 'Proses';
    }

    function mapOrderStatusLabel(status) {
        const value = String(status || '').toUpperCase();
        if (value === 'WAITING_PAYMENT') return 'Menunggu pembayaran QRIS';
        if (value === 'PAID') return 'Pembayaran diterima';
        if (value === 'PROCESSING') return 'Sedang diproses';
        if (value === 'SUCCESS') return 'Transaksi berhasil';
        if (value === 'FAILED') return 'Transaksi gagal';
        if (value === 'EXPIRED') return 'QRIS kedaluwarsa';
        if (value === 'CANCELED') return 'QRIS dibatalkan';
        if (value === 'REFUNDED') return 'Gagal, saldo dikembalikan';
        return status || 'Proses';
    }

    function isFinalOrderStatus(status) {
        return ['SUCCESS', 'FAILED', 'EXPIRED', 'CANCELED', 'REFUNDED'].includes(String(status || '').toUpperCase());
    }

    function isOngoingOrderStatus(status) {
        return ['WAITING_PAYMENT', 'PAID', 'PROCESSING'].includes(String(status || '').toUpperCase());
    }

    function getOrderTypeLabel(order) {
        return String(order?.type || '') === 'WALLET_TOPUP' ? 'Topup Saldo' : 'Pembelian Produk';
    }

    function getOrderTitle(order) {
        if (String(order?.type || '') === 'WALLET_TOPUP') return 'Topup Saldo';
        return order?.productName || order?.buyerSkuCode || 'Pembelian Produk';
    }

    function getOngoingOrderDescription(order) {
        const status = String(order?.status || '').toUpperCase();
        const expiryHint = getOrderExpiryHint(order);
        if (status === 'WAITING_PAYMENT') {
            return ['Bayar lewat QRIS untuk melanjutkan', expiryHint].filter(Boolean).join('. ') + '.';
        }
        if (status === 'PAID') return 'Pembayaran sudah diterima. Pesanan sedang disiapkan.';
        if (status === 'PROCESSING') return 'Biasanya selesai dalam beberapa menit. Halaman ini boleh ditutup, statusnya diperbarui otomatis.';
        return mapOrderStatusLabel(status);
    }

    function getOrderAmountLabel(order) {
        const amount = Number(order?.amount || 0);
        return Number.isFinite(amount) && amount > 0 ? formatRupiah(amount) : '-';
    }

    function upsertPaymentOrderCache(order) {
        if (!order?.orderCode) return;
        const index = paymentOrdersCache.findIndex(function(item) {
            return item.orderCode === order.orderCode;
        });
        if (index >= 0) {
            paymentOrdersCache[index] = { ...paymentOrdersCache[index], ...order };
        } else {
            paymentOrdersCache.unshift(order);
        }
        renderOngoingOrders();
    }

    function renderOngoingOrdersIn(sectionEl, listEl, orders) {
        if (!sectionEl || !listEl) return;

        listEl.innerHTML = '';
        sectionEl.hidden = orders.length === 0;
        if (!orders.length) return;

        orders.forEach(function(order) {
            const status = String(order?.status || '').toUpperCase();
            const isWaiting = status === 'WAITING_PAYMENT';
            const isProcessing = status === 'PAID' || status === 'PROCESSING';
            const card = document.createElement('article');
            card.className = `ongoing-order-card ${isWaiting ? 'waiting' : 'processing'}`;

            // Satu baris judul dan harga, satu baris nomor tujuan dan kode, satu
            // kalimat tentang langkah berikutnya. Tombol cek status per kartu
            // dibuang karena kepala daftarnya sudah punya "Cek status".
            const content = document.createElement('div');
            content.className = 'ongoing-order-main';
            content.appendChild(createTextElement('h3', '', getOrderTitle(order)));
            content.appendChild(createTextElement(
                'p',
                'ongoing-order-meta',
                [order.customerNo, order.orderCode ? `Kode ${order.orderCode}` : ''].filter(Boolean).join(' · ')
            ));
            content.appendChild(createTextElement('p', 'ongoing-order-desc', getOngoingOrderDescription(order)));

            const side = document.createElement('div');
            side.className = 'ongoing-order-side';
            side.appendChild(createTextElement('strong', 'ongoing-order-amount', getOrderAmountLabel(order)));
            side.appendChild(createTextElement('span', `status ${isProcessing ? 'processing' : 'pending'}`, mapOrderStatusLabel(status)));

            const actions = document.createElement('div');
            actions.className = 'ongoing-order-actions';

            const resumeBtn = document.createElement('button');
            resumeBtn.type = 'button';
            resumeBtn.className = isWaiting ? 'btn-primary compact-action' : 'btn-secondary compact-action';
            resumeBtn.dataset.resumeOrderCode = order.orderCode || '';
            resumeBtn.textContent = isWaiting ? 'Lanjut bayar' : 'Lihat detail';
            actions.appendChild(resumeBtn);

            if (isWaiting) {
                const cancelBtn = document.createElement('button');
                cancelBtn.type = 'button';
                cancelBtn.className = 'text-button danger-action';
                cancelBtn.dataset.cancelOrderCode = order.orderCode || '';
                cancelBtn.textContent = 'Batalkan pesanan';
                actions.appendChild(cancelBtn);
            }

            card.appendChild(content);
            card.appendChild(side);
            card.appendChild(actions);
            listEl.appendChild(card);
        });
    }

    function renderOngoingOrders() {
        const orders = paymentOrdersCache
            .filter(function(order) {
                return isOngoingOrderStatus(order?.status);
            })
            .sort(function(a, b) {
                return (new Date(b.updatedAt || b.createdAt).getTime() || 0) - (new Date(a.updatedAt || a.createdAt).getTime() || 0);
            });

        renderOngoingOrdersIn(ongoingOrdersSectionEl, ongoingOrderListEl, orders);
        renderOngoingOrdersIn(historyOngoingOrdersSectionEl, historyOngoingOrderListEl, orders);
        // Jumlah di filter Riwayat ikut berubah, dan bagian "Sedang diproses"
        // di Riwayat mengikuti filter yang dipilih.
        updateHistoryFilterUi();
    }

    if (historyFilterEl) {
        historyFilterEl.addEventListener('click', function(event) {
            const button = event.target.closest('[data-history-filter]');
            if (!button || !HISTORY_FILTERS[button.dataset.historyFilter]) return;
            historyFilter = button.dataset.historyFilter;
            transactionPage = 1;
            renderTransactionPage();
        });
    }

    function setTopupStatus(message, type) {
        setStatusElement(topupStatusEl, message, type, 'checkout-status');
    }

    function setPasswordChangeStatus(message, type) {
        setStatusElement(passwordChangeStatusEl, message, type, 'checkout-status');
    }

    function clearCheckoutFinalAutoHide() {
        if (checkoutFinalHideTimer) {
            clearTimeout(checkoutFinalHideTimer);
            checkoutFinalHideTimer = null;
        }
        if (checkoutFinalCountdownTimer) {
            clearInterval(checkoutFinalCountdownTimer);
            checkoutFinalCountdownTimer = null;
        }
    }

    function startCheckoutFinalAutoHide(baseMessage, seconds = 10) {
        if (!checkoutPaymentInfoEl) return;
        clearCheckoutFinalAutoHide();

        let remaining = Math.max(1, Number(seconds) || 10);
        const cleanMessage = String(baseMessage || '').trim();
        const renderCountdown = function() {
            checkoutPaymentInfoEl.textContent = `${cleanMessage} Tampilan ini akan ditutup dalam ${remaining} detik.`;
        };

        renderCountdown();
        checkoutFinalCountdownTimer = setInterval(function() {
            remaining -= 1;
            if (remaining <= 0) {
                clearCheckoutFinalAutoHide();
                closeCheckout();
                return;
            }
            renderCountdown();
        }, 1000);

        checkoutFinalHideTimer = setTimeout(function() {
            clearCheckoutFinalAutoHide();
            closeCheckout();
        }, remaining * 1000);
    }

    function clearTopupFinalAutoHide() {
        if (topupFinalHideTimer) {
            clearTimeout(topupFinalHideTimer);
            topupFinalHideTimer = null;
        }
        if (topupFinalCountdownTimer) {
            clearInterval(topupFinalCountdownTimer);
            topupFinalCountdownTimer = null;
        }
    }

    function startTopupFinalAutoHide(baseMessage, seconds = 10) {
        if (!topupPaymentInfoEl) return;
        clearTopupFinalAutoHide();

        let remaining = Math.max(1, Number(seconds) || 10);
        const cleanMessage = String(baseMessage || '').trim();
        const renderCountdown = function() {
            topupPaymentInfoEl.textContent = `${cleanMessage} Informasi ini akan hilang dalam ${remaining} detik.`;
        };

        renderCountdown();
        topupFinalCountdownTimer = setInterval(function() {
            remaining -= 1;
            if (remaining <= 0) {
                clearTopupFinalAutoHide();
                if (topupPaymentResultEl) topupPaymentResultEl.hidden = true;
                setTopupStatus('');
                activeTopupOrderCode = null;
                return;
            }
            renderCountdown();
        }, 1000);

        topupFinalHideTimer = setTimeout(function() {
            clearTopupFinalAutoHide();
            if (topupPaymentResultEl) topupPaymentResultEl.hidden = true;
            setTopupStatus('');
            activeTopupOrderCode = null;
        }, remaining * 1000);
    }

    function setCheckoutProgress(step) {
        const previousPhase = checkoutPhase;
        checkoutPhase = CHECKOUT_STEPS.includes(step) ? step : 'detail';
        // Kartu digambar ulang setiap polling dengan tahap yang sama, dan
        // ringkasan yang sedang dilihat dibiarkan. Kalau tahapnya berganti,
        // misalnya pesanan selesai, user dibawa ke tahap itu supaya hasilnya
        // langsung terlihat.
        if (checkoutPhase !== previousPhase) checkoutReviewStep = '';
        // Satu tahap satu tampilan: form dan ringkasan harga hanya muncul saat
        // mengisi detail. Setelah order dibuat, yang tersisa cuma kartu tahap itu.
        const onForm = checkoutPhase === 'detail';
        if (checkoutFormEl) checkoutFormEl.hidden = !onForm;
        if (checkoutSummaryEl) checkoutSummaryEl.hidden = !onForm;
        syncCheckoutReview();
    }

    // Tahap sebelumnya hanya bisa dilihat setelah pesanan dibuat, dan isinya
    // diambil dari pesanan itu. Form tidak pernah dibuka lagi dari sini.
    function canReviewCheckoutSteps() {
        return checkoutPhase !== 'detail'
            && Boolean(activeCheckoutOrderCode)
            && shownCheckoutOrder?.orderCode === activeCheckoutOrderCode;
    }

    function syncCheckoutReview() {
        const activeIndex = CHECKOUT_STEPS.indexOf(checkoutPhase);
        const canReview = canReviewCheckoutSteps();
        if (!canReview || CHECKOUT_STEPS.indexOf(checkoutReviewStep) >= activeIndex) {
            checkoutReviewStep = '';
        }
        const reviewing = Boolean(checkoutReviewStep);

        checkoutProgressStepEls.forEach(function(item) {
            const itemStep = String(item.dataset.checkoutStep || '');
            const itemIndex = CHECKOUT_STEPS.indexOf(itemStep);
            const isActive = itemIndex === activeIndex;
            item.classList.toggle('active', isActive);
            item.classList.toggle('done', itemIndex >= 0 && itemIndex < activeIndex);
            item.classList.toggle('viewing', reviewing && itemStep === checkoutReviewStep);
            item.disabled = !canReview || itemIndex < 0 || itemIndex > activeIndex;
            if (isActive) {
                item.setAttribute('aria-current', 'step');
            } else {
                item.removeAttribute('aria-current');
            }
        });

        // Kartu tahap berjalan tetap diperbarui polling di belakang, hanya
        // disembunyikan selama ringkasan tampil.
        if (checkoutPaymentResultEl) checkoutPaymentResultEl.hidden = checkoutPhase === 'detail' || reviewing;
        if (!checkoutReviewEl) return;
        checkoutReviewEl.hidden = !reviewing;
        if (reviewing) renderCheckoutReview(checkoutReviewStep, shownCheckoutOrder);
    }

    function getCheckoutPaymentMethodText(order) {
        if (String(order?.method || '') === 'WALLET_BALANCE') return 'Pakai saldo';
        return isMidtransOrder(order) ? 'Bayar langsung' : 'Bayar langsung (QRIS)';
    }

    function getCheckoutPaymentStatus(order) {
        const status = String(order?.status || '');
        if (status === 'REFUNDED') return { text: 'Dibayar, dana dikembalikan ke saldo', tone: 'warning' };
        if (order?.paymentSettledAt || ['PAID', 'PROCESSING', 'SUCCESS'].includes(status)) {
            return { text: 'Berhasil dibayar', tone: 'success' };
        }
        if (status === 'WAITING_PAYMENT') return { text: 'Menunggu pembayaran', tone: 'waiting' };
        if (status === 'EXPIRED') return { text: 'Kedaluwarsa, belum dibayar', tone: 'failed' };
        if (status === 'CANCELED') return { text: 'Dibatalkan', tone: 'failed' };
        return { text: 'Gagal', tone: 'failed' };
    }

    function getCheckoutProcessStatus(order) {
        const status = String(order?.status || '');
        if (status === 'SUCCESS') return { text: 'Berhasil', tone: 'success' };
        if (status === 'REFUNDED') return { text: 'Gagal, saldo dikembalikan', tone: 'warning' };
        if (status === 'PAID' || status === 'PROCESSING') return { text: 'Sedang diproses', tone: 'waiting' };
        if (!order?.paymentSettledAt) return { text: 'Tidak diproses', tone: 'failed' };
        return { text: 'Gagal', tone: 'failed' };
    }

    function buildCheckoutReview(step, order) {
        const amount = getOrderAmountLabel(order);
        if (step === 'detail') {
            const category = String(checkoutCategoryEl?.textContent || '').trim();
            return {
                title: 'Detail pesanan',
                icon: 'fa-list-check',
                rows: [
                    ['Produk', order.productName || selectedCheckoutProduct?.product_name || '-'],
                    ['Kategori', category && category !== '-' ? category : ''],
                    ['Nomor tujuan / ID', order.customerNo || '-'],
                    ['Harga', amount],
                    ['Kode order', order.orderCode || '-'],
                    ['Dibuat', formatDateTime(order.createdAt)],
                ],
                note: 'Detail tidak bisa diubah setelah pesanan dibuat.',
            };
        }
        if (step === 'pay') {
            const payment = getCheckoutPaymentStatus(order);
            return {
                title: 'Pembayaran',
                icon: String(order.method || '') === 'WALLET_BALANCE' ? 'fa-wallet' : 'fa-qrcode',
                rows: [
                    ['Metode', getCheckoutPaymentMethodText(order)],
                    ['Total', amount],
                    ['Status', payment.text, payment.tone],
                    ['Dibayar', order.paymentSettledAt ? formatDateTime(order.paymentSettledAt) : ''],
                    ['Dikembalikan', order.refundedAt ? formatDateTime(order.refundedAt) : ''],
                ],
                note: '',
            };
        }
        const processStatus = getCheckoutProcessStatus(order);
        return {
            title: 'Proses pesanan',
            icon: 'fa-rotate',
            rows: [
                ['Status', processStatus.text, processStatus.tone],
                ['Keterangan', order.paymentSettledAt ? (order.message || '') : 'Pembayaran tidak diterima, jadi pesanan tidak diproses.'],
                ['Dikirim ke supplier', order.digiflazzExecutedAt ? formatDateTime(order.digiflazzExecutedAt) : ''],
            ],
            note: '',
        };
    }

    function renderCheckoutReview(step, order) {
        const content = buildCheckoutReview(step, order || {});
        if (checkoutReviewTitleEl) {
            checkoutReviewTitleEl.textContent = '';
            const icon = document.createElement('i');
            icon.className = `fas ${content.icon}`;
            checkoutReviewTitleEl.append(icon, document.createTextNode(` ${content.title}`));
        }
        if (checkoutReviewListEl) {
            checkoutReviewListEl.textContent = '';
            content.rows.forEach(function([label, value, tone]) {
                if (!value) return;
                const row = document.createElement('div');
                row.className = 'checkout-review-row';
                const term = document.createElement('dt');
                term.textContent = label;
                const detail = document.createElement('dd');
                detail.textContent = value;
                if (tone) detail.className = `checkout-review-status ${tone}`;
                row.append(term, detail);
                checkoutReviewListEl.appendChild(row);
            });
        }
        if (checkoutReviewNoteEl) {
            checkoutReviewNoteEl.textContent = content.note;
            checkoutReviewNoteEl.hidden = !content.note;
        }
        if (checkoutReviewBackBtn) {
            const backLabel = {
                pay: 'Kembali ke pembayaran',
                process: 'Kembali ke proses',
                done: 'Kembali ke hasil',
            }[checkoutPhase] || 'Kembali';
            checkoutReviewBackBtn.innerHTML = `<i class="fas fa-arrow-left"></i> ${backLabel}`;
        }
    }

    function setCheckoutPaymentState(message, type = 'waiting', iconClass = 'fa-clock') {
        if (!checkoutPaymentStateEl) return;
        if (!message) {
            checkoutPaymentStateEl.hidden = true;
            checkoutPaymentStateEl.innerHTML = '';
            checkoutPaymentStateEl.className = 'payment-state-strip';
            return;
        }

        checkoutPaymentStateEl.hidden = false;
        const stateType = type || 'waiting';
        const loadingClass = (stateType === 'waiting' || stateType === 'processing') ? ' loading' : '';
        checkoutPaymentStateEl.className = `payment-state-strip ${stateType}${loadingClass}`;
        checkoutPaymentStateEl.innerHTML = `<i class="fas ${iconClass}"></i><span>${escapeHtml(message)}</span>`;
    }

    function buildCheckoutSupportMessage() {
        const productName = selectedCheckoutProduct?.product_name || checkoutProductNameEl?.textContent || '-';
        const customerNo = isMobileLegendsProduct(selectedCheckoutProduct)
            ? [mlUserIdInputEl?.value, mlZoneIdInputEl?.value].filter(Boolean).join(' / ')
            : String(customerNoInputEl?.value || '').trim();
        return [
            'Halo CS 1FORCR KUOTA, saya butuh bantuan transaksi.',
            '',
            `Email akun: ${userEmail || '-'}`,
            `Kode order: ${activeCheckoutOrderCode || '-'}`,
            `Produk: ${productName}`,
            `Tujuan/ID: ${customerNo || '-'}`,
            '',
            'Kendala:',
        ].join('\n');
    }

    function openCustomerServiceWhatsapp(message) {
        if (!csWhatsappNumber) return false;
        const cleanNumber = csWhatsappNumber.startsWith('+')
            ? csWhatsappNumber.slice(1)
            : csWhatsappNumber.replace(/\D/g, '');
        if (!cleanNumber) return false;
        const waUrl = `https://wa.me/${encodeURIComponent(cleanNumber)}?text=${encodeURIComponent(message || csWhatsappDefaultMessage)}`;
        window.open(waUrl, '_blank', 'noopener');
        return true;
    }

    function openCustomerServiceEmail(message, subject = 'Bantuan Transaksi 1FORCR KUOTA') {
        const mailUrl = `mailto:${encodeURIComponent(csEmailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message || csWhatsappDefaultMessage)}`;
        window.location.href = mailUrl;
    }

    function openCustomerService(message) {
        const supportMessage = message || csWhatsappDefaultMessage;
        if (openCustomerServiceWhatsapp(supportMessage)) return;
        openCustomerServiceEmail(supportMessage);
    }

    // Tampilkan hanya tombol yang relevan untuk tahap ini, sisanya disembunyikan.
    function setCheckoutActions(keys) {
        const buttons = {
            snap: openSnapPaymentBtn,
            done: checkoutDoneBtn,
            retry: checkoutRetryBtn,
            history: checkoutHistoryBtn,
            refresh: refreshPaymentStatusBtn,
            cancel: cancelPaymentOrderBtn,
            cs: checkoutContactCsBtn,
        };
        const wanted = new Set(keys || []);
        Object.keys(buttons).forEach(function(key) {
            if (buttons[key]) buttons[key].hidden = !wanted.has(key);
        });
        if (checkoutPaymentActionsEl) checkoutPaymentActionsEl.hidden = wanted.size === 0;
    }

    function setCheckoutPaymentNote(message) {
        if (!checkoutPaymentNoteEl) return;
        checkoutPaymentNoteEl.textContent = message || '';
        checkoutPaymentNoteEl.hidden = !message;
    }

    function setCheckoutPaymentTitle(text, iconClass) {
        if (!checkoutPaymentTitleEl) return;
        checkoutPaymentTitleEl.textContent = '';
        if (iconClass) {
            const icon = document.createElement('i');
            icon.className = `fas ${iconClass}`;
            checkoutPaymentTitleEl.appendChild(icon);
            checkoutPaymentTitleEl.appendChild(document.createTextNode(' '));
        }
        checkoutPaymentTitleEl.appendChild(document.createTextNode(text || ''));
    }

    function hideCheckoutPaymentExtras() {
        const qrisFrame = checkoutQrisImageEl?.closest('.qris-frame') || null;
        if (checkoutQrisImageEl) checkoutQrisImageEl.hidden = true;
        if (qrisFrame) qrisFrame.hidden = true;
        if (checkoutPaymentHintsEl) {
            checkoutPaymentHintsEl.innerHTML = '';
            checkoutPaymentHintsEl.hidden = true;
        }
        if (checkoutQrisSaveEl) checkoutQrisSaveEl.hidden = true;
        if (checkoutResultListEl) {
            checkoutResultListEl.innerHTML = '';
            checkoutResultListEl.hidden = true;
        }
        setCheckoutPaymentNote('');
    }

    function setCheckoutHints(lines) {
        if (!checkoutPaymentHintsEl) return;
        checkoutPaymentHintsEl.innerHTML = '';
        (lines || []).filter(Boolean).forEach(function(line) {
            checkoutPaymentHintsEl.appendChild(createTextElement('span', '', line));
        });
        checkoutPaymentHintsEl.hidden = !checkoutPaymentHintsEl.children.length;
    }

    function setCheckoutQrisVisible(visible) {
        if (!checkoutPaymentResultEl) return;
        clearCheckoutFinalAutoHide();
        hideCheckoutProcessTips();
        const qrisFrame = checkoutQrisImageEl?.closest('.qris-frame') || null;
        if (!visible) resetSnapContainer('checkout');
        checkoutPaymentResultEl.hidden = !visible;
        checkoutPaymentResultEl.classList.remove('processing-state', 'final-state', 'is-success', 'is-failed');
        setCheckoutProgress(visible ? 'pay' : 'detail');
        setCheckoutPaymentState('');
        setCheckoutPaymentTitle('Bayar lewat QRIS');
        if (checkoutPaymentInfoEl) checkoutPaymentInfoEl.textContent = '';
        hideCheckoutPaymentExtras();
        if (checkoutQrisImageEl) checkoutQrisImageEl.hidden = !visible;
        if (qrisFrame) qrisFrame.hidden = !visible;
        setCheckoutActions(visible ? ['refresh', 'cancel'] : []);
    }

    // Petunjuk bayar. Kebanyakan user membuka dari HP, jadi tidak bisa memindai
    // QR di layarnya sendiri.
    function showCheckoutQrisHints(order) {
        const qrisUrl = String(order?.qrisUrl || '');
        if (checkoutQrisSaveEl) {
            checkoutQrisSaveEl.hidden = !qrisUrl;
            if (qrisUrl) checkoutQrisSaveEl.href = qrisUrl;
        }
        setCheckoutHints([
            'Dari HP ini: simpan gambar QRIS, buka e-wallet atau m-banking, lalu pilih bayar dengan QRIS dari galeri.',
            'Dari HP lain: pindai kode di atas.',
            'Halaman ini berganti sendiri begitu pembayaran masuk.',
        ]);
    }

    // ===== Info selama pesanan diproses =====
    //
    // Pesanan bisa lama kalau supplier pertama gagal dan cadangannya dicoba satu
    // per satu (lihat docs/PRODUCT_FALLBACK.md). Kalau sudah lebih dari satu
    // menit sejak pembayaran diterima, kartu proses menampilkan permintaan maaf
    // yang tetap di tempat, dan di bawahnya info bergeser: saldo yang kembali
    // otomatis kalau gagal, cara menghubungi admin, dan tips. Geraknya sama
    // dengan banner halaman utama: otomatis tiap 5 detik dan bisa digeser sendiri.
    function getProcessTipSlides() {
        return checkoutProcessTipsTrackEl ? Array.from(checkoutProcessTipsTrackEl.children) : [];
    }

    function getActiveProcessTipIndex() {
        if (!checkoutProcessTipsTrackEl) return 0;
        const width = checkoutProcessTipsTrackEl.clientWidth || 1;
        return Math.round(checkoutProcessTipsTrackEl.scrollLeft / width);
    }

    function setActiveProcessTipDot(activeIndex) {
        if (!checkoutProcessTipsDotsEl) return;
        Array.from(checkoutProcessTipsDotsEl.children).forEach(function(dot, index) {
            dot.classList.toggle('active', index === activeIndex);
            dot.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
        });
    }

    function goToProcessTip(index) {
        const total = getProcessTipSlides().length;
        if (!checkoutProcessTipsTrackEl || !total) return;
        const safeIndex = ((index % total) + total) % total;
        checkoutProcessTipsTrackEl.scrollTo({
            left: safeIndex * checkoutProcessTipsTrackEl.clientWidth,
            behavior: 'smooth',
        });
        setActiveProcessTipDot(safeIndex);
    }

    function stopProcessTipsAutoplay() {
        if (processTipsAutoplayTimer) {
            clearInterval(processTipsAutoplayTimer);
            processTipsAutoplayTimer = null;
        }
    }

    function startProcessTipsAutoplay() {
        stopProcessTipsAutoplay();
        if (getProcessTipSlides().length <= 1) return;
        processTipsAutoplayTimer = setInterval(function() {
            // Tidak menggeser kalau tab atau kartunya sedang tidak terlihat.
            if (document.hidden || !checkoutProcessTipsEl || checkoutProcessTipsEl.offsetParent === null) return;
            goToProcessTip(getActiveProcessTipIndex() + 1);
        }, BANNER_AUTOPLAY_MS);
    }

    function renderProcessTipDots() {
        if (!checkoutProcessTipsDotsEl) return;
        const slides = getProcessTipSlides();
        if (checkoutProcessTipsDotsEl.children.length === slides.length) return;
        checkoutProcessTipsDotsEl.innerHTML = '';
        slides.forEach(function(_slide, index) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'banner-dot';
            dot.setAttribute('aria-label', `Info ${index + 1}`);
            dot.addEventListener('click', function() {
                goToProcessTip(index);
                startProcessTipsAutoplay();
            });
            checkoutProcessTipsDotsEl.appendChild(dot);
        });
    }

    function showCheckoutProcessTips() {
        if (!checkoutProcessTipsEl || !checkoutProcessTipsEl.hidden) return;
        renderProcessTipDots();
        checkoutProcessTipsEl.hidden = false;
        if (checkoutProcessTipsTrackEl) checkoutProcessTipsTrackEl.scrollLeft = 0;
        setActiveProcessTipDot(0);
        startProcessTipsAutoplay();
    }

    function hideCheckoutProcessTips() {
        if (processTipsShowTimer) {
            clearTimeout(processTipsShowTimer);
            processTipsShowTimer = null;
        }
        stopProcessTipsAutoplay();
        processTipsOrderCode = '';
        if (checkoutProcessTipsEl) checkoutProcessTipsEl.hidden = true;
    }

    // Waktunya dihitung dari pembayaran diterima, jadi pesanan yang dibuka lagi
    // dari riwayat setelah lama diproses langsung menampilkan infonya. Kartu
    // proses digambar ulang setiap polling, jadi jadwal untuk pesanan yang sama
    // tidak diulang.
    function scheduleCheckoutProcessTips(order) {
        const orderCode = String(order?.orderCode || order?.refId || '');
        const alreadyHandled = processTipsOrderCode === orderCode
            && (Boolean(processTipsShowTimer) || (checkoutProcessTipsEl && !checkoutProcessTipsEl.hidden));
        if (alreadyHandled) return;

        hideCheckoutProcessTips();
        processTipsOrderCode = orderCode;
        const startedAt = new Date(order?.paymentSettledAt || order?.createdAt || Date.now()).getTime();
        const waitMs = Number.isFinite(startedAt)
            ? Math.min(PROCESS_TIPS_DELAY_MS, Math.max(0, startedAt + PROCESS_TIPS_DELAY_MS - Date.now()))
            : PROCESS_TIPS_DELAY_MS;
        if (waitMs === 0) {
            showCheckoutProcessTips();
            return;
        }
        processTipsShowTimer = setTimeout(function() {
            processTipsShowTimer = null;
            // Pesanannya sudah selesai, atau kartu sudah dipakai pesanan lain.
            if (processTipsOrderCode !== orderCode || !checkoutPaymentResultEl?.classList.contains('processing-state')) return;
            showCheckoutProcessTips();
        }, waitMs);
    }

    function setCheckoutProcessingVisible(order) {
        if (!checkoutPaymentResultEl) return;
        clearCheckoutFinalAutoHide();
        resetSnapContainer('checkout');
        const orderCode = order?.orderCode || order?.refId || '-';
        checkoutPaymentResultEl.hidden = false;
        checkoutPaymentResultEl.classList.remove('final-state', 'is-success', 'is-failed');
        checkoutPaymentResultEl.classList.add('processing-state');
        setCheckoutProgress('process');
        // Nama produk sudah ada di kepala checkout. Kartu cukup menyebut tahapnya,
        // satu spinner sebagai tanda proses masih berjalan, dan kode order.
        setCheckoutPaymentTitle('Pembayaran diterima');
        setCheckoutPaymentState('Pesanan sedang dikirim ke operator', 'processing', 'fa-spinner');
        if (checkoutPaymentInfoEl) checkoutPaymentInfoEl.textContent = orderCode;
        hideCheckoutPaymentExtras();
        setCheckoutHints([
            'Biasanya selesai dalam beberapa menit.',
            'Halaman ini boleh ditutup. Hasilnya tersimpan di menu Riwayat.',
        ]);
        setCheckoutActions(['history']);
        scheduleCheckoutProcessTips(order);
    }

    function setCheckoutFinalVisible(order, variant, title, message, iconClass, options = {}) {
        if (!checkoutPaymentResultEl) return;
        clearCheckoutFinalAutoHide();
        resetSnapContainer('checkout');
        hideCheckoutProcessTips();
        const isSuccess = variant === 'success';
        checkoutPaymentResultEl.hidden = false;
        checkoutPaymentResultEl.classList.remove('processing-state', 'is-success', 'is-failed');
        checkoutPaymentResultEl.classList.add('final-state', isSuccess ? 'is-success' : 'is-failed');
        setCheckoutProgress('done');
        setCheckoutPaymentTitle(title || 'Transaksi selesai', iconClass || 'fa-circle-check');
        setCheckoutPaymentState('');
        if (checkoutPaymentInfoEl) {
            checkoutPaymentInfoEl.textContent = message || order?.orderCode || '';
        }
        hideCheckoutPaymentExtras();
        setCheckoutActions(options.actions || ['done']);
    }

    // Hasil pembelian: nomor tujuan, harga, kode pesanan, lalu SN atau token
    // kalau ada. Untuk PLN, token itulah produknya, jadi harus langsung terlihat
    // di sini tanpa membuka Riwayat.
    function renderCheckoutResultList(order, serial) {
        if (!checkoutResultListEl) return;
        // Kode pesanan sudah ada di daftar, jadi baris info di atasnya dikosongkan.
        if (checkoutPaymentInfoEl) checkoutPaymentInfoEl.textContent = '';
        checkoutResultListEl.innerHTML = '';
        const appendRow = function(label, valueNode, className) {
            const row = document.createElement('div');
            row.className = className ? `checkout-result-row ${className}` : 'checkout-result-row';
            row.appendChild(createTextElement('dt', '', label));
            const value = document.createElement('dd');
            value.appendChild(valueNode);
            row.appendChild(value);
            checkoutResultListEl.appendChild(row);
        };

        [
            ['Nomor tujuan', order?.customerNo || ''],
            ['Harga', getOrderAmountLabel(order)],
            ['Kode pesanan', order?.orderCode || ''],
        ].forEach(function([label, value]) {
            if (!value || value === '-') return;
            appendRow(label, document.createTextNode(value));
        });

        if (serial) {
            const wrap = document.createElement('div');
            wrap.className = 'checkout-serial';
            if (serial.value) {
                wrap.appendChild(createTextElement('span', 'checkout-serial-value', serial.value));
                const copyBtn = document.createElement('button');
                copyBtn.type = 'button';
                copyBtn.className = 'text-button';
                copyBtn.textContent = 'Salin';
                copyBtn.setAttribute('aria-label', `Salin ${serial.label.toLowerCase()}`);
                copyBtn.addEventListener('click', function() {
                    copyTextToClipboard(serial.value, `${serial.label} disalin`);
                });
                wrap.appendChild(copyBtn);
            } else {
                wrap.appendChild(createTextElement('span', 'checkout-serial-note', serial.note || ''));
            }
            appendRow(serial.label, wrap, 'checkout-result-serial');
        }
        checkoutResultListEl.hidden = !checkoutResultListEl.children.length;
    }

    function copyTextToClipboard(text, successMessage) {
        const done = function() {
            showToast({ type: 'success', title: successMessage || 'Disalin', message: text });
        };
        try {
            if (navigator.clipboard?.writeText) {
                navigator.clipboard.writeText(text).then(done).catch(function() {
                    showToast({ type: 'warning', title: 'Gagal menyalin', message: 'Tekan lama teksnya untuk menyalin.' });
                });
                return;
            }
        } catch (_error) {
            // Lanjut ke pesan di bawah.
        }
        showToast({ type: 'warning', title: 'Gagal menyalin', message: 'Tekan lama teksnya untuk menyalin.' });
    }

    function isPlnProduct(product) {
        const text = `${product?.category || ''} ${product?.brand || ''} ${product?.product_name || ''}`.toLowerCase();
        return text.includes('pln') || text.includes('token listrik');
    }

    // Data pesanan dari server tidak membawa SN. SN tersimpan di riwayat
    // transaksi, jadi barisnya dicari lewat SKU, nomor tujuan, dan nominal
    // pesanan yang baru selesai.
    async function loadCheckoutSerialNumber(order) {
        const orderCode = order?.orderCode;
        let serialNumber = '';
        try {
            const response = await fetch('/api/transactions?take=20', { credentials: 'same-origin', cache: 'no-store' });
            if (response.ok) {
                const result = await response.json();
                const orderTime = new Date(order?.createdAt || 0).getTime() || 0;
                const match = (Array.isArray(result?.data) ? result.data : [])
                    .filter(function(item) {
                        return String(item?.buyerSkuCode || '') === String(order?.buyerSkuCode || '')
                            && String(item?.customerNo || '') === String(order?.customerNo || '')
                            && Number(item?.price || 0) === Number(order?.amount || 0)
                            && String(item?.status || '').toUpperCase() === 'SUCCESS'
                            && (new Date(item?.createdAt || 0).getTime() || 0) >= orderTime - 10 * 60 * 1000;
                    })
                    .sort(function(a, b) {
                        return (new Date(b.createdAt).getTime() || 0) - (new Date(a.createdAt).getTime() || 0);
                    })[0];
                serialNumber = String(match?.serialNumber || '').trim();
            }
        } catch (_error) {
            // SN tetap bisa dilihat di Riwayat.
        }
        if (!serialNumber) {
            const fromMessage = String(order?.message || '').match(/\bSN\s*[:=]\s*(\S[^\n]*)/i);
            serialNumber = fromMessage ? fromMessage[1].trim() : '';
        }

        // User sudah menutup checkout atau membuka pesanan lain.
        if (activeCheckoutOrderCode !== orderCode || !checkoutPaymentResultEl?.classList.contains('is-success')) return;
        const pln = isPlnProduct(selectedCheckoutProduct || { product_name: order?.productName });
        if (!serialNumber && !pln) return;
        renderCheckoutResultList(order, {
            label: pln ? 'Token listrik' : 'Nomor seri (SN)',
            value: serialNumber,
            note: 'Token belum muncul. Biasanya masuk dalam beberapa menit, cek lagi di menu Riwayat.',
        });
    }

    function setTopupQrisVisible(visible) {
        if (!topupPaymentResultEl) return;
        clearTopupFinalAutoHide();
        const qrisFrame = topupQrisImageEl?.closest('.qris-frame') || null;
        if (!visible) resetSnapContainer('topup');
        topupPaymentResultEl.hidden = !visible;
        topupPaymentResultEl.classList.toggle('final-state', false);
        topupPaymentResultEl.classList.toggle('processing-state', false);
        topupPaymentResultEl.classList.remove('is-success');
        if (topupPaymentTitleEl) topupPaymentTitleEl.textContent = 'Bayar lewat QRIS';
        if (topupQrisImageEl) topupQrisImageEl.hidden = !visible;
        if (qrisFrame) qrisFrame.hidden = !visible;
        if (openTopupSnapPaymentBtn) openTopupSnapPaymentBtn.hidden = true;
        if (refreshTopupStatusBtn) refreshTopupStatusBtn.hidden = false;
        if (topupShopBtn) topupShopBtn.hidden = true;
        if (topupQrisSaveEl) topupQrisSaveEl.hidden = true;
        setTopupHints([]);
    }

    function setTopupHints(lines) {
        if (!topupPaymentHintsEl) return;
        topupPaymentHintsEl.innerHTML = '';
        (lines || []).filter(Boolean).forEach(function(line) {
            topupPaymentHintsEl.appendChild(createTextElement('span', '', line));
        });
        topupPaymentHintsEl.hidden = !topupPaymentHintsEl.children.length;
    }

    function setTopupFinalVisible(order, title, message, options = {}) {
        if (!topupPaymentResultEl) return;
        const qrisFrame = topupQrisImageEl?.closest('.qris-frame') || null;
        clearTopupFinalAutoHide();
        resetSnapContainer('topup');
        topupPaymentResultEl.hidden = false;
        topupPaymentResultEl.classList.toggle('processing-state', false);
        topupPaymentResultEl.classList.toggle('final-state', true);
        topupPaymentResultEl.classList.add('is-success');
        if (topupPaymentTitleEl) topupPaymentTitleEl.textContent = title || 'Topup berhasil';
        if (topupQrisImageEl) topupQrisImageEl.hidden = true;
        if (qrisFrame) qrisFrame.hidden = true;
        if (openTopupSnapPaymentBtn) openTopupSnapPaymentBtn.hidden = true;
        if (refreshTopupStatusBtn) refreshTopupStatusBtn.hidden = true;
        if (topupQrisSaveEl) topupQrisSaveEl.hidden = true;
        if (topupShopBtn) topupShopBtn.hidden = false;
        if (topupPaymentInfoEl) {
            topupPaymentInfoEl.textContent = message || `Kode topup: ${order?.orderCode || '-'}`;
        }
        setTopupHints([
            order?.orderCode ? `Kode topup ${order.orderCode}. Detailnya ada di menu Riwayat.` : 'Detailnya ada di menu Riwayat.',
        ]);
        if (options.autoHideSeconds) {
            startTopupFinalAutoHide(message || `Kode topup: ${order?.orderCode || '-'}`, options.autoHideSeconds);
        }
    }

    async function postJson(url, body) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'same-origin',
            body: JSON.stringify(body || {}),
        });
        const result = await response.json();
        if (!response.ok) {
            throw new Error(result?.error || 'Request gagal');
        }
        return result;
    }

    async function loadUserTransactions() {
        try {
            const transactionPromise = fetch('/api/transactions?take=100', { credentials: 'same-origin' });
            const paymentOrderPromise = fetch('/api/payment/orders?take=100', { credentials: 'same-origin' })
                .catch(function() { return null; });
            const transactionResponse = await transactionPromise;

            if (!transactionResponse.ok) throw new Error('Failed to fetch transactions');

            const transactionResult = await transactionResponse.json();
            const transactionRows = Array.isArray(transactionResult?.data) ? transactionResult.data : [];
            const purchaseRows = transactionRows.map(function(item) {
                return {
                    time: new Date(item.createdAt).getTime() || 0,
                    date: new Date(item.createdAt).toISOString().slice(0, 10),
                    createdAt: item.createdAt,
                    typeLabel: 'Pembelian Produk',
                    product: item.productName || item.buyerSkuCode || '-',
                    buyerSkuCode: item.buyerSkuCode || null,
                    amount: formatRupiah(item.price),
                    amountValue: Number(item.price || 0),
                    status: mapStatus(item.status),
                    orderCode: null,
                    refId: item.refId || null,
                    customerNo: item.customerNo || null,
                    serialNumber: item.serialNumber || null,
                    rc: item.rc || null,
                    message: item.message || null,
                };
            });

            // Riwayat produk tidak perlu menunggu endpoint payment order yang lebih berat.
            historyLoadState = 'ready';
            renderTransactions(purchaseRows
                .sort(function(a, b) { return b.time - a.time; })
                .slice(0, 50)
                .map(function(row) {
                    return {
                        date: row.date,
                        createdAt: row.createdAt,
                        typeLabel: row.typeLabel,
                        product: row.product,
                        buyerSkuCode: row.buyerSkuCode || null,
                        amount: row.amount,
                        status: row.status,
                        orderCode: row.orderCode,
                        refId: row.refId,
                        customerNo: row.customerNo,
                        serialNumber: row.serialNumber,
                        rc: row.rc,
                        message: row.message,
                    };
                }));

            const paymentOrderResponse = await paymentOrderPromise;
            let paymentOrderRows = [];
            if (paymentOrderResponse?.ok) {
                const paymentOrderResult = await paymentOrderResponse.json();
                const paymentOrders = Array.isArray(paymentOrderResult?.data) ? paymentOrderResult.data : [];
                paymentOrdersCache = paymentOrders;
                renderOngoingOrders();
                paymentOrderRows = paymentOrders
                    .filter(function(order) {
                        const type = String(order?.type || '');
                        const status = String(order?.status || '').toUpperCase();
                        // Pesanan yang masih berjalan sudah tampil di bagian
                        // "Sedang diproses", jadi tidak diulang di daftar.
                        if (isOngoingOrderStatus(status)) return false;
                        return type === 'WALLET_TOPUP' || (type === 'PRODUCT_PURCHASE' && status !== 'SUCCESS');
                    })
                    .map(function(order) {
                        const isTopup = String(order?.type || '') === 'WALLET_TOPUP';
                        return {
                            time: new Date(order.createdAt).getTime() || 0,
                            date: new Date(order.createdAt).toISOString().slice(0, 10),
                            createdAt: order.createdAt,
                            typeLabel: getOrderTypeLabel(order),
                            product: isTopup ? 'Topup Saldo' : (order.productName || order.buyerSkuCode || 'Pembelian Produk'),
                            buyerSkuCode: isTopup ? null : (order.buyerSkuCode || null),
                            amount: formatRupiah(Number(order.amount || 0)),
                            status: mapOrderStatusToHistoryStatus(order.status),
                            orderCode: order.orderCode || null,
                            refId: order.refId || null,
                            customerNo: order.customerNo || null,
                            serialNumber: null,
                            rc: order.digiflazzRc || null,
                            message: order.message || null,
                        };
                    });
            } else {
                paymentOrdersCache = [];
                renderOngoingOrders();
            }

            // Pesanan produk yang belum sukses punya dua catatan: di tabel
            // transaksi dan di tabel pesanan. Yang dipakai catatan pesanan, jadi
            // baris transaksi yang cocok (SKU, nomor, nominal, waktu berdekatan)
            // dibuang supaya satu pesanan tidak tampil dua kali.
            const productOrders = paymentOrdersCache.filter(function(order) {
                return String(order?.type || '') === 'PRODUCT_PURCHASE' && String(order?.status || '').toUpperCase() !== 'SUCCESS';
            });
            const dedupedPurchaseRows = purchaseRows.filter(function(row) {
                if (row.status === 'Sukses') return true;
                return !productOrders.some(function(order) {
                    const orderTime = new Date(order.createdAt).getTime() || 0;
                    return String(order.buyerSkuCode || '') === String(row.buyerSkuCode || '')
                        && String(order.customerNo || '') === String(row.customerNo || '')
                        && Number(order.amount || 0) === Number(row.amountValue || 0)
                        && Math.abs(row.time - orderTime) <= 30 * 60 * 1000;
                });
            });

            const mergedRows = dedupedPurchaseRows
                .concat(paymentOrderRows)
                .sort(function(a, b) { return b.time - a.time; })
                .slice(0, 50)
                .map(function(row) {
                    return {
                        date: row.date,
                        createdAt: row.createdAt,
                        typeLabel: row.typeLabel,
                        product: row.product,
                        buyerSkuCode: row.buyerSkuCode || null,
                        amount: row.amount,
                        status: row.status,
                        orderCode: row.orderCode,
                        refId: row.refId,
                        customerNo: row.customerNo,
                        serialNumber: row.serialNumber,
                        rc: row.rc,
                        message: row.message,
                    };
                });

            if (!mergedRows.length) {
                renderTransactions([]);
                return;
            }

            renderTransactions(mergedRows);
        } catch (_err) {
            // Riwayat yang sudah tampil dibiarkan. Kalau belum ada sama sekali,
            // daftarnya menulis bahwa riwayat gagal dimuat, bukan "belum ada".
            if (historyLoadState !== 'ready') {
                historyLoadState = 'failed';
                renderTransactionPage();
            }
        }
    }

    // ===== Menu VPN =====
    //
    // Harga tidak pernah dihitung di sini. Setiap perubahan pilihan dikirim ke
    // /api/vpn/quote, jadi angka di layar selalu angka yang nanti dipotong dari
    // saldo. Kalau dihitung dua kali, di browser dan di server, suatu saat
    // keduanya akan berbeda dan yang disalahkan adalah tampilannya.
    const vpnBalanceTextEl = document.getElementById('vpnBalanceText');
    const vpnActiveCountTextEl = document.getElementById('vpnActiveCountText');
    const vpnTotalCountTextEl = document.getElementById('vpnTotalCountText');
    const vpnUsernameTextEl = document.getElementById('vpnUsernameText');
    const vpnRoleTextEl = document.getElementById('vpnRoleText');
    const vpnServerSelectEl = document.getElementById('vpnServerSelect');
    const vpnTypeSelectEl = document.getElementById('vpnTypeSelect');
    const vpnIpPackageSelectEl = document.getElementById('vpnIpPackageSelect');
    const vpnServerInfoCardsEl = document.getElementById('vpnServerInfoCards');
    const vpnSlotInfoCardEl = document.getElementById('vpnSlotInfoCard');
    const vpnServerHintEl = document.getElementById('vpnServerHint');
    const vpnQuotaInfoCardEl = document.getElementById('vpnQuotaInfoCard');
    const vpnQuotaHintEl = document.getElementById('vpnQuotaHint');
    const vpnIpLimitInfoCardEl = document.getElementById('vpnIpLimitInfoCard');
    const vpnIpLimitHintEl = document.getElementById('vpnIpLimitHint');
    const vpnDaysInputEl = document.getElementById('vpnDaysInput');
    const vpnUsernameInputEl = document.getElementById('vpnUsernameInput');
    const vpnPasswordGroupEl = document.getElementById('vpnPasswordGroup');
    const vpnPasswordInputEl = document.getElementById('vpnPasswordInput');
    const vpnQuotePerDayEl = document.getElementById('vpnQuotePerDay');
    const vpnQuoteDaysEl = document.getElementById('vpnQuoteDays');
    const vpnQuoteTotalEl = document.getElementById('vpnQuoteTotal');
    const vpnBuyBtn = document.getElementById('vpnBuyBtn');
    const vpnTrialBtn = document.getElementById('vpnTrialBtn');
    const vpnBuyStatusEl = document.getElementById('vpnBuyStatus');
    const vpnAccountListEl = document.getElementById('vpnAccountList');
    const vpnAccountsRefreshBtn = document.getElementById('vpnAccountsRefreshBtn');
    const vpnDetailSheetEl = document.getElementById('vpnDetailSheet');
    const vpnDetailBackdropEl = document.getElementById('vpnDetailBackdrop');
    const vpnDetailCloseBtn = document.getElementById('vpnDetailCloseBtn');
    const vpnDetailTitleEl = document.getElementById('vpnDetailTitle');
    const vpnDetailBodyEl = document.getElementById('vpnDetailBody');
    const vpnCopyAllBtnEl = document.getElementById('vpnCopyAllBtn');
    const vpnDetailConfigBoxEl = document.getElementById('vpnDetailConfigBox');
    const vpnDetailConfigToggleEl = document.getElementById('vpnDetailConfigToggle');
    const vpnDetailConfigPanelEl = document.getElementById('vpnDetailConfigPanel');
    const vpnDetailConfigAppSelectEl = document.getElementById('vpnDetailConfigAppSelect');
    const vpnDetailConfigTemplateSelectEl = document.getElementById('vpnDetailConfigTemplateSelect');
    const vpnDetailConfigGenerateBtn = document.getElementById('vpnDetailConfigGenerateBtn');
    const vpnDetailConfigStatusEl = document.getElementById('vpnDetailConfigStatus');
    const vpnDetailFooterEl = document.getElementById('vpnDetailFooter');
    const vpnDetailStatusEl = document.getElementById('vpnDetailStatus');
    const vpnDetailRenewBtn = document.getElementById('vpnDetailRenewBtn');
    const vpnDetailMoveBtn = document.getElementById('vpnDetailMoveBtn');
    const vpnDetailQuickActionsEl = document.getElementById('vpnDetailQuickActions');
    const vpnDetailDeleteBoxEl = document.getElementById('vpnDetailDeleteBox');
    const vpnDetailDeleteBtn = document.getElementById('vpnDetailDeleteBtn');
    const vpnDetailDeleteHintEl = document.getElementById('vpnDetailDeleteHint');
    const vpnRenewAccountSelectEl = document.getElementById('vpnRenewAccountSelect');
    const vpnRenewAccountInfoEl = document.getElementById('vpnRenewAccountInfo');
    const vpnRenewDaysInputEl = document.getElementById('vpnRenewDaysInput');
    const vpnRenewQuoteEl = document.getElementById('vpnRenewQuote');
    const vpnRenewQuotePerDayEl = document.getElementById('vpnRenewQuotePerDay');
    const vpnRenewQuoteDaysEl = document.getElementById('vpnRenewQuoteDays');
    const vpnRenewQuoteTotalEl = document.getElementById('vpnRenewQuoteTotal');
    const vpnRenewStatusEl = document.getElementById('vpnRenewStatus');
    const vpnRenewBtn = document.getElementById('vpnRenewBtn');
    const vpnMoveAccountSelectEl = document.getElementById('vpnMoveAccountSelect');
    const vpnMoveAccountInfoEl = document.getElementById('vpnMoveAccountInfo');

    const VPN_TYPE_LABELS = {
        ssh: 'SSH / OpenVPN',
        zivpn: 'UDP ZiVPN',
        vmess: 'VMESS',
        vless: 'VLESS',
        trojan: 'TROJAN',
    };

    // Urutan tetap saat mengelompokkan template config per format (bukan
    // abjad), supaya HTTP Custom dan HTTP Injector yang paling sering dipakai
    // muncul lebih dulu. Sama dengan urutan di menu admin.
    const VPN_CONFIG_FORMAT_ORDER = ['hc', 'hi', 'dark'];

    // Config 1FTunnel tidak punya template sendiri: dibuat dari template
    // HTTP Custom yang sama, jadi pilihan aplikasinya menampilkan template .hc.
    const VPN_CONFIG_ONEFTUNNEL_APP = '1ftnl';
    // Diisi dari server: true kalau admin menyalakan pilihan 1FTunnel.
    let vpnConfigOneFtunnel = false;

    function vpnConfigTemplateFormat(template) {
        return template.format || 'lainnya';
    }

    // Aplikasi dipilih dulu, baru templatenya, supaya template yang jumlahnya
    // banyak (puluhan .hc dan .dark) tidak jadi satu dropdown panjang. Hanya
    // aplikasi yang punya template yang ditawarkan.
    function listVpnConfigApps(templates) {
        const formats = [];
        templates.forEach(function(t) {
            const format = vpnConfigTemplateFormat(t);
            if (!formats.includes(format)) formats.push(format);
        });

        const apps = VPN_CONFIG_FORMAT_ORDER
            .filter(function(format) { return formats.includes(format); })
            .concat(formats.filter(function(format) { return !VPN_CONFIG_FORMAT_ORDER.includes(format); }))
            .map(function(format) {
                const contoh = templates.find(function(t) { return vpnConfigTemplateFormat(t) === format; });
                return { key: format, label: contoh?.formatLabel || format };
            });

        if (vpnConfigOneFtunnel && formats.includes('hc')) {
            apps.push({ key: VPN_CONFIG_ONEFTUNNEL_APP, label: '1FTunnel' });
        }
        return apps;
    }

    function templatesForVpnConfigApp(templates, app) {
        const format = app === VPN_CONFIG_ONEFTUNNEL_APP ? 'hc' : app;
        return templates.filter(function(t) { return vpnConfigTemplateFormat(t) === format; });
    }

    // Mengisi dropdown aplikasi lalu dropdown templatenya. Pilihan aplikasi
    // yang sudah ada dipertahankan kalau masih tersedia.
    function renderVpnConfigAppSelect(appSelectEl, templateSelectEl, templates) {
        if (!appSelectEl) return;
        const apps = listVpnConfigApps(templates);
        const sebelumnya = appSelectEl.value;
        appSelectEl.innerHTML = apps.length
            ? apps.map(function(app) {
                return `<option value="${escapeHtml(app.key)}">${escapeHtml(app.label)}</option>`;
            }).join('')
            : '<option value="">Belum ada template</option>';
        if (apps.some(function(app) { return app.key === sebelumnya; })) appSelectEl.value = sebelumnya;
        renderVpnConfigTemplateSelect(appSelectEl, templateSelectEl, templates);
    }

    function renderVpnConfigTemplateSelect(appSelectEl, templateSelectEl, templates) {
        if (!templateSelectEl) return;
        const daftar = templatesForVpnConfigApp(templates, appSelectEl?.value || '');
        templateSelectEl.innerHTML = daftar.length
            ? daftar.map(function(t) {
                return `<option value="${escapeHtml(t.id)}">${escapeHtml(t.name)}</option>`;
            }).join('')
            : '<option value="">Belum ada template</option>';
    }

    // `output` kosong berarti berkasnya mengikuti format template.
    function readVpnConfigChoice(appSelectEl, templateSelectEl) {
        return {
            templateId: templateSelectEl?.value || '',
            output: appSelectEl?.value === VPN_CONFIG_ONEFTUNNEL_APP ? VPN_CONFIG_ONEFTUNNEL_APP : '',
        };
    }

    let vpnServers = [];
    let vpnAccounts = [];
    let vpnQuoteToken = 0;
    let vpnOpenAccountId = null;

    function setVpnBuyStatus(message, tone = '') {
        if (!vpnBuyStatusEl) return;
        vpnBuyStatusEl.textContent = message || '';
        vpnBuyStatusEl.dataset.tone = tone;
    }

    function setVpnDetailStatus(message, tone = '') {
        if (!vpnDetailStatusEl) return;
        vpnDetailStatusEl.textContent = message || '';
        vpnDetailStatusEl.dataset.tone = tone;
    }

    function getSelectedVpnServer() {
        return vpnServers.find(function(server) { return server.id === vpnServerSelectEl?.value; }) || null;
    }

    // Jenis akun yang boleh dipilih ditentukan servernya: server khusus UDP
    // ZiVPN tidak menjalankan layanan lain, dan sebaliknya.
    function renderVpnTypeOptions(server) {
        if (!vpnTypeSelectEl) return;
        const pilihan = server?.isUdpZivpnOnly ? ['zivpn'] : ['ssh', 'vmess', 'vless', 'trojan'];
        const sebelumnya = vpnTypeSelectEl.value;
        vpnTypeSelectEl.innerHTML = pilihan.map(function(key) {
            return `<option value="${key}">${escapeHtml(VPN_TYPE_LABELS[key] || key)}</option>`;
        }).join('');
        if (pilihan.includes(sebelumnya)) vpnTypeSelectEl.value = sebelumnya;

        // Password hanya dipakai akun SSH. UDP ZiVPN memakai username sebagai
        // password, dan vmess/vless/trojan memakai UUID dari server.
        if (vpnPasswordGroupEl) vpnPasswordGroupEl.hidden = vpnTypeSelectEl.value !== 'ssh';
    }

    function renderVpnServerOptions() {
        if (!vpnServerSelectEl) return;
        if (!vpnServers.length) {
            vpnServerSelectEl.innerHTML = '<option value="">Belum ada server tersedia</option>';
            if (vpnServerHintEl) vpnServerHintEl.textContent = '';
            return;
        }

        const sebelumnya = vpnServerSelectEl.value;
        vpnServerSelectEl.innerHTML = vpnServers.map(function(server) {
            const penuh = server.isFull ? ' — penuh' : '';
            return `<option value="${escapeHtml(server.id)}"${server.isFull ? ' disabled' : ''}>${escapeHtml(server.name)}${penuh}</option>`;
        }).join('');

        const masihAda = vpnServers.some(function(server) { return server.id === sebelumnya && !server.isFull; });
        if (masihAda) {
            vpnServerSelectEl.value = sebelumnya;
        } else {
            const pertamaKosong = vpnServers.find(function(server) { return !server.isFull; });
            if (pertamaKosong) vpnServerSelectEl.value = pertamaKosong.id;
        }
        onVpnServerChanged();
    }

    // Kuota 0 di webpanel lama berarti tanpa batas, bukan benar-benar nol GB
    // — jadi tidak boleh ditulis "0 GB". Kosong/null/undefined beda lagi:
    // itu tandanya server atau akunnya memang tidak melaporkan kuota sama
    // sekali (akun UDP ZiVPN misalnya, yang pakai batas IP, bukan kuota),
    // jadi barisnya tetap disembunyikan seperti sebelumnya.
    function formatVpnQuota(value) {
        if (value === null || value === undefined || String(value).trim() === '') return '';
        const angka = Number(value);
        if (!Number.isFinite(angka)) return '';
        return angka <= 0 ? 'Tanpa batas' : `${angka} GB`;
    }

    function onVpnServerChanged() {
        const server = getSelectedVpnServer();
        renderVpnTypeOptions(server);

        const punyaSlot = server?.slotLeft !== null && server?.slotLeft !== undefined;
        if (vpnSlotInfoCardEl) vpnSlotInfoCardEl.hidden = !punyaSlot;
        setVpnInfoCardValue(vpnServerHintEl, punyaSlot ? `${server.slotLeft} slot` : '');

        const kuotaTeks = formatVpnQuota(server?.quota);
        if (vpnQuotaInfoCardEl) vpnQuotaInfoCardEl.hidden = !kuotaTeks;
        setVpnInfoCardValue(vpnQuotaHintEl, kuotaTeks);

        updateVpnIpLimitHint();
        void refreshVpnQuote();
    }

    // Isinya dibungkus span sendiri supaya bisa digeser dengan transform kalau
    // teksnya tidak muat. Dibuat lewat DOM, bukan innerHTML, jadi isinya tidak
    // pernah diperlakukan sebagai markup.
    function setVpnInfoCardValue(el, teks) {
        if (!el) return;
        el.textContent = '';
        el.classList.remove('is-berjalan');
        if (!teks) return;

        const isi = document.createElement('span');
        isi.className = 'vpn-info-scroll';
        isi.textContent = teks;
        el.appendChild(isi);
    }

    // Kartunya sempit, jadi teks yang panjang kepotong titik tiga. Yang tidak
    // muat dijalankan bolak-balik, dengan jarak dan lama geser mengikuti
    // seberapa jauh kelebihannya supaya kecepatannya terasa sama.
    function syncVpnInfoMarquee() {
        [vpnServerHintEl, vpnQuotaHintEl, vpnIpLimitHintEl].forEach(function(el) {
            const isi = el?.querySelector('.vpn-info-scroll');
            if (!el || !isi) return;

            // Lebar nol berarti kartunya sedang tidak tampil — diukur ulang
            // nanti waktu benar-benar terlihat, daripada salah menyimpulkan
            // semuanya kepanjangan.
            if (!el.clientWidth) return;

            const kelebihan = isi.scrollWidth - el.clientWidth;
            if (kelebihan <= 1) {
                el.classList.remove('is-berjalan');
                el.style.removeProperty('--jarak-geser');
                el.style.removeProperty('--durasi-geser');
                return;
            }

            el.classList.add('is-berjalan');
            el.style.setProperty('--jarak-geser', `-${kelebihan}px`);
            // Sekitar 55 piksel per detik, ditambah jeda diam di dua ujungnya.
            el.style.setProperty('--durasi-geser', `${Math.max(4, 3 + (kelebihan / 55) * 2).toFixed(1)}s`);
        });
    }

    // Diukur setelah tata letaknya selesai, karena sebelum itu lebarnya belum
    // tentu sudah final.
    function scheduleVpnInfoMarquee() {
        window.requestAnimationFrame(function() { syncVpnInfoMarquee(); });
    }

    // Kartu pembungkusnya baru ditampilkan kalau ada minimal satu yang punya
    // isi, supaya tidak muncul baris kosong saat server tujuan tidak
    // melaporkan sisa slot, kuota, atau batas perangkat sama sekali.
    function syncVpnServerInfoCards() {
        if (!vpnServerInfoCardsEl) return;
        const adaIsi = [vpnSlotInfoCardEl, vpnQuotaInfoCardEl, vpnIpLimitInfoCardEl]
            .some(function(kartu) { return kartu && !kartu.hidden; });
        vpnServerInfoCardsEl.hidden = !adaIsi;
        scheduleVpnInfoMarquee();
    }

    function updateVpnIpLimitHint() {
        const server = getSelectedVpnServer();
        // Yang ditampilkan selalu sama dengan paket IP yang dipilih (1 atau 2
        // perangkat), bukan batas teknis server.ipLimit yang diatur admin
        // sebagai buffer sambungan ulang — angka itu bisa lebih besar dari
        // paketnya dan malah membingungkan kalau ditampilkan apa adanya.
        const paket = vpnIpPackageSelectEl?.value === '2' ? 2 : 1;
        const adaServer = Boolean(server);
        if (vpnIpLimitInfoCardEl) vpnIpLimitInfoCardEl.hidden = !adaServer;
        setVpnInfoCardValue(vpnIpLimitHintEl, adaServer ? `${paket} perangkat sekaligus` : '');
        syncVpnServerInfoCards();
    }

    // Hitungan diminta ulang setiap pilihan berubah. Nomor token dipakai supaya
    // jawaban yang datang terlambat tidak menimpa hitungan yang lebih baru.
    async function refreshVpnQuote() {
        const server = getSelectedVpnServer();
        const token = ++vpnQuoteToken;

        if (!server || server.isFull) {
            if (vpnQuotePerDayEl) vpnQuotePerDayEl.textContent = '-';
            if (vpnQuoteDaysEl) vpnQuoteDaysEl.textContent = '-';
            if (vpnQuoteTotalEl) vpnQuoteTotalEl.textContent = '-';
            return;
        }

        try {
            const response = await fetch('/api/vpn/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    serverId: server.id,
                    ipPackage: vpnIpPackageSelectEl?.value || '1',
                    days: vpnDaysInputEl?.value || '',
                }),
            });
            const result = await response.json();
            if (token !== vpnQuoteToken) return;

            if (!response.ok) {
                if (vpnQuotePerDayEl) vpnQuotePerDayEl.textContent = '-';
                if (vpnQuoteDaysEl) vpnQuoteDaysEl.textContent = '-';
                if (vpnQuoteTotalEl) vpnQuoteTotalEl.textContent = '-';
                setVpnBuyStatus(result?.error || 'Gagal menghitung harga.', 'failed');
                return;
            }

            const data = result?.data || {};
            if (vpnQuotePerDayEl) vpnQuotePerDayEl.textContent = formatRupiah(data.pricePerDay);
            if (vpnQuoteDaysEl) vpnQuoteDaysEl.textContent = `${data.days} hari`;
            if (vpnQuoteTotalEl) vpnQuoteTotalEl.textContent = formatRupiah(data.total);
            applyDirectQrisGate(data.total);
            setVpnBuyStatus(
                data.enough ? '' : `Saldo VPN kamu ${formatRupiah(data.balance)}, masih kurang ${formatRupiah(data.total - data.balance)}.`,
                data.enough ? '' : 'warning',
            );
        } catch (_error) {
            if (token !== vpnQuoteToken) return;
            setVpnBuyStatus('Gagal menghitung harga. Cek koneksi lalu coba lagi.', 'failed');
        }
    }

    // Akun yang habis lebih dari beberapa hari tidak ikut ditampilkan. Tanpa
    // keterangan, hilangnya akun lama akan terlihat seperti data yang terhapus.
    function renderVpnHiddenAccountNote(jumlah, hari) {
        if (!vpnAccountHiddenNoteEl) return;
        const total = Number(jumlah || 0);
        vpnAccountHiddenNoteEl.hidden = total < 1;
        if (total < 1) return;
        vpnAccountHiddenNoteEl.textContent = `${total} akun lama disembunyikan karena masa aktifnya sudah lewat `
            + `lebih dari ${Number(hari) || 3} hari. Datanya masih tersimpan, tapi akun yang sudah habis tidak bisa dipakai lagi.`;
    }

    // Pesanan kecil tidak boleh dibayar langsung lewat QRIS. Tombolnya dibuat
    // terlihat mati lewat aria-disabled, bukan atribut disabled sungguhan,
    // supaya tetap bisa diklik dan menjelaskan kenapa lewat popup — atribut
    // disabled asli tidak pernah memicu event klik sama sekali.
    let vpnBuyQrisGated = false;

    function applyDirectQrisGate(total) {
        if (!vpnBuyQrisBtn) return;
        const batas = Number(vpnTopupLimits?.directQrisMin || 0);
        const nilai = Number(total || 0);
        // Selama batasnya belum diketahui, tombolnya dibiarkan apa adanya.
        const terlaluKecil = batas > 0 && nilai > 0 && nilai < batas;
        vpnBuyQrisGated = terlaluKecil;
        vpnBuyQrisBtn.classList.toggle('is-gated', terlaluKecil);
        // Bukan aria-disabled="true": Playwright dan sejumlah pembaca layar
        // memperlakukan itu seperti disabled sungguhan dan menolak memicu klik,
        // padahal tombolnya sengaja tetap harus bisa ditekan supaya popup
        // penjelasannya muncul.
        vpnBuyQrisBtn.title = terlaluKecil
            ? `Minimal ${formatRupiah(batas)} untuk bayar langsung lewat QRIS. Pakai saldo VPN untuk nominal segini.`
            : '';
    }

    // Sub menu VPN. Bagian yang tidak dipilih disembunyikan lewat CSS, bukan
    // lewat atribut hidden, supaya bagian pembuat config tetap bisa memakai
    // hidden untuk menandakan fiturnya belum disiapkan admin.
    const VPN_TAB_DEFAULT = 'beli';
    const vpnViewEl = document.getElementById('vpnView');
    const vpnTabsEl = document.getElementById('vpnTabs');

    // `accountId` dipakai tombol pintas di panel detail akun, supaya sub menu
    // Perpanjang dan Pindah Server terbuka dengan akun itu sudah terpilih.
    function setVpnTab(nama, { accountId = null } = {}) {
        if (!vpnViewEl || !vpnTabsEl) return;
        const tombol = Array.from(vpnTabsEl.querySelectorAll('[data-vpn-tab]'));
        const tersedia = tombol.filter(function(el) { return !el.hidden; }).map(function(el) { return el.dataset.vpnTab; });
        const dipilih = tersedia.includes(nama) ? nama : (tersedia[0] || VPN_TAB_DEFAULT);

        vpnViewEl.dataset.vpnActiveTab = dipilih;
        tombol.forEach(function(el) {
            el.classList.toggle('active', el.dataset.vpnTab === dipilih);
            el.setAttribute('aria-selected', el.dataset.vpnTab === dipilih ? 'true' : 'false');
        });

        // Di layar HP bar sub menunya bisa digeser dan tidak semua tab
        // kelihatan. Tab yang dipilih lewat tombol pintas digeser ke tengah,
        // supaya user tahu sedang di sub menu mana.
        const aktif = tombol.find(function(el) { return el.dataset.vpnTab === dipilih; });
        if (aktif && vpnTabsEl.scrollWidth > vpnTabsEl.clientWidth) {
            const bar = vpnTabsEl.getBoundingClientRect();
            const kotak = aktif.getBoundingClientRect();
            if (kotak.left < bar.left || kotak.right > bar.right) {
                vpnTabsEl.scrollLeft += (kotak.left - bar.left) - (bar.width - kotak.width) / 2;
            }
        }

        // Sub menu yang tidak aktif disembunyikan CSS, jadi lebar kartunya nol
        // dan tidak bisa diukur. Diukur ulang begitu sub menunya kelihatan.
        if (dipilih === 'beli') scheduleVpnInfoMarquee();
        // Daftar akun, sisa slot server, dan harganya bisa berubah sejak sub
        // menu ini terakhir dibuka, jadi formulirnya disusun ulang.
        if (dipilih === 'perpanjang') renderVpnRenewForm(accountId);
        if (dipilih === 'pindah') renderVpnMoveForm(accountId);
    }

    // Tab pembuat config hanya ada kalau adminnya sudah menyiapkan fiturnya.
    function syncVpnConfigTab() {
        if (!vpnTabsEl) return;
        const tab = vpnTabsEl.querySelector('[data-vpn-tab="config"]');
        if (!tab) return;
        const siap = Boolean(vpnConfigSectionEl) && !vpnConfigSectionEl.hidden;
        tab.hidden = !siap;
        // Kalau tab yang sedang dibuka ternyata hilang, pindah ke tab pertama.
        if (!siap && vpnViewEl?.dataset.vpnActiveTab === 'config') setVpnTab(VPN_TAB_DEFAULT);
    }

    if (vpnTabsEl) {
        vpnTabsEl.addEventListener('click', function(event) {
            const tombol = event.target.closest('[data-vpn-tab]');
            if (!tombol) return;
            setVpnTab(tombol.dataset.vpnTab);
        });
        setVpnTab(VPN_TAB_DEFAULT);
    }

    // Kartunya melar mengikuti lebar layar, jadi yang tadinya muat bisa jadi
    // tidak muat begitu jendelanya dikecilkan, dan sebaliknya.
    let vpnMarqueeResizeTimer = null;
    window.addEventListener('resize', function() {
        if (vpnMarqueeResizeTimer) clearTimeout(vpnMarqueeResizeTimer);
        vpnMarqueeResizeTimer = setTimeout(scheduleVpnInfoMarquee, 200);
    });

    // Pintasan ke menu VPN: tile VPN di daftar kategori (dibuat ulang setiap
    // kategori dimuat, jadi ditangkap lewat delegasi) dan tautan di menu Topup.
    document.addEventListener('click', function(event) {
        if (event.target.closest('[data-open-vpn]')) showView('vpnView');
    });

    function renderVpnSummary(profile, accounts) {
        if (vpnBalanceTextEl) vpnBalanceTextEl.textContent = formatRupiah(Number(profile?.balance || 0));
        const topupVpnBalanceEl = document.getElementById('topupVpnBalanceText');
        if (topupVpnBalanceEl) topupVpnBalanceEl.textContent = formatRupiah(Number(profile?.balance || 0));
        setDashboardVpnBalance(Number(profile?.balance || 0));
        if (vpnUsernameTextEl) vpnUsernameTextEl.textContent = profile?.vpnUsername || '-';
        if (vpnRoleTextEl) {
            vpnRoleTextEl.textContent = profile?.role === 'RESELLER'
                ? 'Reseller — harga khusus'
                : profile?.role === 'ADMIN' ? 'Admin' : 'User';
        }
        const aktif = accounts.filter(function(account) { return account.isActive; }).length;
        if (vpnActiveCountTextEl) vpnActiveCountTextEl.textContent = String(aktif);
        if (vpnTotalCountTextEl) vpnTotalCountTextEl.textContent = String(accounts.length);
    }

    function renderVpnAccounts() {
        if (!vpnAccountListEl) return;
        if (!vpnAccounts.length) {
            vpnAccountListEl.innerHTML = '<p class="vpn-empty">Belum ada akun VPN. Beli satu di atas, atau coba yang gratis dulu.</p>';
            return;
        }

        vpnAccountListEl.innerHTML = vpnAccounts.map(function(account) {
            const status = account.isTrial
                ? (account.isActive ? 'trial' : 'habis')
                : (account.isActive ? 'aktif' : 'habis');
            const label = account.isTrial && account.isActive ? 'Trial' : (account.isActive ? 'Aktif' : 'Habis');
            const jenis = VPN_TYPE_LABELS[account.accountType] || account.accountType;
            return `<button type="button" class="vpn-account-card" data-vpn-account="${escapeHtml(account.id)}" data-status="${status}">
                <div class="vpn-account-main">
                    <strong>${escapeHtml(account.username)}</strong>
                    <span class="vpn-account-type">${escapeHtml(jenis)}</span>
                </div>
                <div class="vpn-account-meta">
                    <span>${escapeHtml(account.serverName)}</span>
                    <span>${account.expiredAt ? `Habis ${formatDateTime(account.expiredAt)}` : 'Tanpa tanggal habis'}</span>
                </div>
                <span class="vpn-account-status">${label}</span>
            </button>`;
        }).join('');
    }

    // Dipakai renderVpnDetail dan buildVpnAccountCopyText, supaya labelnya
    // tidak dua kali ditulis dan tidak bisa saling berbeda kalau salah satu diubah.
    const VPN_SSH_PORT_LABELS = {
        tls: 'Port TLS',
        none: 'Port non-TLS',
        ovpntcp: 'OpenVPN TCP',
        ovpnudp: 'OpenVPN UDP',
        sshohp: 'SSH OHP',
        udpcustom: 'UDP Custom',
    };

    const VPN_LINK_LABELS = {
        vmessTls: 'VMESS TLS',
        vmessNtls: 'VMESS non-TLS',
        vlessTls: 'VLESS TLS',
        vlessNtls: 'VLESS non-TLS',
        vlessGrpc: 'VLESS gRPC',
        trojanTls: 'TROJAN TLS',
        trojanGrpc: 'TROJAN gRPC',
    };

    // Akun yang sedang terbuka di panel detail, disimpan utuh supaya tombol
    // "Salin Semua Info" bisa menyusun teksnya tanpa memanggil server lagi.
    let vpnOpenAccountData = null;

    // Daftar template (aplikasi) dari pembuat config, dipakai bersama sub menu
    // Buat Config dan kotak buat config di panel detail akun.
    let vpnConfigTemplates = [];

    function vpnDetailRow(label, value, { copy = false } = {}) {
        if (value === null || value === undefined || String(value).trim() === '' || String(value).trim() === '-') return '';
        const teks = escapeHtml(String(value));
        const tombol = copy
            ? `<button type="button" class="vpn-copy-btn" data-vpn-copy="${teks}" title="Salin"><i class="fas fa-copy"></i></button>`
            : '';
        return `<div class="vpn-detail-row">
            <span>${escapeHtml(label)}</span>
            <div class="vpn-detail-value"><code>${teks}</code>${tombol}</div>
        </div>`;
    }

    // Judul kecil pemisah di dalam daftar detail, misalnya untuk blok SlowDNS.
    function vpnDetailSection(label) {
        return `<div class="vpn-detail-section">${escapeHtml(label)}</div>`;
    }

    // Catatan singkat di bawah sebuah blok, untuk menerangkan cara pakainya.
    function vpnDetailNote(text) {
        if (!text) return '';
        return `<p class="vpn-detail-note">${escapeHtml(text)}</p>`;
    }

    // Catatan cara memakai SlowDNS, dipakai di layar dan di teks "Salin Semua".
    const VPN_SLOWDNS_NOTE = 'Di aplikasi (HTTP Custom dll.) pilih Type/Mode = NULL, lalu isi NS, Public Key, dan DNS di atas. Username dan password SSH tetap sama.';

    // SlowDNS hanya ditampilkan kalau server akun SSH ini memakainya dan NS +
    // pubkey ada. DNS boleh kosong, barisnya dilewati kalau begitu.
    function vpnSlowdnsOf(account) {
        if (!account || account.accountType !== 'ssh') return null;
        const s = account.slowdns;
        if (!s || !s.ns || !s.pubkey) return null;
        return { ns: s.ns, pubkey: s.pubkey, dns: s.dns || '' };
    }

    function renderVpnDetail(account) {
        if (!vpnDetailBodyEl) return;
        vpnOpenAccountData = account;
        const jenis = VPN_TYPE_LABELS[account.accountType] || account.accountType;
        const baris = [];

        baris.push(vpnDetailRow('Username', account.username, { copy: true }));
        if (account.accountType === 'ssh') {
            baris.push(vpnDetailRow('Password', account.password, { copy: true }));
        }
        if (account.accountType === 'zivpn') {
            baris.push(vpnDetailRow('Password UDP', account.udpPassword, { copy: true }));
        }
        baris.push(vpnDetailRow('Server', account.serverName));
        baris.push(vpnDetailRow('Host', account.serverDomain, { copy: true }));
        baris.push(vpnDetailRow('Jenis', jenis));
        // Limit yang ditampilkan mengikuti paket IP yang dibeli (1 atau 2
        // perangkat), bukan batas teknis yang diatur admin di server — supaya
        // sama dengan yang dijanjikan saat beli, tidak membingungkan.
        baris.push(vpnDetailRow('Limit perangkat', account.ipPackage ? `${account.ipPackage} perangkat` : ''));
        baris.push(vpnDetailRow('Kuota', formatVpnQuota(account.quota)));
        baris.push(vpnDetailRow('Masa aktif sampai', account.expiredAt ? formatDateTime(account.expiredAt) : ''));

        const ports = account.sshPorts || {};
        Object.keys(VPN_SSH_PORT_LABELS).forEach(function(key) {
            baris.push(vpnDetailRow(VPN_SSH_PORT_LABELS[key], ports[key]));
        });

        // Baris siap tempel untuk aplikasi seperti HTTP Custom, dengan format
        // yang sama seperti webpanel lama. Disusun server, jadi bentuknya
        // tidak bisa berbeda dari yang dipakai pembuat config.
        (account.sshAccountLines || []).forEach(function(item) {
            baris.push(vpnDetailRow(item.label, item.text, { copy: true }));
        });

        // Blok SlowDNS, hanya untuk akun SSH dari server yang memakainya.
        const slowdns = vpnSlowdnsOf(account);
        if (slowdns) {
            baris.push(vpnDetailSection('[ SLOWDNS ]'));
            baris.push(vpnDetailRow('NS', slowdns.ns, { copy: true }));
            baris.push(vpnDetailRow('Pubkey', slowdns.pubkey, { copy: true }));
            if (slowdns.dns) baris.push(vpnDetailRow('DNS', slowdns.dns, { copy: true }));
            baris.push(vpnDetailNote(VPN_SLOWDNS_NOTE));
        }

        const links = account.links || {};
        Object.keys(VPN_LINK_LABELS).forEach(function(key) {
            baris.push(vpnDetailRow(VPN_LINK_LABELS[key], links[key], { copy: true }));
        });

        const isi = baris.filter(Boolean).join('');
        vpnDetailBodyEl.innerHTML = isi || '<p class="vpn-empty">Tidak ada rincian konfigurasi untuk akun ini.</p>';

        if (vpnDetailTitleEl) vpnDetailTitleEl.textContent = `Akun ${account.username}`;
        // Akun trial tidak bisa diperpanjang atau dipindah, dan akun yang sudah
        // habis tidak bisa dipindah. Tombol pintasnya disembunyikan daripada
        // membuka formulir yang pasti ditolak server. Tombol salin semua tetap
        // ada — trial pun tetap punya info yang perlu disalin.
        const bisaPerpanjang = vpnAccountCanRenew(account);
        const bisaPindah = vpnAccountCanMove(account);
        const bisaHapus = vpnAccountCanDelete(account);
        if (vpnDetailRenewBtn) vpnDetailRenewBtn.hidden = !bisaPerpanjang;
        if (vpnDetailMoveBtn) vpnDetailMoveBtn.hidden = !bisaPindah;
        if (vpnDetailQuickActionsEl) vpnDetailQuickActionsEl.hidden = !bisaPerpanjang && !bisaPindah;
        if (vpnDetailFooterEl) vpnDetailFooterEl.hidden = !bisaPerpanjang && !bisaPindah && !bisaHapus;
        if (vpnCopyAllBtnEl) vpnCopyAllBtnEl.hidden = !isi;
        syncVpnDetailConfigBox(account);
        syncVpnDetailDeleteBox(account);
    }

    // ===== Hapus akun, sisa masa aktif kembali ke saldo VPN =====
    //
    // Nilai pengembalian dan syaratnya (umur minimal sehari, sisa minimal
    // sehari) dihitung server. Halaman hanya menanyakannya begitu panel dibuka
    // dan menampilkan jawabannya di bawah tombol, supaya tidak ada dua hitungan
    // yang suatu saat berbeda.
    let vpnDeleteQuote = null;
    let vpnDeleteQuoteToken = 0;

    function setVpnDeleteHint(pesan, tone = '') {
        if (!vpnDetailDeleteHintEl) return;
        vpnDetailDeleteHintEl.textContent = pesan || '';
        vpnDetailDeleteHintEl.dataset.tone = tone;
    }

    function resetVpnDetailDeleteBox() {
        vpnDeleteQuoteToken += 1;
        vpnDeleteQuote = null;
        if (vpnDetailDeleteBoxEl) vpnDetailDeleteBoxEl.hidden = true;
        if (vpnDetailDeleteBtn) vpnDetailDeleteBtn.disabled = true;
        setVpnDeleteHint('');
    }

    function syncVpnDetailDeleteBox(account) {
        resetVpnDetailDeleteBox();
        if (!vpnDetailDeleteBoxEl || !vpnAccountCanDelete(account)) return;

        vpnDetailDeleteBoxEl.hidden = false;
        setVpnDeleteHint('Menghitung saldo yang kembali...');
        void refreshVpnDeleteQuote(account.id, vpnDeleteQuoteToken);
    }

    async function refreshVpnDeleteQuote(accountId, token) {
        try {
            const response = await fetch(`/api/vpn/accounts/${encodeURIComponent(accountId)}/delete/quote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: '{}',
            });
            const result = await response.json();
            // Panelnya bisa sudah ditutup atau berganti akun selama menunggu.
            if (token !== vpnDeleteQuoteToken) return;
            if (!response.ok) throw new Error(result?.error || 'Gagal menghitung saldo yang kembali.');

            const data = result.data;
            if (!data.allowed) {
                const kapan = data.availableAt ? ` Bisa dihapus mulai ${formatDateTime(data.availableAt)}.` : '';
                setVpnDeleteHint(`${data.reason || 'Akun ini belum bisa dihapus.'}${kapan}`, 'warning');
                return;
            }

            vpnDeleteQuote = data;
            setVpnDeleteHint(
                `Sisa ${data.remainingDays} hari × ${formatRupiah(data.pricePerDay)} = ${formatRupiah(data.refund)} kembali ke saldo VPN.`,
            );
            if (vpnDetailDeleteBtn) vpnDetailDeleteBtn.disabled = false;
        } catch (error) {
            if (token !== vpnDeleteQuoteToken) return;
            setVpnDeleteHint(error.message || 'Gagal menghitung saldo yang kembali.', 'failed');
        }
    }

    async function deleteVpnAccount() {
        const account = vpnOpenAccountData;
        const quote = vpnDeleteQuote;
        if (!account || !quote || quote.accountId !== account.id) return;

        const confirmed = await showConfirmDialog({
            title: 'Hapus Akun',
            message: `Hapus akun ${account.username}? Akunnya langsung dihapus dari server dan tidak bisa dipakai lagi. Sisa ${quote.remainingDays} hari senilai ${formatRupiah(quote.refund)} dikembalikan ke saldo VPN.`,
            confirmText: 'Iya, Hapus',
            cancelText: 'Batal',
        });
        if (confirmed !== true && confirmed?.confirmed !== true) return;

        vpnDetailDeleteBtn.disabled = true;
        setVpnDeleteHint('Menghapus akun di server, mohon tunggu...');
        try {
            const response = await fetch(`/api/vpn/accounts/${encodeURIComponent(account.id)}/delete`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: '{}',
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal menghapus akun');

            const data = result.data;
            showToast({
                type: 'success',
                title: 'Akun dihapus',
                message: `${formatRupiah(data.refunded)} masuk saldo VPN, sekarang ${formatRupiah(data.balance)}.`,
            });
            closeVpnDetail();
            await loadVpnOverview();
        } catch (error) {
            // Nilai pengembaliannya tetap berlaku, jadi tombolnya dibuka lagi
            // untuk dicoba ulang. Server tetap memeriksa ulang syaratnya.
            setVpnDeleteHint(error.message || 'Gagal menghapus akun.', 'failed');
            vpnDetailDeleteBtn.disabled = false;
        }
    }

    if (vpnDetailDeleteBtn) vpnDetailDeleteBtn.addEventListener('click', function() { void deleteVpnAccount(); });

    // Kotak buat config di panel detail. Hanya untuk akun SSH, dan hanya kalau
    // admin sudah menyiapkan pembuat config beserta templatenya — tanpa itu
    // tombolnya cuma akan berujung penolakan dari server.
    function syncVpnDetailConfigBox(account) {
        if (!vpnDetailConfigBoxEl) return;

        const bisa = account?.accountType === 'ssh' && vpnConfigTemplates.length > 0;
        vpnDetailConfigBoxEl.hidden = !bisa;
        tutupVpnDetailConfigPanel();
        setVpnDetailConfigStatus('');
        if (!bisa) return;

        renderVpnConfigAppSelect(vpnDetailConfigAppSelectEl, vpnDetailConfigTemplateSelectEl, vpnConfigTemplates);
    }

    function setVpnDetailConfigStatus(pesan, tone = '') {
        if (!vpnDetailConfigStatusEl) return;
        vpnDetailConfigStatusEl.textContent = pesan || '';
        vpnDetailConfigStatusEl.dataset.tone = tone;
    }

    function tutupVpnDetailConfigPanel() {
        if (vpnDetailConfigPanelEl) vpnDetailConfigPanelEl.hidden = true;
        if (vpnDetailConfigToggleEl) vpnDetailConfigToggleEl.setAttribute('aria-expanded', 'false');
    }

    async function generateVpnDetailConfig() {
        const pilihan = readVpnConfigChoice(vpnDetailConfigAppSelectEl, vpnDetailConfigTemplateSelectEl);
        if (!pilihan.templateId) {
            setVpnDetailConfigStatus('Pilih aplikasi dan templatenya dulu.', 'failed');
            return;
        }
        if (!vpnOpenAccountId) return;

        const body = { templateId: pilihan.templateId, accountId: vpnOpenAccountId };
        if (pilihan.output) body.output = pilihan.output;

        vpnDetailConfigGenerateBtn.disabled = true;
        setVpnDetailConfigStatus('Membuat file config...');
        try {
            const response = await fetch('/api/vpn/config/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal membuat config');

            const cara = await saveVpnConfigFile(result.data);
            setVpnDetailConfigStatus(
                cara === 'browser' ? 'File dibuka di browser untuk diunduh.' : 'File config sudah diunduh.',
                'success',
            );
        } catch (error) {
            setVpnDetailConfigStatus(error.message || 'Gagal membuat config.', 'failed');
        } finally {
            vpnDetailConfigGenerateBtn.disabled = false;
        }
    }

    if (vpnDetailConfigToggleEl) {
        vpnDetailConfigToggleEl.addEventListener('click', function() {
            if (!vpnDetailConfigPanelEl) return;
            const terbuka = !vpnDetailConfigPanelEl.hidden;
            vpnDetailConfigPanelEl.hidden = terbuka;
            vpnDetailConfigToggleEl.setAttribute('aria-expanded', terbuka ? 'false' : 'true');
        });
    }

    if (vpnDetailConfigGenerateBtn) {
        vpnDetailConfigGenerateBtn.addEventListener('click', function() { void generateVpnDetailConfig(); });
    }

    if (vpnDetailConfigAppSelectEl) {
        vpnDetailConfigAppSelectEl.addEventListener('change', function() {
            renderVpnConfigTemplateSelect(vpnDetailConfigAppSelectEl, vpnDetailConfigTemplateSelectEl, vpnConfigTemplates);
        });
    }

    // Format teksnya dibuat menyerupai kebiasaan webpanel VPN: blok rapi
    // dengan label rata kiri dan garis pemisah, siap ditempel ke WhatsApp
    // atau Telegram sekali salin. Labelnya sama dengan yang tampil di layar
    // supaya tidak ada dua sebutan berbeda untuk hal yang sama.
    function buildVpnAccountCopyText(account) {
        const jenis = VPN_TYPE_LABELS[account.accountType] || account.accountType;
        const entri = [
            ['Jenis', jenis],
            ['Server', account.serverName],
            ['Host', account.serverDomain],
            [
                account.accountType === 'zivpn' ? 'Password UDP' : 'Password',
                account.accountType === 'zivpn' ? account.udpPassword : account.password,
            ],
            ['Username', account.username],
            ['Limit perangkat', account.ipPackage ? `${account.ipPackage} perangkat` : ''],
            ['Kuota', formatVpnQuota(account.quota)],
            ['Masa aktif sampai', account.expiredAt ? formatDateTime(account.expiredAt) : ''],
        ];

        const ports = account.sshPorts || {};
        Object.keys(VPN_SSH_PORT_LABELS).forEach(function(key) {
            if (ports[key]) entri.push([VPN_SSH_PORT_LABELS[key], ports[key]]);
        });

        (account.sshAccountLines || []).forEach(function(item) {
            entri.push([item.label, item.text]);
        });

        const isian = entri.filter(function(pasang) {
            return pasang[1] !== null && pasang[1] !== undefined && String(pasang[1]).trim() !== '';
        });
        const lebar = isian.reduce(function(maks, pasang) { return Math.max(maks, pasang[0].length); }, 0);
        const baris = isian.map(function(pasang) { return `${pasang[0].padEnd(lebar, ' ')} : ${pasang[1]}`; });

        const links = account.links || {};
        const tautan = Object.keys(VPN_LINK_LABELS)
            .filter(function(key) { return links[key]; })
            .map(function(key) { return `${VPN_LINK_LABELS[key]}:\n${links[key]}`; });

        const judul = `===== Akun VPN - ${jenis} =====`;
        const bagian = [judul, baris.join('\n')];
        if (tautan.length) bagian.push(tautan.join('\n\n'));

        // Blok SlowDNS disusun terpisah dengan label rata sendiri, mengikuti
        // tampilan SC, supaya sekali salin tetap rapi di WhatsApp/Telegram.
        const slowdns = vpnSlowdnsOf(account);
        if (slowdns) {
            const pasangan = [['NS', slowdns.ns], ['Pubkey', slowdns.pubkey]];
            if (slowdns.dns) pasangan.push(['DNS', slowdns.dns]);
            const lebarSlow = pasangan.reduce(function(maks, p) { return Math.max(maks, p[0].length); }, 0);
            const barisSlow = pasangan.map(function(p) { return `${p[0].padEnd(lebarSlow, ' ')} : ${p[1]}`; });
            bagian.push(`[ SLOWDNS ]\n${barisSlow.join('\n')}\n\n${VPN_SLOWDNS_NOTE}`);
        }

        bagian.push('='.repeat(judul.length));
        return bagian.join('\n\n');
    }

    function closeVpnDetail() {
        if (!vpnDetailSheetEl) return;
        vpnDetailSheetEl.hidden = true;
        vpnDetailSheetEl.setAttribute('aria-hidden', 'true');
        vpnOpenAccountId = null;
        vpnOpenAccountData = null;
        if (vpnDetailConfigBoxEl) vpnDetailConfigBoxEl.hidden = true;
        tutupVpnDetailConfigPanel();
        setVpnDetailConfigStatus('');
        setVpnDetailStatus('');
        resetVpnDetailDeleteBox();
    }

    async function openVpnDetail(accountId) {
        if (!vpnDetailSheetEl) return;
        setVpnDetailStatus('Memuat konfigurasi...');
        vpnDetailSheetEl.hidden = false;
        vpnDetailSheetEl.setAttribute('aria-hidden', 'false');
        if (vpnDetailBodyEl) vpnDetailBodyEl.innerHTML = '<p class="vpn-empty">Memuat...</p>';

        try {
            const response = await fetch(`/api/vpn/accounts/${encodeURIComponent(accountId)}/config`);
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal memuat konfigurasi akun');
            vpnOpenAccountId = accountId;
            renderVpnDetail(result.data);
            setVpnDetailStatus('');
        } catch (error) {
            if (vpnDetailBodyEl) vpnDetailBodyEl.innerHTML = '';
            setVpnDetailStatus(error.message || 'Gagal memuat konfigurasi akun.', 'failed');
        }
    }

    async function loadVpnOverview() {
        try {
            const response = await fetch('/api/vpn/overview');
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal memuat menu VPN');

            const data = result.data || {};
            vpnServers = Array.isArray(data.servers) ? data.servers : [];
            vpnAccounts = Array.isArray(data.accounts) ? data.accounts : [];
            renderVpnHiddenAccountNote(data.hiddenAccounts, data.expiredVisibleDays);
            renderVpnSummary(data.profile, vpnAccounts);
            renderVpnServerOptions();
            renderVpnAccounts();
            renderVpnRenewForm();
            renderVpnMoveForm();
        } catch (error) {
            if (vpnAccountListEl) {
                vpnAccountListEl.innerHTML = `<p class="vpn-empty">${escapeHtml(error.message || 'Gagal memuat menu VPN.')}</p>`;
            }
            setDashboardVpnBalance(null);
        }
    }

    // Sisa slot server dimuat ulang setiap menit selama menu VPN terbuka,
    // mengikuti auto-sync jumlah akun dengan VPS di backend. Yang diambil hanya
    // daftar server, bukan seluruh overview, supaya isian formulir dan daftar
    // akun tidak ikut tergambar ulang di tengah user mengetik.
    const VPN_SERVER_REFRESH_MS = 60 * 1000;

    function vpnServerListKey(list) {
        return list.map(function(server) {
            return `${server.id}:${server.isFull ? 1 : 0}:${server.name}:${server.isUdpZivpnOnly ? 1 : 0}`;
        }).join('|');
    }

    function applyVpnServerUpdate(servers) {
        const strukturSama = vpnServerListKey(servers) === vpnServerListKey(vpnServers);
        vpnServers = servers;
        if (!strukturSama) {
            // Ada server yang baru penuh, kembali tersedia, ditambah, atau
            // dihapus. Pilihan dan form pindah digambar ulang, dengan pilihan
            // sebelumnya tetap dipertahankan oleh fungsi masing-masing.
            renderVpnServerOptions();
            const akunPindah = vpnMoveAccountSelectEl?.value || null;
            renderVpnMoveForm(akunPindah);
            return;
        }

        // Hanya angkanya yang berubah: perbarui teks slot di tempat.
        const terpilih = getSelectedVpnServer();
        const punyaSlot = terpilih?.slotLeft !== null && terpilih?.slotLeft !== undefined;
        if (vpnSlotInfoCardEl) vpnSlotInfoCardEl.hidden = !punyaSlot;
        setVpnInfoCardValue(vpnServerHintEl, punyaSlot ? `${terpilih.slotLeft} slot` : '');

        if (vpnMoveServerSelectEl && !vpnMoveServerSelectEl.disabled) {
            const akunPindahSekarang = getSelectedVpnMoveAccount();
            Array.from(vpnMoveServerSelectEl.options).forEach(function(option) {
                const server = vpnServers.find(function(item) { return item.id === option.value; });
                // Server sekarang ditandai "(server sekarang)", bukan sisa slot.
                if (!server || server.id === akunPindahSekarang?.serverId) return;
                const sisa = server.slotLeft === null || server.slotLeft === undefined
                    ? ''
                    : ` — sisa ${server.slotLeft} slot`;
                option.textContent = `${server.name}${sisa}`;
            });
        }
    }

    async function refreshVpnServers() {
        if (document.hidden || !vpnViewEl?.classList.contains('active')) return;
        try {
            const response = await fetch('/api/vpn/servers', { cache: 'no-store' });
            if (!response.ok) return;
            const result = await response.json();
            if (Array.isArray(result?.data)) applyVpnServerUpdate(result.data);
        } catch (_error) {
            // Gagal sekali tidak apa-apa, angka lama tetap tampil dan dicoba
            // lagi di putaran berikutnya.
        }
    }

    if (vpnViewEl) {
        setInterval(function() { void refreshVpnServers(); }, VPN_SERVER_REFRESH_MS);
        // Kembali ke tab setelah lama ditinggal langsung mengambil angka baru,
        // tidak menunggu putaran berikutnya.
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) void refreshVpnServers();
        });
    }

    async function buyVpnAccount() {
        const server = getSelectedVpnServer();
        if (!server) {
            setVpnBuyStatus('Pilih server dulu.', 'failed');
            return;
        }

        vpnBuyBtn.disabled = true;
        setVpnBuyStatus('Membuat akun di server, mohon tunggu...');
        try {
            const response = await fetch('/api/vpn/accounts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    serverId: server.id,
                    accountType: vpnTypeSelectEl?.value,
                    username: vpnUsernameInputEl?.value,
                    password: vpnPasswordInputEl?.value,
                    days: vpnDaysInputEl?.value,
                    ipPackage: vpnIpPackageSelectEl?.value,
                }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal membuat akun VPN');

            showToast({
                type: 'success',
                title: 'Akun VPN dibuat',
                message: `${result.data.account.username} aktif, saldo VPN sisa ${formatRupiah(result.data.balance)}.`,
            });
            if (result.data.warning) {
                showToast({ type: 'warning', title: 'Catatan dari server', message: result.data.warning });
            }
            if (vpnUsernameInputEl) vpnUsernameInputEl.value = '';
            if (vpnPasswordInputEl) vpnPasswordInputEl.value = '';
            setVpnBuyStatus('');
            await loadVpnOverview();
            await openVpnDetail(result.data.account.id);
        } catch (error) {
            setVpnBuyStatus(error.message || 'Gagal membuat akun VPN.', 'failed');
        } finally {
            vpnBuyBtn.disabled = false;
        }
    }

    async function createVpnTrial() {
        const server = getSelectedVpnServer();
        if (!server) {
            setVpnBuyStatus('Pilih server dulu.', 'failed');
            return;
        }

        vpnTrialBtn.disabled = true;
        setVpnBuyStatus('Membuat akun trial...');
        try {
            const response = await fetch('/api/vpn/trial', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ serverId: server.id, accountType: vpnTypeSelectEl?.value }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal membuat akun trial');

            showToast({
                type: 'success',
                title: 'Akun trial dibuat',
                message: 'Berlaku 1 jam. Konfigurasinya terbuka di bawah.',
            });
            setVpnBuyStatus('');
            await loadVpnOverview();
            await openVpnDetail(result.data.account.id);
        } catch (error) {
            setVpnBuyStatus(error.message || 'Gagal membuat akun trial.', 'failed');
        } finally {
            vpnTrialBtn.disabled = false;
        }
    }

    // ===== Sub menu Perpanjang dan Pindah Server =====
    //
    // Keduanya memilih akun dari daftar akun di ringkasan VPN, jadi tidak
    // perlu membuka panel detail akun lebih dulu.

    // Akun trial tidak bisa diperpanjang, dan akun yang servernya sudah
    // dihapus juga tidak (server menolaknya).
    function vpnAccountCanRenew(account) {
        return Boolean(account) && !account.isTrial && Boolean(account.serverId);
    }

    // Yang dipindah adalah sisa masa aktif, jadi akunnya harus masih aktif.
    function vpnAccountCanMove(account) {
        return Boolean(account) && !account.isTrial && Boolean(account.isActive);
    }

    // Sama dengan pindah: yang dikembalikan adalah sisa masa aktif. Syarat
    // umur akun minimal sehari diperiksa server, dan alasannya ditampilkan di
    // bawah tombol kalau belum terpenuhi.
    function vpnAccountCanDelete(account) {
        return Boolean(account) && !account.isTrial && Boolean(account.isActive);
    }

    function getVpnAccountById(accountId) {
        return vpnAccounts.find(function(account) { return account.id === accountId; }) || null;
    }

    function isVpnTabActive(nama) {
        return vpnViewEl?.dataset.vpnActiveTab === nama;
    }

    // Label dibuat pendek supaya tidak terpotong di layar HP. Jenis akun dan
    // masa aktifnya ditulis di bawah pilihannya.
    function vpnAccountOptionLabel(account) {
        return `${account.username} · ${account.serverName}`;
    }

    function vpnAccountPickInfo(account) {
        const jenis = VPN_TYPE_LABELS[account.accountType] || account.accountType;
        const masa = account.expiredAt
            ? `${account.isActive ? 'aktif sampai' : 'sudah habis sejak'} ${formatDateTime(account.expiredAt)}`
            : 'tanpa tanggal habis';
        return `${jenis}, ${masa}, ${account.ipPackage || 1} perangkat`;
    }

    // Pilihan yang sedang dipilih dipertahankan saat daftarnya disusun ulang,
    // kecuali ada akun yang diminta secara khusus.
    function fillVpnAccountSelect(selectEl, accounts, emptyText, preferredId = null) {
        if (!selectEl) return null;
        const sebelumnya = preferredId || selectEl.value;
        if (!accounts.length) {
            selectEl.innerHTML = `<option value="">${escapeHtml(emptyText)}</option>`;
            selectEl.disabled = true;
            return null;
        }
        selectEl.disabled = false;
        selectEl.innerHTML = accounts.map(function(account) {
            return `<option value="${escapeHtml(account.id)}">${escapeHtml(vpnAccountOptionLabel(account))}</option>`;
        }).join('');
        if (accounts.some(function(account) { return account.id === sebelumnya; })) selectEl.value = sebelumnya;
        return getVpnAccountById(selectEl.value);
    }

    function showVpnAccountPickInfo(el, account) {
        if (!el) return;
        el.hidden = !account;
        el.textContent = account ? vpnAccountPickInfo(account) : '';
    }

    // ----- Perpanjang -----

    let vpnRenewQuoteToken = 0;

    function setVpnRenewStatus(message, tone = '') {
        if (!vpnRenewStatusEl) return;
        vpnRenewStatusEl.textContent = message || '';
        vpnRenewStatusEl.dataset.tone = tone;
    }

    function getSelectedVpnRenewAccount() {
        const account = getVpnAccountById(vpnRenewAccountSelectEl?.value);
        return vpnAccountCanRenew(account) ? account : null;
    }

    function renderVpnRenewForm(preferredId = null) {
        const account = fillVpnAccountSelect(
            vpnRenewAccountSelectEl,
            vpnAccounts.filter(vpnAccountCanRenew),
            'Belum ada akun yang bisa diperpanjang',
            preferredId,
        );
        showVpnAccountPickInfo(vpnRenewAccountInfoEl, account);
        if (!account) {
            if (vpnRenewQuoteEl) vpnRenewQuoteEl.hidden = true;
            return;
        }
        if (isVpnTabActive('perpanjang')) void refreshVpnRenewQuote();
    }

    // Harga perpanjangan dihitung server dengan rumus yang sama seperti
    // pembelian: server akun, paket IP akun, dan jumlah hari.
    async function refreshVpnRenewQuote() {
        const account = getSelectedVpnRenewAccount();
        const token = ++vpnRenewQuoteToken;
        if (!account) {
            if (vpnRenewQuoteEl) vpnRenewQuoteEl.hidden = true;
            return;
        }

        try {
            const response = await fetch('/api/vpn/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    serverId: account.serverId,
                    ipPackage: account.ipPackage || 1,
                    days: vpnRenewDaysInputEl?.value || '',
                }),
            });
            const result = await response.json();
            if (token !== vpnRenewQuoteToken) return;

            if (!response.ok) {
                if (vpnRenewQuoteEl) vpnRenewQuoteEl.hidden = true;
                setVpnRenewStatus(result?.error || 'Gagal menghitung harga.', 'failed');
                return;
            }

            const data = result?.data || {};
            if (vpnRenewQuoteEl) vpnRenewQuoteEl.hidden = false;
            if (vpnRenewQuotePerDayEl) vpnRenewQuotePerDayEl.textContent = formatRupiah(data.pricePerDay);
            if (vpnRenewQuoteDaysEl) vpnRenewQuoteDaysEl.textContent = `${data.days} hari`;
            if (vpnRenewQuoteTotalEl) vpnRenewQuoteTotalEl.textContent = formatRupiah(data.total);
            setVpnRenewStatus(
                data.enough ? '' : `Saldo VPN kamu ${formatRupiah(data.balance)}, masih kurang ${formatRupiah(data.total - data.balance)}.`,
                data.enough ? '' : 'warning',
            );
        } catch (_error) {
            if (token !== vpnRenewQuoteToken) return;
            setVpnRenewStatus('Gagal menghitung harga. Cek koneksi lalu coba lagi.', 'failed');
        }
    }

    async function renewVpnAccount() {
        const account = getSelectedVpnRenewAccount();
        if (!account) {
            setVpnRenewStatus('Pilih akun yang mau diperpanjang dulu.', 'failed');
            return;
        }
        vpnRenewBtn.disabled = true;
        setVpnRenewStatus('Memperpanjang di server...');
        try {
            const response = await fetch(`/api/vpn/accounts/${encodeURIComponent(account.id)}/renew`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ days: vpnRenewDaysInputEl?.value }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal memperpanjang akun');

            showToast({
                type: 'success',
                title: 'Akun diperpanjang',
                message: `Aktif sampai ${formatDateTime(result.data.account.expiredAt)}, saldo sisa ${formatRupiah(result.data.balance)}.`,
            });
            setVpnRenewStatus('');
            await loadVpnOverview();
        } catch (error) {
            setVpnRenewStatus(error.message || 'Gagal memperpanjang akun.', 'failed');
        } finally {
            vpnRenewBtn.disabled = false;
        }
    }

    // ----- Pindah server -----
    //
    // Akun dibuat ulang di server tujuan dengan sisa hari yang sama, lalu yang
    // lama dihapus. Biayanya cuma selisih harga per hari dikali sisa hari, jadi
    // pindah ke server yang lebih murah malah mengembalikan saldo.
    const vpnMoveTypeSelectEl = document.getElementById('vpnMoveTypeSelect');
    const vpnMoveServerSelectEl = document.getElementById('vpnMoveServerSelect');
    const vpnMoveQuoteEl = document.getElementById('vpnMoveQuote');
    const vpnMoveBtn = document.getElementById('vpnMoveBtn');
    const vpnMoveStatusEl = document.getElementById('vpnMoveStatus');

    let vpnMoveQuoteToken = 0;

    function setVpnMoveStatus(message, tone = '') {
        if (!vpnMoveStatusEl) return;
        vpnMoveStatusEl.textContent = message || '';
        vpnMoveStatusEl.dataset.tone = tone;
    }

    function getSelectedVpnMoveAccount() {
        const account = getVpnAccountById(vpnMoveAccountSelectEl?.value);
        return vpnAccountCanMove(account) ? account : null;
    }

    // Jenis akun yang bisa dipilih saat pindah, sama dengan pilihan beli akun.
    const VPN_MOVE_TYPES = ['ssh', 'vmess', 'vless', 'trojan', 'zivpn'];

    // Jenis akun tujuan yang dipilih. Kosong berarti jenisnya tetap.
    function getVpnMoveTargetType(account) {
        return vpnMoveTypeSelectEl?.value || account?.accountType || '';
    }

    // Server tujuan yang masuk akal: aktif, tidak penuh, dan cocok dengan
    // jenis akun tujuannya. Server yang sedang dipakai hanya ditawarkan kalau
    // jenis akunnya diganti, karena itu cuma ganti protokol di tempat.
    function vpnMoveTargetsFor(account, type = account.accountType) {
        const butuhUdp = type === 'zivpn';
        return vpnServers.filter(function(server) {
            if (Boolean(server.isUdpZivpnOnly) !== butuhUdp) return false;
            // Disaring dengan id, bukan nama: dua server boleh bernama sama.
            // Server sekarang tetap boleh walau penuh: akun lamanya dihapus,
            // jadi jumlah akun di sana tidak bertambah.
            if (server.id === account.serverId) return type !== account.accountType;
            return !server.isFull;
        });
    }

    // Jenis akun sekarang selalu ada di pilihan. Jenis lain hanya ditawarkan
    // kalau ada server yang bisa menerimanya. Pilihan sebelumnya dipertahankan
    // selama akunnya sama.
    function renderVpnMoveTypeOptions(account) {
        if (!vpnMoveTypeSelectEl) return;
        if (!account) {
            vpnMoveTypeSelectEl.innerHTML = '<option value="">Pilih akun dulu</option>';
            vpnMoveTypeSelectEl.disabled = true;
            delete vpnMoveTypeSelectEl.dataset.accountId;
            return;
        }

        const pilihan = [account.accountType].concat(VPN_MOVE_TYPES.filter(function(type) {
            return type !== account.accountType && vpnMoveTargetsFor(account, type).length > 0;
        }));
        const sebelumnya = vpnMoveTypeSelectEl.dataset.accountId === account.id ? vpnMoveTypeSelectEl.value : '';
        vpnMoveTypeSelectEl.innerHTML = pilihan.map(function(type) {
            const label = VPN_TYPE_LABELS[type] || type.toUpperCase();
            const sekarang = type === account.accountType ? ' (sekarang)' : '';
            return `<option value="${escapeHtml(type)}">${escapeHtml(label + sekarang)}</option>`;
        }).join('');
        vpnMoveTypeSelectEl.value = pilihan.includes(sebelumnya) ? sebelumnya : account.accountType;
        vpnMoveTypeSelectEl.dataset.accountId = account.id;
        vpnMoveTypeSelectEl.disabled = pilihan.length < 2;
    }

    // Body permintaan pindah. Jenis akun hanya dikirim kalau memang diganti.
    function buildVpnMoveRequest(account) {
        const body = { targetServerId: vpnMoveServerSelectEl.value };
        const jenis = getVpnMoveTargetType(account);
        if (jenis && jenis !== account.accountType) body.targetAccountType = jenis;
        return body;
    }

    function renderVpnMoveForm(preferredId = null) {
        const account = fillVpnAccountSelect(
            vpnMoveAccountSelectEl,
            vpnAccounts.filter(vpnAccountCanMove),
            'Belum ada akun aktif yang bisa dipindah',
            preferredId,
        );
        showVpnAccountPickInfo(vpnMoveAccountInfoEl, account);
        renderVpnMoveTypeOptions(account);
        if (vpnMoveQuoteEl) vpnMoveQuoteEl.hidden = true;
        setVpnMoveStatus('');
        if (!vpnMoveServerSelectEl) return;

        const targets = account ? vpnMoveTargetsFor(account, getVpnMoveTargetType(account)) : [];
        if (!targets.length) {
            vpnMoveServerSelectEl.innerHTML = account
                ? '<option value="">Tidak ada server lain yang cocok</option>'
                : '<option value="">Pilih akun dulu</option>';
            vpnMoveServerSelectEl.disabled = true;
            if (vpnMoveBtn) vpnMoveBtn.disabled = true;
            return;
        }

        const tujuanSebelumnya = vpnMoveServerSelectEl.value;
        vpnMoveServerSelectEl.disabled = false;
        if (vpnMoveBtn) vpnMoveBtn.disabled = false;
        vpnMoveServerSelectEl.innerHTML = targets.map(function(server) {
            if (server.id === account.serverId) {
                return `<option value="${escapeHtml(server.id)}">${escapeHtml(server.name)} (server sekarang)</option>`;
            }
            const sisa = server.slotLeft === null || server.slotLeft === undefined
                ? ''
                : ` — sisa ${server.slotLeft} slot`;
            return `<option value="${escapeHtml(server.id)}">${escapeHtml(server.name)}${escapeHtml(sisa)}</option>`;
        }).join('');
        if (targets.some(function(server) { return server.id === tujuanSebelumnya; })) {
            vpnMoveServerSelectEl.value = tujuanSebelumnya;
        }
        if (isVpnTabActive('pindah')) void refreshVpnMoveQuote();
    }

    async function refreshVpnMoveQuote() {
        const account = getSelectedVpnMoveAccount();
        if (!account || !vpnMoveServerSelectEl?.value) return;
        const token = ++vpnMoveQuoteToken;

        try {
            const response = await fetch(`/api/vpn/accounts/${encodeURIComponent(account.id)}/move/quote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(buildVpnMoveRequest(account)),
            });
            const result = await response.json();
            if (token !== vpnMoveQuoteToken) return;

            if (!response.ok) {
                if (vpnMoveQuoteEl) vpnMoveQuoteEl.hidden = true;
                setVpnMoveStatus(result?.error || 'Gagal menghitung biaya pindah.', 'failed');
                return;
            }

            const data = result.data;
            const biaya = data.difference > 0
                ? `Tambah bayar ${formatRupiah(data.difference)}`
                : (data.difference < 0
                    ? `Kelebihan ${formatRupiah(Math.abs(data.difference))} dikembalikan ke saldo`
                    : 'Tanpa biaya tambahan');

            const gantiJenis = data.toAccountType && data.fromAccountType && data.toAccountType !== data.fromAccountType;
            const barisJenis = gantiJenis
                ? `<div class="vpn-quote-row"><span>Jenis akun</span><strong>${escapeHtml(VPN_TYPE_LABELS[data.fromAccountType] || data.fromAccountType)} → ${escapeHtml(VPN_TYPE_LABELS[data.toAccountType] || data.toAccountType)}</strong></div>`
                : '';

            if (vpnMoveQuoteEl) {
                vpnMoveQuoteEl.hidden = false;
                vpnMoveQuoteEl.innerHTML = `${barisJenis}
                    <div class="vpn-quote-row"><span>Sisa masa aktif</span><strong>${data.remainingDays} hari</strong></div>
                    <div class="vpn-quote-row"><span>Harga sekarang</span><strong>${escapeHtml(formatRupiah(data.oldPricePerDay))}/hari</strong></div>
                    <div class="vpn-quote-row"><span>Harga di ${escapeHtml(data.toServerName)}</span><strong>${escapeHtml(formatRupiah(data.newPricePerDay))}/hari</strong></div>
                    <div class="vpn-quote-row vpn-quote-total"><span>Biaya pindah</span><strong>${escapeHtml(biaya)}</strong></div>`;
            }

            setVpnMoveStatus(
                data.enough ? '' : `Saldo VPN kamu ${formatRupiah(data.balance)}, masih kurang ${formatRupiah(data.difference - data.balance)}.`,
                data.enough ? '' : 'warning',
            );
        } catch (_error) {
            if (token !== vpnMoveQuoteToken) return;
            setVpnMoveStatus('Gagal menghitung biaya pindah.', 'failed');
        }
    }

    async function moveVpnAccount() {
        const account = getSelectedVpnMoveAccount();
        if (!account || !vpnMoveServerSelectEl?.value) return;

        const namaTujuan = vpnMoveServerSelectEl.options[vpnMoveServerSelectEl.selectedIndex]?.textContent || 'server itu';
        const permintaan = buildVpnMoveRequest(account);
        const jenisBaru = permintaan.targetAccountType;
        const labelJenisBaru = jenisBaru ? (VPN_TYPE_LABELS[jenisBaru] || jenisBaru.toUpperCase()) : '';
        // Config lama tidak bisa dipakai lagi kalau jenis akunnya berganti,
        // misalnya link VMESS untuk akun yang sekarang SSH.
        const pesan = jenisBaru
            ? `Pindahkan akun ${account.username} ke ${namaTujuan} sebagai ${labelJenisBaru}? Akunnya dibuat ulang di sana dengan sisa masa aktif yang sama, lalu yang lama dihapus. Karena jenis akunnya berganti, config di aplikasimu perlu dibuat ulang.`
            : `Pindahkan akun ${account.username} ke ${namaTujuan}? Akunnya dibuat ulang di sana dengan sisa masa aktif yang sama, lalu yang lama dihapus.`;
        const confirmed = await showConfirmDialog({
            title: 'Pindah Server',
            message: pesan,
            confirmText: 'Iya, Pindahkan',
            cancelText: 'Batal',
        });
        if (confirmed !== true && confirmed?.confirmed !== true) return;

        vpnMoveBtn.disabled = true;
        setVpnMoveStatus('Memindahkan akun, mohon tunggu...');
        try {
            const response = await fetch(`/api/vpn/accounts/${encodeURIComponent(account.id)}/move`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(permintaan),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal memindahkan akun');

            const data = result.data;
            const catatan = data.charged > 0
                ? `Ditambah bayar ${formatRupiah(data.charged)}.`
                : (data.refunded > 0 ? `Kelebihan ${formatRupiah(data.refunded)} dikembalikan.` : 'Tanpa biaya tambahan.');
            const sebagai = jenisBaru ? ` sebagai ${labelJenisBaru}` : '';

            showToast({
                type: 'success',
                title: 'Akun dipindahkan',
                message: `Sekarang di ${data.account.serverName}${sebagai}. ${catatan}`,
            });
            if (data.warning) {
                showToast({ type: 'warning', title: 'Catatan dari server', message: data.warning });
            }
            // Akun lama yang gagal dihapus akan habis sendiri, tapi user perlu
            // tahu supaya tidak bingung kalau masih bisa dipakai sebentar.
            if (data.leftOnOldServer) {
                showToast({
                    type: 'warning',
                    title: 'Akun lama belum terhapus',
                    message: 'Akun di server lama belum bisa dihapus dan akan habis sendiri saat masa aktifnya lewat.',
                });
            }

            await loadVpnOverview();
            // Akun hasil pindah tetap terpilih, supaya server asalnya yang baru
            // langsung tercermin di pilihan server tujuan.
            renderVpnMoveForm(data.account?.id || account.id);
        } catch (error) {
            setVpnMoveStatus(error.message || 'Gagal memindahkan akun.', 'failed');
        } finally {
            vpnMoveBtn.disabled = !getSelectedVpnMoveAccount() || Boolean(vpnMoveServerSelectEl?.disabled);
        }
    }

    // Tombol pintas di panel detail akun.
    function openVpnAccountAction(tab) {
        const accountId = vpnOpenAccountId;
        closeVpnDetail();
        setVpnTab(tab, { accountId });
        vpnTabsEl?.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }

    if (vpnRenewAccountSelectEl) vpnRenewAccountSelectEl.addEventListener('change', function() { renderVpnRenewForm(); });
    if (vpnRenewDaysInputEl) vpnRenewDaysInputEl.addEventListener('input', function() { void refreshVpnRenewQuote(); });
    if (vpnMoveAccountSelectEl) vpnMoveAccountSelectEl.addEventListener('change', function() { renderVpnMoveForm(); });
    // Jenis akun menentukan server mana yang cocok, jadi daftar tujuannya
    // disusun ulang untuk akun yang sama.
    if (vpnMoveTypeSelectEl) {
        vpnMoveTypeSelectEl.addEventListener('change', function() { renderVpnMoveForm(vpnMoveAccountSelectEl?.value || null); });
    }
    if (vpnMoveServerSelectEl) {
        vpnMoveServerSelectEl.addEventListener('change', function() { void refreshVpnMoveQuote(); });
    }
    if (vpnMoveBtn) vpnMoveBtn.addEventListener('click', function() { void moveVpnAccount(); });
    if (vpnDetailRenewBtn) vpnDetailRenewBtn.addEventListener('click', function() { openVpnAccountAction('perpanjang'); });
    if (vpnDetailMoveBtn) vpnDetailMoveBtn.addEventListener('click', function() { openVpnAccountAction('pindah'); });

    // ===== Pembuat file config =====
    //
    // Bagian ini disembunyikan sampai admin menyalakan fiturnya dan mengisi
    // alamat Generator API, supaya user tidak melihat tombol yang pasti gagal.
    const vpnConfigSectionEl = document.getElementById('vpnConfigSection');
    const vpnConfigSourceSelectEl = document.getElementById('vpnConfigSourceSelect');
    const vpnConfigAccountGroupEl = document.getElementById('vpnConfigAccountGroup');
    const vpnConfigAccountSelectEl = document.getElementById('vpnConfigAccountSelect');
    const vpnConfigManualTypeGroupEl = document.getElementById('vpnConfigManualTypeGroup');
    const vpnConfigManualTypeSelectEl = document.getElementById('vpnConfigManualTypeSelect');
    const vpnConfigManualTextGroupEl = document.getElementById('vpnConfigManualTextGroup');
    const vpnConfigManualTextInputEl = document.getElementById('vpnConfigManualTextInput');
    const vpnConfigAppSelectEl = document.getElementById('vpnConfigAppSelect');
    const vpnConfigTemplateSelectEl = document.getElementById('vpnConfigTemplateSelect');
    const vpnConfigNameInputEl = document.getElementById('vpnConfigNameInput');
    const vpnConfigGenerateBtn = document.getElementById('vpnConfigGenerateBtn');
    const vpnConfigStatusEl = document.getElementById('vpnConfigStatus');
    const vpnConfigResultEl = document.getElementById('vpnConfigResult');
    const vpnConfigResultNameEl = document.getElementById('vpnConfigResultName');
    const vpnConfigResultMetaEl = document.getElementById('vpnConfigResultMeta');
    const vpnConfigDownloadLinkEl = document.getElementById('vpnConfigDownloadLink');
    const vpnConfigImportLinkEl = document.getElementById('vpnConfigImportLink');

    // js/user.js belum punya pembantu ini, dan hanya bagian ini yang butuh.
    function formatVpnConfigSize(bytes) {
        const angka = Number(bytes) || 0;
        if (angka < 1024) return `${angka} B`;
        if (angka < 1024 * 1024) return `${(angka / 1024).toFixed(1)} KB`;
        return `${(angka / (1024 * 1024)).toFixed(2)} MB`;
    }

    function setVpnConfigStatus(message, tone = '') {
        if (!vpnConfigStatusEl) return;
        vpnConfigStatusEl.textContent = message || '';
        vpnConfigStatusEl.dataset.tone = tone;
    }

    function isVpnConfigManual() {
        return vpnConfigSourceSelectEl?.value === 'manual';
    }

    function updateVpnConfigSource() {
        const manual = isVpnConfigManual();
        if (vpnConfigAccountGroupEl) vpnConfigAccountGroupEl.hidden = manual;
        if (vpnConfigManualTypeGroupEl) vpnConfigManualTypeGroupEl.hidden = !manual;
        if (vpnConfigManualTextGroupEl) vpnConfigManualTextGroupEl.hidden = !manual;
    }

    async function loadVpnConfigOptions() {
        if (!vpnConfigSectionEl) return;
        try {
            const response = await fetch('/api/vpn/config/options');
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal memuat pilihan config');

            const data = result.data || {};
            if (!data.ready) {
                vpnConfigSectionEl.hidden = true;
                syncVpnConfigTab();
                return;
            }
            vpnConfigSectionEl.hidden = false;
            syncVpnConfigTab();

            const templates = Array.isArray(data.templates) ? data.templates : [];
            // Disimpan supaya panel detail akun bisa memakai daftar yang sama
            // tanpa meminta ulang ke server.
            vpnConfigTemplates = templates;
            vpnConfigOneFtunnel = data.oneFtunnel === true;
            renderVpnConfigAppSelect(vpnConfigAppSelectEl, vpnConfigTemplateSelectEl, templates);
            // Panel detail bisa saja sedang terbuka saat daftarnya baru datang.
            if (vpnOpenAccountData) syncVpnDetailConfigBox(vpnOpenAccountData);

            const accounts = Array.isArray(data.accounts) ? data.accounts : [];
            if (vpnConfigAccountSelectEl) {
                vpnConfigAccountSelectEl.innerHTML = accounts.length
                    ? accounts.map(function(a) {
                        const jenis = VPN_TYPE_LABELS[a.accountType] || a.accountType;
                        return `<option value="${escapeHtml(a.id)}">${escapeHtml(a.username)} — ${escapeHtml(jenis)} · ${escapeHtml(a.serverName)}</option>`;
                    }).join('')
                    : '<option value="">Belum ada akun yang bisa dipakai</option>';
            }

            // Tanpa akun yang cocok, pilihan otomatis pindah ke tempel sendiri
            // supaya bagian ini tetap ada gunanya.
            if (!accounts.length && vpnConfigSourceSelectEl) {
                vpnConfigSourceSelectEl.value = 'manual';
            }
            updateVpnConfigSource();

            if (!templates.length) {
                setVpnConfigStatus('Admin belum mengunggah template config.', 'warning');
            } else if (!accounts.length) {
                setVpnConfigStatus('Belum ada akun SSH, VMESS, VLESS, atau TROJAN yang masih aktif. Kamu masih bisa menempel akun sendiri.', 'warning');
            } else {
                setVpnConfigStatus('');
            }
        } catch (_error) {
            vpnConfigSectionEl.hidden = true;
            syncVpnConfigTab();
        }
    }

    // Di aplikasi Android, berkas tidak bisa disimpan dari dalam halaman, jadi
    // tautannya dibuka di browser sistem. Di website, berkasnya langsung
    // disimpan dari data yang sudah diterima tanpa permintaan kedua.
    async function saveVpnConfigFile(data) {
        if (window.PPOB_IS_NATIVE && typeof window.PPOB_OPEN_IN_BROWSER === 'function') {
            const dibuka = await window.PPOB_OPEN_IN_BROWSER(data.downloadUrl);
            if (dibuka) return 'browser';
        }

        const biner = Uint8Array.from(atob(data.contentBase64), function(c) { return c.charCodeAt(0); });
        const blob = new Blob([biner], { type: data.mimeType || 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const tautan = document.createElement('a');
        tautan.href = url;
        tautan.download = data.filename;
        document.body.appendChild(tautan);
        tautan.click();
        tautan.remove();
        setTimeout(function() { URL.revokeObjectURL(url); }, 10000);
        return 'unduh';
    }

    async function generateVpnConfig() {
        const pilihan = readVpnConfigChoice(vpnConfigAppSelectEl, vpnConfigTemplateSelectEl);
        if (!pilihan.templateId) {
            setVpnConfigStatus('Pilih aplikasi dan templatenya dulu.', 'failed');
            return;
        }

        const manual = isVpnConfigManual();
        const body = { templateId: pilihan.templateId, name: vpnConfigNameInputEl?.value };
        if (pilihan.output) body.output = pilihan.output;
        if (manual) {
            body.manualAccountType = vpnConfigManualTypeSelectEl?.value;
            body.manualAccountText = vpnConfigManualTextInputEl?.value;
        } else {
            body.accountId = vpnConfigAccountSelectEl?.value;
            if (!body.accountId) {
                setVpnConfigStatus('Pilih akun dulu, atau ganti ke tempel sendiri.', 'failed');
                return;
            }
        }

        vpnConfigGenerateBtn.disabled = true;
        setVpnConfigStatus('Membuat file config...');
        try {
            const response = await fetch('/api/vpn/config/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal membuat config');

            const data = result.data;
            const cara = await saveVpnConfigFile(data);

            if (vpnConfigResultEl) vpnConfigResultEl.hidden = false;
            if (vpnConfigResultNameEl) vpnConfigResultNameEl.textContent = data.filename;
            if (vpnConfigResultMetaEl) {
                vpnConfigResultMetaEl.textContent = `${formatVpnConfigSize(data.byteSize || 0)} · tautan berlaku ${Math.round((data.downloadExpiresInMs || 0) / 60000)} menit`;
            }
            if (vpnConfigDownloadLinkEl) vpnConfigDownloadLinkEl.href = data.downloadUrl;
            // Khusus 1FTunnel: tautan 1ftunnel:// membuka aplikasinya langsung
            // dan mengimpor config yang sama, tanpa perlu mencari berkasnya.
            if (vpnConfigImportLinkEl) {
                vpnConfigImportLinkEl.hidden = !data.importLink;
                vpnConfigImportLinkEl.href = data.importLink || '#';
            }

            setVpnConfigStatus(
                cara === 'browser'
                    ? 'File dibuka di browser untuk diunduh.'
                    : 'File config sudah diunduh.',
                'success',
            );
        } catch (error) {
            setVpnConfigStatus(error.message || 'Gagal membuat config.', 'failed');
        } finally {
            vpnConfigGenerateBtn.disabled = false;
        }
    }

    if (vpnConfigSourceSelectEl) vpnConfigSourceSelectEl.addEventListener('change', updateVpnConfigSource);
    if (vpnConfigAppSelectEl) {
        vpnConfigAppSelectEl.addEventListener('change', function() {
            renderVpnConfigTemplateSelect(vpnConfigAppSelectEl, vpnConfigTemplateSelectEl, vpnConfigTemplates);
        });
    }
    if (vpnConfigGenerateBtn) vpnConfigGenerateBtn.addEventListener('click', function() { void generateVpnConfig(); });

    // Tautan unduh ulang memakai token yang sudah dipakai sekali, jadi di
    // aplikasi tetap perlu lewat browser sistem.
    if (vpnConfigDownloadLinkEl) {
        vpnConfigDownloadLinkEl.addEventListener('click', function(event) {
            if (!window.PPOB_IS_NATIVE || typeof window.PPOB_OPEN_IN_BROWSER !== 'function') return;
            event.preventDefault();
            void window.PPOB_OPEN_IN_BROWSER(vpnConfigDownloadLinkEl.getAttribute('href'));
        });
    }

    // ===== Pembayaran QRIS menu VPN =====
    //
    // Satu panel dipakai untuk tiga jenis pesanan: topup, beli akun, dan
    // perpanjang akun. Yang membedakan hanya isi keterangannya dan apa yang
    // dikerjakan setelah pembayaran diterima.
    const vpnBuyQrisBtn = document.getElementById('vpnBuyQrisBtn');
    const vpnRenewQrisBtn = document.getElementById('vpnRenewQrisBtn');
    const vpnTopupAmountInputEl = document.getElementById('vpnTopupAmountInput');
    const vpnTopupHintEl = document.getElementById('vpnTopupHint');
    const vpnTopupQuickEl = document.getElementById('vpnTopupQuick');
    const vpnTopupBtn = document.getElementById('vpnTopupBtn');
    const vpnTopupStatusEl = document.getElementById('vpnTopupStatus');
    // Salinan formulir topup VPN di menu Topup.
    const topupVpnAmountInputEl = document.getElementById('topupVpnAmountInput');
    const topupVpnHintEl = document.getElementById('topupVpnHint');
    const topupVpnQuickEl = document.getElementById('topupVpnQuick');
    const topupVpnBtn = document.getElementById('topupVpnBtn');
    const topupVpnStatusEl = document.getElementById('topupVpnStatus');
    const vpnOrderListEl = document.getElementById('vpnOrderList');
    const vpnOrderRefreshBtn = document.getElementById('vpnOrderRefreshBtn');
    const vpnQrisSheetEl = document.getElementById('vpnQrisSheet');
    const vpnQrisBackdropEl = document.getElementById('vpnQrisBackdrop');
    const vpnQrisCloseBtn = document.getElementById('vpnQrisCloseBtn');
    const vpnQrisTitleEl = document.getElementById('vpnQrisTitle');
    const vpnQrisAmountEl = document.getElementById('vpnQrisAmount');
    const vpnQrisSubtitleEl = document.getElementById('vpnQrisSubtitle');
    const vpnQrisImageEl = document.getElementById('vpnQrisImage');
    const vpnQrisFallbackEl = document.getElementById('vpnQrisFallback');
    const vpnQrisCountdownEl = document.getElementById('vpnQrisCountdown');
    const vpnQrisStateEl = document.getElementById('vpnQrisState');
    const vpnPendingSectionEl = document.getElementById('vpnPendingSection');
    const vpnPendingListEl = document.getElementById('vpnPendingList');
    const vpnAccountHiddenNoteEl = document.getElementById('vpnAccountHiddenNote');
    const vpnRenewQrisHintEl = document.getElementById('vpnRenewQrisHint');
    const vpnBuyQrisHintEl = document.getElementById('vpnBuyQrisHint');
    const vpnQrisLoadingEl = document.getElementById('vpnQrisLoading');
    const vpnQrisRetryBtn = document.getElementById('vpnQrisRetryBtn');
    const vpnQrisStatusTextEl = document.getElementById('vpnQrisStatusText');
    const vpnQrisCancelBtn = document.getElementById('vpnQrisCancelBtn');
    const vpnQrisCheckBtn = document.getElementById('vpnQrisCheckBtn');

    const VPN_ORDER_STATUS_LABELS = {
        WAITING_PAYMENT: 'Menunggu pembayaran',
        PAID: 'Diterima, sedang diproses',
        FULFILLED: 'Selesai',
        FAILED: 'Gagal diproses',
        EXPIRED: 'Kedaluwarsa',
        CANCELED: 'Dibatalkan',
    };

    const VPN_ORDER_TYPE_LABELS = {
        TOPUP: 'Topup saldo',
        ACCOUNT_PURCHASE: 'Beli akun',
        ACCOUNT_RENEW: 'Perpanjang akun',
    };

    // Status yang sudah tidak akan berubah lagi. Begitu salah satunya tercapai,
    // penghitung dan pemeriksaan berkala dihentikan.
    const VPN_ORDER_FINAL_STATUSES = new Set(['FULFILLED', 'FAILED', 'EXPIRED', 'CANCELED']);

    let vpnTopupLimits = null;
    let vpnQrisOrder = null;
    let vpnQrisPollTimer = null;
    let vpnQrisCountdownTimer = null;

    function setVpnTopupStatus(message, tone = '') {
        if (!vpnTopupStatusEl) return;
        vpnTopupStatusEl.textContent = message || '';
        vpnTopupStatusEl.dataset.tone = tone;
    }

    function setTopupVpnStatus(message, tone = '') {
        if (!topupVpnStatusEl) return;
        topupVpnStatusEl.textContent = message || '';
        topupVpnStatusEl.dataset.tone = tone;
    }

    function setVpnQrisStatus(message, tone = '') {
        if (!vpnQrisStatusTextEl) return;
        vpnQrisStatusTextEl.textContent = message || '';
        vpnQrisStatusTextEl.dataset.tone = tone;
    }

    async function loadVpnPaymentConfig() {
        if (vpnTopupLimits) return vpnTopupLimits;
        try {
            const response = await fetch('/api/vpn/payment/config');
            if (!response.ok) throw new Error('gagal');
            const result = await response.json();
            vpnTopupLimits = result?.data || null;
        } catch (_error) {
            vpnTopupLimits = null;
        }
        if (vpnTopupLimits) {
            const batasTopup = `Minimal ${formatRupiah(vpnTopupLimits.min)}, maksimal ${formatRupiah(vpnTopupLimits.max)}.`;
            if (vpnTopupHintEl) vpnTopupHintEl.textContent = batasTopup;
            if (topupVpnHintEl) topupVpnHintEl.textContent = batasTopup;
        }
        if (vpnTopupLimits?.directQrisMin) {
            const pesanBatas = `Bayar langsung lewat QRIS butuh total minimal `
                + `${formatRupiah(vpnTopupLimits.directQrisMin)}. Di bawah itu, pakai saldo VPN.`;
            if (vpnRenewQrisHintEl) {
                vpnRenewQrisHintEl.hidden = false;
                vpnRenewQrisHintEl.textContent = pesanBatas;
            }
            if (vpnBuyQrisHintEl) {
                vpnBuyQrisHintEl.hidden = false;
                vpnBuyQrisHintEl.textContent = pesanBatas;
            }
        }
        return vpnTopupLimits;
    }

    function stopVpnQrisTimers() {
        if (vpnQrisPollTimer) {
            clearInterval(vpnQrisPollTimer);
            vpnQrisPollTimer = null;
        }
        if (vpnQrisCountdownTimer) {
            clearInterval(vpnQrisCountdownTimer);
            vpnQrisCountdownTimer = null;
        }
    }

    function closeVpnQris() {
        stopVpnQrisTimers();
        vpnQrisOrder = null;
        if (!vpnQrisSheetEl) return;
        vpnQrisSheetEl.hidden = true;
        vpnQrisSheetEl.setAttribute('aria-hidden', 'true');
        // Pesanan yang ditutup tanpa dibayar harus tetap terlihat, jadi
        // daftarnya dimuat ulang begitu panelnya ditutup.
        void loadVpnOrders();
    }

    function updateVpnQrisCountdown() {
        if (!vpnQrisCountdownEl || !vpnQrisOrder) return;
        if (!vpnQrisOrder.expiresAt || VPN_ORDER_FINAL_STATUSES.has(vpnQrisOrder.status)) {
            vpnQrisCountdownEl.textContent = '';
            return;
        }
        const sisa = new Date(vpnQrisOrder.expiresAt).getTime() - Date.now();
        if (sisa <= 0) {
            vpnQrisCountdownEl.textContent = 'Waktu habis';
            return;
        }
        const menit = Math.floor(sisa / 60000);
        const detik = Math.floor((sisa % 60000) / 1000);
        vpnQrisCountdownEl.textContent = `Sisa ${menit}:${String(detik).padStart(2, '0')}`;
    }

    function describeVpnOrder(order) {
        if (order.type === 'TOPUP') return `Topup saldo VPN ${formatRupiah(order.amount)}`;
        const jenis = VPN_TYPE_LABELS[order.accountType] || order.accountType || 'akun';
        const bagian = [jenis];
        if (order.accountUsername) bagian.push(order.accountUsername);
        if (order.days) bagian.push(`${order.days} hari`);
        if (order.ipPackage) bagian.push(`${order.ipPackage} IP`);
        if (order.serverName) bagian.push(order.serverName);
        return bagian.join(' · ');
    }

    // Gambar QR datang dari gateway, jadi selalu ada jeda pemuatan. Selama itu
    // penanda "menyiapkan" yang tampil, bukan kotak kosong. Sumbernya hanya
    // diganti kalau alamatnya memang berubah, supaya pemeriksaan status berkala
    // tidak membuat gambarnya berkedip.
    function showVpnQrisImage(url) {
        if (!vpnQrisImageEl) return;

        if (!url) {
            vpnQrisImageEl.removeAttribute('src');
            vpnQrisImageEl.hidden = true;
            if (vpnQrisLoadingEl) vpnQrisLoadingEl.hidden = false;
            if (vpnQrisFallbackEl) vpnQrisFallbackEl.hidden = true;
            return;
        }

        if (vpnQrisImageEl.dataset.src === url && vpnQrisImageEl.complete && vpnQrisImageEl.naturalWidth > 0) {
            vpnQrisImageEl.hidden = false;
            if (vpnQrisLoadingEl) vpnQrisLoadingEl.hidden = true;
            if (vpnQrisFallbackEl) vpnQrisFallbackEl.hidden = true;
            return;
        }
        if (vpnQrisImageEl.dataset.src === url) return;

        vpnQrisImageEl.dataset.src = url;
        vpnQrisImageEl.hidden = true;
        if (vpnQrisLoadingEl) vpnQrisLoadingEl.hidden = false;
        if (vpnQrisFallbackEl) vpnQrisFallbackEl.hidden = true;
        vpnQrisImageEl.src = url;
    }

    function renderVpnQris(order) {
        vpnQrisOrder = order;
        if (!vpnQrisSheetEl) return;

        if (vpnQrisTitleEl) {
            vpnQrisTitleEl.textContent = order.type === 'TOPUP' ? 'Bayar Topup' : 'Bayar Pesanan';
        }
        if (vpnQrisAmountEl) vpnQrisAmountEl.textContent = formatRupiah(order.amount);
        if (vpnQrisSubtitleEl) vpnQrisSubtitleEl.textContent = describeVpnOrder(order);

        showVpnQrisImage(order.qrisUrl);

        if (vpnQrisStateEl) {
            vpnQrisStateEl.textContent = VPN_ORDER_STATUS_LABELS[order.status] || order.status;
            vpnQrisStateEl.dataset.status = order.status;
        }

        const selesai = VPN_ORDER_FINAL_STATUSES.has(order.status);
        if (vpnQrisCancelBtn) vpnQrisCancelBtn.hidden = order.status !== 'WAITING_PAYMENT';
        if (vpnQrisCheckBtn) vpnQrisCheckBtn.hidden = selesai;
        // Pesanan yang sudah selesai atau batal tidak perlu QR lagi.
        if (selesai) {
            if (vpnQrisImageEl) vpnQrisImageEl.hidden = true;
            if (vpnQrisLoadingEl) vpnQrisLoadingEl.hidden = true;
            if (vpnQrisFallbackEl) vpnQrisFallbackEl.hidden = true;
        }

        if (order.status === 'FULFILLED') {
            setVpnQrisStatus(order.message || 'Pembayaran selesai.', 'success');
        } else if (order.status === 'FAILED') {
            setVpnQrisStatus(order.message || 'Pesanan gagal diproses.', 'failed');
        } else if (order.status === 'EXPIRED') {
            setVpnQrisStatus('Waktu pembayaran habis. Buat pesanan baru kalau masih mau lanjut.', 'warning');
        } else if (order.status === 'CANCELED') {
            setVpnQrisStatus('Pesanan dibatalkan.', 'warning');
        } else if (order.status === 'PAID') {
            setVpnQrisStatus('Pembayaran diterima, sedang diproses.');
        } else {
            setVpnQrisStatus('Scan pakai GoPay, ShopeePay, atau aplikasi apa pun yang menerima QRIS.');
        }

        updateVpnQrisCountdown();

        vpnQrisSheetEl.hidden = false;
        vpnQrisSheetEl.setAttribute('aria-hidden', 'false');
    }

    async function refreshVpnQrisOrder({ quiet = false } = {}) {
        if (!vpnQrisOrder?.id) return;
        try {
            const response = await fetch(`/api/vpn/orders/${encodeURIComponent(vpnQrisOrder.id)}`);
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal memeriksa pembayaran');

            const order = result.data;
            const berubah = order.status !== vpnQrisOrder.status;
            renderVpnQris(order);

            if (VPN_ORDER_FINAL_STATUSES.has(order.status)) {
                stopVpnQrisTimers();
                await loadVpnOverview();
                await loadVpnOrders();
            }

            if (berubah && order.status === 'FULFILLED') {
                showToast({
                    type: 'success',
                    title: order.type === 'TOPUP' ? 'Topup berhasil' : 'Pesanan selesai',
                    message: order.message || 'Pembayaran sudah diproses.',
                });
                // Akun hasil pembelian langsung dibuka supaya user tidak perlu
                // mencarinya sendiri di daftar.
                if (order.accountId && order.type !== 'TOPUP') {
                    closeVpnQris();
                    await openVpnDetail(order.accountId);
                }
            }
            if (berubah && order.status === 'FAILED') {
                showToast({ type: 'failed', title: 'Pesanan gagal', message: order.message || 'Pesanan tidak bisa diproses.' });
            }
        } catch (error) {
            if (!quiet) setVpnQrisStatus(error.message || 'Gagal memeriksa pembayaran.', 'failed');
        }
    }

    function openVpnQris(order) {
        stopVpnQrisTimers();
        renderVpnQris(order);
        if (VPN_ORDER_FINAL_STATUSES.has(order.status)) return;

        // Pemeriksaan berkala dipakai supaya user tidak perlu menekan apa pun
        // setelah membayar. Jedanya cukup longgar karena servernya sendiri juga
        // membatasi seberapa sering gateway ditanyai.
        vpnQrisPollTimer = setInterval(function() { void refreshVpnQrisOrder({ quiet: true }); }, 6000);
        vpnQrisCountdownTimer = setInterval(updateVpnQrisCountdown, 1000);
    }

    async function createVpnOrder(pathName, body, { button, statusSetter }) {
        if (button) button.disabled = true;
        if (statusSetter) statusSetter('Membuat QRIS...');
        try {
            const response = await fetch(pathName, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal membuat pesanan');
            if (statusSetter) statusSetter('');
            openVpnQris(result.data);
            await loadVpnOrders();
            return result.data;
        } catch (error) {
            if (statusSetter) statusSetter(error.message || 'Gagal membuat pesanan.', 'failed');
            return null;
        } finally {
            if (button) button.disabled = false;
        }
    }

    async function buyVpnAccountWithQris() {
        if (vpnBuyQrisGated) {
            const batas = Number(vpnTopupLimits?.directQrisMin || 0);
            showToast({
                type: 'warning',
                title: 'Nominalnya terlalu kecil',
                message: `Bayar langsung lewat QRIS butuh total minimal ${formatRupiah(batas)}. `
                    + `Pakai saldo VPN, atau tambah jumlah hari supaya totalnya lewat batas itu.`,
            });
            return;
        }
        const server = getSelectedVpnServer();
        if (!server) {
            setVpnBuyStatus('Pilih server dulu.', 'failed');
            return;
        }
        await createVpnOrder('/api/vpn/orders/purchase', {
            serverId: server.id,
            accountType: vpnTypeSelectEl?.value,
            username: vpnUsernameInputEl?.value,
            days: vpnDaysInputEl?.value,
            ipPackage: vpnIpPackageSelectEl?.value,
        }, { button: vpnBuyQrisBtn, statusSetter: setVpnBuyStatus });
    }

    async function renewVpnAccountWithQris() {
        const account = getSelectedVpnRenewAccount();
        if (!account) {
            setVpnRenewStatus('Pilih akun yang mau diperpanjang dulu.', 'failed');
            return;
        }
        await createVpnOrder('/api/vpn/orders/renew', {
            accountId: account.id,
            days: vpnRenewDaysInputEl?.value,
        }, { button: vpnRenewQrisBtn, statusSetter: setVpnRenewStatus });
    }

    // Dipanggil dari dua formulir: tab Saldo di menu VPN dan pilihan Topup VPN
    // di menu Topup. Hanya elemen yang dibaca dan ditulisnya yang berbeda.
    async function topupVpnBalance({
        input = vpnTopupAmountInputEl,
        button = vpnTopupBtn,
        statusSetter = setVpnTopupStatus,
    } = {}) {
        await loadVpnPaymentConfig();
        await createVpnOrder('/api/vpn/orders/topup', {
            amount: input?.value,
        }, { button, statusSetter });
    }

    async function cancelVpnQrisOrder() {
        if (!vpnQrisOrder?.id) return;
        vpnQrisCancelBtn.disabled = true;
        try {
            const response = await fetch(`/api/vpn/orders/${encodeURIComponent(vpnQrisOrder.id)}/cancel`, {
                method: 'POST',
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal membatalkan pesanan');
            stopVpnQrisTimers();
            renderVpnQris(result.data);
            await loadVpnOrders();
        } catch (error) {
            setVpnQrisStatus(error.message || 'Gagal membatalkan pesanan.', 'failed');
        } finally {
            vpnQrisCancelBtn.disabled = false;
        }
    }

    function renderVpnPending(orders) {
        if (!vpnPendingSectionEl || !vpnPendingListEl) return;
        const menunggu = orders.filter(function(order) { return order.status === 'WAITING_PAYMENT'; });

        vpnPendingSectionEl.hidden = !menunggu.length;
        if (!menunggu.length) {
            vpnPendingListEl.innerHTML = '';
            return;
        }

        vpnPendingListEl.innerHTML = menunggu.map(function(order) {
            const jenis = VPN_ORDER_TYPE_LABELS[order.type] || order.type;
            return `<div class="vpn-pending-card" data-vpn-pending="${escapeHtml(order.id)}">
                <div class="vpn-pending-info">
                    <strong>${escapeHtml(jenis)} ${escapeHtml(formatRupiah(order.amount))}</strong>
                    <span>${escapeHtml(order.orderCode)} · dibuat ${escapeHtml(formatDateTime(order.createdAt))}</span>
                </div>
                <div class="vpn-pending-actions">
                    <button type="button" class="btn-primary" data-vpn-pending-pay="${escapeHtml(order.id)}">
                        <i class="fas fa-qrcode"></i> Lanjut Bayar
                    </button>
                    <button type="button" class="btn-secondary" data-vpn-pending-cancel="${escapeHtml(order.id)}">
                        <i class="fas fa-times-circle"></i> Batalkan
                    </button>
                </div>
            </div>`;
        }).join('');
    }

    async function cancelVpnPendingOrder(orderId, button) {
        if (button) button.disabled = true;
        try {
            const response = await fetch(`/api/vpn/orders/${encodeURIComponent(orderId)}/cancel`, { method: 'POST' });
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal membatalkan pesanan');
            showToast({ type: 'success', title: 'Dibatalkan', message: 'Pesanan itu sudah dibatalkan.' });
            // Panel QRIS-nya ikut ditutup kalau yang dibatalkan memang sedang dibuka.
            if (vpnQrisOrder?.id === orderId) closeVpnQris();
            await loadVpnOrders();
            await loadVpnOverview();
        } catch (error) {
            showToast({ type: 'failed', title: 'Gagal membatalkan', message: error.message || 'Coba lagi sebentar.' });
        } finally {
            if (button) button.disabled = false;
        }
    }

    if (vpnPendingListEl) {
        vpnPendingListEl.addEventListener('click', function(event) {
            const bayar = event.target.closest('[data-vpn-pending-pay]');
            if (bayar) {
                void openVpnOrderById(bayar.dataset.vpnPendingPay);
                return;
            }
            const batal = event.target.closest('[data-vpn-pending-cancel]');
            if (batal) void cancelVpnPendingOrder(batal.dataset.vpnPendingCancel, batal);
        });
    }

    function renderVpnOrders(orders) {
        renderVpnPending(orders);
        if (!vpnOrderListEl) return;
        if (!orders.length) {
            vpnOrderListEl.innerHTML = '<p class="vpn-empty">Belum ada pesanan.</p>';
            return;
        }

        vpnOrderListEl.innerHTML = orders.map(function(order) {
            const label = VPN_ORDER_STATUS_LABELS[order.status] || order.status;
            const jenis = VPN_ORDER_TYPE_LABELS[order.type] || order.type;
            const bisaDibuka = order.status === 'WAITING_PAYMENT';
            return `<button type="button" class="vpn-order-card" data-vpn-order="${escapeHtml(order.id)}" data-status="${escapeHtml(order.status)}"${bisaDibuka ? '' : ' data-final="1"'}>
                <div class="vpn-order-main">
                    <strong>${escapeHtml(jenis)}</strong>
                    <span class="vpn-order-amount">${escapeHtml(formatRupiah(order.amount))}</span>
                </div>
                <div class="vpn-order-meta">
                    <span>${escapeHtml(order.orderCode)}</span>
                    <span>${escapeHtml(formatDateTime(order.createdAt))}</span>
                </div>
                ${order.message ? `<div class="vpn-order-message">${escapeHtml(order.message)}</div>` : ''}
                <span class="vpn-order-status">${escapeHtml(label)}</span>
            </button>`;
        }).join('');
    }

    async function loadVpnOrders() {
        if (!vpnOrderListEl) return;
        try {
            const response = await fetch('/api/vpn/orders');
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal memuat riwayat pesanan');
            renderVpnOrders(Array.isArray(result.data) ? result.data : []);
        } catch (error) {
            vpnOrderListEl.innerHTML = `<p class="vpn-empty">${escapeHtml(error.message || 'Gagal memuat riwayat pesanan.')}</p>`;
        }
    }

    async function openVpnOrderById(orderId) {
        try {
            const response = await fetch(`/api/vpn/orders/${encodeURIComponent(orderId)}`);
            const result = await response.json();
            if (!response.ok) throw new Error(result?.error || 'Gagal membuka pesanan');
            openVpnQris(result.data);
        } catch (error) {
            showToast({ type: 'failed', title: 'Gagal', message: error.message || 'Pesanan tidak bisa dibuka.' });
        }
    }

    if (vpnBuyQrisBtn) vpnBuyQrisBtn.addEventListener('click', function() { void buyVpnAccountWithQris(); });
    if (vpnRenewQrisBtn) vpnRenewQrisBtn.addEventListener('click', function() { void renewVpnAccountWithQris(); });
    if (vpnTopupBtn) vpnTopupBtn.addEventListener('click', function() { void topupVpnBalance(); });
    if (topupVpnBtn) {
        topupVpnBtn.addEventListener('click', function() {
            void topupVpnBalance({
                input: topupVpnAmountInputEl,
                button: topupVpnBtn,
                statusSetter: setTopupVpnStatus,
            });
        });
    }
    if (vpnOrderRefreshBtn) vpnOrderRefreshBtn.addEventListener('click', function() { void loadVpnOrders(); });
    if (vpnQrisCheckBtn) vpnQrisCheckBtn.addEventListener('click', function() { void refreshVpnQrisOrder(); });
    if (vpnQrisCancelBtn) vpnQrisCancelBtn.addEventListener('click', function() { void cancelVpnQrisOrder(); });
    if (vpnQrisCloseBtn) vpnQrisCloseBtn.addEventListener('click', closeVpnQris);
    if (vpnQrisBackdropEl) vpnQrisBackdropEl.addEventListener('click', closeVpnQris);

    if (vpnQrisImageEl) {
        vpnQrisImageEl.addEventListener('load', function() {
            vpnQrisImageEl.hidden = false;
            if (vpnQrisLoadingEl) vpnQrisLoadingEl.hidden = true;
            if (vpnQrisFallbackEl) vpnQrisFallbackEl.hidden = true;
        });
        vpnQrisImageEl.addEventListener('error', function() {
            vpnQrisImageEl.hidden = true;
            if (vpnQrisLoadingEl) vpnQrisLoadingEl.hidden = true;
            if (vpnQrisFallbackEl) vpnQrisFallbackEl.hidden = false;
        });
    }

    if (vpnQrisRetryBtn) {
        vpnQrisRetryBtn.addEventListener('click', function() {
            const url = vpnQrisOrder?.qrisUrl;
            if (!url || !vpnQrisImageEl) return;
            // Alamat yang sama tidak akan dimuat ulang oleh showVpnQrisImage,
            // jadi catatannya dikosongkan dulu.
            vpnQrisImageEl.dataset.src = '';
            showVpnQrisImage(url);
        });
    }

    // Atribut tombol cepatnya dibedakan per formulir supaya pemilihnya tidak
    // saling menangkap tombol di formulir lain.
    [
        [vpnTopupQuickEl, 'data-vpn-topup', vpnTopupAmountInputEl, setVpnTopupStatus],
        [topupVpnQuickEl, 'data-topup-vpn-amount', topupVpnAmountInputEl, setTopupVpnStatus],
        [topupPpobQuickEl, 'data-topup-ppob-amount', topupAmountInputEl, setTopupStatus],
    ].forEach(function([quickEl, attr, inputEl, statusSetter]) {
        if (!quickEl) return;
        quickEl.addEventListener('click', function(event) {
            const chip = event.target.closest(`[${attr}]`);
            if (!chip || !inputEl) return;
            inputEl.value = chip.getAttribute(attr);
            statusSetter('');
            inputEl.dispatchEvent(new Event('input', { bubbles: true }));
        });
        // Chip yang nominalnya sama dengan isian ditandai terpilih, termasuk
        // saat user mengetik nominal itu sendiri.
        if (inputEl) {
            inputEl.addEventListener('input', function() {
                quickEl.querySelectorAll(`[${attr}]`).forEach(function(chip) {
                    const selected = chip.getAttribute(attr) === String(inputEl.value || '');
                    chip.classList.toggle('active', selected);
                    chip.setAttribute('aria-pressed', selected ? 'true' : 'false');
                });
            });
        }
    });

    // Tombol topup menyebut nominalnya begitu nominal diisi.
    function setSubmitTopupLabel() {
        if (!submitTopupBtn || submitTopupBtn.classList.contains('is-loading')) return;
        const amount = Math.trunc(Number(topupAmountInputEl?.value || 0));
        submitTopupBtn.textContent = amount > 0 ? `Bayar ${formatRupiah(amount)} lewat QRIS` : 'Buat QRIS topup';
    }

    if (topupAmountInputEl) topupAmountInputEl.addEventListener('input', setSubmitTopupLabel);

    if (topupShopBtn) {
        topupShopBtn.addEventListener('click', function() {
            showView('buyView');
        });
    }

    if (vpnOrderListEl) {
        vpnOrderListEl.addEventListener('click', function(event) {
            const kartu = event.target.closest('[data-vpn-order]');
            if (kartu) void openVpnOrderById(kartu.dataset.vpnOrder);
        });
    }

    if (vpnServerSelectEl) vpnServerSelectEl.addEventListener('change', onVpnServerChanged);
    if (vpnTypeSelectEl) {
        vpnTypeSelectEl.addEventListener('change', function() {
            if (vpnPasswordGroupEl) vpnPasswordGroupEl.hidden = vpnTypeSelectEl.value !== 'ssh';
            updateVpnIpLimitHint();
        });
    }
    if (vpnIpPackageSelectEl) {
        vpnIpPackageSelectEl.addEventListener('change', function() {
            updateVpnIpLimitHint();
            void refreshVpnQuote();
        });
    }
    if (vpnDaysInputEl) vpnDaysInputEl.addEventListener('input', function() { void refreshVpnQuote(); });
    if (vpnBuyBtn) vpnBuyBtn.addEventListener('click', function() { void buyVpnAccount(); });
    if (vpnTrialBtn) vpnTrialBtn.addEventListener('click', function() { void createVpnTrial(); });
    if (vpnAccountsRefreshBtn) vpnAccountsRefreshBtn.addEventListener('click', function() { void loadVpnOverview(); });
    if (vpnRenewBtn) vpnRenewBtn.addEventListener('click', function() { void renewVpnAccount(); });
    if (vpnDetailCloseBtn) vpnDetailCloseBtn.addEventListener('click', closeVpnDetail);
    if (vpnDetailBackdropEl) vpnDetailBackdropEl.addEventListener('click', closeVpnDetail);

    if (vpnCopyAllBtnEl) {
        vpnCopyAllBtnEl.addEventListener('click', async function() {
            if (!vpnOpenAccountData) return;
            try {
                await navigator.clipboard.writeText(buildVpnAccountCopyText(vpnOpenAccountData));
                showToast({ type: 'success', title: 'Tersalin', message: 'Semua info akun sudah masuk papan klip.' });
            } catch (_error) {
                showToast({ type: 'failed', title: 'Gagal menyalin', message: 'Salin manual dari daftarnya di atas.' });
            }
        });
    }

    if (vpnAccountListEl) {
        vpnAccountListEl.addEventListener('click', function(event) {
            const kartu = event.target.closest('[data-vpn-account]');
            if (kartu) void openVpnDetail(kartu.dataset.vpnAccount);
        });
    }

    if (vpnDetailBodyEl) {
        vpnDetailBodyEl.addEventListener('click', async function(event) {
            const tombol = event.target.closest('[data-vpn-copy]');
            if (!tombol) return;
            try {
                await navigator.clipboard.writeText(tombol.dataset.vpnCopy || '');
                showToast({ type: 'success', title: 'Tersalin', message: 'Sudah masuk papan klip.' });
            } catch (_error) {
                showToast({ type: 'failed', title: 'Gagal menyalin', message: 'Salin manual dari teksnya.' });
            }
        });
    }

    // Menu Topup punya dua pilihan: saldo PPOB dan saldo VPN. Formulir yang
    // tidak dipilih disembunyikan lewat CSS berdasarkan data-topup-type.
    const topupViewEl = document.getElementById('topupView');
    const topupTypeSwitchEl = document.getElementById('topupTypeSwitch');
    const TOPUP_TYPES = ['ppob', 'vpn'];

    function setTopupType(type, { focus = false } = {}) {
        if (!topupViewEl) return;
        const dipilih = TOPUP_TYPES.includes(type) ? type : 'ppob';
        topupViewEl.dataset.topupType = dipilih;
        topupTypeSwitchEl?.querySelectorAll('[data-topup-type]').forEach(function(tab) {
            const aktif = tab.dataset.topupType === dipilih;
            tab.classList.toggle('active', aktif);
            tab.setAttribute('aria-selected', aktif ? 'true' : 'false');
            tab.tabIndex = aktif ? 0 : -1;
        });
        if (focus) topupTypeSwitchEl?.querySelector(`[data-topup-type="${dipilih}"]`)?.focus();
    }

    if (topupTypeSwitchEl) {
        topupTypeSwitchEl.addEventListener('click', function(event) {
            const tab = event.target.closest('[data-topup-type]');
            if (tab) setTopupType(tab.dataset.topupType);
        });
        // Panah kiri dan kanan berpindah pilihan, seperti tablist pada umumnya.
        topupTypeSwitchEl.addEventListener('keydown', function(event) {
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
            event.preventDefault();
            const sekarang = TOPUP_TYPES.indexOf(topupViewEl?.dataset.topupType || 'ppob');
            const arah = event.key === 'ArrowRight' ? 1 : -1;
            setTopupType(TOPUP_TYPES[(sekarang + arah + TOPUP_TYPES.length) % TOPUP_TYPES.length], { focus: true });
        });
        setTopupType('ppob');
    }

    function showView(viewId, options = {}) {
        const targetView = document.getElementById(viewId) || document.getElementById('dashboardView');

        dashboardViews.forEach(function(view) {
            view.classList.toggle('active', view === targetView);
        });

        if (pageTitleEl) {
            pageTitleEl.textContent = targetView.id === 'dashboardView'
                ? getDashboardTitle()
                : (targetView.dataset.pageTitle || 'Beranda');
        }

        if (targetView.id === 'accountView') {
            loadCustomerServiceContact().catch(function() {});
        }
        if (targetView.id === 'vpnView') {
            void loadVpnOverview();
            void loadVpnOrders();
            void loadVpnPaymentConfig();
            void loadVpnConfigOptions();
        }
        if (targetView.id === 'topupView') {
            if (options.topupType) setTopupType(options.topupType);
            // Saldo VPN di kartu pilihan dan batas nominalnya ikut dimuat,
            // supaya user bisa membandingkan kedua saldo sebelum memilih.
            void loadVpnOverview();
            void loadVpnPaymentConfig();
        }

        // Halaman yang tidak punya menu sendiri menandai menu asalnya: Topup
        // dibuka dari kartu saldo di Beranda, Hubungi CS dari Akun.
        const navigationViewId = NAV_PARENT_VIEW[targetView.id] || targetView.id;
        document.querySelectorAll('.sidebar-nav li').forEach(function(item) {
            const link = item.querySelector('[data-view-target]');
            const active = link?.dataset.viewTarget === navigationViewId;
            item.classList.toggle('active', active);
            if (link) {
                if (active) link.setAttribute('aria-current', 'page');
                else link.removeAttribute('aria-current');
            }
        });

        // Setiap pindah halaman dicatat di riwayat browser. Tanpa ini tombol
        // back di HP langsung keluar dari aplikasi walaupun user sedang di
        // tengah pembelian, karena tidak ada langkah sebelumnya yang tercatat.
        if (!options.fromHistory) {
            const hash = getViewHash(targetView.id, options);
            if (hash && window.location.hash !== hash) {
                window.history.pushState(null, '', hash);
            }
        }

        if (!options.skipScroll) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (options.scrollTo) {
            setTimeout(function() {
                document.getElementById(options.scrollTo)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    }

    const NAV_PARENT_VIEW = {
        checkoutView: 'buyView',
        topupView: 'dashboardView',
    };

    function getViewHash(viewId, options = {}) {
        if (viewId === 'topupView') {
            return (options.topupType || topupViewEl?.dataset.topupType) === 'vpn' ? '#topup-vpn' : '#topup';
        }
        return {
            dashboardView: '#dashboard',
            buyView: '#beli',
            checkoutView: '#checkout',
            historyView: '#riwayat',
            accountView: '#akun',
            vpnView: '#vpn',
        }[viewId] || '';
    }

    function scrollToPaymentPanel(element, options = {}) {
        const target = element || checkoutPaymentResultEl || topupPaymentResultEl;
        if (!target) return;
        const delays = options.long
            ? [80, 220, 500, 900, 1500, 2600, 4200]
            : [120, 500, 1000];
        const block = options.block || 'start';

        delays.forEach(function(delay) {
            setTimeout(function() {
                if (target.hidden) return;
                target.scrollIntoView({ behavior: 'smooth', block });
            }, delay);
        });
    }

    function getCheckoutPaymentScrollTarget() {
        if (checkoutSnapContainerEl && !checkoutSnapContainerEl.hidden && !shouldEmbedSnapPayment()) {
            return checkoutSnapContainerEl;
        }
        const qrisFrame = checkoutQrisImageEl?.closest('.qris-frame') || null;
        if (qrisFrame && !qrisFrame.hidden) return qrisFrame;
        return checkoutPaymentResultEl || checkoutPanelEl;
    }

    function requestCheckoutPaymentScroll(durationMs = 6500) {
        checkoutPaymentScrollUntil = Date.now() + durationMs;
        scrollToPaymentPanel(getCheckoutPaymentScrollTarget(), { long: true, block: 'start' });
    }

    function keepCheckoutPaymentInView() {
        if (Date.now() > checkoutPaymentScrollUntil) return;
        scrollToPaymentPanel(getCheckoutPaymentScrollTarget(), { block: 'start' });
    }

    // Favorit yang sedang tidak tersedia ikut dicari di sini, supaya tombolnya
    // dikenali sebagai produk yang sedang gangguan dan tidak lolos ke checkout.
    function findProductBySku(skuCode) {
        return prepaidProducts.find(function(product) {
            return product.buyer_sku_code === skuCode;
        }) || unavailableFavoriteProducts.find(function(product) {
            return product.buyer_sku_code === skuCode;
        }) || null;
    }

    function handleLandingSkuIntent() {
        if (landingSkuIntentHandled) return;
        const params = new URLSearchParams(window.location.search);
        const sku = String(params.get('sku') || '').trim();
        if (!sku) return;

        landingSkuIntentHandled = true;
        const product = findProductBySku(sku);
        showView('buyView');

        if (product) {
            openCheckout(product);
            showToast({
                type: 'info',
                title: 'Produk dipilih',
                message: 'Lengkapi nomor tujuan untuk melanjutkan pembelian.',
            });
        } else {
            if (productSearchEl) productSearchEl.value = sku;
            selectedCategory = '';
            selectedBrand = '';
            selectedType = '';
            resetProductLimit();
            renderProductGrid();
            setProductStatus('Produk dari landing page belum ditemukan. Coba pilih produk lain.', 'failed');
        }

        const cleanUrl = `${window.location.pathname}${window.location.hash || ''}`;
        window.history.replaceState({}, document.title, cleanUrl);
    }

    function isGamesCategoryProduct(product) {
        const category = String(product?.category || '').trim().toLowerCase();
        return category === 'games' || category === 'game';
    }

    function isMobileLegendsProduct(product) {
        if (!isGamesCategoryProduct(product)) return false;
        const text = [
            product?.product_name,
            product?.brand,
            product?.category,
            product?.type,
            product?.buyer_sku_code,
        ].filter(Boolean).join(' ').toLowerCase();
        return text.includes('mobilelegend')
            || text.includes('mobile legends')
            || text.includes('mobile legend')
            || text.includes('mlbb');
    }

    function isFreeFireProduct(product) {
        if (!isGamesCategoryProduct(product)) return false;
        const text = [
            product?.product_name,
            product?.brand,
            product?.category,
            product?.type,
            product?.buyer_sku_code,
        ].filter(Boolean).join(' ').toLowerCase();
        const brand = String(product?.brand || '').trim().toLowerCase();
        return text.includes('free fire')
            || text.includes('freefire')
            || brand === 'free fire'
            || brand === 'freefire';
    }

    function getProductIdentityText(product) {
        return [
            product?.product_name,
            product?.brand,
            product?.category,
            product?.type,
            product?.buyer_sku_code,
        ].filter(Boolean).join(' ').toLowerCase();
    }

    function getCheckoutIdentityProfile(product) {
        const text = getProductIdentityText(product);
        const brand = String(product?.brand || '').trim();
        const normalizedBrand = brand.toLowerCase();
        const isGameCategory = isGamesCategoryProduct(product);

        if (isMobileLegendsProduct(product)) {
            return {
                mode: 'mobile-legends',
                label: 'Detail akun Mobile Legends',
                placeholder: 'Masukkan User ID',
                help: 'Format yang dikirim: UserID(ZoneID), contoh: 12345678(1234).',
                numericOnly: true,
                statusText: 'Masukkan User ID dan Zone ID lalu proses transaksi.',
                emptyMessage: 'User ID dan Zone ID wajib diisi untuk produk Mobile Legends.',
                invalidMessage: 'User ID dan Zone ID hanya boleh angka.',
            };
        }

        if (isFreeFireProduct(product)) {
            return {
                mode: 'free-fire',
                label: 'ID Free Fire',
                placeholder: 'Masukkan ID Free Fire anda',
                help: 'ID Free Fire hanya boleh angka.',
                numericOnly: true,
                statusText: 'Masukkan ID Free Fire anda lalu proses transaksi.',
                emptyMessage: 'ID Free Fire wajib diisi.',
                invalidMessage: 'ID Free Fire hanya boleh angka.',
            };
        }

        if (text.includes('pln')) {
            return {
                mode: 'single',
                label: 'ID Pelanggan / No Meter PLN',
                placeholder: 'Masukkan IDPEL / No Meter PLN',
                help: 'IDPEL atau nomor meter PLN hanya boleh angka.',
                numericOnly: true,
                statusText: 'Masukkan IDPEL atau No Meter PLN lalu proses transaksi.',
                emptyMessage: 'ID Pelanggan atau No Meter PLN wajib diisi.',
                invalidMessage: 'ID Pelanggan atau No Meter PLN hanya boleh angka.',
            };
        }

        if (!isGameCategory && (text.includes('pulsa') || text.includes('data') || text.includes('kuota') || text.includes('voucher') || text.includes('masa aktif') || text.includes('sms') || text.includes('telpon'))) {
            return {
                mode: 'single',
                label: 'Nomor HP tujuan',
                placeholder: 'Masukkan nomor HP tujuan',
                help: 'Nomor HP hanya boleh angka.',
                numericOnly: true,
                statusText: 'Masukkan nomor HP tujuan lalu proses transaksi.',
                emptyMessage: 'Nomor HP tujuan wajib diisi.',
                invalidMessage: 'Nomor HP tujuan hanya boleh angka.',
            };
        }

        if (isGameCategory) {
            return {
                mode: 'single',
                label: 'ID Game',
                placeholder: 'Masukkan ID Game',
                help: 'ID Game hanya boleh angka.',
                numericOnly: true,
                statusText: 'Masukkan ID Game lalu proses transaksi.',
                emptyMessage: 'ID Game wajib diisi.',
                invalidMessage: 'ID Game hanya boleh angka.',
            };
        }

        const walletBrands = [
            ['dana', 'Nomor DANA', 'Masukkan nomor DANA'],
            ['ovo', 'Nomor OVO', 'Masukkan nomor OVO'],
            ['gopay', 'Nomor GoPay', 'Masukkan nomor GoPay'],
            ['go pay', 'Nomor GoPay', 'Masukkan nomor GoPay'],
            ['shopeepay', 'Nomor ShopeePay', 'Masukkan nomor ShopeePay'],
            ['shopee pay', 'Nomor ShopeePay', 'Masukkan nomor ShopeePay'],
            ['linkaja', 'Nomor LinkAja', 'Masukkan nomor LinkAja'],
            ['link aja', 'Nomor LinkAja', 'Masukkan nomor LinkAja'],
        ];
        const walletMatch = walletBrands.find(function(item) {
            return text.includes(item[0]) || normalizedBrand.includes(item[0]);
        });
        if (walletMatch) {
            return {
                mode: 'single',
                label: walletMatch[1],
                placeholder: walletMatch[2],
                help: `${walletMatch[1]} hanya boleh angka.`,
                numericOnly: true,
                statusText: `Masukkan ${walletMatch[1].toLowerCase()} lalu proses transaksi.`,
                emptyMessage: `${walletMatch[1]} wajib diisi.`,
                invalidMessage: `${walletMatch[1]} hanya boleh angka.`,
            };
        }

        if (text.includes('pulsa') || text.includes('data') || text.includes('kuota') || text.includes('voucher') || text.includes('masa aktif') || text.includes('sms') || text.includes('telpon')) {
            return {
                mode: 'single',
                label: 'Nomor HP tujuan',
                placeholder: 'Masukkan nomor HP tujuan',
                help: 'Nomor HP hanya boleh angka.',
                numericOnly: true,
                statusText: 'Masukkan nomor HP tujuan lalu proses transaksi.',
                emptyMessage: 'Nomor HP tujuan wajib diisi.',
                invalidMessage: 'Nomor HP tujuan hanya boleh angka.',
            };
        }

        return {
            mode: 'single',
            label: 'Nomor tujuan / ID pelanggan',
            placeholder: 'Masukkan nomor tujuan / ID pelanggan',
            help: '',
            numericOnly: false,
            statusText: 'Masukkan nomor tujuan atau ID pelanggan lalu proses transaksi.',
            emptyMessage: 'Nomor tujuan atau ID pelanggan wajib diisi.',
            invalidMessage: 'Nomor tujuan atau ID pelanggan tidak valid.',
        };
    }

    function sanitizeNumericInput(inputEl) {
        if (!inputEl) return;
        const cleaned = String(inputEl.value || '').replace(/\D/g, '');
        if (inputEl.value !== cleaned) inputEl.value = cleaned;
    }

    function applySingleIdentityInput(inputEl, labelEl, product) {
        const profile = getCheckoutIdentityProfile(product);
        if (!inputEl) return profile;
        if (labelEl) labelEl.textContent = profile.label;
        inputEl.placeholder = profile.placeholder;
        inputEl.inputMode = profile.numericOnly ? 'numeric' : 'text';
        if (profile.numericOnly) {
            inputEl.setAttribute('pattern', '[0-9]*');
            sanitizeNumericInput(inputEl);
        } else {
            inputEl.removeAttribute('pattern');
        }
        return profile;
    }

    function applyCheckoutIdentityFieldMode(product) {
        const profile = getCheckoutIdentityProfile(product);
        const useMlAccountFields = profile.mode === 'mobile-legends';
        const usernameCheckEnabled = operationsConfig.gameUsernameCheckEnabled !== false;
        const showSingleGameReminder = Boolean(product) && isGamesCategoryProduct(product) && !useMlAccountFields;
        const useSingleGameUsernameCheck = usernameCheckEnabled && profile.mode === 'free-fire';

        if (customerNoGroupEl) customerNoGroupEl.hidden = useMlAccountFields;
        if (customerNoReminderEl) customerNoReminderEl.hidden = !showSingleGameReminder;
        if (singleGameUsernameCheckEl) singleGameUsernameCheckEl.hidden = !useSingleGameUsernameCheck;
        if (mlAccountFieldsEl) mlAccountFieldsEl.hidden = !useMlAccountFields;
        if (mlUsernameCheckEl) mlUsernameCheckEl.hidden = !(usernameCheckEnabled && useMlAccountFields);
        if (!useMlAccountFields || !usernameCheckEnabled) {
            setMlUsernameCheckStatus('');
        }
        if (!useSingleGameUsernameCheck) {
            setGameUsernameCheckStatus('');
        }

        if (customerNoInputEl) {
            customerNoInputEl.required = !useMlAccountFields;
            if (useMlAccountFields) {
                customerNoInputEl.value = '';
            } else {
                applySingleIdentityInput(customerNoInputEl, customerNoLabelEl, product);
            }
        }
        if (mlUserIdInputEl) {
            mlUserIdInputEl.required = useMlAccountFields;
            mlUserIdInputEl.inputMode = 'numeric';
            mlUserIdInputEl.setAttribute('pattern', '[0-9]*');
            if (!useMlAccountFields) {
                mlUserIdInputEl.value = '';
            } else {
                sanitizeNumericInput(mlUserIdInputEl);
            }
        }
        if (mlZoneIdInputEl) {
            mlZoneIdInputEl.required = useMlAccountFields;
            mlZoneIdInputEl.inputMode = 'numeric';
            mlZoneIdInputEl.setAttribute('pattern', '[0-9]*');
            if (!useMlAccountFields) {
                mlZoneIdInputEl.value = '';
            } else {
                sanitizeNumericInput(mlZoneIdInputEl);
            }
        }
    }

    function resolveCheckoutCustomerNo() {
        const profile = getCheckoutIdentityProfile(selectedCheckoutProduct);
        if (profile.mode === 'mobile-legends') {
            const userId = String(mlUserIdInputEl?.value || '').trim();
            const zoneId = String(mlZoneIdInputEl?.value || '').trim();

            if (!userId || !zoneId) {
                setCheckoutStatus(profile.emptyMessage, 'failed');
                if (!userId) {
                    mlUserIdInputEl?.focus();
                } else {
                    mlZoneIdInputEl?.focus();
                }
                return null;
            }
            if (!/^\d+$/.test(userId) || !/^\d+$/.test(zoneId)) {
                setCheckoutStatus(profile.invalidMessage, 'failed');
                return null;
            }
            return `${userId}(${zoneId})`;
        }

        const customerNo = customerNoInputEl?.value.trim();
        if (!customerNo) {
            setCheckoutStatus(profile.emptyMessage, 'failed');
            customerNoInputEl?.focus();
            return null;
        }
        if (profile.numericOnly && !/^\d+$/.test(customerNo)) {
            setCheckoutStatus(profile.invalidMessage, 'failed');
            customerNoInputEl?.focus();
            return null;
        }
        return customerNo;
    }

    function setSavedDestinationPanelOpen(open) {
        savedDestinationPanelOpen = Boolean(open);
        if (savedDestinationBoxEl) savedDestinationBoxEl.hidden = !savedDestinationPanelOpen;
        if (savedDestinationToggleBtn) {
            savedDestinationToggleBtn.setAttribute('aria-expanded', savedDestinationPanelOpen ? 'true' : 'false');
            savedDestinationToggleBtn.classList.toggle('active', savedDestinationPanelOpen);
            const label = savedDestinationToggleBtn.querySelector('span');
            if (label) label.textContent = savedDestinationPanelOpen ? 'Tutup ID tersimpan' : 'Lihat ID tersimpan';
            const chevron = savedDestinationToggleBtn.querySelector('.saved-destination-chevron');
            if (chevron) chevron.className = savedDestinationPanelOpen
                ? 'fas fa-chevron-up saved-destination-chevron'
                : 'fas fa-chevron-down saved-destination-chevron';
        }
    }

    function renderSavedDestinations() {
        if (!savedDestinationListEl || !savedDestinationEmptyEl) return;
        savedDestinationListEl.innerHTML = '';
        if (savedDestinationCountEl) {
            savedDestinationCountEl.textContent = String(savedDestinations.length);
        }
        savedDestinationEmptyEl.hidden = savedDestinations.length > 0;

        savedDestinations.forEach(function(destination) {
            const item = document.createElement('div');
            item.className = 'saved-destination-item';

            const selectButton = document.createElement('button');
            selectButton.type = 'button';
            selectButton.className = 'saved-destination-option';
            selectButton.dataset.savedDestinationValue = String(destination.customerNo || '');
            selectButton.dataset.savedDestinationId = String(destination.id || '');

            const icon = document.createElement('i');
            icon.className = destination.source === 'AUTO' ? 'fas fa-clock-rotate-left' : 'fas fa-bookmark';
            const text = document.createElement('span');
            const label = document.createElement('strong');
            label.textContent = destination.label || 'Tujuan tersimpan';
            const value = document.createElement('small');
            value.textContent = destination.customerNo || '-';
            text.appendChild(label);
            text.appendChild(value);
            selectButton.appendChild(icon);
            selectButton.appendChild(text);

            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.className = 'saved-destination-delete';
            deleteButton.dataset.deleteSavedDestinationId = String(destination.id || '');
            deleteButton.setAttribute('aria-label', `Hapus ${destination.label || 'tujuan tersimpan'}`);
            deleteButton.title = 'Hapus tujuan';
            deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

            item.appendChild(selectButton);
            item.appendChild(deleteButton);
            savedDestinationListEl.appendChild(item);
        });
    }

    function applySavedDestination(customerNo) {
        const value = String(customerNo || '').trim();
        if (!value || !selectedCheckoutProduct) return;
        if (isMobileLegendsProduct(selectedCheckoutProduct)) {
            const match = value.match(/^(\d+)\((\d+)\)$/);
            if (!match) {
                setSavedDestinationStatus('Format ID Mobile Legends tersimpan tidak valid.', 'failed');
                return;
            }
            if (mlUserIdInputEl) mlUserIdInputEl.value = match[1];
            if (mlZoneIdInputEl) mlZoneIdInputEl.value = match[2];
            setMlUsernameCheckStatus('');
        } else {
            if (customerNoInputEl) customerNoInputEl.value = value;
            setGameUsernameCheckStatus('');
        }
        setSavedDestinationStatus('Tujuan dipilih. Periksa kembali sebelum melanjutkan.', 'success');
    }

    async function loadSavedDestinationsForProduct(product) {
        if (!savedDestinationListEl) return;
        const sku = String(product?.buyer_sku_code || '').trim();
        const requestId = ++savedDestinationRequestId;
        savedDestinations = [];
        renderSavedDestinations();
        setSavedDestinationStatus(sku ? 'Memuat tujuan tersimpan...' : '');
        if (!sku) return;

        try {
            const response = await fetch(`/api/user/saved-destinations?buyerSkuCode=${encodeURIComponent(sku)}`, {
                cache: 'no-store',
                credentials: 'same-origin',
            });
            const result = await response.json().catch(function() { return {}; });
            if (!response.ok) throw new Error(result?.error || 'Gagal memuat tujuan tersimpan');
            if (requestId !== savedDestinationRequestId) return;
            savedDestinations = Array.isArray(result?.data) ? result.data : [];
            renderSavedDestinations();
            setSavedDestinationStatus('');
        } catch (error) {
            if (requestId !== savedDestinationRequestId) return;
            savedDestinations = [];
            renderSavedDestinations();
            setSavedDestinationStatus(error.message, 'failed');
        }
    }

    async function saveCurrentDestination() {
        if (!selectedCheckoutProduct?.buyer_sku_code) return;
        const customerNo = resolveCheckoutCustomerNo();
        if (!customerNo) return;

        [saveCurrentDestinationBtn, saveCurrentMlDestinationBtn].forEach(function(button) {
            setButtonLoading(button, true, '<i class="fas fa-spinner fa-spin"></i><span>Menyimpan</span>');
        });
        setSavedDestinationStatus('Menyimpan nomor atau ID...');
        try {
            await postJson('/api/user/saved-destinations', {
                buyerSkuCode: selectedCheckoutProduct.buyer_sku_code,
                customerNo,
                label: String(savedDestinationLabelInputEl?.value || '').trim(),
            });
            if (savedDestinationLabelInputEl) savedDestinationLabelInputEl.value = '';
            await loadSavedDestinationsForProduct(selectedCheckoutProduct);
            setSavedDestinationStatus('Nomor atau ID berhasil disimpan.', 'success');
            showToast({
                type: 'success',
                title: 'ID tersimpan',
                message: 'Nomor atau ID ini sudah masuk ke daftar tersimpan.',
            });
        } catch (error) {
            setSavedDestinationStatus(error.message, 'failed');
            showToast({
                type: 'failed',
                title: 'ID belum tersimpan',
                message: error.message,
            });
        } finally {
            [saveCurrentDestinationBtn, saveCurrentMlDestinationBtn].forEach(function(button) {
                setButtonLoading(button, false);
            });
        }
    }

    async function deleteSavedDestination(id) {
        const destinationId = String(id || '').trim();
        const destination = savedDestinations.find(function(item) {
            return String(item.id || '') === destinationId;
        });
        if (!destinationId || !destination) return;
        const confirmed = await showConfirmDialog({
            title: 'Hapus tujuan tersimpan',
            message: `Hapus ${destination.label || destination.customerNo} dari daftar?`,
            confirmText: 'Hapus',
            cancelText: 'Batal',
        });
        if (!confirmed) return;

        setSavedDestinationStatus('Menghapus tujuan tersimpan...');
        try {
            const response = await fetch(`/api/user/saved-destinations/${encodeURIComponent(destinationId)}`, {
                method: 'DELETE',
                credentials: 'same-origin',
            });
            const result = await response.json().catch(function() { return {}; });
            if (!response.ok) throw new Error(result?.error || 'Gagal menghapus tujuan');
            savedDestinations = savedDestinations.filter(function(item) {
                return String(item.id || '') !== destinationId;
            });
            renderSavedDestinations();
            setSavedDestinationStatus('Tujuan tersimpan berhasil dihapus.', 'success');
        } catch (error) {
            setSavedDestinationStatus(error.message, 'failed');
        }
    }

    function refreshSavedDestinationAfterSuccess(order) {
        const orderKey = String(order?.orderCode || order?.refId || '').trim();
        if (!orderKey || refreshedSavedDestinationOrders.has(orderKey)) return;
        refreshedSavedDestinationOrders.add(orderKey);
        window.setTimeout(function() {
            if (selectedCheckoutProduct?.buyer_sku_code === order?.buyerSkuCode) {
                loadSavedDestinationsForProduct(selectedCheckoutProduct).then(function() {
                    setSavedDestinationStatus('Tujuan transaksi berhasil disimpan otomatis.', 'success');
                }).catch(function() {});
            }
        }, 250);
    }

    function setMlUsernameCheckStatus(message, type) {
        setStatusElement(mlUsernameCheckStatusEl, message, type, 'checkout-status');
    }

    function setGameUsernameCheckStatus(message, type) {
        setStatusElement(gameUsernameCheckStatusEl, message, type, 'checkout-status');
    }

    function getMobileLegendsInputForCheck() {
        const userId = String(mlUserIdInputEl?.value || '').trim();
        const zoneId = String(mlZoneIdInputEl?.value || '').trim();
        if (!userId || !zoneId) {
            setMlUsernameCheckStatus('Isi User ID dan Zone ID dulu.', 'failed');
            if (!userId) {
                mlUserIdInputEl?.focus();
            } else {
                mlZoneIdInputEl?.focus();
            }
            return null;
        }
        if (!/^\d+$/.test(userId) || !/^\d+$/.test(zoneId)) {
            setMlUsernameCheckStatus('User ID dan Zone ID hanya boleh angka.', 'failed');
            return null;
        }
        return { userId, zoneId };
    }

    function getSingleGameInputForCheck() {
        const userId = String(customerNoInputEl?.value || '').trim();
        const profile = getCheckoutIdentityProfile(selectedCheckoutProduct);
        if (!userId) {
            setGameUsernameCheckStatus(`${profile.label || 'ID game'} wajib diisi dulu.`, 'failed');
            customerNoInputEl?.focus();
            return null;
        }
        if (!/^\d+$/.test(userId)) {
            setGameUsernameCheckStatus(`${profile.label || 'ID game'} hanya boleh angka.`, 'failed');
            return null;
        }
        return { userId };
    }

    async function checkGameUsername() {
        if (operationsConfig.gameUsernameCheckEnabled === false) {
            applyCheckoutIdentityFieldMode(selectedCheckoutProduct);
            return;
        }
        const isMl = isMobileLegendsProduct(selectedCheckoutProduct);
        const isFf = isFreeFireProduct(selectedCheckoutProduct);
        if (!isMl && !isFf) {
            const setter = selectedCheckoutProduct ? setGameUsernameCheckStatus : setMlUsernameCheckStatus;
            setter('Cek username hanya tersedia untuk Mobile Legends dan Free Fire.', 'failed');
            return;
        }

        const input = isMl ? getMobileLegendsInputForCheck() : getSingleGameInputForCheck();
        if (!input) return;

        const button = isMl ? checkMlUsernameBtn : checkGameUsernameBtn;
        const setStatus = isMl ? setMlUsernameCheckStatus : setGameUsernameCheckStatus;
        if (button) button.disabled = true;
        setStatus('Bentar saya cek dulu.....');

        try {
            const result = await postJson('/api/payment/game/check-username', {
                ...input,
                gameType: isMl ? 'mobile-legends' : 'free-fire',
            });
            const username = String(result?.data?.username || '').trim();
            if (!username || /^(?:n\/a|na|null|undefined|none|-|--|sukses|success|berhasil|transaksi\s+sukses|transaksi\s+berhasil)$/i.test(username)) {
                throw new Error('Username belum ditemukan. Pastikan ID akun benar.');
            }
            const cacheHint = result?.data?.cached ? ' (cache)' : '';
            setStatus(`Username ditemukan: ${username}${cacheHint}`, 'success');
        } catch (error) {
            const message = String(error.message || '').trim();
            const waitingMessage = /masih diproses|pending|proses|beberapa detik/i.test(message)
                ? 'Bentar saya cek dulu.....'
                : (message || 'Username belum bisa dicek. Coba lagi.');
            setStatus(waitingMessage, 'failed');
        } finally {
            if (button) button.disabled = false;
        }
    }

    function setCheckoutStatus(message, type) {
        setStatusElement(checkoutStatusEl, message, type, 'checkout-status');
        // Di tahap bayar, form (tempat baris status ini) disembunyikan. Pesan
        // kegagalan tetap perlu terlihat, jadi diteruskan ke kartu pembayaran.
        if (checkoutPhase === 'pay' && type === 'failed' && message) {
            setCheckoutPaymentNote(message);
        }
    }

    function closeCheckout(options = {}) {
        clearCheckoutFinalAutoHide();
        selectedCheckoutProduct = null;
        activeCheckoutOrderCode = null;
        if (checkoutPanelEl) checkoutPanelEl.hidden = true;
        if (checkoutFormEl) checkoutFormEl.reset();
        savedDestinationRequestId += 1;
        savedDestinations = [];
        renderSavedDestinations();
        setSavedDestinationPanelOpen(false);
        setSavedDestinationStatus('');
        renderPaymentMethodFilter();
        applyCheckoutIdentityFieldMode(null);
        setMlUsernameCheckStatus('');
        setGameUsernameCheckStatus('');
        setCheckoutQrisVisible(false);
        setCheckoutStatus('');
        setCheckoutProgress('detail');
        setCheckoutPaymentState('');
        if (options.navigate === false) return;
        // Kembali ke halaman sebelum checkout dibuka (daftar produk, Beranda,
        // atau Riwayat) tanpa menambah riwayat baru, sama seperti tombol back.
        if (window.location.hash === '#checkout') {
            window.history.back();
        } else {
            showView('buyView');
        }
    }

    function openCheckout(product, options = {}) {
        if (isDisruptedProduct(product)) {
            showToast({
                type: 'warning',
                title: 'Produk sedang gangguan',
                message: getProductDisruptionMessage(product),
                duration: 8000,
            });
            return;
        }
        if (isProductPurchaseBlocked()) {
            showToast({
                type: 'warning',
                title: isDailyCutOffActive() ? 'Sedang cut off' : 'Pembelian maintenance',
                message: getProductPurchaseBlockedMessage(),
            });
            return;
        }
        if (!product?.buyer_sku_code) {
            setCheckoutStatus('SKU produk belum tersedia.', 'failed');
            return;
        }

        const displayProduct = getDisplayProduct(product);
        selectedCheckoutProduct = displayProduct;
        activeCheckoutOrderCode = null;
        showView('checkoutView', { skipScroll: Boolean(options.skipViewScroll) });

        if (checkoutProductNameEl) checkoutProductNameEl.textContent = displayProduct.product_name || displayProduct.buyer_sku_code;
        if (checkoutSkuEl) checkoutSkuEl.textContent = displayProduct.buyer_sku_code || '-';
        if (checkoutPriceEl) {
            checkoutPriceEl.textContent = displayProduct.is_promo_active && displayProduct.promo_original_price
                ? `${formatRupiah(displayProduct.price)} (Promo dari ${formatRupiah(displayProduct.promo_original_price)})`
                : formatRupiah(displayProduct.price);
        }
        if (checkoutCategoryEl) checkoutCategoryEl.textContent = [displayProduct.category, displayProduct.brand].filter(Boolean).join(' · ') || '-';
        if (checkoutPanelEl) checkoutPanelEl.hidden = false;
        if (checkoutFormEl) checkoutFormEl.reset();
        setSubmitCheckoutLabel(displayProduct);
        setSavedDestinationPanelOpen(false);
        renderPaymentMethodFilter();
        applyCheckoutIdentityFieldMode(displayProduct);
        // Nomor yang sudah diketik di Beranda atau menu Beli ikut terisi, jadi
        // user tidak mengetiknya dua kali.
        const prefillCustomerNo = options.prefillCustomerNo
            || (isPhoneNumberCategory(displayProduct.category) ? normalizePhoneNumber(buyCustomerNo) : '');
        if (prefillCustomerNo) {
            fillCheckoutCustomerFromOrder(
                { customerNo: String(prefillCustomerNo || '').trim() },
                displayProduct
            );
        }
        setMlUsernameCheckStatus('');
        setGameUsernameCheckStatus('');
        setCheckoutQrisVisible(false);
        setCheckoutProgress('detail');
        const identityProfile = getCheckoutIdentityProfile(displayProduct);
        setCheckoutStatus(identityProfile.statusText || `${identityProfile.label} lalu proses transaksi.`);
        syncPaymentMethodUi();
        void loadSavedDestinationsForProduct(displayProduct);

        if (!options.skipAutoFocus) {
            setTimeout(function() {
                // Kalau nomornya sudah terisi, keyboard tidak perlu dimunculkan
                // dan menutupi tombol bayar.
                if (isMobileLegendsProduct(displayProduct)) {
                    mlUserIdInputEl?.focus();
                } else if (!prefillCustomerNo) {
                    customerNoInputEl?.focus();
                }
                checkoutPanelEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
    }

    // Tombol bayar menyebut nominalnya, jadi user tahu persis apa yang terjadi
    // saat menekannya.
    function setSubmitCheckoutLabel(product) {
        if (!submitCheckoutBtn || submitCheckoutBtn.classList.contains('is-loading')) return;
        const price = Number(product?.price || 0);
        submitCheckoutBtn.textContent = price > 0 ? `Bayar ${formatRupiah(price)}` : 'Bayar';
    }

    function isViewActive(viewId) {
        const view = document.getElementById(viewId);
        return Boolean(view && view.classList.contains('active'));
    }

    function renderCheckoutOrderState(order, wallet) {
        shownCheckoutOrder = order || null;
        const status = String(order?.status || '');
        const label = mapOrderStatusLabel(status);
        // Kalau user sedang di layar checkout, kartunya sudah menunjukkan status.
        // Toast hanya dipakai saat user sedang berada di menu lain.
        if (!isViewActive('checkoutView')) showOrderToast(order, 'checkout');

        if (wallet && typeof wallet.balance === 'number') {
            setBalance(wallet.balance);
        }

        if (status === 'WAITING_PAYMENT') {
            const expiryHint = getOrderExpiryHint(order);
            const amountText = typeof order.amount === 'number' ? formatRupiah(order.amount) : '';
            setCheckoutStatus('');
            setCheckoutQrisVisible(true);
            if (checkoutPaymentInfoEl) {
                checkoutPaymentInfoEl.textContent = [amountText, expiryHint].filter(Boolean).join(' \u00b7 ');
            }
            if (isMidtransOrder(order)) {
                const embedOpen = isSnapEmbedOpen('checkout', order.snapToken);
                const qrisFrame = checkoutQrisImageEl?.closest('.qris-frame') || null;
                setCheckoutPaymentTitle('Selesaikan pembayaran');
                if (checkoutQrisImageEl) checkoutQrisImageEl.hidden = true;
                if (qrisFrame) qrisFrame.hidden = true;
                if (!embedOpen) resetSnapContainer('checkout');
                if (openSnapPaymentBtn) {
                    openSnapPaymentBtn.hidden = embedOpen;
                    openSnapPaymentBtn.dataset.orderCode = order.orderCode || '';
                    openSnapPaymentBtn.innerHTML = '<i class="fas fa-wallet"></i> Buka pembayaran';
                }
                setCheckoutHints(['Ikuti langkah di jendela pembayaran. Halaman ini berganti sendiri begitu pembayaran masuk.']);
                setTimeout(function() {
                    keepCheckoutPaymentInView();
                }, 0);
            } else {
                resetSnapContainer('checkout');
                if (checkoutQrisImageEl && order.qrisUrl) checkoutQrisImageEl.src = order.qrisUrl;
                showCheckoutQrisHints(order);
                keepCheckoutPaymentInView();
            }
            return;
        }

        if (status === 'PAID' || status === 'PROCESSING') {
            setCheckoutStatus('');
            setCheckoutProcessingVisible(order);
            scrollToPaymentPanel(checkoutPaymentResultEl || checkoutPanelEl);
            return;
        }

        setCheckoutQrisVisible(false);

        if (status === 'SUCCESS') {
            refreshSavedDestinationAfterSuccess(order);
            setCheckoutStatus('');
            setCheckoutFinalVisible(
                order,
                'success',
                'Berhasil dibeli',
                '',
                'fa-circle-check',
                { actions: ['done', 'history'] }
            );
            renderCheckoutResultList(order);
            void loadCheckoutSerialNumber(order);
            return;
        }

        if (status === 'REFUNDED') {
            setCheckoutStatus('');
            setCheckoutFinalVisible(
                order,
                'failed',
                'Saldo dikembalikan',
                'Pembelian belum berhasil. Dana sudah masuk ke saldo akun.',
                'fa-wallet',
                { actions: ['done', 'cs'] }
            );
            return;
        }

        if (status === 'CANCELED') {
            // Pembatalan mengembalikan user ke form checkout.
            setCheckoutStatus('Pembayaran dibatalkan.', 'failed');
            return;
        }

        if (status === 'FAILED' || status === 'EXPIRED') {
            const expired = status === 'EXPIRED';
            setCheckoutStatus('');
            setCheckoutFinalVisible(
                order,
                'failed',
                expired ? 'Waktu bayar habis' : 'Pembelian gagal',
                expired
                    ? 'QRIS sudah kedaluwarsa. Buat pembayaran baru untuk membeli lagi.'
                    : (order.message || 'Transaksi belum berhasil.'),
                'fa-circle-exclamation',
                { actions: ['retry', 'cs'] }
            );
            return;
        }

        setCheckoutStatus(label);
    }

    function renderTopupOrderState(order, wallet) {
        const status = String(order?.status || '');
        const label = mapOrderStatusLabel(status);
        showOrderToast(order, 'topup');

        if (wallet && typeof wallet.balance === 'number') {
            setBalance(wallet.balance);
        }

        if (status === 'WAITING_PAYMENT') {
            const expiryHint = getOrderExpiryHint(order);
            setTopupQrisVisible(true);
            const midtrans = isMidtransOrder(order);
            // Nominal dan batas waktu sudah tertulis di bawah QR, jadi baris
            // status di atasnya tidak mengulang hal yang sama.
            setTopupStatus('');
            if (midtrans) {
                const embedOpen = isSnapEmbedOpen('topup', order.snapToken);
                const qrisFrame = topupQrisImageEl?.closest('.qris-frame') || null;
                if (topupPaymentTitleEl) topupPaymentTitleEl.textContent = 'Selesaikan topup';
                if (topupQrisImageEl) topupQrisImageEl.hidden = true;
                if (qrisFrame) qrisFrame.hidden = true;
                if (!embedOpen) resetSnapContainer('topup');
                if (openTopupSnapPaymentBtn) {
                    openTopupSnapPaymentBtn.hidden = embedOpen;
                    openTopupSnapPaymentBtn.dataset.orderCode = order.orderCode || '';
                    openTopupSnapPaymentBtn.innerHTML = '<i class="fas fa-wallet"></i> Buka pembayaran';
                }
                if (topupPaymentInfoEl) {
                    topupPaymentInfoEl.textContent = `Pilih QRIS pada panel pembayaran, lalu selesaikan sebelum kedaluwarsa. ${expiryHint || ''}`.trim();
                }
                setTopupHints(['Ikuti langkah di jendela pembayaran. Halaman ini berganti sendiri begitu pembayaran masuk.']);
            } else {
                resetSnapContainer('topup');
                if (topupQrisImageEl && order.qrisUrl) topupQrisImageEl.src = order.qrisUrl;
                if (topupPaymentInfoEl) {
                    topupPaymentInfoEl.textContent = [getOrderAmountLabel(order), expiryHint].filter(Boolean).join(' · ');
                }
                if (topupQrisSaveEl) {
                    topupQrisSaveEl.hidden = !order.qrisUrl;
                    if (order.qrisUrl) topupQrisSaveEl.href = order.qrisUrl;
                }
                setTopupHints([
                    'Dari HP ini: simpan gambar QRIS, buka e-wallet atau m-banking, lalu pilih bayar dengan QRIS dari galeri.',
                    'Dari HP lain: pindai kode di atas.',
                    'Halaman ini berganti sendiri begitu pembayaran masuk.',
                ]);
            }
            return;
        }

        setTopupQrisVisible(false);

        if (status === 'SUCCESS') {
            // Hasilnya tetap tampil sampai user pindah halaman. Dulu pesan ini
            // hilang sendiri setelah beberapa detik, sebelum sempat dibaca.
            setTopupStatus('');
            setTopupFinalVisible(
                order,
                'Topup berhasil',
                `Saldo PPOB bertambah ${getOrderAmountLabel(order)} dan sudah bisa dipakai belanja.`
            );
            return;
        }

        if (status === 'EXPIRED' || status === 'CANCELED' || status === 'FAILED') {
            const nextStep = status === 'EXPIRED'
                ? 'Buat QRIS baru untuk mencoba lagi.'
                : 'Kalau saldo sudah terpotong di aplikasi pembayaranmu, hubungi CS dengan kode topup ini.';
            setTopupStatus(`${label}. ${nextStep} ${order.orderCode ? `Kode ${order.orderCode}.` : ''}`.trim(), 'failed');
            return;
        }

        setTopupStatus(label);
    }

    function fillCheckoutCustomerFromOrder(order, product) {
        const customerNo = String(order?.customerNo || '').trim();
        if (!customerNo) return;

        if (isMobileLegendsProduct(product)) {
            const match = customerNo.match(/^(.+)\((.+)\)$/);
            if (match) {
                if (mlUserIdInputEl) mlUserIdInputEl.value = match[1].trim();
                if (mlZoneIdInputEl) mlZoneIdInputEl.value = match[2].trim();
            }
            return;
        }

        if (customerNoInputEl) customerNoInputEl.value = customerNo;
    }

    function resumeProductPaymentOrder(order) {
        const product = findProductBySku(order?.buyerSkuCode) || {
            buyer_sku_code: order?.buyerSkuCode || order?.orderCode,
            product_name: order?.productName || order?.buyerSkuCode || 'Pembelian Produk',
            price: Number(order?.amount || 0),
            category: '',
            brand: '',
            type: '',
        };

        openCheckout(product, { skipAutoFocus: true, skipViewScroll: true });
        selectedCheckoutProduct = getDisplayProduct(product);
        activeCheckoutOrderCode = order.orderCode || null;
        if (checkoutPriceEl) checkoutPriceEl.textContent = getOrderAmountLabel(order);
        if (paymentMethodInputEl) {
            paymentMethodInputEl.value = 'DIRECT_QRIS';
            renderPaymentMethodFilter();
        }
        fillCheckoutCustomerFromOrder(order, selectedCheckoutProduct);
        renderCheckoutOrderState(order, null);
        requestCheckoutPaymentScroll();
        void openCheckoutPaymentWindow(order);
    }

    function resumeTopupPaymentOrder(order) {
        showView('topupView', { skipScroll: true, topupType: 'ppob' });
        activeTopupOrderCode = order.orderCode || null;
        if (topupAmountInputEl) topupAmountInputEl.value = String(Number(order?.amount || 0) || '');
        renderTopupOrderState(order, null);
        scrollToPaymentPanel(topupPaymentResultEl);
        void openTopupPaymentWindow(order);
    }

    function resumePaymentOrder(orderCode) {
        const order = paymentOrdersCache.find(function(item) {
            return item.orderCode === orderCode;
        });
        if (!order) {
            showToast({
                type: 'warning',
                title: 'Order belum termuat',
                message: 'Refresh status transaksi lalu coba lagi.',
            });
            return;
        }

        if (String(order.type || '') === 'WALLET_TOPUP') {
            resumeTopupPaymentOrder(order);
        } else {
            resumeProductPaymentOrder(order);
        }
    }

    async function checkPaymentOrderStatus(orderCode) {
        const result = await postJson(`/api/payment/orders/${encodeURIComponent(orderCode)}/status`, { userEmail });
        return result?.data || {};
    }

    async function refreshSinglePaymentOrder(orderCode, options) {
        const data = await checkPaymentOrderStatus(orderCode);
        const order = data.order;
        const wallet = data.wallet;
        if (!order) return null;

        upsertPaymentOrderCache(order);

        if (order.orderCode === activeCheckoutOrderCode) {
            renderCheckoutOrderState(order, wallet);
        }
        if (order.orderCode === activeTopupOrderCode) {
            renderTopupOrderState(order, wallet);
        }

        if (options?.showToast) {
            showToast({
                type: isFinalOrderStatus(order.status) ? (String(order.status) === 'SUCCESS' ? 'success' : 'warning') : 'info',
                title: 'Status diperbarui',
                message: `${getOrderTitle(order)}: ${mapOrderStatusLabel(order.status)}`,
            });
        }

        await loadUserTransactions();
        return data;
    }

    async function cancelStoredPaymentOrder(orderCode) {
        const confirmed = await showConfirmDialog({
            title: 'Batalkan pembayaran',
            message: 'Pembayaran ini akan dibatalkan dan tidak bisa dipakai lagi. Lanjutkan?',
            confirmText: 'Batalkan',
            cancelText: 'Gajadi',
        });
        if (!confirmed) return;

        const result = await postJson(`/api/payment/orders/${encodeURIComponent(orderCode)}/cancel`, { userEmail });
        const order = result?.data?.order;
        if (order) {
            upsertPaymentOrderCache(order);
            if (order.orderCode === activeCheckoutOrderCode) renderCheckoutOrderState(order, null);
            if (order.orderCode === activeTopupOrderCode) renderTopupOrderState(order, null);
        }
        await loadUserTransactions();
    }

    async function refreshOngoingPaymentOrders(options) {
        const now = Date.now();
        if (!options?.force && now - lastOngoingRefreshAt < 12000) return;
        lastOngoingRefreshAt = now;

        const ongoingOrders = paymentOrdersCache.filter(function(order) {
            return isOngoingOrderStatus(order?.status);
        });

        if (!ongoingOrders.length) {
            await loadUserTransactions();
            return;
        }

        for (const order of ongoingOrders.slice(0, 6)) {
            try {
                await checkPaymentOrderStatus(order.orderCode).then(function(data) {
                    if (data?.order) upsertPaymentOrderCache(data.order);
                    if (data?.wallet && typeof data.wallet.balance === 'number') setBalance(data.wallet.balance);
                });
            } catch (_error) {
                // Status cards stay visible even if one refresh attempt fails.
            }
        }
        await loadUserTransactions();
    }

    const activePaymentPolls = new Set();

    async function pollPaymentOrder(orderCode, type) {
        const safeOrderCode = String(orderCode || '').trim();
        if (!safeOrderCode || activePaymentPolls.has(safeOrderCode)) return;
        activePaymentPolls.add(safeOrderCode);
        try {
            await runPaymentOrderPoll(safeOrderCode, type);
        } finally {
            activePaymentPolls.delete(safeOrderCode);
        }
    }

    async function runPaymentOrderPoll(orderCode, type) {
        // QRIS berlaku beberapa belas menit, jadi polling harus bertahan selama itu.
        // Awalnya rapat supaya pembayaran cepat terdeteksi, lalu melebar agar tidak membanjiri server.
        const deadline = Date.now() + (PAYMENT_POLL_TOTAL_MS);
        let delayMs = PAYMENT_POLL_MIN_DELAY_MS;
        let attempt = 0;

        while (Date.now() < deadline) {
            attempt += 1;
            if (attempt > 1) {
                await new Promise(function(resolve) {
                    setTimeout(resolve, delayMs);
                });
                delayMs = Math.min(Math.round(delayMs * 1.35), PAYMENT_POLL_MAX_DELAY_MS);
            }

            try {
                const data = await checkPaymentOrderStatus(orderCode);
                const order = data.order;
                const wallet = data.wallet;
                if (!order) return;

                if (type === 'checkout') {
                    if (order.orderCode === activeCheckoutOrderCode) {
                        renderCheckoutOrderState(order, wallet);
                    } else {
                        // User sudah menutup checkout order ini atau membuka produk lain.
                        // Cukup kabari lewat toast tanpa mengubah layar yang sedang dibuka.
                        showOrderToast(order, 'checkout');
                        if (wallet && typeof wallet.balance === 'number') setBalance(wallet.balance);
                    }
                } else {
                    renderTopupOrderState(order, wallet);
                }
                upsertPaymentOrderCache(order);

                if (
                    (order.type === 'PRODUCT_PURCHASE' && ['SUCCESS', 'FAILED', 'REFUNDED'].includes(String(order.status)))
                    || (order.type === 'WALLET_TOPUP' && ['SUCCESS', 'FAILED', 'EXPIRED', 'CANCELED'].includes(String(order.status)))
                ) {
                    await loadUserTransactions();
                }

                if (isFinalOrderStatus(order.status)) return;
            } catch (error) {
                if (type === 'checkout') {
                    if (orderCode === activeCheckoutOrderCode) {
                        setCheckoutStatus(`Gagal cek status pembayaran: ${error.message}`, 'failed');
                    }
                } else {
                    setTopupStatus(`Gagal cek status topup: ${error.message}`, 'failed');
                }
                return;
            }
        }

        if (type === 'checkout') {
            if (orderCode === activeCheckoutOrderCode) {
                setCheckoutStatus('Pembayaran belum terdeteksi. Klik Cek Status kalau kamu sudah membayar.', 'failed');
            }
        } else {
            setTopupStatus('Pembayaran belum terdeteksi. Klik Cek Status kalau kamu sudah membayar.', 'failed');
        }
    }

    async function submitCheckout() {
        // Pesanan di layar ini yang belum selesai tidak dibuat ulang, apa pun
        // metode bayarnya. Yang ditampilkan lagi adalah pesanan itu.
        const activeOrder = shownCheckoutOrder;
        if (
            activeCheckoutOrderCode
            && activeOrder?.orderCode === activeCheckoutOrderCode
            && isOngoingOrderStatus(activeOrder.status)
        ) {
            renderCheckoutOrderState(activeOrder, null);
            if (String(activeOrder.status) === 'WAITING_PAYMENT') {
                setCheckoutStatus('Pembayaran QRIS untuk order ini sudah dibuat. Selesaikan pembayaran yang sedang berjalan.', '');
                await openCheckoutPaymentWindow(activeOrder);
                requestCheckoutPaymentScroll();
            }
            return;
        }

        if (isProductPurchaseBlocked()) {
            setCheckoutStatus(getProductPurchaseBlockedMessage(), 'failed');
            return;
        }
        if (!selectedCheckoutProduct?.buyer_sku_code) {
            setCheckoutStatus('Pilih produk terlebih dahulu.', 'failed');
            return;
        }
        if (isDisruptedProduct(selectedCheckoutProduct)) {
            const message = getProductDisruptionMessage(selectedCheckoutProduct);
            setCheckoutStatus(message, 'failed');
            showToast({
                type: 'warning',
                title: 'Produk sedang gangguan',
                message,
                duration: 8000,
            });
            return;
        }

        const customerNo = resolveCheckoutCustomerNo();
        if (!customerNo) return;

        const paymentMethod = paymentMethodInputEl?.value || 'DIRECT_QRIS';
        if (paymentMethod === 'DIRECT_QRIS' && operationsConfig.qrisEnabled === false) {
            setCheckoutQrisVisible(false);
            setCheckoutStatus(qrisUnavailableMessage, 'failed');
            paymentMethodInputEl?.focus();
            return;
        }

        setButtonLoading(submitCheckoutBtn, true, '<i class="fas fa-spinner"></i> Memproses...');
        setCheckoutStatus('');
        setCheckoutQrisVisible(false);

        try {
            const result = await postJson('/api/payment/orders', {
                buyerSkuCode: selectedCheckoutProduct.buyer_sku_code,
                customerNo,
                paymentMethod,
                expectedAmount: Number(selectedCheckoutProduct.price || 0),
                userEmail,
            });
            const order = result?.data?.order;
            const wallet = result?.data?.wallet;
            if (!order?.orderCode) {
                throw new Error('Order pembayaran tidak valid');
            }

            activeCheckoutOrderCode = order.orderCode;
            upsertPaymentOrderCache(order);
            renderCheckoutOrderState(order, wallet);
            if (result?.data?.reused && ['PAID', 'PROCESSING'].includes(String(order.status))) {
                // Server mengembalikan pesanan lama yang masih diproses untuk
                // produk dan nomor yang sama, bukan membuat pesanan baru.
                showToast({
                    type: 'info',
                    title: 'Pesanan yang sama masih diproses',
                    message: 'Pembayaran tidak dipotong lagi. Tunggu hasil pesanan ini sebelum membeli lagi.',
                    duration: 8000,
                });
            }
            if (paymentMethod === 'DIRECT_QRIS' && String(order.status) === 'WAITING_PAYMENT') {
                await openCheckoutPaymentWindow(order);
                requestCheckoutPaymentScroll();
            }
            await loadUserTransactions();
            // Order sudah dibuat, jadi tombol dipulihkan sekarang. Dulu baru dipulihkan
            // setelah polling selesai, sehingga spinner-nya berputar selama menunggu bayar.
            setButtonLoading(submitCheckoutBtn, false);

            if (!isFinalOrderStatus(order.status)) {
                await pollPaymentOrder(order.orderCode, 'checkout');
            }
        } catch (error) {
            setCheckoutStatus(`Transaksi gagal: ${error.message}`, 'failed');
            if (String(error.message || '').toLowerCase().includes('gangguan')) {
                showToast({
                    type: 'warning',
                    title: 'Produk sedang gangguan',
                    message: error.message,
                    duration: 8000,
                });
                await loadDigiflazzProducts({ silent: true });
            }
        } finally {
            setButtonLoading(submitCheckoutBtn, false);
        }
    }

    async function submitTopup() {
        if (operationsConfig.topupEnabled === false) {
            setTopupStatus(getOperationsMessage('Topup saldo sedang maintenance. Coba lagi nanti.'), 'failed');
            return;
        }
        if (operationsConfig.qrisEnabled === false) {
            setTopupStatus(qrisUnavailableMessage, 'failed');
            return;
        }
        const amount = Number(topupAmountInputEl?.value || 0);
        if (!Number.isFinite(amount) || amount < topupMinAmount) {
            setTopupStatus(`Nominal topup minimal Rp ${topupMinAmount.toLocaleString('id-ID')}`, 'failed');
            topupAmountInputEl?.focus();
            return;
        }

        if (activeTopupOrderCode) {
            const activeOrder = paymentOrdersCache.find(function(item) {
                return item.orderCode === activeTopupOrderCode;
            });
            const activeAmount = Number(activeOrder?.amount || 0);
            if (activeOrder && isOngoingOrderStatus(activeOrder.status) && activeAmount === Math.trunc(amount)) {
                renderTopupOrderState(activeOrder, null);
                setTopupStatus('QRIS topup untuk nominal ini sudah dibuat. Selesaikan pembayaran yang sedang berjalan.');
                await openTopupPaymentWindow(activeOrder);
                setTimeout(function() {
                    (topupPaymentResultEl || topupAmountInputEl)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 80);
                return;
            }
        }

        setButtonLoading(submitTopupBtn, true, '<i class="fas fa-spinner"></i> Membuat...');
        setTopupStatus('Membuat QRIS topup...');
        setTopupQrisVisible(false);

        try {
            const result = await postJson('/api/wallet/topup/create', {
                userEmail,
                amount: Math.trunc(amount),
            });
            const order = result?.data?.order;
            const wallet = result?.data?.wallet;
            if (!order?.orderCode) {
                throw new Error('Order topup tidak valid');
            }
            activeTopupOrderCode = order.orderCode;
            upsertPaymentOrderCache(order);
            renderTopupOrderState(order, wallet);
            await openTopupPaymentWindow(order);
            // QR muncul di bawah formulir. Di HP letaknya di luar layar, jadi
            // halaman langsung digulir ke sana.
            setTimeout(function() {
                topupPaymentResultEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 80);
            await loadUserTransactions();
            // Tombol dipulihkan sebelum menunggu pembayaran. Dulu baru pulih
            // setelah polling selesai, jadi tertulis "Membuat..." selama
            // user membayar.
            setButtonLoading(submitTopupBtn, false);
            if (!isFinalOrderStatus(order.status)) {
                await pollPaymentOrder(order.orderCode, 'topup');
            }
        } catch (error) {
            setTopupStatus(`Topup gagal: ${error.message}. Coba lagi, atau pakai nominal lain.`, 'failed');
        } finally {
            setButtonLoading(submitTopupBtn, false);
        }
    }

    async function requestPasswordChangeOtp() {
        const currentPassword = String(currentPasswordInputEl?.value || '');
        const newPassword = String(newPasswordInputEl?.value || '');
        const confirmNewPassword = String(confirmNewPasswordInputEl?.value || '');

        if (!currentPassword || !newPassword || !confirmNewPassword) {
            setPasswordChangeStatus('Semua field password wajib diisi', 'failed');
            return;
        }
        if (newPassword.length < 8) {
            setPasswordChangeStatus('Password baru minimal 8 karakter', 'failed');
            return;
        }
        if (newPassword !== confirmNewPassword) {
            setPasswordChangeStatus('Ulangi password baru tidak sama', 'failed');
            return;
        }

        setButtonLoading(requestPasswordChangeOtpBtn, true, '<i class="fas fa-spinner"></i> Mengirim...');
        setPasswordChangeStatus('Mengirim OTP ke email terdaftar...');

        try {
            await postJson('/api/auth/password-change/request', {
                email: userEmail,
                currentPassword,
                newPassword,
            });
            if (passwordChangeOtpPanelEl) passwordChangeOtpPanelEl.hidden = false;
            setPasswordChangeStatus('OTP sudah dikirim. Masukkan OTP untuk konfirmasi ganti password.', 'success');
            passwordChangeOtpInputEl?.focus();
        } catch (error) {
            setPasswordChangeStatus(error.message, 'failed');
        } finally {
            setButtonLoading(requestPasswordChangeOtpBtn, false);
        }
    }

    async function verifyPasswordChangeOtp() {
        const otp = String(passwordChangeOtpInputEl?.value || '').trim();
        if (!/^\d{6}$/.test(otp)) {
            setPasswordChangeStatus('OTP harus 6 digit angka', 'failed');
            return;
        }

        setButtonLoading(verifyPasswordChangeOtpBtn, true, '<i class="fas fa-spinner"></i> Verifikasi...');
        setPasswordChangeStatus('Memverifikasi OTP...');

        try {
            await postJson('/api/auth/password-change/verify', {
                email: userEmail,
                otp,
            });
            if (passwordChangeOtpPanelEl) passwordChangeOtpPanelEl.hidden = true;
            if (passwordChangeFormEl) passwordChangeFormEl.reset();
            if (passwordChangeOtpFormEl) passwordChangeOtpFormEl.reset();
            setPasswordChangeStatus('Password berhasil diubah.', 'success');
            setPasswordChangePanelVisible(false);
        } catch (error) {
            setPasswordChangeStatus(error.message, 'failed');
        } finally {
            setButtonLoading(verifyPasswordChangeOtpBtn, false);
        }
    }

    document.addEventListener('click', function(e) {
        if (activeFancyFilterEl && !activeFancyFilterEl.contains(e.target)) {
            closeFancyFilterSelect();
        }

        const shortcutCategoryBtn = e.target.closest('[data-shortcut-category]');
        if (shortcutCategoryBtn) {
            e.preventDefault();
            openCategoryInBuy(shortcutCategoryBtn.dataset.shortcutCategory);
            return;
        }
        const filterButton = e.target.closest('.filter-chip');
        if (filterButton) {
            e.preventDefault();
            handleFilterChipClick(filterButton);
            return;
        }

        const favoriteButton = e.target.closest('[data-favorite-sku]');
        if (favoriteButton) {
            e.preventDefault();
            e.stopPropagation();
            void toggleProductFavorite(favoriteButton.dataset.favoriteSku);
            return;
        }

        const quickNumberButton = e.target.closest('[data-quick-category]');
        if (quickNumberButton) {
            e.preventDefault();
            openCategoryInBuy(quickNumberButton.dataset.quickCategory);
            if (quickNumberButton.dataset.quickBrand && selectedBrand !== quickNumberButton.dataset.quickBrand) {
                setSelectedBrand(quickNumberButton.dataset.quickBrand);
            }
            return;
        }

        const reorderButton = e.target.closest('[data-reorder-sku]');
        if (reorderButton) {
            e.preventDefault();
            const product = findProductBySku(reorderButton.dataset.reorderSku);
            if (product) {
                openCheckout(product, {
                    prefillCustomerNo: reorderButton.dataset.reorderCustomerNo || '',
                });
            } else {
                showToast({
                    type: 'warning',
                    title: 'Produk tidak tersedia',
                    message: 'Produk ini sudah tidak tersedia untuk dibeli saat ini.',
                });
            }
            return;
        }

        const button = e.target.closest('.btn-service');
        if (button) {
            e.preventDefault();
            const product = findProductBySku(button.dataset.sku);
            openCheckout(product || {
                buyer_sku_code: button.dataset.sku,
                product_name: button.dataset.productName || button.dataset.sku,
            });
            return;
        }

        const resumeOrderBtn = e.target.closest('[data-resume-order-code]');
        if (resumeOrderBtn) {
            e.preventDefault();
            resumePaymentOrder(resumeOrderBtn.dataset.resumeOrderCode);
            return;
        }

        const refreshOrderBtn = e.target.closest('[data-refresh-order-code]');
        if (refreshOrderBtn) {
            e.preventDefault();
            refreshOrderBtn.disabled = true;
            refreshSinglePaymentOrder(refreshOrderBtn.dataset.refreshOrderCode, { showToast: true })
                .catch(function(error) {
                    showToast({
                        type: 'failed',
                        title: 'Gagal cek status',
                        message: error.message,
                    });
                })
                .finally(function() {
                    refreshOrderBtn.disabled = false;
                });
            return;
        }

        const cancelOrderBtn = e.target.closest('[data-cancel-order-code]');
        if (cancelOrderBtn) {
            e.preventDefault();
            cancelStoredPaymentOrder(cancelOrderBtn.dataset.cancelOrderCode).catch(function(error) {
                showToast({
                    type: 'failed',
                    title: 'Gagal batalkan pembayaran',
                    message: error.message,
                });
            });
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeFancyFilterSelect();
        }
    });

    if (quickNumberInputEl) {
        quickNumberInputEl.addEventListener('input', function() {
            setBuyCustomerNo(quickNumberInputEl.value, quickNumberInputEl);
            renderQuickNumberActions();
        });
    }

    if (buyNumberInputEl) {
        buyNumberInputEl.addEventListener('input', function() {
            setBuyCustomerNo(buyNumberInputEl.value, buyNumberInputEl);
            renderQuickNumberActions();
            applyBuyNumberToSelection();
        });
    }

    if (productSearchEl) {
        productSearchEl.addEventListener('input', function() {
            resetProductLimit();
            renderProductGrid();
        });
    }

    if (categoryFilterEl) {
        categoryFilterEl.addEventListener('change', function() {
            setSelectedCategory(categoryFilterEl.value);
        });
    }

    if (brandFilterEl) {
        brandFilterEl.addEventListener('change', function() {
            setSelectedBrand(brandFilterEl.value);
        });
    }

    if (typeFilterEl) {
        typeFilterEl.addEventListener('change', function() {
            setSelectedType(typeFilterEl.value);
        });
    }

    if (productTypeQuickFilterEl) {
        productTypeQuickFilterEl.addEventListener('click', function(e) {
            const button = e.target.closest('[data-type-filter-value]');
            if (!button || !productTypeQuickFilterEl.contains(button)) return;
            setSelectedType(button.dataset.typeFilterValue || '');
        });
    }

    if (buyFavoriteToggleBtn) {
        buyFavoriteToggleBtn.addEventListener('click', function() {
            buyFavoriteOnly = !buyFavoriteOnly;
            resetProductLimit();
            updateFavoriteFilterControls();
            renderProductFilters();
            renderProductGrid();
        });
    }

    if (dashboardRecentHistoryBtn) {
        dashboardRecentHistoryBtn.addEventListener('click', function() {
            showView('historyView');
        });
    }

    if (dashboardOpenFavoritesBuyBtn) {
        dashboardOpenFavoritesBuyBtn.addEventListener('click', openFavoriteProductsInBuy);
    }

    if (savedDestinationListEl) {
        savedDestinationListEl.addEventListener('click', function(e) {
            const deleteButton = e.target.closest('[data-delete-saved-destination-id]');
            if (deleteButton && savedDestinationListEl.contains(deleteButton)) {
                e.preventDefault();
                void deleteSavedDestination(deleteButton.dataset.deleteSavedDestinationId);
                return;
            }
            const optionButton = e.target.closest('[data-saved-destination-value]');
            if (optionButton && savedDestinationListEl.contains(optionButton)) {
                e.preventDefault();
                applySavedDestination(optionButton.dataset.savedDestinationValue);
            }
        });
    }

    [saveCurrentDestinationBtn, saveCurrentMlDestinationBtn].forEach(function(button) {
        if (button) button.addEventListener('click', saveCurrentDestination);
    });

    if (savedDestinationToggleBtn) {
        savedDestinationToggleBtn.addEventListener('click', function() {
            setSavedDestinationPanelOpen(!savedDestinationPanelOpen);
        });
    }

    if (historyPrevPageBtn) {
        historyPrevPageBtn.addEventListener('click', function() {
            if (transactionPage <= 1) return;
            transactionPage -= 1;
            renderTransactionPage();
            document.getElementById('historySection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (historyNextPageBtn) {
        historyNextPageBtn.addEventListener('click', function() {
            const totalPages = Math.max(1, Math.ceil(transactionRowsCache.length / transactionPageSize));
            if (transactionPage >= totalPages) return;
            transactionPage += 1;
            renderTransactionPage();
            document.getElementById('historySection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    if (paymentMethodInputEl) {
        paymentMethodInputEl.addEventListener('change', syncPaymentMethodUi);
    }

    if (customerNoInputEl) {
        customerNoInputEl.addEventListener('input', function() {
            const profile = getCheckoutIdentityProfile(selectedCheckoutProduct);
            if (profile.numericOnly) sanitizeNumericInput(customerNoInputEl);
            setGameUsernameCheckStatus('');
        });
    }

    if (mlUserIdInputEl) {
        mlUserIdInputEl.addEventListener('input', function() {
            sanitizeNumericInput(mlUserIdInputEl);
            setMlUsernameCheckStatus('');
        });
    }

    if (mlZoneIdInputEl) {
        mlZoneIdInputEl.addEventListener('input', function() {
            sanitizeNumericInput(mlZoneIdInputEl);
            setMlUsernameCheckStatus('');
        });
    }

    if (checkMlUsernameBtn) {
        checkMlUsernameBtn.addEventListener('click', checkGameUsername);
    }

    if (checkGameUsernameBtn) {
        checkGameUsernameBtn.addEventListener('click', checkGameUsername);
    }

    if (refreshProductsBtn) {
        refreshProductsBtn.addEventListener('click', loadDigiflazzProducts);
    }

    if (loadMoreProductsBtn) {
        loadMoreProductsBtn.addEventListener('click', showMoreProducts);
    }

    if (productPrevPageBtn) {
        productPrevPageBtn.addEventListener('click', function() {
            if (productPage > 1) goToProductPage(productPage - 1);
        });
    }

    if (productNextPageBtn) {
        productNextPageBtn.addEventListener('click', function() {
            goToProductPage(productPage + 1);
        });
    }

    if (buyStepBackBtn) {
        buyStepBackBtn.addEventListener('click', goBackBuyStep);
    }

    if (hideProductsBtn) {
        hideProductsBtn.addEventListener('click', hideSomeProducts);
    }

    [refreshOngoingOrdersBtn, refreshHistoryOngoingOrdersBtn].forEach(function(button) {
        if (!button) return;
        button.addEventListener('click', async function() {
            setButtonLoading(button, true, '<i class="fas fa-spinner"></i> Memeriksa...');
            try {
                await refreshOngoingPaymentOrders({ force: true });
            } catch (error) {
                showToast({
                    type: 'failed',
                    title: 'Gagal refresh transaksi',
                    message: error.message,
                });
            } finally {
                setButtonLoading(button, false);
            }
        });
    });

    if (checkoutFormEl) {
        checkoutFormEl.addEventListener('submit', function(e) {
            e.preventDefault();
            submitCheckout();
        });
    }

    if (closeCheckoutBtn) {
        closeCheckoutBtn.addEventListener('click', closeCheckout);
    }

    if (cancelCheckoutBtn) {
        cancelCheckoutBtn.addEventListener('click', closeCheckout);
    }

    document.querySelectorAll('[data-close-snap]').forEach(function(button) {
        button.addEventListener('click', function() {
            closeSnapPaymentSheet(button.dataset.closeSnap === 'topup' ? 'topup' : 'checkout');
        });
    });

    if (refreshPaymentStatusBtn) {
        refreshPaymentStatusBtn.addEventListener('click', async function() {
            if (!activeCheckoutOrderCode) return;
            setButtonLoading(refreshPaymentStatusBtn, true, '<i class="fas fa-spinner"></i> Cek...');
            setCheckoutStatus('Mengecek status pembayaran...');
            try {
                const data = await refreshSinglePaymentOrder(activeCheckoutOrderCode);
                renderCheckoutOrderState(data.order, data.wallet);
                if (data?.order) {
                    const statusText = mapOrderStatusLabel(data.order.status);
                    setCheckoutStatus(`Status terbaru: ${statusText}.`, isFinalOrderStatus(data.order.status)
                        ? (String(data.order.status) === 'SUCCESS' ? 'success' : 'failed')
                        : '');
                    showToast({
                        type: isFinalOrderStatus(data.order.status) ? (String(data.order.status) === 'SUCCESS' ? 'success' : 'warning') : 'info',
                        title: 'Status pembayaran',
                        message: statusText,
                    });
                }
                if (data?.order?.type === 'PRODUCT_PURCHASE' && ['SUCCESS', 'FAILED', 'REFUNDED'].includes(String(data.order.status))) {
                    await loadUserTransactions();
                }
            } catch (error) {
                setCheckoutStatus(`Gagal cek status: ${error.message}`, 'failed');
            } finally {
                setButtonLoading(refreshPaymentStatusBtn, false);
            }
        });
    }

    if (openSnapPaymentBtn) {
        openSnapPaymentBtn.addEventListener('click', async function() {
            const order = paymentOrdersCache.find(function(item) {
                return item.orderCode === activeCheckoutOrderCode;
            });
            if (!order) return;
            setButtonLoading(openSnapPaymentBtn, true, '<i class="fas fa-spinner"></i> Memuat...');
            setCheckoutStatus('Memuat ulang pembayaran...');
            try {
                await openSnapPayment(order, 'checkout', { force: true });
                setCheckoutStatus('Panel pembayaran dibuka. Pilih QRIS lalu selesaikan pembayaran.', '');
                requestCheckoutPaymentScroll();
            } catch (error) {
                setCheckoutStatus(`Gagal memuat pembayaran: ${error.message}`, 'failed');
            } finally {
                setButtonLoading(openSnapPaymentBtn, false);
            }
        });
    }

    if (cancelPaymentOrderBtn) {
        cancelPaymentOrderBtn.addEventListener('click', async function() {
            if (!activeCheckoutOrderCode) return;
            try {
                const result = await postJson(`/api/payment/orders/${encodeURIComponent(activeCheckoutOrderCode)}/cancel`, { userEmail });
                renderCheckoutOrderState(result?.data?.order || {}, null);
                if (result?.data?.order) upsertPaymentOrderCache(result.data.order);
                await loadUserTransactions();
            } catch (error) {
                setCheckoutStatus(`Gagal batalkan pembayaran: ${error.message}`, 'failed');
            }
        });
    }

    if (checkoutProgressEl) {
        checkoutProgressEl.addEventListener('click', function(e) {
            const item = e.target.closest('[data-checkout-step]');
            if (!item || item.disabled) return;
            const step = String(item.dataset.checkoutStep || '');
            // Menekan tahap yang sedang berjalan kembali ke kartunya.
            checkoutReviewStep = step === checkoutPhase ? '' : step;
            syncCheckoutReview();
        });
    }

    if (checkoutReviewBackBtn) {
        checkoutReviewBackBtn.addEventListener('click', function() {
            checkoutReviewStep = '';
            syncCheckoutReview();
        });
    }

    if (checkoutDoneBtn) {
        checkoutDoneBtn.addEventListener('click', function() {
            closeCheckout();
        });
    }

    if (checkoutRetryBtn) {
        checkoutRetryBtn.addEventListener('click', function() {
            // Kembali ke form dengan produk dan nomor tujuan yang sama.
            activeCheckoutOrderCode = null;
            setCheckoutQrisVisible(false);
            setCheckoutStatus('');
        });
    }

    if (checkoutHistoryBtn) {
        checkoutHistoryBtn.addEventListener('click', function() {
            closeCheckout({ navigate: false });
            showView('historyView');
        });
    }

    if (topupFormEl) {
        topupFormEl.addEventListener('submit', function(e) {
            e.preventDefault();
            submitTopup();
        });
    }

    if (passwordChangeFormEl) {
        passwordChangeFormEl.addEventListener('submit', function(e) {
            e.preventDefault();
            requestPasswordChangeOtp();
        });
    }

    if (passwordChangeOtpFormEl) {
        passwordChangeOtpFormEl.addEventListener('submit', function(e) {
            e.preventDefault();
            verifyPasswordChangeOtp();
        });
    }

    if (togglePasswordChangeBtn) {
        togglePasswordChangeBtn.addEventListener('click', function() {
            const isVisible = passwordChangePanelEl ? !passwordChangePanelEl.hidden : false;
            setPasswordChangePanelVisible(!isVisible);
        });
    }

    document.querySelectorAll('[data-toggle-password]').forEach(function(button) {
        button.addEventListener('click', function() {
            togglePassword(button);
        });
    });

    if (refreshTopupStatusBtn) {
        refreshTopupStatusBtn.addEventListener('click', async function() {
            if (!activeTopupOrderCode) return;
            setButtonLoading(refreshTopupStatusBtn, true, '<i class="fas fa-spinner"></i> Cek...');
            setTopupStatus('Mengecek status topup...');
            try {
                const data = await refreshSinglePaymentOrder(activeTopupOrderCode);
                renderTopupOrderState(data.order, data.wallet);
                if (data?.order) {
                    const statusText = mapOrderStatusLabel(data.order.status);
                    setTopupStatus(`Status terbaru: ${statusText}.`, isFinalOrderStatus(data.order.status)
                        ? (String(data.order.status) === 'SUCCESS' ? 'success' : 'failed')
                        : '');
                    showToast({
                        type: isFinalOrderStatus(data.order.status) ? (String(data.order.status) === 'SUCCESS' ? 'success' : 'warning') : 'info',
                        title: 'Status topup',
                        message: statusText,
                    });
                }
                if (['SUCCESS', 'FAILED', 'EXPIRED', 'CANCELED'].includes(String(data?.order?.status || ''))) {
                    await loadUserTransactions();
                }
            } catch (error) {
                setTopupStatus(`Gagal cek status: ${error.message}`, 'failed');
            } finally {
                setButtonLoading(refreshTopupStatusBtn, false);
            }
        });
    }

    if (checkoutContactCsBtn) {
        checkoutContactCsBtn.addEventListener('click', function() {
            openCustomerService(buildCheckoutSupportMessage());
        });
    }

    if (checkoutProcessTipsEl) {
        checkoutProcessTipsEl.addEventListener('click', function(e) {
            if (e.target.closest('[data-process-tip-cs]')) {
                openCustomerService(buildCheckoutSupportMessage());
            }
        });
    }

    // Titik indikator ikut berpindah saat info digeser sendiri oleh user.
    if (checkoutProcessTipsTrackEl) {
        checkoutProcessTipsTrackEl.addEventListener('scroll', function() {
            if (processTipsScrollFrame) return;
            processTipsScrollFrame = requestAnimationFrame(function() {
                processTipsScrollFrame = null;
                setActiveProcessTipDot(getActiveProcessTipIndex());
            });
        }, { passive: true });
    }

    if (openTopupSnapPaymentBtn) {
        openTopupSnapPaymentBtn.addEventListener('click', async function() {
            const order = paymentOrdersCache.find(function(item) {
                return item.orderCode === activeTopupOrderCode;
            });
            if (!order) return;
            setButtonLoading(openTopupSnapPaymentBtn, true, '<i class="fas fa-spinner"></i> Memuat...');
            setTopupStatus('Memuat ulang pembayaran topup...');
            try {
                await openSnapPayment(order, 'topup', { force: true });
                setTopupStatus('Panel pembayaran dibuka. Pilih QRIS lalu selesaikan pembayaran.', '');
                scrollToPaymentPanel(topupPaymentResultEl);
            } catch (error) {
                setTopupStatus(`Gagal memuat pembayaran: ${error.message}`, 'failed');
            } finally {
                setButtonLoading(openTopupSnapPaymentBtn, false);
            }
        });
    }

    const topupBtn = document.getElementById('topupBalance');
    if (topupBtn) {
        topupBtn.addEventListener('click', function() {
            showView('topupView', { topupType: 'ppob' });
            topupAmountInputEl?.focus();
        });
    }

    // Isi cepat di kartu saldo Beranda: Topup terbuka dengan nominalnya sudah
    // terisi, jadi tinggal menekan tombol bayar.
    // Tombol isi saldo di halaman Akun.
    document.addEventListener('click', function(event) {
        const button = event.target.closest('[data-open-topup]');
        if (!button) return;
        const type = button.dataset.openTopup === 'vpn' ? 'vpn' : 'ppob';
        showView('topupView', { topupType: type });
        (type === 'vpn' ? topupVpnAmountInputEl : topupAmountInputEl)?.focus();
    });

    document.addEventListener('click', function(event) {
        const chip = event.target.closest('[data-quick-topup]');
        if (!chip || !topupAmountInputEl) return;
        showView('topupView', { topupType: 'ppob' });
        topupAmountInputEl.value = chip.dataset.quickTopup;
        topupAmountInputEl.dispatchEvent(new Event('input', { bubbles: true }));
        submitTopupBtn?.focus();
    });

    if (topupVpnBalanceBtn) {
        topupVpnBalanceBtn.addEventListener('click', function() {
            showView('topupView', { topupType: 'vpn' });
            topupVpnAmountInputEl?.focus();
        });
    }

    if (balanceRetryBtn) {
        balanceRetryBtn.addEventListener('click', function() {
            void loadWalletBalance();
        });
    }

    if (promoBuyNowBtn) {
        promoBuyNowBtn.addEventListener('click', function() {
            const sku = String(promoBuyNowBtn.dataset.sku || '').trim();
            const productName = String(promoBuyNowBtn.dataset.productName || '').trim();
            const promoFinalPrice = Number(promoBuyNowBtn.dataset.promoFinalPrice || 0);
            const promoOriginalPrice = Number(promoBuyNowBtn.dataset.promoOriginalPrice || 0);
            const baseProduct = findProductBySku(sku) || quickServiceProductsCache[0] || (sku ? {
                buyer_sku_code: sku,
                product_name: productName || sku,
            } : null);
            const product = baseProduct
                ? {
                    ...baseProduct,
                    price: Number.isFinite(promoFinalPrice) && promoFinalPrice > 0
                        ? Math.trunc(promoFinalPrice)
                        : Number(baseProduct.price || 0),
                    base_price: Number.isFinite(promoOriginalPrice) && promoOriginalPrice > 0
                        ? Math.trunc(promoOriginalPrice)
                        : Number(baseProduct.base_price || baseProduct.price || 0),
                }
                : null;
            if (!product) {
                showView('buyView');
                productSearchEl?.focus();
                return;
            }
            openCheckout(product);
        });
    }

    if (openCsWhatsappBtn) {
        openCsWhatsappBtn.addEventListener('click', function() {
            openCustomerServiceWhatsapp(csWhatsappDefaultMessage);
        });
    }

    if (openCsEmailBtn) {
        openCsEmailBtn.addEventListener('click', function() {
            const body = [
                'Halo CS 1FORCR KUOTA, saya butuh bantuan.',
                '',
                'Email akun:',
                userEmail || '',
                '',
                'Kode order / nomor transaksi:',
                '',
                'Kendala:',
                '',
            ].join('\n');
            openCustomerServiceEmail(body);
        });
    }

    document.querySelectorAll('[data-logout-btn], #logoutBtn').forEach(function(logoutEl) {
        logoutEl.addEventListener('click', async function(e) {
            e.preventDefault();
            const confirmed = await showConfirmDialog({
                title: 'Konfirmasi Logout',
                message: 'Yakin Mau Logout Nih kak?',
                confirmText: 'Iya',
                cancelText: 'Gajadi',
            });
            if (!confirmed) return;
            if (typeof window.PPOB_UNREGISTER_PUSH_DEVICE === 'function') {
                await window.PPOB_UNREGISTER_PUSH_DEVICE().catch(function() {});
            }
            await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'same-origin',
            }).catch(function() {});
            // Di dalam Telegram, halaman login biasanya langsung memasukkan user
            // lagi. Tanda ini menahannya sampai user sendiri memilih masuk.
            try { sessionStorage.setItem('ppob_telegram_auto_login_off', '1'); } catch (_error) { /* diblokir */ }
            if (typeof window.PPOB_NATIVE_GOOGLE_SIGN_OUT === 'function') {
                await window.PPOB_NATIVE_GOOGLE_SIGN_OUT().catch(function() {});
            }
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('role');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('username');
            window.location.href = window.PPOB_IS_NATIVE ? 'login.html' : 'index.html';
        });
    });

    document.querySelectorAll('[data-view-target]').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showView(link.dataset.viewTarget);
        });
    });

    async function initDashboard() {
        const authenticated = await loadCurrentSession();
        if (!authenticated) return;

        const initialViewByHash = {
            '#dashboard': 'dashboardView',
            '#beli': 'buyView',
            '#riwayat': 'historyView',
            '#topup': 'topupView',
            // Hubungi CS sekarang bagian dari Akun. Alamat lamanya tetap
            // berfungsi dan membuka bagian Bantuan.
            '#hubungi-cs': 'accountView',
            '#akun': 'accountView',
            '#vpn': 'vpnView',
        };
        // #topup-vpn membuka menu Topup dengan pilihan Topup VPN.
        const topupTypeByHash = { '#topup': 'ppob', '#topup-vpn': 'vpn' };
        const viewFromHash = function() {
            const hash = String(window.location.hash || '').toLowerCase();
            if (topupTypeByHash[hash]) return { view: 'topupView', options: { topupType: topupTypeByHash[hash] } };
            if (hash === '#hubungi-cs') return { view: 'accountView', options: { scrollTo: 'accountHelpSection', skipScroll: true } };
            // Checkout hanya bisa dibuka lagi kalau produknya masih dipilih,
            // misalnya saat user menekan forward. Selain itu kembali ke Beli.
            if (hash === '#checkout') {
                if (selectedCheckoutProduct) return { view: 'checkoutView', options: {} };
                window.history.replaceState(null, '', '#beli');
                return { view: 'buyView', options: {} };
            }
            return initialViewByHash[hash] ? { view: initialViewByHash[hash], options: {} } : null;
        };
        const initialTarget = viewFromHash();
        const initialView = initialTarget?.view || 'dashboardView';
        showView(initialView, { ...(initialTarget?.options || {}), fromHistory: true });
        // Tombol back dan forward mengganti hash. Halamannya diikuti tanpa
        // mencatat riwayat baru.
        window.addEventListener('hashchange', function() {
            // Alamat tanpa hash adalah halaman pertama yang dibuka, yaitu Beranda.
            const target = viewFromHash() || { view: 'dashboardView', options: {} };
            showView(target.view, { ...target.options, fromHistory: true });
        });
        setPasswordChangePanelVisible(false);
        renderPaymentMethodFilter();
        window.addEventListener('resize', function() {
            updateHorizontalScrollHint(productTypeQuickFilterEl, buyTypeSwipeHintEl);
        });
        window.addEventListener('focus', function() {
            refreshOngoingPaymentOrders().catch(function() {});
            checkProductSyncUpdates({ showSyncedNotice: true }).catch(function() {});
        });
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                refreshOngoingPaymentOrders().catch(function() {});
                checkProductSyncUpdates({ showSyncedNotice: true }).catch(function() {});
            }
        });

        await loadPublicSettings();
        await loadUserFavorites();
        await loadDashboardAnnouncements();
        loadDashboardBanners();
        loadCustomerServiceContact();
        setInterval(function() {
            loadPublicSettings();
            loadDashboardAnnouncements();
            loadDashboardBanners();
        }, 60000);
        loadWalletBalance();
        // Saldo VPN ikut tampil di Beranda, di samping saldo PPOB.
        if (initialView !== 'vpnView' && initialView !== 'topupView') void loadVpnOverview();
        loadAccountProfile();
        renderPromoBanner([]);
        renderSavedDestinations();
        loadDigiflazzProducts();
        startProductAutoSync();
        loadUserTransactions();
    }

    initDashboard();
});
