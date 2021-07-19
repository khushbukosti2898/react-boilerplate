/* eslint-disable max-len */
import React from 'react';
import { Col, Row } from 'reactstrap';
import SimpleInput from '../components/CustomInputUse.js/SimpleInputForm';
import HookCustomInput from '../components/CustomInputUse.js/HookCutomInputForm';
import MenuHeader from '../components/layout/MenuHeader';

function Input() {
  return (
    <div>
      <MenuHeader title="Form" />
      <Row className="bg-white pt-4">
        <Col md="6">
          <h5>Hook form</h5>
          <HookCustomInput />
        </Col>
        <Col md="6">
          <h5>Simple form</h5>
          <SimpleInput />
        </Col>
      </Row>
    </div>
  );
}

export default Input;
