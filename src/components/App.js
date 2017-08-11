import React, { Component } from 'react';
import Header from './Header';
import AddItem from './AddItem'
import List from './ListItem';
import Footer from './Footer';
import '../assets/style/app.css';
import '../assets/style/main.css';

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