import React, { Component } from "react";
import ExampleComponent from "./ExampleComponent";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <ExampleComponent exampleProp="This string was passed from the parent component"></ExampleComponent>
      </div>
    );
  }
}

export default App;
