import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import ToDoListItem from './ToDoListItem';

class App extends Component {

  render() {
    return (
      <div className="todoApp"> 
        <ToDoList />
      </div>   
    );
  }
}

export default App;
