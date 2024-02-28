import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../Redux/slices/modelSlice";

export function Door1(props) {
  const { nodes, materials } = useGLTF("/models/door1/scene.gltf");
  
  const dispatch = useDispatch();
  const groupRef = useRef();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Door1";
  });
  function clickHandler() {
    dispatch(highlight("Door1"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Door1",
    //     position: position,
    //     rotate: rotate,
    //     isAdded: true,
    //     factor: 0.5,
    //   })
    // );
  }
  return (
    <>
      {object[0].isAdded && (
        <group
          onClick={clickHandler}
          onDoubleClick={insertion}
          {...props}
          dispose={null}
        >
          <group
            scale={0.06}
            rotation={[-Math.PI / 2, 0, object[0].rotate]}
            position={object[0].position}
          >
            <lineSegments
              geometry={nodes.Material4.geometry}
              material={materials.edge_color24714660255}
            />
            <mesh
              geometry={nodes.Material2.geometry}
              material={materials.lighter_bamboo}
            />
            <mesh
              geometry={nodes.Material2_1.geometry}
              material={materials.Color_F01}
            />
            <lineSegments
              geometry={nodes.Material4_1.geometry}
              material={materials.edge_color193193193255}
            />
            <mesh
              geometry={nodes.Material3.geometry}
              material={materials.Metal_Corrogated_Shiny_1}
            />
            <lineSegments
              geometry={nodes.Material4_2.geometry}
              material={materials.edge_color177105430}
            />
            <mesh
              geometry={nodes.Material2_2.geometry}
              material={materials["36_WHT_4090470"]}
            />
            <mesh
              geometry={nodes.Material2_3.geometry}
              material={materials.Wood_Bamboo_Medium}
            />
            <lineSegments
              geometry={nodes.Material3_1.geometry}
              material={materials.edge_color2022092190}
            />
            <mesh
              geometry={nodes.Material2_4.geometry}
              material={materials.Metal_Aluminum_Anodized_3}
            />
            <mesh
              geometry={nodes.Material2_5.geometry}
              material={materials.Metal_Corrogated_Shiny_2}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/door1/scene.gltf");
