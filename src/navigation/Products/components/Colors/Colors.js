import React from 'react';
import styles from './Colors.module.css';

const Colors = ({ colors }) => (
  <div className={styles.Color_Section}>
    {colors.map(({ hex_value: hexValue, colour_name: name }, index) => (
      <div
        key={`${hexValue}-${index}`}
        className={styles.Color}
        style={{ backgroundColor: hexValue }}
        title={name}
      />
    ))}
  </div>
);

Colors.defaultProps = {};

export default Colors;
