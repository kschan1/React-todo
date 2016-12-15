import React from 'react';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Close from 'material-ui/svg-icons/navigation/close'

import './ToDo.css';

const ToDo = ({item, toggle, remove}) => {
  const completeClass = item.completed === true ? 'complete':'';

  return (
    <ListItem
      leftCheckbox={<Checkbox checked={item.completed} onClick={() => toggle(item.id)} />}
      className={completeClass}
      rightIcon={<Close hoverColor="red" onClick={() => remove(item.id)}/>}
      primaryText={item.text}
    />
  )
}


export default ToDo;
