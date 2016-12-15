import React from 'react';

import ToDo from './ToDo';
import {List} from 'material-ui/List';

// Class
// class ToDoList extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <ToDo key={item.id} item={item} />
//         ))}
//       </ul>
//     )
//   }
// }

// Stateless
// const ToDoList = ({items, toggle}) => {
//   return (
//     <ul>
//       {items.map(item => (
//         <ToDo key={item.id} item={item} toggle={toggle} />
//       ))}
//     </ul>
//   )
// }

const ToDoList = ({items, toggle, remove}) => {
  return (
    <List>
      {items.map(item => (
        <ToDo key={item.id} item={item} toggle={toggle} remove={remove}/>
      ))}
    </List>
  )
}

export default ToDoList;
