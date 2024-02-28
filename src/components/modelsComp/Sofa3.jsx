import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../Redux/slices/modelSlice";

export function Sofa3(props) {
  const { nodes, materials } = useGLTF("/models/sofa3/scene.gltf");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Sofa3";
  });
  function clickHandler() {
    dispatch(highlight("Sofa3"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Sofa3",
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
          scale={0.06}
        >
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <lineSegments
              geometry={nodes.Material2.geometry}
              material={materials.edge_color868686255}
            />
            <mesh
              geometry={nodes.Material2_1.geometry}
              material={materials.Color_M06}
            />
            <mesh
              geometry={nodes.Material2_2.geometry}
              material={materials.Color_M06}
            />
            <lineSegments
              geometry={nodes.Material2_3.geometry}
              material={materials.edge_color000255}
            />
            <mesh
              geometry={nodes.Material2_4.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Material2_5.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Material2_6.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Material2_7.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Material2_8.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Material2_9.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Material2_10.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Material2_11.geometry}
              material={materials.material}
            />
            <mesh
              geometry={nodes.Material2_12.geometry}
              material={materials.material_4}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/sofa3/scene.gltf");
