import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../Redux/slices/modelSlice";

export function Bed1(props) {
  const dispatch = useDispatch();
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/models/bed/bed1.gltf");
  const position = useSelector((state) => state.modelReducer.position);
  const rotate = useSelector((state) => state.modelReducer.rotate);
  const array = useSelector((state) => state.modelReducer.objectsArr);
  function clickHandler() {
    dispatch(highlight("Bed1"));
  }
  function insertion() {
    console.log("objects", array);
    dispatch(insert({ name: "Bed1", position: position, rotate: rotate }));
  }

  return (
    <group
      ref={groupRef}
      onClick={clickHandler}
      onDoubleClick={insertion}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.defaultMaterial.geometry}
        material={materials.Material}
        rotation={[-Math.PI / 2, 0, array[1].rotate]}
        scale={1 / 500}
        position={position}
      ></mesh>
    </group>
  );
}

useGLTF.preload("/models/bed/bed1.gltf");
