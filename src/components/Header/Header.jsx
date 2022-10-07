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
    let spanStyle =
      this.state.text !== ""
        ? {
            transform: "translateY(0)",
            scale: "1",
            opacity: "1",
          }
        : {};
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
            <div className="search">
              <span className="icons">
                <span
                  className={`searchIcon icon active`}
                  onClick={() => {
                    document
                      .querySelector(".searchIcon")
                      .classList.remove("active");
                    document.querySelector(".text").classList.add("active");
                    document
                      .querySelector(".closeIcon")
                      .classList.add("active");
                  }}
                >
                  <ion-icon name="search-outline"></ion-icon>
                </span>
                <span
                  className={`closeIcon icon`}
                  onClick={() => {
                    document
                      .querySelector(".closeIcon")
                      .classList.remove("active");
                    document.querySelector(".text").classList.remove("active");
                    document
                      .querySelector(".searchIcon")
                      .classList.add("active");
                  }}
                >
                  <ion-icon name="close-outline"></ion-icon>
                </span>
              </span>
            </div>
            <div className="text-wrapper">
              <div className="text">
                <label>
                  <textarea
                    value={this.state.text}
                    onChange={(event) => {
                      this.setState({ text: event.target.value });
                    }}
                  ></textarea>
                  <span style={spanStyle}>Search</span>
                </label>
              </div>
            </div>
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
