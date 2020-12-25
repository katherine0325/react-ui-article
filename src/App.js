import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';

import DefaultLayout from './layout/default';

const Home = lazy(() => import('./pages/home'));
const Article = lazy(() => import('./pages/article'));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>加载中...</div>}>
      <DefaultLayout path="/" exact component={Home} />
      <DefaultLayout path="/article" component={Article} />
    </Suspense>
  </Router>
);

export default AppRouter;
