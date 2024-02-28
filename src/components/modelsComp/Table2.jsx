import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../Redux/slices/modelSlice";

export function Table2(props) {
  const { nodes, materials } = useGLTF("/models/table2/table2.gltf ");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Table2";
  });
  function clickHandler() {
    dispatch(highlight("Table2"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Table2",
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
          scale={1.5}
        >
          <group scale={0.01}>
            <mesh
              geometry={nodes.OfficeTable_OfficeTable_0.geometry}
              material={materials.OfficeTable}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/table2/table2.gltf");
