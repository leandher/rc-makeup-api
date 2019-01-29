/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';

import styles from './Spinner.module.css';
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
      <div className={styles.Overlay}>
        <div className={styles.Spinner}>
          <div className={styles.Bounce1} />
          <div className={styles.Bounce2} />
          <div className={styles.Bounce3} />
        </div>
      </div>
    );
  }
}

Spinner.defaultProps = {};

export default withSpinnerContext()(Spinner);
