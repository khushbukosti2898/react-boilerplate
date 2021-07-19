import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';
import { Controller } from 'react-hook-form';

const TextArea = ({
  name,
  placeholder,
  className,
  label,
  isRequired,
  error,
  disabled,
  labelClassName,
  formGroupClassName,
  rows,
  control,
  rules,
}) => (
  <FormGroup className={formGroupClassName}>
    {label && (
      <Label className={labelClassName} for={name}>
        {label}
        {isRequired && <span style={{ color: 'red' }}> * </span>}
      </Label>
    )}

    <Controller
      control={control}
      name={name}
      rules={rules}
      render={(controllerProps) => (
        <Input
          id={name}
          type="textarea"
          name={name}
          className={className}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          {...controllerProps}
        />
      )}
    />
    {error && <p className="text-danger fs-12">{error.message}</p>}
  </FormGroup>
);

TextArea.defaultProps = {
  label: 'Defalut Text Area',
  placeholder: 'Defalut Text Area',
  className: '',
  disabled: false,
  isRequired: false,
  labelClassName: '',
  formGroupClassName: '',
  error: {},
  rows: 4,
  rules: {},
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  rules: PropTypes.object,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  labelClassName: PropTypes.string,
  formGroupClassName: PropTypes.string,
  error: PropTypes.object,
};

export default TextArea;
