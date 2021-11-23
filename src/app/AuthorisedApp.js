import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/layout';

const App = lazy(() => import('../pages/App'));
const NoMatch = lazy(() => import('../pages/NoMatch'));
const Input = lazy(() => import('../pages/Input'));
const Input2 = lazy(() => import('../pages/Breadcrumb'));
const Buttons = lazy(() => import('../pages/Buttons'));
const Toast = lazy(() => import('../pages/Toast'));
const CustomTable = lazy(() => import('../pages/Table'));
const ReactSelectDemo = lazy(() => import('../pages/ReactSelect'));
const ReactDatePickerDemo = lazy(() => import('../pages/ReactDatePicker'));
const MapDemo = lazy(() => import('../pages/Map'));
const ReduxCounterDemo = lazy(() => import('../pages/Counter'));

const ExcelRead = lazy(() => import('../pages/ExcelRead'));
const ReactCSVRead = lazy(() => import('../pages/ReactCSVReaderDemo'));

const BarChart = lazy(() => import('../pages/BarChart'));

const AuthorisedApp = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/componets/form" component={Input} />
            <Route exact path="/componets/breadcrumbs" component={Input2} />
            <Route exact path="/componets/buttons" component={Buttons} />
            <Route exact path="/componets/toast" component={Toast} />
            <Route
              exact
              path="/componets/react-select"
              component={ReactSelectDemo}
            />
            <Route
              exact
              path="/componets/react-datepicker"
              component={ReactDatePickerDemo}
            />
            <Route
              exact
              path="/componets/custom-table"
              component={CustomTable}
            />
            <Route exact path="/componets/map" component={MapDemo} />

            <Route exact path="/charts/bar-chart" component={BarChart} />

            <Route exact path="/reader/excel-read" component={ExcelRead} />
            <Route
              exact
              path="/reader/react-csv-reader"
              component={ReactCSVRead}
            />
            <Route exact path="/redux-counter" component={ReduxCounterDemo} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Suspense>
      </Layout>
    </>
  );
};

export default AuthorisedApp;
