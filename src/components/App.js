import React, { Component } from 'react';
import AddItem from './AddItem'
import List from './List';

class App extends Component {

  render () {

    return (

      <div>

        <header>
          <h1>TODO List</h1>
        </header>

        <AddItem data = {this.props.state} store = {this.props.store} />

        <List data = {this.props.state} store = {this.props.store} />

      </div>

    )
  }
}

export default App;