

import { MenuItem } from './types';

const generateImageUrl = (itemName: string) => {
  const sanitizedName = encodeURIComponent(itemName.replace(/[^\w\s-]/gi, '').trim());
  return `https://picsum.photos/seed/${sanitizedName}/400/300`;
};

const menuRawData = `
Espresso, Single, 100
Espresso, Double,145
Americano, Single,140
Americano, Double, 180
Flavoured Americano,-,190
Espresso Macchiato,Single, 100
Espresso Macchiato,Double,145
Espresso Affogato, -, 160
Cafe Latte,-,170/210
Caramel Latte,-,220
Honey Latte,-,210
Chocolate Latte,-,220
Cappuccino,-,170/210
Flavoured Cappuccino,-,220
Muchaccino, -,220
Cafe Mocha, -, 220
Mocha Madness, -, 260
Caramel Macchiato, -,260
Hot Chocolate, -, 190
Hot lemon,-,80
Honey Hot Lemon,-,125
Ginger Hot Lemon with Honey,-,140
Steamed Milk,-,80
Flavoured Steamed Milk,-,140
Black Tea,-,55
Milk Tea, -, 70
Green Tea, Single, 90
Green Tea, Double, 110
Iced Americano,-,165
Iced Flavour Americano,-,200
Iced latte/Cappuccino,-,195
Iced Flavoured Latte/Cappuccino,-,230
Iced Caramel Macchiato, -,230
Iced Mocha, -, 230
Iced Mocha Madness,-,250
Ice Blended Coffee Frappe,-,285
Ice Blended Mocha Frappe, -,310
Ice Blended Choco-mint Frappe,-,310
Ice Blended Caramel Frappe,-,290
Ice Blended Oreo Frappe,-,290
Ice Blended Strawberry Frappe,-,290
Ice Blended Vanilla Frappe,-,290
Vanilla Milkshake, -, 185
Chocolate Milkshake,-,185
Strawberry Milkshake,-,185
Oreo Milkshake, -, 200
Caramel Milkshake,-,185
Plain/Sweet Lassi,-,160
Salt Lassi,-,160
Banana Lassi,-,200
Vanilla Lassi,-, 185
Chocolate Lassi,-,200
Mahi,-,130
Vanilla, Single,60
Vanilla, Double, 120
Chocolate,-,-
21st Love,-,-
Lemon Iced Tea, -, 165
Peach Iced Tea,-,165
Blended Lemonade, -, 165
Blended Mint Lemonade, -, 185
Mint Lime Refresher,-,195
Cucumber Lime Refresher,-,195
Mojito,,230
Pomegranate,-,325
Citrus limetta,-,225
Pineapple,-,225
Sugarcane,-,175
Apple,-,275
Orange,-,225
Watermelon, -, 200
Mixed Juice,-,235
Breakfast Set No.1,-,440
Breakfast Set No.2,-,440
Breakfast Set No.3,-,330
Fruit Salad,-,350
Egg Toast,-,185
Butter/Jam Toast,-,145
Masala Omlettee,-,145
Plain Omlettee,-,110
Egg Fried/Poach,-,110
Boiled Egg,2 pcs,90
Plain Toast,-,90
Sunrise Special Soup,-,250
Hot & Sour Soup,-,250
Chicken Mushroom Soup, -,220
Mutton Bone Soup, -,220
Mushroom Soup, -,200
Chicken Soup, -, 200
Vegetable Soup, -,165
Club Sandwich, -,350
Cheese Sandwich, -,275
Chicken Sandwich, -,220
Vegetable Sandwich, -,175
Chicken Keema Noodles, -,250
Buff Keema Noodles, -,250
Cheese Corn Dog, -,220
Chicken Corn Dog,-,160
Buff Corn Dog,-,160
Sunrise Special Burger,-,300
Crunchy Chicken Burger,-,275
Chicken & Cheese Burger,-,275
Ham Cheese Burger,-,275
Chicken Burger,-,240
Ham Burger,-,240
Cheese Burger,-,240
Vegetable Burger,-,185
Mixed Pizza,-,485
Chi. Mushroom Pizza,-,460
Chicken Pizza,-,440
Sausage Pizza,-,430
Mushroom Pizza,-,430
Veg. Pizza,-,390
Cheese Pizza,-,380
Mixed,-,320
Chicken,-, 220
Buff,-,220
Egg,-,180
Veg.,-,-
Chicken Biryani,1200 gsm,840
Chicken Biryani,600 gsm,460
Chicken Biryani,300 gsm,230
Extra Chicken, 1 pcs,=45
Extra Egg,1 pcs,-50
Mutton Biryani,600 gsm,500
Egg Biryani,600 gsm,360
Veg. Biryani,600 gsm,320
Veg., Steam/Fry,180/200
Veg.,Jhol/Kothey,220/240
Veg., Chilly/Soup/Sadeko/Cholia,260
Veg., Crunchy, 300
Buff, Steam/Fry,220/240
Buff, Jhol/Kothey,260/280
Buff, Chilly/Soup/Sadeko/Cholia,300
Chicken, Steam/Fry,220/240
Chicken, Jhol/Kothey,260/280
Chicken, Chilly/Soup/Sadeko/Cholia,320
Chicken, Crunchy, 360
Paneer, Steam/Fry,280/300
Chicken Cooker Mo: Mo, -,400
Buff Cooker Mo:Mo,-,400
Chi/Buff Mo: Mo Platter,-,515
Veg. Mo: Mo Platter,-,430
Chicken Platter,-,625
Buff Platter,-,625
Veg. Platter,-,495
Mixed chowmein,-,320
Chicken chowmein,-, 220
Buff chowmein,-,220
Egg,chowmein-,200
Veg.chowmein,-,180
Egg Chicken Kati Roll,-,350
Paneer Kati Roll,-,340
Chicken Kati Roll,-,330
Egg Kati Roll,-,285
Veg. Kati Roll,-,275
Meatball Sauce, -,350
Cheese Sauce, -,350
Meat Sauce, -,350
Tomato Sauce, -,295
American Chopsuey,-,350
Chinese Chopsuey,-,350
Veg. Chopsuey,-,290
Chicken Sizzler,-,495
Veg. Sizzler,-,395
Chicken Cutlet,-,410
Fish Cutlet,-,410
Veg Cutlet,-,300
Chicken Chilly,B/L,365
Buff Chilly,-,365
Sausage Chilly,-,365
Paneer Chilly,-,365
Mushroom Chilly,-,365
Chips Chilly,-,250
Veg. Chilly,-,250
Mutton,-,550
Chicken/Buff,-,385
Mushroom,-,350
Mutton Sekuwa,250 gsm,780
Mutton Sekuwa, 1/2 Kg, 1510
Mutton Sekuwa, 1 Kg, 3000
Pork Sekuwa,250 gsm,380
Pork Sekuwa, 1/2 Kg,740
Pork Sekuwa, 1 Kg,1440
Chicken Sekuwa (B/L),250 gsm,420
Chicken Sekuwa (B/L),1/2 Kg,800
Chicken Sekuwa (B/L),1 Kg,1550
Chicken Sekuwa (W/B),250 gsm,340
Chicken Sekuwa (W/B),1/2 Kg,640
Chicken Sekuwa (W/B),1 Kg,1240
Buff Sekuwa, 250 gsm,340
Buff Sekuwa, 1/2 Kg,640
Buff Sekuwa, 1 Kg, 1240
Mutton Tass,-,550
Chicken Tass,-,400
Paneer Pakauda, -,360
Chicken Pakauda, -,350
Mushroom Pakauda, -,350
Veg. Pakauda, -, 250
Mutton Sadeko, -,550
Mushroom Sadeko, -,350
Sukuti Sadeko, -,385
Chicken Sadeko, -,385
Mutter Sadeko, -,275
Sweet Corn Sadeko, -, 275
Aalu Sadeko, -,225
Bhatmas Sadeko, -, 225
Peanut Sadeko, -,225
Bhuja Sadeko, -, 130
Waiwai Sadeko, -, 120
Fish Finger,-,425
Fish Fried,-,425
Tauko Chilly,-,450
Tauko Soil,-,440
Tauko Sadeko/Fry,-,440
Mutton Boiled,-,550
Chicken Leg Boiled/Dameko,-,395
Chicken Boiled,-,330
Veg. Boiled,-,275
Sweet corn/Green Peas,Boil/Fry,250
Chicken Tandoori, Full,790
Chicken Tandoori, Half, 415
Chicken Tandoori,1 piece, 230
Crispy Fried Chicken,4 pieces,495
Hot Wings, 6 pieces, 430
Timur Chicken,-,430
Wing Poleko,4 pieces,400
Buffalo Wings,4 pieces,400
Chicken B.B.Q.,-,385
Chicken Tikka,-,385
Chicken Drumstick,6 pieces, 330
Chicken/Buff Sausage, 1 pieces,90
Kaju Fried,-,495
Cheese Ball,-,410
Mustang Aalu,-,250
Aalu Jeera,-,250
French Fry,-,230
Aalu Poleko, -, 230
Onion Ring,-,195
Masala Papad,-,180
Plain Peanut, -, 165
Chatpate,-,130
Dry/Fry Papad,-, 120
Mutton Khana Set,-,495
Chicken Khana Set,-,425
Fish Khana Set,-,425
Veg. Khana Set,-,340
Special Whole Local Chicken,-,5000
Mutton Bhutuwa,-,550
Chicken Bhutuwa,-,365
Pork Bhutuwa, -,400
Masala Omlettee,-,145
Mutton Khaja Set,-,470
Chicken Khaja Set,-,400
Buff Khaja Set,-,400
Veg. Khaja Set,-,300
Mutton Masala,-,460
Mutton Curry,-,440
Chicken Tikka Masala,-,385
Chicken Butter Masala,-,385
Chicken Curry,-,330
Fish Curry,-,330
Paneer Butter Masala,-,295
Paneer Shahi Corma,-,295
Malai Kofta,-,270
Mutter Paneer, -,250
Mix Veg.,-,195
Aalu Mutter,-,185
Dal Butter Fried,-,165
Cheese Naan,-,170
Keema Naan,-,150
Garlic Naam,-,150
Aalu Naan,-,105
Aalu Paratha,-,95
Butter Naan, -,70
Plain Naan, -,60
Tandoori Roti,-,45
Tawa Roti,-,35
Cheese Salad,-,550
Fresh Fruit Salad,-,350
Russian Salad,-,350
Green Salad,-,225
Real Juice,1 ltr.,450
Jumbo Cold Drinks, 2.25 ltr.,400
Redbull,-,250
Fresh Lemon Soda,, 120
Pepsi/Dew/Mirinda/7 Up/Coke,-,90
Mineral Water,-,60
`;

