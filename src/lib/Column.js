// License: https://github.com/atlassian/react-beautiful-dnd
// See https://github.com/atlassian/react-beautiful-dnd
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import Item from './Item'

const Wrapper = styled.div`
  background-color: ${({ isDraggingOver }) => (isDraggingOver ? '#c5d0e0' : '#b5bfce')};
  display: flex;
  flex-direction: column;
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : 'inherit')};
  padding: 8px;
  padding-bottom: 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  width: 250px;
`

const DropZone = styled.div`
  min-height: 250px;
  margin-bottom: 8px;
`

const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 300px;
`

const Container = styled.div`
`

export default class Column extends Component {

  renderList = (dropProvided) => {
    const {
      listType,
      data,
      selectedId,
      onChangeSelectedId,
      renderItem,
     } = this.props;

    return (
      <Container>
        <DropZone innerRef={dropProvided.innerRef}>
          {data.map(item => (
            <Draggable key={item.id} draggableId={item.id} type={listType}>
              {(dragProvided, dragSnapshot) => (
                <div>
                  <Item
                    key={item.id}
                    item={item}
                    isDragging={dragSnapshot.isDragging}
                    provided={dragProvided}
                    autoFocus={this.props.autoFocusId === item.id}
                    selected={selectedId === item.id}
                    onClick={() => onChangeSelectedId(item.id)}
                    renderItem={renderItem}
                  />
                  {dragProvided.placeholder}
                </div>
              )}
            </Draggable>
          ))}
          {dropProvided.placeholder}
        </DropZone>
      </Container>
    );
  }

  render() {
    const {
      ignoreContainerClipping,
      internalScroll,
      isDropDisabled,
      listId,
      listType,
      style,
    } = this.props;

    return (
      <Droppable
        droppableId={listId}
        ignoreContainerClipping={ignoreContainerClipping}
        isDropDisabled={isDropDisabled}
        type={listType}
      >
        {(dropProvided, dropSnapshot) => (
          <Wrapper
            style={style}
            isDraggingOver={dropSnapshot.isDraggingOver}
            isDropDisabled={isDropDisabled}
          >
            {internalScroll ? (
              <ScrollContainer>
                {this.renderList(dropProvided)}
              </ScrollContainer>
            ) : (
                this.renderList(dropProvided)
              )}
          </Wrapper>
        )}
      </Droppable>
    );
  }
}

Column.propTypes = {
  selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChangeSelectedId: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
}