import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ModelGroup from "./ModelGroup";

function NewThree(props) {
  const lines = props.lines;
  const canvasRef = useRef(null);

  return (
    <>
      <Canvas
        ref={canvasRef}
        style={{ width: "100%", height: "90vh", display: "block" }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 500,
          position: [-4, 3, 6],
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} />
        <OrbitControls />
        <Walls lines={lines} />
        {/* <Test/> */}
        <ModelGroup />

        {/* <Floor /> */}
      </Canvas>
    </>
  );
}

function Walls({ lines }) {
  return lines.map((line, index) => <Wall key={index} line={line} />);
}

function Wall({ line }) {
  const distance = Math.sqrt(
    Math.pow(line.endX - line.startX, 2) + Math.pow(line.endY - line.startY, 2)
  );

  const positionX = (line.startX + line.endX) / 2;
  const positionY = 5 / 2;
  const positionZ = (line.startY + line.endY) / 2;
  const rotationY = Math.atan2(
    line.startY - line.endY,
    line.startX - line.endX
  );

  return (
    <mesh
      position={[positionX / 10 - 40, positionY, positionZ / 10 - 30]}
      rotation-y={-rotationY}
    >
      <boxGeometry args={[distance / 10, 5, 0.4]} />
      <meshBasicMaterial color={0xaaaaaa} />
      {/* <WallGUI /> */}
    </mesh>
  );
}

function Floor() {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <boxGeometry args={[1000, 1000, 1]} />
      <meshBasicMaterial color={0xffffff} />
    </mesh>
  );
}

// function WallGUI() {
//   const { scene } = useThree();

//   useEffect(() => {
//     // Create a GUI
//     const gui = new GUI();

//     // Add a color control to the GUI
//     const colorConfig = { color: "#aaaaaa" };
//     const folder = gui.addFolder("Wall Color");
//     folder.addColor(colorConfig, "color").onFinishChange(() => {
//       scene.traverse((child) => {
//         if (child.type === "Mesh" && child.parent.type === "Mesh") {
//           child.material.color.set(colorConfig.color);
//         }
//       });
//     });
//     folder.open();

//     // Clean up
//     return () => {
//       gui.destroy();
//     };
//   }, [scene]);

//   return null;
// }

export default NewThree;
