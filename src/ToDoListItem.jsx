import React, { Component } from 'react';
import './App.css';

export default class ToDoListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            text: props.text
        };
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }
    
    render() {
        return (
            <div className="row todoitem">
                <div class="col-md-2"> <button className="removeTodo xsmall btn btn-sm  btn-outline-danger" onClick={(e)=> this.removeTodo(this.props.id) }>X</button>
                </div>
                <div class="col-md-8">{this.state.text}</div>
            </div>
        );
    }
}