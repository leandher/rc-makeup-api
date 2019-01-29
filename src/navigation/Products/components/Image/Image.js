import React from 'react';

import styles from './Image.module.css';

const Image = ({ src, name, onClick }) => (
  <img src={src} alt={name} className={styles.Image} onClick={onClick} role="presentation" />
);

Image.defaultProps = {};

export default Image;
