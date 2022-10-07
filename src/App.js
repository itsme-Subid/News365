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
    let menuToggle = () => {
      this.setState({ menuOpen: !this.state.menuOpen });
    };
    let changeCategory = (category) => {
      this.setState({ category: category });
      console.log(category);
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
