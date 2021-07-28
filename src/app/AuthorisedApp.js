import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/layout';

const dataList = [
  { id: 1, task: 'Wash dish', completed: false },
  { id: 2, task: 'Make dinner', completed: true },
  { id: 3, task: 'Wash clothes', completed: false },
];

const App = lazy(() => import('../pages/App'));
const NoMatch = lazy(() => import('../pages/NoMatch'));
const Input = lazy(() => import('../pages/Input'));
const Input2 = lazy(() => import('../pages/Breadcrumb'));
const Buttons = lazy(() => import('../pages/Buttons'));
const Toast = lazy(() => import('../pages/Toast'));
const CustomTable = lazy(() => import('../pages/Table'));

const ColumnChart = lazy(() => import('../pages/ColumnChart'));

const AuthorisedApp = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route exact path="/" render={() => <App dataList={dataList} />} />
            <Route exact path="/componets/form" component={Input} />
            <Route exact path="/componets/breadcrumbs" component={Input2} />
            <Route exact path="/componets/buttons" component={Buttons} />
            <Route exact path="/componets/toast" component={Toast} />
            <Route
              exact
              path="/componets/custom-table"
              component={CustomTable}
            />
            <Route exact path="/charts/column-chart" component={ColumnChart} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default AuthorisedApp;
