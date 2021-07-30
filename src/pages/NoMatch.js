import React from 'react';
// import { Link } from 'react-router';
import ReactHelmet from '../components/common/ReactHelmet';

const NoMatch = () => {
  return (
    <div
      className="error-template text-text-primary 
      d-flex justify-content-center align-items-center"
      data-testid="error"
    >
      <ReactHelmet title="Page Not Found" />
      <div className="text-center">
        <h1 className="text-danger mb-2">Oops!!!</h1>
        <p data-testid="error.message">
          The page you are looking for was not found
        </p>
        <a
          href="/"
          className="btn btn-primary mt-4"
          data-testid="error.home-link"
        >
          Go back to home
        </a>
      </div>
    </div>
  );
};

export default NoMatch;
