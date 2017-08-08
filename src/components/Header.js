import React, { Component } from 'react';
import GithubCorner from 'react-github-corner'
import logo from '../assets/icons/logo.svg';
import '../assets/css/header.css';

class Header extends Component {

  render () {

    return (
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
        <h1 className="header__title">TODO List</h1>

        <GithubCorner octoColor='#212121' bannerColor='#61DAFB' href="https://github.com/simoneas02/react-todo" />
      </header>
    )

  }

}

export default Header