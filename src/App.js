import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';

import ToDoList from './ToDoList';
import './App.css'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

injectTapEventPlugin();

class App extends React.Component {
  constructor() {
    super();
    const saved = JSON.parse(localStorage.getItem('todos'));
    this.state = saved || { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);
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

  handleRemove(id) {
    console.log(id);
    const newItems = this.state.items.filter((item) => {
      if (item.id !== id) return item;
    });
    this.state.items = newItems;
    const newState = this.state;
    this.setState(newState);
    localStorage.setItem('todos',JSON.stringify(newState));
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="container">
          <h1>Reactodo</h1>
          <form onSubmit={ this.handleSubmit }>
            <TextField fullWidth={true} floatingLabelText='enter todo' onChange={ this.handleChange } value={ this.state.text } />
            <RaisedButton fullWidth={true} type="submit" label="Add Todo" />
          </form>
          <ToDoList items={ this.state.items } toggle={ this.handleToggle } remove={ this.handleRemove } />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
