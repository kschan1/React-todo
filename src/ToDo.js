import React from 'react';
import './ToDo.css';

const ToDo = ({item, toggle}) => {
  const completeClass = item.completed === true ? 'complete':'';
  return <li className={completeClass} onClick={() => toggle(item.id)}>{item.text}</li>
}

export default ToDo;
