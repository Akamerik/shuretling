// Product Database with Real Images
const products = [
  // Electronics
  {id: 'e001', name: 'Wireless Headphones', category: 'Electronics', price: 79.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop', desc: 'High-quality Bluetooth headphones with 30hr battery'},
  {id: 'e002', name: 'USB-C Cable', category: 'Electronics', price: 12.99, rating: 4.2, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', desc: 'Fast charging 2m USB-C cable'},
  {id: 'e003', name: '4K Webcam', category: 'Electronics', price: 89.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1598940244212-bd2d36e14261?w=300&h=300&fit=crop', desc: 'Crystal clear 4K streaming camera'},
  {id: 'e004', name: 'Portable SSD 1TB', category: 'Electronics', price: 129.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=300&h=300&fit=crop', desc: 'Ultra-fast portable storage'},
  {id: 'e005', name: 'Wireless Mouse', category: 'Electronics', price: 34.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop', desc: 'Ergonomic wireless mouse'},
  {id: 'e006', name: 'USB Hub', category: 'Electronics', price: 39.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', desc: '7-port USB hub with power supply'},
  {id: 'e007', name: 'Mechanical Keyboard', category: 'Electronics', price: 129.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1587829191301-db59970198ef?w=300&h=300&fit=crop', desc: 'RGB mechanical gaming keyboard'},
  {id: 'e008', name: 'Gaming Mouse Pad', category: 'Electronics', price: 24.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop', desc: 'Large extended gaming mouse pad'},
  {id: 'e009', name: 'Laptop Stand', category: 'Electronics', price: 44.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop', desc: 'Adjustable aluminum laptop stand'},
  {id: 'e010', name: 'Phone Stand', category: 'Electronics', price: 19.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1610708822869-c2a05141a7c0?w=300&h=300&fit=crop', desc: 'Adjustable phone stand for desk'},
  {id: 'e011', name: 'HDMI Cable', category: 'Electronics', price: 14.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', desc: '2K HDMI 2.0 cable 3m'},
  {id: 'e012', name: 'Power Bank 20000mAh', category: 'Electronics', price: 49.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop', desc: 'Fast charging power bank'},
  {id: 'e013', name: 'Wireless Charger', category: 'Electronics', price: 29.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop', desc: 'Qi wireless charging pad'},
  {id: 'e014', name: 'USB-A to Lightning', category: 'Electronics', price: 12.99, rating: 4.2, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', desc: 'Apple certified charging cable'},
  {id: 'e015', name: 'Monitor Light Bar', category: 'Electronics', price: 99.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=300&h=300&fit=crop', desc: 'Smart monitor light bar'},
  // Books
  {id: 'b001', name: 'The Midnight Library', category: 'Books', price: 16.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop', desc: 'Fiction - Parallel lives adventure'},
  {id: 'b002', name: 'Atomic Habits', category: 'Books', price: 18.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop', desc: 'Self-help - Build better habits'},
  {id: 'b003', name: 'Dune', category: 'Books', price: 17.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=300&fit=crop', desc: 'Sci-fi classic - Epic adventure'},
  {id: 'b004', name: 'The Silent Patient', category: 'Books', price: 15.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1495446815901-a7297e3ffe36?w=300&h=300&fit=crop', desc: 'Mystery thriller - Gripping plot'},
  {id: 'b005', name: 'How to Win Friends', category: 'Books', price: 14.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop', desc: 'Classic self-help - Social skills'},
  {id: 'b006', name: 'Project Hail Mary', category: 'Books', price: 19.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop', desc: 'Sci-fi - Space survival'},
  {id: 'b007', name: 'The Poppy War', category: 'Books', price: 17.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=300&fit=crop', desc: 'Fantasy - Dark epic'},
  {id: 'b008', name: 'Educated', category: 'Books', price: 18.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1495446815901-a7297e3ffe36?w=300&h=300&fit=crop', desc: 'Memoir - Inspiring true story'},
  {id: 'b009', name: 'Piranesi', category: 'Books', price: 16.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop', desc: 'Fantasy - Mysterious world'},
  {id: 'b010', name: 'Braiding Sweetgrass', category: 'Books', price: 19.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop', desc: 'Nature - Indigenous wisdom'},
  {id: 'b011', name: 'The Martian', category: 'Books', price: 15.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=300&fit=crop', desc: 'Sci-fi - Survival on Mars'},
  {id: 'b012', name: 'Verity', category: 'Books', price: 16.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1495446815901-a7297e3ffe36?w=300&h=300&fit=crop', desc: 'Thriller - Twisted secrets'},
  {id: 'b013', name: 'Klara and the Sun', category: 'Books', price: 18.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop', desc: 'Sci-fi - AI companion'},
  {id: 'b014', name: 'Dune Part 2', category: 'Books', price: 16.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=300&fit=crop', desc: 'Inspirational fiction'},
  {id: 'b015', name: 'A Brief History', category: 'Books', price: 17.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=300&h=300&fit=crop', desc: 'Science - Time explained'},
  // Fashion
  {id: 'f001', name: 'Casual T-Shirt', category: 'Fashion', price: 24.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', desc: 'Comfortable cotton t-shirt'},
  {id: 'f002', name: 'Jeans Blue', category: 'Fashion', price: 59.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1542272604-787c62d465d1?w=300&h=300&fit=crop', desc: 'Classic blue jeans'},
  {id: 'f003', name: 'Running Shoes', category: 'Fashion', price: 119.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', desc: 'Professional running sneakers'},
  {id: 'f004', name: 'Cotton Socks Pack', category: 'Fashion', price: 14.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1556821552-9f6103c556b2?w=300&h=300&fit=crop', desc: '6 pairs comfortable socks'},
  {id: 'f005', name: 'Leather Jacket', category: 'Fashion', price: 199.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=300&h=300&fit=crop', desc: 'Genuine leather jacket'},
  {id: 'f006', name: 'Winter Beanie', category: 'Fashion', price: 19.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', desc: 'Warm knit beanie'},
  {id: 'f007', name: 'Casual Sneakers', category: 'Fashion', price: 79.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', desc: 'White canvas sneakers'},
  {id: 'f008', name: 'Yoga Pants', category: 'Fashion', price: 54.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1506629082847-11d3e392e0b5?w=300&h=300&fit=crop', desc: 'Stretchy yoga leggings'},
  {id: 'f009', name: 'Tank Top', category: 'Fashion', price: 19.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1506629082847-11d3e392e0b5?w=300&h=300&fit=crop', desc: 'Sleeveless athletic tank'},
  {id: 'f010', name: 'Baseball Cap', category: 'Fashion', price: 24.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', desc: 'Classic baseball cap'},
  {id: 'f011', name: 'Sunglasses', category: 'Fashion', price: 89.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop', desc: 'UV protection sunglasses'},
  {id: 'f012', name: 'Cotton Sweater', category: 'Fashion', price: 64.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', desc: 'Cozy knit sweater'},
  {id: 'f013', name: 'Dress Shoes', category: 'Fashion', price: 99.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop', desc: 'Leather dress shoes'},
  {id: 'f014', name: 'Scarf Wool', category: 'Fashion', price: 39.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop', desc: 'Warm wool scarf'},
  {id: 'f015', name: 'Backpack', category: 'Fashion', price: 74.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', desc: 'Durable canvas backpack'},
  // Home & Garden
  {id: 'h001', name: 'LED Desk Lamp', category: 'Home', price: 39.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1565182999555-2142541466c1?w=300&h=300&fit=crop', desc: 'Adjustable LED desk lamp'},
  {id: 'h002', name: 'Throw Pillow', category: 'Home', price: 24.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=300&h=300&fit=crop', desc: 'Decorative throw pillow'},
  {id: 'h003', name: 'Coffee Maker', category: 'Home', price: 79.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=300&h=300&fit=crop', desc: '12-cup drip coffee maker'},
  {id: 'h004', name: 'Air Purifier', category: 'Home', price: 129.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1591369822635-bc8b8e6812f9?w=300&h=300&fit=crop', desc: 'HEPA air purifier'},
  {id: 'h005', name: 'Door Mat', category: 'Home', price: 19.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1574180215519-08e2ffc2f518?w=300&h=300&fit=crop', desc: 'Non-slip welcome mat'},
  {id: 'h006', name: 'Wall Clock', category: 'Home', price: 29.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1533975519385-d448a9f9acc8?w=300&h=300&fit=crop', desc: 'Modern wall clock'},
  {id: 'h007', name: 'Bed Sheets Set', category: 'Home', price: 59.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1595152852002-eaded945ec1d?w=300&h=300&fit=crop', desc: 'Soft cotton bed sheets'},
  {id: 'h008', name: 'Curtain Rod', category: 'Home', price: 34.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1549453175-e6cf26e81adf?w=300&h=300&fit=crop', desc: 'Adjustable curtain rod'},
  {id: 'h009', name: 'Plant Pot', category: 'Home', price: 14.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1585697571295-3bf75d5fac9d?w=300&h=300&fit=crop', desc: 'Ceramic flower pot'},
  {id: 'h010', name: 'Area Rug', category: 'Home', price: 89.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1595152852002-eaded945ec1d?w=300&h=300&fit=crop', desc: '5x7 wool area rug'},
  {id: 'h011', name: 'Trash Can', category: 'Home', price: 24.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1585697571295-3bf75d5fac9d?w=300&h=300&fit=crop', desc: 'Stainless steel trash bin'},
  {id: 'h012', name: 'Candle Set', category: 'Home', price: 34.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1626533620384-37cf18b47d2f?w=300&h=300&fit=crop', desc: 'Scented candle collection'},
  {id: 'h013', name: 'Shelf Unit', category: 'Home', price: 129.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=300&h=300&fit=crop', desc: '5-tier storage shelf'},
  {id: 'h014', name: 'Mirror', category: 'Home', price: 49.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1533975519385-d448a9f9acc8?w=300&h=300&fit=crop', desc: 'Wall hanging mirror'},
  {id: 'h015', name: 'Spice Rack', category: 'Home', price: 29.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=300&h=300&fit=crop', desc: 'Wooden spice rack'},
  // Sports & Outdoors
  {id: 's001', name: 'Yoga Mat', category: 'Sports', price: 29.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1599301881974-fc3ee315a587?w=300&h=300&fit=crop', desc: 'Non-slip yoga mat'},
  {id: 's002', name: 'Dumbbells Set', category: 'Sports', price: 79.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1638536532686-d7760db17883?w=300&h=300&fit=crop', desc: '5-20lbs dumbbell set'},
  {id: 's003', name: 'Resistance Bands', category: 'Sports', price: 19.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1599301881974-fc3ee315a587?w=300&h=300&fit=crop', desc: 'Set of 5 resistance loops'},
  {id: 's004', name: 'Gym Bag', category: 'Sports', price: 49.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', desc: 'Waterproof gym duffel'},
  {id: 's005', name: 'Jump Rope', category: 'Sports', price: 14.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1599301881974-fc3ee315a587?w=300&h=300&fit=crop', desc: 'Speed jump rope'},
  {id: 's006', name: 'Bike Helmet', category: 'Sports', price: 89.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1535243749881-a08ef94671bc?w=300&h=300&fit=crop', desc: 'Safety certified bike helmet'},
  {id: 's007', name: 'Tennis Racket', category: 'Sports', price: 99.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1554224311-beee415c201f?w=300&h=300&fit=crop', desc: 'Professional tennis racket'},
  {id: 's008', name: 'Soccer Ball', category: 'Sports', price: 29.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1540747913ee8c63d727def9a1a2c48c8fda1d9a?w=300&h=300&fit=crop', desc: 'Official soccer ball'},
  {id: 's009', name: 'Camping Tent', category: 'Sports', price: 149.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=300&h=300&fit=crop', desc: '2-person camping tent'},
  {id: 's010', name: 'Hiking Backpack', category: 'Sports', price: 119.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', desc: '40L hiking backpack'},
  {id: 's011', name: 'Water Bottle', category: 'Sports', price: 24.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1602143407151-7e406cab6869?w=300&h=300&fit=crop', desc: 'Insulated water bottle'},
  {id: 's012', name: 'Basketball', category: 'Sports', price: 34.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1546519638-68711109d298?w=300&h=300&fit=crop', desc: 'Official basketball'},
  {id: 's013', name: 'Swimming Goggles', category: 'Sports', price: 19.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1551492735-fc1a0ceb0efb?w=300&h=300&fit=crop', desc: 'Anti-fog goggles'},
  {id: 's014', name: 'Skateboard', category: 'Sports', price: 79.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=300&h=300&fit=crop', desc: 'Professional skateboard'},
  {id: 's015', name: 'Roller Skates', category: 'Sports', price: 99.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1547447207-2e4e70c370a2?w=300&h=300&fit=crop', desc: 'Adjustable roller skates'},
  // Toys & Games
  {id: 't001', name: 'Board Game Collection', category: 'Toys', price: 49.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1570303008558-f2bb5f922c31?w=300&h=300&fit=crop', desc: 'Classic board game set'},
  {id: 't002', name: 'LEGO Set 1000pc', category: 'Toys', price: 79.99, rating: 4.8, image: 'https://images.unsplash.com/photo-1613522201930-70a4f7f64a07?w=300&h=300&fit=crop', desc: 'Large LEGO building set'},
  {id: 't003', name: 'Puzzle 1000pc', category: 'Toys', price: 19.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1606856110002-d0991ce78118?w=300&h=300&fit=crop', desc: 'Scenic 1000 piece puzzle'},
  {id: 't004', name: 'Action Figures', category: 'Toys', price: 34.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop', desc: 'Marvel action figures'},
  {id: 't005', name: 'Fidget Spinner', category: 'Toys', price: 9.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1637723788146-6e26f6d22b2f?w=300&h=300&fit=crop', desc: 'Metal fidget spinner'},
  {id: 't006', name: 'Playing Cards', category: 'Toys', price: 14.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop', desc: 'Poker size deck cards'},
  {id: 't007', name: 'Yo-Yo', category: 'Toys', price: 12.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1637723788146-6e26f6d22b2f?w=300&h=300&fit=crop', desc: 'Professional yo-yo'},
  {id: 't008', name: 'Rubiks Cube', category: 'Toys', price: 8.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1636627658892-5f2c2d5e5c3d?w=300&h=300&fit=crop', desc: '3x3 Rubik\'s cube'},
  {id: 't009', name: 'Drone Mini', category: 'Toys', price: 129.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1579824343228-3b5bfb9dd1e8?w=300&h=300&fit=crop', desc: 'Mini drone with camera'},
  {id: 't010', name: 'Remote Car', category: 'Toys', price: 59.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&h=300&fit=crop', desc: 'RC off-road car'},
  {id: 't011', name: 'Boomerang', category: 'Toys', price: 14.99, rating: 4.4, image: 'https://images.unsplash.com/photo-1637723788146-6e26f6d22b2f?w=300&h=300&fit=crop', desc: 'Foam boomerang'},
  {id: 't012', name: 'Kite', category: 'Toys', price: 19.99, rating: 4.5, image: 'https://images.unsplash.com/photo-1609027291293-53a3eb0159d0?w=300&h=300&fit=crop', desc: 'Delta kite'},
  {id: 't013', name: 'Dice Set', category: 'Toys', price: 16.99, rating: 4.6, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop', desc: 'Polyhedral dice RPG set'},
  {id: 't014', name: 'Slinky', category: 'Toys', price: 9.99, rating: 4.3, image: 'https://images.unsplash.com/photo-1637723788146-6e26f6d22b2f?w=300&h=300&fit=crop', desc: 'Classic metal slinky'},
  {id: 't015', name: 'Trading Cards', category: 'Toys', price: 24.99, rating: 4.7, image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=300&h=300&fit=crop', desc: 'Collectible card set'},
];

// Generate more products with rotating images
const imagePool = [
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1507842217343-583f20270319?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1638536532686-d7760db17883?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1517668808822-9ebb02ae2a0e?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1599301881974-fc3ee315a587?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1593110241208-8deefb5a0841?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=300&fit=crop',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=300&h=300&fit=crop',
];

const categories = ['Electronics', 'Books', 'Fashion', 'Home', 'Sports', 'Toys'];
for (let i = 0; i < 140; i++) {
  const cat = categories[Math.floor(Math.random() * categories.length)];
  const image = imagePool[i % imagePool.length];
  products.push({
    id: `prod${i}`,
    name: `${cat} Product ${i + 1}`,
    category: cat,
    price: Math.random() * 200 + 10,
    rating: Math.random() * 2 + 3,
    image: image,
    desc: `High quality ${cat.toLowerCase()} product`
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
