import React from 'react'
import { storiesOf } from '@storybook/react'
import Default from './src/Default'
import Stress from './src/Stress'

storiesOf('File Manager', module)
  .add('Default', () => <Default />)
  .add('Stress', () => <Stress />)