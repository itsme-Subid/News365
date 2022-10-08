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
    if (window.location.pathname !== "/") {
      window.location.pathname = "/";
    }
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
        <div
          className="menu-item"
          role="menuitem"
          onClick={(e) => {
            document.querySelectorAll(".menu-item.active").forEach((item) => {
              item.classList.remove("active");
            });
            e.target.parentNode.classList.toggle("active");
            window.location.pathname = e.target.textContent;
            this.props.menuToggle();
          }}
        >
          about
        </div>
        <div
          className="menu-item"
          role="menuitem"
          onClick={(e) => {
            document.querySelectorAll(".menu-item.active").forEach((item) => {
              item.classList.remove("active");
            });
            e.target.parentNode.classList.toggle("active");
            window.location.pathname = e.target.textContent;
            this.props.menuToggle();
          }}
        >
          contact
        </div>
      </div>
    );
  }
}

export default Menu;
