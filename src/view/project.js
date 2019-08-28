import React, { useState } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import styled from "styled-components";
import cytoscape from "cytoscape";
import cola from "cytoscape-cola";

import getCustomData from "../api/ncis";
import customToCytoscape from "../adapter/custom-to-cytoscape";
import CYTOSCAPE_STYLE from "./project-stylesheet";

cytoscape.use(cola);

/* const INITAL_CATEGORIES_VISIBILITY = {
  [NODE_CATEGORY.WEAPON]: false,
  [NODE_CATEGORY.MOTIVE]: false,
  [NODE_CATEGORY.INTENT]: false,
  [NODE_CATEGORY.OPPORTUNITY]: false,
  [NODE_CATEGORY.DEATH_CAUSE]: false,
  [NODE_CATEGORY.SUSPECT]: false,
  [NODE_CATEGORY.VICTIM]: false
};*/

const toggleCategoryVisibility = (category, categoriesVisibility) => {
  categoriesVisibility[category] = !categoriesVisibility[category];
  return categoriesVisibility;
};

const createStateToggle = (
  oldCatgories,
  setCategoriesVisibility
) => category => {
  const newCategoryState = new Set(oldCatgories);

  newCategoryState.has(category)
    ? newCategoryState.delete(category)
    : newCategoryState.add(category);

  console.log("After click", newCategoryState);
  setCategoriesVisibility(new Set(["Bob"]));
  console.log("After update out", oldCatgories);
};

// let cytoscapeCallback;
function Project({ visibleCategories }) {
  console.log("HERE", visibleCategories);
  /* const onNodeClickHandler = event => {
    const nodeElement = event.target;
    if (nodeElement.data("type") === "Conclusion") {
      console.log("Trying to change the visibility");
      setCategoriesVisibility(
        toggleCategoryVisibility(
          nodeElement.data("category"),
          categoriesVisibility
        )
      );
      console.log(categoriesVisibility);
    } else {
      console.log("Executing function");
    }
  };*/
  const data = getCustomData();
  const elements = CytoscapeComponent.normalizeElements(
    customToCytoscape(data)
  );
  /*const otherTest = nodeElement =>
    nodeElement.data("id") === "5" ? "none" : "block";*/

  /*useEffect(() => {
    console.log("Hello");

    //   cytoscapeCallback.on(
    //     "tap",
    //     "node",
    //     onNodeClickHandler(categoriesVisibility, setCategoriesVisibility)
    //   );
  }, [categoriesVisibility]);*/

  const layout = {
    name: "cola",
    fit: false, //stops the graph from being buggy with infinite:true
    animate: true,
    //nodeRepulsion: node => 10,
    //nodeOverlap: 40,
    //edgeElasticity: edge => 10,
    //directed: true,
    padding: 10,
    infinite: true, // overrides all other options for a forces-all-the-time mode

    edgeLength: 300, // sets edge length directly in simulation
    //edgeSymDiffLength: 50 // symmetric diff edge length in simulation
    //edgeJaccardLength: 10000 // jaccard edge length in simulation
    nodeSpacing: 50
  };

  // const test = id => (id === "1" ? "black" : "red");
  // console.log(test("1"));
  return (
    <StyledCytoscape
      elements={elements}
      layout={layout}
      stylesheet={CYTOSCAPE_STYLE(visibleCategories)}
      // cy={cy => (cytoscapeCallback = cy)}
    />
  );
}

export default Project;

const StyledCytoscape = styled(CytoscapeComponent)`
  background-color: white;
  min-width: 200px;
  min-height: 1500px;
  /*display: none;*/

  /*width: 1000px;
  height: 1000px;
  padding: 50px;*/
`;
