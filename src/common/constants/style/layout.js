export const LAYOUT_NAMES = {
  //COLA: "cola",

  //EULER: "euler",

  COSE: "cose",
  CONCENTRIC: "concentric",
  BREADTHFIRST: "breadthfirst",
  DAGRE: "dagre",
  COLA_SPRINGY: "cola springy"
};

const commonLayoutProps = {
  fit: true, // whether to fit the viewport to the graph
  padding: 10 // the padding on fit
};

export const LAYOUT = {
  [LAYOUT_NAMES.COLA]: {
    ...commonLayoutProps,
    name: "cola",
    animate: true,
    edgeLength: 300, // sets edge length directly in simulation
    nodeSpacing: 50
  },
  [LAYOUT_NAMES.COLA_SPRINGY]: {
    ...commonLayoutProps,
    name: "cola",
    infinite: true,
    fit: false, // stops the graph from being buggy with infinite:true
    animate: true,
    edgeLength: 300, // sets edge length directly in simulation
    nodeSpacing: 50
  },
  [LAYOUT_NAMES.CONCENTRIC]: {
    ...commonLayoutProps,
    name: "concentric",
    startAngle: (3 / 2) * Math.PI, // where nodes start in radians
    // sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
    clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
    equidistant: false, // whether levels have an equal radial distance betwen them, may cause bounding box overflow
    minNodeSpacing: 20, // min spacing between outside of nodes (used for radius adjustment)
    // boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
    nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
    // height: undefined, // height of layout area (overrides container height)
    // width: undefined, // width of layout area (overrides container width)
    // spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
    concentric: function(node) {
      // returns numeric value for each node, placing higher nodes in levels towards the centre
      return node.degree();
    },
    levelWidth: function(nodes) {
      // the letiation of concentric values in each level
      return nodes.maxDegree() / 4;
    },
    animate: false, // whether to transition the node positions
    animationDuration: 500, // duration of animation in ms if enabled
    // animationEasing: undefined, // easing of animation if enabled
    animateFilter: function(node, i) {
      return true;
    }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
    // ready: undefined, // callback on layoutready
    // stop: undefined, // callback on layoutstop
    transform: function(node, position) {
      return position;
    } // transform a given node position. Useful for changing flow direction in discrete layouts
  },
  [LAYOUT_NAMES.BREADTHFIRST]: {
    ...commonLayoutProps,
    name: "breadthfirst",
    directed: true, // whether the tree is directed downwards (or edges can point in any direction if false)
    circle: false, // put depths in concentric circles if true, put depths top down if false
    grid: false, // whether to create an even grid into which the DAG is placed (circle:false only)
    spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
    boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
    nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
    roots: undefined, // the roots of the trees
    maximal: false, // whether to shift nodes down their natural BFS depths in order to avoid upwards edges (DAGS only)
    animate: false, // whether to transition the node positions
    animationDuration: 500, // duration of animation in ms if enabled
    animationEasing: undefined, // easing of animation if enabled,
    animateFilter: function(node, i) {
      return true;
    }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
    ready: undefined, // callback on layoutready
    stop: undefined, // callback on layoutstop
    transform: function(node, position) {
      return position;
    } // transform a given node position. Useful for changing flow direction in discrete layouts
  },
  [LAYOUT_NAMES.EULER]: {
    ...commonLayoutProps,
    name: "euler",

    // The ideal length of a spring
    // - This acts as a hint for the edge length
    // - The edge length can be longer or shorter if the forces are set to extreme values
    springLength: edge => 80,

    // Hooke's law coefficient
    // - The value ranges on [0, 1]
    // - Lower values give looser springs
    // - Higher values give tighter springs
    springCoeff: edge => 0.0008,

    // The mass of the node in the physics simulation
    // - The mass affects the gravity node repulsion/attraction
    mass: node => 4,

    // Coulomb's law coefficient
    // - Makes the nodes repel each other for negative values
    // - Makes the nodes attract each other for positive values
    gravity: -1.2,

    // A force that pulls nodes towards the origin (0, 0)
    // Higher values keep the components less spread out
    pull: 0.001,

    // Theta coefficient from Barnes-Hut simulation
    // - Value ranges on [0, 1]
    // - Performance is better with smaller values
    // - Very small values may not create enough force to give a good result
    theta: 0.666,

    // Friction / drag coefficient to make the system stabilise over time
    dragCoeff: 0.02,

    // When the total of the squared position deltas is less than this value, the simulation ends
    movementThreshold: 1,

    // The amount of time passed per tick
    // - Larger values result in faster runtimes but might spread things out too far
    // - Smaller values produce more accurate results
    timeStep: 20,

    // The number of ticks per frame for animate:true
    // - A larger value reduces rendering cost but can be jerky
    // - A smaller value increases rendering cost but is smoother
    refresh: 10,

    // Whether to animate the layout
    // - true : Animate while the layout is running
    // - false : Just show the end result
    // - 'end' : Animate directly to the end result
    animate: false,

    // Animation duration used for animate:'end'
    animationDuration: undefined,

    // Easing for animate:'end'
    animationEasing: undefined,

    // Maximum iterations and time (in ms) before the layout will bail out
    // - A large value may allow for a better result
    // - A small value may make the layout end prematurely
    // - The layout may stop before this if it has settled
    maxIterations: 1000,
    maxSimulationTime: 4000,

    // Prevent the user grabbing nodes during the layout (usually with animate:true)
    ungrabifyWhileSimulating: false,

    // Constrain layout bounds with one of
    // - { x1, y1, x2, y2 }
    // - { x1, y1, w, h }
    // - undefined / null : Unconstrained
    boundingBox: undefined,

    // Layout event callbacks; equivalent to `layout.one('layoutready', callback)` for example
    ready: function() {}, // on layoutready
    stop: function() {}, // on layoutstop

    // Whether to randomize the initial positions of the nodes
    // true : Use random positions within the bounding box
    // false : Use the current node positions as the initial positions
    randomize: false
  },
  [LAYOUT_NAMES.DAGRE]: {
    ...commonLayoutProps,
    name: "dagre",

    // dagre algo options, uses default value on undefined
    nodeSep: undefined, // the separation between adjacent nodes in the same rank
    edgeSep: undefined, // the separation between adjacent edges in the same rank
    rankSep: undefined, // the separation between each rank in the layout
    rankDir: "TB", // 'TB' for top to bottom flow, 'LR' for left to right,
    ranker: "network-simplex", // Type of algorithm to assign a rank to each node in the input graph. Possible values: 'network-simplex', 'tight-tree' or 'longest-path'
    minLen: function(edge) {
      return 1;
    }, // number of ranks to keep between the source and target of the edge
    edgeWeight: function(edge) {
      return 1;
    }, // higher weight edges are generally made shorter and straighter than lower weight edges

    // general layout options
    spacingFactor: 5, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
    nodeDimensionsIncludeLabels: false, // whether labels should be included in determining the space used by a node
    animate: false, // whether to transition the node positions
    animateFilter: function(node, i) {
      return true;
    }, // whether to animate specific nodes when animation is on; non-animated nodes immediately go to their final positions
    animationDuration: 500, // duration of animation in ms if enabled
    animationEasing: undefined, // easing of animation if enabled
    boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    transform: function(node, pos) {
      return pos;
    }, // a function that applies a transform to the final node position
    ready: function() {}, // on layoutready
    stop: function() {} // on layoutstop
  },
  [LAYOUT_NAMES.COSE]: {
    ...commonLayoutProps,
    name: "cose",

    // Called on `layoutready`
    ready: function() {},

    // Called on `layoutstop`
    stop: function() {},

    // Whether to animate while running the layout
    // true : Animate continuously as the layout is running
    // false : Just show the end result
    // 'end' : Animate with the end result, from the initial positions to the end positions
    animate: true,

    // Easing of the animation for animate:'end'
    animationEasing: undefined,

    // The duration of the animation for animate:'end'
    animationDuration: undefined,

    // A function that determines whether the node should be animated
    // All nodes animated by default on animate enabled
    // Non-animated nodes are positioned immediately when the layout starts
    animateFilter: function(node, i) {
      return true;
    },

    // The layout animates only after this many milliseconds for animate:true
    // (prevents flashing on fast runs)
    animationThreshold: 250,

    // Number of iterations between consecutive screen positions update
    refresh: 20,

    // Whether to fit the network view after when done
    fit: true,

    // Padding on fit
    padding: 30,

    // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
    boundingBox: undefined,

    // Excludes the label when calculating node bounding boxes for the layout algorithm
    nodeDimensionsIncludeLabels: true,

    // Randomize the initial positions of the nodes (true) or use existing positions (false)
    randomize: false,

    // Extra spacing between components in non-compound graphs
    componentSpacing: 40,

    // Node repulsion (non overlapping) multiplier
    nodeRepulsion: function(node) {
      return 2048;
    },

    // Node repulsion (overlapping) multiplier
    nodeOverlap: 4,

    // Ideal edge (non nested) length
    idealEdgeLength: function(edge) {
      return 32;
    },

    // Divisor to compute edge forces
    edgeElasticity: function(edge) {
      return 32;
    },

    // Nesting factor (multiplier) to compute ideal edge length for nested edges
    nestingFactor: 1.2,

    // Gravity force (constant)
    gravity: 1,

    // Maximum number of iterations to perform
    numIter: 1000,

    // Initial temperature (maximum node displacement)
    initialTemp: 1000,

    // Cooling factor (how the temperature is reduced between consecutive iterations
    coolingFactor: 0.99,

    // Lower temperature threshold (below this point the layout will end)
    minTemp: 1.0
  }
};

//nodeRepulsion: node => 10,
//nodeOverlap: 40,
//edgeElasticity: edge => 10,
//directed: true,
// overrides all other options for a forces-all-the-time mode
//edgeSymDiffLength: 50 // symmetric diff edge length in simulation
//edgeJaccardLength: 10000 // jaccard edge length in simulation
