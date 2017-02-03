import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Tabs, Tab} from 'material-ui/Tabs';

import ToDoList from './ToDoList';
import './App.css'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blue500
  }
});

const paperStyle = {
  width: '50vw',
  margin: '0 auto',
  padding: 20,
  textAlign: 'center',
  display: 'block'
};

const inkBarStyle = {
  background: 'red'
}

injectTapEventPlugin();

class App extends React.Component {
  constructor() {
    super();
    const saved = JSON.parse(localStorage.getItem('todos'));
    this.state = { items: saved || [], text: '', filter: 'all' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
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
    localStorage.setItem('todos',JSON.stringify(newState.items));
  }

  handleToggle(id) {
    for (var i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id === id) {
        this.state.items[i].completed = !this.state.items[i].completed;
      }
    }
    const newState = this.state;
    this.setState(newState);
    localStorage.setItem('todos',JSON.stringify(newState.items));
  }

  handleRemove(id) {
    const newItems = this.state.items.filter((item) => {
      if (item.id !== id) return item;
    });
    this.state.items = newItems;
    const newState = this.state;
    this.setState(newState);
    localStorage.setItem('todos',JSON.stringify(newState.items));
  }

  handleFilter(filter) {
    console.log(filter)
    this.setState((prevState) => prevState.filter = filter);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <h1>React-Todo</h1>
          <Paper style={paperStyle} zDepth={3}>
            <form onSubmit={ this.handleSubmit }>
              <TextField
                fullWidth={true}
                floatingLabelText='enter new todo'
                onChange={ this.handleChange }
                value={ this.state.text }
              />
              <RaisedButton
                fullWidth={true}
                type="submit"
                label="Add Todo"
              />
            </form>
            <ToDoList
              items={ this.state.items }
              filter={ this.state.filter }
              toggle={ this.handleToggle }
              remove={ this.handleRemove }
            />
            <Tabs inkBarStyle={inkBarStyle}
              value={this.state.value}
              onChange={this.handleFilter}
            >
              <Tab label="All" value="all" />
              <Tab label="Active" value="active" />
              <Tab label="Completed" value="completed" />
            </Tabs>
          </Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
