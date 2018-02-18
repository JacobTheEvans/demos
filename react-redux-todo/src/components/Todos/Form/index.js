import React from "react";
import "./Form.css";
import {connect} from "react-redux";
import {addTodo} from "../../../redux/todos";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      cost: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    e.persist();
    this.setState((prevState) => ({
      [e.target.name]: e.target.value
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState((prevState) => ({title: "", description: "", cost: ""}));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <input type="text" placeholder="Title" name="title" value={this.state.title} onChange={this.handleChange}/>
        <input type="text" placeholder="Description" name="description" value={this.state.description} onChange={this.handleChange}/>
        <input type="number" placeholder="Cost" name="cost" value={this.state.cost} onChange={this.handleChange}/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

export default connect(null, {addTodo})(FormContainer);
