import React from 'react';

import './Image.css';

const Image = ({ src, name }) => <img src={src} alt={name} className="Image" />;

Image.defaultProps = {};

export default Image;
