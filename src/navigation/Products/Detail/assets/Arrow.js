import React from 'react';

export default props => {
  const { size, strokeColor } = Object.assign(
    {
      size: 20,
      strokeColor: 'rgba(0, 0, 0, 0.54)',
    },
    props,
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color={strokeColor}
      viewBox="0 0 20 20"
      className="feather feather-arrow-left"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
};
