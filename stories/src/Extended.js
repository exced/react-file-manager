import React, { Component } from 'react'
import FileManager from '../../lib'
import { Icon, Button, Modal, Tooltip } from 'antd'
import { uniqueId } from 'lodash'
import CreateFolder from './Components/CreateFolder'
import CreateFile from './Components/CreateFile'
import EditText from './Components/EditText'

const ButtonGroup = Button.Group
const { confirm } = Modal

const types = {
  folder: "folder",
  file: "file",
}

const modals = {
  folder: types.folder,
  file: types.file,
}

const initial = {
  "0": {
    id: "0",
    title: "Root",
    type: types.folder,
    children: ["1"],
    parent: null,
  },
  "1": {
    id: "1",
    title: "title1",
    type: types.folder,
    children: ["2", "3"],
    parent: "0",
  },
  "2": {
    id: "2",
    title: "title2",
    type: types.file,
    children: [],
    parent: "1",
  },
  "3": {
    id: "3",
    title: "title3",
    type: types.folder,
    children: ["4", "5"],
    parent: "1",
  },
  "4": {
    id: "4",
    title: "title4",
    type: types.file,
    children: [],
    parent: "3",
  },
  "5": {
    id: "5",
    title: "title5",
    type: types.file,
    children: [],
    parent: "3",
  },
}

const images = {
  file: 'https://raw.githubusercontent.com/exced/react-file-manager/master/public/images/file.png',
  folder: 'https://raw.githubusercontent.com/exced/react-file-manager/master/public/images/folder.png',
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: initial,
      input: {},
    }
  }

  toggleModal = (modal) => {
    this.setState({ modal })
  }

  onClickAddFolder = (parentId) => {
    this.setState({ input: { parentId } })
    this.toggleModal(modals.folder)
  }

  onAddFolder = (input) => {
    this.toggleModal(null)
    const { map, input: { parentId } } = this.state
    const folder = {
      id: `@@${uniqueId()}`,
      title: input.title,
      type: types.folder,
      children: [],
      parent: parentId
    }
    this.setState({
      map: {
        ...map,
        [parentId]: {
          ...map[parentId],
          children: [...map[parentId].children, folder.id]
        },
        [folder.id]: folder
      }
    })
  }

  onClickRemoveFolder = (item) => confirm({
    title: "Remove this folder ?",
    content: item.title,
    onOk: () => this.onRemoveFolder(item.id),
    onCancel: () => { },
  })

  onRemoveFolder = (id) => {
    const { map } = this.state
    const { [id]: folder, ...rest } = map
    this.setState({
      map: {
        ...rest,
        [folder.parent]: {
          ...map[folder.parent],
          children: map[folder.parent].children.filter(e => e !== id)
        },
      }
    })
  }

  onChangeFolder = (id, input) => {
    const { map } = this.state
    this.setState({
      map: {
        ...map,
        [id]: { ...map[id], ...input }
      }
    })
  }

  onClickAddFile = (parentId) => {
    this.setState({ input: { parentId } })
    this.toggleModal(modals.file)
  }

  onAddFile = (input) => {
    this.toggleModal(null)
    const { map, input: { parentId } } = this.state
    const file = {
      id: `@@${uniqueId()}`,
      title: input.title,
      type: types.file,
      children: [],
      parent: parentId
    }
    this.setState({
      map: {
        ...map,
        [parentId]: {
          ...map[parentId],
          children: [...map[parentId].children, file.id]
        },
        [file.id]: file
      }
    })
  }

  onClickRemoveFile = (item) => confirm({
    title: "Remove this file ?",
    content: item.title,
    onOk: () => this.onRemoveFile(item.id),
    onCancel: () => { },
  })

  onRemoveFile = (id) => {
    const { map } = this.state
    const { [id]: file, ...rest } = map
    this.setState({
      map: {
        ...rest,
        [file.parent]: {
          ...map[file.parent],
          children: map[file.parent].children.filter(e => e !== id)
        },
      }
    })
  }

  onChangeFile = (id, input) => {
    const { map } = this.state
    console.log(map[id])
    this.setState({
      map: {
        ...map,
        [id]: { ...map[id], ...input }
      }
    })
  }

  renderItem = (item, index) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: 1 }}>
        <img src={item.type === types.folder ? images.folder : images.file} alt={item.title} style={{ width: 22, height: 22, float: 'left' }} />
      </div>
      <div style={{ flex: 5 }}>
        <span style={{ width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.title}</span>
      </div>
      <div style={{ flex: 1 }}>
        {item.type === types.folder && <Icon style={{ float: 'right' }} type="right" />}
      </div>
    </div>
  )

  renderPreview = (item, index) => {
    // folder
    if (item.type === types.folder) {
      return (
        <div style={{ textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' }}>
          <img src={images.folder} alt={item.title} style={{ width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 }} />
          <EditText
            value={item.title}
            onChange={title => this.onChangeFolder(item.id, { title })}
            size="small"
            placeholder="Title"
          />
          <div style={{ marginTop: 10 }}>
            <ButtonGroup>
              <Tooltip title="New folder">
                <Button onClick={() => this.onClickAddFolder(item.id)} icon="folder-add" />
              </Tooltip>
              <Tooltip title="New file">
                <Button onClick={() => this.onClickAddFile(item.id)} icon="file-add" />
              </Tooltip>
              <Tooltip title="Remove folder">
                <Button onClick={() => this.onClickRemoveFolder(item.id)} type="danger" icon="delete" />
              </Tooltip>
            </ButtonGroup>
          </div>
        </div>
      )
    }
    // file
    return (
      <div style={{ textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' }}>
        <img src={images.file} alt={item.title} style={{ width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 }} />
        <EditText
          value={item.title}
          onChange={title => this.onChangeFile(item.id, { title })}
          size="small"
          placeholder="Title"
        />
        <div style={{ marginTop: 10 }}>
          <ButtonGroup>
            <Tooltip title="Remove file">
              <Button onClick={() => this.onClickRemoveFile(item.id)} type="danger" icon="delete" />
            </Tooltip>
          </ButtonGroup>
        </div>
      </div>
    )
  }

  render() {
    const { map, modal } = this.state

    return (
      <div>
        <CreateFolder visible={modal ? modal === modals.folder : false} onCancel={() => this.toggleModal(null)} onSubmit={this.onAddFolder} />
        <CreateFile visible={modal ? modal === modals.file : false} onCancel={() => this.toggleModal(null)} onSubmit={this.onAddFile} />
        <FileManager
          map={map}
          rootId={"0"}
          onChange={map => this.setState({ map })}
          onChangeRow={(target, source, destination) => console.log('onChangeRow')}
          onChangeColumn={(target, source, destination) => console.log('onChangeColumn')}
          renderItem={this.renderItem}
          renderPreview={this.renderPreview}
        />
      </div>
    )
  }
}
