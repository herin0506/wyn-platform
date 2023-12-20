import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import theme from '../styles/theme';
import '../styles/globals.scss';
import createEmotionCache from '../styles/createEmotionCache';
import 'bootstrap/dist/css/bootstrap.css';
import DefaultLayoutComponent from '@wyn/components/Layouts/Default/DefaultLayout';
import { ReduxStateProviders } from '../../redux/Provider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <ReduxStateProviders>
          <DefaultLayoutComponent>
            <Component {...pageProps} />
          </DefaultLayoutComponent>
        </ReduxStateProviders>
      </ThemeProvider>
    </CacheProvider>
  );
}
