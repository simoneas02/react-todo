import React, { Component } from 'react';
import List from './List';

class App extends Component {
  render () {
    return (
      <div>
        <h1>TO DO List</h1>
        <List />
      </div>
    )
  }
}

export default App;