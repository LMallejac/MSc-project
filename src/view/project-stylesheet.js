import { colours, NODE_CATEGORY } from "../common/constants";

const NODE_TYPE = {
  CONCLUSION: "Conclusion",
  LINK: "Link"
};

const COLOUR_SCHEME = {
  [NODE_CATEGORY.WEAPON]: colours.red,
  [NODE_CATEGORY.MOTIVE]: colours.orange,
  [NODE_CATEGORY.INTENT]: colours.blue,
  [NODE_CATEGORY.OPPORTUNITY]: colours.black,
  [NODE_CATEGORY.DEATH_CAUSE]: colours.purple,
  [NODE_CATEGORY.SUSPECT]: colours.green,
  [NODE_CATEGORY.VICTIM]: colours.burgundy
};

// ========== Utils

const isTypeLink = nodeElement => type(nodeElement) === NODE_TYPE.LINK;
const isTypeConclusion = nodeElement =>
  type(nodeElement) === NODE_TYPE.CONCLUSION;
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

const hideNodeIfCategoryNotVisible = visibleCategories => nodeElement => {
  console.log(nodeElement.data("type"));
  console.log(nodeElement.data("category"));
  return !isTypeConclusion(nodeElement) &&
    !visibleCategories.includes(category(nodeElement))
    ? "none"
    : "block";
};

// const getNodeColour = nodeElement =>
//   type(nodeElement) === "Conclusion" ? "none" : "block";

// ========== EDGE STYLING

// const edgeSpacing = nodeElement =>
//   type(nodeElement) === "Conclusion" ? 100 : 1;
// const edgeLength = nodeElement =>
//   category(nodeElement) === "Motive" ? 1000 : 400;

const CYTOSCAPE_STYLE = visibleCategories => {
  // console.log("ICI LA TERRE", visbleCategories);
  return [
    {
      selector: "node",
      style: {
        display: hideNodeIfCategoryNotVisible(visibleCategories),
        shape: getNodeShape,

        "background-color": getNodeBackgroundColor,
        "background-opacity": 0.7,
        //"background-image": "./chalk.png",
        "background-image":
          "https://cdn0.iconfinder.com/data/icons/healthcare-science-and-government/64/people-chalk-murder-outline-scene-crime-512.png",
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
};

export default CYTOSCAPE_STYLE;
