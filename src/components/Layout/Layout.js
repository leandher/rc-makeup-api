/* global window */
import React, { Component, ReactElement } from 'react';

import { Menu } from 'react-feather';

import Header from '../Header';
import Sidebar from '../Sidebar';

const mql = window.matchMedia('(min-width: 800px)');

type Props = {
  children: ReactElement,
};
class Layout extends Component<Props> {
  state = {
    docked: mql.matches,
    open: false,
  };

  componentDidMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetOpen = open => {
    this.setState({ open });
  };

  mediaQueryChanged = () => {
    this.setState({
      docked: mql.matches,
      open: false,
    });
  };

  handleOpen = ev => {
    const { open } = this.state;
    this.setState({ open: !open });

    if (ev) {
      ev.preventDefault();
    }
  };

  renderHeaderContent = () => {
    const { docked } = this.state;
    return <span>{!docked && <Menu onClick={this.handleOpen} color="white" size={24} />}</span>;
  };

  render() {
    const { children } = this.props;
    const { docked, open } = this.state;
    return (
      <Sidebar
        docked={docked}
        open={open}
        onSetOpen={this.onSetOpen}
        styles={{ sidebar: { zIndex: 20 }, overlay: { zIndex: 19 } }}
      >
        <Header title={this.renderHeaderContent()}>{children}</Header>
      </Sidebar>
    );
  }
}

export default Layout;
