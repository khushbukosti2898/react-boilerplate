import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/layout';

const App = lazy(() => import('../pages/App'));
const Input = lazy(() => import('../pages/Input'));
const Input2 = lazy(() => import('../pages/Breadcrumb'));
const NoMatch = lazy(() => import('../pages/NoMatch'));

const AuthorisedApp = () => {
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Layout>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/componets/form" component={Input} />
            <Route exact path="/componets/breadcrumbs" component={Input2} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Layout>
      </Suspense>
    </>
  );
};

export default AuthorisedApp;
