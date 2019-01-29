import React, { Component, ReactElement } from 'react';
import ReactSidebar from 'react-sidebar';
import { Link } from 'react-router-dom';

import Header from '../Header';
import './Sidebar.css';

type Props = {
  children: ReactElement,
};
class Sidebar extends Component<Props> {
  state = {};

  renderContent = () => (
    <Header
      title="React Makeup"
      style={{
        width: 256,
        height: '100%',
      }}
    >
      <div className="Sidebar-List">
        <Link to="/home" className="Sidebar-Item">
          Home
        </Link>
        <Link to="/list" className="Sidebar-Item">
          Makeup List
        </Link>
        <hr />
      </div>
    </Header>
  );

  render() {
    const { children, ...rest } = this.props;

    return (
      <ReactSidebar sidebar={this.renderContent()} {...rest}>
        {children}
      </ReactSidebar>
    );
  }
}

export default Sidebar;
