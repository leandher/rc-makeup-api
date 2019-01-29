import React, { Component, ReactElement } from 'react';

import './Header.css';

type Props = {
  children: ReactElement,
  title: String,
};
class Header extends Component<Props> {
  state = {};

  render() {
    const { children, title, ...rest } = this.props;

    return (
      <div className="Root-Container" {...rest}>
        <div className="Header">{title}</div>
        {children}
      </div>
    );
  }
}

export default Header;
