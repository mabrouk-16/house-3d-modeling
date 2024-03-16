import { Suspense, useEffect, useState } from "react";
import "./Three.css";
import classes from "./CanvasDrawing.module.css";

import CanvasDrawing from "./CanvasDrawing";
import NewThree from "./NewThree";
import ModelControls from "./ModelControls";
import { useSelector } from "react-redux";
import AddObjects from "./AddObjects";

function ThreeContainer() {
  const [show, setShow] = useState(true);
  function send() {
    setShow((prev) => !prev);
  }

  const array = useSelector((state) => state.modelReducer.objectsArr);
  console.log("objects", array);

  return (
    <>
      {show && <CanvasDrawing sendData={send} />}

      {!show && (
        <>
          <button className={classes.savebtn} onMouseDown={send}>
            Back to 2D
          </button>
          <ModelControls />
          <section className="three-section">
            <AddObjects />
            <NewThree />
          </section>
        </>
      )}
    </>
  );
}

export default ThreeContainer;
