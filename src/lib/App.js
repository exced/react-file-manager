// License: https://github.com/atlassian/react-beautiful-dnd
// See https://github.com/atlassian/react-beautiful-dnd
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Breadcrumb } from 'antd';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { last as _last, indexOf as _indexOf } from 'lodash';
import Column from './Column';

const { Footer, Content, Sider } = Layout;

const Root = styled.div`
  box-sizing: border-box;
  min-height: 100%;
  height: 100%;
`;

const HorizontalScrollContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100%;
  height: 100%;
  padding: 8px;
  max-width: 100%;
  overflow: auto;
`;

const VerticalScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-right: 1px solid #ccc;
  max-height: 100%;
  overflow: auto;
`;

const StyledContent = styled(Content) `
  background-color: white;
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
      map: this.props.initial,
      nav: [this.props.rootId],
      itemSelectedId: null,
      columnSelectedId: null,
      autoFocusId: null,
    };
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
    this.props.onChangeColumn(target, source, destination)

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
    console.log('onDragStart');
  }

  onDragEnd = (result) => {
    console.log('onDragEnd', result);
    // dropped nowhere  
    if (!result.destination) {
      return;
    }

    const { source, destination } = result;

    const { map, autoFocusId } = this.reorderMap({ map: this.state.map, source, destination })

    this.setState({ columnSelectedId: null, itemSelectedId: null, map, autoFocusId });
    this.props.onChange(map) // Propagates changes
  }

  onClickBreadcrumb = (id) => {
    const { nav } = this.state
    const index = _indexOf(nav, id)
    this.setState({ nav: nav.slice(0, index + 1), itemSelectedId: null, columnSelectedId: id })
  }

  onClickItem = (item) => {
    const { nav } = this.state
    const last = _last(nav)
    const index = _indexOf(nav, item.parent)

    // Click on last
    if (item.parent === last) {
      if (item.children.length > 0) {
        this.setState({ nav: [...nav, item.id] })
      }
    } else {
      // Click before last
      if (item.children.length > 0) {
        this.setState({ nav: [...nav.slice(0, index + 1), item.id] })
      } else {
        this.setState({ nav: nav.slice(0, index + 1) })
      }
    }

    this.setState({ itemSelectedId: item.id, columnSelectedId: null })
  }

  render() {
    const { map, nav, autoFocusId, itemSelectedId, columnSelectedId } = this.state;

    const { renderItem, renderPreviewItem, renderPreviewColumn } = this.props;

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Layout>
            <StyledContent>
              <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                <Root>
                  <HorizontalScrollContainer>
                    {nav.map(id => map[id].children &&
                      <VerticalScrollContainer key={`column-${id}`}>
                        <Column
                          listId={id}
                          listType="card"
                          data={assemble(map, map[id].children)}
                          autoFocusId={autoFocusId}
                          selectedId={itemSelectedId}
                          onClickItem={this.onClickItem}
                          renderItem={renderItem}
                        />
                      </VerticalScrollContainer>
                    )}
                  </HorizontalScrollContainer>
                </Root>
              </DragDropContext>
            </StyledContent>
            <StyledSider width={300}>
              {(itemSelectedId && renderPreviewItem(map[itemSelectedId])) ||
                (columnSelectedId && renderPreviewColumn(map[columnSelectedId]))}
            </StyledSider>
          </Layout>
          <StyledFooter>
            <Breadcrumb separator=">">
              {nav.map(id =>
                <Breadcrumb.Item key={`breadcrumb-${id}`}> <a onClick={() => this.onClickBreadcrumb(id)}>{map[id].title}</a></Breadcrumb.Item>
              )}
            </Breadcrumb>
          </StyledFooter>
        </Layout>
      </div>
    );
  }
}

App.propTypes = {
  initial: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      title: PropTypes.string.isRequired,
      children: PropTypes.array.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
  rootId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onChangeRow: PropTypes.func,
  onChangeColumn: PropTypes.func,
  renderItem: PropTypes.func.isRequired,
  renderPreviewItem: PropTypes.func.isRequired,
}

App.defaultProps = {
  onChangeRow: (a, b, c) => { },
  onChangeColumn: (a, b, c) => { },
}