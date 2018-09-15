import React, { Component } from "react";
import "./App.css";

export default class ToDoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
      }

      addTodo(){
        this.props.addTodo(this.state.value);
        this.setState({value:''});
      }
    
      handleChange(e) {
        this.setState({value: e.target.value});
      }
    
      render() {
        return (
          <div>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <button className="xsmall btn btn-secondary btn-sm" onClick={this.addTodo}>Add</button>
           
          </div>
        );
      }
    }