import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import App from '../components/App';

storiesOf('App', module)
  .add('title', () => (
    <App />
  ));
