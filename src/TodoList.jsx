import React, { Component } from "react";
import "./todo-list.scss";
import Checkbox from "./Checkbox";
export default class TodoList extends Component {
  render() {
    const { todos, onChanged } = this.props;
    return (
      <div className="todo-list">
        <div>
          <h3>Todo</h3>
          <ul className="todo-list--container">
            {
              todos.length > 0 ?
              todos.map((todo, key) => (
              <li key={key} className={todo.done?'done':''}>
                <Checkbox onChanged={(value)=>onChanged(todo.title,value)}  />
                <h5>
                  {todo.title}<br />
                  <span>{todo.description}</span>
                </h5>
              </li>
            )): <h4>Add tasks to get started </h4>
          
          }
          </ul>
        </div>
      </div>
    );
  }
}
