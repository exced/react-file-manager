import React, { Component } from 'react'
import FileManager, { Types } from './lib'
import axios from 'axios'

const initial = {
  '0': {
    id: '0',
    title: 'Root',
    type: Types.folder,
    children: ['1'],
    parent: null,
  },
  '1': {
    id: '1',
    title: 'title1',
    type: Types.folder,
    children: ['2', '3'],
    parent: '0',
  },
  '2': {
    id: '2',
    title: 'title2',
    type: Types.file,
    children: [],
    parent: '1',
  },
  '3': {
    id: '3',
    title: 'title3',
    type: Types.folder,
    children: ['4', '5'],
    parent: '1',
  },
  '4': {
    id: '4',
    title: 'title4',
    type: Types.file,
    children: [],
    parent: '3',
  },
  '5': {
    id: '5',
    title: 'title5',
    type: Types.file,
    children: [],
    parent: '3',
  },
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: initial,
    }
  }

  onOutsideDrop = (parentId, files) => {
    if (files.length <= 3) {
      let data = new FormData()
      for (let i = 0; i < files.length; i++) {
        data.append('files', files[i])
      }
      axios.post('http://localhost:8000/upload', data)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  render() {
    const { map } = this.state
    return (
      <FileManager
        map={map}
        rootId='0'
        onChange={map => this.setState({ map })}
        onOutsideDrop={this.onOutsideDrop}
        dropzoneConfig={{
          name: 'files',
          inputProps: {
            type: 'file',
            enctype: 'multipart/form-data',
            action: '/files',
            method: 'post'
          }
        }}
      />
    )
  }
}
