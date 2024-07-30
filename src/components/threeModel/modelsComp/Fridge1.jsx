import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";

export function Fridge1(props) {
  const { nodes, materials } = useGLTF("/models/fridge1/fridge.glb");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Fridge1";
  });
  function clickHandler() {
    dispatch(highlight("Fridge1"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Fridge1",
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
          {...props}
          onClick={clickHandler}
          onDoubleClick={insertion}
          dispose={null}
          rotation={[0, object[0].rotate, 0]}
          position={object[0].position}
          scale={0.6}
        >
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Material}
            position={[0.163, 2.953, 0.192]}
            rotation={[-Math.PI, 0, 0]}
            scale={[1.31, 2.865, 1.572]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["Material.001"]}
            position={[0.086, 2.953, 0.192]}
            rotation={[-Math.PI, 0, 0]}
            scale={[1.31, 2.865, 1.572]}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Material}
            position={[-1.146, 3.512, -3.055]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.196, 2.519, 1.572]}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Material}
            position={[-1.146, 0.718, -3.055]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.196, 2.227, 1.572]}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials["Material.001"]}
            position={[-1.621, 4.156, -0.258]}
            scale={[0.122, 0.28, 0.066]}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials["Material.002"]}
            position={[-1.524, 4.156, -0.258]}
            scale={[0.02, 0.359, 0.098]}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials["Material.001"]}
            position={[-1.621, 1.462, -0.258]}
            scale={[0.122, 0.28, 0.066]}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials["Material.002"]}
            position={[-1.524, 1.462, 1.372]}
            scale={[0.02, 0.359, 0.098]}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials["Material.003"]}
            position={[-1.143, 4.239, -1.335]}
            scale={[0.058, 0.552, 0.058]}
          />
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials["Material.003"]}
            position={[-1.143, 1.472, -1.335]}
            scale={[0.058, 0.552, 0.058]}
          />
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/fridge1/fridge.glb");
