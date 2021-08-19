import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { FormGroup, FormText, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

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
  isRtl,
  isCreatable,
}) => {
  const refSelect = React.useRef();
  const [updatedOp, setupdatedOp] = useState(options);

  const onValidationChange = (selectedValue) => {
    let errorMessage = '';
    if (selectedValue.length === 0 && isRequired) {
      errorMessage = `Please enter ${title}.`;
    }
    validationHandler(name, errorMessage);
  };

  const inputProps = {
    className,
    classNamePrefix: 'react_select',
    isClearable,
    isDisabled,
    isLoading,
    isMulti,
    isSearchable,
    loadingMessage: () => loadingMessage,
    menuPlacement,
    isRtl,
    name,
    noOptionsMessage: () => noOptionsMessage,
    onChange: (selectedVal) => {
      let op = [];
      onChange(name, selectedVal);
      if (selectedVal) {
        if (Array.isArray(selectedVal)) op = [...updatedOp, ...selectedVal];
        else op = [...updatedOp, selectedVal];
        op = op.filter(
          (element, ind, arr) =>
            arr.findIndex((t) => t.value === element.value) === ind,
        );
        setupdatedOp(op);
      }
    },
    options: updatedOp,
    onBlur: () => {
      if (refSelect.current) {
        const isCreatableEle = isCreatable
          ? refSelect?.current?.Creatable?.getValue()
          : refSelect?.current?.select?.getValue();
        if (isCreatableEle) onValidationChange(isCreatableEle);
      }
    },
    ref: refSelect,
    value,
  };

  return (
    <FormGroup className={className}>
      {label ? (
        <>
          <Label for={name}>{label}</Label>
          {isRequired ? <span className="text-danger">*</span> : null}
        </>
      ) : null}
      {isCreatable ? (
        <CreatableSelect {...inputProps} />
      ) : (
        <Select {...inputProps} />
      )}
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
  isRtl: false,
  isCreatable: false,
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
  value: PropTypes.any,
  loadingMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  isRtl: PropTypes.bool,
  isCreatable: PropTypes.bool,
};

export default ReactSelect;
