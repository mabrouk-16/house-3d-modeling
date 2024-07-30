import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";

function Bed1(props) {
  const { nodes, materials } = useGLTF("/models/bed/bed1.gltf");
  const dispatch = useDispatch();
  const groupRef = useRef();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Bed1";
  });
  function clickHandler() {
    dispatch(highlight("Bed1"));
  }
  function insertion() {
    console.log("objects", array);
    dispatch(
      insert({
        name: "Bed1",
        position: position,
        rotate: rotate,
        isAdded: true,
        factor: 0.5,
      })
    );
  }
  // let show = 0;
  // if (array[1].isAdded) {
  //   show = 1 / 500;
  // } else show = 0;
  return (
    <>
      {object[0].isAdded && (
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
            rotation={[-Math.PI / 2, 0, object[0].rotate]}
            position={object[0].position}
            scale={1 / 500}
          ></mesh>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/bed/bed1.gltf");
export default Bed1;
