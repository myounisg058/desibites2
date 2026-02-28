const menuData = [
  {
    id: 1,
    name: { ur: "چکن بریانی", en: "Chicken Biryani" },
    description: {
      ur: "خاص مصالحہ جات اور بہترین باسمتی چاولوں سے تیار کردہ چٹ پٹی چکن بریانی۔",
      en: "Spicy and aromatic chicken biryani made with premium basmati rice and signature spices."
    },
    price: 450,
    category: "rice",
    image: "biryani.png"
  },
  {
    id: 2,
    name: { ur: "چکن کڑاہی", en: "Chicken Karahi" },
    description: {
      ur: "تازہ ٹماٹروں اور ہری مرچ کی گارنش کے ساتھ اصلی لاہوری ذائقہ۔",
      en: "Authentic Lahori taste cooked with fresh tomatoes, green chilies, and ginger."
    },
    price: 1200,
    category: "curry",
    image: "karahi.png"
  },
  {
    id: 3,
    name: { ur: "بیف سیخ کباب", en: "Beef Seekh Kebab" },
    description: {
      ur: "کوئلے پر تیار کیے گئے نرم اور چٹپٹے بیف سیخ کباب، پودینے کی چٹنی کے ساتھ۔",
      en: "Tender and spicy beef seekh kebabs grilled over charcoal, served with mint chutney."
    },
    price: 600,
    category: "bbq",
    image: "kebab.png"
  },
  {
    id: 4,
    name: { ur: "چکن تکہ بوٹی", en: "Chicken Tikka Boti" },
    description: {
      ur: "مصالحے دار اور چٹ پٹی چکن بون لیس بوٹی۔",
      en: "Spicy and tangy boneless chicken chunks marinated in special tikka spices."
    },
    price: 550,
    category: "bbq",
    image: "tikka.png"
  },
  {
    id: 5,
    name: { ur: "بیف نہاری", en: "Beef Nihari" },
    description: {
      ur: "دھیمی آنچ پر پکی ہوئی مشہورِ زمانہ دہلی نہاری، نلی اور مغز کے ساتھ۔",
      en: "Slow-cooked famous Delhi-style beef stew, served with bone marrow."
    },
    price: 800,
    category: "curry",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: { ur: "افغانی پلاؤ", en: "Afghani Pulao" },
    description: {
      ur: "گاجر اور کشمش سے مزین بہترین افغانی مٹن پلاؤ۔",
      en: "Premium Afghani mutton pulao garnished with sweet carrots and raisins."
    },
    price: 850,
    category: "rice",
    image: "pulao.png"
  },
  {
    id: 7,
    name: { ur: "لسی (میٹھی/نمکین)", en: "Traditional Lassi" },
    description: {
      ur: "خالص دہی سے تیار کردہ ٹھنڈی اور مزیدار لسی۔",
      en: "Refreshing traditional yogurt drink (Sweet or Salty)."
    },
    price: 150,
    category: "drinks",
    image: "lassi.png"
  },
  {
    id: 8,
    name: { ur: "گڑ والی چائے", en: "Jaggery (Gur) Chai" },
    description: {
      ur: "کڑک پتی اور خالص گڑ سے بنی روایتی پاکستانی چائے۔",
      en: "Strong traditional Pakistani tea sweetened with pure jaggery."
    },
    price: 100,
    category: "drinks",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: { ur: "سافٹ ڈرنکس (کولا، سپرائٹ)", en: "Soft Drinks (Cola, Sprite)" },
    description: {
      ur: "ٹھنڈی میٹھی سافٹ ڈرنکس آپ کے کھانے کے ساتھ۔",
      en: "Chilled soft drinks to pair perfectly with your meal."
    },
    price: 80,
    category: "drinks",
    image: "softdrink.png"
  },
  {
    id: 10,
    name: { ur: "منرل واٹر", en: "Mineral Water" },
    description: {
      ur: "تازہ اور صاف پانی۔",
      en: "Fresh, pure, chilled bottled water."
    },
    price: 60,
    category: "drinks",
    image: "water.png"
  }
];

