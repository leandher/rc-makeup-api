import React from 'react';

import styles from './Container.module.css';

const Container = ({ children, ...rest }) => (
  <div className={styles.Container} {...rest}>
    {children}
  </div>
);

Container.propTypes = {
  children: () => {},
};

Container.defaultProps = {};

export default Container;
