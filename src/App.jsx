import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyCanvas from "./components/MyCanvas";
import MyThree from "./components/MyThree";
import CanvasDrawing from "./components/CanvasDrawing";

function App() {
  const [show, setShow] = useState(false);
  const [linesArr,SetLines]=useState([])
  function send(lines,generate) {
    console.log('first')
    SetLines([...lines])
    console.log(lines);

  }
  function showThree() {
    setShow(!show);
  }
  return (
    <>
      {!show && <CanvasDrawing sendData={send} />}
      <button onClick={showThree}>Generate</button>
      {show && <MyThree lines={linesArr} />}
    </>
  );
}

export default App;
