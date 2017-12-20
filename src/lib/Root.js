// License: https://github.com/atlassian/react-beautiful-dnd
// See https://github.com/atlassian/react-beautiful-dnd
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Breadcrumb, Button } from 'antd'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import Column from './Column'

const ButtonGroup = Button.Group
const { Header, Footer, Content } = Layout

const Root = styled.div`
  background-color: #c5d0e0;
  box-sizing: border-box;
  padding: 16px;
  min-height: 100vh;
  /* flexbox */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const HorizontalScrollContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.1);
  padding: 8px;
  max-width: 100%;
  overflow: auto;
`;

const VerticalScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.1);
  max-height: 800px;
  overflow: auto;
`;

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
      map: collect(this.props.map),
      history: [this.props.rootId],
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

    this.setState(reorderMap({ map, source, destination }));
  }

  render() {
    const { map, history, autoFocusId, selectedId } = this.state;

    const { renderItem } = this.props;

    console.log('selectedId ' + selectedId)

    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
          <Header style={{ backgroundColor: '#d4d7db' }}>
            <ButtonGroup>
              <Button icon="left" />
              <Button icon="right" />
            </ButtonGroup>
          </Header>
          <Content>
            <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
              <Root>
                <HorizontalScrollContainer>
                  {history.map(id => {
                    const data = map[id]
                    return (
                      <VerticalScrollContainer>
                        {data &&
                          <Column
                            listId={id}
                            listType="card"
                            data={data}
                            autoFocusId={autoFocusId}
                            selectedId={selectedId}
                            onChangeSelectedId={selectedId => this.setState({ selectedId })}
                            renderItem={renderItem}
                          />}
                      </VerticalScrollContainer>
                    )
                  })}
                </HorizontalScrollContainer>
              </Root>
            </DragDropContext>
          </Content>
          <Footer>
            <div style={{ display: 'block', height: 1, border: 0, borderTop: '1px solid #ccc', padding: 0 }} />
            <Breadcrumb separator=">">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
          </Footer>
        </Layout>
      </div>
    );
  }
}

Board.propTypes = {
  map: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      title: PropTypes.string.isRequired,
      children: PropTypes.array.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
  rootId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  renderItem: PropTypes.func.isRequired,
}