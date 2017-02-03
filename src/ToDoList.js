import React from 'react';

import ToDo from './ToDo';
import {List} from 'material-ui/List';

const ToDoList = ({items, filter, toggle, remove}) => {

  switch(filter) {
    case 'all':
      var filteredItems = items;
      break;
    case 'completed':
      var filteredItems = items.filter((item) => {
        if (item.completed === true) return item;
      });
      break;
    case 'active':
      var filteredItems = items.filter((item) => {
        if (item.completed === false) return item;
      });
      break;
    default:
      var filteredItems = items;
  }

  return (
    <List>
      {filteredItems.map(item => (
        <ToDo key={item.id} item={item} toggle={toggle} remove={remove}/>
      ))}
    </List>
  )
}

export default ToDoList;
