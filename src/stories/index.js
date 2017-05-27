import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import List from '../List';

storiesOf('List', module)
  .add('title', () => (
    <List />
  ));
