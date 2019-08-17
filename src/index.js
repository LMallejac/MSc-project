import React from "react";
import ReactDOM from "react-dom";

import Project from "./view/project";
import JsonManager from "./view/json-manager";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <JsonManager />

      <Project />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
