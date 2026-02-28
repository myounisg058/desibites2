// State
let cart = [];
let currentLang = localStorage.getItem('lang') || null;
let currentCategory = 'all';

// DOM Elements
const menuGrid = document.getElementById('menu-grid');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartBadge = document.getElementById('cart-badge');
const cartItemsContainer = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const proceedCheckoutBtn = document.getElementById('proceed-checkout-btn');
const checkoutForm = document.getElementById('checkout-form');
const categoryBtns = document.querySelectorAll('.category-btn');

// Language Elements
const langModal = document.getElementById('lang-modal');
const langBtns = document.querySelectorAll('.lang-btn');
const changeLangBtn = document.getElementById('change-lang-btn');

// Initialize
function init() {
    if (!currentLang) {
        // Show language modal if no language selected
        langModal.classList.remove('hidden');
    } else {
        setLanguage(currentLang);
    }
    setupEventListeners();
}

// Language Logic
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ur' ? 'rtl' : 'ltr';

    // Toggle body font override
    if (lang === 'en') {
        document.body.classList.add('lang-en');
    } else {
        document.body.classList.remove('lang-en');
    }

    // Translate Static Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Translate Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Re-render components with new language
    filterMenu(currentCategory);
    updateCartUI();

    // Hide modal if open
    langModal.classList.add('hidden');
}

// Render Menu
function renderMenu(items) {
    menuGrid.innerHTML = '';
    // Fallback if currentLang isn't ready
    const lang = currentLang || 'ur';
    const cartBtnText = translations[lang] ? translations[lang].btn_add_cart : "کارٹ میں شامل کریں";

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
      <div class="menu-img-wrapper">
          <img src="${item.image}" alt="${item.name[lang]}" class="menu-img">
      </div>
      <div class="menu-details">
          <h3 class="menu-title">${item.name[lang]}</h3>
          <p class="menu-desc">${item.description[lang]}</p>
          <div class="menu-footer">
              <span class="price en-font">Rs. ${item.price}</span>
              <button class="add-to-cart-btn" onclick="addToCart(${item.id})">${cartBtnText}</button>
          </div>
      </div>
    `;
        menuGrid.appendChild(card);
    });
}

// Filter Logic
function filterMenu(category) {
    currentCategory = category;
    if (category === 'all') {
        renderMenu(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// Cart Logic
function addToCart(id) {
    const item = menuData.find(i => i.id === id);
    const existingItem = cart.find(i => i.id === id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
    openCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCartUI();
        }
    }
}

// Update Cart Display
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;

    const lang = currentLang || 'ur';
    const emptyText = translations[lang] ? translations[lang].cart_empty : "آپ کا کارٹ خالی ہے۔";

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<p class="empty-cart-msg">${emptyText}</p>`;
        proceedCheckoutBtn.classList.add('disabled');
        proceedCheckoutBtn.disabled = true;
    } else {
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const el = document.createElement('div');
            el.className = 'cart-item';
            el.innerHTML = `
        <img src="${item.image}" alt="${item.name[lang]}" class="cart-item-img">
        <div class="cart-item-details">
            <h4 class="cart-item-title">${item.name[lang]}</h4>
            <div class="cart-item-price en-font">Rs. ${item.price * item.quantity}</div>
        </div>
        <div class="cart-item-controls">
            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span class="item-qty">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
        </div>
        <button class="remove-item" onclick="removeFromCart(${item.id})">×</button>
      `;
            cartItemsContainer.appendChild(el);
        });
        proceedCheckoutBtn.classList.remove('disabled');
        proceedCheckoutBtn.disabled = false;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPriceEl.textContent = `Rs. ${total}`;
}

// UI Toggles
function openCart() {
    cartSidebar.classList.add('open');
    cartOverlay.classList.add('show');
}

function closeCart() {
    cartSidebar.classList.remove('open');
    cartOverlay.classList.remove('show');
    checkoutForm.classList.add('hidden');
    proceedCheckoutBtn.classList.remove('hidden');
}

// Event Listeners
function setupEventListeners() {
    // Cart
    cartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);

    // Category Filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterMenu(e.target.dataset.category);
        });
    });

    // Checkout
    proceedCheckoutBtn.addEventListener('click', () => {
        proceedCheckoutBtn.classList.add('hidden');
        checkoutForm.classList.remove('hidden');
    });

    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const lang = currentLang || 'ur';
        const alertMsg = translations[lang] ? translations[lang].alert_success : 'Order placed successfully!';
        alert(alertMsg);

        cart = [];
        updateCartUI();
        closeCart();
        checkoutForm.reset();
    });

    // Language Modal & Toggle
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const selectedLang = e.target.dataset.lang;
            setLanguage(selectedLang);
        });
    });

    changeLangBtn.addEventListener('click', (e) => {
        e.preventDefault();
        langModal.classList.remove('hidden');
    });
}

// Boot
init();
