import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { SelectButton } from "primereact/selectbutton";

import Project from "./view/project";
import {
  COLOUR_SCHEME_NAMES,
  LAYOUT_NAMES,
  SHAPE_SCHEME_NAMES
} from "./common/constants";

const createSelectButtonOptions = valuesObject => {
  return Object.values(valuesObject).map((value, key) => {
    return {
      value,
      // label: `Option ${key}`
      label: value
    };
  });
};

const DEFAULT_COLOUR_SCHEME_NAME = COLOUR_SCHEME_NAMES.SIMPLE;
const DEFAULT_LAYOUT_NAME = LAYOUT_NAMES.COLA_SPRINGY;
const DEFAULT_SHAPE_SCHEME_NAME = SHAPE_SCHEME_NAMES.SIMPLE;

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
          <h2>Layout</h2>
          <SelectButton
            value={layoutName}
            options={createSelectButtonOptions(LAYOUT_NAMES)}
            onChange={event => setLayoutName(event.value)}
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
      </StyleSelectorWrapper>
      <h1>Hung out to dry - NCIS, Season 1, Episode 2</h1>
      <Project styleScheme={customStyle} />
    </div>
  );
}

const StyleSelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

ReactDOM.render(<App />, document.getElementById("root"));
