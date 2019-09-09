import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { SelectButton } from "primereact/selectbutton";

import Graph from "./view/graph";
import GraphWithExtension from "./view/graph-with-extension";
import {
  COLOUR_SCHEME_NAMES,
  LAYOUT_NAMES,
  SHAPE_SCHEME_NAMES
} from "./common/constants";

//const INDEX_TO_LETTER = ["A", "B", "C", "D", "E", "F", "G"];
//const INDEX_TO_LETTER = ["A", "B", "C", "D", "E", "F", "G"];
const createSelectButtonOptions = valuesObject => {
  return Object.values(valuesObject).map((value, key) => {
    return {
      value,
      //label: `Option ${key + 1}`
      //label: `Option ${INDEX_TO_LETTER[key]}`
      label: value
    };
  });
};

const DEFAULT_COLOUR_SCHEME_NAME = COLOUR_SCHEME_NAMES.VIBRANT;
const DEFAULT_LAYOUT_NAME = LAYOUT_NAMES.COSE;
const DEFAULT_SHAPE_SCHEME_NAME = SHAPE_SCHEME_NAMES.OCTAGON;

const LAYOUT_WITH_EXTENSION = [
  LAYOUT_NAMES.COLA,
  LAYOUT_NAMES.COLA_SPRINGY,
  LAYOUT_NAMES.EULER,
  LAYOUT_NAMES.DAGRE,
  LAYOUT_NAMES.COSEBILKENT
];

function App() {
  const [colourSchemeName, setColourSchemeName] = useState(
    DEFAULT_COLOUR_SCHEME_NAME
  );
  const [layoutName, setLayoutName] = useState(DEFAULT_LAYOUT_NAME);
  const [shapeSchemeName, setShapeSchemeName] = useState(
    DEFAULT_SHAPE_SCHEME_NAME
  );

  const customStyle = {
    colourSchemeName: colourSchemeName || DEFAULT_COLOUR_SCHEME_NAME,
    shapeSchemeName: shapeSchemeName || DEFAULT_SHAPE_SCHEME_NAME,
    layoutName: layoutName || DEFAULT_LAYOUT_NAME
  };

  const GraphComponent = LAYOUT_WITH_EXTENSION.find(
    name => name === customStyle.layoutName
  )
    ? GraphWithExtension
    : Graph;

  console.log(
    "With extension or not ?",
    LAYOUT_WITH_EXTENSION.find(name => name === customStyle.layoutName)
  );

  return (
    <div className="App">
      <h1> Choose your style</h1>
      <StyleSelectorWrapper>
        <div>
          <h2>Colour</h2>
          <SelectButton
            value={colourSchemeName}
            options={createSelectButtonOptions(COLOUR_SCHEME_NAMES)}
            onChange={event => setColourSchemeName(event.value)}
          />
        </div>
        <div>
          <h2>Shape</h2>
          <SelectButton
            value={shapeSchemeName}
            options={createSelectButtonOptions(SHAPE_SCHEME_NAMES)}
            onChange={event => setShapeSchemeName(event.value)}
          />
        </div>
        <div>
          <h2>Layout</h2>
          <SelectButton
            value={layoutName}
            options={createSelectButtonOptions(LAYOUT_NAMES)}
            onChange={event => setLayoutName(event.value)}
          />
        </div>
      </StyleSelectorWrapper>
      <h1>Hung out to dry - NCIS, Season 1, Episode 2</h1>
      <GraphComponent styleScheme={customStyle} />
    </div>
  );
}

const StyleSelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

ReactDOM.render(<App />, document.getElementById("root"));
