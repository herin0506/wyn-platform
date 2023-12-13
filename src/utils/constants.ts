import { APP_COLORS } from '@wyn/styles/colors/colors';
import { APP_ROUTES } from './routes';

export const STEPS = [
  { step: 'Step 1', info: 'Fill out our simple form', labelColor: '#E13F6A' },
  {
    step: 'Step 2',
    info: 'Our consultant will get in touch with you shortly',
    labelColor: '#346D8A',
  },
  {
    step: 'Step 3',
    info: 'Attend our training and receive our training kit',
    labelColor: '#F6B92D',
  },
  {
    step: 'Step 4',
    info: 'On your way to empowerment and success!',
    labelColor: '#7C2F75',
  },
];

export const footerMenuList = [
  {
    name: 'Shop',
    categories: [
      {
        title: 'Menstrual Wellness',
        url: APP_ROUTES.MENSTRUAL_WELNESS,
      },
      {
        title: 'Sensual Wellness',
        url: APP_ROUTES.SENSUAL_WELNESS,
      },
      {
        title: 'Pregnancy Prepare & Care',
        url: APP_ROUTES.PREGNANCY_WELNESS,
      },
      {
        title: 'Menopausal Wellness',
        url: APP_ROUTES.MENOPAUSAL_WELNESS,
      },
      {
        title: 'Daily Wellness',
        url: APP_ROUTES.DAILY_HEALTH,
      },
    ],
  },
  {
    name: 'Know',
    categories: [
      {
        title: 'Know the Science',
        url: '/',
      },
      {
        title: 'About the team',
        url: '/',
      },
      {
        title: 'Sign Up',
        url: '/',
      },
    ],
  },
  {
    name: 'More',

    categories: [
      {
        title: '2023 What You Need',
        url: '/',
      },
      {
        title: 'Terms of Use',
        url: '/',
      },
      {
        title: 'Refund Policy',
        url: '/',
      },
      {
        title: 'Accessibility',
        url: '/',
      },
      {
        title: 'Privacy & Cookies',
        url: '/',
      },
    ],
  },
];

export const finestNutrients = [
  {
    icon: '/icons/hormone.svg',
    label: 'Hormone & Steroid free',
  },
  {
    icon: '/icons/science.svg',
    label: 'Science Backed',
  },
  {
    icon: '/icons/vegetarian.svg',
    label: 'Vegetarian',
  },
  {
    icon: '/icons/cruelt.svg',
    label: 'Cruelty free',
  },
  {
    icon: '/icons/sugar.svg',
    label: 'Sugar free',
  },
  {
    icon: '/icons/derived.svg',
    label: 'Plant Derived Compounds',
  },
];

export const naturalHerbs = [
  {
    label: 'Shatavari',
    imgUrl: '/images/herbs_1.svg',
  },
  {
    imgUrl: '/images/herbs_2.svg',
    label: 'Ashoka',
  },
  {
    imgUrl: '/images/herbs_3.svg',
    label: 'Punarnava',
  },
  {
    imgUrl: '/images/herbs_4.svg',
    label: 'Lodhra',
  },
  {
    imgUrl: '/images/herbs_5.svg',
    label: 'Salmali',
  },
  {
    imgUrl: '/images/herbs_6.svg',
    label: 'Anantmul',
  },
];

export const productCategories = [
  {
    colorCode: APP_COLORS.AMARANATH,
    title: 'Menstrual Wellness',
    imgUrl: '/images/category_1.svg',
    route: APP_ROUTES.MENSTRUAL_WELNESS,
  },
  {
    colorCode: APP_COLORS.MID_NIGHT_GREEN,
    title: 'Sensual Wellness',
    imgUrl: '/images/category_2.svg',
    route: APP_ROUTES.SENSUAL_WELNESS,
  },
  {
    colorCode: APP_COLORS.META_BROWN,
    title: 'Pregnancy Care',
    imgUrl: '/images/category_3.svg',
    route: APP_ROUTES.PREGNANCY_WELNESS,
  },
  {
    colorCode: APP_COLORS.VIOLET,
    title: 'Menopausal Wellness',
    imgUrl: '/images/category_4.svg',
    route: APP_ROUTES.MENOPAUSAL_WELNESS,
  },
  {
    colorCode: APP_COLORS.VIOLET,
    title: 'Daily Wellness',
    imgUrl: '/images/category_5.svg',
    route: APP_ROUTES.DAILY_HEALTH,
  },
];

