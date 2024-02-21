import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight } from "../Redux/slices/modelSlice";

export function Bed1(props) {
  const dispatch = useDispatch()
  const modelName = "bed1";
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/models/bed/bed1.gltf");
  const [istouched, setIsTouched] = useState(false);
  const [status, setStatus] = useState("");
  // const [rotate, setRotate] = useState(0);
  // const [position, setPosition] = useState([0, 0, 0]); // State to store the position of the bed object
  const position = useSelector((state) => state.modelReducer.position);
  const rotate = useSelector((state) => state.modelReducer.rotate);
  // Listen for keyboard events to move the object
  useEffect(() => {
    const handleKeyDown = (event) => {
      // console.log(event.key);
      console.log(istouched);
      if (istouched) {
        switch (event.key) {
          case "ArrowUp":
            setPosition((prevPos) => [
              prevPos[0],
              prevPos[1],
              prevPos[2] - 0.5,
            ]);
            break;
          case "ArrowDown":
            setPosition((prevPos) => [
              prevPos[0],
              prevPos[1],
              prevPos[2] + 0.5,
            ]);
            break;
          case "ArrowLeft":
            setPosition((prevPos) => [
              prevPos[0] - 0.5,
              prevPos[1],
              prevPos[2],
            ]);
            break;
          case "ArrowRight":
            setPosition((prevPos) => [
              prevPos[0] + 0.5,
              prevPos[1],
              prevPos[2],
            ]);
            break;
          case "Control":
            setRotate((prev) => prev + 0.1);
            break;
          case "Alt":
            setRotate((prev) => prev - 0.1);
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [istouched, rotate]);
  function clickHandler() {
    dispatch(highlight(modelName))
    setIsTouched((prev) => !prev);

    console.log(istouched);
  }
  // function moveUp() {
  //   setPosition((prevPos) => [prevPos[0], prevPos[1], prevPos[2] - 0.5]);
  // }
  return (
    <group ref={groupRef} onClick={clickHandler} {...props} dispose={null}>
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, rotate]}
        scale={1 / 500}
        position={position} // Update the position of the mesh based on state
      >
        {/* <meshStandardMaterial color={istouched ? "hotpink" : "orange"} /> */}
      </mesh>
      {/* Button positioned relative to the mesh */}
      {/* <mesh
        onClick={moveUp}
        position={[position[0] - 3, position[1] + 1, position[2]]}
      >
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial color="blue" />
      </mesh> */}
    </group>
  );
}

// function moveUp() {
//   setPosition((prevPos) => [prevPos[0], prevPos[1], prevPos[2] - 0.5]);
// }
// function moveDown() {
//   setPosition((prevPos) => [prevPos[0], prevPos[1], prevPos[2] + 0.5]);
// }
// function moveLeft() {
//   setPosition((prevPos) => [prevPos[0] - 0.5, prevPos[1], prevPos[2]]);
// }
// function moveRight() {
//   setPosition((prevPos) => [prevPos[0] + 0.5, prevPos[1], prevPos[2]]);
// }
// function rotate() {
//   setRotate((prev) => prev + 0.1);
// }
useGLTF.preload("/models/bed/bed1.gltf");
