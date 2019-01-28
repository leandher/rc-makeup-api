import React from 'react';

import './Image.css';

const Image = ({ src, name, onClick }) => (
  <img src={src} alt={name} className="Image" onClick={onClick} role="presentation" />
);

Image.defaultProps = {};

export default Image;
