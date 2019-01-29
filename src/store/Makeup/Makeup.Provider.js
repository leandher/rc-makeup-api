/* global fetch */
import React, { Component, ReactElement, createContext } from 'react';
import Spinner from '../Spinner';
import tags from './tags';

const { withSpinnerContext } = Spinner;

const DEFAULT_STATE = {
  products: [],
  tags,
  product: {},
};

export const MakeupContext = createContext(DEFAULT_STATE);

type Props = {
  children: ReactElement,
  showSpinner: () => void,
  hideSpinner: () => void,
};
class MakeupProvider extends Component<Props> {
  state = DEFAULT_STATE;

  load = (filter = '') => {
    const { showSpinner, hideSpinner } = this.props;
    showSpinner();

    fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?${filter}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ products: data, product: {} });
        hideSpinner();
      })
      .catch(() => {
        hideSpinner();
      });
  };

  findOne = (id = '') => {
    const { showSpinner, hideSpinner } = this.props;
    showSpinner();

    fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then(response => response.json())
      .then(data => {
        this.setState({ product: data, products: [] });
        hideSpinner();
      })
      .catch(() => {
        hideSpinner();
      });
  };

  render() {
    const { children } = this.props;
    return (
      <MakeupContext.Provider
        value={{
          ...this.state,
          loadProducts: this.load,
          findOne: this.findOne,
        }}
      >
        {children}
      </MakeupContext.Provider>
    );
  }
}

MakeupProvider.defaultProps = {};

export default withSpinnerContext()(MakeupProvider);
