import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../Redux/slices/modelSlice";

export function Sofa1(props) {
  const { nodes, materials } = useGLTF("/models/sofa1/scene.gltf");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Sofa1";
  });
  function clickHandler() {
    dispatch(highlight("Sofa1"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Sofa1",
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
          scale={2}
        >
          <group position={[0, -1, 0]}>
            <group position={[0, 1.428, 0.646]} scale={1.005}>
              <mesh
                geometry={nodes.Object_16.geometry}
                material={materials.Material}
              />
              <mesh
                geometry={nodes.Object_17.geometry}
                material={materials.Material}
              />
            </group>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.Material}
              position={[0, 1.301, 0.576]}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Material}
              position={[0, 1.36, 0.576]}
            />
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials["Material.002"]}
              position={[1.048, 1.259, 0.945]}
              rotation={[0, -Math.PI / 4, 0]}
              scale={0.014}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Material}
              position={[-0.003, 1.7, 0.268]}
              rotation={[-0.168, 0, 0]}
              scale={[1.013, 1, 1]}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.Material}
              position={[0.725, 1.7, 0.268]}
              rotation={[-0.168, 0, 0]}
              scale={[1.07, 1.025, 1.025]}
            />
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.Material}
              position={[-0.722, 1.7, 0.268]}
              rotation={[-0.168, 0, 0]}
              scale={[1.03, 1.014, 1.014]}
            />
            <mesh
              geometry={nodes.Object_19.geometry}
              material={materials.Material}
              position={[0.722, 1.428, 0.646]}
              scale={1.006}
            />
            <mesh
              geometry={nodes.Object_21.geometry}
              material={materials.Material}
              position={[-0.721, 1.428, 0.646]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={1.011}
            />
            <mesh
              geometry={nodes.Object_23.geometry}
              material={materials.Material}
              position={[-0.996, 1.638, 0.664]}
              rotation={[0, 0, 0.243]}
            />
            <mesh
              geometry={nodes.Object_25.geometry}
              material={materials.Material}
              position={[0.997, 1.638, 0.664]}
              rotation={[0, 0, -0.288]}
            />
            <mesh
              geometry={nodes.Object_27.geometry}
              material={materials.Material}
              position={[1.104, 1.687, 0.498]}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/sofa1/scene.gltf");
