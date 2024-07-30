import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";

export function Bed3(props) {
    const { nodes, materials } = useGLTF("/models/bed3/scene.gltf");
    const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Bed3";
  });
  function clickHandler() {
    dispatch(highlight("Bed3"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Bed3",
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
          scale={0.002}
          rotation={[0, object[0].rotate,0]}
          position={object[0].position}
        >
          <group>
            <group
              position={[518.152, 640.05, 893.156]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <group
                position={[-387.058, 1030.588, -41.175]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.447]}
              >
                <group position={[-209.18, 135.962, 40]}>
                  <mesh
                    geometry={nodes["Plane004_Paddington-04_0"].geometry}
                    material={materials["Paddington-04"]}
                  />
                  <mesh
                    geometry={nodes["Plane004_Paddington-04_0_1"].geometry}
                    material={materials["Paddington-04"]}
                  />
                  <mesh
                    geometry={nodes["Plane004_Paddington-04_0_2"].geometry}
                    material={materials["Paddington-04"]}
                  />
                  <mesh
                    geometry={nodes["Plane004_Paddington-04_0_3"].geometry}
                    material={materials["Paddington-04"]}
                  />
                </group>
              </group>
              <group
                position={[-566.005, 1030.588, -41.175]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.447]}
              >
                <group position={[-209.18, 135.962, 40]}>
                  <mesh
                    geometry={nodes["Plane005_Paddington-04_0"].geometry}
                    material={materials["Paddington-04"]}
                  />
                  <mesh
                    geometry={nodes["Plane005_Paddington-04_0_1"].geometry}
                    material={materials["Paddington-04"]}
                  />
                  <mesh
                    geometry={nodes["Plane005_Paddington-04_0_2"].geometry}
                    material={materials["Paddington-04"]}
                  />
                  <mesh
                    geometry={nodes["Plane005_Paddington-04_0_3"].geometry}
                    material={materials["Paddington-04"]}
                  />
                </group>
              </group>
              <mesh
                geometry={nodes["Plane001_Paddington-04_0"].geometry}
                material={materials["Paddington-04"]}
                position={[-1.805, 972.707, 94.787]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.447]}
              />
              <mesh
                geometry={nodes["Plane006_Paddington-04_0"].geometry}
                material={materials["Paddington-04"]}
                position={[-863.726, 997.672, 33.335]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes["Box002_Paddington-04_0"].geometry}
                material={materials["Paddington-04"]}
                position={[-1.804, 1070.104, -515.05]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes["Object_Material_#6_0"].geometry}
                material={materials.Material_6}
                position={[-863.726, 997.672, 33.335]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes["Object002_Paddington-04_0"].geometry}
                material={materials["Paddington-04"]}
                position={[-863.726, 997.672, 33.335]}
                rotation={[Math.PI / 2, 0, 0]}
              />
              <mesh
                geometry={nodes["Box003_������������_0"].geometry}
                material={materials.material}
                position={[3.516, -185.133, -640.05]}
              />
              <mesh
                geometry={nodes["Object006_Material_#6_0"].geometry}
                material={materials.Material_6}
                position={[3.641, -9.917, -570.05]}
              />
              <mesh
                geometry={nodes["Object004_Material_#6_0"].geometry}
                material={materials.Material_6}
                position={[3.641, -9.917, -570.05]}
              />
            </group>
            <group
              position={[601.413, 524.565, 898.132]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <group position={[0, -395.545, -174.596]}>
                <mesh
                  geometry={nodes["Object076_Paddington-04_0"].geometry}
                  material={materials["Paddington-04"]}
                  position={[-119.161, 394.651, 149.471]}
                />
              </group>
              <group position={[0.258, 534.841, -196.616]}>
                <mesh
                  geometry={nodes["Kleo_Part_2_����������_0"].geometry}
                  material={materials.material_3}
                  position={[-119.42, -535.736, 171.491]}
                />
              </group>
              <group position={[-5.782, 802.16, 125.53]}>
                <mesh
                  geometry={nodes["Object074_����������_0"].geometry}
                  material={materials.material_3}
                  position={[-113.38, -803.054, -150.655]}
                />
              </group>
              <group position={[-5.432, 516.683, 119.25]}>
                <mesh
                  geometry={
                    nodes["Object072_��������������������_01_0"].geometry
                  }
                  material={materials.material_4}
                  position={[-113.729, -517.578, -144.375]}
                />
              </group>
            </group>
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/bed3/scene.gltf");
