/* eslint-disable react/jsx-wrap-multilines */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../hooks/useAuth';
import { getItemFromStorage, removeItemFromStorage } from '../../utils/helper';
import connectTheme from '../common/connectTheme';

const Header = ({ collapseToggle, toggleTheme, theme }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const history = useHistory();
  const user = useAuth();
  const onLogout = () => {
    user.logout();
    removeItemFromStorage('user');
    history.push('/');
  };
  const loggedInUser = user.authUser;
  const loggedInUserName = loggedInUser && loggedInUser.fullName;
  return (
    <div className="top-nav custom-shadow">
      <Row className="justify-content-between">
        <Col className="align-self-center p-0 w-auto">
          <span className="menu-icon ml-2">
            <FontAwesomeIcon
              icon={faArrowCircleLeft}
              onClick={collapseToggle}
              title="Menu"
              size="lg"
            />
          </span>
          <span>Common Component Panel</span>
        </Col>
        <Col className="d-flex justify-content-end">
          <div className="theme-toggle mx-2">
            Blue
            <label className="theme-toggle-input" htmlFor="theme-toggle">
              <input
                id="theme-toggle"
                type="checkbox"
                onChange={(e) => {
                  toggleTheme(e.target.checked ? 'dark' : 'light');
                }}
                checked={theme === 'dark'}
              />
              <span className="theme-toggle-circle" />
            </label>
            Orange
          </div>
          <div className="d-flex">
            <select onChange={(e) => window.doGTranslate(e.target.value)}>
              <option value="">Select Language</option>
              <option value="en|af">Afrikaans</option>
              <option value="en|en">English</option>
              <option value="en|fr">French</option>
              <option value="en|de">German</option>
              <option value="en|el">Greek</option>
              <option value="en|hi">Hindi</option>
              <option value="en|ur">Urdu</option>
            </select>
          </div>
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            className="right-drop-dwon ml-2 align-items-center d-flex"
          >
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"
              aria-expanded={dropdownOpen}
              className="p-0 dropdown-toggle align-items-center
              d-flex cursor-pointer"
            >
              <span className="mr-2 profile-pic">
                <img
                  src={getItemFromStorage('user')?.profileURL}
                  alt="profile_pic"
                />
              </span>
              <span className="profile-title">{loggedInUserName}</span>
              <span className="ml-3 d-flex" />
            </DropdownToggle>
            <DropdownMenu className="custom-shadow border-0">
              <DropdownItem onClick={onLogout}>Logout</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
    </div>
  );
};

Header.defaultProps = {};

Header.propTypes = {
  collapseToggle: PropTypes.func.isRequired,
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default connectTheme(Header);
