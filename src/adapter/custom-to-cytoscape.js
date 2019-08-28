export default function customToCytoscape(customGraph) {
  const { nodes: customNodes, edges: customEdges } = customGraph;

  const cytoscapeNodes = customNodes.map(({ nodeID, text, category, type }) => {
    return {
      data: {
        id: nodeID,
        label: text,
        category: category,
        type: type,
        truc: "red"
      }
    };
  });

  const cytoscapeEdges = customEdges.map(({ fromID, toID }) => {
    return {
      data: {
        source: fromID,
        target: toID,
        label: "test"
      }
    };
  });
  // console.log(cytoscapeEdges);

  const cytoscapeElements = { nodes: cytoscapeNodes, edges: cytoscapeEdges };
  return cytoscapeElements;
}
/*
  ===== NODE STRUCTURE WANTED FOR CYTOSCAPE
  {
    data: {
        id: '',
        label: ''
      }
    };

  ===== EDGE STRUCTURE WANTED FOR CYTOSCAPE
  {
    data: {
        source: '',
        target: ''
      }
    };
  }

*/
