import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Button, Modal, Tooltip } from 'antd';
import { uniqueId } from 'lodash';
import App from './App';
import EditText from './EditText';
import Types from './Types';

const ButtonGroup = Button.Group;
const { confirm } = Modal;

const images = {
  file: 'https://raw.githubusercontent.com/exced/react-file-manager/master/public/images/file.png',
  folder: 'https://raw.githubusercontent.com/exced/react-file-manager/master/public/images/folder.png',
};

export default class Facade extends Component {

  deselect = () => {
    this.app.deselect()
  }

  onAddFolder = (parentId) => {
    const { map, onChange } = this.props;
    const folder = {
      id: `@@${uniqueId()}`,
      title: 'New folder',
      type: Types.folder,
      children: [],
      parent: parentId
    }
    onChange({
      ...map,
      [parentId]: {
        ...map[parentId],
        children: [...map[parentId].children, folder.id]
      },
      [folder.id]: folder
    })
  }

  onClickRemoveFolder = (item) => confirm({
    title: "Remove this folder ?",
    content: item.title,
    onOk: () => this.onRemoveFolder(item.id),
    onCancel: () => { },
  })

  removeFolder = (map, id) => {
    const { [id]: folder, ...rest } = map
    return folder.parent ? {
      ...rest,
      [folder.parent]: {
        ...map[folder.parent],
        children: map[folder.parent].children.filter(e => e !== id)
      }
    } : rest
  }

  cascadeRemoveFolder = (map, id) => {
    const { [id]: folder } = map
    const c = folder.children.reduce((a, e) => a[e].type === Types.folder ?
      this.cascadeRemoveFolder(a, e) : this.removeFile(a, e), map)
    return this.removeFolder(c, id)
  }

  onRemoveFolder = (id) => {
    const { map, onChange } = this.props;
    onChange(this.cascadeRemoveFolder(map, id));
  }

  onChangeFolder = (id, input) => {
    const { map, onChange } = this.props;
    onChange({
      ...map,
      [id]: { ...map[id], ...input }
    })
  }

  onAddFile = (parentId) => {
    const { map, onChange } = this.props;
    const file = {
      id: `@@${uniqueId()}`,
      title: 'New file',
      type: Types.file,
      children: [],
      parent: parentId
    }
    onChange({
      ...map,
      [parentId]: {
        ...map[parentId],
        children: [...map[parentId].children, file.id]
      },
      [file.id]: file
    })
  }

  onClickRemoveFile = (item) => confirm({
    title: "Remove this file ?",
    content: item.title,
    onOk: () => this.onRemoveFile(item.id),
    onCancel: () => { },
  })

  removeFile = (map, id) => {
    const { [id]: file, ...rest } = map
    return file.parent ? {
      ...rest,
      [file.parent]: {
        ...map[file.parent],
        children: map[file.parent].children.filter(e => e !== id)
      }
    } : rest
  }

  onRemoveFile = (id) => {
    const { map, onChange } = this.props;
    onChange(this.removeFile(map, id))
  }

  onChangeFile = (id, input) => {
    const { map, onChange } = this.props;
    onChange({
      ...map,
      [id]: { ...map[id], ...input }
    })
  }

  renderItem = (item, index) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ flex: 1 }}>
        <img src={item.type === Types.folder ? images.folder : images.file} alt={item.title} style={{ width: 22, height: 22, float: 'left' }} />
      </div>
      <div style={{ flex: 5 }}>
        <span style={{ width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.title}</span>
      </div>
      <div style={{ flex: 1 }}>
        {item.type === Types.folder && <Icon style={{ float: 'right' }} type="right" />}
      </div>
    </div>
  )

  renderPreview = (item, index) => {
    const { rootId } = this.props;
    // folder
    if (item.type === Types.folder) {
      if (item.id === rootId) {
        return (
          <div style={{ textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' }}>
            <img src={images.folder} alt={item.title} style={{ width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 }} />
            <span>{item.title}</span>
            <div style={{ marginTop: 10 }}>
              <ButtonGroup>
                <Tooltip title="New folder">
                  <Button onClick={() => this.onAddFolder(item.id)} icon="folder-add" />
                </Tooltip>
                <Tooltip title="New file">
                  <Button onClick={() => this.onAddFile(item.id)} icon="file-add" />
                </Tooltip>
              </ButtonGroup>
            </div>
          </div>
        )
      }
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
                <Button onClick={() => this.onAddFolder(item.id)} icon="folder-add" />
              </Tooltip>
              <Tooltip title="New file">
                <Button onClick={() => this.onAddFile(item.id)} icon="file-add" />
              </Tooltip>
              <Tooltip title="Remove folder">
                <Button onClick={() => this.onClickRemoveFolder(item)} type="danger" icon="delete" />
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
              <Button onClick={() => this.onClickRemoveFile(item)} type="danger" icon="delete" />
            </Tooltip>
          </ButtonGroup>
        </div>
      </div>
    )
  }

  render() {
    const {
      map,
      rootId,
      onChange,
    } = this.props;

    return (
      <App
        ref={ref => this.app = ref}
        map={map}
        rootId={rootId}
        onChange={onChange}
        onChangeRow={this.props.onChangeRow}
        onChangeColumn={this.props.onChangeColumn}
        onOutsideDrop={this.props.onOutsideDrop}
        dropzoneConfig={this.props.dropzoneConfig}
        renderItem={this.props.renderItem ? this.props.renderItem : this.renderItem}
        renderPreview={this.props.renderPreview ? this.props.renderPreview : this.renderPreview}
        itemSelectedColor={this.props.itemSelectedColor}
        dropBackgroundColor={this.props.dropBackgroundColor}
      />
    );
  }
}

Facade.propTypes = {
  map: PropTypes.object.isRequired,
  rootId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onChangeRow: PropTypes.func,
  onChangeColumn: PropTypes.func,
}

Facade.defaultProps = {
  onChangeRow: (id, src, dest) => { },
  onChangeColumn: (id, src, dest) => { },
  onOutsideDrop: (id, files) => { },
  itemSelectedColor: '#1a53ff',
  dropBackgroundColor: '#cccdce',
  dropzoneConfig: {}
}