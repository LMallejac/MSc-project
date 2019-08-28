import React, { useState } from "react";
import { Button } from "primereact/button";

// import getAifbData from "../api/get-aifdb-data"; // REAL
import getAifdbData from "../api/6156"; // FAKE

export default function JsonManager() {
  const [data, setData] = useState(DEFAULT_DATA);

  const onClickHandler = () => {
    setData(JSON.stringify(getAifdbData()));
  };

  return (
    <React.Fragment>
      <Button onClick={onClickHandler}>Change the value</Button>
      <p>{data}</p>
    </React.Fragment>
  );
}

const DEFAULT_DATA = "I'm a default value!";
