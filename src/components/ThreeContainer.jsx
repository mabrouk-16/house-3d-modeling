import { Suspense, useEffect, useState } from "react";
// import "./App.css";
import CanvasDrawing from "./CanvasDrawing";
import NewThree from "./NewThree";
import ModelControls from "./ModelControls";
import { useSelector } from "react-redux";
// import List from "./List";
import AddObjects from "./AddObjects";

function ThreeContainer() {
  const [show, setShow] = useState(true);
  const [linesArr, SetLines] = useState([]);
  function send(lines, generate) {
    SetLines([...lines]);
    localStorage.setItem("lines", JSON.stringify(lines));
    console.log(lines);
  }
  function showThree() {
    setShow(!show);
  }
  const array = useSelector((state) => state.modelReducer.objectsArr);
  console.log("objects", array);

  return (
    <>
      {show && <CanvasDrawing sendData={send} />}
      {!show && <button onMouseDown={showThree}>Generate</button>}
      <section className="three-section">
        <AddObjects />
        <ModelControls />
        <NewThree lines={linesArr}></NewThree>
      </section>
    </>
  );
}

export default ThreeContainer;
