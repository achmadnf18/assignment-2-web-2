/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable import/no-extraneous-dependencies */
import { MsalProvider } from '@azure/msal-react';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { authConfig } from 'authConfig';
import { Layout } from 'components/layout';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from 'routes/private-route';
import { protectedRoutes } from 'routes/protected';
import { publicRoutes } from 'routes/public';
import { persistor, store } from 'store';
import { theme } from 'styles/mui/theme';
import createEmotionCache from 'utils/emotion-cache';

interface CustomAppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

export function AllProvider({ children }: { children: JSX.Element[] }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

function App({ emotionCache = clientSideEmotionCache }: CustomAppProps) {
  return (
    <MsalProvider instance={authConfig}>
      <CacheProvider value={emotionCache}>
        <AllProvider>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                {publicRoutes.map((route) => (
                  <Route path={route.path} element={<route.component />} key={route.key} />
                ))}
                {protectedRoutes.map((route) => (
                  <Route
                    path={route.path}
                    element={
                      <PrivateRoute>
                        <route.component />
                      </PrivateRoute>
                    }
                    key={route.key}
                  />
                ))}
              </Route>
            </Routes>
          </BrowserRouter>
        </AllProvider>
      </CacheProvider>
    </MsalProvider>
  );
}

export default App;