const lines = menuRawData.trim().split('\n');
const allParsedItems: MenuItem[] = [];

// FIX: Declare and initialize currentId before its first use.
let currentId = 1;

// Define category keywords for robust mapping
const categoryKeywords: { [key: string]: string } = {
  // Coffee
  'Espresso': 'BLACK COFFEE',
  'Americano': 'BLACK COFFEE',
  'Macchiato': 'BLACK COFFEE',
  'Affogato': 'BLACK COFFEE',
  'Latte': 'MILK COFFEE',
  'Cappuccino': 'MILK COFFEE',
  'Mochaccino': 'MILK COFFEE',
  'Cafe Mocha': 'MILK COFFEE',
  'Mocha Madness': 'MILK COFFEE',
  'Caramel Macchiato': 'MILK COFFEE',

  // Hot Beverages
  'Hot Chocolate': 'HOT BEVERAGES',
  'Hot lemon': 'HOT BEVERAGES',
  'Steamed Milk': 'HOT BEVERAGES',

  // Tea
  'Black Tea': 'TEA',
  'Milk Tea': 'TEA',
  'Green Tea': 'TEA',

  // Iced Coffee
  'Iced Americano': 'ICED COFFEE',
  'Iced latte': 'ICED COFFEE',
  'Iced Flavoured Latte': 'ICED COFFEE',
  'Iced Caramel Macchiato': 'ICED COFFEE',
  'Iced Mocha': 'ICED COFFEE',
  'Iced Mocha Madness': 'ICED COFFEE',

  // Frappe
  'Ice Blended Coffee Frappe': 'ICE BLENDED FRAPPE',
  'Ice Blended Mocha Frappe': 'ICE BLENDED FRAPPE',
  'Ice Blended Choco-mint Frappe': 'ICE BLENDED FRAPPE',
  'Ice Blended Caramel Frappe': 'ICE BLENDED FRAPPE',
  'Ice Blended Oreo Frappe': 'ICE BLENDED FRAPPE',
  'Ice Blended Strawberry Frappe': 'ICE BLENDED FRAPPE',
  'Ice Blended Vanilla Frappe': 'ICE BLENDED FRAPPE',

  // Milkshakes
  'Vanilla Milkshake': 'MILKSHAKES',
  'Chocolate Milkshake': 'MILKSHAKES',
  'Strawberry Milkshake': 'MILKSHAKES',
  'Oreo Milkshake': 'MILKSHAKES',
  'Caramel Milkshake': 'MILKSHAKES',

  // Lassi
  'Plain/Sweet Lassi': 'LASSI',
  'Salt Lassi': 'LASSI',
  'Banana Lassi': 'LASSI',
  'Vanilla Lassi': 'LASSI',
  'Chocolate Lassi': 'LASSI',
  'Mahi': 'LASSI',

  // Ice Cream
  'Vanilla, Single': 'ICE CREAM',
  'Vanilla, Double': 'ICE CREAM',
  'Chocolate,-,-': 'ICE CREAM', // Specific entry for "Chocolate" with no variant/price (need to handle parsing)
  '21st Love,-,-': 'ICE CREAM', // Specific entry for "21st Love" with no variant/price (need to handle parsing)

  // Iced Tea & Coolers
  'Lemon Iced Tea': 'ICED TEA & COOLERS',
  'Peach Iced Tea': 'ICED TEA & COOLERS',
  'Blended Lemonade': 'ICED TEA & COOLERS',
  'Blended Mint Lemonade': 'ICED TEA & COOLERS',
  'Mint Lime Refresher': 'ICED TEA & COOLERS',
  'Cucumber Lime Refresher': 'ICED TEA & COOLERS',
  'Mojito': 'ICED TEA & COOLERS',

  // Fresh Fruit Juice
  'Pomegranate': 'FRESH FRUIT JUICE',
  'Citrus limetta': 'FRESH FRUIT JUICE',
  'Pineapple': 'FRESH FRUIT JUICE',
  'Sugarcane': 'FRESH FRUIT JUICE',
  'Apple': 'FRESH FRUIT JUICE',
  'Orange': 'FRESH FRUIT JUICE',
  'Watermelon': 'FRESH FRUIT JUICE',
  'Mixed Juice': 'FRESH FRUIT JUICE',

  // Cold Drinks (Specific)
  'Real Juice,1 ltr.': 'COLD DRINKS',
  'Jumbo Cold Drinks, 2.25 ltr.': 'COLD DRINKS',
  'Redbull': 'COLD DRINKS',
  'Fresh Lemon Soda': 'COLD DRINKS',
  'Pepsi/Dew/Mirinda/7 Up/Coke': 'COLD DRINKS',
  'Mineral Water': 'COLD DRINKS',

  // Breakfast & Light Bites
  'Breakfast Set No.1': 'BREAKFAST',
  'Breakfast Set No.2': 'BREAKFAST',
  'Breakfast Set No.3': 'BREAKFAST',
  'Fruit Salad': 'HEALTHY SECTION',
  'Egg Toast': 'BREAKFAST & LIGHT BITES',
  'Butter/Jam Toast': 'BREAKFAST & LIGHT BITES',
  'Masala Omlettee': 'BREAKFAST & LIGHT BITES',
  'Plain Omlettee': 'BREAKFAST & LIGHT BITES',
  'Egg Fried/Poach': 'BREAKFAST & LIGHT BITES',
  'Boiled Egg,2 pcs': 'BREAKFAST & LIGHT BITES',
  'Plain Toast': 'BREAKFAST & LIGHT BITES',

  // Soups
  'Sunrise Special Soup': 'SOUP',
  'Hot & Sour Soup': 'SOUP',
  'Chicken Mushroom Soup': 'SOUP',
  'Mutton Bone Soup': 'SOUP',
  'Mushroom Soup': 'SOUP',
  'Chicken Soup': 'SOUP',
  'Vegetable Soup': 'SOUP', // FIX: Corrected typo

  // Sandwiches
  'Club Sandwich': 'SANDWICH',
  'Cheese Sandwich': 'SANDWICH',
  'Chicken Sandwich': 'SANDWICH',
  'Vegetable Sandwich': 'SANDWICH',

  // Noodles / Corn Dog
  'Chicken Keema Noodles': 'NOODLES / CORN DOG',
  'Buff Keema Noodles': 'NOODLES / CORN DOG',
  'Cheese Corn Dog': 'NOODLES / CORN DOG',
  'Chicken Corn Dog': 'NOODLES / CORN DOG',
  'Buff Corn Dog': 'NOODLES / CORN DOG',

  // Burgers
  'Sunrise Special Burger': 'BURGER',
  'Crunchy Chicken Burger': 'BURGER',
  'Chicken & Cheese Burger': 'BURGER',
  'Ham Cheese Burger': 'BURGER',
  'Chicken Burger': 'BURGER',
  'Ham Burger': 'BURGER',
  'Cheese Burger': 'BURGER',
  'Vegetable Burger': 'BURGER',

  // Pizza
  'Mixed Pizza': 'PIZZA',
  'Chi. Mushroom Pizza': 'PIZZA',
  'Chicken Pizza': 'PIZZA',
  'Sausage Pizza': 'PIZZA',
  'Mushroom Pizza': 'PIZZA',
  'Veg. Pizza': 'PIZZA',
  'Cheese Pizza': 'PIZZA',

  // Thupka (inferred from context) - Removed generic "Mixed", "Chicken" etc. as they are handled by parsing logic and `getCategory` fallbacks.

  // Biryani
  'Chicken Biryani': 'BIRYANI',
  'Extra Chicken, 1 pcs': 'BIRYANI',
  'Mutton Biryani': 'BIRYANI',
  'Extra Egg,1 pcs': 'BIRYANI',
  'Egg Biryani': 'BIRYANI',
  'Veg. Biryani': 'BIRYANI',

  // Momos
  'Veg., Steam/Fry': 'MOMOS',
  'Veg.,Jhol/Kothey': 'MOMOS',
  'Veg., Chilly/Soup/Sadeko/Cholia': 'MOMOS',
  'Veg., Crunchy': 'MOMOS',
  'Buff, Steam/Fry': 'MOMOS',
  'Buff, Jhol/Kothey': 'MOMOS',
  'Buff, Chilly/Soup/Sadeko/Cholia': 'MOMOS',
  'Chicken, Steam/Fry': 'MOMOS',
  'Chicken, Jhol/Kothey': 'MOMOS',
  'Chicken, Chilly/Soup/Sadeko/Cholia': 'MOMOS',
  'Chicken, Crunchy': 'MOMOS',
  'Paneer, Steam/Fry': 'MOMOS',

  // Cooker Momos
  'Chicken Cooker Mo: Mo': 'COOKER MOMOS',
  'Buff Cooker Mo:Mo': 'COOKER MOMOS',

  // Platters
  'Chi/Buff Mo: Mo Platter': 'MOMOS & PLATTERS',
  'Veg. Mo: Mo Platter': 'MOMOS & PLATTERS',
  'Chicken Platter': 'SUNRISE SPECIAL PLATTER',
  'Buff Platter': 'SUNRISE SPECIAL PLATTER',
  'Veg. Platter': 'SUNRISE SPECIAL PLATTER',

  // Kati Rolls
  'Egg Chicken Kati Roll': 'KATI ROLL',
  'Paneer Kati Roll': 'KATI ROLL',
  'Chicken Kati Roll': 'KATI ROLL',
  'Egg Kati Roll': 'KATI ROLL',
  'Veg. Kati Roll': 'KATI ROLL',

  // Pasta & Chopsuey
  'Meatball Sauce': 'PASTA & CHOPSUEY',
  'Cheese Sauce': 'PASTA & CHOPSUEY',
  'Meat Sauce': 'PASTA & CHOPSUEY',
  'Tomato Sauce': 'PASTA & CHOPSUEY',
  'American Chopsuey': 'PASTA & CHOPSUEY',
  'Chinese Chopsuey': 'PASTA & CHOPSUEY',
  'Veg. Chopsuey': 'PASTA & CHOPSUEY',

  // Sizzlers
  'Chicken Sizzler': 'SIZZLER',
  'Veg. Sizzler': 'SIZZLER',

  // Cutlets
  'Chicken Cutlet': 'CUTLET',
  'Fish Cutlet': 'CUTLET',
  'Veg Cutlet': 'CUTLET',

  // Chilly Dishes
  'Chicken Chilly,B/L': 'CHILLY DISHES',
  'Buff Chilly': 'CHILLY DISHES',
  'Sausage Chilly': 'CHILLY DISHES',
  'Paneer Chilly': 'CHILLY DISHES',
  'Mushroom Chilly': 'CHILLY DISHES',
  'Chips Chilly': 'CHILLY DISHES',
  'Veg. Chilly': 'CHILLY DISHES',

  // Choila - Removed generic "Mutton", "Chicken/Buff", "Mushroom" as they are handled by parsing logic and `getCategory` fallbacks.

  // Sekuwa
  'Mutton Sekuwa': 'SEKUWA',
  'Pork Sekuwa': 'SEKUWA',
  'Chicken Sekuwa (B/L)': 'SEKUWA',
  'Chicken Sekuwa (W/B)': 'SEKUWA',
  'Buff Sekuwa': 'SEKUWA',

  // Tass Set
  'Mutton Tass': 'TASS SET',
  'Chicken Tass': 'TASS SET',

  // Pakauda
  'Paneer Pakauda': 'PAKAUDA',
  'Chicken Pakauda': 'PAKAUDA',
  'Mushroom Pakauda': 'PAKAUDA',
  'Veg. Pakauda': 'PAKAUDA',

  // Sadeko & Snacks
  'Mutton Sadeko': 'SADEKO & SNACKS',
  'Mushroom Sadeko': 'SADEKO & SNACKS',
  'Sukuti Sadeko': 'SADEKO & SNACKS',
  'Chicken Sadeko': 'SADEKO & SNACKS',
  'Mutter Sadeko': 'SADEKO & SNACKS',
  'Sweet Corn Sadeko': 'SADEKO & SNACKS',
  'Aalu Sadeko': 'SADEKO & SNACKS',
  'Bhatmas Sadeko': 'SADEKO & SNACKS',
  'Peanut Sadeko': 'SADEKO & SNACKS',
  'Bhuja Sadeko': 'SADEKO & SNACKS',
  'Waiwai Sadeko': 'SADEKO & SNACKS',
  'Fish Finger': 'FISH DISHES',
  'Fish Fried': 'FISH DISHES',

  // Tauko (Mutton) Dishes
  'Tauko Chilly': 'TAUKO (MUTTON) DISHES',
  'Tauko Soil': 'TAUKO (MUTTON) DISHES',
  'Tauko Sadeko/Fry': 'TAUKO (MUTTON) DISHES',

  // Boiled Items
  'Mutton Boiled': 'BOILED ITEMS',
  'Chicken Leg Boiled/Dameko': 'BOILED ITEMS',
  'Chicken Boiled': 'BOILED ITEMS',
  'Veg. Boiled': 'BOILED ITEMS',
  'Sweet corn/Green Peas,Boil/Fry': 'BOILED ITEMS',

  // Non-Veg Starters
  'Chicken Tandoori': 'NON-VEG STARTERS',
  'Crispy Fried Chicken': 'NON-VEG STARTERS',
  'Hot Wings': 'NON-VEG STARTERS',
  'Timur Chicken': 'NON-VEG STARTERS',
  'Wing Poleko': 'NON-VEG STARTERS',
  'Buffalo Wings': 'NON-VEG STARTERS',
  'Chicken B.B.Q.': 'NON-VEG STARTERS',
  'Chicken Tikka': 'NON-VEG STARTERS',
  'Chicken Drumstick': 'NON-VEG STARTERS',
  'Chicken/Buff Sausage': 'NON-VEG STARTERS',

  // Veg Snacks
  'Kaju Fried': 'VEG SNACKS',
  'Cheese Ball': 'VEG SNACKS',
  'Mustang Aalu': 'VEG SNACKS',
  'Aalu Jeera': 'VEG SNACKS',
  'French Fry': 'VEG SNACKS',
  'Aalu Poleko': 'VEG SNACKS',
  'Onion Ring': 'VEG SNACKS',
  'Masala Papad': 'VEG SNACKS',
  'Plain Peanut': 'VEG SNACKS',
  'Chatpate': 'VEG SNACKS',
  'Dry/Fry Papad': 'VEG SNACKS',

  // Thakali Khana Set
  'Mutton Khana Set': 'THAKALI KHANA SET',
  'Chicken Khana Set': 'THAKALI KHANA SET',
  'Fish Khana Set': 'THAKALI KHANA SET',
  'Veg. Khana Set': 'THAKALI KHANA SET',
  'Special Whole Local Chicken': 'THAKALI KHANA SET',

  // Bhutuwa (Add-ons / Extras)
  'Mutton Bhutuwa': 'ADD-ONS / EXTRAS',
  'Chicken Bhutuwa': 'ADD-ONS / EXTRAS',
  'Pork Bhutuwa': 'ADD-ONS / EXTRAS',
  'Masala Omlettee,': 'ADD-ONS / EXTRAS', // Appears again with a comma, treated as a separate entry/extra

  // Khaja Set
  'Mutton Khaja Set': 'KHAJA SET',
  'Chicken Khaja Set': 'KHAJA SET',
  'Buff Khaja Set': 'KHAJA SET',
  'Veg. Khaja Set': 'KHAJA SET',

  // Curries - Main Course
  'Mutton Masala': 'CURRIES - MAIN COURSE',
  'Mutton Curry': 'CURRIES - MAIN COURSE',
  'Chicken Tikka Masala': 'CURRIES - MAIN COURSE',
  'Chicken Butter Masala': 'CURRIES - MAIN COURSE',
  'Chicken Curry': 'CURRIES - MAIN COURSE',
  'Fish Curry': 'CURRIES - MAIN COURSE',
  'Paneer Butter Masala': 'CURRIES - MAIN COURSE',
  'Paneer Shahi Corma': 'CURRIES - MAIN COURSE',
  'Malai Kofta': 'CURRIES - MAIN COURSE',
  'Mutter Paneer': 'CURRIES - MAIN COURSE',
  'Mix Veg.': 'CURRIES - MAIN COURSE',
  'Aalu Mutter': 'CURRIES - MAIN COURSE',
  'Dal Butter Fried': 'CURRIES - MAIN COURSE',

  // Breads & Roti
  'Cheese Naan': 'BREADS & ROTI',
  'Keema Naan': 'BREADS & ROTI',
  'Garlic Naam': 'BREADS & ROTI', // Corrected from Naam to Naan during processing
  'Aalu Naan': 'BREADS & ROTI',
  'Aalu Paratha': 'BREADS & ROTI',
  'Butter Naan': 'BREADS & ROTI',
  'Plain Naan': 'BREADS & ROTI',
  'Tandoori Roti': 'BREADS & ROTI',
  'Tawa Roti': 'BREADS & ROTI',

  // Salads
  'Cheese Salad': 'SALAD',
  'Fresh Fruit Salad': 'SALAD',
  'Russian Salad': 'SALAD',
  'Green Salad': 'SALAD',
};

