import { useDispatch } from "react-redux";
import classes from "./ModelControls.module.css";

import {
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  clear,
  setIntervalId,
  rotateRight,
  rotateLeft,
  removeFromScene,
} from "../Redux/slices/modelSlice";
import { useEffect } from "react";

function ModelControls() {
  const dispatch = useDispatch();
  // Listen for keyboard events to move the object
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log(event.key);
      switch (event.key) {
        case "ArrowUp":
          dispatch(moveUp());
          break;
        case "ArrowDown":
          dispatch(moveDown());
          break;
        case "ArrowLeft":
          dispatch(moveLeft());
          break;
        case "ArrowRight":
          dispatch(moveRight());
          break;
        case "r":
          dispatch(rotateRight());
          break;
        case "e":
          dispatch(rotateLeft());
          break;
        case "Delete":
          dispatch(removeFromScene());
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  function moveHandler(control) {
    const i = setInterval(() => {
      switch (control) {
        case "up":
          dispatch(moveUp());
          break;
        case "down":
          dispatch(moveDown());
          break;
        case "right":
          dispatch(moveRight());
          break;
        case "left":
          dispatch(moveLeft());
          break;
        case "rotateR":
          dispatch(rotateRight());
          break;
        case "rotateL":
          dispatch(rotateLeft());
          break;
        case "del":
          dispatch(removeFromScene());
          break;
        default:
          break;
      }
    }, 100);
    dispatch(setIntervalId(i));
  }
  function stop() {
    dispatch(clear());
  }
  return (
    <div className={classes.controls}>
      <button className="up" onMouseUp={stop} onMouseDown={() => moveHandler("up")}>
        up
      </button>
      <button className="down" onMouseUp={stop} onMouseDown={() => moveHandler("down")}>
        down
      </button>
      <button className="right" onMouseUp={stop} onMouseDown={() => moveHandler("right")}>
        right
      </button>
      <button className="left" onMouseUp={stop} onMouseDown={() => moveHandler("left")}>
        left
      </button>
      <button className="rotateR" onMouseUp={stop} onMouseDown={() => moveHandler("rotateR")}>
        rotate right
      </button>
      <button className="rotateL" onMouseUp={stop} onMouseDown={() => moveHandler("rotateL")}>
        rotate left
      </button>
      {/* <button className="del" onClick={() => moveHandler("del")}>
        rotate left
      </button> */}
    </div>
  );
}

export default ModelControls;
