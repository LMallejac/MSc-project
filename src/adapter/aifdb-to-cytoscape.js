export default function aifdbToCytoscape(aifdbGraph) {
  const { nodes: aifdbNodes, edges: aifdbEdges } = aifdbGraph;

  const cytoscapeNodes = aifdbNodes.map(({ nodeID, text }) => {
    return {
      data: {
        id: nodeID,
        label: text
      }
    };
  });

  const cytoscapeEdges = aifdbEdges.map(({ fromID, toID }) => {
    return {
      data: {
        source: fromID,
        target: toID
      }
    };
  });
  console.log(cytoscapeEdges);

  const cytoscapeElements = [...cytoscapeNodes, ...cytoscapeEdges];
  return cytoscapeElements;
}
