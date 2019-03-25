import React, { Component } from 'react';
import "./todo-form.scss"
export default class TodoForm extends Component {
    render() {
        return (
            <div className="todo-form">
                <h3 className="todo-form--header">Get stuff done </h3>

                <input type="text" placeholder="Something awesome"/>
                <textarea name="" id="" cols="30" rows="90" placeholder="Task description">
                </textarea>

                <button>
                    Add a new Task
                </button>
            </div>
        );
    }
}