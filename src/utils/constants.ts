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
    rating: 5,
    price: '849',
  },
  {
    imgUrl: '/images/product_2.svg',
    title: 'Nutritional Mints for Lactation',
    brand: 'Tried & Trusted',
    rating: 5,
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
  title:'Nutritional Mints for Heavy Periods.',
  subTitle:'Our bestseller nutritive mints balance disturbed hormones thereby regulating the cycle flow back to normal. These mints contain essential nutrients that help balance female hormones.',
  price: 849,
};

export const infoContent = {
  title:'How to balance female hormones for a healthy menstruation',
  subTitle:'The menstrual cycle functions under the control of coordinated, synchronized and balanced release of female hormones such as FSH, LH, Estrogens & Progesterones in each menstrual cycle...',
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
  subTitle: "The story of What You Need - WYN products are of focused vision and in-depth understanding of scientific advances, combined with a strong foothold in Ayurveda. We've cultivated a diverse range of products that can be easily incorporated into your daily routine. Our product range includes Nutraceuticals, Cosmeceuticals, Nutra-Cosmeceutical Health Care & Wellness products.. READ MORE"
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
      "At WYN, we hold a strong stance against animal testing. Our products are developed with compassion and without causing harm to any living beings.",
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
      "Harnessing the power of nature, our mints are enriched with plant-derived compounds, bringing you the best of botanical goodness.",
    src:'/icons/derived.svg',
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