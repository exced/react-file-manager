import React from 'react'
import { storiesOf } from '@storybook/react'
import FileManager from '../lib'
import { Icon } from 'antd'

const map = {
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

const renderItem = (item) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ flex: 1 }}>
      <div style={{ float: 'left' }}>
        <img src={item.children.length > 0 ? '/images/folder.png' : '/images/file.png'} alt={item.title} style={{ width: 22, height: 22 }} />
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

const renderPreviewItem = (item) => (
  <div style={{ textAlign: 'center', margin: 'auto', width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' }}>
    <img src={item.children.length > 0 ? '/images/folder.png' : '/images/file.png'} alt={item.title} style={{ width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 }} />
    <span style={{ width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.title}</span>
  </div>
)

storiesOf('File Manager', module)
  .add('Default', () => <FileManager initial={map} rootId={"0"} renderItem={renderItem} renderPreviewItem={renderPreviewItem} />)