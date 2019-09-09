import { NODE_CATEGORY } from "../node";
import { colours } from "../colours";

export const COLOUR_SCHEME_NAMES = {
  VIBRANT: "vibrant",
  PALE_SATURATED: "pale saturated",
  DUNDEE: "dundee"
};

export const COLOUR_SCHEME = {
  [COLOUR_SCHEME_NAMES.VIBRANT]: {
    [NODE_CATEGORY.WEAPON]: colours.blue,
    [NODE_CATEGORY.MOTIVE]: colours.orange,
    [NODE_CATEGORY.INTENT]: colours.blue,
    [NODE_CATEGORY.OPPORTUNITY]: colours.green,
    [NODE_CATEGORY.DEATH_CAUSE]: colours.red,
    [NODE_CATEGORY.SUSPECT]: colours.purple,
    [NODE_CATEGORY.VICTIM]: colours.black
  } /*,
  [COLOUR_SCHEME_NAMES.PALE]: {
    [NODE_CATEGORY.WEAPON]: colours.pale_robin_egg_blue,
    [NODE_CATEGORY.MOTIVE]: colours.old_burgundy,
    [NODE_CATEGORY.INTENT]: colours.deep_tuscan_red,
    [NODE_CATEGORY.OPPORTUNITY]: colours.laurel_green,
    [NODE_CATEGORY.DEATH_CAUSE]: colours.maximum_yellow_red,
    [NODE_CATEGORY.SUSPECT]: colours.charcoal,
    [NODE_CATEGORY.VICTIM]: colours.prussian
  }*/,
  [COLOUR_SCHEME_NAMES.PALE_SATURATED]: {
    [NODE_CATEGORY.WEAPON]: colours.dark_sky_blue,
    [NODE_CATEGORY.MOTIVE]: colours.bistre,
    [NODE_CATEGORY.INTENT]: colours.wine_dregs,
    [NODE_CATEGORY.OPPORTUNITY]: colours.olivine,
    [NODE_CATEGORY.DEATH_CAUSE]: colours.meat_brown,
    [NODE_CATEGORY.SUSPECT]: colours.burgundy,
    [NODE_CATEGORY.VICTIM]: colours.prussian_blue_saturated
  },
  [COLOUR_SCHEME_NAMES.DUNDEE]: {
    [NODE_CATEGORY.WEAPON]: colours.dundee_blue,
    [NODE_CATEGORY.MOTIVE]: colours.bistre,
    [NODE_CATEGORY.INTENT]: colours.dundee_pink,
    [NODE_CATEGORY.OPPORTUNITY]: colours.dundee_green,
    [NODE_CATEGORY.DEATH_CAUSE]: colours.dundee_orange,
    [NODE_CATEGORY.SUSPECT]: colours.dundee_pink,
    [NODE_CATEGORY.VICTIM]: colours.dundee_grey
  }
};
