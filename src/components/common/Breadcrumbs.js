/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import routes from './Routes';

const findRouteName = (url) => routes[url];

const getPaths = (pathname) => {
  const paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });
  return paths;
};

// const BreadcrumbsItem = ({...rest, match}) => {
const BreadcrumbsItem = ({ match }) => {
  const routeName = findRouteName(match.url);
  if (routeName) {
    return match.isExact || routeName !== 'Home' ? (
      <BreadcrumbItem active>{routeName}</BreadcrumbItem>
    ) : (
      <BreadcrumbItem>
        <Link to={match.url || ''}>{routeName}</Link>
      </BreadcrumbItem>
    );
  }
  return null;
};

const Breadcrumbs = ({ location: { pathname } }) => {
  const paths = getPaths(pathname);
  const items = paths.map((path, i) => (
    <Route key={i} path={path} component={BreadcrumbsItem} />
  ));
  return <Breadcrumb>{items}</Breadcrumb>;
};

export default (props) => (
  <Route path="/:path" component={Breadcrumbs} {...props} />
);

Breadcrumbs.propTypes = {
  location: PropTypes.object.isRequired,
};
BreadcrumbsItem.propTypes = {
  match: PropTypes.object.isRequired,
};
