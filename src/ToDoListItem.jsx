import React, { Component } from 'react';
import './App.css';

export default class ToDoListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            text: props.text
        }
    }
    removeTodo(id) {
        this.props.removeTodo(id);
    }
    render() {
        return (
            <div className="todoitem">
                <span>{this.state.text}</span>
            </div>
        );
    }
}