import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";

export function Stove1(props) {
  const { nodes, materials } = useGLTF("/models/stove1/stove.glb");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Stove1";
  });
  function clickHandler() {
    dispatch(highlight("Stove1"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Stove1",
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
          scale={1}
        >
          <group rotation={[-Math.PI / 2, 0, 0]}  >
            <mesh
              geometry={nodes.defaultMaterial.geometry}
              material={materials.DefaultMaterial}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/stove1/stove.glb");
