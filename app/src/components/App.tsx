import React from "react";

import "./App.css";
import ExampleComponent from "./ExampleComponent";

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <ExampleComponent exampleProp="This string was passed from the parent component"></ExampleComponent>
    </div>
  );
}

export default App;
