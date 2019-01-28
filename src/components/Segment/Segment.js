import React from 'react';

import './Segment.css';

const Segment = ({ children, ...rest }) => <div className="Segment" {...rest}>{children}</div>;

Segment.propTypes = {
  children: () => {},
};

Segment.defaultProps = {};

export default Segment;
