document.addEventListener('DOMContentLoaded', function(){
  // Navigation between sections
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const toast = document.getElementById('toast');

  function showSection(id){
    pages.forEach(p => p.id === id ? p.classList.add('active') : p.classList.remove('active'));
  }

  navLinks.forEach(btn => {
    btn.addEventListener('click', () => {
      showSection(btn.dataset.section);
      window.scrollTo(0, 0);
    });
  });

  // Dark / Light theme using data-theme on :root
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  function setTheme(t){
    if(t === 'dark') root.setAttribute('data-theme','dark');
    else root.removeAttribute('data-theme');
    localStorage.setItem('shuretling-theme', t);
  }

  // Initialize theme from storage
  const saved = localStorage.getItem('shuretling-theme');
  if(saved) setTheme(saved);

  // Update theme button label
  function updateThemeButton(){
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.textContent = isDark ? 'Theme: Dark (click to switch)' : 'Theme: Light (click to switch)';
    themeToggle.setAttribute('aria-pressed', isDark);
  }

  updateThemeButton();

  themeToggle.addEventListener('click', function(){
    const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(now);
    updateThemeButton();
    showToast('Theme set to ' + now);
  });

  // Simple search for catalog
  const search = document.getElementById('search');
  const cards = document.querySelectorAll('.card');
  if(search){
    search.addEventListener('input', function(){
      const q = search.value.trim().toLowerCase();
      cards.forEach(c => {
        const name = c.dataset.name || '';
        c.style.display = name.includes(q) ? '' : 'none';
      });
    });
  }

  // Cart functionality with prices
  const cartCountEl = document.getElementById('cartCount');
  const cartBtn = document.getElementById('cartBtn');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartContent = document.getElementById('cartContent');
  const cartItemsDiv = document.getElementById('cartItems');
  
  let cartItems = JSON.parse(localStorage.getItem('shuretling-cartItems') || '[]');
  
  function updateCartUI(){
    const total = cartItems.reduce((sum, item) => sum + item.qty, 0);
    cartCountEl.textContent = total;
    renderCart();
  }

  function renderCart(){
    const isEmpty = cartItems.length === 0;
    cartEmpty.style.display = isEmpty ? 'block' : 'none';
    cartContent.style.display = isEmpty ? 'none' : 'block';
    
    if(isEmpty) return;
    
    cartItemsDiv.innerHTML = '';
    cartItems.forEach((item, idx) => {
      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      const itemTotal = (item.price * item.qty).toFixed(2);
      itemDiv.innerHTML = `
        <img src="https://via.placeholder.com/60?text=${item.name}" alt="${item.name}">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)} x ${item.qty}</p>
          <p style="font-weight:bold;">$${itemTotal}</p>
        </div>
        <button class="cart-item-remove" data-idx="${idx}">Remove</button>
      `;
      cartItemsDiv.appendChild(itemDiv);
    });
    
    updateCartTotal();
  }

  function updateCartTotal(){
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.10;
    const total = subtotal + tax;
    
    document.getElementById('cartSubtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('cartTax').textContent = '$' + tax.toFixed(2);
    document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);
  }

  updateCartUI();

  // Remove from cart
  cartItemsDiv.addEventListener('click', function(e){
    if(e.target.matches('.cart-item-remove')){
      const idx = parseInt(e.target.dataset.idx);
      cartItems.splice(idx, 1);
      localStorage.setItem('shuretling-cartItems', JSON.stringify(cartItems));
      updateCartUI();
      showToast('Item removed from cart');
    }
  });

  // Checkout button
  document.getElementById('checkoutBtn').addEventListener('click', function(){
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0) * 1.10;
    showToast(`Order total: $${total.toFixed(2)}. Thank you for your purchase! 🎉`);
    // Simulate checkout
    setTimeout(() => {
      cartItems = [];
      localStorage.setItem('shuretling-cartItems', JSON.stringify(cartItems));
      updateCartUI();
      showToast('Order placed successfully!');
    }, 2000);
  });

  document.addEventListener('click', function(e){
    if(e.target.matches('.rec-add-btn')){
      const bundle = e.target.dataset.bundle;
      const price = 50;
      const existing = cartItems.find(x => x.name === bundle);
      if(existing){
        existing.qty += 1;
      } else {
        cartItems.push({name: bundle, price: price, qty: 1});
      }
      localStorage.setItem('shuretling-cartItems', JSON.stringify(cartItems));
      updateCartUI();
      showToast(`Added ${bundle} to cart!`);
    }
  });

  document.addEventListener('click', function(e){
    if(e.target.matches('.buy')){
      const card = e.target.closest('.card');
      const qty = parseInt(card.querySelector('.qty').value) || 1;
      const item = e.target.dataset.item;
      const price = parseFloat(e.target.dataset.price);
      
      const existing = cartItems.find(x => x.name === item);
      if(existing){
        existing.qty += qty;
      } else {
        cartItems.push({name: item, price: price, qty: qty});
      }
      
      localStorage.setItem('shuretling-cartItems', JSON.stringify(cartItems));
      updateCartUI();
      
      const total = (price * qty).toFixed(2);
      showToast(`Added ${qty}x ${item} ($${total}) to cart`);
      
      // Notification
      if(document.getElementById('notifyToggle').checked){
        notifyPurchase(item, qty, price);
      }
    }
  });

  cartBtn.addEventListener('click', function(){
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0).toFixed(2);
    const count = cartItems.reduce((sum, item) => sum + item.qty, 0);
    showToast(`Cart: ${count} items, Total: $${total}`);
  });

  // Language and Currency
  const langSelect = document.getElementById('langSelect');
  const currencySelect = document.getElementById('currencySelect');
  const notifyToggle = document.getElementById('notifyToggle');

  const savedLang = localStorage.getItem('shuretling-lang') || 'en';
  const savedCurrency = localStorage.getItem('shuretling-currency') || 'USD';
  
  langSelect.value = savedLang;
  currencySelect.value = savedCurrency;

  langSelect.addEventListener('change', function(){
    localStorage.setItem('shuretling-lang', langSelect.value);
    showToast('Language changed to ' + langSelect.value);
  });

  currencySelect.addEventListener('change', function(){
    localStorage.setItem('shuretling-currency', currencySelect.value);
    showToast('Currency changed to ' + currencySelect.value);
  });

  notifyToggle.addEventListener('change', function(){
    localStorage.setItem('shuretling-notify', notifyToggle.checked);
  });

  // Store Locations
  const locations = [
    {name: 'Downtown Flower Shop', city: 'New York, NY', lat: 40.7128, lng: -74.0060},
    {name: 'Spring Blooms', city: 'Los Angeles, CA', lat: 34.0522, lng: -118.2437},
    {name: 'Garden Paradise', city: 'Chicago, IL', lat: 41.8781, lng: -87.6298},
    {name: 'Petal & Stem', city: 'Houston, TX', lat: 29.7604, lng: -95.3698},
    {name: 'Bloom House', city: 'Miami, FL', lat: 25.7617, lng: -80.1918}
  ];

  const locDiv = document.getElementById('locations');
  locations.forEach(loc => {
    const card = document.createElement('div');
    card.className = 'location-card';
    const mapsUrl = `https://maps.google.com/?q=${loc.lat},${loc.lng}`;
    card.innerHTML = `<h4>${loc.name}</h4><p>${loc.city}</p><a href="${mapsUrl}" target="_blank">View on Google Maps →</a>`;
    locDiv.appendChild(card);
  });

  function notifyPurchase(item, qty, price){
    const msg = `🌸 New purchase: ${qty}x ${item} for $${(price * qty).toFixed(2)}`;
    console.log(msg);
    
    // Browser notification (if user grants permission)
    if('Notification' in window && Notification.permission === 'granted'){
      new Notification('Shuretling Sale', {body: msg});
    }
  }

  // Request notification permission
  if('Notification' in window && Notification.permission === 'default'){
    Notification.requestPermission();
  }

  function showToast(text, time=1800){
    toast.textContent = text;
    toast.style.display = 'block';
    setTimeout(()=> toast.style.display = 'none', time);
  }
});

