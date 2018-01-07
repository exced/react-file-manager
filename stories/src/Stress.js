import React, { Component } from 'react'
import FileManager from '../../lib'
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
    children: ["2", "3", "4", "5"],
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
    children: ["6", "7"],
    parent: "1",
  },
  "4": {
    id: "4",
    title: "title4",
    children: ["8", "9"],
    parent: "1",
  },
  "5": {
    id: "5",
    title: "title5",
    children: [],
    parent: "1",
  },
  "6": {
    id: "6",
    title: "title6",
    children: [],
    parent: "3",
  },
  "7": {
    id: "7",
    title: "title7",
    children: [],
    parent: "3",
  },
  "8": {
    id: "8",
    title: "title8",
    children: [],
    parent: "4",
  },
  "9": {
    id: "9",
    title: "title9",
    children: ["10"],
    parent: "4",
  },
  "10": {
    id: "10",
    title: "title10",
    children: ["11"],
    parent: "9",
  },
  "11": {
    id: "11",
    title: "title11",
    children: ["12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
    parent: "10",
  },
  "12": {
    id: "12",
    title: "title12",
    children: [],
    parent: "11",
  },
  "13": {
    id: "13",
    title: "title13",
    children: [],
    parent: "11",
  },
  "14": {
    id: "14",
    title: "title14",
    children: [],
    parent: "11",
  },
  "15": {
    id: "15",
    title: "title15",
    children: [],
    parent: "11",
  },
  "16": {
    id: "16",
    title: "title16",
    children: [],
    parent: "11",
  },
  "17": {
    id: "17",
    title: "title17",
    children: [],
    parent: "11",
  },
  "18": {
    id: "18",
    title: "title18",
    children: [],
    parent: "11",
  },
  "19": {
    id: "19",
    title: "title19",
    children: [],
    parent: "11",
  },
  "20": {
    id: "20",
    title: "title20",
    children: [],
    parent: "11",
  },
  "21": {
    id: "21",
    title: "title21",
    children: [],
    parent: "11",
  },
  "22": {
    id: "22",
    title: "title22",
    children: [],
    parent: "11",
  },
  "23": {
    id: "23",
    title: "title23",
    children: [],
    parent: "11",
  },
  "24": {
    id: "24",
    title: "title24",
    children: [],
    parent: "11",
  },
  "25": {
    id: "25",
    title: "title25",
    children: [],
    parent: "11",
  },
  "26": {
    id: "26",
    title: "title26",
    children: [],
    parent: "11",
  },
  "27": {
    id: "27",
    title: "title27",
    children: [],
    parent: "11",
  },
  "28": {
    id: "28",
    title: "title28",
    children: [],
    parent: "11",
  },
  "29": {
    id: "29",
    title: "title29",
    children: [],
    parent: "11",
  },
  "30": {
    id: "30",
    title: "title30",
    children: [],
    parent: "11",
  },
}

const images = {
  file: 'https://raw.githubusercontent.com/exced/react-file-manager/master/public/images/file.png',
  folder: 'https://raw.githubusercontent.com/exced/react-file-manager/master/public/images/folder.png',
}

export default class Default extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: initial,
    }
  }

  renderItem = (item) => (
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
        rootId="0"
        onChange={map => this.setState({ map })}
        renderItem={this.renderItem}
        renderPreview={this.renderPreview}
      />
    )
  }
}
