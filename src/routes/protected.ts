import HomePage from 'pages/home';
import { Route } from 'types/route';

export const protectedRoutes: Route[] = [
  {
    key: 'router-home',
    title: 'Home',
    description: 'Home',
    component: HomePage,
    path: '/',
    isEnabled: true,
    appendDivider: true,
  },
];
