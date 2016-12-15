import React from 'react';
import {ListItem} from 'material-ui/List';

import './ToDo.css';

// const ToDo = ({item, toggle}) => {
//   const completeClass = item.completed === true ? 'complete':'';
//   return <li className={completeClass} onClick={() => toggle(item.id)}>{item.text}</li>
// }

const ToDo = ({item, toggle, remove}) => {
  const completeClass = item.completed === true ? 'complete':'';

  // return <ListItem className={completeClass} onClick={() => toggle(item.id)}>{item.text}</ListItem>
  return <ListItem className={completeClass} onClick={() => remove(item.id)}>{item.text}</ListItem>
}


export default ToDo;
