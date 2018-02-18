import React from "react";

class Footer extends React.Component {
  render() {
    let links = this.props.links.map((item) => {
      return (
        <a href={item.url}>{item.name}</a>
      )
    });
    return (
      <div className="footer">
        <p>{links}</p>
      </div>
    )
  }
}

export default Footer;
