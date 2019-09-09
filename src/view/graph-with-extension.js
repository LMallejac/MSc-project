import React from "react";
import Cytoscape from "cytoscape";
import cola from "cytoscape-cola";
import dagre from "cytoscape-dagre";
import euler from "cytoscape-euler";
import coseBilkent from "cytoscape-cose-bilkent";

import Graph from "./graph";
import { LAYOUT_NAMES } from "../common/constants";

function GraphWithExtension(props) {
  const {
    styleScheme: { layoutName }
  } = props;

  switch (layoutName) {
    case LAYOUT_NAMES.COLA:
    case LAYOUT_NAMES.COLA_SPRINGY:
      Cytoscape.use(cola);
      break;
    case LAYOUT_NAMES.EULER:
      Cytoscape.use(euler);
      break;
    case LAYOUT_NAMES.DAGRE:
      Cytoscape.use(dagre);
      break;
    case LAYOUT_NAMES.COSEBILKENT:
      Cytoscape.use(coseBilkent);
      break;
    default:
      console.log("No resource found");
  }

  return <Graph {...props} />;
}

export default GraphWithExtension;
