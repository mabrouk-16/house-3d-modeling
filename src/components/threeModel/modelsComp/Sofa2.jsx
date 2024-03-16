import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../Redux/slices/modelSlice";

export function Sofa2(props) {
  const { nodes, materials } = useGLTF("/models/sofa2/scene.gltf");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Sofa2";
  });
  function clickHandler() {
    dispatch(highlight("Sofa2"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Sofa2",
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
          dispose={null}
          onClick={clickHandler}
          onDoubleClick={insertion}
          rotation={[0, object[0].rotate, 0]}
          position={object[0].position}
          scale={0.7}
        >
          <group scale={0.01}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                geometry={nodes.Frame_Frame_0.geometry}
                material={materials.Frame}
              />
              <mesh
                geometry={nodes.Frame_Trim_0.geometry}
                material={materials.Trim}
              />
              <mesh
                geometry={nodes.Sofa_Sofa_0.geometry}
                material={materials.Sofa}
              />
              <mesh
                geometry={nodes.Pillows_Pillows_0.geometry}
                material={materials.Pillows}
              />
            </group>
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/sofa2/scene.gltf");
