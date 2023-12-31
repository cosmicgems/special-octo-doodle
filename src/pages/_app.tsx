import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { StateContext } from '../../Context/StateContext';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import createEmotionCache from '../../utility/createEmotionCache';
import lightThemeOptions from '../styles/themes/lightThemeOptions';
import '../styles/globals.css';
import Layout from '../components/Layout';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
        <CssBaseline />
      {/* <ThemeProvider theme={lightTheme}> */}
        <StateContext>
          {/* <Layout> */}
            <Component {...pageProps} />
          {/* </Layout> */}
        </StateContext>
      {/* </ThemeProvider> */}
    </CacheProvider>
  );
};

export default MyApp;