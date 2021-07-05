import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from '../components/common/layout/Header';

const App = lazy(() => import('../pages/App'));
const NoMatch = lazy(() => import('../pages/NoMatch'));

const AuthorisedApp = () => {
  return (
    <div className="layout">
      <Suspense fallback={<h2>Loading...</h2>}>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default AuthorisedApp;
