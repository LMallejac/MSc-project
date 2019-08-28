import React, { useState } from "react";
import ReactDOM from "react-dom";
import { SelectButton } from "primereact/selectbutton";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { NODE_CATEGORY } from "./common/constants";
import Project from "./view/project";
// import JsonManager from "./view/json-manager";

const CATEGORY_OPTIONS = Object.values(NODE_CATEGORY).map(category => {
  return {
    value: category,
    label: category
  };
});

function App() {
  // const INITAL_CATEGORIES_VISIBILITY = new Set([]);
  const [visibleCategories, setVisibleCatgories] = useState(["Motive"]);

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <JsonManager /> */}
      <SelectButton
        multiple={true}
        value={visibleCategories}
        options={CATEGORY_OPTIONS}
        onChange={event => setVisibleCatgories(event.value)}
      />
      <Project visibleCategories={visibleCategories} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
