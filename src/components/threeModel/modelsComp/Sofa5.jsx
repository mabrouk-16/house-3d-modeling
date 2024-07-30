import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";

export function Sofa5(props) {
  const { nodes, materials } = useGLTF("/models/sofa5/scene.gltf");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Sofa5";
  });
  function clickHandler() {
    dispatch(highlight("Sofa5"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Sofa5",
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
          scale={3}
        >
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <group
              position={[0.146, 0.071, 0.151]}
              rotation={[0, -0.023, Math.PI]}
              scale={[0.768, 1.736, 0.672]}
            >
              <mesh
                geometry={nodes["Material_002-material"].geometry}
                material={materials["Material.002"]}
              />
              <mesh
                geometry={nodes["Material_003-material"].geometry}
                material={materials["Material.003"]}
              />
            </group>
            <group
              position={[0.119, -1.157, 0.14]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.776, 0.806, 0.682]}
            >
              <mesh
                geometry={nodes["Material_005-material"].geometry}
                material={materials["Material.005"]}
              />
              <mesh
                geometry={nodes["Material_004-material"].geometry}
                material={materials["Material.004"]}
              />
            </group>
            <group
              position={[-0.769, -1.16, 0.15]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[0.778, 1.005, 0.674]}
            >
              <mesh
                geometry={nodes["Material_006-material"].geometry}
                material={materials["Material.006"]}
              />
              <mesh
                geometry={nodes["Material_007-material"].geometry}
                material={materials["Material.007"]}
              />
            </group>
            <mesh
              geometry={nodes["Material_001-material"].geometry}
              material={materials["Material.001"]}
              position={[0.143, -0.036, -0.33]}
              rotation={[0, -0.023, -Math.PI]}
              scale={[1.217, 1.865, 0.427]}
            />
            <mesh
              geometry={nodes["Material_001-material_1"].geometry}
              material={materials["Material.001"]}
              position={[0.11, -1.163, -0.346]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.244, 1.079, 0.414]}
            />
            <mesh
              geometry={nodes["Material_001-material_2"].geometry}
              material={materials["Material.001"]}
              position={[-0.711, -1.166, -0.339]}
              rotation={[0, 0, Math.PI / 2]}
              scale={[1.249, 1.083, 0.416]}
            />
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/sofa5/scene.gltf");
