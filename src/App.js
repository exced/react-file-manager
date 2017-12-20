import React from 'react'
import FileManager from './lib'
import { Icon } from 'antd'

const map = {
  "1": {
    id: "1",
    title: "title1",
    children: ["1", "2", "3"],
  },
  "2": {
    id: "2",
    title: "title2",
    children: [],
  },
  "3": {
    id: "3",
    title: "title3",
    children: ["4", "5"],
  },
  "4": {
    id: "4",
    title: "title4",
    children: [],
  },
  "5": {
    id: "5",
    title: "title5",
    children: [],
  },
}

const renderItem = (item) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1 }}>
      <div style={{ float: 'left' }}>
        <img src={item.children.length > 0 ? '/images/folder.png' : '/images/file.png'} alt={item.title} style={{ width: 22, height: 22 }} />
      </div>
    </div>
    <div style={{ flex: 5 }}>
      <div style={{ width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
        <span>{item.title}</span>
      </div>
    </div>
    <div style={{ flex: 1 }}>
      {item.children.length > 0 &&
        <div style={{ float: 'right' }}>
          <Icon type="right" />
        </div>}
    </div>
  </div>
)

const App = () => (
  <FileManager map={map} rootId={"1"} renderItem={renderItem} />
)

export default App
