import React from 'react';

import './Container.css';

const Container = ({ children, ...rest }) => <div className="Container" {...rest}>{children}</div>;

Container.propTypes = {
  children: () => {},
};

Container.defaultProps = {};

export default Container;
