import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ThemeProvider } from '@mui/material';
import { theme } from '../styles/theme';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
     <ThemeProvider theme={theme}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
      </ThemeProvider>
    </>
  );
}