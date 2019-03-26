import React, { Component } from 'react';
import './App.scss';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos:[]
    }
  }
  

  onChanged = (title,value) =>{
    const updatedTodos = this.state.todos.map(todo=>{
      if(todo.title === title){
          todo.done = value;
      }
      return todo;
    })

    this.setState({todos:updatedTodos})
  }
  
  addNewTask = (task)=>{
     this.setState(state=>{
       const newState = state.todos.push(task)
       return newState
     })
  }
  render() {
    const {todos} = this.state;
    return (
      <div className="container">
            <TodoForm onAddNewTask={this.addNewTask}/>
            <TodoList todos={this.state.todos} onChanged={this.onChanged}/>
      </div>
    );
  }
}

export default App;
