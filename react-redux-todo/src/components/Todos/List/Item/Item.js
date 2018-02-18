import React from "react";
import "./Item.css";

const Item = (props) => (
  <div className="item">

    <div className="item-inner" style={{display: props.form.showing ? "none": "inherit"}}>
      <div className="item-header">
        <h3>{props.title}</h3>
        <h4>Cost: ${props.cost}</h4>
      </div>

      <p>{props.description}</p>

      <div className="btn-group">
        <button className="btn" onClick={props.toggleShow}>Edit</button>
        <button className="btn" onClick={props.handleRemove}>Delete</button>
      </div>
    </div>

    <form style={{display: props.form.showing ? "inherit": "none"}} onSubmit={props.handleSubmit} className="item-form">
      <input type="text" placeholder="Title" name="title" value={props.form.title} onChange={props.handleChange}/>
      <input type="text" placeholder="Description" name="description" value={props.form.description} onChange={props.handleChange}/>
      <input type="text" placeholder="Cost" name="cost" value={props.form.cost} onChange={props.handleChange}/>
      <button type="submit">Save</button>
    </form>
  </div>
)

export default Item;
