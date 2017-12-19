import React from 'react'

import { storiesOf } from '@storybook/react'

import FileManager from '../lib'

storiesOf('File Manager', module)
  .add('Default', () => <FileManager />)