import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Menu from "./components/Menu/Menu";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

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
    let tabs = [
      "",
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
      "about",
      "contact",
    ];
    return (
      <>
        <Header menuToggle={menuToggle} />
        <Router>
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            {tabs.map((item, index) => {
              return (
                <Route
                  key={index}
                  exact
                  path={`/${item}`}
                  element={<News key={index} category={item} />}
                />
              );
            })}
          </Routes>
        </Router>
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
