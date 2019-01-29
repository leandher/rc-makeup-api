import React, { Component, ReactElement } from 'react';
import ReactSidebar from 'react-sidebar';
import { Link } from 'react-router-dom';

import Header from '../Header';
import styles from './Sidebar.module.css';

type Props = {
  children: ReactElement,
  onSetOpen: () => {},
};
class Sidebar extends Component<Props> {
  state = {};

  renderContent = () => {
    const { onSetOpen } = this.props;
    return (
      <Header
        title="React Makeup"
        style={{
          width: 256,
          height: '100%',
        }}
      >
        <div className={styles.Sidebar_List}>
          <Link
            to="/home"
            className={styles.Sidebar_Item}
            onClick={() => {
              onSetOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/list"
            className={styles.Sidebar_Item}
            onClick={() => {
              onSetOpen(false);
            }}
          >
            Makeup List
          </Link>
          <hr />
        </div>
      </Header>
    );
  };

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
