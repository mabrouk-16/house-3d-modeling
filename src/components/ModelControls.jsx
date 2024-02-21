import { useDispatch } from "react-redux";
import {
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  clear,
  setIntervalId,
  rotateRight,
  rotateLeft,
} from "../Redux/slices/modelSlice";

function ModelControls() {
  const dispatch = useDispatch();

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
    <div className="controls">
      <button
        className="up"
        onMouseUp={stop}
        onMouseDown={() => moveHandler("up")}
      >
        up
      </button>
      <button
        className="down"
        onMouseUp={stop}
        onMouseDown={() => moveHandler("down")}
      >
        down
      </button>
      <button
        className="right"
        onMouseUp={stop}
        onMouseDown={() => moveHandler("right")}
      >
        right
      </button>
      <button
        className="left"
        onMouseUp={stop}
        onMouseDown={() => moveHandler("left")}
      >
        left
      </button>
      <button
        className="rotateR"
        onMouseUp={stop}
        onMouseDown={() => moveHandler("rotateR")}
      >
        rotate right
      </button>
      <button
        className="rotateL"
        onMouseUp={stop}
        onMouseDown={() => moveHandler("rotateL")}
      >
        rotate left
      </button>
    </div>
  );
}

export default ModelControls;
