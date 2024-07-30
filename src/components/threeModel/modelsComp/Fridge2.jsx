import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";

export function Fridge2(props) {
  const { nodes, materials } = useGLTF("/models/fridge2/simple_fridge.glb");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Fridge2";
  });
  function clickHandler() {
    dispatch(highlight("Fridge2"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Fridge2",
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
          scale={0.16}
        >
          <group rotation={[-Math.PI, 0, 0]}>
            <mesh
              geometry={nodes.Object_2.geometry}
              material={materials.color_16448250}
            />
            <mesh
              geometry={nodes.Object_3.geometry}
              material={materials.color_2829873}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/fridge2/simple_fridge.glb");
