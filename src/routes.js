import { lazy } from 'react';
import DefaultLayout from './layout/default';

const routes = [
    {
        path: '/',
        exact: true,
        layout: DefaultLayout,
        component: lazy(() => import('./pages/home')),
    },
    {
        path: '/article',
        layout: DefaultLayout,
        component: lazy(() => import('./pages/article')),
    },
];

export default routes;
