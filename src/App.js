import React from 'react';

import ToDoList from './ToDoList';

class App extends React.Component {
  constructor() {
    super();
    const saved = JSON.parse(localStorage.getItem('todos'));
    this.state = saved || { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      completed: false
    }
    const newState = {
      items: this.state.items.concat(newItem),
      text: ''
    }
    this.setState(newState);
    localStorage.setItem('todos',JSON.stringify(newState));
  }

  handleToggle(id) {
    for (var i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id === id) {
        this.state.items[i].completed = !this.state.items[i].completed;
        console.log(this.state.items[i].completed);
      }
    }
    const newState = this.state;
    this.setState(newState);
    localStorage.setItem('todos',JSON.stringify(newState));
  }

  render() {
    return (
      <div>
        <h1>Todo</h1>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={ this.handleChange } value={ this.state.text } />
          <button>add</button>
        </form>
        <ToDoList items={ this.state.items } toggle={ this.handleToggle }/>
      </div>
    )
  }
}

export default App;
