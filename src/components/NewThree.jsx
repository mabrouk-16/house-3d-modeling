import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Test from "./Test";

function NewThree(props) {
  const lines = props.lines;
  const canvasRef = useRef(null);

  return (
    <>
      {/* <button onClick={exportScene}>Save 3D</button> */}
      <Canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100vh", display: "block" }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight intensity={0.5} />
        <OrbitControls />
          <Test  />
          <Walls lines={lines} />
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
      <boxGeometry args={[distance / 10, 5, 1]} />
      <meshBasicMaterial color={0xaaaaaa} />
    </mesh>
  );
}

export default NewThree;
