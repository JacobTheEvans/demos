import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>{this.props.brand}</h1>
        <h3>{this.props.subbrand}</h3>
      </div>
    )
  }
}

export default Header;
