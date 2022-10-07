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
    };
  }
  render() {
    let menuToggle = () => {
      this.setState({ menuOpen: !this.state.menuOpen });
      console.log(this.state.menuOpen);
    };
    return (
      <>
        <Header menuToggle={menuToggle} />
        <div className="container" style={{ marginTop: "5rem" }}>
          <News />
        </div>
        <Menu menu={this.state.menuOpen} />
      </>
    );
  }
}

export default App;
