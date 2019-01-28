import React from 'react';
import './Colors.css';

const Colors = ({ colors }) => (
  <div className="Color-Section">
    {colors.map(({ hex_value: hexValue, colour_name: name }, index) => (
      <div
        key={`${hexValue}-${index}`}
        className="Color"
        style={{ backgroundColor: hexValue }}
        title={name}
      />
    ))}
  </div>
);

Colors.defaultProps = {};

export default Colors;
