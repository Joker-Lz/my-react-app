import React from 'react';

import { useRoutes, Navigate } from 'react-router-dom';

const NotFound = React.lazy(() => import('@/pages/NotFound'));
const Home = React.lazy(() => import('@/pages/Home'));
const Login = React.lazy(() => import('@/pages/Login'));
const About = React.lazy(() => import('@/pages/About'));

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/about/:id',
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
function WraperRoutes() {
  const isLogin = window.sessionStorage.getItem('IS_LOGIN');
  const element = useRoutes(routes);
  return isLogin ? element : <Login />;
}

export default WraperRoutes;
