import React, { useState } from 'react';
import { Col, Row } from 'reactstrap';
import CustomDatePicker from '../components/common/CustomDatePicker';
import MenuHeader from '../components/layout/MenuHeader';

const initailValue = {
  date: null,
  year: null,
  time: null,
  dateTime: null,
};

function ReactSelectDemo() {
  const [formData, setFormData] = useState(initailValue);
  const [errors, setErrors] = useState({});

  const { date, year, time, dateTime } = formData;

  const onChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validationHandler = (name, error) => {
    setErrors({ ...errors, [name]: error });
  };

  return (
    <>
      <MenuHeader title="React Date Picker" />
      <Row className="bg-white pt-4">
        <Col md="4">
          <CustomDatePicker
            name="date"
            label="Select date"
            value={date}
            onChange={onChange}
            validationHandler={validationHandler}
            error={errors.date}
            isRequired
            placeholder="Select date"
            maxDate={new Date()}
            title="date"
          />
        </Col>
        <Col md="4">
          <CustomDatePicker
            name="year"
            label="Select year"
            value={year}
            onChange={onChange}
            validationHandler={validationHandler}
            error={errors.year}
            isRequired
            placeholder="Select year"
            showYearPicker
            title="year"
          />
        </Col>
        <Col md="4">
          <CustomDatePicker
            name="time"
            label="Select time"
            value={time}
            onChange={onChange}
            validationHandler={validationHandler}
            error={errors.time}
            isRequired
            placeholder="Select time"
            showTimeSelectOnly
            title="time"
          />
        </Col>
      </Row>
      <Row>
        <Col md="4">
          <CustomDatePicker
            name="dateTime"
            label="Select date and time"
            value={dateTime}
            onChange={onChange}
            validationHandler={validationHandler}
            error={errors.dateTime}
            isRequired
            placeholder="Select date and time"
            maxDate={new Date()}
            showTimeSelect
            title="date and time"
          />
        </Col>
      </Row>
    </>
  );
}

export default ReactSelectDemo;
