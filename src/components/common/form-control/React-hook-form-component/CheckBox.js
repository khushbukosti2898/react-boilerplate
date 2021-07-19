import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput, FormGroup, Label } from 'reactstrap';
import { Controller } from 'react-hook-form';

const CheckBox = React.forwardRef(
  (
    {
      name,
      placeholder,
      className,
      label,
      isRequired,
      error,
      disabled,
      labelClassName,
      formGroupLable,
      formGroupClassName,
      control,
      rules,
      changeHandler,
      defaultValue,
    },
    ref,
  ) => (
    <FormGroup className={formGroupClassName}>
      {formGroupLable && (
        <Label className={labelClassName} for={name}>
          {formGroupLable}
          {isRequired && <span style={{ color: 'red' }}> * </span>}
        </Label>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={(controllerProps) => (
          <CustomInput
            type="checkbox"
            id={name}
            label={label}
            name={name}
            className={className}
            placeholder={placeholder}
            disabled={disabled}
            {...controllerProps}
            onChange={(e) => {
              controllerProps.onChange(e.target.checked);
              changeHandler(e, name);
            }}
            checked={controllerProps.value}
            ref={ref}
          />
        )}
      />
      {error && error.message && (
        <p className="text-danger fs-12">{error.message}</p>
      )}
    </FormGroup>
  ),
);

CheckBox.defaultProps = {
  placeholder: 'Defalut Check Box',
  className: '',
  disabled: false,
  isRequired: false,
  labelClassName: '',
  formGroupClassName: '',
  error: {},
  rules: {},
  formGroupLable: '',
  onChange: () => {},
  changeHandler: () => {},
  defaultValue: false,
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  rules: PropTypes.object,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  labelClassName: PropTypes.string,
  formGroupClassName: PropTypes.string,
  formGroupLable: PropTypes.string,
  error: PropTypes.object,
  onChange: PropTypes.func,
  changeHandler: PropTypes.func,
  defaultValue: PropTypes.bool,
};

export default CheckBox;
