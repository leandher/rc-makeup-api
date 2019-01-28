import React from 'react';

export default props => {
  const { size, strokeColor } = Object.assign(
    {
      size: 24,
      strokeColor: 'rgba(0, 0, 0, 0.54)',
    },
    props,
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="feather feather-chevron-down"
      width={size}
      height={size}
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color={strokeColor}
      viewBox="0 0 24 24"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
};
