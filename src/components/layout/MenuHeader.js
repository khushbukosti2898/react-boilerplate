import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../common/Breadcrumbs';
import ReactHelmet from '../common/ReactHelmet';

function MenuHeader({ title }) {
  return (
    <div className="menu-header">
      <h4>{title}</h4>
      <ReactHelmet title={title} />
      <Breadcrumbs />
    </div>
  );
}
MenuHeader.propTypes = {};

MenuHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MenuHeader;
