import { Suspense, useState } from "react";
import "./App.css";
// import MyThree from "./components/MyThree";
import CanvasDrawing from "./components/CanvasDrawing";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Test from "./components/Test";
import MyThree from "./components/MyThree";
import { Bed1 } from "./components/Bed1";
import NewThree from "./components/NewThree";

function App() {
  const [show, setShow] = useState(false);
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
      {!show && <CanvasDrawing sendData={send} />}
      <div
        style={{
          width: "50px",
          height: "50px",
          margin: "15px",
          backgroundColor: "red",
        }}
      ></div>
      <button onClick={showThree}>Generate</button>
      <NewThree lines={linesArr}></NewThree>
    </>
  );
}

export default App;
