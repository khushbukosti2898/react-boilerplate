/* eslint-disable no-shadow */
import React from 'react';
import Select from 'react-select';
import { FormGroup, FormText, Label } from 'reactstrap';
import PropTypes from 'prop-types';

const ReactSelect = ({
  name,
  value,
  title,
  className,
  error,
  isDisabled,
  isRequired,
  isClearable,
  isLoading,
  isMulti,
  isSearchable,
  label,
  loadingMessage,
  menuPlacement,
  noOptionsMessage,
  onChange,
  options,
  helperText,
  validationHandler,
}) => {
  const refSelect = React.useRef();

  const onValidationChange = (value) => {
    let errorMessage = '';
    if (value.length === 0 && isRequired) {
      errorMessage = `Please enter ${title}.`;
    }
    validationHandler(name, errorMessage);
  };

  return (
    <FormGroup>
      {label ? (
        <>
          <Label for={name}>{label}</Label>
          {isRequired ? <span className="text-danger">*</span> : null}
        </>
      ) : null}
      <Select
        className={className}
        classNamePrefix="react_select"
        isClearable={isClearable}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isMulti={isMulti}
        isSearchable={isSearchable}
        loadingMessage={() => loadingMessage}
        menuPlacement={menuPlacement}
        name={name}
        noOptionsMessage={() => noOptionsMessage}
        onChange={(value) => onChange(name, value)}
        options={options}
        onBlur={() => {
          if (refSelect.current) {
            const value = refSelect.current.select.getValue();
            onValidationChange(value);
          }
        }}
        ref={refSelect}
        value={value}
      />
      {helperText && <FormText color="muted">{helperText}</FormText>}
      {error ? <span className="text-danger fs-12">{error}</span> : null}
    </FormGroup>
  );
};

ReactSelect.defaultProps = {
  className: '',
  error: '',
  helperText: '',
  isClearable: true,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRequired: false,
  label: '',
  loadingMessage: 'Loading...',
  menuPlacement: 'bottom',
  noOptionsMessage: 'No options',
  validationHandler: () => {},
  value: null,
  isSearchable: false,
  title: '',
};

ReactSelect.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  helperText: PropTypes.string,
  isClearable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isMulti: PropTypes.bool,
  isRequired: PropTypes.bool,
  isSearchable: PropTypes.bool,
  label: PropTypes.string,
  menuPlacement: PropTypes.string,
  name: PropTypes.string.isRequired,
  noOptionsMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  validationHandler: PropTypes.func,
  value: PropTypes.object,
  loadingMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
};

export default ReactSelect;
