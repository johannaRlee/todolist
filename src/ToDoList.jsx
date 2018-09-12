import React, { Component } from 'react';
import './ToDoListItem';
import ToDoForm from'./ToDoForm';
import './App.css'
import Title from './Title'

export default class ToDoList extends Component {   
    render() {

        return(
            <div>
            <div className="todo-wrapper">
                <Title />
            
            <div className="todoform">
                <ToDoForm />
                </div> 
                </div></div>
        )
   }
} 