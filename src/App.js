import React, { Component } from 'react';
import Navigator from './navigation';
import { Spinner, Makeup } from './store';

import './App.css';

class App extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <Spinner.Provider>
          <Makeup.Provider>
            <Navigator />
          </Makeup.Provider>
        </Spinner.Provider>
      </div>
    );
  }
}

export default App;
