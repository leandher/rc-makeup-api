import React from 'react';
import { MakeupContext } from './Makeup.Provider';

export default function withMakeupContext() {
  return WrappedComponent => {
    const Component = props => (
      <MakeupContext.Consumer>
        {context => <WrappedComponent {...context} {...props} />}
      </MakeupContext.Consumer>
    );

    return Component;
  };
}
