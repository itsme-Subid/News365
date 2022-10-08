import "./Menu.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export class Menu extends Component {
  menuItems = [
    "top",
    "world",
    "business",
    "entertainment",
    "environment",
    "health",
    "politics",
    "science",
    "sports",
    "technology",
  ];
  componentDidMount() {
    document.querySelector(".menu-item").classList.add("active");
  }
  handleMenuItem = (e) => {
    document.querySelector(".menu-item.active").classList.remove("active");
    e.target.classList.toggle("active");
    this.props.changeCategory(e.target.innerText);
    this.props.menuToggle();
  };
  render() {
    return (
      <Router>
        <div className={`menu ${this.props.menu && "active"}`} role="menu">
          {this.menuItems.map((item) => (
            <Link to={`/${item}`} key={item} onClick={this.handleMenuItem}>
              <div className="menu-item" role="menuitem">
                {item}
              </div>
            </Link>
          ))}
          <Link
            to="/about"
            onClick={(e) => {
              document
                .querySelector(".menu-item.active")
                .classList.remove("active");
              e.target.classList.toggle("active");
              this.props.menuToggle();
            }}
          >
            <div className="menu-item" role="menuitem">
              about
            </div>
          </Link>
          <Link
            to="/contact"
            onClick={(e) => {
              document
                .querySelector(".menu-item.active")
                .classList.remove("active");
              e.target.classList.toggle("active");
              this.props.menuToggle();
            }}
          >
            <div className="menu-item" role="menuitem">
              contact
            </div>
          </Link>
        </div>
      </Router>
    );
  }
}

export default Menu;
