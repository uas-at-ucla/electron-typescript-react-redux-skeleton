import React from "react";

import "./App.css";
import ExampleComponent from "./ExampleComponent";

function App() {
  return (
    <div className="App p-6">
      <p className="text-5xl mb-4">Welcome!</p>
      <ExampleComponent exampleProp="This string was passed from the parent component"></ExampleComponent>
    </div>
  );
}

export default App;
