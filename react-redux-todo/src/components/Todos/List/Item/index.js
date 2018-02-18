import React from "react";
import Item from "./Item.js";
import {connect} from "react-redux";
import {updateTodo, removeTodo} from "../../../../redux/todos";

class ItemContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props,
      showing: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  handleChange(e) {
    e.persist();
    this.setState((prevState) => ({
      [e.target.name]: e.target.value
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.index, this.state);
    this.toggleShow();
  }
  handleRemove() {
    this.props.removeTodo(this.props.index);
  }
  toggleShow() {
    this.setState((prevState) => ({
      showing: !prevState.showing
    }));
  }
  render() {
    return (
      <Item {...this.props} form={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleRemove={this.handleRemove} toggleShow={this.toggleShow}/>
    )
  }
}

export default connect(null, {updateTodo, removeTodo})(ItemContainer);
