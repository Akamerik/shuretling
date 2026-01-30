document.addEventListener('DOMContentLoaded', function(){
  // Navigation between sections
  const navLinks = document.querySelectorAll('.nav-link');
  const pages = document.querySelectorAll('.page');
  const toast = document.getElementById('toast');

  function showSection(id){
    pages.forEach(p => p.id === id ? p.classList.add('active') : p.classList.remove('active'));
  }

  navLinks.forEach(btn => {
    btn.addEventListener('click', () => showSection(btn.dataset.section));
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

  // Buy button sample
  // Cart functionality
  const cartCountEl = document.getElementById('cartCount');
  const cartBtn = document.getElementById('cartBtn');

  // load cart count
  let cartCount = parseInt(localStorage.getItem('shuretling-cart') || '0', 10);
  function updateCartUI(){
    cartCountEl.textContent = cartCount;
  }
  updateCartUI();

  document.addEventListener('click', function(e){
    if(e.target.matches('.buy')){
      cartCount = cartCount + 1;
      localStorage.setItem('shuretling-cart', String(cartCount));
      updateCartUI();
      showToast('Added to cart (' + cartCount + ')');
    }
  });

  cartBtn.addEventListener('click', function(){
    showToast('Cart has ' + cartCount + ' item(s)');
  });

  function showToast(text, time=1800){
    toast.textContent = text;
    toast.style.display = 'block';
    setTimeout(()=> toast.style.display = 'none', time);
  }
});
