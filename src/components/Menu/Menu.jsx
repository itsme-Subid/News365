import "./Menu.css";
import React, { Component } from "react";

export class Menu extends Component {
  menuItems = [
    "top",
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
  ];
  componentDidMount() {
    document.querySelector(".menu-item").classList.add("active");
  }
  handleMenuItem = (e) => {
    document.querySelectorAll(".menu-item.active").forEach((item) => {
      item.classList.remove("active");
    });
    e.target.classList.toggle("active");
    this.props.changeCategory(e.target.innerText);
    this.props.menuToggle();
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
