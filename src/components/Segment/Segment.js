import React from 'react';

import styles from './Segment.module.css';

const Segment = ({ children, ...rest }) => (
  <div className={styles.Segment} {...rest}>
    {children}
  </div>
);

Segment.propTypes = {
  children: () => {},
};

Segment.defaultProps = {};

export default Segment;
