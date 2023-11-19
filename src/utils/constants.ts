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
