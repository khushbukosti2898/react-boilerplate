/* eslint-disable max-len */
import React from 'react';
import { Col, Row } from 'reactstrap';
import SimpleInput from '../components/CustomInputUse.js/SimpleInputForm';
import HookCustomInput from '../components/CustomInputUse.js/HookCutomInputForm';
import ReactHelmet from '../components/common/ReactHelmet';

function Input() {
  return (
    <>
      <ReactHelmet title="Form" />
      <h2>Input</h2>
      <hr />
      <Row>
        <Col md="6">
          <h5>Hook form</h5>
          <HookCustomInput />
        </Col>
        <Col md="6">
          <h5>Simple form</h5>
          <SimpleInput />
        </Col>
      </Row>
    </>
  );
}

export default Input;
