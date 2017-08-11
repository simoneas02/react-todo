import React, { Component } from 'react';
import GithubCorner from 'react-github-corner'
import logoReact from '../assets/icons/logo-react.svg';
import logoRedux from '../assets/icons/logo-redux.svg';
import '../assets/style/header.css';

class Header extends Component {

  render () {

    return (
      <header className="header">
        <div className="section">
          <img src={logoReact} className="section__logo" alt="logo react" />
          <span className="section__plus">+</span>
          <img src={logoRedux} className="section__logo" alt="logo redux" />
        </div>

        <GithubCorner octoColor='var(--bg-color)' bannerColor='var(--primary-color)' href="https://github.com/simoneas02/react-todo" />
      </header>
    )

  }

}

export default Header