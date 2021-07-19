/* eslint-disable max-len */
/* eslint-disable no-alert */
import React from 'react';
import { useForm } from 'react-hook-form';
import { Col, Row, Button } from 'reactstrap';
import CustomInput from '../common/form-control/React-hook-form-component/CustomInput';
import { minLengthRule, alphabetRule } from '../common/form-control/formRules';

function HookCutomInput() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      text: '',
    },
  });
  return (
    <>
      <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
        <Row>
          <Col md="6">
            <CustomInput
              label="Enter text"
              type="text"
              name="text"
              placeholder="Enter text"
              isRequired
              control={control}
              rules={{
                required: 'Text is required',
                pattern: alphabetRule(),
                minLength: minLengthRule(3),
              }}
              error={errors.text}
              formText="Accept text only with min length 3"
            />
          </Col>
        </Row>
        <Button color="primary mt-3">Submit</Button>
      </form>
    </>
  );
}

export default HookCutomInput;
