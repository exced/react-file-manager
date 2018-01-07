import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
border-radius: 3px;
border: 1px solid grey;
background-color: ${({ selected, isDragging, itemSelectedColor }) => ((isDragging || selected) ? itemSelectedColor : 'white')};
/* cursor: grabbing is handled by app */
cursor: grab;
box-shadow: ${({ isDragging }) => (isDragging ? `2px 2px 1px grey` : 'none')};
padding: 6px;
min-height: 40px;
margin-bottom: 6px;
user-select: none;
transition: background-color 0.1s ease;
/* anchor overrides */
color: black;
&:hover {
  color: black;
  text-decoration: none;
}
&:focus {
  outline: 2px solid purple;
  box-shadow: none;
}
`;

export default class Item extends Component {
  componentDidMount() {
    if (!this.props.autoFocus) {
      return;
    }
    // eslint-disable-next-line react/no-find-dom-node
    const node = ReactDOM.findDOMNode(this);
    node.focus();
  }

  render() {
    const { item, index, renderItem, isDragging, provided, selected, onClick, itemSelectedColor } = this.props;

    return (
      <div onClick={onClick}>
        <Container
          isDragging={isDragging}
          innerRef={provided.innerRef}
          style={provided.draggableStyle}
          selected={selected}
          itemSelectedColor={itemSelectedColor}
          {...provided.dragHandleProps}
        >
          {renderItem(item, index)}
        </Container>
      </div>
    );
  }
}

Item.propTypes = {
  itemSelectedColor: PropTypes.string.isRequired,
}