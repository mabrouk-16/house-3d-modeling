import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight } from "../Redux/slices/modelSlice";

export function Bed1(props) {
  const dispatch = useDispatch();
  const modelName = "bed1";
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/models/bed/bed1.gltf");
  const position = useSelector((state) => state.modelReducer.position);
  const rotate = useSelector((state) => state.modelReducer.rotate);

  function clickHandler() {
    dispatch(highlight(modelName));
  }

  return (
    <group ref={groupRef} onClick={clickHandler} {...props} dispose={null}>
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, rotate]}
        scale={1 / 500}
        position={position}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/models/bed/bed1.gltf");
