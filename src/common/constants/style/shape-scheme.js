import { NODE_TYPE } from "../node";

export const SHAPE_SCHEME_NAMES = {
  SIMPLE: "simple",
  RANDOM: "random"
};

export const SHAPE_SCHEME = {
  [SHAPE_SCHEME_NAMES.SIMPLE]: {
    [NODE_TYPE.CONCLUSION]: "octagon",
    [NODE_TYPE.LINK]: "circle",
    default: "round-rectangle"
  },
  [SHAPE_SCHEME_NAMES.RANDOM]: {
    [NODE_TYPE.CONCLUSION]: "square",
    [NODE_TYPE.LINK]: "hexagon",
    default: "triangle"
  }
};
