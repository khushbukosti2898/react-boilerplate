/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Col, Row, Button } from 'reactstrap';
import FileUpload from '../common/FileUpload';
import { checkValidation } from '../common/form-control/formRules';
import CustomInput from '../common/form-control/simple-component/CustomInput';
import ReactSelect from '../common/ReactSelect';

const initailValue = {
  email: '',
  password: '',
  address: '',
  age: '',
  mobile: '',
  checkbox: false,
  url: '',
  radio: 'radio 1',
  range: 20,
  color: '#4e73df',
  file: [],
  reactSelect: null,
};

function SimpleInput() {
  const [formData, setFormData] = useState(initailValue);
  const [errors, setErrors] = useState({});
  const [showPwd, setShowPwd] = useState(false);

  const {
    email,
    password,
    address,
    age,
    mobile,
    checkbox,
    url,
    radio,
    range,
    color,
    file,
    reactSelect,
  } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    const validationError = checkValidation(errors, {
      email,
      password,
      address,
      age,
      mobile,
      url,
      file,
      reactSelect,
    });
    if (Object.keys(validationError).length !== 0) {
      setErrors(validationError);
    } else {
      // eslint-disable-next-line no-alert
      alert(`Submited form data ---> ${JSON.stringify(formData)}`);
    }
  };

  const onChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validationHandler = (name, error) => {
    setErrors({ ...errors, [name]: error });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Row>
          <Col md="8">
            <CustomInput
              name="email"
              value={email}
              label="Email"
              title="email"
              placeholder="Enter email"
              isRequired
              reqType="email"
              onChange={onChange}
              validationHandler={validationHandler}
              error={errors.email}
            />
          </Col>
          <Col md="8">
            <CustomInput
              type={`${showPwd ? 'text' : 'password'}`}
              name="password"
              value={password}
              label="Password"
              title="password"
              placeholder="Enter password"
              isRequired
              reqType="password"
              onChange={onChange}
              validationHandler={validationHandler}
              error={errors.password}
              appendIcon={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <FontAwesomeIcon
                  icon={showPwd ? faEye : faEyeSlash}
                  size="sm"
                  onClick={() => setShowPwd(!showPwd)}
                />
              }
            />
          </Col>
          <Col md="8">
            <CustomInput
              type="textarea"
              name="address"
              value={address}
              label="Address"
              title="address"
              placeholder="Enter address"
              isRequired
              onChange={onChange}
              validationHandler={validationHandler}
              error={errors.address}
            />
          </Col>
          <Col md="8">
            <CustomInput
              type="text"
              name="age"
              value={age}
              label="age"
              title="Age"
              placeholder="Enter age"
              isRequired
              reqType="number"
              onChange={onChange}
              validationHandler={validationHandler}
              error={errors.age}
              maxValue={100}
            />
          </Col>
          <Col md="8">
            <CustomInput
              type="text"
              name="mobile"
              value={mobile}
              label="Mobile"
              title="Mobile"
              placeholder="Enter mobile"
              isRequired
              reqType="mobile"
              onChange={onChange}
              validationHandler={validationHandler}
              error={errors.mobile}
            />
          </Col>
          <Col md="8">
            <CustomInput
              type="checkbox"
              name="checkbox"
              checked={checkbox}
              label="Checkbox"
              title="checkbox"
              placeholder="Enter checkbox"
              isRequired
              onChange={onChange}
              validationHandler={validationHandler}
              error={errors.checkbox}
            />
          </Col>
          <Col md="8" className="d-flex">
            <CustomInput
              type="radio"
              name="radio"
              value="radio 1"
              checked={radio === 'radio 1'}
              label="Radio 1"
              placeholder="Enter radio"
              onChange={onChange}
              error={errors.radio}
              id="radio1"
            />
            <CustomInput
              type="radio"
              name="radio"
              value="radio 2"
              label="Radio 2"
              checked={radio === 'radio 2'}
              placeholder="Enter radio"
              onChange={onChange}
              error={errors.radio}
              outerClassName="mx-3"
              id="radio2"
            />
          </Col>
          <Col md="8">
            <CustomInput
              type="url"
              name="url"
              value={url}
              label="url"
              title="url"
              placeholder="Enter url"
              isRequired
              onChange={onChange}
              reqType="url"
              validationHandler={validationHandler}
              error={errors.url}
            />
          </Col>
          <Col md="8">
            <CustomInput
              type="range"
              name="range"
              value={range}
              label="Range"
              onChange={onChange}
            />
          </Col>
          <Col md="8">
            <CustomInput
              type="color"
              name="color"
              value={color}
              label="Color"
              onChange={onChange}
            />
          </Col>
          <Col md="8">
            <FileUpload
              label="File"
              name="file"
              onChange={onChange}
              error={errors.file}
              multiple
              maxFiles={5}
              accept="image/*,.pdf"
              maxSize={3000000}
              validationHandler={validationHandler}
            />
          </Col>
          <Col md="8">
            <ReactSelect
              label="React select"
              name="reactSelect"
              title="react select"
              value={reactSelect}
              isRequired
              onChange={onChange}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
              error={errors.reactSelect}
              validationHandler={validationHandler}
            />
          </Col>
        </Row>
        <Button color="primary mt-3">Submit</Button>
      </form>
    </>
  );
}

export default SimpleInput;