// Function to get category based on item name using keywords
const getCategory = (itemName: string, originalItemName: string): string => {
  const lowerItemName = itemName.toLowerCase();
  const lowerOriginalItemName = originalItemName.toLowerCase();

  for (const key in categoryKeywords) {
    // Handle specific full matches or keys with variants like "Vanilla, Single"
    if (key.includes(',')) {
      const [baseKey, variantKey] = key.split(',').map(s => s.trim().toLowerCase());
      if (lowerOriginalItemName.includes(baseKey) && lowerOriginalItemName.includes(variantKey)) {
        return categoryKeywords[key];
      }
    } else if (
        lowerItemName.includes(key.toLowerCase()) ||
        lowerOriginalItemName.includes(key.toLowerCase()) ||
        (key === 'Muchaccino' && lowerItemName.includes('mochaccino')) // Handle corrected typo for category matching
    ) {
      return categoryKeywords[key];
    }
  }

  // Fallback for general categorization if not specifically matched
  if (lowerItemName.includes('espresso') || lowerItemName.includes('americano')) return 'BLACK COFFEE';
  if (lowerItemName.includes('latte') || lowerItemName.includes('cappuccino') || lowerItemName.includes('mocha') || lowerItemName.includes('mochaccino')) return 'MILK COFFEE';
  if (lowerItemName.includes('hot chocolate') || lowerItemName.includes('hot lemon') || lowerItemName.includes('steamed milk')) return 'HOT BEVERAGES';
  if (lowerItemName.includes('iced') && (lowerItemName.includes('coffee') || lowerItemName.includes('latte') || lowerItemName.includes('mocha') || lowerItemName.includes('americano'))) return 'ICED COFFEE';
  if (lowerItemName.includes('tea') && !lowerItemName.includes('iced')) return 'TEA';
  if (lowerItemName.includes('ice blended') || lowerItemName.includes('frappe')) return 'ICE BLENDED FRAPPE';
  if (lowerItemName.includes('milkshake')) return 'MILKSHAKES';
  if (lowerItemName.includes('lassi')) return 'LASSI';
  if (lowerItemName.includes('juice')) return 'FRESH FRUIT JUICE';
  if (lowerItemName.includes('iced tea') || lowerItemName.includes('lemonade') || lowerItemName.includes('refresher') || lowerItemName.includes('mojito')) return 'ICED TEA & COOLERS';
  if (lowerItemName.includes('breakfast')) return 'BREAKFAST';
  if (lowerItemName.includes('toast') || lowerItemName.includes('omlettee') || lowerItemName.includes('egg')) return 'BREAKFAST & LIGHT BITES';
  if (lowerItemName.includes('salad')) return 'SALAD';
  if (lowerItemName.includes('soup')) return 'SOUP';
  if (lowerItemName.includes('sandwich')) return 'SANDWICH';
  if (lowerItemName.includes('noodles') || lowerItemName.includes('corn dog')) return 'NOODLES / CORN DOG';
  if (lowerItemName.includes('burger')) return 'BURGER';
  if (lowerItemName.includes('pizza')) return 'PIZZA';
  if (lowerItemName.includes('thupka')) return 'THUPKA';
  if (lowerItemName.includes('biryani')) return 'BIRYANI';
  if (lowerItemName.includes('momo')) return 'MOMOS';
  if (lowerItemName.includes('platter')) return 'SUNRISE SPECIAL PLATTER';
  if (lowerItemName.includes('kati roll')) return 'KATI ROLL';
  if (lowerItemName.includes('pasta') || lowerItemName.includes('chopsuey') || lowerItemName.includes('sauce')) return 'PASTA & CHOPSUEY';
  if (lowerItemName.includes('sizzler')) return 'SIZZLER';
  if (lowerItemName.includes('cutlet')) return 'CUTLET';
  if (lowerItemName.includes('chilly')) return 'CHILLY DISHES';
  if (lowerItemName.includes('choila')) return 'CHOILA';
  if (lowerItemName.includes('sekuwa')) return 'SEKUWA';
  if (lowerItemName.includes('tass')) return 'TASS SET';
  if (lowerItemName.includes('pakauda')) return 'PAKAUDA';
  if (lowerItemName.includes('sadeko') || lowerItemName.includes('aalu') || lowerItemName.includes('bhatmas') || lowerItemName.includes('peanut') || lowerItemName.includes('bhuja') || lowerItemName.includes('waiwai') || lowerItemName.includes('papad') || lowerItemName.includes('chatpate')) return 'SADEKO & SNACKS';
  if (lowerItemName.includes('fish')) return 'FISH DISHES';
  if (lowerItemName.includes('tauko')) return 'TAUKO (MUTTON) DISHES';
  if (lowerItemName.includes('boiled')) return 'BOILED ITEMS';
  if (lowerItemName.includes('tandoori') || lowerItemName.includes('chicken') || lowerItemName.includes('wings') || lowerItemName.includes('b.b.q.') || lowerItemName.includes('tikka') || lowerItemName.includes('drumstick') || lowerItemName.includes('sausage')) return 'NON-VEG STARTERS';
  if (lowerItemName.includes('kaju') || lowerItemName.includes('cheese ball') || lowerItemName.includes('onion ring') || lowerItemName.includes('french fry') || lowerItemName.includes('mustang aalu')) return 'VEG SNACKS';
  if (lowerItemName.includes('khana set') || lowerItemName.includes('local chicken')) return 'THAKALI KHANA SET';
  if (lowerItemName.includes('bhutuwa')) return 'ADD-ONS / EXTRAS';
  if (lowerItemName.includes('khaja set')) return 'KHAJA SET';
  if (lowerItemName.includes('curry') || lowerItemName.includes('masala') || lowerItemName.includes('kofta') || lowerItemName.includes('paneer') || lowerItemName.includes('dal')) return 'CURRIES - MAIN COURSE';
  if (lowerItemName.includes('naan') || lowerItemName.includes('paratha') || lowerItemName.includes('roti')) return 'BREADS & ROTI';
  if (lowerItemName.includes('cold drinks') || lowerItemName.includes('redbull') || lowerItemName.includes('soda') || lowerItemName.includes('water')) return 'COLD DRINKS';

  return 'MISCELLANEOUS';
};


