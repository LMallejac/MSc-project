import { NODE_TYPE } from "../node";

export const SHAPE_SCHEME_NAMES = {
  OCTAGON: "octagon",
  SQUARECIRCLE: "squares and circles",
  CIRCLES: "circles",
  SQUARES: "squares"
};

export const SHAPE_SCHEME = {
  [SHAPE_SCHEME_NAMES.OCTAGON]: {
    [NODE_TYPE.CONCLUSION]: "octagon",
    [NODE_TYPE.LINK]: "circle",
    default: "round-rectangle"
  },
  [SHAPE_SCHEME_NAMES.SQUARECIRCLE]: {
    [NODE_TYPE.CONCLUSION]: "square",
    [NODE_TYPE.LINK]: "cut-rectangle",
    default: "ellipse"
  },
  [SHAPE_SCHEME_NAMES.CIRCLES]: {
    [NODE_TYPE.CONCLUSION]: "circle",
    [NODE_TYPE.LINK]: "circle",
    default: "circle"
  },
  [SHAPE_SCHEME_NAMES.SQUARES]: {
    [NODE_TYPE.CONCLUSION]: "rectangle",
    [NODE_TYPE.LINK]: "rectangle",
    default: "cut-rectangle"
  }
};
