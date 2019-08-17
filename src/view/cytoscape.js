import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import styled from "styled-components";

import getAifdData from "../api/6156";
import aifdbToCytoscape from "../adapter/aifdb-to-cytoscape";

function Cytoscape() {
  /*const nodes = [
    { data: { id: "one", label: "Node 1" } },
    { data: { id: "two", label: "Node 2" } },
    { data: { id: "three", label: "Node 3" } },
    { data: { id: "four", label: "Node 4" } },
    { data: { id: "five", label: "Node 5" } }
  ];
  const edges = [
    {
      data: {
        source: "one",
        target: "two"
        //label: "Edge from Node1 to Node2"
      }
    },
    {
      data: {
        source: "one",
        target: "three"
      }
    },
    {
      data: {
        source: "one",
        target: "five"
      }
    },
    {
      data: {
        source: "one",
        target: "four"
      }
    },
    {
      data: {
        source: "two",
        target: "three"
      }
    },
    {
      data: {
        source: "three",
        target: "four"
      }
    }
  ];*/

  const data = getAifdData();
  const elements = aifdbToCytoscape(data);

  const layout = {
    name: "cose",
    animate: true,
    nodeRepulsion: node => 10000,
    nodeOverlap: 4,
    edgeElasticity: edge => 10000,
    //directed: true,
    padding: 50
  };

  return <StyledCytoscape elements={elements} layout={layout} />;
}

export default Cytoscape;

const StyledCytoscape = styled(CytoscapeComponent)`
  background-color: aliceblue;
  min-width: 200px;
  min-height: 1500px;
  /*width: 1000px;
  height: 1000px;
  padding: 50px;*/
`;
