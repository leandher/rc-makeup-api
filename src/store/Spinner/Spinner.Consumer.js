import React from 'react';
import { SpinnerContext } from './Spinner.Provider';

export default function withSpinnerContext() {
  return WrappedComponent => {
    const Component = props => (
      <SpinnerContext.Consumer>
        {context => <WrappedComponent {...context} {...props} />}
      </SpinnerContext.Consumer>
    );

    return Component;
  };
}