export const products = [
  {
    imgUrl: '/images/product_1.svg',
    title: 'Nutritional Mints for Heavy Periods',
    brand: 'Tried & Trusted',
    rating: 4,
    price: '849',
  },
  {
    imgUrl: '/images/product_2.svg',
    title: 'Nutritional Mints for Lactation',
    brand: 'Tried & Trusted',
    rating: 3,
    price: '849',
  },
  {
    imgUrl: '/images/product_3.svg',
    title: 'Nutritional Mints for Menopause',
    brand: 'Tried & Trusted',
    rating: 5,
    price: '849',
  },
  {
    imgUrl: '/images/product_4.svg',
    title: 'Soothing Vaginal cream for Menopause',
    brand: 'Tried & Trusted',
    rating: 5,
    price: '849',
  },
];

export const product = {
  category: 'Menstrual Wellness',
  rating: 4,
  title: 'Nutritional Mints for Heavy Periods.',
  subTitle:
    'Our bestseller nutritive mints balance disturbed hormones thereby regulating the cycle flow back to normal. These mints contain essential nutrients that help balance female hormones.',
  price: 849,
};

export const infoContent = {
  title: 'How to balance female hormones for a healthy menstruation',
  subTitle:
    'The menstrual cycle functions under the control of coordinated, synchronized and balanced release of female hormones such as FSH, LH, Estrogens & Progesterones in each menstrual cycle...',
};

export const womenHealthIssues = [
  {
    _id: 1,
    imgUrl: '/images/women_chest_pain.svg',
    content: 'How your protein intake affects your breast health',
  },
  {
    _id: 2,
    imgUrl: '/images/women_hormone_pain.svg',
    content: 'How to balance female hormones for a healthy menstruation',
  },
];

export const whyWYNContent = {
  title: 'India’s 1st Nutritional Mints.',
  subTitle:
    "Discover India’s pioneering Nutritive Mints, a game-changing innovation that transforms convenience while delivering precise nutrition. At WYN, we've condensed customized well-being into a format seamlessly adaptable to your lifestyle. Whether you're on the move or seeking a quick energy boost, WYN mints are your ultimate solution. Every mint is the result of thorough formulation, featuring meticulously selected nutrients designed to target your specific needs. Welcome to a fresh era of feminine well-being, where you're in command, and WYN is your trusted companion, guiding you every step of the way.",
};

export const whatWeOfferContent = {
  title: 'What we offer',
  subTitle:
    "The story of What You Need - WYN products are of focused vision and in-depth understanding of scientific advances, combined with a strong foothold in Ayurveda. We've cultivated a diverse range of products that can be easily incorporated into your daily routine. Our product range includes Nutraceuticals, Cosmeceuticals, Nutra-Cosmeceutical Health Care & Wellness products.. READ MORE",
};

export const BenefitsData = [
  {
    title: 'Steroid Hormone Free',
    subTitle:
      'Rest easy knowing that our mints are entirely free from hormones and steroids, ensuring your well-being is our top priority.',
    src: '/icons/hormone.svg',
  },
  {
    title: 'Science Backed',
    subTitle:
      'Each mint is meticulously crafted based on scientific research and designed to effectively address specific feminine concerns.',
    src: '/icons/science.svg',
  },
  {
    title: 'Vegetarian',
    subTitle:
      "We're proud to say that our mints are completely vegetarian, making them a consumable for ALL and sustainable choice.",
    src: '/icons/vegetarian.svg',
  },
  {
    title: 'Cruelty Free',
    subTitle:
      'At WYN, we hold a strong stance against animal testing. Our products are developed with compassion and without causing harm to any living beings.',
    src: '/icons/cruelt.svg',
  },
  {
    title: 'Sugar Free',
    subTitle:
      'Our mints are sugar-free, promoting a healthier approach to wellness without unnecessary additives.',
    src: '/icons/sugar.svg',
  },
  {
    title: 'Plant Derived Compounds',
    subTitle:
      'Harnessing the power of nature, our mints are enriched with plant-derived compounds, bringing you the best of botanical goodness.',
    src: '/icons/derived.svg',
  },
];

export const questionsAnswers = [
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
  {
    question: 'What does Hormone-Steroid free mean?',
    answer: 'Some answer needs to be added in this area',
  },
];

