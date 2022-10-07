import "./Header.css";
import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "React.js",
    };
  }
  render() {
    let changeMode = () => {
      let body = document.body;
      body.classList.toggle("light");
      localStorage.setItem(
        "mode",
        body.classList.contains("light") ? "light" : "dark"
      );
    };
    return (
      <header>
        <div className="wrapper">
          <div className="heading">
            <h1>
              <div
                className="menu-icon"
                onClick={() => {
                  this.props.menuToggle();
                }}
              >
                <div className="svg"></div>
              </div>
              News365
            </h1>
            <div
              className="modeToggler"
              onClick={() => {
                changeMode();
              }}
            >
              <div className="svg"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
