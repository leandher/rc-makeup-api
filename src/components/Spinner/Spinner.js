/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';

import './Spinner.css';
import { Spinner as SpinnerContext } from '../../store';

const { withSpinnerContext } = SpinnerContext;

type Props = {
  spinning: Boolean,
};

class Spinner extends Component<Props> {
  state = {};

  render() {
    const { spinning } = this.props;

    if (spinning === false) return null;

    return (
      <div className="Overlay">
        <div className="Spinner">
          <div className="Bounce1" />
          <div className="Bounce2" />
          <div className="Bounce3" />
        </div>
      </div>
    );
  }
}

Spinner.defaultProps = {};

export default withSpinnerContext()(Spinner);
