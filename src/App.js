import React, { Component } from "react";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Menu from "./components/Menu/Menu";

export class App extends Component {
  constructor() {
    super();
    localStorage.getItem("mode") === "light" &&
      document.body.classList.add("light");
    this.state = {
      menuOpen: false,
      category: "top",
    };
  }
  render() {
    console.clear();
    console.log(
      "%cStop!",
      "font-family: sans-serif; font-weight: 700; color: red; font-size: 5rem; text-align: center; text-transform: uppercase; width: 100%;"
    );
    console.log(
      `%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a Calculator.js feature or "hack" this server, it is a scam and will give them access to your device.`,
      `font-size: 1.2rem; font-family: sans-serif; color: #fff`
    );
    console.log(
      "%citsme-subid",
      "font-family: sans-serif; font-weight: 700; color: #1f6feb; padding-block: 2rem; font-size: 2.5rem; text-align: center; text-transform: uppercase; width: 100%;"
    );
    let menuToggle = () => {
      this.setState({ menuOpen: !this.state.menuOpen });
    };
    let changeCategory = (category) => {
      this.setState({ category: category });
    };
    return (
      <>
        <Header menuToggle={menuToggle} />
        <div className="container" style={{ marginTop: "5rem" }}>
          <News category={this.state.category} />
        </div>
        <Menu
          menu={this.state.menuOpen}
          menuToggle={menuToggle}
          changeCategory={changeCategory}
        />
      </>
    );
  }
}

export default App;
