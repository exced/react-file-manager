import React, { Component } from 'react'
import FileManager from './lib'
import { Icon, Button } from 'antd'

const ButtonGroup = Button.Group

const initial = {
  "0": {
    id: "0",
    title: "Root",
    children: ["1"],
    parent: null,
  },
  "1": {
    id: "1",
    title: "title1",
    children: ["2", "3"],
    parent: "0",
  },
  "2": {
    id: "2",
    title: "title2",
    children: [],
    parent: "1",
  },
  "3": {
    id: "3",
    title: "title3",
    children: ["4", "5"],
    parent: "1",
  },
  "4": {
    id: "4",
    title: "title4",
    children: [],
    parent: "3",
  },
  "5": {
    id: "5",
    title: "title5",
    children: [],
    parent: "3",
  },
}

const images = {
  file: '/images/file.png',
  folder: '/images/folder.png',
}

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: initial,
    }
  }

  renderItem = (item, index) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: 1 }}>
        <div style={{ float: 'left' }}>
          <img src={item.children.length > 0 ? images.folder : images.file} alt={item.title} style={{ width: 22, height: 22 }} />
        </div>
      </div>
      <div style={{ flex: 5 }}>
        <span style={{ width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.title}</span>
      </div>
      <div style={{ flex: 1 }}>
        {item.children.length > 0 &&
          <div style={{ float: 'right' }}>
            <Icon type="right" />
          </div>}
      </div>
    </div>
  )

  renderPreview = (item, index) => {
    // folder
    if (item.children.length > 0) {
      return (
        <div style={{ textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' }}>
          <img src={images.folder} alt={item.title} style={{ width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 }} />
          <span style={{ width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.title}</span>
          <div style={{ marginTop: 10 }}>
            <ButtonGroup>
              <Button onClick={() => { }} icon="edit" />
              <Button onClick={() => { }} icon="folder-add" />
              <Button onClick={() => { }} icon="file-add" />
              <Button onClick={() => { }} type="danger" icon="delete" />
            </ButtonGroup>
          </div>
        </div>
      )
    }
    // file
    return (
      <div style={{ textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' }}>
        <img src={images.file} alt={item.title} style={{ width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 }} />
        <span style={{ width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.title}</span>
        <div style={{ marginTop: 10 }}>
          <ButtonGroup>
            <Button onClick={() => { }} icon="edit" />
            <Button onClick={() => { }} type="danger" icon="delete" />
          </ButtonGroup>
        </div>
      </div>
    )
  }

  render() {
    const { map } = this.state

    return (
      <FileManager
        map={map}
        rootId={"0"}
        onChange={map => this.setState({ map })}
        onChangeRow={(target, source, destination) => console.log('onChangeRow')}
        onChangeColumn={(target, source, destination) => console.log('onChangeColumn')}
        renderItem={this.renderItem}
        renderPreview={this.renderPreview}
      />
    )
  }
}
