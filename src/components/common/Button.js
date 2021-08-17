import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonStrap } from 'reactstrap';

const Button = (props) => {
  const {
    id,
    className,
    type,
    color,
    size,
    style,
    loading,
    onClickFunc,
    outline,
    title,
    disabled,
    text,
    icon,
    active,
  } = props;

  const inputProps = { type, size, outline, title, color };
  if (style) {
    inputProps.style = style;
  }

  if (color) {
    inputProps.color = color;
  }

  if (id) inputProps.id = id;

  return (
    <ButtonStrap
      {...inputProps}
      className={`${className}`}
      onClick={onClickFunc}
      disabled={loading || disabled}
      active={active}
    >
      {icon && icon}
      <span className={` ${icon && 'mx-2'}`}>
        {loading ? 'Loading…' : text}
      </span>
    </ButtonStrap>
  );
};

Button.defaultProps = {
  className: '',
  type: 'button',
  color: 'primary',
  size: 'md',
  submitBtn: false,
  cancelBtn: false,
  createBtn: false,
  title: '',
  outline: false,
  loading: false,
  borderRadius: null,
  style: null,
  id: null,
  onClickFunc: () => {},
  disabled: false,
  text: '',
  icon: false,
  active: false,
};

Button.propTypes = {
  onClickFunc: PropTypes.func,
  type: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  size: PropTypes.string,
  submitBtn: PropTypes.bool,
  outline: PropTypes.bool,
  cancelBtn: PropTypes.bool,
  createBtn: PropTypes.bool,
  className: PropTypes.string,
  loading: PropTypes.bool,
  borderRadius: PropTypes.number,
  style: PropTypes.any,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.any,
  active: PropTypes.bool,
};

export default Button;
