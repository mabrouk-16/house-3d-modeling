import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../Redux/slices/modelSlice";

export function Sofa4(props) {
  const { nodes, materials } = useGLTF("/models/sofa4/scene.gltf");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Sofa4";
  });
  function clickHandler() {
    dispatch(highlight("Sofa4"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Sofa4",
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
          scale={0.015}
        >
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_2.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Object_3.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials["Material.001"]}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/sofa4/scene.gltf");
