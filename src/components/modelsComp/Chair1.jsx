import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../Redux/slices/modelSlice";

export function Chair1(props) {
  const { nodes, materials } = useGLTF("/models/chair1/scene.gltf");
  const dispatch = useDispatch();
  const groupRef = useRef();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Chair1";
  });
  function clickHandler() {
    dispatch(highlight("Chair1"));
  }
  function insertion() {
    console.log("objects", array);
    dispatch(
      insert({
        name: "Chair1",
        position: position,
        rotate: rotate,
        isAdded: true,
        factor: 0.5,
      })
    );
  }
  return (
    <>
      {object[0].isAdded && (
        <group
          {...props}
          dispose={null}
          onClick={clickHandler}
          onDoubleClick={insertion}
        >
          <group
            scale={0.002}
            rotation={[-Math.PI / 2, 0, object[0].rotate]}
            position={object[0].position}
          >
            <mesh
              geometry={nodes.Object_2.geometry}
              material={materials.wire_115115115}
            />
            <mesh
              geometry={nodes.Object_3.geometry}
              material={materials.wire_149149149}
            />
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.wire_149149149}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.wire_149149149}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/chair1/scene.gltf");
