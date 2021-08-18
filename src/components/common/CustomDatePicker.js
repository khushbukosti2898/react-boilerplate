/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { FormGroup, FormText, InputGroup, Label } from 'reactstrap';

const CustomDatePicker = ({
  name,
  value,
  label,
  placeholder,
  isRequired,
  minDate,
  maxDate,
  showTimeSelect,
  showYearPicker,
  showTimeSelectOnly,
  minTime,
  maxTime,
  excludeTimes,
  disabled,
  showYearDropdown,
  onChange,
  error,
  helperText,
  validationHandler,
  title,
}) => {
  const onValidationChange = (event) => {
    let errorMessage = '';
    if (!event && isRequired) {
      errorMessage = `Please enter ${title}.`;
    }
    validationHandler(name, errorMessage);
  };

  return (
    <FormGroup>
      {label && (
        <Label for={name}>
          {label}
          {isRequired && <span style={{ color: 'red' }}> * </span>}
        </Label>
      )}
      <InputGroup>
        <DatePicker
          onChange={(date) => onChange(name, date)}
          onBlur={(event) => onValidationChange(event.target.value)}
          onSelect={(date) => onValidationChange(date)}
          className={`form-control ${disabled && 'disabled'}`}
          selected={value}
          calendarClassName={showTimeSelect && 'react-custom-datepicker'}
          placeholderText={placeholder || 'Select Date'}
          isClearable
          showMonthDropdown
          showYearDropdown={showYearDropdown}
          yearDropdownItemNumber={10}
          scrollableYearDropdown
          closeOnScroll
          showTimeSelectOnly={showTimeSelectOnly}
          showTimeSelect={showTimeSelectOnly ? true : showTimeSelect}
          minDate={minDate}
          maxDate={maxDate}
          showYearPicker={showYearPicker}
          dateFormat={
            showYearPicker
              ? 'yyyy'
              : showTimeSelect
              ? 'MM/dd/yyyy h:mm aa'
              : showTimeSelectOnly
              ? 'h:mm aa'
              : 'MM/dd/yyyy'
          }
          minTime={minTime}
          maxTime={maxTime}
          excludeTimes={excludeTimes}
          disabled={disabled}
          timeClassName={(time) => {
            return time.getHours() > 12 ? 'text-success' : 'text-danger';
          }}
        />
      </InputGroup>
      {helperText && <FormText color="muted">{helperText}</FormText>}
      {error ? <span className="text-danger fs-12">{error}</span> : null}
    </FormGroup>
  );
};

CustomDatePicker.defaultProps = {
  label: '',
  placeholder: 'Select date',
  isRequired: false,
  error: '',
  minDate: null,
  maxDate: null,
  showTimeSelect: false,
  showYearPicker: false,
  showTimeSelectOnly: false,
  minTime: {},
  maxTime: {},
  excludeTimes: [],
  disabled: false,
  showYearDropdown: false,
  value: '',
  helperText: '',
  validationHandler: () => {},
  title: '',
};

CustomDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  showTimeSelect: PropTypes.bool,
  showYearPicker: PropTypes.bool,
  showTimeSelectOnly: PropTypes.bool,
  minTime: PropTypes.object,
  maxTime: PropTypes.object,
  excludeTimes: PropTypes.array,
  disabled: PropTypes.bool,
  showYearDropdown: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  helperText: PropTypes.string,
  validationHandler: PropTypes.func,
  title: PropTypes.string,
};

export default CustomDatePicker;
