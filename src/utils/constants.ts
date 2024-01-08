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
    id: 1,
    imgUrl: '/images/product_1.svg',
    title: 'Nutritional Mints for Heavy Periods',
    brand: 'Tried & Trusted',
    rating: 5,
    price: 849,
  },
  {
    id: 2,
    imgUrl: '/images/product_2.svg',
    title: 'Nutritional Mints for Lactation',
    brand: 'Tried & Trusted',
    rating: 5,
    price: 849,
  },
  {
    id: 3,
    imgUrl: '/images/product_3.svg',
    title: 'Nutritional Mints for Menopause',
    brand: 'Tried & Trusted',
    rating: 5,
    price: 849,
  },
  {
    id: 4,
    imgUrl: '/images/product_4.svg',
    title: 'Soothing Vaginal cream for Menopause',
    brand: 'Tried & Trusted',
    rating: 5,
    price: 849,
  },
];

export const product = {
  category: 'Menstrual Wellness',
  rating: 4,
  title:'Nutritional Mints for Heavy Periods.',
  subTitle:'Our bestseller nutritive mints balance disturbed hormones thereby regulating the cycle flow back to normal. These mints contain essential nutrients that help balance female hormones.',
  price: 849,
};

export const CartItems = [
  {
    id: 3,
    imgUrl: '/images/product_3.svg',
    title: 'Soothing Vaginal cream for Menopause',
    brand: 'Tried & Trusted',
    rating: 5,
    price: 849,
  },
  {
    id: 4,
    imgUrl: '/images/product_4.svg',
    title: 'Soothing Vaginal cream for Menopause',
    brand: 'Tried & Trusted',
    rating: 5,
    price: 849,
  },
  {
    id: 3,
    imgUrl: '/images/product_3.svg',
    title: 'Soothing Vaginal cream for Menopause',
    brand: 'Tried & Trusted',
    rating: 5,
    price: 849,
  },
  {
    id: 4,
    imgUrl: '/images/product_4.svg',
    title: 'Soothing Vaginal cream for Menopause',
    brand: 'Tried & Trusted',
    rating: 5,
    price: 849,
  },
];

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

export const benefitsData ={
  heading: "A Treasure Trove of Benefits",
  itemList: [
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
  ]
}

export const guidingPrinciples = {
  heading: "Our Guiding Principles",
  itemList: [
    {
      title: 'Nature Centric Approach',
      subTitle:
        'We draw inspiration from nature, crafting pure and safe products free from synthetic interference.',
      src: '/icons/nature.png',
    },
    {
      title: 'Holistic Healing',
      subTitle:
        'Rooted in Ayurveda, our products blend traditional wisdom with modern science, catering to women at every life stage.',
      src: '/icons/holistic.png',
    },
    {
      title: 'Accessibility and Empowerment',
      subTitle:
      "Our non-prescription nutraceuticals make holistic wellness accessible, fitting right in your pocket.",
      src: '/icons/accessbility.png',
    },
    {
      title: 'Integrity and Transparency',
      subTitle:
        "We guarantee the highest standards through tried, tested, and peer-reviewed procedures.",
      src: '/icons/integrity.png',
    },
    {
      title: 'Steroid Hormone Free',
      subTitle:
        'Our products prioritize purity and safety, free from hormones and steroids.',
      src: '/icons/hormone.svg',
    },
    {
      title: 'Cruelty-Free',
      subTitle:
        "We create with compassion, ensuring no harm to any living being.",
      src:'/icons/cruelt.svg',
    },
    {
      title: 'Botanical Excellence',
      subTitle:
        "Our solutions brim with botanical goodness, delivering nature's best in the form of delectable mints.",
      src:'/icons/botanical.png',
    },
  ]
}

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

export const birthOfWYN = {
  title: 'The Birth of WYN',
  subTitle: "Dr. Shefali Tungare's groundbreaking initiative, 'WYN- What You Need,' has rapidly gained prominence since its inception in 2023. She embarked on this journey after identifying a significant gap in the intimate care market, where many products lacked transparency about their ingredients or failed to meet the safety standards that women rightfully deserve.... READ MORE"
};

export const empoweringWomen = {
  title: 'Empowering Women at Every Stage of Life',
  subTitle: "Welcome to WYN - What You Need, your gateway to holistic women's wellness. We're dedicated to redefining the approach to women's health, offering natural, effective, and natural solutions. In the year 2022, Dr. Shefali Tungare initiated a ground breaking venture that would come to be known as 'WYN.... READ MORE'"
};

export const ayurveda = {
  title: 'The Ayurveda Connection: Your Path to Holistic Wellness with WYN',
  subTitle: "In the heart of WYN lies the ancient wisdom of Ayurveda, a centuries-old approach to wellness from India. Our products are steeped in this rich tradition, combining it with modern science to create something special.... READ MORE"
};

export const menstrualWellness = {
  title: 'Menstrual Wellness',
  subTitle: "Say goodbye to the challenges of PCOS and embrace pain-free menstrual cycles. WYN introduces a groundbreaking range of mints, meticulously curated to address specific menstrual issues. From White Discharge mints to Heavy Period mints and Menopause mints, find the relief you deserve."
};

export const sensualWellness = {
  title: 'Sensual Wellness',
  subTitle: "Embrace your sensuality with confidence through our intimate care products. Our Breast Cream, Intimate Depigmenting Cream, and Intimate Vaginal Cream empower you to feel your best and truly embrace your inner self."
};

export const pregnancyPrepareAndCare = {
  title: 'Pregnancy Prepare & Care',
  subTitle: "Ensuring a successful pregnancy and supporting optimal lactation after birth is crucial. WYN's specialized products are designed to assist you on your journey to motherhood."
};

