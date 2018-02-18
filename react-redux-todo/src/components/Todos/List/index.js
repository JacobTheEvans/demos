import React from "react";
import {connect} from "react-redux";
import Item from "./Item";
import "./List.css";

const List = (props) => (
  <div className="list">
    {
      props.todos.map((item, index) => (
        <Item key={item.title + index} index={index} {...item} />
      ))
    }
  </div>
)

export default connect(state => state, null)(List);
