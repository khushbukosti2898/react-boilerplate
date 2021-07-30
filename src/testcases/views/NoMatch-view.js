/* eslint-disable class-methods-use-this */
import { screen } from '@testing-library/react';

class NoMatchView {
  constructor(dom) {
    this.dom = dom;
  }

  get errorContainer() {
    return screen.getByTestId('error');
  }

  get message() {
    return screen.getByTestId('error.message');
  }

  get homeLink() {
    return screen.getByTestId('error.home-link');
  }
}

export default NoMatchView;
