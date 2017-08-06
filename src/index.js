import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';

const render = () => {
  ReactDOM.render (
    <App store = {store} state = {store.getState()}/>,
    document.getElementById('root')
  );
};

render();

store.subscribe(render)
