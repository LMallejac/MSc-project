import { colours } from "../common/constants";

const NODE_CATEGORY = {
  WEAPON: "Weapon",
  MOTIVE: "Motive",
  INTENT: "Intent",
  OCCASION: "Occasion",
  DEATH_CAUSE: "Cause of death",
  SUSPECT: "Suspect",
  VICTIM: "Victim"
};

const NODE_TYPE = {
  CONCLUSION: "Conclusion",
  LINK: "Link"
};

const COLOUR_SCHEME = {
  [NODE_CATEGORY.WEAPON]: colours.red,
  [NODE_CATEGORY.MOTIVE]: colours.orange,
  [NODE_CATEGORY.INTENT]: colours.blue,
  [NODE_CATEGORY.OCCASION]: colours.black,
  [NODE_CATEGORY.DEATH_CAUSE]: colours.purple,
  [NODE_CATEGORY.SUSPECT]: colours.green,
  [NODE_CATEGORY.VICTIM]: colours.burgundy
};

// ========== Utils

const isTypeLink = nodeElement => type(nodeElement) === NODE_TYPE.LINK;
const type = nodeElement => nodeElement.data("type");
const category = nodeElement => nodeElement.data("category");

// ========== NODE STYLING

const SHAPE_BY_TYPE = {
  [NODE_TYPE.CONCLUSION]: "octagon",
  [NODE_TYPE.LINK]: "circle",
  default: "round-rectangle"
};
const getNodeShape = nodeElement =>
  SHAPE_BY_TYPE[type(nodeElement)] || SHAPE_BY_TYPE.default;

const SIZE_BY_TYPE = {
  [NODE_TYPE.CONCLUSION]: 250,
  default: "label"
};
const getNodeSize = nodeElement =>
  SIZE_BY_TYPE[type(nodeElement)] || SIZE_BY_TYPE.default;

const getNodeBackgroundColor = nodeElement =>
  isTypeLink(nodeElement)
    ? colours.grey
    : COLOUR_SCHEME[category(nodeElement)] || colours.black;

// const getNodeColour = nodeElement =>
//   type(nodeElement) === "Conclusion" ? "none" : "block";

// ========== EDGE STYLING

// const edgeSpacing = nodeElement =>
//   type(nodeElement) === "Conclusion" ? 100 : 1;
// const edgeLength = nodeElement =>
//   category(nodeElement) === "Motive" ? 1000 : 400;

const CYTOSCAPE_STYLE = [
  {
    selector: "node",
    style: {
      shape: getNodeShape,

      "background-color": getNodeBackgroundColor,
      "background-opacity": 1,

      width: getNodeSize,
      height: getNodeSize,

      avoidOverlap: true, // if true, prevents overlap of node bounding boxes
      nodeDimensionsIncludeLabels: true, // whether labels should be included in determining the space used by a node

      padding: 20,
      "padding-relative-to": "width",

      color: "white",
      label: "data(label)",
      "text-halign": "center",
      "text-valign": "center",
      "text-max-width": "200px",
      "text-wrap": "wrap"
      //display: otherTest
    }
  },
  /*{
    selector: "label",
    style: {
      color: "black",
      position: "background",
      "font-size": "40px"
    }
  },*/
  {
    selector: "edge",
    style: {
      // "line-color": "grey",
      "curve-style": "straight",
      "source-arrow-shape": "square",
      "target-arrow-shape": "triangle"
    }
  }
];

export default CYTOSCAPE_STYLE;
