import React, { Component } from "react";
import Header from "./components/Header/Header";
import News from "./components/News/News";

export class App extends Component {
  constructor() {
    super();
    localStorage.getItem("mode") === "light" &&
      document.body.classList.add("light");
  }
  render() {
    return (
      <>
        <Header />
        <div className="container" style={{marginTop: "5rem"}}>
          <News />
        </div>
      </>
    );
  }
}

export default App;
