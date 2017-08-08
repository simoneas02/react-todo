import React, { Component } from 'react';
import Header from './Header';
import AddItem from './AddItem'
import List from './List';
import Footer from './Footer';
import '../assets/css/app.css';
import '../assets/css/main.css';

class App extends Component {

  render () {

    return (

      <div className="app">
        <Header />

        <main className='main'>

          <AddItem data = {this.props.state} store = {this.props.store} />
          <List data = {this.props.state} store = {this.props.store} />

        </main>

        <Footer />
      </div>

    )
  }
}

export default App;