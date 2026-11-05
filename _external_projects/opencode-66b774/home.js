// Halaman depan 1FORCR KUOTA.
//
// Semua angka di halaman ini datang dari API publik yang sama dengan
// dashboard: katalog produk (/api/products), server VPN
// (/api/public/vpn-servers), dan pengaturan (/api/settings/public). Isi awal di
// HTML hanya cadangan kalau API gagal dimuat.

(function () {
    'use strict';

    const html = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const phoneQuery = window.matchMedia('(max-width: 899px)');
    html.classList.add('js');

    // ---------- Bantuan umum ----------

    function formatRupiah(value) {
        const number = Number(value || 0);
        return `Rp ${number.toLocaleString('id-ID', { maximumFractionDigits: 0 })}`;
    }

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined && text !== null) node.textContent = text;
        return node;
    }

    function clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }

    async function getJson(url) {
        const response = await fetch(url, { cache: 'no-store' });
        const result = await response.json().catch(function () { return {}; });
        if (!response.ok) throw new Error(result?.error || 'Gagal memuat data');
        return result?.data;
    }

    // Logo brand bisa berupa file di server ini atau URL https di Cloudflare R2.
    // Bentuk lain ditolak, sama seperti di main.js dan dashboard.
    function getBrandLogoUrl(product) {
        const logoUrl = String(product?.brand_logo_url || '').trim();
        if (!logoUrl) return '';
        if (/^https:\/\//i.test(logoUrl)) return logoUrl;
        const normalized = logoUrl.startsWith('logo/brands/') ? `/${logoUrl}` : logoUrl;
        return normalized.startsWith('/logo/brands/') ? normalized : '';
    }

    // ---------- Kemunculan bagian saat masuk layar ----------

    function setupReveal() {
        if (reducedMotion || !('IntersectionObserver' in window)) return;

        const groups = [
            ['.hero', '.hero-copy, .check'],
            ['.stats', '.stat-cell'],
            ['.cats', '.cats-title, .cat-tile'],
            ['.prices', '.prices-head h2, .prices-head .btn, .price-tabs, .price-panel'],
            ['.partners', '.partner-tile'],
            ['.voices', '.quiet-heading, .comment-lead, .comment-replies .comment'],
            ['.faq', '.faq-list, .faq-pane'],
            ['.place', '.place-address, .place-contact div'],
            ['.foot', '.tile'],
        ];

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.querySelectorAll('.reveal').forEach(function (part) {
                    part.classList.add('is-in');
                });
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12 });

        groups.forEach(function (group) {
            const section = document.querySelector(group[0]);
            if (!section) return;
            section.querySelectorAll(group[1]).forEach(function (part, index) {
                part.classList.add('reveal');
                part.style.setProperty('--delay', `${Math.min(index, 6) * 80}ms`);
            });
            observer.observe(section);
        });
    }

    // ---------- Demo cek harga ----------

    // Awalan nomor sama dengan js/user.js, supaya hasilnya sama dengan
    // kolom nomor HP di Beranda dashboard.
    const OPERATORS = [
        { key: 'TELKOMSEL', label: 'Telkomsel', prefixes: ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'] },
        { key: 'BYU', label: 'by.U', prefixes: ['0851'] },
        { key: 'INDOSAT', label: 'Indosat', prefixes: ['0814', '0815', '0816', '0855', '0856', '0857', '0858'] },
        { key: 'XL', label: 'XL', prefixes: ['0817', '0818', '0819', '0859', '0877', '0878'] },
        { key: 'AXIS', label: 'AXIS', prefixes: ['0831', '0832', '0833', '0838'] },
        { key: 'TRI', label: 'Tri', prefixes: ['0895', '0896', '0897', '0898', '0899'] },
        { key: 'SMARTFREN', label: 'Smartfren', prefixes: ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'] },
    ];
    const BRAND_ALIASES = {
        INDOSAT: ['INDOSAT', 'IM3', 'INDOSATOOREDOO'],
        TRI: ['TRI', 'THREE', '3'],
    };
    const DEMO_LIMIT = 4;

    let allProducts = [];

    function normalizePhoneNumber(value) {
        let digits = String(value || '').replace(/\D/g, '');
        if (digits.startsWith('62')) digits = `0${digits.slice(2)}`;
        else if (digits.startsWith('8')) digits = `0${digits}`;
        return digits;
    }

    function brandKey(brand) {
        return String(brand || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
    }

    function brandMatchesOperator(brand, operator) {
        const aliases = BRAND_ALIASES[operator.key] || [operator.key];
        return aliases.includes(brandKey(brand));
    }

    function setupDemo() {
        const numberEl = document.getElementById('demoNumber');
        const operatorEl = document.getElementById('demoOperator');
        const resultsEl = document.getElementById('demoResults');
        if (!numberEl || !resultsEl) return null;

        const state = { kind: 'Data' };

        document.querySelectorAll('.check-seg [data-kind]').forEach(function (button) {
            button.addEventListener('click', function () {
                state.kind = button.dataset.kind;
                button.parentElement.querySelectorAll('button').forEach(function (other) {
                    other.setAttribute('aria-checked', String(other === button));
                });
                render();
            });
        });

        function getOperators() {
            const digits = normalizePhoneNumber(numberEl.value);
            if (!digits) return { list: [OPERATORS[0]], reason: 'example' };
            if (digits.length < 4) return { list: [], reason: 'short' };
            const prefix = digits.slice(0, 4);
            const list = OPERATORS.filter(function (op) { return op.prefixes.includes(prefix); });
            return { list, reason: list.length ? 'number' : 'unknown', prefix };
        }

        function describe(result) {
            operatorEl.replaceChildren();
            if (result.reason === 'example') {
                operatorEl.textContent = 'Belum ada nomor. Di bawah ini contoh untuk Telkomsel.';
            } else if (result.reason === 'short') {
                operatorEl.textContent = 'Ketik minimal 4 angka pertama.';
            } else if (result.reason === 'unknown') {
                operatorEl.textContent = `Awalan ${result.prefix} belum kami kenali. Cari produknya di daftar harga di bawah.`;
            } else {
                operatorEl.appendChild(el('strong', '', result.list.map(function (op) { return op.label; }).join(' atau ')));
                operatorEl.appendChild(document.createTextNode(` dikenali dari awalan ${result.prefix}.`));
            }
        }

        function render() {
            const result = getOperators();
            describe(result);
            if (!allProducts.length) return;

            const matches = allProducts.filter(function (product) {
                return product.category === state.kind
                    && result.list.some(function (op) { return brandMatchesOperator(product.brand, op); });
            }).sort(function (a, b) { return a.price - b.price; });

            resultsEl.replaceChildren();
            if (!matches.length) {
                resultsEl.appendChild(el('li', 'check-empty', result.list.length
                    ? 'Belum ada produk untuk operator ini.'
                    : 'Paket termurah muncul setelah operatornya dikenali.'));
                return;
            }
            matches.slice(0, DEMO_LIMIT).forEach(function (product) {
                const row = el('li');
                const name = el('span', 'check-name', product.product_name);
                if (product.type) name.appendChild(el('small', '', product.type));
                row.appendChild(name);
                row.appendChild(el('span', 'check-price num', formatRupiah(product.price)));
                const buy = el('a', '', 'Beli');
                buy.href = `login.html?sku=${encodeURIComponent(product.buyer_sku_code)}`;
                buy.setAttribute('aria-label', `Beli ${product.product_name}`);
                row.appendChild(buy);
                resultsEl.appendChild(row);
            });
        }

        numberEl.addEventListener('input', render);
        render();
        return render;
    }

    // ---------- Tile kategori ----------

    // Logo kategori dari admin lebih dulu; kalau belum ada, logo brand produk
    // pertama di kategori itu, sama dengan Beranda dashboard. Kartu VPN memakai
    // logo menu VPN.
    const VPN_MENU_LOGO_URL = 'https://cdn.1forcrkuota.com/uploads/logo-menu/202609/logovpnFix.png';

    function getCategoryLogoUrl(product) {
        const logoUrl = String(product?.category_logo_url || '').trim();
        if (/^https:\/\//i.test(logoUrl)) return logoUrl;
        const normalized = logoUrl.startsWith('logo/') ? `/${logoUrl}` : logoUrl;
        return normalized.startsWith('/logo/') ? normalized : '';
    }

    // Jumlah kolom dipilih supaya baris terakhir sebisa mungkin penuh:
    // 8 kartu jadi 4 + 4, 10 kartu jadi 5 + 5. Sama dengan dashboard.
    function getBalancedTileColumns(count) {
        let best = 4;
        let bestEmpty = Infinity;
        [4, 5, 3].forEach(function (columns) {
            const empty = (columns - (count % columns)) % columns;
            if (empty < bestEmpty) {
                best = columns;
                bestEmpty = empty;
            }
        });
        return best;
    }

    function appendTileLogo(tile, url) {
        if (!url) return;
        const logo = el('img', 'cat-logo');
        logo.src = url;
        logo.alt = '';
        logo.decoding = 'async';
        logo.addEventListener('error', function () { logo.remove(); }, { once: true });
        tile.prepend(logo);
    }

    function setupCategoryTiles(onPick) {
        const gridEl = document.getElementById('catGrid');
        if (!gridEl) return null;

        gridEl.addEventListener('click', function (event) {
            const tile = event.target.closest('.cat-tile');
            if (!tile || !onPick) return;
            onPick(tile.dataset.category);
        });

        return function render() {
            const byCategory = {};
            allProducts.forEach(function (product) {
                (byCategory[product.category] = byCategory[product.category] || []).push(product);
            });
            const categories = Object.keys(byCategory).sort(compareCategories);
            gridEl.replaceChildren();
            gridEl.style.setProperty('--tile-columns', String(getBalancedTileColumns(categories.length + 1)));

            categories.forEach(function (category) {
                const products = byCategory[category];
                const logoProduct = products.find(function (product) { return getCategoryLogoUrl(product); }) || products[0];
                const tile = el('a', 'cat-tile');
                tile.href = '#harga';
                tile.dataset.category = category;
                tile.appendChild(el('span', 'cat-name', CATEGORY_LABELS[category] || category));
                tile.appendChild(el('small', '', `${products.length} produk`));
                appendTileLogo(tile, getCategoryLogoUrl(logoProduct) || getBrandLogoUrl(logoProduct));
                gridEl.appendChild(tile);
            });

            const vpn = el('a', 'cat-tile');
            vpn.href = '#harga';
            vpn.dataset.category = VPN_TAB;
            vpn.appendChild(el('span', 'cat-name', 'Akun VPN'));
            vpn.appendChild(el('small', '', 'SSH, VMess, Trojan'));
            appendTileLogo(vpn, VPN_MENU_LOGO_URL);
            gridEl.appendChild(vpn);
        };
    }

    // ---------- Daftar harga ----------

    const CATEGORY_LABELS = {
        Pulsa: 'Pulsa',
        Data: 'Kuota',
        PLN: 'Token PLN',
        Games: 'Games',
        'E-Money': 'E-wallet',
        'Masa Aktif': 'Masa aktif',
        'Aktivasi Voucher': 'Voucher',
    };
    const CATEGORY_ORDER = ['Pulsa', 'Data', 'PLN', 'Games', 'E-Money', 'Masa Aktif', 'Aktivasi Voucher'];
    const VPN_TAB = '__vpn';

    // Urutan kategori mengikuti kebutuhan yang paling sering, sama untuk tile
    // dan tab daftar harga.
    function compareCategories(a, b) {
        const rank = function (value) {
            const index = CATEGORY_ORDER.indexOf(value);
            return index < 0 ? CATEGORY_ORDER.length : index;
        };
        return rank(a) - rank(b) || a.localeCompare(b, 'id');
    }
    // Di HP satu pita setinggi dua baris, jadi yang dimuat sekaligus lebih sedikit.
    const PAGE_SIZE = phoneQuery.matches ? 8 : 12;

    function setupPrices() {
        const tabsEl = document.getElementById('priceTabs');
        const panelEl = document.getElementById('pricePanel');
        const searchEl = document.getElementById('priceSearch');
        const brandEl = document.getElementById('priceBrand');
        const statusEl = document.getElementById('priceStatus');
        const bandsEl = document.getElementById('priceBands');
        const moreEl = document.getElementById('priceMore');
        if (!tabsEl || !bandsEl) return null;

        const state = { category: 'Pulsa', limit: PAGE_SIZE, vpn: null, vpnError: false };

        function buildTabs() {
            const counts = {};
            allProducts.forEach(function (product) {
                counts[product.category] = (counts[product.category] || 0) + 1;
            });
            const categories = Object.keys(counts).sort(compareCategories);
            if (!categories.includes(state.category)) state.category = categories[0] || VPN_TAB;

            tabsEl.replaceChildren();
            categories.concat(VPN_TAB).forEach(function (category) {
                const tab = el('button', 'price-tab');
                tab.type = 'button';
                tab.setAttribute('role', 'tab');
                tab.dataset.category = category;
                tab.id = `priceTab-${category.replace(/[^a-z0-9]/gi, '')}`;
                tab.setAttribute('aria-controls', 'pricePanel');
                tab.appendChild(document.createTextNode(category === VPN_TAB ? 'Akun VPN' : (CATEGORY_LABELS[category] || category)));
                const small = el('small', '', category === VPN_TAB
                    ? (state.vpn ? `${state.vpn.length} server` : 'Server dan slot')
                    : `${counts[category]} produk`);
                tab.appendChild(small);
                tabsEl.appendChild(tab);
            });
            syncTabs();
        }

        function syncTabs() {
            tabsEl.querySelectorAll('.price-tab').forEach(function (tab) {
                const selected = tab.dataset.category === state.category;
                tab.setAttribute('aria-selected', String(selected));
                tab.tabIndex = selected ? 0 : -1;
                if (selected) panelEl.setAttribute('aria-labelledby', tab.id || 'pricesTitle');
            });
        }

        function fillBrands() {
            const current = brandEl.value;
            const brands = Array.from(new Set(allProducts
                .filter(function (product) { return product.category === state.category; })
                .map(function (product) { return product.brand; })
                .filter(Boolean))).sort(function (a, b) { return a.localeCompare(b, 'id'); });
            brandEl.replaceChildren(el('option', '', 'Semua brand'));
            brandEl.firstChild.value = '';
            brands.forEach(function (brand) {
                const option = el('option', '', brand);
                option.value = brand;
                brandEl.appendChild(option);
            });
            brandEl.value = brands.includes(current) ? current : '';
            brandEl.disabled = state.category === VPN_TAB;
        }

        function productBand(product) {
            const band = el('li', 'price-band');
            const price = el('span', 'band-price', formatRupiah(product.price));
            band.appendChild(price);
            const title = el('span', 'band-title', product.product_name);
            title.appendChild(el('small', '', [product.brand, product.type].filter(Boolean).join(' · ')));
            band.appendChild(title);
            const side = el('span', 'band-side');
            const logoUrl = getBrandLogoUrl(product);
            if (logoUrl) {
                const logo = el('img', 'band-logo');
                logo.src = logoUrl;
                logo.alt = '';
                logo.loading = 'lazy';
                logo.addEventListener('error', function () { logo.remove(); }, { once: true });
                side.appendChild(logo);
            }
            const buy = el('a', 'band-action', 'Beli');
            buy.href = `login.html?sku=${encodeURIComponent(product.buyer_sku_code)}`;
            buy.setAttribute('aria-label', `Beli ${product.product_name}`);
            side.appendChild(buy);
            band.appendChild(side);
            return band;
        }

        function quotaText(value) {
            const number = Number(value);
            if (value === null || value === undefined || !Number.isFinite(number)) return '';
            return number <= 0 ? 'kuota tanpa batas' : `kuota ${number} GB`;
        }

        function vpnBand(server) {
            const band = el('li', 'price-band');
            const price = el('span', 'band-price', server.pricePer30Days ? formatRupiah(server.pricePer30Days) : formatRupiah(server.pricePerDay));
            price.appendChild(el('small', '', server.pricePer30Days ? 'untuk 30 hari' : 'per hari'));
            band.appendChild(price);
            const title = el('span', 'band-title', server.name || 'Server VPN');
            const notes = [(server.protocols || []).join(', '), quotaText(server.quota),
                Number(server.ipLimit) > 0 ? `${server.ipLimit} IP` : ''].filter(Boolean);
            title.appendChild(el('small', '', notes.join(' · ')));
            band.appendChild(title);
            const side = el('span', 'band-side');
            if (server.isFull) {
                side.appendChild(el('span', 'band-slot is-full', 'Penuh'));
            } else {
                if (server.slotLeft !== null && server.slotLeft !== undefined) {
                    side.appendChild(el('span', 'band-slot num', `Sisa ${server.slotLeft} slot`));
                }
                const order = el('a', 'band-action', 'Pesan');
                order.href = 'login.html';
                order.setAttribute('aria-label', `Pesan akun VPN di server ${server.name || ''}`.trim());
                side.appendChild(order);
            }
            band.appendChild(side);
            return band;
        }

        function render() {
            bandsEl.replaceChildren();
            moreEl.hidden = true;

            if (state.category === VPN_TAB) {
                searchEl.placeholder = 'Cari nama server';
                if (state.vpnError) {
                    statusEl.textContent = 'Daftar server gagal dimuat. Muat ulang halaman ini sebentar lagi.';
                    return;
                }
                if (!state.vpn) {
                    statusEl.textContent = 'Memuat server VPN...';
                    return;
                }
                const query = searchEl.value.trim().toLowerCase();
                const servers = state.vpn.filter(function (server) {
                    return !query || String(server.name || '').toLowerCase().includes(query);
                });
                if (!state.vpn.length) {
                    statusEl.textContent = 'Belum ada server yang dibuka. Coba lagi nanti, atau tanya CS lewat WhatsApp.';
                    return;
                }
                const open = state.vpn.filter(function (server) { return !server.isFull; }).length;
                statusEl.textContent = `${open} dari ${state.vpn.length} server masih bisa dipesan. Sisa slot diperbarui setiap menit; paket 2 IP dipilih di dashboard.`;
                servers.forEach(function (server) { bandsEl.appendChild(vpnBand(server)); });
                return;
            }

            searchEl.placeholder = 'Cari produk, misal 10 GB';
            const query = searchEl.value.trim().toLowerCase();
            const items = allProducts.filter(function (product) {
                return product.category === state.category
                    && (!brandEl.value || product.brand === brandEl.value)
                    && (!query || `${product.product_name} ${product.brand} ${product.type}`.toLowerCase().includes(query));
            }).sort(function (a, b) { return a.price - b.price; });

            if (!items.length) {
                statusEl.textContent = query
                    ? `Tidak ada produk dengan kata "${searchEl.value.trim()}". Coba kata lain atau pilih semua brand.`
                    : 'Belum ada produk di kategori ini.';
                return;
            }
            const shown = items.slice(0, state.limit);
            statusEl.textContent = `${items.length} produk, dari yang termurah.`;
            shown.forEach(function (product) { bandsEl.appendChild(productBand(product)); });
            if (items.length > shown.length) {
                moreEl.hidden = false;
                moreEl.textContent = `Tampilkan ${Math.min(PAGE_SIZE, items.length - shown.length)} lagi`;
            }
        }

        function selectCategory(category) {
            if (!category) return;
            state.category = category;
            state.limit = PAGE_SIZE;
            searchEl.value = '';
            syncTabs();
            fillBrands();
            render();
        }

        tabsEl.addEventListener('click', function (event) {
            const tab = event.target.closest('.price-tab');
            if (tab) selectCategory(tab.dataset.category);
        });
        // Panah kiri/kanan dan atas/bawah berpindah tab, seperti tablist biasa.
        tabsEl.addEventListener('keydown', function (event) {
            if (!['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].includes(event.key)) return;
            const tabs = Array.from(tabsEl.querySelectorAll('.price-tab'));
            const index = tabs.findIndex(function (tab) { return tab.dataset.category === state.category; });
            const delta = event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1;
            const next = tabs[(index + delta + tabs.length) % tabs.length];
            event.preventDefault();
            next.focus();
            next.click();
        });
        searchEl.addEventListener('input', function () { state.limit = PAGE_SIZE; render(); });
        brandEl.addEventListener('change', function () { state.limit = PAGE_SIZE; render(); });
        moreEl.addEventListener('click', function () { state.limit += PAGE_SIZE; render(); });

        return {
            selectCategory,
            productsLoaded: function () { buildTabs(); fillBrands(); render(); },
            productsFailed: function () {
                statusEl.textContent = 'Harga gagal dimuat. Periksa koneksi lalu muat ulang halaman, atau lihat harganya di dashboard.';
            },
            vpnLoaded: function (servers) { state.vpn = servers; buildTabs(); render(); },
            vpnFailed: function () { state.vpnError = true; render(); },
        };
    }

    // ---------- Promo dan jam cut off dari pengaturan ----------

    function setupPromo(settings) {
        const strip = document.getElementById('promoStrip');
        const source = settings?.userPromoBanner;
        if (!strip || !source) return;
        const items = Array.isArray(source.items) ? source.items : [source];
        const now = Date.now();
        const promo = items.find(function (item) {
            const expiry = item?.expiresAt ? new Date(item.expiresAt).getTime() : null;
            return item && item.enabled !== false && item.sku
                && (item.isActive || !item.isExpired)
                && (!expiry || expiry > now);
        });
        if (!promo) return;

        const product = allProducts.find(function (item) { return item.buyer_sku_code === promo.sku; });
        document.getElementById('promoTitle').textContent = promo.title || product?.product_name || 'Promo';
        const priceEl = document.getElementById('promoPrice');
        priceEl.replaceChildren();
        if (Number(promo.finalPrice) > 0) {
            priceEl.appendChild(document.createTextNode(`${formatRupiah(promo.finalPrice)} `));
            if (Number(promo.originalPrice) > Number(promo.finalPrice)) {
                priceEl.appendChild(el('s', 'num', formatRupiah(promo.originalPrice)));
            }
        }
        document.getElementById('promoLink').href = `login.html?sku=${encodeURIComponent(promo.sku)}`;
        strip.hidden = false;

        const countdownEl = document.getElementById('promoCountdown');
        const expiry = promo.expiresAt ? new Date(promo.expiresAt).getTime() : null;
        if (!expiry) {
            countdownEl.parentElement.hidden = true;
            return;
        }
        function tick() {
            const left = Math.max(0, expiry - Date.now());
            if (!left) {
                strip.hidden = true;
                return;
            }
            const hours = Math.floor(left / 3600000);
            const minutes = Math.floor((left % 3600000) / 60000);
            const seconds = Math.floor((left % 60000) / 1000);
            countdownEl.textContent = [hours, minutes, seconds].map(function (part) {
                return String(part).padStart(2, '0');
            }).join(':');
            window.setTimeout(tick, 1000);
        }
        tick();
    }

    function setupCutOff(settings) {
        const cutOff = settings?.operations?.cutOff;
        const item = document.getElementById('faqCutOffItem');
        if (!item || !cutOff?.enabled || !cutOff.startTime || !cutOff.endTime) return;
        const start = String(cutOff.startTime).replace(':', '.');
        const end = String(cutOff.endTime).replace(':', '.');
        document.getElementById('faqCutOffText').textContent =
            `Ada jeda harian pukul ${start} sampai ${end} WIB untuk perawatan sistem. Transaksi kembali normal pukul ${end}.`;
        item.hidden = false;
    }

    // ---------- Tanya jawab ----------

    function setupFaq() {
        const items = Array.from(document.querySelectorAll('.faq-item'));
        const paneText = document.getElementById('faqPaneText');
        if (!items.length || !paneText) return;

        function open(item, fromHover) {
            if (item.hidden) return;
            const phone = phoneQuery.matches;
            items.forEach(function (other) {
                const isTarget = other === item;
                const shouldOpen = phone ? (isTarget && (fromHover || !other.classList.contains('is-open'))) : isTarget;
                other.classList.toggle('is-open', shouldOpen);
                other.querySelector('.faq-q').setAttribute('aria-expanded', String(shouldOpen));
            });
            if (phone) return;
            const text = item.querySelector('.faq-a p').textContent;
            if (paneText.textContent === text) return;
            if (reducedMotion) {
                paneText.textContent = text;
                return;
            }
            paneText.classList.add('is-swapping');
            window.setTimeout(function () {
                paneText.textContent = text;
                paneText.classList.remove('is-swapping');
            }, 150);
        }

        items.forEach(function (item, index) {
            const question = item.querySelector('.faq-q');
            question.addEventListener('click', function () { open(item, false); });
            question.addEventListener('focus', function () { if (!phoneQuery.matches) open(item, true); });
            question.addEventListener('mouseenter', function () { if (!phoneQuery.matches) open(item, true); });
            if (index === 0) {
                item.classList.add('is-open');
            } else {
                question.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ---------- Angka hidup (pengguna dan pembeli) ----------

    // Menghitung naik dari angka lama ke angka baru, supaya perubahannya terasa
    // hidup. Kalau pengguna meminta gerak dikurangi, nilainya langsung dipasang.
    function animateCount(el, from, to) {
        if (!el) return;
        const tujuan = Math.max(0, Math.round(Number(to) || 0));
        const awal = Math.max(0, Math.round(Number(from) || 0));
        if (reducedMotion || awal === tujuan) {
            el.textContent = tujuan.toLocaleString('id-ID');
            return;
        }
        const durasi = 1000;
        const mulai = performance.now();
        function langkah(sekarang) {
            const t = clamp((sekarang - mulai) / durasi, 0, 1);
            // Easing out: cepat di awal, melambat di akhir.
            const eased = 1 - Math.pow(1 - t, 3);
            const nilai = Math.round(awal + (tujuan - awal) * eased);
            el.textContent = nilai.toLocaleString('id-ID');
            if (t < 1) requestAnimationFrame(langkah);
        }
        requestAnimationFrame(langkah);
    }

    function setupStats() {
        const section = document.getElementById('stats');
        if (!section) return function () {};

        const sel = {
            totalUsers: document.getElementById('statUsers'),
            ppobBuyers: document.getElementById('statPpob'),
            vpnBuyers: document.getElementById('statVpn'),
        };
        // Angka yang sedang tampil, supaya penyegaran berikutnya menghitung dari
        // sini, bukan dari nol lagi.
        const terakhir = { totalUsers: 0, ppobBuyers: 0, vpnBuyers: 0 };
        let pernahTampil = false;

        // Hanya anggap data sah kalau ketiga angka ada dan berupa bilangan.
        // Ini menjaga agar balasan bentuk lama/salah tidak memunculkan "0".
        function dataSah(data) {
            if (!data || typeof data !== 'object') return false;
            return Object.keys(sel).every(function (kunci) {
                return Number.isFinite(Number(data[kunci]));
            });
        }

        function terapkan(data) {
            Object.keys(sel).forEach(function (kunci) {
                const baru = Math.max(0, Math.round(Number(data[kunci]) || 0));
                animateCount(sel[kunci], pernahTampil ? terakhir[kunci] : 0, baru);
                terakhir[kunci] = baru;
            });
            // Angka baru muncul: tampilkan bagiannya (tersembunyi di HTML sampai
            // ada data yang benar).
            if (section.hidden) section.hidden = false;
            pernahTampil = true;
        }

        async function refresh() {
            try {
                const data = await getJson('/api/public/stats');
                // Kalau datanya tidak sah, jangan tampilkan angka palsu: biarkan
                // tersembunyi (kalau belum pernah tampil) atau pertahankan angka
                // lama (kalau sudah pernah).
                if (dataSah(data)) terapkan(data);
            } catch (_error) {
                // Diamkan; jangan munculkan bagian ini dengan angka nol.
            }
        }

        return refresh;
    }

    // ---------- Memuat data ----------

    async function loadData(renderDemo, prices, renderTiles) {
        const settingsPromise = getJson('/api/settings/public').catch(function () { return null; });

        try {
            const products = await getJson('/api/products?active=true&take=2000');
            allProducts = (Array.isArray(products) ? products : []).filter(function (product) {
                return product && !product.product_disruption && Number(product.price) > 0;
            });
            if (renderDemo) renderDemo();
            if (renderTiles) renderTiles();
            if (prices) prices.productsLoaded();
        } catch (_error) {
            if (prices) prices.productsFailed();
        }

        const settings = await settingsPromise;
        if (settings) {
            setupPromo(settings);
            setupCutOff(settings);
        }

        try {
            const servers = await getJson('/api/public/vpn-servers');
            if (prices) prices.vpnLoaded(Array.isArray(servers) ? servers : []);
        } catch (_error) {
            if (prices) prices.vpnFailed();
        }
    }

    setupReveal();
    setupFaq();
    const renderDemo = setupDemo();
    const prices = setupPrices();
    // Mengetuk tile membuka kategori yang sama di daftar harga; tautannya
    // sendiri (#harga) yang menggulir ke sana.
    const renderTiles = setupCategoryTiles(function (category) {
        if (prices) prices.selectCategory(category);
    });
    loadData(renderDemo, prices, renderTiles);

    // Angka hidup: muat sekali, lalu segarkan tiap 20 detik supaya terasa
    // realtime tanpa membebani server (hasilnya di-cache sebentar di sana).
    const refreshStats = setupStats();
    refreshStats();
    setInterval(refreshStats, 20000);
})();
