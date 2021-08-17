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
  CustomInput as CInput,
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
  dataTestId,
  radioList,
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
    if (!value && isRequired) {
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

  const onCheckboxValidationChange = (event) => {
    if (!validationHandler) return;
    const { checked } = event.target;
    let errorMessage = '';
    if (!checked && isRequired) {
      errorMessage = `Please check ${title}.`;
    }
    validationHandler(name, errorMessage);
  };

  const onChangeHandler = (e, onInputChange) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      onCheckboxValidationChange(e);
    } else onValidationChange(e, validationHandler);
    if (reqType === 'number')
      e.target.value = e.target.value
        .replace(/[^0-9.]/g, '')
        .replace(/(\..*)\./g, '$1');
    const inputValue = type === 'checkbox' ? checked : value;
    onInputChange(name, inputValue);
  };

  const renderInput = () => {
    if (type === 'checkbox')
      return (
        <Label>
          <CInput
            {...inputProps}
            onChange={(e) => onChangeHandler(e, onChange)}
            onBlur={(e) => onCheckboxValidationChange(e)}
            label={label}
          />
        </Label>
      );
    if (type === 'radio')
      return (
        <>
          <Label>
            <span>{`${label}`}</span>
            <br />
            {radioList.map((option) => (
              <Label key={option.value} className="mr-1">
                <Input
                  type="radio"
                  checked={option.value === value}
                  disabled={disabled}
                  className={className}
                  id={option.value}
                  label={option.label}
                  name={name}
                  onChange={(e) => onChangeHandler(e, onChange)}
                  onBlur={(e) => onCheckboxValidationChange(e)}
                  style={style}
                  value={option.value}
                />
                {` ${option.label}`}
              </Label>
            ))}
          </Label>
        </>
      );
    return (
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
            data-testid={dataTestId}
          />
          {appendIcon && (
            <InputGroupAddon addonType="append">
              <InputGroupText className="h-100">{appendIcon}</InputGroupText>
            </InputGroupAddon>
          )}
        </InputGroup>
      </>
    );
  };

  return (
    <FormGroup className={`${outerClassName}`}>
      {renderInput()}
      {helperText && <FormText color="muted">{helperText}</FormText>}
      {error ? (
        <p data-testid="input-error" className="text-danger fs-12 m-0">
          {error}
        </p>
      ) : null}
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
  dataTestId: '',
  radioList: [],
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
  dataTestId: PropTypes.string,
  radioList: PropTypes.array,
};

export default CustomInput;
