import React, { Component } from 'react';
import './App.scss';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="container">
            <TodoForm/>
            <TodoList/>
      </div>
    );
  }
}

export default App;
