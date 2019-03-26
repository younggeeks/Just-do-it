import React, { Component } from 'react';
import "./todo-form.scss"
export default class TodoForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title:'',
            description:''
        }
    }

    onChange = e=>{
        const {name, value}  = e.target;
        this.setState({[name]: value})
    }
    onSubmit = ()=>{
        const {title, description} = this.state;
        const newTask = {
            title,
            description,
            done:false
        }
        this.props.onAddNewTask(newTask);
        this.setState({title:'', description:''})
    }
    render() {
        const {title,description} = this.state;

        return (
            <div className="todo-form">
                <h3 className="todo-form--header">Get stuff done </h3>

                <input 
                type="text"
                 name="title" 
                 placeholder="Something awesome"
                 value={title}
                 onChange={this.onChange}
                  />
                <textarea value={description} onChange={this.onChange} name="description" id="" cols="30" rows="90" placeholder="Task description">
                </textarea>

                <button onClick={this.onSubmit}>
                    Add a new Task
                </button>
            </div>
        );
    }
}