// License: https://github.com/atlassian/react-beautiful-dnd
// See https://github.com/atlassian/react-beautiful-dnd
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Breadcrumb } from 'antd'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { last as _last, indexOf as _indexOf } from 'lodash'
import Column from './Column'

const { Header, Footer, Content, Sider } = Layout

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

const StyledHeader = styled(Header) `
  border-bottom: 1px solid #ccc;
  background-color: #cccdce;
  text-align: center;
`

const StyledContent = styled(Content) `
  background-color: white;
`

const StyledSider = styled(Sider) `
  background-color: white;
  border-left: 1px solid #ccc;
`

const StyledFooter = styled(Footer) `
  border-top: 1px solid #ccc;
  background-color: white;
`

const collect = (map) => Object
  .values(map)
  .reduce((a, e) => ({
    ...a,
    [e.id]: e.children.map(id => map[id])
  }), {})

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const reorderMap = ({ map, source, destination }) => {
  const current = [...map[source.droppableId]];
  const next = [...map[destination.droppableId]];
  const target = current[source.index];

  // moving to same list
  if (source.droppableId === destination.droppableId) {
    const reordered = reorder(
      current,
      source.index,
      destination.index,
    );
    const result = {
      ...map,
      [source.droppableId]: reordered,
    };
    return {
      map: result,
      // not auto focusing in own list
      autoFocusId: null,
    };
  }

  // moving to different list

  // remove from original
  current.splice(source.index, 1);
  // insert into next
  next.splice(destination.index, 0, target);

  const result = {
    ...map,
    [source.droppableId]: current,
    [destination.droppableId]: next,
  };

  return {
    map: result,
    autoFocusId: target.id,
  };
};

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map: collect(this.props.initial),
      nav: [this.props.rootId],
      selectedId: null,
      autoFocusId: null,
    };
  }

  onDragStart = (initial) => {
    console.log('onDragStart');
  }

  onDragEnd = (result) => {
    console.log('onDragEnd', result);
    // dropped nowhere
    if (!result.destination) {
      return;
    }

    const { map } = this.state
    const { source, destination } = result;

    this.setState({ selectedId: null, ...reorderMap({ map, source, destination }) });
  }

  onClickBreadcrumb = (id) => {
    const { nav } = this.state
    const index = _indexOf(nav, id)
    this.setState({ nav: nav.slice(0, index + 1), selectedId: null })
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

    this.setState({ selectedId: item.id })
  }

  render() {
    const { map, nav, autoFocusId, selectedId } = this.state;

    const { initial, renderItem, renderPreviewItem } = this.props;

    const last = _last(nav)

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <StyledHeader>
            <h4>{initial[last].title}</h4>
          </StyledHeader>
          <Layout>
            <StyledContent>
              <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
                <Root>
                  <HorizontalScrollContainer>
                    {nav.map(id => map[id] &&
                      <VerticalScrollContainer key={`col-${id}`}>
                        <Column
                          listId={id}
                          listType="card"
                          data={map[id]}
                          autoFocusId={autoFocusId}
                          selectedId={selectedId}
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
              {selectedId && renderPreviewItem(initial[selectedId])}
            </StyledSider>
          </Layout>
          <StyledFooter>
            <Breadcrumb separator=">">
              {nav.map(id =>
                <Breadcrumb.Item> <a onClick={() => this.onClickBreadcrumb(id)}>{initial[id].title}</a></Breadcrumb.Item>
              )}
            </Breadcrumb>
          </StyledFooter>
        </Layout>
      </div>
    );
  }
}

Board.propTypes = {
  initial: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      title: PropTypes.string.isRequired,
      children: PropTypes.array.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
  rootId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  renderItem: PropTypes.func.isRequired,
  renderPreviewItem: PropTypes.func.isRequired,
}