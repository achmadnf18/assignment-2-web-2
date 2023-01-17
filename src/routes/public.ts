import { Login } from 'pages/login';
import { Route } from 'types/route';

export const publicRoutes: Route[] = [
  {
    key: 'router-login',
    title: 'Login',
    description: 'Login',
    component: Login,
    path: '/login',
    isEnabled: true,
    appendDivider: true,
  },
];
