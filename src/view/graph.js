import React, { useState, useEffect } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import styled from "styled-components";

import { NODE_CATEGORY, LAYOUT } from "../common/constants";
import getCustomData from "../api/ncis";
import customToCytoscape from "../adapter/custom-to-cytoscape";
import createCytoscapeStylesheet from "./create-cytoscape-stylesheet";

const INITIAL_CATEGORIES_VISIBILITY = new Set(Object.values(NODE_CATEGORY)); // new Set([NODE_CATEGORY.WEAPON]);
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

function Graph({ styleScheme }) {
  const { layoutName, ...customStyles } = styleScheme;
  console.log("LayoutName", layoutName);

  const [visibleCategories, setVisibleCategories] = useState(
    INITIAL_CATEGORIES_VISIBILITY
  );

  const data = getCustomData();
  const elements = CytoscapeComponent.normalizeElements(
    customToCytoscape(data)
  );

  useEffect(() => {
    const onNodeClickHandler = createOnNodeClickHandler(
      visibleCategories,
      setVisibleCategories
    );
    cyCallback.on("tap", "node", onNodeClickHandler);
  }, [visibleCategories, layoutName]);
  const customLayout = LAYOUT[layoutName];
  const stylesheet = createCytoscapeStylesheet({
    visibleCategories,
    ...customStyles
  });

  console.log("customLayout", customLayout);
  return (
    <StyledCytoscape
      elements={elements}
      layout={customLayout}
      stylesheet={stylesheet}
      cy={cy => (cyCallback = cy)}
    />
  );
}

export default Graph;

const StyledCytoscape = styled(CytoscapeComponent)`
  min-width: 200px;
  min-height: 750px;
`;
