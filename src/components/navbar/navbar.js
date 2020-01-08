import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items || "",
      activeId: props.activeId || ""
    };

    this.changeActive = this.changeActive.bind(this);
  }

  changeActive(evt) {
    evt.preventDefault();
    this.setState({
      activeId: evt.target.innerText
    });
  }

  render() {
    return (
      <div className="navbar">
        {this.state.items.map((item, index) => (
          <a
            key={index}
            href="#"
            className={item === this.state.activeId ? "active" : ""}
            onClick={this.changeActive}
          >
            {item}
          </a>
        ))}
      </div>
    );
  }
}

export default Navbar;
