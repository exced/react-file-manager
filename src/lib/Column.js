// License: https://github.com/atlassian/react-beautiful-dnd
// See https://github.com/atlassian/react-beautiful-dnd
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Item from './Item';
import OutsideDropZone from 'react-dropzone';

const Wrapper = styled.div`
  background-color: ${({ isDraggingOver, dropBackgroundColor }) => (isDraggingOver ? dropBackgroundColor : 'white')};
  opacity: ${({ isDropDisabled }) => (isDropDisabled ? 0.5 : 'inherit')};
  padding: 8px;
  padding-bottom: 0;
  transition: background-color 0.1s ease, opacity 0.1s ease;
  user-select: none;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 100%;
`;

const DropZone = styled.div`
  width: 250px;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 8px;
`;

const ScrollContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  max-height: 100%;
`;

export default class Column extends Component {

  renderList = (dropProvided) => {
    const {
      listId,
      listType,
      data,
      selectedId,
      onClickItem,
      itemSelectedColor,
      renderItem,
      onOutsideDrop,
      dropzoneConfig,
     } = this.props

    return (
      <OutsideDropZone
        disableClick
        onDrop={files => onOutsideDrop(listId, files)}
        style={{ width: '100%', height: '100%' }}
        {...dropzoneConfig}
      >
        <DropZone innerRef={dropProvided.innerRef}>
          {data.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} type={listType}>
              {(dragProvided, dragSnapshot) => (
                <div>
                  <Item
                    key={item.id}
                    index={index}
                    item={item}
                    isDragging={dragSnapshot.isDragging}
                    provided={dragProvided}
                    autoFocus={this.props.autoFocusId === item.id}
                    selected={selectedId && selectedId === item.id}
                    onClick={() => onClickItem(item, index)}
                    itemSelectedColor={itemSelectedColor}
                    renderItem={renderItem}
                  />
                  {dragProvided.placeholder}
                </div>
              )}
            </Draggable>
          ))}
          {dropProvided.placeholder}
        </DropZone>
      </OutsideDropZone>
    );
  }

  render() {
    const {
      ignoreContainerClipping,
      internalScroll,
      isDropDisabled,
      listId,
      listType,
      dropBackgroundColor,
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
            dropBackgroundColor={dropBackgroundColor}
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
  selectedId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClickItem: PropTypes.func.isRequired,
  renderItem: PropTypes.func.isRequired,
  itemSelectedColor: PropTypes.string.isRequired,
  dropBackgroundColor: PropTypes.string.isRequired,
  onOutsideDrop: PropTypes.func.isRequired,
  dropzoneConfig: PropTypes.object.isRequired,
}