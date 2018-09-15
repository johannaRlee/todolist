import React, { Component } from 'react';

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
            <div className="todoWrapper">
                <span>{this.state.id} <p>{this.state.text}</p></span>
            </div>
        );
    }
}