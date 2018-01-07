import React from 'react'
import { storiesOf } from '@storybook/react'
import Default from './src/Default'
import Stress from './src/Stress'
import Color from './src/Color'

storiesOf('File Manager', module)
  .add('Default', () => <Default />)
  .add('Stress', () => <Stress />)
  .add('Color', () => <Color itemSelectedColor='#66ff99' dropBackgroundColor='#99ddff'/>)