import {
  colours,
  NODE_TYPE,
  COLOUR_SCHEME,
  SHAPE_SCHEME
} from "../common/constants";

// ========== Utils

const isTypeLink = nodeElement => type(nodeElement) === NODE_TYPE.LINK;
const isTypeConclusion = nodeElement =>
  type(nodeElement) === NODE_TYPE.CONCLUSION;
const type = nodeElement => nodeElement.data("type");
const category = nodeElement => nodeElement.data("category");

// ========== NODE STYLING

const getNodeShape = shapeSchemeName => nodeElement =>
  SHAPE_SCHEME[shapeSchemeName][type(nodeElement)] ||
  SHAPE_SCHEME[shapeSchemeName].default;

const SIZE_BY_TYPE = {
  [NODE_TYPE.CONCLUSION]: 250,
  default: "label"
};
const getNodeSize = nodeElement =>
  SIZE_BY_TYPE[type(nodeElement)] || SIZE_BY_TYPE.default;

const getNodeBackgroundColor = colourSchemeName => nodeElement => {
  return isTypeLink(nodeElement)
    ? colours.grey
    : COLOUR_SCHEME[colourSchemeName][category(nodeElement)] || colours.black;
};

const hideNodeIfCategoryNotVisible = visibleCategories => nodeElement => {
  //console.log('Node type', nodeElement.data("type"));
  //console.log('Node category', nodeElement.data("category"));
  return !isTypeConclusion(nodeElement) &&
    !visibleCategories.has(category(nodeElement))
    ? "none"
    : "block";
};

// ========== EDGE STYLING

// ========== Final main function

const createCytoscapeStylesheet = ({
  visibleCategories,
  colourSchemeName,
  shapeSchemeName
}) => {
  // console.log('Colour scheme', colourSchemeName);
  const nodeStyle = {
    display: hideNodeIfCategoryNotVisible(visibleCategories),
    shape: getNodeShape(shapeSchemeName),

    "background-color": getNodeBackgroundColor(colourSchemeName),
    "background-opacity": 0.8,
    //"background-image": "./chalk.png",
    /*"background-image":
      "https://cdn0.iconfinder.com/data/icons/healthcare-science-and-government/64/people-chalk-murder-outline-scene-crime-512.png",*/
    "background-fit": "cover cover",
    "background-image-opacity": 0.1,

    width: getNodeSize,
    height: getNodeSize,

    avoidOverlap: true, // if true, prevents overlap of node bounding boxes
    nodeDimensionsIncludeLabels: true, // whether labels should be included in determining the space used by a node

    padding: 20,
    "padding-relative-to": "width",

    color: "white",
    "font-family": "Helvetica",
    "font-weight": 400,
    "font-size": 18,

    label: "data(label)",
    "text-halign": "center",
    "text-valign": "center",
    "text-max-width": "200px",
    "text-wrap": "wrap",
    "text-overflow-wrap": "anywhere",

    "text-justification": "center",
    "line-height": 1.5
    //display: otherTest
  };

  return [
    {
      selector: "node",
      style: nodeStyle
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
};

export default createCytoscapeStylesheet;
