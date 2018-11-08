import React, { Component } from "react";
import Header from "./components/Header";
import Monitor from "./components/Monitor";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="mt-5">
          <Monitor />
        </div>
      </div>
    );
  }
}

export default App;
