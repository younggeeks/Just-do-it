import React, { Component } from "react";
import "./todo-list.scss";
import Checkbox from "./Checkbox";
export default class TodoList extends Component {
  render() {
    return (
      <div className="todo-list">
        <div>
          <h3>Todo</h3>
          <ul className="todo-list--container">
            <li><Checkbox/>
            <h5>
            Get something done by the end of day today <br/>
            <span>
                This should be done by end of the day today
            </span>
            </h5>
            </li>
            <li><Checkbox/>
            <h5>
            Get something done by the end of day today <br/>
            <span>
                This should be done by end of the day today
            </span>
            </h5>
            </li>
            <li><Checkbox/>
            <h5>
            Get something done by the end of day today <br/>
            <span>
                This should be done by end of the day today
            </span>
            </h5>
            </li>
            <li><Checkbox/>
            <h5>
            Get something done by the end of day today <br/>
            <span>
                This should be done by end of the day today
            </span>
            </h5>
            </li>
           
           
          </ul>
        </div>
      </div>
    );
  }
}
