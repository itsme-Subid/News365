import "./Menu.css";
import React, { Component } from "react";

export class Menu extends Component {
  menuItems = [
    "Top Stories",
    "India",
    "world",
    "business",
    "entertainment",
    "environment",
    "food",
    "health",
    "politics",
    "science",
    "sports",
    "technology",
    "top",
  ];
  componentDidMount() {
    document.querySelector(".menu-item").classList.add("active");
  }
  handleMenuItem = (e) => {
    document.querySelectorAll(".menu-item.active").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.toggle("active");
  };
  render() {
    return (
      <div className={`menu ${this.props.menu && "active"}`} role="menu">
        {this.menuItems.map((item) => (
          <div
            className="menu-item"
            role="menuitem"
            key={item}
            onClick={(e) => {
              this.handleMenuItem(e);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
