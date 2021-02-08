import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'antd/dist/antd.css';
import routes from './routes';

const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>加载中...</div>}>
      <Switch>
        {routes.map(route => route.layout ? 
          <route.layout key={route.path} {...route} /> :
          <Route key={route.path} {...route} />)}
      </Switch>
    </Suspense>
  </Router>
);

export default AppRouter;
