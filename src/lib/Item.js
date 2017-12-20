import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Container = styled.div`
border-radius: 3px;
border: 1px solid grey;
background-color: ${({ selected, isDragging }) => (isDragging ? 'green' : (selected ? 'blue' : 'white'))};
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
    const { item, renderItem, isDragging, provided, selected, onClick } = this.props;

    return (
      <Container
        isDragging={isDragging}
        innerRef={provided.innerRef}
        style={provided.draggableStyle}
        selected={selected}
        onClick={onClick}
        {...provided.dragHandleProps}
      >
        {renderItem(item)}
      </Container>
    );
  }
}