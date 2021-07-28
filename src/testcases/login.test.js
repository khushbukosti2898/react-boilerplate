import { cleanup, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

import Login from '../components/Login';

const history = createMemoryHistory();

afterEach(cleanup);

describe('Test login component', () => {

  test('Test email is rendered', () => {
    render(<Login />);
    const emailElement = screen.getByTestId('email');
    expect(emailElement).toBeInTheDocument();
    expect(emailElement).toHaveAttribute("type", "email");
  });

  test('Test password is rendered', () => {
    render(<Login />);
    const emailElement = screen.getByTestId('password');
    expect(emailElement).toBeInTheDocument();
  });

  test('Test Login button is rendered', () => {
    render(<Login />);
    const emailElement = screen.getByTestId('login');
    expect(emailElement).toBeInTheDocument();
  });

  test('pass valid email to email input field', () => {
    render(<Login />);
    const emailElement = screen.getByTestId('email');
    userEvent.type(emailElement, "test@mail.com");
    expect(screen.getByTestId('email')).toHaveValue("test@mail.com");
    expect(screen.queryByTestId("input-error")).not.toBeInTheDocument();
  });

  test('pass invalid email to email input field', () => {
    render(<Login />);
    const emailElement = screen.getByTestId('email');
    userEvent.type(emailElement, "test");
    expect(screen.getByTestId("email")).toHaveValue("test");
    expect(screen.queryByTestId("input-error")).toBeInTheDocument();
    expect(screen.queryByTestId("input-error").textContent).toEqual("Please enter valid email.");
  });

  test('pass valid password to password input field', () => {
    render(<Login />);
    const passwordElement = screen.getByTestId('password');
    userEvent.type(passwordElement, "Abc@1234");
    expect(screen.getByTestId("password")).toHaveValue("Abc@1234");
    expect(screen.getByTestId('password').value).toMatch(/Abc@1234/);
    expect(screen.queryByTestId("input-error")).not.toBeInTheDocument();
  });

  test('pass invalid password to password input field', () => {
    render(<Login />);
    const passwordElement = screen.getByTestId('password');
    userEvent.type(passwordElement, "aa");
    expect(screen.getByTestId("password")).toHaveValue("aa");
    expect(screen.getByTestId('password').value).toMatch(/aa/);
    expect(screen.queryByTestId("input-error")).toBeInTheDocument();
    expect(screen.queryByTestId("input-error").textContent).toEqual("Please enter valid password.");
  });

  test('Without fill form click on login', () => {
    render(<Login />);
    expect(screen.getByTestId('email')).toHaveValue("");
    expect(screen.getByTestId('password')).toHaveValue("");
    const loginElement = screen.getByTestId('login');
    userEvent.click(loginElement);
    expect(screen.queryAllByTestId("input-error").length).toBeGreaterThan(0);
  });

  test('valid fill form click on login', () => {
    render(<Router history={history}><Login /></Router>);
    const emailElement = screen.getByTestId('email');
    userEvent.type(emailElement, "test@mail.com");
    const passwordElement = screen.getByTestId('password');
    userEvent.type(passwordElement, "Abc@1234");
    expect(screen.getByTestId('email')).toHaveValue("test@mail.com");
    expect(screen.getByTestId('password')).toHaveValue("Abc@1234");
    const loginElement = screen.getByTestId('login');
    userEvent.click(loginElement);
    expect(screen.queryAllByTestId("input-error").length).toEqual(0);
    expect(history.location.pathname).toBe('/');
  });
});

describe('Snapshot login test', () => {
  test('Snapshot login match', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
