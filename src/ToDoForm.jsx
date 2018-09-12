import React, { Component } from "react";

export default class ToDoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("a Todo was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            What we have to do:
            <input type="text" value={this.state.value} onChange={this.handleChange}></input>
          </label>
        </form>
      </div>
    );
  }
}
