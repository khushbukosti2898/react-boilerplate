import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import GoogleLogin from 'react-google-login';
import { useAuth } from '../hooks/useAuth';
import { setItemInStorage } from '../utils/helper';
import avatar from '../assests/images/avatar.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_KEY;
  const history = useHistory();
  const auth = useAuth();

  const onLoginClick = (e, googleData) => {
    if (!e) {
      setItemInStorage('user', {
        email: googleData.profileObj?.email,
        name: googleData.profileObj?.name,
        profileURL: googleData.profileObj?.imageUrl,
      });
    } else {
      e.preventDefault();
      setItemInStorage('user', {
        email,
        profileURL: avatar,
      });
    }
    auth.login();
    history.push('/');
  };

  const responseGoogle = (response) => {
    // eslint-disable-next-line no-console
    console.log(response);
    onLoginClick(false, response);
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
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="mt-2">
                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormGroup>
                <Button color="primary mr-2">Login</Button>
                <GoogleLogin
                  clientId={clientId}
                  render={(renderProps) => (
                    <Button
                      color="primary"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login with google
                    </Button>
                  )}
                  // buttonText="Login with google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy="single_host_origin"
                  // isSignedIn
                />
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
