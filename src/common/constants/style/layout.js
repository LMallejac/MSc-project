export const LAYOUT_NAMES = {
  COLA: "cola",
  COLA_SPRINGY: "cola springy"
};

export const LAYOUT = {
  [LAYOUT_NAMES.COLA]: {
    name: "cola",
    fit: true,
    animate: true,
    padding: 10,
    edgeLength: 300, // sets edge length directly in simulation
    nodeSpacing: 50
  },
  [LAYOUT_NAMES.COLA_SPRINGY]: {
    name: "cola",
    infinite: true,
    fit: false, // stops the graph from being buggy with infinite:true
    animate: true,
    padding: 10,
    edgeLength: 300, // sets edge length directly in simulation
    nodeSpacing: 50
  }
};

//nodeRepulsion: node => 10,
//nodeOverlap: 40,
//edgeElasticity: edge => 10,
//directed: true,
// overrides all other options for a forces-all-the-time mode
//edgeSymDiffLength: 50 // symmetric diff edge length in simulation
//edgeJaccardLength: 10000 // jaccard edge length in simulation
