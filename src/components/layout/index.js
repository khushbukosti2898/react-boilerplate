import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { getItemFromStorage } from '../../utils/helper';
import MenuBar from './MenuBar';

const Layout = ({ children }) => {
  const [collapse, setCollapse] = useState(window && window.innerWidth < 767);

  const collapseToggle = () => setCollapse((prevState) => !prevState);

  useEffect(() => {
    const theme = getItemFromStorage('data-theme') || 'light';
    if (theme) document.body.setAttribute('data-theme', theme);
  }, []);

  return (
    <div className={collapse ? 'main_container toggle' : 'main_container'}>
      <MenuBar collapseToggle={collapseToggle} isCollapse={collapse} />
      <Header collapseToggle={collapseToggle} />
      <div className="right-col">{children}</div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
