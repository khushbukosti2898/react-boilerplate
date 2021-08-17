/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import CustomInput from '../components/common/form-control/simple-component/CustomInput';
import ReactSelect from '../components/common/ReactSelect';
import MenuHeader from '../components/layout/MenuHeader';

const initailValue = {
  reactSelect: null,
  gender: null,
  searchable: false,
  clearable: true,
  disabled: false,
  rtl: false,
  loading: false,
  multi: false,
  isCreatable: false,
};

function ReactSelectDemo() {
  const [formData, setFormData] = useState(initailValue);
  const [errors, setErrors] = useState({});

  const creatableOptions = [
    { value: 'chocolate', label: 'Chocolate', isDisabled: true },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const {
    reactSelect,
    searchable,
    clearable,
    disabled,
    rtl,
    loading,
    multi,
    isCreatable,
  } = formData;

  const onChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validationHandler = (name, error) => {
    setErrors({ ...errors, [name]: error });
  };

  return (
    <>
      <MenuHeader title="React Select" />
      <Row className="bg-white pt-4">
        <Col md="4">
          <ReactSelect
            label="React select"
            name="reactSelect"
            title="react select"
            value={reactSelect}
            isRequired
            onChange={onChange}
            options={creatableOptions}
            error={errors.reactSelect}
            validationHandler={validationHandler}
            isSearchable={searchable}
            isClearable={clearable}
            isDisabled={disabled}
            isRtl={rtl}
            isLoading={loading}
            isMulti={multi}
            noOptionsMessage="No more options"
            isCreatable={isCreatable}
          />
        </Col>
      </Row>
      <Row>
        <Col md="12" className="d-flex">
          <CustomInput
            type="checkbox"
            name="searchable"
            checked={searchable}
            label="Searchable"
            title="searchable"
            isRequired
            onChange={onChange}
            outerClassName="mr-2"
          />
          <CustomInput
            type="checkbox"
            name="clearable"
            checked={clearable}
            label="Clearable"
            title="clearable"
            isRequired
            onChange={onChange}
            outerClassName="mr-2"
          />
          <CustomInput
            type="checkbox"
            name="disabled"
            checked={disabled}
            label="Disabled"
            title="disabled"
            isRequired
            onChange={onChange}
            outerClassName="mr-2"
          />
          <CustomInput
            type="checkbox"
            name="rtl"
            checked={rtl}
            label="RTL"
            title="rtl"
            isRequired
            onChange={onChange}
            outerClassName="mr-2"
          />
          <CustomInput
            type="checkbox"
            name="loading"
            checked={loading}
            label="Loading"
            title="loading"
            isRequired
            onChange={onChange}
            outerClassName="mr-2"
          />
          <CustomInput
            type="checkbox"
            name="multi"
            checked={multi}
            label="Multiple"
            title="multi"
            isRequired
            onChange={onChange}
            outerClassName="mr-2"
          />
          <CustomInput
            type="checkbox"
            name="isCreatable"
            checked={isCreatable}
            label="Creatbale options (Make sure searchable is on)"
            title="isCreatable"
            isRequired
            onChange={onChange}
            outerClassName="mr-2"
          />
        </Col>
      </Row>
      <b>Selected value:&nbsp;</b>
      {reactSelect && Array.isArray(reactSelect)
        ? reactSelect?.map((sv) => `${sv.label} `)
        : reactSelect?.label}
    </>
  );
}

export default ReactSelectDemo;
