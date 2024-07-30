import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";

export function Stove2(props) {
  const { nodes, materials } = useGLTF("/models/stove2/stove.glb");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Stove2";
  });
  function clickHandler() {
    dispatch(highlight("Stove2"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Stove2",
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
          <group position={[0, -10, 0]} rotation={[-Math.PI / 2, 0, Math.PI]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group position={[-0.635, 77.261, -0.724]}>
                <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.Stove} />
                <mesh geometry={nodes.defaultMaterial_6.geometry} material={materials.Stove} />
              </group>
              <mesh
                geometry={nodes.defaultMaterial.geometry}
                material={materials.Stove}
                position={[-0.023, 67.004, -32.873]}
              />
              <mesh
                geometry={nodes.defaultMaterial_1.geometry}
                material={materials.Stove}
                position={[0, 10.261, -29.162]}
              />
              <mesh
                geometry={nodes.defaultMaterial_2.geometry}
                material={materials.Stove}
                position={[0.238, 49.913, -31.334]}
              />
              <mesh
                geometry={nodes.defaultMaterial_3.geometry}
                material={materials.Stove}
                position={[14.599, 14.682, 2.284]}
              />
              <mesh
                geometry={nodes.defaultMaterial_4.geometry}
                material={materials.Stove}
                position={[-8.884, 0, 0]}
              />
              <mesh
                geometry={nodes.defaultMaterial_7.geometry}
                material={materials.Stove}
                position={[0, 23.111, 1.893]}
              />
              <mesh
                geometry={nodes.defaultMaterial_8.geometry}
                material={materials.Stove}
                position={[-0.103, 28.986, -14.933]}
              />
            </group>
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/stove2/stove.glb");
