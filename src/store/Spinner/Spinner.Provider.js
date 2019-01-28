import React, { Component, ReactElement, createContext } from 'react';

const DEFAULT_STATE = {
  spinning: false,
};

export const SpinnerContext = createContext(DEFAULT_STATE);

type Props = {
  children: ReactElement,
};
class SpinnerProvider extends Component<Props> {
  state = DEFAULT_STATE;

  hide = () => {
    this.setState({ spinning: false });
  };

  show = () => {
    this.setState({ spinning: true });
  };

  render() {
    const { children } = this.props;
    return (
      <SpinnerContext.Provider
        value={{
          ...this.state,
          hideSpinner: this.hide,
          showSpinner: this.show,
        }}
      >
        {children}
      </SpinnerContext.Provider>
    );
  }
}

SpinnerProvider.defaultProps = {};

export default SpinnerProvider;
