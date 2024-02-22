import { Suspense, useEffect, useState } from "react";
import "./App.css";
// import MyThree from "./components/MyThree";
import CanvasDrawing from "./components/CanvasDrawing";
import NewThree from "./components/NewThree";
import ModelControls from "./components/ModelControls";
import { useSelector } from "react-redux";

function App() {
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
        <ModelControls />
        <NewThree lines={linesArr}></NewThree>
      </section>
    </>
  );
}

export default App;
