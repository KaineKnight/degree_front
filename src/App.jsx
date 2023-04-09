import React, { Suspense, lazy } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import './App.css';

const Layout = lazy(() => import('./components/Layout'));
const LandingPage = lazy(() => import('./pages/LandingPage'));
const AuthPage = lazy(() => import('./pages/AuthPage'));

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
  return (
    <Suspense fallback={<CircularProgress />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
