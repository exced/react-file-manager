import React, { Component } from 'react'
import FileManager from '../../lib'
import { Icon, Button, Form, Input, Modal } from 'antd'

const ButtonGroup = Button.Group
const FormItem = Form.Item

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
  file: 'https://github.com/exced/react-file-manager/blob/master/public/images/file.png',
  folder: 'https://github.com/exced/react-file-manager/blob/master/public/images/folder.png',
}

const modals = {
  editFolder: "Modifier dossier",
  editFile: "Modifier fichier",
  addFolder: "Nouveau dossier",
  addFile: "Nouvea fichier",
}

const ModalForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form, title } = props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        title={title}
        okText="OK"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="Titre">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Titre requis' }],
            })(
              <Input placeholder="Titre" />
              )}
          </FormItem>
        </Form>
      </Modal>
    );
  }
)

export default class Default extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: initial,
      modal: null,
    }
  }

  remove = (item) => {
    // cascade
  }

  toggleModal = (modal) => this.setState({ modal })

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

  renderPreviewItem = (item) => (
    <div style={{ textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' }}>
      <img src={item.children.length > 0 ? images.folder : images.file} alt={item.title} style={{ width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 }} />
      <span style={{ width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.title}</span>
    </div>
  )

  // Triggered when user click on Breadcrumb
  renderPreviewColumn = (item) => {

    // folder
    if (item.children.length > 0) {
      return (
        <div style={{ textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' }}>
          <img src={images.folder} alt={item.title} style={{ width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 }} />
          <span style={{ width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.title}</span>
          <p style={{ marginTop: 10 }}>
            <ButtonGroup>
              <Button onClick={() => this.toggleModal(modals.editFolder)} icon="edit" />
              <Button onClick={() => this.toggleModal(modals.addFolder)} icon="folder-add" />
              <Button onClick={() => this.toggleModal(modals.addFile)} icon="file-add" />
              <Button onClick={() => this.remove(item)} type="danger" icon="delete" />
            </ButtonGroup>
          </p>
        </div>
      )
    }
    // file
    return (
      <div style={{ textAlign: 'center', margin: 'auto', marginTop: 170, width: 200, height: 200, border: '1px solid', borderRadius: 6, borderColor: '#ccc' }}>
        <img src={images.file} alt={item.title} style={{ width: 70, height: 70, margin: 'auto', display: 'block', marginTop: 40 }} />
        <span style={{ width: 150, textAlign: 'left', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{item.title}</span>
        <p style={{ marginTop: 10 }}>
          <ButtonGroup>
            <Button onClick={() => this.toggleModal(modals.editFile)} icon="edit" />
            <Button onClick={() => this.remove(item)} type="danger" icon="delete" />
          </ButtonGroup>
        </p>
      </div>
    )
  }

  render() {
    const { map, modal } = this.state

    const Modals = (
      <div>
        <ModalForm
          ref={form => this.form = form}
          title={modals.editFolder}
          visible={modal && modal === modals.editFolder}
          onCancel={() => this.toggleModal(null)}
          onCreate={() => this.toggleModal(null)}
        />
        <ModalForm
          ref={form => this.editFileform = form}
          title={modals.editFile}
          visible={modal && modal === modals.editFile}
          onCancel={() => this.toggleModal(null)}
          onCreate={() => this.toggleModal(null)}
        />
        <ModalForm
          ref={form => this.addFolderform = form}
          title={modals.addFolder}
          visible={modal && modal === modals.addFolder}
          onCancel={() => this.toggleModal(null)}
          onCreate={() => this.toggleModal(null)}
        />
        <ModalForm
          ref={form => this.addFileform = form}
          title={modals.addFile}
          visible={modal && modal === modals.addFile}
          onCancel={() => this.toggleModal(null)}
          onCreate={() => this.toggleModal(null)}
        />
      </div>
    )

    return (
      <div>
        <FileManager
          initial={map}
          rootId={"0"}
          onChange={map => this.setState({ map })}
          renderItem={this.renderItem}
          renderPreviewItem={this.renderPreviewItem}
          renderPreviewColumn={this.renderPreviewColumn}
        />
        {Modals}
      </div>
    )
  }
}
