import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import PropTypes from 'prop-types';

const ReactSelect = (props) => {
  const {
    control,
    options,
    name,
    rules,
    className,
    isSearchable,
    placeholder,
    isRequired,
    error,
    isClearable,
    formGroupClassName,
    labelClassName,
    label,
    isMulti,
    isDisabled,
    noOptionsMessage,
    defaultValue,
    changeHandler,
    menuPlacement,
    isLoading,
    loadingMessage,
  } = props;

  return (
    <div className={formGroupClassName || 'form-group'}>
      {label && (
        <label className={labelClassName} htmlFor={name}>
          {label}
          {isRequired && <span style={{ color: 'red' }}> * </span>}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={(controllerProps) => (
          <Select
            menuPlacement={menuPlacement}
            classNamePrefix="react_select"
            className={className}
            isSearchable={isSearchable}
            isClearable={isClearable}
            isMulti={isMulti}
            placeholder={placeholder}
            name={name}
            options={options}
            onMenuClose={() => {
              if (
                Array.isArray(controllerProps.value) &&
                controllerProps.value.length === 0
              ) {
                control.setValue(controllerProps.name, null);
              }
            }}
            onBlur={controllerProps.onBlur}
            onFocus={controllerProps.onFocus}
            value={controllerProps.value}
            isDisabled={isDisabled}
            noOptionsMessage={() => noOptionsMessage}
            isLoading={isLoading}
            loadingMessage={() => loadingMessage}
            {...controllerProps}
            onChange={(value) => {
              controllerProps.onChange(value);
              changeHandler(value, name);
            }}
          />
        )}
      />
      {error && error.message && (
        <p className="text-danger fs-12">{error.message}</p>
      )}
    </div>
  );
};

ReactSelect.defaultProps = {
  rules: {},
  label: 'Defalut Select',
  placeholder: 'Select',
  isRequired: false,
  className: '',
  labelClassName: '',
  formGroupClassName: '',
  isSearchable: false,
  isMulti: false,
  isClearable: true,
  error: {},
  isDisabled: false,
  noOptionsMessage: 'No options',
  defaultValue: null,
  changeHandler: () => {},
  menuPlacement: 'bottom',
  isLoading: false,
  loadingMessage: 'Loading...',
};

ReactSelect.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  rules: PropTypes.object,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  className: PropTypes.string,
  labelClassName: PropTypes.string,
  formGroupClassName: PropTypes.string,
  isSearchable: PropTypes.bool,
  isClearable: PropTypes.bool,
  isMulti: PropTypes.bool,
  error: PropTypes.object,
  isDisabled: PropTypes.bool,
  noOptionsMessage: PropTypes.string,
  defaultValue: PropTypes.any,
  changeHandler: PropTypes.func,
  menuPlacement: PropTypes.string,
  isLoading: PropTypes.bool,
  loadingMessage: PropTypes.string,
};

export default ReactSelect;
