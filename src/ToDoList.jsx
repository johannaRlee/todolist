import React, { Component } from 'react';
import './ToDoListItem';
import ToDoForm from'./ToDoForm';
import './App.css'
import Title from './Title'
import TodoListItem from './ToDoListItem'

export default class ToDoList extends Component {   
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {id: 0, text: "Plan 2019 WWCode Events"},
                {id: 1, text: "Add other projects to website"},
                {id: 2, text: "Walk my doggos"}
            ],
            nextId: 3,
            formValue: ''
        };

        this.addTodo = this.addTodo.bind(this)
    }

    addTodo(todoText) {
        // var todos = this.state.todos.slice(0);
        // todos.push({id: this.state.nextId, text: todoText});

        this.setState({
            todos: this.state.todos.concat([{
                id: this.state.nextId,
                text: todoText
            }]),
            nextId: this.state.nextId + 1
        });
      }

    render() {

        return(
            <div>
            <div className="todo-wrapper">
                <Title />
            
            <div className="todoform">
                <ToDoForm todoText="" addTodo={this.addTodo} todos={this.state.todos}/>
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoListItem todo={todo} key={todo.id} id={todo.id} text={todo.text} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
                  </div> </div></div>
        )
   }
} 