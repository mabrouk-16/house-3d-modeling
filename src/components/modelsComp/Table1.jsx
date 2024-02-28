import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../Redux/slices/modelSlice";

export function Table1(props) {
  const { nodes, materials } = useGLTF("/models/table1/table1.gltf");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Table1";
  });
  function clickHandler() {
    dispatch(highlight("Table1"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Table1",
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
          scale={0.02}
        >
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_2.geometry}
              material={materials.FARBA}
            />
            <mesh
              geometry={nodes.Object_3.geometry}
              material={materials.HICKORY}
            />
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.biela}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.biela}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/table1/table1.gltf");
