// Product Database with Real Images and Real Names
const products = [
  // Electronics
  {id: 'e001', name: 'Sony WH-1000XM5 Headphones', category: 'Electronics', price: 379.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop', desc: 'Premium noise-cancelling wireless headphones with 30hr battery'},
  {id: 'e002', name: 'Anker USB-C Cable 2m', category: 'Electronics', price: 12.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', desc: 'Fast charging certified USB-C cable'},
  {id: 'e003', name: 'Logitech 4K Pro Webcam', category: 'Electronics', price: 199.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1598940244212-bd2d36e14261?w=300&h=300&fit=crop', desc: 'Professional 4K streaming camera for creators'},
  {id: 'e004', name: 'Samsung T7 SSD 1TB', category: 'Electronics', price: 129.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop', desc: 'Ultra-fast 1TB portable SSD with 1050MB/s'},
  {id: 'e005', name: 'Logitech MX Master 3S', category: 'Electronics', price: 99.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop', desc: 'Advanced wireless mouse with multi-device support'},
  {id: 'e006', name: 'Anker 7-Port USB Hub', category: 'Electronics', price: 39.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', desc: 'Powered USB hub with fast charging support'},
  {id: 'e007', name: 'Corsair K95 Platinum Keyboard', category: 'Electronics', price: 229.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1587829191301-db59970198ef?w=300&h=300&fit=crop', desc: 'Premium RGB mechanical gaming keyboard'},
  {id: 'e008', name: 'SteelSeries QcK Prime XL Pad', category: 'Electronics', price: 39.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop', desc: 'Professional gaming mouse pad 900x400mm'},
  {id: 'e009', name: 'Twelve South Compass Laptop Stand', category: 'Electronics', price: 49.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop', desc: 'Premium aluminum laptop stand for all sizes'},
  {id: 'e010', name: 'Belkin iPad Pro Stand', category: 'Electronics', price: 29.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1610708822869-c2a05141a7c0?w=300&h=300&fit=crop', desc: 'Adjustable aluminum tablet stand'},
  {id: 'e011', name: 'Belkin HDMI 2.1 8K Cable', category: 'Electronics', price: 24.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', desc: '8K HDMI cable for ultra HD displays'},
  {id: 'e012', name: 'Anker PowerCore 26800mAh', category: 'Electronics', price: 59.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop', desc: 'Massive 26800mAh power bank with dual charging'},
  {id: 'e013', name: 'Belkin Boost Charge Wireless Pad', category: 'Electronics', price: 39.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop', desc: 'Fast Qi wireless charging pad for devices'},
  {id: 'e014', name: 'Apple USB-C to Lightning Cable', category: 'Electronics', price: 19.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', desc: 'Official Apple lightning charging cable'},
  {id: 'e015', name: 'BenQ ScreenBar Pro Light', category: 'Electronics', price: 109.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop', desc: 'Smart monitor light bar with auto brightness'},
  // Books
  {id: 'b001', name: 'The Midnight Library - Matt Haig', category: 'Books', price: 16.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop', desc: 'Explore infinite parallel lives in this magical story'},
  {id: 'b002', name: 'Atomic Habits - James Clear', category: 'Books', price: 18.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop', desc: 'Build better habits through tiny daily improvements'},
  {id: 'b003', name: 'Dune - Frank Herbert', category: 'Books', price: 19.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=300&fit=crop', desc: 'Epic sci-fi masterpiece of power and prophecy'},
  {id: 'b004', name: 'The Silent Patient - Alex Michaelides', category: 'Books', price: 15.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1495446815901-a7297e3ffe36?w=300&h=300&fit=crop', desc: 'Gripping psychological thriller with shocking twist'},
  {id: 'b005', name: 'How to Win Friends - Dale Carnegie', category: 'Books', price: 14.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop', desc: 'Timeless guide to social and professional success'},
  {id: 'b006', name: 'Project Hail Mary - Andy Weir', category: 'Books', price: 19.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop', desc: 'Thrilling space survival adventure with humor'},
  {id: 'b007', name: 'The Poppy War - R.F. Kuang', category: 'Books', price: 17.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=300&fit=crop', desc: 'Dark epic fantasy with shamanic magic'},
  {id: 'b008', name: 'Educated - Tara Westover', category: 'Books', price: 18.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1495446815901-a7297e3ffe36?w=300&h=300&fit=crop', desc: 'Inspiring memoir of education and resilience'},
  {id: 'b009', name: 'Piranesi - Susanna Clarke', category: 'Books', price: 16.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop', desc: 'Mysterious fantasy of architecture and memory'},
  {id: 'b010', name: 'Braiding Sweetgrass - Robin Kimmerer', category: 'Books', price: 19.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop', desc: 'Indigenous wisdom about nature and gratitude'},
  {id: 'b011', name: 'The Martian - Andy Weir', category: 'Books', price: 15.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=300&fit=crop', desc: 'Survival and ingenuity on the red planet'},
  {id: 'b012', name: 'Verity - Colleen Hoover', category: 'Books', price: 16.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1495446815901-a7297e3ffe36?w=300&h=300&fit=crop', desc: 'Twisted secrets and obsessive danger'},
  {id: 'b013', name: 'Klara and the Sun - Kazuo Ishiguro', category: 'Books', price: 18.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop', desc: 'AI companion story about love and meaning'},
  {id: 'b014', name: 'Lessons from History - Yuval Noah Harari', category: 'Books', price: 18.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop', desc: 'Understanding humanity through historical patterns'},
  {id: 'b015', name: 'The Invisible Life of Addie LaRue', category: 'Books', price: 17.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=300&fit=crop', desc: 'Dark bargain across centuries of forgotten life'},
  // Fashion
  {id: 'f001', name: 'Nike Air Force 1 White', category: 'Fashion', price: 119.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', desc: 'Iconic white canvas sneakers for any occasion'},
  {id: 'f002', name: 'Levi\'s 501 Classic Jeans', category: 'Fashion', price: 89.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop', desc: 'Timeless classic blue jeans since 1873'},
  {id: 'f003', name: 'Adidas Ultraboost 22 Running', category: 'Fashion', price: 179.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', desc: 'Premium responsive cushioning for runners'},
  {id: 'f004', name: 'Merino Wool Hiking Socks', category: 'Fashion', price: 24.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1556821552-9f6103c556b2?w=300&h=300&fit=crop', desc: 'Thermal wool socks for all weather'},
  {id: 'f005', name: 'Schott Genuine Leather Jacket', category: 'Fashion', price: 499.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=300&h=300&fit=crop', desc: 'Premium Italian leather classic moto jacket'},
  {id: 'f006', name: 'Beechfield Winter Beanie', category: 'Fashion', price: 22.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', desc: 'Soft acrylic knit winter beanie'},
  {id: 'f007', name: 'Converse Chuck Taylor All Stars', category: 'Fashion', price: 59.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', desc: 'Vintage style canvas sneakers'},
  {id: 'f008', name: 'Lululemon Align Yoga Pants', category: 'Fashion', price: 128.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1506629082847-11d3e392e0b5?w=300&h=300&fit=crop', desc: 'Premium nulu fabric yoga pants'},
  {id: 'f009', name: 'Nike Dri-FIT Training Tank', category: 'Fashion', price: 34.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1506629082847-11d3e392e0b5?w=300&h=300&fit=crop', desc: 'Moisture-wicking athletic tank top'},
  {id: 'f010', name: 'New Era MLB Baseball Cap', category: 'Fashion', price: 39.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', desc: 'Official licensed baseball cap'},
  {id: 'f011', name: 'Ray-Ban Wayfarer Sunglasses', category: 'Fashion', price: 150.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', desc: 'Classic UV protection wayfarer style'},
  {id: 'f012', name: 'Cashmere Crew Neck Sweater', category: 'Fashion', price: 199.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', desc: 'Pure cashmere luxury sweater'},
  {id: 'f013', name: 'Allen Edmonds Oxfords', category: 'Fashion', price: 395.00, rating: 4.9, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', desc: 'Handcrafted American leather dress shoes'},
  {id: 'f014', name: 'Hermès Silk Scarf', category: 'Fashion', price: 365.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', desc: 'Classic French luxury silk scarf'},
  {id: 'f015', name: 'The North Face Borealis Backpack', category: 'Fashion', price: 139.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', desc: 'Durable outdoor hiking backpack'},
  // Home & Garden
  {id: 'h001', name: 'Philips Hue Smart LED Lamp', category: 'Home', price: 79.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1565182999555-2142541466c1?w=300&h=300&fit=crop', desc: '16M color smart lighting system'},
  {id: 'h002', name: 'Luxury Memory Foam Pillow', category: 'Home', price: 99.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=300&h=300&fit=crop', desc: 'Ergonomic neck support pillow'},
  {id: 'h003', name: 'Nespresso Vertuo Coffee Maker', category: 'Home', price: 199.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=300&h=300&fit=crop', desc: 'Premium automatic coffee maker'},
  {id: 'h004', name: 'Dyson Pure Cool Air Purifier', category: 'Home', price: 299.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1591369822635-bc8b8e6812f9?w=300&h=300&fit=crop', desc: 'HEPA filter with tower fan'},
  {id: 'h005', name: 'Moroccan Entry Door Mat', category: 'Home', price: 34.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1574180215519-08e2ffc2f518?w=300&h=300&fit=crop', desc: 'Welcome mat with grip backing'},
  {id: 'h006', name: 'Karlsson Minimalist Wall Clock', category: 'Home', price: 59.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1533975519385-d448a9f9acc8?w=300&h=300&fit=crop', desc: 'Scandinavian design wall clock'},
  {id: 'h007', name: 'Brooklinen Luxe Bed Sheets', category: 'Home', price: 189.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1595152852002-eaded945ec1d?w=300&h=300&fit=crop', desc: 'Premium Egyptian cotton sheets'},
  {id: 'h008', name: 'Umbra Curtain Rod Black', category: 'Home', price: 49.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1549453175-e6cf26e81adf?w=300&h=300&fit=crop', desc: 'Modern adjustable curtain rod'},
  {id: 'h009', name: 'West Elm Ceramic Plant Pot', category: 'Home', price: 39.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1585697571295-3bf75d5fac9d?w=300&h=300&fit=crop', desc: 'Contemporary ceramic planter'},
  {id: 'h010', name: 'Safavieh Persian Wool Rug', category: 'Home', price: 249.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1595152852002-eaded945ec1d?w=300&h=300&fit=crop', desc: 'Handwoven 5x7 area rug'},
  {id: 'h011', name: 'Stainless Steel Trash Bin 13gal', category: 'Home', price: 49.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1585697571295-3bf75d5fac9d?w=300&h=300&fit=crop', desc: 'Modern motion-sensor trash bin'},
  {id: 'h012', name: 'Voluspa Candle Luxury Blend', category: 'Home', price: 89.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1626533620384-37cf18b47d2f?w=300&h=300&fit=crop', desc: 'Premium scented candles'},
  {id: 'h013', name: 'IKEA Kallax 5-Shelf Unit', category: 'Home', price: 129.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=300&h=300&fit=crop', desc: 'Modular shelving system'},
  {id: 'h014', name: 'Wayfair Decorative Wall Mirror', category: 'Home', price: 79.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1533975519385-d448a9f9acc8?w=300&h=300&fit=crop', desc: 'Ornate wall hanging mirror'},
  {id: 'h015', name: 'Le Creuset Spice Rack Set', category: 'Home', price: 89.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=300&h=300&fit=crop', desc: 'Wooden spice rack with jars'},
  // Sports & Outdoors
  {id: 's001', name: 'Manduka ProLite Yoga Mat', category: 'Sports', price: 89.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1599301881974-fc3ee315a587?w=300&h=300&fit=crop', desc: 'Professional yoga mat with lifetime warranty'},
  {id: 's002', name: 'Bowflex SelectTech Dumbbells', category: 'Sports', price: 299.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1638536532686-d7760db17883?w=300&h=300&fit=crop', desc: 'Adjustable 2-75lb dumbbell system'},
  {id: 's003', name: 'TheraBand Resistance Band Set', category: 'Sports', price: 49.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1599301881974-fc3ee315a587?w=300&h=300&fit=crop', desc: 'Professional resistance bands'},
  {id: 's004', name: 'The North Face Gym Duffel Bag', category: 'Sports', price: 129.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', desc: 'Waterproof 71L duffel bag'},
  {id: 's005', name: 'Crossrope Smart Jump Rope', category: 'Sports', price: 34.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1599301881974-fc3ee315a587?w=300&h=300&fit=crop', desc: 'Smart jump rope with app tracking'},
  {id: 's006', name: 'Bell Sanction MIPS Bike Helmet', category: 'Sports', price: 149.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1535243749881-a08ef94671bc?w=300&h=300&fit=crop', desc: 'Safety certified MTB helmet'},
  {id: 's007', name: 'Wilson Pro Staff Tennis Racket', category: 'Sports', price: 199.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?w=300&h=300&fit=crop', desc: 'Professional tournament racket'},
  {id: 's008', name: 'Adidas Official Soccer Ball', category: 'Sports', price: 79.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1540747913ee8c63d727def9a1a2c48c8fda1d9a?w=300&h=300&fit=crop', desc: 'FIFA approved official ball'},
  {id: 's009', name: 'Coleman 4 Season Camping Tent', category: 'Sports', price: 249.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=300&h=300&fit=crop', desc: 'Weather-resistant camping tent'},
  {id: 's010', name: 'Osprey Atmos 65L Backpack', category: 'Sports', price: 229.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', desc: 'Premium 65L hiking backpack'},
  {id: 's011', name: 'Hydro Flask 32oz Insulated Bottle', category: 'Sports', price: 44.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1602143407151-7e406cab6869?w=300&h=300&fit=crop', desc: 'Double-wall insulated water bottle'},
  {id: 's012', name: 'Spalding NBA Official Basketball', category: 'Sports', price: 59.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1546519638-68711109d298?w=300&h=300&fit=crop', desc: 'Official NBA rubber basketball'},
  {id: 's013', name: 'Speedo Hydrosity Swimming Goggles', category: 'Sports', price: 24.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1551492735-fc1a0ceb0efb?w=300&h=300&fit=crop', desc: 'Anti-fog UV protection goggles'},
  {id: 's014', name: 'Santa Cruz Pro Skateboard Deck', category: 'Sports', price: 139.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300&h=300&fit=crop', desc: 'Professional grade skateboard'},
  {id: 's015', name: 'Moxi Roller Skates Adjustable', category: 'Sports', price: 179.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1547447207-2e4e70c370a2?w=300&h=300&fit=crop', desc: 'Customizable roller skates'},
  // Toys & Games
  {id: 't001', name: 'Hasbro Monopoly Classic Game', category: 'Toys', price: 19.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1570303008558-f2bb5f922c31?w=300&h=300&fit=crop', desc: 'Classic board game for family fun'},
  {id: 't002', name: 'LEGO Star Wars Millennium Falcon', category: 'Toys', price: 159.99, rating: 4.9, image: 'https://images.unsplash.com/photo-1613522201930-70a4f7f64a07?w=300&h=300&fit=crop', desc: '1351-piece Star Wars set'},
  {id: 't003', name: 'Cobble Hill Starry Night Puzzle', category: 'Toys', price: 19.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1606856110002-d0991ce78118?w=300&h=300&fit=crop', desc: '1000-piece van Gogh puzzle'},
  {id: 't004', name: 'Hasbro Marvel Legends Figures', category: 'Toys', price: 24.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop', desc: '6-inch collectible figures'},
  {id: 't005', name: 'Spinner Pro Fidget Spinner', category: 'Toys', price: 12.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1637723788146-6e26f6d22b2f?w=300&h=300&fit=crop', desc: 'Precision bearing fidget spinner'},
  {id: 't006', name: 'US Playing Card Company Bicycle', category: 'Toys', price: 4.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop', desc: 'Professional poker cards'},
  {id: 't007', name: 'Auldey Trick Yo-Yo Pro', category: 'Toys', price: 14.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1637723788146-6e26f6d22b2f?w=300&h=300&fit=crop', desc: 'Professional aluminum yo-yo'},
  {id: 't008', name: 'Rubik\'s 3x3 Cube Speed', category: 'Toys', price: 8.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1636627658892-5f2c2d5e5c3d?w=300&h=300&fit=crop', desc: 'Official Rubik\'s speed cube'},
  {id: 't009', name: 'DJI Mini 2 SE Drone', category: 'Toys', price: 249.00, rating: 4.8, image: 'https://images.unsplash.com/photo-1579824343228-3b5bfb9dd1e8?w=300&h=300&fit=crop', desc: '2.7K camera lightweight drone'},
  {id: 't010', name: 'Traxxas TRX-4 RC Off-Road', category: 'Toys', price: 299.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop', desc: 'All-terrain RC crawler'},
  {id: 't011', name: 'Waboba Boomerang Float', category: 'Toys', price: 14.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1637723788146-6e26f6d22b2f?w=300&h=300&fit=crop', desc: 'Floating foam boomerang'},
  {id: 't012', name: 'Prism Kite Tech Stunt Kite', category: 'Toys', price: 29.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1609027291293-53a3eb0159d0?w=300&h=300&fit=crop', desc: 'Quad-line stunt kite'},
  {id: 't013', name: 'Chessex Polyhedral Dice Set', category: 'Toys', price: 12.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop', desc: '7-piece RPG dice set'},
  {id: 't014', name: 'Slinky Original Metal', category: 'Toys', price: 8.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1637723788146-6e26f6d22b2f?w=300&h=300&fit=crop', desc: 'Classic metal spring toy'},
  {id: 't015', name: 'Pokémon Trading Card Booster', category: 'Toys', price: 3.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop', desc: '10 collectible cards per pack'},
];

// Generate more products with rotating images
const imagePool = [
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1638536532686-d7760db17883?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1599301881974-fc3ee315a587?w=300&h=300&fit=crop',
];

const productNames = {
  'Electronics': [
    'iPad Pro 12.9" 256GB', 'iPhone 15 Pro', 'MacBook Air M2', 'AirPods Max',
    'Apple Watch Series 9', 'Magic Keyboard', 'Dell XPS 15', 'RTX 4080 GPU',
    'Intel Core i9', 'AMD Ryzen 7', 'Kingston NV2 SSD', 'Crucial RAM 32GB',
    'Asus ROG Monitor', 'LG UltraWide', 'NVIDIA GeForce RTX'
  ],
  'Books': [
    'The Seven Husbands of Evelyn Hugo', 'Fourth Wing', 'Happy Place',
    'Holly', 'Iron Widow', 'The Five-Star Weekend', 'Remarkably Bright',
    'Lessons in Chemistry', 'Carrie Soto is Back', 'The Woman in Cabin 10',
    'Still Me', 'Hunting Ground', 'The Silent Companions', 'The Book of Lost Names'
  ],
  'Fashion': [
    'Tommy Hilfiger Polo', 'Ralph Lauren Shirt', 'GUESS Jeans', 'Hugo Boss Suit',
    'Calvin Klein Underwear', 'Armani Exchange Watch', 'Coach Handbag', 'Coach Wallet',
    'Michael Kors Bag', 'DKNY Jacket', 'Nautica Sweater', 'Columbia Jacket',
    'Timberland Boots', 'Vans Sneakers', 'Puma Track Pants'
  ],
  'Home': [
    'IKEA Billy Bookshelf', 'IKEA Malm Bed', 'West Elm Sofa', 'CB2 Coffee Table',
    'Wayfair Pendant Light', 'Amazon Basics Pillow', 'Casper Mattress Topper',
    'KitchenAid Blender', 'Instant Pot Pressure Cooker', 'Ninja Air Fryer',
    'Dyson V15 Vacuum', 'Shark Steam Mop', 'Bissell Carpet Cleaner'
  ],
  'Sports': [
    'Fitbit Charge 5', 'Garmin Fenix 7', 'Apple Watch Ultra', 'Peloton Bike',
    'NordicTrack Treadmill', 'Concept2 Rowing Machine', 'TRX Suspension System',
    'Rogue Power Rack', 'Kettlebell Collection', 'Medicine Ball 20lb',
    'Foam Roller Pro', 'Lacrosse Ball Set', 'Resistance Loop Bands'
  ],
  'Toys': [
    'Hot Wheels Track Set', 'Mattel Barbie Dreamhouse', 'Furby Interactive',
    'Nintendo Switch Pro', 'PlayStation 5 Controller', 'Xbox Series X Bundle',
    'Fisher-Price Toys', 'Melissa & Doug Blocks', 'K\'NEX Building Set',
    'Magna-Tiles 3D', 'Crazy Aaron\'s Putty', 'Squishmallows Collection'
  ]
};

const categories = ['Electronics', 'Books', 'Fashion', 'Home', 'Sports', 'Toys'];
for (let i = 0; i < 140; i++) {
  const cat = categories[Math.floor(Math.random() * categories.length)];
  const image = imagePool[i % imagePool.length];
  const names = productNames[cat];
  const name = names[i % names.length];
  products.push({
    id: `prod${i}`,
    name: name,
    category: cat,
    price: Math.random() * 200 + 10,
    rating: Math.random() * 2 + 3,
    image: image,
    desc: `Premium quality ${name.toLowerCase()}`
  });
}

// App state
let cart = JSON.parse(localStorage.getItem('shophub-cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('shophub-wishlist') || '[]');
let orders = JSON.parse(localStorage.getItem('shophub-orders') || '[]');
let currentProduct = null;

// Initialize
document.addEventListener('DOMContentLoaded', function(){
  initNavigation();
  initTheme();
  initSearch();
  initFilters();
  initButtons();
  renderHome();
  updateCounts();
});

// Navigation
function initNavigation() {
  document.querySelectorAll('.nav-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const section = btn.dataset.section;
      if (section === 'home') renderHome();
      else if (section === 'electronics') renderCategory('Electronics');
      else if (section === 'books') renderCategory('Books');
      else if (section === 'fashion') renderCategory('Fashion');
      else if (section === 'home-garden') renderCategory('Home');
      else if (section === 'sports') renderCategory('Sports');
      else if (section === 'deals') renderDeals();
      else if (section === 'cart') renderCart();
      else if (section === 'orders') renderOrders();
      showSection(section);
    });
  });
}

function showSection(id) {
  document.querySelectorAll('main > section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

// Theme
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('shophub-theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = 'Theme: Dark';
  }
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('shophub-theme', 'light');
      themeToggle.textContent = 'Theme: Light';
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('shophub-theme', 'dark');
      themeToggle.textContent = 'Theme: Dark';
    }
  });
}

// Search
function initSearch() {
  document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();
    renderSearch(query);
    showSection('search');
  });
  document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      document.getElementById('searchBtn').click();
    }
  });
}

function renderSearch(query) {
  const results = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.desc.toLowerCase().includes(query)
  );
  const grid = document.getElementById('searchResults');
  grid.innerHTML = results.map(p => createProductCard(p)).join('');
  addProductCardListeners();
}

// Filters
function initFilters() {
  document.getElementById('applyFilters').addEventListener('click', applyFilters);
  document.getElementById('clearFilters').addEventListener('click', () => {
    document.getElementById('categoryFilter').value = '';
    document.getElementById('minPrice').value = '';
    document.getElementById('maxPrice').value = '';
    document.getElementById('ratingFilter').value = '';
    applyFilters();
  });
}

function applyFilters() {
  const category = document.getElementById('categoryFilter').value;
  const minPrice = parseFloat(document.getElementById('minPrice').value) || 0;
  const maxPrice = parseFloat(document.getElementById('maxPrice').value) || Infinity;
  const minRating = parseFloat(document.getElementById('ratingFilter').value) || 0;

  let filtered = products.filter(p => 
    (!category || p.category === category) &&
    p.price >= minPrice &&
    p.price <= maxPrice &&
    p.rating >= minRating
  );

  const grid = document.getElementById('searchResults');
  grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
  addProductCardListeners();
  showSection('search');
}

// Home
function renderHome() {
  const featured = products.sort(() => Math.random() - 0.5).slice(0, 12);
  document.getElementById('featuredGrid').innerHTML = featured.map(p => createProductCard(p)).join('');
  addProductCardListeners();
}

// Category pages
function renderCategory(category) {
  const filtered = products.filter(p => p.category === category);
  const sectionId = {
    'Electronics': 'electronicsProducts',
    'Books': 'booksProducts',
    'Fashion': 'fashionProducts',
    'Home': 'homeProducts',
    'Sports': 'sportsProducts',
    'Toys': 'toysProducts'
  }[category];
  
  if (document.getElementById(sectionId)) {
    document.getElementById(sectionId).innerHTML = filtered.map(p => createProductCard(p)).join('');
    addProductCardListeners();
  }
}

function filterByCategory(cat) {
  renderCategory(cat);
  const sectionMap = {
    'Electronics': 'electronics',
    'Books': 'books',
    'Fashion': 'fashion',
    'Home': 'home-garden',
    'Sports': 'sports',
    'Toys': 'deals'
  };
  showSection(sectionMap[cat] || 'electronics');
}

// Deals
function renderDeals() {
  const deals = products.filter(p => p.price < 50).sort(() => Math.random() - 0.5).slice(0, 20);
  document.getElementById('dealsProducts').innerHTML = deals.map(p => createProductCard(p)).join('');
  addProductCardListeners();
}

// Product card
function createProductCard(product) {
  const stars = '⭐'.repeat(Math.floor(product.rating));
  return `
    <div class="product-card" data-id="${product.id}">
      <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300?text=Product'">
      <div class="product-name">${product.name}</div>
      <div class="product-rating">${stars} ${product.rating.toFixed(1)}</div>
      <div class="product-price">$${product.price.toFixed(2)}</div>
      <button class="product-btn" data-id="${product.id}">Add to Cart</button>
    </div>
  `;
}

function addProductCardListeners() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('product-btn')) {
        const id = card.dataset.id;
        currentProduct = products.find(p => p.id === id);
        if (currentProduct) showProductDetail();
      }
    });
  });
  document.querySelectorAll('.product-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const product = products.find(p => p.id === id);
      addToCart(product);
    });
  });
}

// Product detail
function showProductDetail() {
  if (!currentProduct) return;
  const detailImage = document.getElementById('detailImage');
  detailImage.innerHTML = `<img src="${currentProduct.image}" alt="${currentProduct.name}" style="max-width: 100%; height: auto; border-radius: 8px;" onerror="this.src='https://via.placeholder.com/400?text=Product'">`;
  document.getElementById('detailName').textContent = currentProduct.name;
  const stars = '⭐'.repeat(Math.floor(currentProduct.rating));
  document.getElementById('detailRating').innerHTML = `${stars} ${currentProduct.rating.toFixed(1)} (${Math.floor(Math.random() * 5000) + 100} reviews)`;
  document.getElementById('detailCategory').textContent = `Category: ${currentProduct.category}`;
  document.getElementById('detailDesc').textContent = currentProduct.desc;
  document.getElementById('detailPrice').textContent = `$${currentProduct.price.toFixed(2)}`;
  
  const discount = Math.floor(Math.random() * 30);
  const originalPrice = currentProduct.price / (1 - discount / 100);
  document.getElementById('detailOriginal').textContent = `$${originalPrice.toFixed(2)}`;
  document.getElementById('detailDiscount').textContent = `${discount}% OFF`;
  
  document.getElementById('detailStock').textContent = `✅ In Stock (${Math.floor(Math.random() * 50) + 10} available)`;
  document.getElementById('detailQty').value = '1';

  // Reviews
  const reviews = [
    {author: 'John D.', rating: 5, text: 'Excellent product! Highly recommend.'},
    {author: 'Sarah M.', rating: 4, text: 'Great quality, fast shipping.'},
    {author: 'Mike T.', rating: 5, text: 'Perfect! Exactly as described.'},
  ];
  document.getElementById('detailReviews').innerHTML = reviews.map(r => `
    <div class="review-item">
      <div class="review-author">${r.author}</div>
      <div class="review-rating">${'⭐'.repeat(r.rating)} ${r.rating} stars</div>
      <div class="review-text">${r.text}</div>
    </div>
  `).join('');

  document.getElementById('addToCartBtn').onclick = () => addToCart(currentProduct);
  document.getElementById('addToWishlistBtn').onclick = () => addToWishlist(currentProduct);

  showSection('product-detail');
}

// Cart
function addToCart(product) {
  const qty = parseInt(document.getElementById('detailQty')?.value || '1') || 1;
  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({...product, qty});
  }
  localStorage.setItem('shophub-cart', JSON.stringify(cart));
  updateCounts();
  showToast(`Added ${product.name} to cart!`);
}

function renderCart() {
  if (cart.length === 0) {
    document.getElementById('cartEmpty').style.display = 'block';
    document.getElementById('cartContent').style.display = 'none';
    return;
  }
  document.getElementById('cartEmpty').style.display = 'none';
  document.getElementById('cartContent').style.display = 'block';

  const itemsHtml = cart.map((item, idx) => `
    <div class="cart-item">
      <div style="font-size:40px;display:flex;align-items:center;justify-content:center;">${item.emoji}</div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>$${item.price.toFixed(2)} x ${item.qty}</p>
        <p style="font-weight:bold;">$${(item.price * item.qty).toFixed(2)}</p>
      </div>
      <button class="cart-item-remove" data-idx="${idx}">Remove</button>
    </div>
  `).join('');

  document.getElementById('cartItems').innerHTML = itemsHtml;
  document.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx);
      cart.splice(idx, 1);
      localStorage.setItem('shophub-cart', JSON.stringify(cart));
      updateCounts();
      renderCart();
    });
  });

  updateCartTotal();
}

function updateCartTotal() {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;
  document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('cartTax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `$${total.toFixed(2)}`;
}

document.addEventListener('click', function(e) {
  if (e.target.id === 'checkoutBtn') {
    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0) * 1.1;
    const order = {
      id: `ORD${Date.now()}`,
      date: new Date().toLocaleDateString(),
      total: total.toFixed(2),
      items: [...cart]
    };
    orders.push(order);
    localStorage.setItem('shophub-orders', JSON.stringify(orders));
    showToast(`Order placed! Total: $${total.toFixed(2)} 🎉`);
    cart = [];
    localStorage.setItem('shophub-cart', JSON.stringify(cart));
    updateCounts();
    setTimeout(() => {
      renderCart();
      showSection('home');
    }, 1500);
  }
});

// Wishlist
function addToWishlist(product) {
  const exists = wishlist.find(p => p.id === product.id);
  if (!exists) {
    wishlist.push(product);
    localStorage.setItem('shophub-wishlist', JSON.stringify(wishlist));
    updateCounts();
    showToast(`Added to wishlist! ❤️`);
  } else {
    showToast('Already in wishlist');
  }
}

// Orders
function renderOrders() {
  if (orders.length === 0) {
    document.getElementById('ordersEmpty').style.display = 'block';
    document.getElementById('ordersContent').style.display = 'none';
    return;
  }
  document.getElementById('ordersEmpty').style.display = 'none';
  document.getElementById('ordersContent').style.display = 'block';

  const ordersHtml = orders.map(order => `
    <div class="order-item">
      <h4>${order.id}</h4>
      <div class="order-details">
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Items:</strong> ${order.items.length}</p>
        <p><strong>Total:</strong> $${order.total}</p>
      </div>
    </div>
  `).join('');

  document.getElementById('ordersList').innerHTML = ordersHtml;
}

// Buttons
function initButtons() {
  const cartBtn = document.getElementById('cartBtn');
  const wishlistBtn = document.getElementById('wishlistBtn');
  const accountBtn = document.getElementById('accountBtn');

  if (cartBtn) {
    cartBtn.addEventListener('click', (e) => {
      e.preventDefault();
      renderCart();
      showSection('cart');
    });
  }

  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', (e) => {
      e.preventDefault();
      renderWishlist();
      showSection('wishlist');
    });
  }

  if (accountBtn) {
    accountBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showSection('account');
    });
  }
}

function renderWishlist() {
  const wishlistEmpty = document.getElementById('wishlistEmpty');
  const wishlistContent = document.getElementById('wishlistContent');
  
  if (!wishlistEmpty || !wishlistContent) return;

  if (wishlist.length === 0) {
    wishlistEmpty.style.display = 'block';
    wishlistContent.style.display = 'none';
    return;
  }
  wishlistEmpty.style.display = 'none';
  wishlistContent.style.display = 'block';
  
  const itemsHtml = document.getElementById('wishlistItems');
  if (itemsHtml) {
    itemsHtml.innerHTML = wishlist.map(p => createProductCard(p)).join('');
    addProductCardListeners();
  }
}

// Utils
function updateCounts() {
  document.getElementById('cartCount').textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('wishlistCount').textContent = wishlist.length;
}

function showToast(text) {
  const toast = document.getElementById('toast');
  toast.textContent = text;
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 2000);
}
