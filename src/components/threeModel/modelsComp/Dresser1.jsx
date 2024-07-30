import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";

export function Dresser1(props) {
  const { nodes, materials } = useGLTF("/models/dresser1/scene.gltf");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Dresser1";
  });
  function clickHandler() {
    dispatch(highlight("Dresser1"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Dresser1",
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
          scale={1.6}
        >
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.Desk_wood}
            position={[-0.023, 1.24, 0.316]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.Desk_wood_0}
            position={[0.253, 0.415, -0.61]}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.Desk_wood}
            position={[0.253, 0.715, 0.491]}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.Desk_wood}
            position={[0.255, 0.591, 0.644]}
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.Desk_wood}
            position={[0.275, 0.713, -0.327]}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.Desk_wood}
            position={[0.275, 0.713, 0.208]}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.Desk_wood}
            position={[0.249, 0.742, -0.06]}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials.Desk_wood}
            position={[-0.021, 0.742, -0.059]}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.Desk_wood}
            position={[0.241, 0.677, -0.06]}
          />
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials["Material.001"]}
            position={[-0.012, 1.454, -0.26]}
          />
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials.Desk_wood}
            position={[0.071, 1.4, 0.316]}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials.Desk_wood}
            position={[0.071, 1.203, 0.316]}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials.Desk_wood}
            position={[0.071, 0.932, -0.623]}
          />
          <mesh
            geometry={nodes.Object_30.geometry}
            material={materials.Desk_wood}
            position={[0.071, 1.005, 0.316]}
          />
          <mesh
            geometry={nodes.Object_32.geometry}
            material={materials.Desk_wood_0}
            position={[0.253, 0.845, -0.059]}
          />
          <mesh
            geometry={nodes.Object_34.geometry}
            material={materials.Desk_wood}
            position={[0.071, 1.24, 0.127]}
          />
          <mesh
            geometry={nodes.Object_36.geometry}
            material={materials.Desk_wood}
            position={[0.071, 1.24, 0.505]}
          />
          <mesh
            geometry={nodes.Object_38.geometry}
            material={materials.Desk_wood}
            position={[0.071, 1.005, -0.259]}
          />
          <mesh
            geometry={nodes.Object_40.geometry}
            material={materials.Desk_wood}
            position={[0.273, 0.138, 0.867]}
          />
          <mesh
            geometry={nodes.Object_42.geometry}
            material={materials.Desk_wood}
            position={[0.277, 0.305, 0.867]}
          />
          <mesh
            geometry={nodes.Object_44.geometry}
            material={materials.Desk_wood}
            position={[0.268, 0.415, 0.867]}
          />
          <mesh
            geometry={nodes.Object_46.geometry}
            material={materials.Desk_wood}
            position={[0.268, 0.245, 0.867]}
          />
          <mesh
            geometry={nodes.Object_48.geometry}
            material={materials.Desk_wood}
            position={[0.273, 0.304, 0.421]}
          />
          <mesh
            geometry={nodes.Object_50.geometry}
            material={materials.Desk_wood}
            position={[-0.014, 0.291, 0.644]}
          />
          <mesh
            geometry={nodes.Object_52.geometry}
            material={materials.Desk_wood}
            position={[0.273, 0.329, 0.644]}
          />
          <mesh
            geometry={nodes.Object_54.geometry}
            material={materials.Desk_wood}
            position={[0.273, 0.068, 0.644]}
          />
          <mesh
            geometry={nodes.Object_56.geometry}
            material={materials.Desk_wood}
            position={[0.253, 0.291, 1.089]}
          />
          <mesh
            geometry={nodes.Object_58.geometry}
            material={materials.Desk_wood}
            position={[0.253, 0.291, 0.198]}
          />
          <mesh
            geometry={nodes.Object_60.geometry}
            material={materials.Desk_wood}
            position={[0.82, 0.395, -0.22]}
          />
          <mesh
            geometry={nodes.Object_62.geometry}
            material={materials.Orange_Fabric}
            position={[0.82, 0.445, -0.22]}
          />
          <mesh
            geometry={nodes.Object_64.geometry}
            material={materials.Desk_wood}
            position={[1.032, 0.211, -0.002]}
          />
          <mesh
            geometry={nodes.Object_66.geometry}
            material={materials.Desk_wood}
            position={[0.616, 0.21, -0.001]}
          />
          <mesh
            geometry={nodes.Object_68.geometry}
            material={materials.Desk_wood}
            position={[0.598, 0.21, -0.421]}
          />
          <mesh
            geometry={nodes.Object_70.geometry}
            material={materials.Desk_wood}
            position={[1.033, 0.211, -0.42]}
          />
          <mesh
            geometry={nodes.Object_72.geometry}
            material={materials.Desk_wood}
            position={[-0.026, 1.382, -0.26]}
          />
          <mesh
            geometry={nodes.Object_74.geometry}
            material={materials.Desk_wood}
            position={[-0.022, 0.943, -0.259]}
          />
          <mesh
            geometry={nodes.Object_76.geometry}
            material={materials.Desk_wood}
            position={[0.277, 0.475, 0.867]}
          />
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/dresser1/scene.gltf");
