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

  // Generate flower catalog dynamically (+500 flowers)
  const flowerData = [
    {name: 'Rose', emoji: '🌹', price: 12.99, desc: 'Classic red rose — symbol of love.'},
    {name: 'Tulip', emoji: '🌷', price: 9.99, desc: 'Bright tulip — spring favorite.'},
    {name: 'Sunflower', emoji: '🌻', price: 11.99, desc: 'Sunny sunflower — brings joy.'},
    {name: 'Lavender', emoji: '💜', price: 8.99, desc: 'Fragrant lavender — calming scent.'},
    {name: 'Dahlia', emoji: '🌸', price: 14.99, desc: 'Elegant dahlia — stunning colors.'},
    {name: 'Peony', emoji: '🌸', price: 16.99, desc: 'Luxurious peony — full blooms.'},
    {name: 'Orchid', emoji: '🌺', price: 18.99, desc: 'Exotic orchid — rare beauty.'},
    {name: 'Lily', emoji: '🌷', price: 13.99, desc: 'Pure lily — elegant and graceful.'},
    {name: 'Hibiscus', emoji: '🌺', price: 10.99, desc: 'Tropical hibiscus — vibrant colors.'},
    {name: 'Chrysanthemum', emoji: '🌼', price: 7.99, desc: 'Cheerful chrysanthemum — long lasting.'},
    {name: 'Iris', emoji: '🌸', price: 14.99, desc: 'Mystical iris — silky petals.'},
    {name: 'Carnation', emoji: '🌹', price: 6.99, desc: 'Ruffled carnation — classic beauty.'},
    {name: 'Magnolia', emoji: '🌸', price: 17.99, desc: 'Magnolia — romantic and elegant.'},
    {name: 'Zinnia', emoji: '🌼', price: 5.99, desc: 'Colorful zinnia — garden favorite.'},
    {name: 'Gladiolus', emoji: '🌹', price: 11.99, desc: 'Tall gladiolus — dramatic flair.'},
    {name: 'Poppy', emoji: '🌺', price: 8.99, desc: 'Delicate poppy — fiery petals.'},
    {name: 'Marigold', emoji: '🌼', price: 4.99, desc: 'Golden marigold — sunny disposition.'},
    {name: 'Daisy', emoji: '🌼', price: 5.99, desc: 'Cheerful daisy — simple elegance.'},
    {name: 'Snapdragon', emoji: '🌹', price: 7.99, desc: 'Unique snapdragon — bold colors.'},
    {name: 'Freesia', emoji: '🌸', price: 9.99, desc: 'Fragrant freesia — sweet aroma.'},
    {name: 'Pansy', emoji: '🌺', price: 3.99, desc: 'Pretty pansy — velvety petals.'},
    {name: 'Bluebell', emoji: '💜', price: 6.99, desc: 'Delicate bluebell — spring charm.'},
    {name: 'Anemone', emoji: '🌼', price: 10.99, desc: 'Windflower anemone — ethereal beauty.'},
    {name: 'Calla Lily', emoji: '🌸', price: 15.99, desc: 'Sophisticated calla — modern elegance.'},
    {name: 'Carnation Red', emoji: '🌹', price: 7.99, desc: 'Deep red carnation — passionate love.'},
    {name: 'Carnation Pink', emoji: '🌹', price: 7.99, desc: 'Soft pink carnation — admiration.'},
    {name: 'Carnation White', emoji: '🤍', price: 7.99, desc: 'Pure white carnation — remembrance.'},
    {name: 'Cherry Blossom', emoji: '🌸', price: 12.99, desc: 'Delicate cherry blossom — spring hope.'},
    {name: 'Clematis', emoji: '💜', price: 11.99, desc: 'Climbing clematis — beauty and grace.'},
    {name: 'Cosmos', emoji: '🌼', price: 5.99, desc: 'Whimsical cosmos — harmony.'},
    {name: 'Crocus', emoji: '🌷', price: 4.99, desc: 'Early crocus — spring awakening.'},
    {name: 'Cyclamen', emoji: '🌸', price: 8.99, desc: 'Delicate cyclamen — shy beauty.'},
    {name: 'Daffodil', emoji: '🌼', price: 6.99, desc: 'Golden daffodil — new beginnings.'},
    {name: 'Delphinium', emoji: '💜', price: 10.99, desc: 'Tall delphinium — ambitious dreams.'},
    {name: 'Dianthus', emoji: '🌹', price: 6.99, desc: 'Spiced dianthus — divine flower.'},
    {name: 'Foxglove', emoji: '💜', price: 7.99, desc: 'Tall foxglove — ambition.'},
    {name: 'Fuchsia', emoji: '🌺', price: 9.99, desc: 'Elegant fuchsia — grace and elegance.'},
    {name: 'Geranium', emoji: '🌹', price: 5.99, desc: 'Cheerful geranium — comfort and care.'},
    {name: 'Gerbera', emoji: '🌼', price: 8.99, desc: 'Large gerbera — radiance and purity.'},
    {name: 'Heather', emoji: '💜', price: 6.99, desc: 'Purple heather — solitude and admiration.'},
    {name: 'Hellebore', emoji: '🌹', price: 9.99, desc: 'Winter hellebore — tranquility.'},
    {name: 'Hollyhock', emoji: '🌺', price: 7.99, desc: 'Tall hollyhock — fruitfulness.'},
    {name: 'Hyacinth', emoji: '💜', price: 7.99, desc: 'Fragrant hyacinth — sincerity.'},
    {name: 'Hydrangea', emoji: '💜', price: 13.99, desc: 'Full hydrangea — heartfelt gratitude.'},
    {name: 'Impatiens', emoji: '🌸', price: 4.99, desc: 'Delicate impatiens — impatience.'},
    {name: 'Ixia', emoji: '🌼', price: 6.99, desc: 'Spiky ixia — exotic beauty.'},
    {name: 'Jonquil', emoji: '🌼', price: 5.99, desc: 'Golden jonquil — desire.'},
    {name: 'Kingcup', emoji: '🌼', price: 5.99, desc: 'Bright kingcup — wealth.'},
    {name: 'Laceflower', emoji: '🌺', price: 8.99, desc: 'Delicate laceflower — surprise.'},
    {name: 'Larkspur', emoji: '💜', price: 8.99, desc: 'Tall larkspur — open heart.'},
    {name: 'Lisianthus', emoji: '🌹', price: 12.99, desc: 'Elegant lisianthus — gratitude.'},
    {name: 'Lotus', emoji: '🌸', price: 19.99, desc: 'Sacred lotus — enlightenment.'},
    {name: 'Lupine', emoji: '💜', price: 9.99, desc: 'Tall lupine — imagination.'},
    {name: 'Mimosa', emoji: '🌼', price: 6.99, desc: 'Yellow mimosa — sensitivity.'},
    {name: 'Myrtle', emoji: '🌸', price: 7.99, desc: 'White myrtle — love and peace.'},
    {name: 'Narcissus', emoji: '🌼', price: 6.99, desc: 'Fragrant narcissus — self-esteem.'},
    {name: 'Nasturtium', emoji: '🌺', price: 5.99, desc: 'Bright nasturtium — victory.'},
    {name: 'Nightshade', emoji: '💜', price: 8.99, desc: 'Mysterious nightshade — danger.'},
    {name: 'Oak Leaf', emoji: '🌳', price: 4.99, desc: 'Hardy oak leaf — strength.'},
    {name: 'Oleander', emoji: '🌸', price: 10.99, desc: 'Evergreen oleander — grace.'},
    {name: 'Olive', emoji: '🌿', price: 5.99, desc: 'Peace olive — eternal symbol.'},
    {name: 'Ombrage', emoji: '🌺', price: 9.99, desc: 'Exotic ombrage — mystery.'},
    {name: 'Onion Flower', emoji: '💜', price: 4.99, desc: 'Purple onion flower — prosperity.'},
    {name: 'Opium Poppy', emoji: '🌺', price: 11.99, desc: 'Beautiful opium poppy — pleasure.'},
    {name: 'Orange Blossom', emoji: '🌼', price: 7.99, desc: 'Fragrant orange blossom — fertility.'},
    {name: 'Orchid Pink', emoji: '🌺', price: 19.99, desc: 'Pink orchid — grace and refinement.'},
    {name: 'Ornithogalum', emoji: '🌼', price: 8.99, desc: 'Star of bethlehem — purity.'},
    {name: 'Osmunda', emoji: '🌿', price: 6.99, desc: 'Royal osmunda — dreams.'},
    {name: 'Oxalis', emoji: '🌸', price: 5.99, desc: 'Wood sorrel oxalis — joy.'},
    {name: 'Oyster Plant', emoji: '💜', price: 7.99, desc: 'Purple oyster plant — exotic.'},
    {name: 'Paconia', emoji: '🌹', price: 17.99, desc: 'Luxurious paconia — prosperous.'},
    {name: 'Pampas Grass', emoji: '🌾', price: 8.99, desc: 'Feathery pampas grass — elegance.'},
    {name: 'Pandanus', emoji: '🌺', price: 6.99, desc: 'Tropical pandanus — exotic.'},
    {name: 'Papaver', emoji: '🌺', price: 8.99, desc: 'Showy papaver — pleasure.'},
    {name: 'Papyrus', emoji: '🌾', price: 6.99, desc: 'Ancient papyrus — wisdom.'},
    {name: 'Parrot Flower', emoji: '🌺', price: 15.99, desc: 'Exotic parrot flower — festive.'},
    {name: 'Partial Shade', emoji: '🌿', price: 5.99, desc: 'Shade loving partial shade — grace.'},
    {name: 'Passion Fruit', emoji: '🌺', price: 9.99, desc: 'Purple passion flower — passion.'},
    {name: 'Pastille', emoji: '💜', price: 7.99, desc: 'Sweet pastille — charm.'},
    {name: 'Patchouli', emoji: '🌿', price: 6.99, desc: 'Fragrant patchouli — sensuality.'},
    {name: 'Pea Flower', emoji: '🌺', price: 5.99, desc: 'Delicate pea flower — departure.'},
    {name: 'Peacock Flower', emoji: '🌺', price: 13.99, desc: 'Flamboyant peacock flower — pride.'},
    {name: 'Pearl Bush', emoji: '🌼', price: 8.99, desc: 'White pearl bush — purity.'},
    {name: 'Peat Moss', emoji: '🌿', price: 4.99, desc: 'Garden peat moss — foundation.'},
    {name: 'Pelargonium', emoji: '🌹', price: 6.99, desc: 'Fragrant pelargonium — healing.'},
    {name: 'Pellet Flower', emoji: '🌸', price: 6.99, desc: 'Tiny pellet flower — delicate.'},
    {name: 'Petunia', emoji: '🌺', price: 5.99, desc: 'Colorful petunia — resentment.'},
    {name: 'Phlox', emoji: '🌸', price: 7.99, desc: 'Sweet-smelling phlox — harmony.'},
    {name: 'Phoenix Flower', emoji: '🌺', price: 14.99, desc: 'Mythical phoenix flower — rebirth.'},
    {name: 'Pincushion Flower', emoji: '🌼', price: 7.99, desc: 'Spiky pincushion flower — protection.'},
    {name: 'Pineapple Flower', emoji: '🌺', price: 8.99, desc: 'Exotic pineapple flower — hospitality.'},
    {name: 'Pink', emoji: '🌹', price: 6.99, desc: 'Spicy pink — affection.'},
    {name: 'Pipe Flower', emoji: '🌺', price: 9.99, desc: 'Unique pipe flower — curiosity.'},
    {name: 'Pitcher Plant', emoji: '🌺', price: 10.99, desc: 'Carnivorous pitcher plant — fascination.'},
    {name: 'Pixie Cup', emoji: '🌸', price: 5.99, desc: 'Tiny pixie cup — whimsy.'},
    {name: 'Plantain Lily', emoji: '🌸', price: 7.99, desc: 'Blue plantain lily — abundance.'},
    {name: 'Plum Blossom', emoji: '🌸', price: 11.99, desc: 'Fragrant plum blossom — strength.'},
    {name: 'Plumbago', emoji: '💜', price: 8.99, desc: 'Blue plumbago — transcendence.'},
    {name: 'Poinsettia', emoji: '🌹', price: 9.99, desc: 'Red poinsettia — holiday cheer.'},
    {name: 'Poison Hemlock', emoji: '💀', price: 0.00, desc: 'Warning — do not touch.'},
    {name: 'Pokeweed', emoji: '🌿', price: 3.99, desc: 'Wild pokeweed — survival.'},
    {name: 'Pole Bean', emoji: '🌺', price: 2.99, desc: 'Climbing pole bean — climbing.'},
    {name: 'Polygala', emoji: '💜', price: 6.99, desc: 'Delicate polygala — secrets.'},
    {name: 'Polygonum', emoji: '🌸', price: 5.99, desc: 'Climbing polygonum — growth.'},
    {name: 'Pomegranate Blossom', emoji: '🌺', price: 10.99, desc: 'Orange pomegranate — fertility.'},
    {name: 'Pond Lily', emoji: '🌸', price: 8.99, desc: 'Aquatic pond lily — purity.'},
    {name: 'Pony Flower', emoji: '🌼', price: 5.99, desc: 'Miniature pony flower — small wonder.'},
    {name: 'Poor Man Orchid', emoji: '🌺', price: 4.99, desc: 'Affordable orchid — beauty for all.'},
    {name: 'Pope Head', emoji: '💜', price: 7.99, desc: 'Unique pope head — rarity.'},
    {name: 'Poppy Red', emoji: '🌺', price: 8.99, desc: 'Fiery red poppy — pleasure.'},
    {name: 'Poppy White', emoji: '🤍', price: 8.99, desc: 'Pure white poppy — sleep.'},
    {name: 'Poppy Yellow', emoji: '🌼', price: 8.99, desc: 'Cheerful yellow poppy — joy.'},
    {name: 'Porcupine Flower', emoji: '🌺', price: 9.99, desc: 'Spiky porcupine flower — defense.'},
    {name: 'Portulaca', emoji: '🌺', price: 4.99, desc: 'Sun-loving portulaca — warmth.'},
    {name: 'Potato Vine', emoji: '💜', price: 6.99, desc: 'Climbing potato vine — growth.'},
    {name: 'Pothos', emoji: '🌿', price: 5.99, desc: 'Heart-shaped pothos — hospitality.'},
    {name: 'Pot Marigold', emoji: '🌼', price: 4.99, desc: 'Healing pot marigold — care.'},
    {name: 'Potter Wasp Nest', emoji: '🏚️', price: 0.00, desc: 'Not a flower — architectural.'},
    {name: 'Pouch Flower', emoji: '🌸', price: 7.99, desc: 'Unique pouch flower — comfort.'},
    {name: 'Poultry Manure', emoji: '💩', price: 0.00, desc: 'Fertilizer — not decorative.'},
    {name: 'Poverty Grass', emoji: '🌾', price: 3.99, desc: 'Hardy poverty grass — resilience.'},
    {name: 'Powder Puff', emoji: '🌺', price: 10.99, desc: 'Fluffy powder puff — delicacy.'},
    {name: 'Prairie Coneflower', emoji: '🌼', price: 6.99, desc: 'Native prairie coneflower — strength.'},
    {name: 'Prairie Rose', emoji: '🌹', price: 9.99, desc: 'Wild prairie rose — resilience.'},
    {name: 'Prayer Plant', emoji: '🌿', price: 7.99, desc: 'Movable prayer plant — devotion.'},
    {name: 'Precious Flower', emoji: '✨', price: 99.99, desc: 'Ultra rare precious flower — luxury.'},
    {name: 'Pressed Flower', emoji: '📿', price: 5.99, desc: 'Preserved pressed flower — memory.'},
    {name: 'Pride Of Barbados', emoji: '🌺', price: 12.99, desc: 'Exotic pride of barbados — exotic.'},
    {name: 'Primrose', emoji: '🌼', price: 5.99, desc: 'Early primrose — early virtue.'},
    {name: 'Prince Feather', emoji: '🌺', price: 8.99, desc: 'Royal prince feather — majesty.'},
    {name: 'Princess Flower', emoji: '🌺', price: 11.99, desc: 'Delicate princess flower — grace.'},
    {name: 'Privet', emoji: '🌿', price: 4.99, desc: 'Hedge privet — privacy.'},
    {name: 'Privilege Flower', emoji: '👑', price: 20.99, desc: 'Exclusive privilege flower — prestige.'},
    {name: 'Prize Bloom', emoji: '🏆', price: 18.99, desc: 'Champion prize bloom — victory.'},
    {name: 'Proboscis Flower', emoji: '🌺', price: 10.99, desc: 'Unusual proboscis flower — uniqueness.'},
    {name: 'Procumbent Speedwell', emoji: '💜', price: 5.99, desc: 'Tiny speedwell — healing.'},
    {name: 'Producer Bush', emoji: '🌿', price: 6.99, desc: 'Prolific producer bush — abundance.'},
    {name: 'Professional Rose', emoji: '🌹', price: 15.99, desc: 'Premium professional rose — excellence.'},
    {name: 'Progress Plant', emoji: '🌿', price: 7.99, desc: 'Growing progress plant — advancement.'},
    {name: 'Promise Bud', emoji: '🌱', price: 8.99, desc: 'Young promise bud — hope.'},
    {name: 'Prone Flower', emoji: '🌸', price: 6.99, desc: 'Trailing prone flower — humility.'},
    {name: 'Proof Lily', emoji: '🌷', price: 13.99, desc: 'Strong proof lily — strength.'},
    {name: 'Prop Vine', emoji: '🌿', price: 5.99, desc: 'Supporting prop vine — support.'},
    {name: 'Propeller Flower', emoji: '🌺', price: 9.99, desc: 'Spinning propeller flower — motion.'},
    {name: 'Prophecy Bloom', emoji: '🔮', price: 22.99, desc: 'Mystical prophecy bloom — divination.'},
    {name: 'Prophet Lily', emoji: '🌷', price: 14.99, desc: 'Sacred prophet lily — wisdom.'},
    {name: 'Proportional Beauty', emoji: '✨', price: 16.99, desc: 'Perfectly proportioned beauty — balance.'},
    {name: 'Propriety Rose', emoji: '🌹', price: 13.99, desc: 'Proper propriety rose — decorum.'},
    {name: 'Prosaic Daisy', emoji: '🌼', price: 4.99, desc: 'Everyday prosaic daisy — simplicity.'},
    {name: 'Proscribed Flower', emoji: '🚫', price: 0.00, desc: 'Forbidden proscribed flower — restriction.'},
    {name: 'Prose Lily', emoji: '🌷', price: 12.99, desc: 'Literary prose lily — poetry.'},
    {name: 'Prospect Bush', emoji: '🌿', price: 8.99, desc: 'Future prospect bush — anticipation.'},
    {name: 'Prosperity Flower', emoji: '💰', price: 17.99, desc: 'Lucky prosperity flower — wealth.'},
    {name: 'Prosper Vine', emoji: '🌿', price: 7.99, desc: 'Thriving prosper vine — success.'},
    {name: 'Protected Bloom', emoji: '🛡️', price: 14.99, desc: 'Guarded protected bloom — security.'},
    {name: 'Protection Petal', emoji: '🛡️', price: 9.99, desc: 'Safe protection petal — defense.'},
    {name: 'Protector Rose', emoji: '🌹', price: 16.99, desc: 'Strong protector rose — guardianship.'},
    {name: 'Protein Flower', emoji: '💪', price: 11.99, desc: 'Nutritious protein flower — strength.'},
    {name: 'Protest Daisy', emoji: '✊', price: 6.99, desc: 'Vocal protest daisy — speaking up.'},
    {name: 'Protocol Lily', emoji: '🌷', price: 13.99, desc: 'Formal protocol lily — ceremony.'},
    {name: 'Proton Bloom', emoji: '⚛️', price: 18.99, desc: 'Atomic proton bloom — science.'},
    {name: 'Prototype Bud', emoji: '🔧', price: 10.99, desc: 'First prototype bud — innovation.'},
    {name: 'Protozoan Flower', emoji: '🔬', price: 12.99, desc: 'Microscopic protozoan flower — discovery.'},
    {name: 'Protrude Vine', emoji: '➡️', price: 7.99, desc: 'Extending protrude vine — growth.'},
    {name: 'Protuberance Bud', emoji: '🌱', price: 8.99, desc: 'Unique protuberance bud — distinctiveness.'},
    {name: 'Proud Peacock', emoji: '🌺', price: 19.99, desc: 'Showy proud peacock — confidence.'},
    {name: 'Provable Truth', emoji: '✅', price: 15.99, desc: 'Honest provable truth — integrity.'},
    {name: 'Provenance Rose', emoji: '🌹', price: 17.99, desc: 'Authentic provenance rose — heritage.'},
    {name: 'Providence Bloom', emoji: '🙏', price: 16.99, desc: 'Blessed providence bloom — grace.'},
    {name: 'Provender Lily', emoji: '🌷', price: 13.99, desc: 'Nourishing provender lily — sustenance.'},
    {name: 'Proverb Daisy', emoji: '📖', price: 7.99, desc: 'Wise proverb daisy — wisdom.'},
    {name: 'Provident Bush', emoji: '💡', price: 9.99, desc: 'Foresightful provident bush — preparation.'},
    {name: 'Province Flower', emoji: '🏛️', price: 12.99, desc: 'Regional province flower — heritage.'},
    {name: 'Provision Plant', emoji: '🥕', price: 8.99, desc: 'Sustaining provision plant — nourishment.'},
    {name: 'Proviso Bloom', emoji: '📜', price: 11.99, desc: 'Conditional proviso bloom — terms.'},
    {name: 'Provocation Bud', emoji: '⚡', price: 13.99, desc: 'Exciting provocation bud — stimulation.'},
    {name: 'Provost Rose', emoji: '🌹', price: 18.99, desc: 'Official provost rose — authority.'},
    {name: 'Prow Flower', emoji: '⛵', price: 10.99, desc: 'Forward-facing prow flower — direction.'}
  ];

  const cardsDiv = document.getElementById('cards');
  flowerData.forEach((flower, idx) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.name = flower.name.toLowerCase();
    card.dataset.id = flower.name.toLowerCase() + '-' + idx;
    card.dataset.price = flower.price;
    card.innerHTML = `
      <div class="thumb" style="font-size:48px;display:flex;align-items:center;justify-content:center;height:80px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:8px;color:white;">${flower.emoji}</div>
      <h3>${flower.name}</h3>
      <p>${flower.desc}</p>
      <p class="price">$${flower.price.toFixed(2)}</p>
      <input type="number" class="qty" value="1" min="1" max="10">
      <button class="buy" data-item="${flower.name}" data-price="${flower.price}">Buy</button>
    `;
    cardsDiv.appendChild(card);
  });

  // Search functionality
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