export const testimonials = [
  {
    _id: '1',
    description:
      'Chewable tablets are easy to consume anywhere at home, work or in travel. After 15-20 days I can see results that no hot flashes even in summer. I feel energetic throughout the day.',
    name: 'Mitashree Lobo',
    designnation: 'Homemakar',
    imgUrl:
      'https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=',
  },
  {
    _id: '2',
    description:
      "Definitely, would highly recommend the intimate hygiene spray to everyone travelling n working for long hours’ outdoors. It's a must have product with pleasant fragrance n freshness.",
    name: 'Vibha Bhagarh',
    designnation: 'Homemakar',
    imgUrl:
      'https://media.istockphoto.com/id/641720724/photo/formal-corporate-portrait-of-a-businesswoman.jpg?s=612x612&w=0&k=20&c=ND9aIyT2iFOuRMVVpSDsvDBk-MLTHAfr5E22xF802eM=',
  },
  {
    _id: '3',
    description:
      'I used to suffer a lot with lower abdominal pain during periods every month. Though my periods are regular, still was facing this issue. Then I came to know about this mints for period pain. Regularly I take 4 mints per day. I feel such a relief now...',
    name: 'Mansi Palande',
    designnation: 'Homemakar',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbxjRf2wJZbaUyUQza4kSKW-EdUfKy7qb83v5rkKplIuPxWs485Lnd7XENtthNn-J49r4&usqp=CAU',
  },
  {
    _id: '4',
    description:
      'I have been facing white discharge issue since last 2 years. Recently I got to know about this product which contains herbal actives in mint form. I am having this mints from last 1 month and I can see the result as my problem has been substantially reduced.',
    name: 'Priya Kadam',
    designnation: 'Homemakar',
    imgUrl:
      'https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?s=612x612&w=0&k=20&c=akS4eKR3suhoP9cuk7_7ZVZrLuMMG0IgOQvQ5JiRmAg=',
  },
  {
    _id: '4',
    description:
      "I've been using Wyn Breast cream for one week now. I have seen results. My breasts are fuller and more firm, definitely feeling a difference. I am pleased so far, which is why I rate this product a 4, so far.",
    name: 'Rajeshree Nachekar',
    designnation: 'Homemakar',
    imgUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfH6DdybpW-V1OPenZG90FXWrnHBjZ1ppnY8aD0qe1KSRCcaGeOgP4vJWi3DKagC0vUas&usqp=CAU',
  },
];

export const coFounders = [
  {
    _id: '1',
    description:
      "As the founder dedicated to women's health by way of herbal and nutritive mints, I am committed to pioneering a path where every woman is empowered to embrace her well-being, making her health a harmonious part of her life's journey.",
    name: 'Dr. Shefali Tungare',
    designnation: 'Founder',
    imgUrl:
      'https://cdn.shopify.com/s/files/1/0743/5665/4396/files/Shefali_Tungare.png?v=1694672676',
  },
];

export const sensualWellnessProducts = [
  {
    _id: '1',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/BreastCream_OuterBoxMockup_01copy.jpg?v=1696319487&width=720',
    title: 'Breast Cream',
    brand: null,
    rating: 0,
    price: '799.00',
  },
  {
    _id: '2',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/IntimateDepigmintation_PumpMockup.jpg?v=1696319600',
    title: 'Intimate Depigmenting Cream',
    brand: null,
    rating: 0,
    price: '899.00',
  },
  {
    _id: '3',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/26thJune_Updated_IntimateVaginalCream30gms_InnertubeMockup_01copy.jpg?v=1694424028',
    title: 'Intimate Vaginal Cream',
    brand: null,
    rating: 0,
    price: '2,049.00',
  },
];

export const pregnancyProducts = [
  {
    _id: '1',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/1_9a559de9-7002-44c0-979a-2dd2d58d5300.png?v=1696318910&width=720',
    title: 'Lactation Mints',
    brand: null,
    rating: 0,
    price: '2,099.00',
  },
  {
    _id: '2',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/Pregnancy_AnchoringFOP_01.jpg?v=1696319261&width=720',
    title: 'Pregnancy & Anchoring Mints',
    brand: null,
    rating: 0,
    price: '2,599.00',
  },
];

export const menstrualWellnessProducts = [
  {
    _id: '1',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/1.2.png?v=1696319165&width=720',
    title: 'PCOS Mints',
    brand: null,
    rating: 0,
    price: '1,499.00',
  },
  {
    _id: '2',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/1_17673464-2a56-4eb6-8daf-04a8eda64aea.png?v=1696318593&width=720',
    title: 'Irregular Periods Mints',
    brand: null,
    rating: 0,
    price: '1,299.00',
  },
  {
    _id: '3',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/1_17673464-2a56-4eb6-8daf-04a8eda64aea.png?v=1696318593&width=720',
    title: 'Heavy Periods Mints',
    brand: null,
    rating: 0,
    price: '1,249.00',
  },
  {
    _id: '4',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/1_d665f323-06d0-4675-bf5b-3a9ccf7bbf4f.png?v=1696319058&width=720',
    title: 'Pain Free PeriodsMints',
    brand: null,
    rating: 0,
    price: '999.00',
  },
  {
    _id: '5',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/1_8bb773a7-0261-457b-80c2-c06a9e1fa905.png?v=1696319353&width=720',
    title: 'White Discharge Mints',
    brand: null,
    rating: 0,
    price: '1.299.00',
  },
  {
    _id: '6',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/1_65102fd4-e0af-4acc-b0d3-21a7bbec9871.png?v=1696319302&width=720',
    title: 'Scanty Periods Mints',
    brand: null,
    rating: 0,
    price: '1,149.00',
  },
];