export const menopausalWellness = {
  title: 'Menopausal Wellness',
  subTitle: "Transition into menopause gracefully with WYN's thoughtfully curated range. From Menopausal Vaginal Cream to Menopausal Mints, we prioritize your comfort and health during this phase of life."
};

export const dailyWellness = {
  title: 'Daily Wellness',
  subTitle: "We understand the importance of daily intimate hygiene. Our Intimate Hygiene Wipes and Intimate Hygiene Spray make it effortless to prioritize your well-being each day."
};


export const ShefaliTungareInfo ={
    title:"Dr. Shefali Tungare, Founder",
    subTitle:`She has emerged as a visionary in women's health empowerment. In 2023, she founded "WYN - What You Need," a brand dedicated to transparency, safety, and natural well-being.

    \nDr. Tungare observed significant gaps in the intimate care market, with many products concealing ingredients or failing to meet safety standards. Her innovative solution was natural phytoactive compound mints, providing women with natural alternatives with a long history of safety and efficacy offering wellness with pleasure.
    
    \nHer philosophy of "Mints not Medicines" has reshaped the industry, emphasizing natural healing methods. Beyond products, "WYN" has become a multifaceted wellness entity, offering menstrual care, sexual wellness, and pregnancy care products. Dr. Tungare's mission is clear: empower women globally to make informed decisions about their intimate health.
    
    \nWith a blend of Ayurvedic wisdom and modern medicine, Dr. Shefali Tungare's commitment to enhancing women's well-being is transforming the approach to women's health. "WYN - What You Need" stands as a beacon of empowerment, where passion meets purpose, leading to transformative change in women's lives worldwide.`,
  };

export const teamMembers = [
  {
    contentProps:{
      title:"Mr. Snehal Gersappa, CEO",
      subTitle:`Mr. Snehal Gersappa's extensive experience and remarkable expertise in running the organizations define his crucial role the company. With an impressive track record spanning over 19 years of dedicated service, he brings a wealth of knowledge to the table.
      He plays a multifaceted role that significantly impacts our company's trajectory. His depth of experience in sales, marketing & financial modelling which enables him to identify and seize growth opportunities with precision.`
    },
    imgProps:{
      src:'/images/snehal-gersappa.png',
      alt:'Mr. Snehal Gersappa'
    }
  },
  {
    contentProps:{
      title:"Dr. Satish Vaidya, Mentor & Chief Research Officer",
      subTitle:"With over four decades of unwavering dedication and a profound commitment to merging ancient wisdom with cutting-edge science, Dr. Vaidya stands as a beacon in the field of holistic health for women. \n He is not merely a researcher; he is a pioneer in the exploration of transformative possibilities within herbal and nutraceutical therapies."
    },
    imgProps:{
      src:'/images/satish-vaidya.png',
      alt:'Dr. Satish Vaidya'
    }
  },
  {
    contentProps:{
      title:"Mr. Sagar Tungare, COO",
      subTitle:"Sagar Tungare, our Chief Operating Officer, possesses a deep understanding that the foundation of a thriving company lies in smooth operations, much like the harmony of a well-conducted orchestra. \n His role extends beyond operational management; he actively contributes to shaping our work culture, promoting values like creativity, accountability, and a relentless drive for improvement."
    },
    imgProps:{
      src:'/images/sagar-tungare.png',
      alt:'Mr. Sagar Tungare'
    }
  },
  // add other team members here
];

export const meetTheTeam = {
  title: 'Dr. Shefali Tungare, Founder',
  description: "She has emerged as a visionary in women's health empowerment. In 2023, she founded 'WYN - What You Need,' a brand dedicated to transparency, safety, and natural well-being. Dr. Tungare observed significant gaps in the intimate care market, with many products concealing ingredients or failing to meet safety standards. Her innovative solution was natural phytoactive compound mints, providing women with natural alternatives with a long history of safety and efficacy offering wellness with pleasure. Her philosophy of 'Mints not Medicines' has reshaped the industry, emphasizing natural healing methods. Beyond products, 'WYN' has become a multifaceted wellness entity, offering menstrual care, sexual wellness, and pregnancy care products. Dr. Tungare's mission is clear: empower women globally to make informed decisions about their intimate health. With a blend of Ayurvedic wisdom and modern medicine, Dr. Shefali Tungare's commitment to enhancing women's well-being is transforming the approach to women's health. 'WYN - What You Need' stands as a beacon of empowerment, where passion meets purpose, leading to transformative change in women's lives worldwide."  
}

export const teamDetails = [
  {
    title: 'Mr. Snehal Gersappa CEO',
    subTitle: "Mr. Snehal Gersappa's extensive experience and remarkable expertise in running the organizations define his crucial role the company. With an impressive track record spanning over 19 years of dedicated service, he brings a wealth of knowledge to the table. He plays a multifaceted role that significantly impacts our company's trajectory. His depth of experience in sales, marketing & financial modelling which enables him to identify and seize growth opportunities with precision. READ MORE"
  },
  {
    title: 'Dr. Satish Vaidya, Mentor & Chief Research Officer',
    subTitle: "Satish Vaidya, our Chief Operating Officer, possesses a deep understanding that the foundation of a thriving company lies in smooth operations, much like the harmony of a well-conducted orchestra. His role extends beyond operational management; he actively contributes to shaping our work culture, promoting values like creativity, accountability, and a relentless drive for improvement. READ MORE"
  },
  {
    title: 'Mr. Sagar Tungare COO',
    subTitle: "Sagar Tungare, our Chief Operating Officer, possesses a deep understanding that the foundation of a thriving company lies in smooth operations, much like the harmony of a well-conducted orchestra. His role extends beyond operational management; he actively contributes to shaping our work culture, promoting values like creativity, accountability, and a relentless drive for improvement. READ MORE"
  } 
]