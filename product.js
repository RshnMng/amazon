let fiveStar =
  "https://supersimple.dev/projects/amazon/images/ratings/rating-5.png";
let fourhalfStar =
  "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png";
let fourStar =
  "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png";
let threehalfStar =
  "https://supersimple.dev/projects/amazon/images/ratings/rating-35.png";
let products = [
  {
    id: 1,
    image:
      "https://supersimple.dev/projects/amazon/images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 87,
    },
    priceCents: 1090,
    keywords: [
      "clothes",
      "socks",
      "athletic",
      "black",
      "grey",
      "gray",
      "cotton",
      "sports",
    ],
  },
  {
    id: 2,
    image:
      "https://supersimple.dev/projects/amazon/images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png",
      count: 127,
    },
    priceCents: 2095,
    keywords: ["sports", "athletic", "basketball", "outdoor"],
  },
  {
    id: 3,
    image:
      "https://supersimple.dev/projects/amazon/images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 56,
    },
    priceCents: 799,
    keywords: ["clothes", "cotton", "shirt", "adult"],
  },
  {
    id: 4,
    image:
      "https://supersimple.dev/projects/amazon/images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-5.png",
      count: 2197,
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "indoor",
      "appliance",
      "kitchen",
      "equiptment",
      "house",
      "home",
      "black",
      "silver",
    ],
  },
  {
    id: 5,
    image:
      "https://supersimple.dev/projects/amazon/images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png",
      count: 37,
    },
    priceCents: 2067,
    keywords: [
      "dinner",
      "kitchen-ware",
      "indoor",
      "appliance",
      "kitchen",
      "house",
      "home",
      "white",
    ],
  },
  {
    id: 6,
    image:
      "https://supersimple.dev/projects/amazon/images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 175,
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "steel",
      "bake-ware",
      "kitchen-ware",
      "non-stick",
      "kitchen",
      "house-ware",
      "house",
      "home",
    ],
  },
  {
    id: 7,
    image:
      "https://supersimple.dev/projects/amazon/images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 317,
    },
    priceCents: 2400,
    options: {
      Color: ["Yellow", "Teal"],
      Size: ["S", "M", "L"],
    },
    keywords: [
      "clothes",
      "sweat-shirt",
      "fleece",
      "yellow",
      "teal",
      "hoodie",
      "sweater",
      "winter",
      "fall",
      "clothing",
      "small",
      "medium",
      "large",
    ],
  },
  {
    id: 8,
    image:
      "https://supersimple.dev/projects/amazon/images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 144,
    },
    priceCents: 3599,
    options: { Set: ["6-Piece", "4-Piece"] },
    keywords: [
      "home",
      "house",
      "towel",
      "bathroom",
      "toiletries",
      "grey",
      "gray",
      "6 piece",
      "4 piece",
      "six piece",
      "four piece",
    ],
  },
  {
    id: 9,
    image:
      "https://supersimple.dev/projects/amazon/images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 305,
    },
    priceCents: 2899,
    options: { Style: ["Plain", "Lavender"] },
    keywords: [
      "home",
      "house",
      "laundry",
      "detergent",
      "toiletries",
      "plain",
      "lavender",
    ],
  },
  {
    id: 10,
    image:
      "https://supersimple.dev/projects/amazon/images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png",
      count: 89,
    },
    priceCents: 3390,
    options: { "Shoe Size (Us)": [5, 6, 7, 8, 9] },
    keywords: [
      "shoes",
      "shoe",
      "outdoor",
      "clothes",
      "clothing",
      "footware",
      "white",
      "gray",
      "grey",
      "size 5",
      "size 6",
      "size 7",
      "size 8",
      "size 9",
    ],
  },
  {
    id: 11,
    image:
      "https://supersimple.dev/projects/amazon/images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 235,
    },
    priceCents: 2070,
    keywords: [
      "women",
      "womens",
      "outdoor",
      "beach",
      "clothes",
      "clothing",
      "chifon",
      "black",
      "cover up",
    ],
  },
  {
    id: 12,
    image:
      "https://supersimple.dev/projects/amazon/images/products/round-sunglasses-black.jpg",
    name: "Round Sunglasses",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 30,
    },
    priceCents: 1560,
    options: { Style: ["Black", "Gold"] },
    keywords: ["outdoor", "round", "glasses", "black", "gold", "summer"],
  },
  {
    id: 13,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/women-beach-sandals.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 562,
    },
    priceCents: 2499,
    options: { "Shoe Size (US)": [7, 8, 9] },
    keywords: [
      "summer",
      "buckle",
      "two strap",
      "womens",
      "shoe",
      "shoes",
      "outdoor",
      "footwear",
      "sandal",
      "tan",
      "size 7",
      "size 8",
      "size 9",
    ],
  },
  {
    id: 14,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/blackout-curtain-set-beige.webp",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 232,
    },
    priceCents: 4599,
    keywords: [
      "curtains",
      "beige",
      "blackout",
      "4-pack",
      "four pack",
      "4 pack",
    ],
  },
  {
    id: 15,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/men-slim-fit-summer-shorts-gray.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: "",
      count: 160,
    },
    priceCents: 1699,
    options: {
      Color: ["Gray", "Black", "Beige"],
      "Waist Size (Inches)": [30, 31, 32],
    },
    keywords: [
      "slim fit",
      "men",
      "shorts",
      "summer",
      "biege",
      "gray",
      "black",
      "grey",
      "30 inch waist",
      "31 inch waist",
      "32 inch waist",
    ],
  },
  {
    id: 16,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/electric-glass-and-steel-hot-water-kettle.webp",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-5.png",
      count: 846,
    },
    priceCents: 3074,
    keywords: [
      "tea",
      "indoor",
      "appliance",
      "kitchen",
      "equiptment",
      "house",
      "home",
      "black",
      "silver",
      "electric",
      "kettle",
      "steel",
    ],
  },
  {
    id: 17,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/facial-tissue-2-ply-18-boxes.jpg",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars:
        " https://supersimple.dev/projects/amazon/images/ratings/rating-4.png",
      count: 99,
    },
    priceCents: 2374,
    keywords: [
      "care",
      "ultra",
      "box",
      "2 ply",
      "house",
      "home",
      "soft",
      "tissue",
    ],
  },
  {
    id: 18,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/straw-sunhat.webp",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png ",
      count: 215,
    },
    priceCents: 2200,
    keywords: ["summer", "outdoor", "hat", "sun", "straw", "lifeguard"],
  },
  {
    id: 19,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/sky-flower-stud-earrings.webp",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars:
        " https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 52,
    },
    priceCents: 1799,
    keywords: ["sterling", "earrings", "sky", "flower", "stud", "women"],
  },
  {
    id: 20,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/women-stretch-popover-hoodie-black.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 2465,
    },
    priceCents: 1374,
    keywords: [
      "women",
      "womens",
      "stretch",
      "hoodie",
      "pop over",
      "cover",
      "house",
      "black",
      "clothes",
      "clothing",
    ],
    options: {
      Color: ["Black", "Gray", "Blue"],
      Size: ["XS", "S", "M", "L"],
    },
  },
  {
    id: 21,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 119,
    },
    priceCents: 1250,
    keywords: [
      "bathroom",
      "indoor",
      "bath",
      "rug",
      "grey",
      "house",
      "home",
      "gray",
    ],
  },
  {
    id: 22,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png",
      count: 326,
    },
    priceCents: 2640,
    keywords: [
      "shoe",
      "shoes",
      "women",
      "womens",
      "footwear",
      "flat",
      "black",
      "gray",
      "grey",
      "size 6",
      "size six",
      "size seven",
      "size 7",
      "size eight",
      "size 8",
    ],
    options: {
      Color: ["Black", "Gray"],
      "Shoe Size (US)": [6, 7, 8],
    },
  },
  {
    id: 23,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 2556,
    },
    priceCents: 1599,
    keywords: [
      "clothes",
      "clothing",
      "golf",
      "polo",
      "men",
      "mens",
      "blue",
      "black",
      "red",
      "grey",
      "small",
      "medium",
      "large",
    ],
    options: {
      Color: ["Black", "Blue", "Red"],
      Size: ["S", "M", "L"],
    },
  },
  {
    id: 24,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 2286,
    },
    priceCents: 8300,
    keywords: [
      "bathroom",
      "indoor",
      "kitchen",
      "trash can",
      "garbage",
      "silver",
      "home",
      "house",
      "stainless",
      "steel",
      "size 50L",
      "size 30L",
    ],
    options: {
      Size: ["50L", "30L Tall"],
    },
  },
  {
    id: 25,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png",
      count: 456,
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed",
      "duvet",
      "cover",
      "grey",
      "zipper",
      "home",
      "blue",
      "red",
      "twin",
      "queen",
    ],
    options: {
      Color: ["Blue", "Red"],
      Size: ["Twin", "Queen"],
    },
  },
  {
    id: 26,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-5.png",
      count: 83,
    },
    priceCents: 1250,
    keywords: [
      "hat",
      "beanie",
      "cap",
      "knitted",
      "winter",
      "outdoor",
      "grey",
      "gray",
    ],
  },
  {
    id: 27,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 9017,
    },
    priceCents: 2290,
    keywords: [
      "beige",
      "green",
      "black",
      "size 30",
      "size 31",
      "size 32",
      "pants",
      "men",
      "clothes",
      "clothing",
    ],
    options: {
      Color: ["Beige", "Green", "Black"],
      Size: [30, 31, 32],
    },
  },
  {
    id: 28,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png",
      count: 229,
    },
    priceCents: 3890,
    keywords: [
      "green",
      "black",
      "size 9",
      "size 10",
      "size 11",
      "size 12",
      "shoes",
      "shoe",
      "athletic",
      "mens",
      "men",
      "sneaker",
      "outdoor",
      "footwear",
    ],
    options: {
      Color: ["Green", "Black"],
      Size: [9, 10, 11, 12],
    },
  },
  {
    id: 29,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-35.png",
      count: 42,
    },
    priceCents: 1690,
    keywords: [
      "glasses",
      "mens",
      "men",
      "navigator",
      "sunglasses",
      "pilot",
      "brown",
      "silver",
      "outdoor",
      "summer",
    ],
    options: {
      Color: ["Brown", "Silver"],
    },
  },
  {
    id: 30,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 511,
    },
    priceCents: 6797,
    keywords: [
      "kitchen",
      "kitchen-ware",
      "pots",
      "pans",
      "utensils",
      "home",
      "house",
      "black",
    ],
  },
  {
    id: 31,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 130,
    },
    priceCents: 1649,
    keywords: [
      "mirror",
      "vanity",
      "white",
      "bathroom",
      "bedroom",
      "home",
      "house",
    ],
  },
  {
    id: 32,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 248,
    },
    priceCents: 2400,
    keywords: [
      "clothes",
      "clothing",
      "camo",
      "grey",
      "gray",
      "small",
      "medium",
      "large",
      "fleece",
    ],
    options: {
      Color: ["Camo", "Gray"],
      Size: ["S", "M", "L"],
    },
  },
  {
    id: 33,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 117,
    },
    priceCents: 2400,
    keywords: [
      "earrings",
      "jewlrey",
      "gold",
      "french",
      "wire",
      "double oval",
      "womens",
      "twist",
    ],
  },
  {
    id: 34,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png",
      count: 126,
    },
    priceCents: 2899,
    keywords: [
      "kitchen",
      "kitchen-ware",
      "storage",
      "round",
      "airtight",
      "containers",
      "house",
      "home",
    ],
  },
  {
    id: 35,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 1211,
    },
    priceCents: 2250,
    keywords: [
      "kitchen",
      "kitchen-ware",
      "coffee",
      "appliances",
      "home",
      "house",
      "black",
    ],
  },
  {
    id: 36,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 363,
    },
    priceCents: 3099,
    keywords: ["curtains", "decor", "black out", "home", "house", "black"],
  },
  {
    id: 37,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 93,
    },
    priceCents: 2110,
    keywords: ["cotton", "bathroom", "2 pack", "teal", "towels", "bath towels"],
  },
  {
    id: 38,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png",
      count: 89,
    },
    priceCents: 3099,
    options: {
      Size: [6, 7, 8, 9],
    },
    keywords: [
      "waterproof",
      "athletic",
      "sneaker",
      "shoes",
      "footwear",
      "pink",
      "womens",
      "size 6",
      "size 7",
      "size 8 ",
      "size 9",
      "size six",
      "size seven",
      "size eight",
      "size nine",
    ],
  },
  {
    id: 39,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-4.png",
      count: 3,
    },
    priceCents: 10747,
    keywords: [
      "blender",
      "kitchen",
      "kitchen-ware",
      "home",
      "house",
      "black",
      "silver",
      "appliance",
    ],
  },
  {
    id: 40,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 679,
    },
    priceCents: 3899,
    keywords: ["bowls", "floral", "home", "house", "decor"],
  },
  {
    id: 41,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 1045,
    },
    priceCents: 5799,
    keywords: ["towels", "paper", "kitchen", "home", "house", "2 ply"],
  },
  {
    id: 42,
    image:
      "https://www.supersimple.dev/projects/amazon/images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars:
        "https://supersimple.dev/projects/amazon/images/ratings/rating-45.png",
      count: 3157,
    },
    priceCents: 2400,
    keywords: [
      "mens",
      "sweatshirt",
      "clothing",
      "clothes",
      "hoodie",
      "sweater",
      "fleece",
      "red",
      "black",
      "medium",
      "large",
      "extra large",
    ],
    options: {
      Color: ["Red", "Black"],
      Size: ["M", "L", "XL"],
    },
  },
];

export { products };
