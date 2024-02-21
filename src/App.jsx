import { Suspense, useEffect, useState } from "react";
import "./App.css";
// import MyThree from "./components/MyThree";
import CanvasDrawing from "./components/CanvasDrawing";
import NewThree from "./components/NewThree";
import ModelControls from "./components/ModelControls";

function App() {
  const [show, setShow] = useState(true);
  const [linesArr, SetLines] = useState([]);
  function send(lines, generate) {
    SetLines([...lines]);
    console.log(lines);
  }
  function showThree() {
    setShow(!show);
  }

  return (
    <>
      {show && <CanvasDrawing sendData={send} />}
      {!show && <button onMouseDown={showThree}>Generate</button>}
      <section className="three-section">
      <ModelControls/>
        <NewThree lines={linesArr}></NewThree>
      </section>
    </>
  );
}

export default App;
