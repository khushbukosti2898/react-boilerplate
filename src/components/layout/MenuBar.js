import {
  faAngleDown,
  faAngleUp,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import getMenuOptions from './Menu';
import logo from '../../assests/images/logo.svg';

const MenuBar = ({ collapseToggle }) => {
  const [dropdownOpen, setDropdownOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const menuOptions = getMenuOptions();

  const toggle = (e, menuIndex) => {
    const state = dropdownOpen.map((x, index) =>
      menuIndex === index ? !x : false,
    );
    setDropdownOpen(state);
    if (e) e.preventDefault();
  };

  const location = useLocation();
  useEffect(() => {
    let newMenu = [];
    menuOptions.forEach((menu) => {
      if (menu.value.slice(1) !== '') {
        newMenu = [...newMenu, location.pathname.includes(menu.value)];
      } else {
        newMenu = [...newMenu, false];
      }
    });
    setDropdownOpen(newMenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="left-col custom-shadow">
      <div className="logo-main mb-3">
        <img className="ml-3" src={logo} alt="logo" title="FlashPoint" />
        <span className="close-icon">
          <FontAwesomeIcon
            icon={faTimes}
            onClick={collapseToggle}
            title="Menu"
          />
        </span>
      </div>
      <div className="left-menu">
        <ul className="m-0 p-0">
          {menuOptions &&
            menuOptions.map((menuOption, key) => {
              return menuOption.hasSubMenu ? (
                <li key={menuOption.lable}>
                  <NavLink
                    exact
                    onClick={(e) => toggle(e, key)}
                    className={`fs-16 d-flex align-items-center
                    ${menuOptions
                      .map(
                        (menu) =>
                          location.pathname.includes(menu.value) && 'active',
                      )
                      .find((menu, menuIndex) => menuIndex === key)}`}
                    to={menuOption.subMenuOptions[0].value}
                    title={menuOption.lable}
                  >
                    <FontAwesomeIcon
                      icon={menuOption.icon}
                      title={menuOption.lable}
                      className="list-icon"
                    />
                    <span>{menuOption.lable}</span>
                    <span className="m-auto">
                      <FontAwesomeIcon
                        icon={dropdownOpen[key] ? faAngleDown : faAngleUp}
                        className="icon-action fs-16"
                      />
                    </span>
                  </NavLink>
                  <div
                    className={
                      dropdownOpen[key]
                        ? 'dropdown-menu show submnu-custom'
                        : 'dropdown-menu submnu-custom'
                    }
                  >
                    <div className="custom-scroll-bar">
                      <ul className="p-0 m-0">
                        {menuOption.subMenuOptions.map((subMenuOption) => (
                          <li key={subMenuOption.lable}>
                            <NavLink
                              className="dropdown-item"
                              to={subMenuOption.value}
                            >
                              {subMenuOption.lable}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={menuOption.lable}>
                  <NavLink
                    exact
                    to={menuOption.value}
                    className="fs-16 d-flex align-items-center"
                  >
                    <FontAwesomeIcon
                      icon={menuOption.icon}
                      title={menuOption.lable}
                      className="list-icon"
                    />
                    <span className="pt-1">{menuOption.lable}</span>
                  </NavLink>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

MenuBar.defaultProps = {};

MenuBar.propTypes = {
  collapseToggle: PropTypes.func.isRequired,
};
export default MenuBar;
