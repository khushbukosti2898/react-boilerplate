/* eslint-disable no-shadow */
import React from 'react';
import {
  FormGroup,
  FormText,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { getRegExp } from '../formRules';

const CustomInput = ({
  checked,
  className,
  disabled,
  error,
  fixLength,
  helperText,
  isRequired,
  label,
  minLength,
  maxLength,
  name,
  onChange,
  placeholder,
  reqType,
  style,
  type,
  validationHandler,
  value,
  title,
  prependIcon,
  appendIcon,
  maxValue,
  outerClassName,
  id,
}) => {
  const inputProps = {
    type,
    checked,
    name,
    id: id || name,
    value,
    placeholder,
    className,
    style,
    disabled,
  };

  const onValidationChange = (e, validationHandler) => {
    if (!validationHandler) return;
    const { value } = e.target;
    let errorMessage = '';
    if (type !== 'checkbox' && !value && isRequired) {
      errorMessage = `Please enter ${title}.`;
    } else if (minLength && value.length < minLength) {
      errorMessage = `${title} must be at least ${minLength} characters long.`;
    } else if (maxLength && value.length > maxLength) {
      errorMessage = `${title} must be ${minLength} characters long.`;
    } else if (fixLength && value.length !== fixLength) {
      errorMessage = `${title} must be ${fixLength} characters.`;
    } else if (reqType === 'number' && maxValue && Number(value) > maxValue) {
      errorMessage = `${title} should be less than ${maxValue}`;
    } else if (value && reqType && !getRegExp(reqType).test(value)) {
      errorMessage = `Please enter valid ${title}.`;
    }
    validationHandler(name, errorMessage);
  };

  const onChangeHandler = (e, onInputChange) => {
    if (reqType === 'number')
      e.target.value = e.target.value
        .replace(/[^0-9.]/g, '')
        .replace(/(\..*)\./g, '$1');
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    onInputChange(name, inputValue);
  };

  return (
    <FormGroup className={`mt-2 ${outerClassName}`}>
      {type === 'checkbox' ? (
        <Label>
          <Input
            {...inputProps}
            onChange={(e) => onChangeHandler(e, onChange)}
            onBlur={(e) => onValidationChange(e, validationHandler)}
          />
          {` ${label}`}
        </Label>
      ) : (
        <>
          {label ? (
            <>
              <Label for={name}>{label}</Label>
              {isRequired ? <span className="text-danger">*</span> : null}
            </>
          ) : null}
          <InputGroup>
            {prependIcon && (
              <InputGroupAddon addonType="prepend">
                <InputGroupText className="h-100">{prependIcon}</InputGroupText>
              </InputGroupAddon>
            )}
            <Input
              {...inputProps}
              onChange={(e) => onChangeHandler(e, onChange)}
              onBlur={(e) => onValidationChange(e, validationHandler)}
            />
            {appendIcon && (
              <InputGroupAddon addonType="append">
                <InputGroupText className="h-100">{appendIcon}</InputGroupText>
              </InputGroupAddon>
            )}
          </InputGroup>
        </>
      )}
      {helperText && <FormText color="muted">{helperText}</FormText>}
      {error ? <span className="text-danger fs-12">{error}</span> : null}
    </FormGroup>
  );
};

CustomInput.defaultProps = {
  label: '',
  type: 'text',
  className: '',
  placeholder: '',
  disabled: false,
  isRequired: false,
  defaultValue: '',
  helperText: '',
  validationHandler: () => {},
  checked: false,
  fixLength: 0,
  minLength: 0,
  maxLength: 0,
  onChange: () => {},
  reqType: '',
  style: {},
  value: '',
  error: '',
  title: '',
  appendIcon: false,
  prependIcon: false,
  maxValue: 999999,
  outerClassName: '',
  id: '',
};

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  validationHandler: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  defaultValue: PropTypes.any,
  helperText: PropTypes.string,
  checked: PropTypes.bool,
  fixLength: PropTypes.number,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  onChange: PropTypes.func,
  reqType: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.any,
  error: PropTypes.string,
  title: PropTypes.string,
  appendIcon: PropTypes.any,
  prependIcon: PropTypes.any,
  maxValue: PropTypes.number,
  outerClassName: PropTypes.string,
  id: PropTypes.string,
};

export default CustomInput;
