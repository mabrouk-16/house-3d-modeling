import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../Redux/slices/modelSlice";

export function Toilet1(props) {
  const { nodes, materials } = useGLTF("/models/toilet1/scene.gltf");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Toilet1";
  });
  function clickHandler() {
    dispatch(highlight("Toilet1"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Toilet1",
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
          scale={0.02}>
            
          <group
            position={[-26.045, 53.59, -9.401]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Cylinder013_Material010_0.geometry}
              material={materials["Material.010"]}
            />
            <mesh
              geometry={nodes.Cylinder013_Material011_0.geometry}
              material={materials["Material.011"]}
            />
          </group>
          <group
            position={[-18.113, 68.284, -16.448]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Circle007_Material009_0.geometry}
              material={materials["Material.009"]}
            />
            <mesh
              geometry={nodes.Circle007_Material001_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Circle007_Material008_0.geometry}
              material={materials["Material.008"]}
            />
          </group>
          <group
            position={[-32.892, 30.864, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Circle017_Material006_0.geometry}
              material={materials["Material.006"]}
            />
            <mesh
              geometry={nodes.Circle017_Material004_0.geometry}
              material={materials["Material.004"]}
            />
            <mesh
              geometry={nodes.Circle017_Material002_0.geometry}
              material={materials["Material.002"]}
            />
          </group>
          <group
            position={[-25.986, 42.972, 0.018]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Cube022_Material001_0.geometry}
              material={materials["Material.001"]}
            />
            <mesh
              geometry={nodes.Cube022_Material003_0.geometry}
              material={materials["Material.003"]}
            />
          </group>
          <group
            position={[-24.317, 64.207, 11.502]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Cylinder005_Material005_0.geometry}
              material={materials["Material.005"]}
            />
            <mesh
              geometry={nodes.Cylinder005_Material006_0.geometry}
              material={materials["Material.006"]}
            />
          </group>
          <mesh
            geometry={nodes.Cylinder010_Material001_0.geometry}
            material={materials["Material.001"]}
            position={[-24.629, 61.837, -9.432]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube026_Material005_0.geometry}
            material={materials["Material.005"]}
            position={[-28.355, 67.521, -10.022]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube027_Material009_0.geometry}
            material={materials["Material.009"]}
            position={[-27.738, 64.366, -1.65]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube025_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-30.08, 43.896, -15.499]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube023_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-30.052, 51.662, 15.702]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder011__0.geometry}
            material={materials["Cylinder.011__0"]}
            position={[-28.486, 65.612, -5.868]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder012_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[-28.624, 65.623, -6.688]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder014_Material003_0.geometry}
            material={materials["Material.003"]}
            position={[-25.82, 56.389, -9.422]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle003__0.geometry}
            material={materials["Cylinder.011__0"]}
            position={[-25.986, 42.923, 0.018]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube024_Material_0.geometry}
            material={materials.Material}
            position={[-7.29, 40.551, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube049_Material_0.geometry}
            material={materials.Material}
            position={[-7.198, 40.724, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube051__0.geometry}
            material={materials["Cylinder.011__0"]}
            position={[-12.385, 40.465, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle005_Material_0.geometry}
            material={materials.Material}
            position={[-12.385, 40.465, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle015_Material013_0.geometry}
            material={materials["Material.013"]}
            position={[-30.004, 18.984, -17.484]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cylinder002__0.geometry}
            material={materials["Cylinder.011__0"]}
            position={[-30.053, 37.671, 15.679]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Torus001_Material004_0.geometry}
            material={materials["Material.004"]}
            position={[-25.986, 42.728, 0.018]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Circle018_Material007_0.geometry}
            material={materials["Material.007"]}
            position={[-14.239, 68.284, -17.75]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube010_normal__0.geometry}
            material={materials.normal}
            position={[-24.274, 75.27, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube003_tanke_normal__0.geometry}
            material={materials.tanke_normal}
            position={[-25.978, 43.49, 0.098]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube035_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[-27.231, 0.014, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.Cube036_Material002_0.geometry}
            material={materials["Material.002"]}
            position={[3.376, 0.099, 0.03]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/toilet1/scene.gltf");