const translations = {
  en: {
    logo: "Desi Bites",
    nav_home: "Home",
    nav_menu: "Menu",
    nav_lang: "اردو (UR)",
    cart_text: "Cart",
    hero_title: "Authentic Pakistani Taste, Now at Your Table",
    hero_desc: "Delicious Desi food prepared with the finest spices and traditional recipes. Order now and enjoy the flavor.",
    hero_cta: "View Menu",
    menu_title: "Our Special Menu",
    cat_all: "All",
    cat_bbq: "BBQ",
    cat_curry: "Curry",
    cat_rice: "Rice",
    cat_drinks: "Drinks",
    cart_header: "Your Order",
    cart_empty: "Your cart is empty.",
    cart_total_label: "Total:",
    checkout_title: "Delivery Details",
    form_name: "Name",
    form_name_ph: "Enter your full name",
    form_phone: "Phone Number",
    form_address: "Address",
    form_address_ph: "Enter your complete address",
    form_submit: "Confirm Order",
    cart_checkout_btn: "Proceed to Checkout",
    footer_text: "© 2026 Desi Bites. All rights reserved.",
    btn_add_cart: "Add to Cart",
    alert_success: "Your order has been placed successfully! Thank you.",
    reviews_title: "What Our Customers Say",
    reviews_subtitle: "Based on 1500+ Reviews",
    footer_address_lbl: "Address:",
    footer_address_val: "123 Food Street, G-11 Markaz, Islamabad",
    footer_timings_lbl: "Timings:",
    footer_timings_val: "12:00 PM - 1:00 AM"
  },
  ur: {
    logo: "دیسی بائٹس",
    nav_home: "ہوم",
    nav_menu: "مینو",
    nav_lang: "English (EN)",
    cart_text: "کارٹ",
    hero_title: "اصلی پاکستانی ذائقہ، اب آپ کے دسترخوان پر",
    hero_desc: "بہترین مصالحہ جات اور روایتی تراکیب سے تیار کردہ دیسی کھانے۔ ابھی آرڈر کریں اور لذت کا مزہ اڑائیں۔",
    hero_cta: "مینو دیکھیں",
    menu_title: "ہمارا خاص مینو",
    cat_all: "سبھی",
    cat_bbq: "باربی کیو",
    cat_curry: "کڑاہی و قورمہ",
    cat_rice: "چاول",
    cat_drinks: "مشروبات",
    cart_header: "آپ کا آرڈر",
    cart_empty: "آپ کا کارٹ خالی ہے۔",
    cart_total_label: "کل رقم:",
    checkout_title: "ڈیلیوری کی تفصیلات",
    form_name: "نام",
    form_name_ph: "اپنا نام درج کریں",
    form_phone: "فون نمبر",
    form_address: "پتہ",
    form_address_ph: "اپنا مکمل پتہ درج کریں",
    form_submit: "آرڈر کنفرم کریں",
    cart_checkout_btn: "چیک آؤٹ کریں",
    footer_text: "© 2026 دیسی بائٹس۔ جملہ حقوق محفوظ ہیں۔",
    btn_add_cart: "کارٹ میں شامل کریں",
    alert_success: "آپ کا آرڈر کامیابی سے موصول ہو گیا ہے! شکریہ۔",
    reviews_title: "ہمارے کسٹمرز کی رائے",
    reviews_subtitle: "1500+ ریویوز پر مبنی",
    footer_address_lbl: "پتہ:",
    footer_address_val: "123 فوڈ سٹریٹ، جی 11 مرکز، اسلام آباد",
    footer_timings_lbl: "اوقات کار:",
    footer_timings_val: "دوپہر 12 بجے سے رات 1 بجے تک"
  }
};
