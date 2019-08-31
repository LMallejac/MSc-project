import { NODE_CATEGORY } from "../node";
import { colours } from "../colours";

export const COLOUR_SCHEME_NAMES = {
  SIMPLE: "simple",
  OPTION_TWO: "option 2"
};

export const COLOUR_SCHEME = {
  [COLOUR_SCHEME_NAMES.SIMPLE]: {
    [NODE_CATEGORY.WEAPON]: colours.red,
    [NODE_CATEGORY.MOTIVE]: colours.orange,
    [NODE_CATEGORY.INTENT]: colours.blue,
    [NODE_CATEGORY.OPPORTUNITY]: colours.black,
    [NODE_CATEGORY.DEATH_CAUSE]: colours.purple,
    [NODE_CATEGORY.SUSPECT]: colours.green,
    [NODE_CATEGORY.VICTIM]: colours.burgundy
  },
  [COLOUR_SCHEME_NAMES.OPTION_TWO]: {
    [NODE_CATEGORY.WEAPON]: "blue",
    [NODE_CATEGORY.MOTIVE]: "blue",
    [NODE_CATEGORY.INTENT]: "blue",
    [NODE_CATEGORY.OPPORTUNITY]: "pink",
    [NODE_CATEGORY.DEATH_CAUSE]: "blue",
    [NODE_CATEGORY.SUSPECT]: "blue",
    [NODE_CATEGORY.VICTIM]: "blue"
  }
};
