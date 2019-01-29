import React, { Component, ReactElement } from 'react';

import styles from './Header.module.css';

type Props = {
  children: ReactElement,
  title: String,
};
class Header extends Component<Props> {
  state = {};

  render() {
    const { children, title, ...rest } = this.props;

    return (
      <div className={styles.Root_Container} {...rest}>
        <div className={styles.Header}>{title}</div>
        {children}
      </div>
    );
  }
}

export default Header;
