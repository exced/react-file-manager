import React from 'react'
import { storiesOf } from '@storybook/react'
import Default from './src/Default'

storiesOf('File Manager', module)
  .add('Default', () => <Default />)