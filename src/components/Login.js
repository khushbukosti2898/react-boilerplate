import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { useAuth } from '../hooks/useAuth';
import { setItemInStorage } from '../utils/helper';
import { checkValidation } from './common/form-control/formRules';
import CustomInput from './common/form-control/simple-component/CustomInput';

const initailValue = {
  email: '',
  password: '',
};

const Login = () => {
  const [formData, setFormData] = useState(initailValue);
  const [errors, setErrors] = useState({});
  const onChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validationHandler = (name, error) => {
    setErrors({ ...errors, [name]: error });
  };

  const history = useHistory();
  const auth = useAuth();
  const onLoginClick = (e) => {
    e.preventDefault();
    const validationError = checkValidation(errors, {
      email: formData.email,
      password: formData.password,
    });
    if (Object.keys(validationError).length !== 0) {
      setErrors(validationError);
    } else {
      auth.login();
      setItemInStorage('user', {
        email: formData.email,
      });
      history.push('/');
    }
  };

  return (
    <Container>
      <Row className="justify-content-center align-items-center h-100vh">
        <Col sm="12" md={6}>
          <Card>
            <CardBody>
              <CardTitle tag="h3" className="text-center mb-5">
                Login
              </CardTitle>
              <Form onSubmit={onLoginClick}>
                <CustomInput
                  type="email"
                  name="email"
                  value={formData.email}
                  label="Email"
                  title="email"
                  placeholder="Enter email"
                  isRequired
                  reqType="email"
                  onChange={onChange}
                  validationHandler={validationHandler}
                  error={errors.email}
                  dataTestId="email"
                />
                <CustomInput
                  type="password"
                  name="password"
                  value={formData.password}
                  label="Password"
                  title="password"
                  placeholder="Enter password"
                  isRequired
                  reqType="password"
                  onChange={onChange}
                  validationHandler={validationHandler}
                  error={errors.password}
                  dataTestId="password"
                />
                <Button color="primary mt-2" data-testid="login">
                  Login
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
