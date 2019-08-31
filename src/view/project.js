import React, { useState, useEffect } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import styled from "styled-components";
import cytoscape from "cytoscape";
import cola from "cytoscape-cola";

import { NODE_CATEGORY, LAYOUT } from "../common/constants";
import getCustomData from "../api/ncis";
import customToCytoscape from "../adapter/custom-to-cytoscape";
import createCytoscapeStylesheet from "./project-stylesheet";

cytoscape.use(cola);

const INITIAL_CATEGORIES_VISIBILITY = new Set([NODE_CATEGORY.WEAPON]);
const INITIAL_CY_CALLBACK = { on: () => {} };

const toggleCategory = (currentCategory, visibleCategoriesSet) => {
  visibleCategoriesSet.has(currentCategory)
    ? visibleCategoriesSet.delete(currentCategory)
    : visibleCategoriesSet.add(currentCategory);
  console.log("Not today", visibleCategoriesSet);
  return visibleCategoriesSet;
};

const createOnNodeClickHandler = (
  oldCategories,
  updateVisibleCategories
) => event => {
  const nodeElement = event.target;
  console.log("onNodeClick", nodeElement.data("type"), event);
  if (nodeElement.data("type") === "Conclusion") {
    const currentCategory = nodeElement.data("category");
    const newCategories = new Set(
      toggleCategory(currentCategory, oldCategories)
    );
    updateVisibleCategories(newCategories);
    console.log(oldCategories);
  }
};

let cyCallback = INITIAL_CY_CALLBACK;

function Project({ styleScheme }) {
  const { layoutName, ...customStyles } = styleScheme;
  const [visibleCategories, setVisibleCategories] = useState(
    INITIAL_CATEGORIES_VISIBILITY
  );

  const data = getCustomData();
  const elements = CytoscapeComponent.normalizeElements(
    customToCytoscape(data)
  );

  // console.log("Hello - after rendering", visibleCategories);
  useEffect(() => {
    const onNodeClickHandler = createOnNodeClickHandler(
      visibleCategories,
      setVisibleCategories
    );
    console.log("Update", visibleCategories);
    cyCallback.on("tap", "node", onNodeClickHandler);
  }, [visibleCategories]);
  const customLayout = LAYOUT[layoutName];
  const stylesheet = createCytoscapeStylesheet({
    visibleCategories,
    ...customStyles
  });

  return (
    <StyledCytoscape
      elements={elements}
      layout={customLayout}
      stylesheet={stylesheet}
      cy={cy => (cyCallback = cy)}
    />
  );
}

export default Project;

const StyledCytoscape = styled(CytoscapeComponent)`
  min-width: 200px;
  min-height: 750px;
`;
