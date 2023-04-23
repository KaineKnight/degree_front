import React, { Suspense, lazy, useState } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { CircularProgress, ThemeProvider, createTheme } from '@mui/material';

import './App.css';

const Layout = lazy(() => import('./components/Layout'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));
const MainPage = lazy(() => import('./pages/MainPage'));

const router = createBrowserRouter([
  {
    path: '/landing',
    element: <LandingPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/users/:id',
        element: <div>user-page</div>,
      },
      {
        path: '*',
        element: <div>not found page</div>,
      },
    ],
  },
]);

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<CircularProgress />}>
        <RouterProvider router={router} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
