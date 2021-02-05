import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'antd/dist/antd.css';

import DefaultLayout from './layout/default';

import globalData from './global';

const Home = lazy(() => import('./pages/home'));
const Article = lazy(() => import('./pages/article'));
const Pagea = lazy(() => import('./pages/pagea'));
const Pageb = lazy(() => import('./pages/pageb'));
const Test = lazy(() => import('./pages/test'));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>加载中...</div>}>
      <DefaultLayout path="/" exact component={Home} title={globalData.title} />
      <DefaultLayout path="/article" component={Article} />
      <Route path="/a" component={Pagea} />
      <Route path="/b" component={Pageb} />
      <Route path="/test" component={Test} />
    </Suspense>
  </Router>
);

export default AppRouter;