for (const line of lines) {
  if (!line.trim() || line.includes(',-,-')) continue; // Skip empty lines or explicitly empty items

  const parts = line.split(',').map(p => p.trim());
  if (parts.length < 3) continue; // Ensure at least name, variant/qty, price

  let nameRaw = parts[0];
  let variantOrQtyRaw = parts[1];
  let priceStrRaw = parts[parts.length - 1]; // Price is always the last part

  if (!priceStrRaw || priceStrRaw === '-') continue;

  let itemName = nameRaw;
  const originalItemName = nameRaw;

  // FIX: Declare and initialize variants array by splitting variantOrQtyRaw.
  // This will ensure 'variants' is defined when referenced in the subsequent conditional checks.
  const variants = variantOrQtyRaw.split('/').map(p => p.trim()).filter(Boolean);

  // --- Specific Name Adjustments and Overrides ---
  if (originalItemName === 'Muchaccino') {
    itemName = 'Mochaccino';
  } else if (['Pineapple', 'Sugarcane', 'Apple', 'Orange', 'Watermelon'].includes(originalItemName) && !itemName.toLowerCase().includes('juice')) {
    itemName = `${originalItemName} Juice`;
  } else if (originalItemName === 'Citrus limetta') {
    itemName = 'Citrus Limetta Juice';
  } else if (originalItemName === 'Mixed Juice') {
    itemName = 'Mixed Fruit Juice';
  } else if (originalItemName === 'Real Juice,1 ltr.') {
    itemName = 'Real Juice (1 Ltr)';
  } else if (originalItemName === 'Jumbo Cold Drinks, 2.25 ltr.') {
    itemName = 'Jumbo Cold Drinks (2.25 Ltr)';
  } else if (originalItemName === 'Fresh Lemon Soda,') {
    itemName = 'Fresh Lemon Soda';
  } else if (originalItemName === 'Pepsi/Dew/Mirinda/7 Up/Coke') {
    itemName = 'Assorted Soft Drinks (Pepsi/Dew/Mirinda/7 Up/Coke)';
  } else if (originalItemName === 'Extra Chicken, 1 pcs') {
    itemName = 'Extra Chicken (1 Pc)';
  } else if (originalItemName === 'Boiled Egg,2 pcs') {
    itemName = 'Boiled Egg (2 Pcs)';
  } else if (originalItemName === 'Mixed' && priceStrRaw === '320') {
    itemName = 'Mixed Thupka';
  } else if (originalItemName === 'Chicken' && priceStrRaw === '220' && (variantOrQtyRaw === '-' || variantOrQtyRaw === '')) {
    itemName = 'Chicken Thupka';
  } else if (originalItemName === 'Buff' && priceStrRaw === '220' && (variantOrQtyRaw === '-' || variantOrQtyRaw === '')) {
    itemName = 'Buff Thupka';
  } else if (originalItemName === 'Egg' && priceStrRaw === '180' && (variantOrQtyRaw === '-' || variantOrQtyRaw === '')) {
    itemName = 'Egg Thupka';
  } else if (originalItemName === 'Veg.' && priceStrRaw === '180' && (variantOrQtyRaw === '-' || variantOrQtyRaw === '')) {
    itemName = 'Veg. Thupka';
  } else if (originalItemName === 'Mutton' && priceStrRaw === '550' && (variantOrQtyRaw === '-' || variantOrQtyRaw === '')) {
    itemName = 'Mutton Choila';
  } else if (originalItemName === 'Chicken/Buff' && priceStrRaw === '385' && (variantOrQtyRaw === '-' || variantOrQtyRaw === '')) {
    itemName = 'Chicken/Buff Choila';
  } else if (originalItemName === 'Mushroom' && priceStrRaw === '350' && (variantOrQtyRaw === '-' || variantOrQtyRaw === '')) {
    itemName = 'Mushroom Choila';
  } else if (originalItemName.includes('Sekuwa') && variantOrQtyRaw !== '-') {
    itemName = `${originalItemName} (${variantOrQtyRaw.replace('gsm', ' Gsm').replace('kg', ' Kg')})`;
  }

  // Handle common variants that should be part of the name
  if (variantOrQtyRaw !== '-' && variantOrQtyRaw !== '' && !variantOrQtyRaw.includes('/') && !itemName.toLowerCase().includes(variantOrQtyRaw.toLowerCase())) {
     if (!originalItemName.includes('Sekuwa')) { // Sekuwa handled above
        itemName = `${itemName} (${variantOrQtyRaw.replace('gsm', ' Gsm').replace('pcs', ' Pcs')})`;
     }
  }

  const prices = priceStrRaw.split('/').map(p => parseFloat(p.trim())).filter(p => !isNaN(p));

  // FIX: Ensure prices array is not empty before accessing its elements.
  // This explicitly guarantees that prices[0] and prices[1] will be valid numbers if accessed.
  if (prices.length === 0) {
      continue; // Skip this item if no valid price can be parsed
  }

  if (prices.length > 0) { // This check is now reinforced by the 'continue' above
    // Handle items with multiple prices or complex variants like Momos
    if (originalItemName.includes('Cafe Latte') && prices.length > 1) {
      allParsedItems.push({ id: currentId++, name: `${itemName} (NRS ${prices[0]})`, price: prices[0], category: getCategory(itemName, originalItemName), image: generateImageUrl(`${itemName} (NRS ${prices[0]})`) });
      allParsedItems.push({ id: currentId++, name: `${itemName} (NRS ${prices[1]})`, price: prices[1], category: getCategory(itemName, originalItemName), image: generateImageUrl(`${itemName} (NRS ${prices[1]})`) });
    } else if (originalItemName.includes('Cappuccino') && prices.length > 1) {
      allParsedItems.push({ id: currentId++, name: `${itemName} (NRS ${prices[0]})`, price: prices[0], category: getCategory(itemName, originalItemName), image: generateImageUrl(`${itemName} (NRS ${prices[0]})`) });
      allParsedItems.push({ id: currentId++, name: `${itemName} (NRS ${prices[1]})`, price: prices[1], category: getCategory(itemName, originalItemName), image: generateImageUrl(`${itemName} (NRS ${prices[1]})`) });
    } else if (originalItemName.includes('Sweet corn/Green Peas') && variants.length === prices.length) {
      allParsedItems.push({ id: currentId++, name: `Sweet Corn/Green Peas (Boil)`, price: prices[0], category: getCategory('Sweet Corn/Green Peas (Boil)', originalItemName), image: generateImageUrl(`Sweet Corn/Green Peas (Boil)`) });
      allParsedItems.push({ id: currentId++, name: `Sweet Corn/Green Peas (Fry)`, price: prices[1], category: getCategory('Sweet Corn/Green Peas (Fry)', originalItemName), image: generateImageUrl(`Sweet Corn/Green Peas (Fry)`) });
    } else if (originalItemName.includes('Dry/Fry Papad') && variants.length === prices.length) {
      allParsedItems.push({ id: currentId++, name: `Dry Papad`, price: prices[0], category: getCategory('Dry Papad', originalItemName), image: generateImageUrl(`Dry Papad`) });
      allParsedItems.push({ id: currentId++, name: `Fry Papad`, price: prices[1], category: getCategory('Fry Papad', originalItemName), image: generateImageUrl(`Fry Papad`) });
    } else if (originalItemName.match(/^(Veg\.|Buff|Chicken|Paneer), (Steam|Jhol|Chilly|Crunchy)/) && variants.length === prices.length) {
        // Special handling for Momos with variants and multiple prices
        for (let i = 0; i < prices.length; i++) {
            let momoName = `${originalItemName.split(',')[0].replace('.', '').trim()} ${variants[i].replace('Cholia', 'Cholia ')} Momo`;
            if (momoName.startsWith('Veg ')) momoName = momoName.replace('Veg ', 'Vegetable ');
            allParsedItems.push({ id: currentId++, name: momoName, price: prices[i], category: getCategory(momoName, originalItemName), image: generateImageUrl(momoName) });
        }
    } else if (originalItemName.includes('Tauko Sadeko/Fry') && variants.length === prices.length) {
        allParsedItems.push({ id: currentId++, name: `Tauko Sadeko`, price: prices[0], category: getCategory(`Tauko Sadeko`, originalItemName), image: generateImageUrl(`Tauko Sadeko`) });
        allParsedItems.push({ id: currentId++, name: `Tauko Fry`, price: prices[1], category: getCategory(`Tauko Fry`, originalItemName), image: generateImageUrl(`Tauko Fry`) });
    }
    else {
      // Default case for single price or variants already handled in item name.
      allParsedItems.push({ id: currentId++, name: itemName, price: prices[0], category: getCategory(itemName, originalItemName), image: generateImageUrl(itemName) });
    }
  }
}

