import React from 'react';
import './Item.css';

const Item = ({ item, provided }) => {
  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="draggable-item"
    >
      {item.content}
    </li>
  );
};

export default Item;
