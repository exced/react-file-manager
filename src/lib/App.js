// License: https://github.com/atlassian/react-beautiful-dnd
// See https://github.com/atlassian/react-beautiful-dnd
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Breadcrumb } from 'antd';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Column from './Column';

const { Footer, Content, Sider } = Layout;

const LayoutContainer = styled(Layout) `
  height: 100vh;
  overflow-y: hidden;
`;

const ContentContainer = styled.section`
  display: flex;
  background-color: white;
  width: 100%;
  min-width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  box-sizing: border-box;
`;

const ColumnContainer = styled.div`
  border-right: 1px solid #ccc;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  min-width: 250px;
`;

const StyledSider = styled(Sider) `
  background-color: white;
  border-left: 1px solid #ccc;
`;

const StyledFooter = styled(Footer) `
  border-top: 1px solid #ccc;
  background-color: white;
`;

const assemble = (map, ids) => ids.map(id => map[id])

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: [this.props.rootId],
      itemSelectedId: null,
      itemSelectedIndex: null,
      autoFocusId: null,
    };
  }

  deselect = () => {
    const { nav, itemSelectedId } = this.state;
    const index = nav.indexOf(itemSelectedId);
    this.setState({ itemSelectedId: null, itemSelectedIndex: null, nav: this.state.nav.slice(0, index) });
  }

  reorderMap = ({ map, source, destination }) => {
    const current = map[source.droppableId].children;
    const next = map[destination.droppableId].children;
    const target = current[source.index];

    // moving to same list
    if (source.droppableId === destination.droppableId) {

      // Propagates to handle specific cases
      this.props.onChangeRow(target, source, destination)

      const reordered = reorder(
        current,
        source.index,
        destination.index,
      );

      const result = {
        ...map,
        [source.droppableId]: {
          ...map[source.droppableId],
          children: reordered
        },
      };

      return {
        map: result,
        // not auto focusing in own list
        autoFocusId: null,
      };
    }

    // moving to different list
    // Propagates to handle specific cases
    this.props.onChangeColumn(target, source, destination);

    // remove from original
    current.splice(source.index, 1);
    // insert into next
    next.splice(destination.index, 0, target);

    const result = {
      ...map,
      [target]: {
        ...map[target],
        parent: destination.droppableId,
      },
      [source.droppableId]: {
        ...map[source.droppableId],
        children: current,
      },
      [destination.droppableId]: {
        ...map[destination.droppableId],
        children: next,
      },
    };

    return {
      map: result,
      autoFocusId: target.id,
    };
  };

  onDragStart = (initial) => {
    const { itemSelectedId, nav } = this.state
    const { map } = this.props
    // cannot move folder to right if selected
    if (itemSelectedId === initial.draggableId && map[itemSelectedId].children.length > 0) {
      this.setState({ nav: nav.slice(0, - 1) });
    }
  }

  onDragEnd = (result) => {
    // dropped nowhere  
    if (!result.destination) {
      return;
    }

    this.deselect();
    
    const { source, destination } = result;

    const { map, autoFocusId } = this.reorderMap({ map: this.props.map, source, destination });

    this.setState({ map, autoFocusId });
    this.props.onChange(map); // Propagates changes
  }

  onClickBreadcrumb = (id) => {
    const { nav } = this.state;
    const index = nav.indexOf(id);
    this.setState({ nav: nav.slice(0, index + 1), itemSelectedId: id });
  }

  onClickItem = (item, itemIndex) => {
    const { nav } = this.state;
    const index = nav.indexOf(item.parent);
    this.setState({
      itemSelectedIndex: itemIndex,
      itemSelectedId: item.id,
      nav: [...nav.slice(0, index + 1), item.id]
    });
  }

  render() {
    const {
      nav,
      autoFocusId,
      itemSelectedId
      , itemSelectedIndex,
       } = this.state;

    const {
      map,
      renderItem,
      renderPreview,
      itemSelectedColor,
      dropBackgroundColor,
      onOutsideDrop,
      dropzoneConfig,
       } = this.props;

    const preview = (itemSelectedId) ? renderPreview(map[itemSelectedId], itemSelectedIndex) : null;

    return (
      <LayoutContainer>
        <Layout>
          <Content>
            <ContentContainer>
              <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                {nav.map(id => map[id].children &&
                  <ColumnContainer key={`column-${id}`}>
                    <Column
                      listId={id}
                      listType="card"
                      data={assemble(map, map[id].children)}
                      autoFocusId={autoFocusId}
                      selectedId={itemSelectedId}
                      onClickItem={this.onClickItem}
                      itemSelectedColor={itemSelectedColor}
                      dropBackgroundColor={dropBackgroundColor}
                      renderItem={renderItem}
                      onOutsideDrop={onOutsideDrop}
                      dropzoneConfig={dropzoneConfig}
                    />
                  </ColumnContainer>
                )}
              </DragDropContext>
            </ContentContainer>
          </Content>
          <StyledSider width={300}>
            {preview}
          </StyledSider>
        </Layout>
        <StyledFooter>
          <Breadcrumb separator=">">
            {nav.map(id =>
              <Breadcrumb.Item key={`breadcrumb-${id}`}> <a onClick={() => this.onClickBreadcrumb(id)}>{map[id].title}</a></Breadcrumb.Item>
            )}
          </Breadcrumb>
        </StyledFooter>
      </LayoutContainer>
    );
  }
}

App.propTypes = {
  map: PropTypes.object.isRequired,
  rootId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onChangeRow: PropTypes.func.isRequired,
  onChangeColumn: PropTypes.func.isRequired,
  onOutsideDrop: PropTypes.func.isRequired,
  dropzoneConfig: PropTypes.object.isRequired,
  renderItem: PropTypes.func.isRequired,
  renderPreview: PropTypes.func.isRequired,
  itemSelectedColor: PropTypes.string,
  dropBackgroundColor: PropTypes.string,
}
