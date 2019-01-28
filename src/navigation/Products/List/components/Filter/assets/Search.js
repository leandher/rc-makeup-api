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
      className="feather feather-chevron-up"
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
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
};