export const menopausalProducts = [
  {
    _id: '1',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/26thJune_Updated_menopauseRevitalisngCream30gms_InnertubeMockup_01copy.jpg?v=1694424086&width=720',
    title: 'Soothing Vaginal Cream',
    brand: null,
    rating: 0,
    price: '1,199.00',
  },
  {
    _id: '2',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/1_e7deed95-5662-4c21-ab19-642c080bb5ed.png?v=1696318990&width=720',
    title: 'Menopausal Mints',
    brand: null,
    rating: 0,
    price: '1,899.00',
  },
];

export const dailyWellnessProduct = [
  {
    _id: '1',
    imgUrl:
      'https://wynatlife.com/cdn/shop/products/IntimateHygineWipes_OuterPack_244e7f23-a346-44a9-a758-42deb278f8e7.jpg?v=1681715242&width=720',
    title: 'Intimate Hygiene Wipes',
    brand: null,
    rating: 0,
    price: '159.00',
  },
  {
    _id: '2',
    imgUrl:
      'https://wynatlife.com/cdn/shop/files/IntimateSprayBottleMockup1.jpg?v=1696319712&width=720',
    title: 'Intimate Hygiene Spray',
    brand: null,
    rating: 0,
    price: '250.00',
  },
];

export const birthOfWYN = {
  title: 'The Birth of WYN',
  subTitle:
    "Dr. Shefali Tungare's groundbreaking initiative, 'WYN- What You Need,' has rapidly gained prominence since its inception in 2023. She embarked on this journey after identifying a significant gap in the intimate care market, where many products lacked transparency about their ingredients or failed to meet the safety standards that women rightfully deserve.... READ MORE",
};

export const empoweringWomen = {
  title: 'Empowering Women at Every Stage of Life',
  subTitle:
    "Welcome to WYN - What You Need, your gateway to holistic women's wellness. We're dedicated to redefining the approach to women's health, offering natural, effective, and natural solutions. In the year 2022, Dr. Shefali Tungare initiated a ground breaking venture that would come to be known as 'WYN.... READ MORE'",
};

export const ayurveda = {
  title: 'The Ayurveda Connection: Your Path to Holistic Wellness with WYN',
  subTitle:
    'In the heart of WYN lies the ancient wisdom of Ayurveda, a centuries-old approach to wellness from India. Our products are steeped in this rich tradition, combining it with modern science to create something special.... READ MORE',
};

export const menstrualWellness = {
  title: 'Menstrual Wellness',
  subTitle:
    'Say goodbye to the challenges of PCOS and embrace pain-free menstrual cycles. WYN introduces a groundbreaking range of mints, meticulously curated to address specific menstrual issues. From White Discharge mints to Heavy Period mints and Menopause mints, find the relief you deserve.',
};

export const sensualWellness = {
  title: 'Sensual Wellness',
  subTitle:
    'Embrace your sensuality with confidence through our intimate care products. Our Breast Cream, Intimate Depigmenting Cream, and Intimate Vaginal Cream empower you to feel your best and truly embrace your inner self.',
};

export const pregnancyPrepareAndCare = {
  title: 'Pregnancy Prepare & Care',
  subTitle:
    "Ensuring a successful pregnancy and supporting optimal lactation after birth is crucial. WYN's specialized products are designed to assist you on your journey to motherhood.",
};

export const menopausalWellness = {
  title: 'Menopausal Wellness',
  subTitle:
    "Transition into menopause gracefully with WYN's thoughtfully curated range. From Menopausal Vaginal Cream to Menopausal Mints, we prioritize your comfort and health during this phase of life.",
};

export const dailyWellness = {
  title: 'Daily Wellness',
  subTitle:
    'We understand the importance of daily intimate hygiene. Our Intimate Hygiene Wipes and Intimate Hygiene Spray make it effortless to prioritize your well-being each day.',
};
