import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";

export function Table3(props) {
  const { nodes, materials } = useGLTF("/models/table3/scene.glb ");
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Table3";
  });
  function clickHandler() {
    dispatch(highlight("Table3"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Table3",
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
          <group scale={0.01}>
            <group
              position={[0.166, 62.356, -0.002]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <mesh
                geometry={nodes.chemin001_tissu_fonce_0.geometry}
                material={materials.tissu_fonce}
              />
              <mesh
                geometry={nodes.chemin001_tissu_clair_0.geometry}
                material={materials.tissu_clair}
              />
              <mesh
                geometry={nodes.chemin001_table_or_0.geometry}
                material={materials.table_or}
              />
              <mesh
                geometry={nodes.chemin001_table_marbre_0.geometry}
                material={materials.table_marbre}
              />
              <mesh
                geometry={nodes.chemin001_siege_tissu_0.geometry}
                material={materials.siege_tissu}
              />
              <mesh
                geometry={nodes.chemin001_siege_or_0.geometry}
                material={materials.siege_or}
              />
              <mesh
                geometry={nodes.chemin001_assise_or_0.geometry}
                material={materials.assise_or}
              />
              <mesh
                geometry={nodes.chemin001_assise_tissu_0.geometry}
                material={materials.assise_tissu}
              />
              <mesh
                geometry={nodes.chemin001_vase_silver_0.geometry}
                material={materials.vase_silver}
              />
              <mesh
                geometry={nodes.chemin001_chandelier_silver_0.geometry}
                material={materials.chandelier_silver}
              />
              <mesh
                geometry={nodes.chemin001_chandelier_glass_0.geometry}
                material={materials.chandelier_glass}
              />
              <mesh
                geometry={nodes.chemin001_candle_wax_0.geometry}
                material={materials.candle_wax}
              />
              <mesh
                geometry={nodes.chemin001_candle_meche_0.geometry}
                material={materials.candle_meche}
              />
              <mesh
                geometry={nodes["chemin001_bq_Leaf_Dahlia-pinnata_0"].geometry}
                material={materials["bq_Leaf_Dahlia-pinnata"]}
              />
              <mesh
                geometry={
                  nodes["chemin001_bq_Flower_Dahlia-pinnata_0"].geometry
                }
                material={materials["bq_Flower_Dahlia-pinnata"]}
              />
            </group>
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/table3/scene.glb ");
