import React, { Component } from 'react';
import Heart from './Heart';
import '../assets/css/heart.css';

class Footer extends Component {

  render () {

    return (
      <footer className="footer">
        <Heart />
      </footer>
    )

  }

}

export default Footer