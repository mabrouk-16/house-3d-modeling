import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bed3(props) {
  const { nodes, materials } = useGLTF("../../public/models/bed3/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          geometry={nodes.aeneoclsbdg000005_aeneoclsbdg000005_0.geometry}
          material={materials.aeneoclsbdg000005}
          position={[0, -8.066, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[96.122 * 2, 99.135 * 2, 29.838 * 2]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../../public/models/bed3/scene.gltf");
