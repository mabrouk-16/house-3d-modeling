import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bed1(props) {
  const { nodes, materials } = useGLTF("/models/bed/bed1.gltf");
  return (
    <group position={[10, 0, 20]}  {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Material}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={1 / 500}
            // position={[10, 0, 20]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/bed/bed1.gltf");
