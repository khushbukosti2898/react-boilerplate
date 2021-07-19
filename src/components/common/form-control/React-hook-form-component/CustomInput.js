import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Input,
  Label,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  FormText,
} from 'reactstrap';
import { Controller } from 'react-hook-form';

const CustomInput = ({
  type,
  name,
  placeholder,
  className,
  label,
  isRequired,
  error,
  disabled,
  labelClassName,
  formGroupClassName,
  control,
  rules,
  prepend,
  append,
  defaultValue,
  formText,
  changeHandler,
}) => (
  <FormGroup className={formGroupClassName}>
    {label && (
      <Label className={labelClassName} for={name}>
        {label}
        {isRequired && <span style={{ color: 'red' }}> * </span>}
        {formText && <FormText>{`(${formText})`}</FormText>}
      </Label>
    )}
    <InputGroup>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => (
          <>
            {prepend && (
              <InputGroupAddon addonType="prepend">
                <InputGroupText>{prepend}</InputGroupText>
              </InputGroupAddon>
            )}
            <Input
              id={name}
              type={type}
              name={name}
              className={className}
              placeholder={placeholder}
              disabled={disabled}
              {...field}
              onChange={(event) => {
                field.onChange(event);
                changeHandler(event.target.value, name);
              }}
            />
            {append && (
              <InputGroupAddon addonType="append">
                <InputGroupText>{append}</InputGroupText>
              </InputGroupAddon>
            )}
          </>
        )}
      />
    </InputGroup>
    {error && error.message && (
      <span className="text-danger">{error.message}</span>
    )}
  </FormGroup>
);

CustomInput.defaultProps = {
  label: '',
  type: 'text',
  className: '',
  placeholder: '',
  disabled: false,
  isRequired: false,
  labelClassName: '',
  formGroupClassName: '',
  error: {},
  rules: {},
  prepend: '',
  append: '',
  defaultValue: '',
  formText: '',
  changeHandler: () => {},
};

CustomInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  control: PropTypes.object.isRequired,
  rules: PropTypes.object,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  labelClassName: PropTypes.string,
  formGroupClassName: PropTypes.string,
  error: PropTypes.object,
  prepend: PropTypes.any,
  append: PropTypes.any,
  defaultValue: PropTypes.any,
  formText: PropTypes.string,
  changeHandler: PropTypes.func,
};

export default CustomInput;
