import React, { Suspense, lazy, useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import './App.css';
import { useDispatch } from 'react-redux';
import { getLocalStorageItem } from './utils/localStorageInteractor';
import { REFRESH_TOKEN } from './utils/constants';
import { authRefreshRequest } from './redux/actions';

const Layout = lazy(() => import(/* webpackChunkName: 'Layout' */ './components/Layout'));
const LandingLayout = lazy(() => import(/* webpackChunkName: 'LandingLayout' */ './components/LandingLayout'));

const LandingPage = lazy(() => import(/* webpackChunkName: 'LandingPage' */ './pages/LandingPage'));
const AuthPage = lazy(() => import(/* webpackChunkName: 'AuthPage' */ './pages/AuthPage'));
const MainPage = lazy(() => import(/* webpackChunkName: 'MainPage' */ './pages/MainPage'));

const router = createBrowserRouter([
  {
    path: '/landing',
    element: <LandingLayout />,
    children: [
      { path: '/landing', element: <LandingPage /> },
      { path: '/landing/track', element: <div>track-page</div> },
    ],
  },
  { path: '/auth', element: <AuthPage /> },
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/users', element: <div>users</div> },
      { path: '/users/:id', element: <div>user-page</div> },
      { path: '/my-tasks', element: <div>my-tasks</div> },
      { path: '/profile', element: <div>profile</div> },
      { path: '/settings', element: <div>settings</div> },
      { path: '/orders', element: <div>orders</div> },
    ],
  },
  { path: '*', element: <div>not found page</div> },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = getLocalStorageItem(REFRESH_TOKEN);
    if (accessToken) dispatch(authRefreshRequest());
  }, []);

  return (
    <Suspense fallback={<CircularProgress />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
