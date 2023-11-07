import { Work_Sans, Kameron, DM_Sans } from 'next/font/google';

const workSans = Work_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const dmSans = DM_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const kameron = Kameron({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const appFonts = [
  workSans.style.fontFamily,
  kameron.style.fontFamily,
  dmSans.style.fontStyle,
];

export const fontFamilies = {
  kameron: kameron.style.fontFamily,
  dmSans: dmSans.style.fontFamily,
  workSans: workSans.style.fontFamily,
};