// Final cleanup and sorting for the generated list
const uniqueItemsMap = new Map<string, MenuItem>();
let finalIdCounter = 1;
for (const item of allParsedItems) {
    // Standardize 'Mo: Mo' to 'Momo'
    item.name = item.name.replace(/Mo: Mo/g, 'Momo');
    item.name = item.name.replace(/Naam/g, 'Naan'); // Correct Naam to Naan
    item.name = item.name.replace(/Chi\./g, 'Chicken'); // Standardize Chi.

    // Ensure "Veg." becomes "Vegetable" for Momos and other suitable items
    if (item.name.startsWith('Veg. ') && (item.category === 'MOMOS' || item.category === 'THUPKA')) {
        item.name = item.name.replace('Veg. ', 'Vegetable ');
    } else if (item.name.startsWith('Veg. ')) { // For other Veg. items
        item.name = item.name.replace('Veg. ', 'Vegetable ');
    } else if (item.name === 'Veg.' && item.category === 'THUPKA') { // For standalone 'Veg.' Thupka
        item.name = 'Vegetable Thupka';
    }


    item.image = generateImageUrl(item.name); // Re-generate image URL after final name change

    const key = `${item.name}-${item.price}-${item.category}`;
    if (!uniqueItemsMap.has(key)) {
        uniqueItemsMap.set(key, { ...item, id: finalIdCounter++ });
    }
}

const finalUniqueMenuItems = Array.from(uniqueItemsMap.values());

// Get unique categories in the order they appear in categoryKeywords for consistent sorting
const categoryOrderKeys = Object.keys(categoryKeywords);
const customCategoryOrder: string[] = [];
for (const key of categoryOrderKeys) {
  const cat = categoryKeywords[key];
  if (!customCategoryOrder.includes(cat)) {
    customCategoryOrder.push(cat);
  }
}

finalUniqueMenuItems.sort((a, b) => {
  const catAIndex = customCategoryOrder.indexOf(a.category);
  const catBIndex = customCategoryOrder.indexOf(b.category);

  if (catAIndex !== catBIndex) {
    return catAIndex - catBIndex;
  }
  return a.name.localeCompare(b.name);
});

// Re-assign IDs after final sort
let newId = 1;
for (const item of finalUniqueMenuItems) {
    item.id = newId++;
}

export const MENU_ITEMS: MenuItem[] = finalUniqueMenuItems;