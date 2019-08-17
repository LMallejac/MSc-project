import React from "react";
import { Button } from "semantic-ui-react";
import CytoscapeComponent from "react-cytoscapejs";
import styled from "styled-components";

import cytoscape from "cytoscape";
import cola from "cytoscape-cola";

import getCustomData from "../api/ncis";
import customToCytoscape from "../adapter/custom-to-cytoscape";
import CYTOSCAPE_STYLE from "./project-stylesheet";

cytoscape.use(cola);

function Project() {
  const data = getCustomData();
  const elements = CytoscapeComponent.normalizeElements(
    customToCytoscape(data)
  );
  /*const otherTest = nodeElement =>
    nodeElement.data("id") === "5" ? "none" : "block";*/

  const layout = {
    name: "cola",
    fit: false, //stops the graph from being buggy with infinite:true
    animate: true,
    //nodeRepulsion: node => 10,
    //nodeOverlap: 40,
    //edgeElasticity: edge => 10,
    //directed: true,
    padding: 10,
    infinite: true, // overrides all other options for a forces-all-the-time mode

    edgeLength: 300, // sets edge length directly in simulation
    //edgeSymDiffLength: 50 // symmetric diff edge length in simulation
    //edgeJaccardLength: 10000 // jaccard edge length in simulation
    nodeSpacing: 50
  };

  // const test = id => (id === "1" ? "black" : "red");
  // console.log(test("1"));

  return (
    <>
      <Button
        onClick={() => {
          console.log("Now you should change the state");
        }}
      >
        Change the state
      </Button>
      <StyledCytoscape
        elements={elements}
        layout={layout}
        stylesheet={CYTOSCAPE_STYLE}
      />
    </>
  );
}

export default Project;

const StyledCytoscape = styled(CytoscapeComponent)`
  background-color: white;
  min-width: 200px;
  min-height: 1500px;
  /*display: none;*/

  /*width: 1000px;
  height: 1000px;
  padding: 50px;*/
`;
