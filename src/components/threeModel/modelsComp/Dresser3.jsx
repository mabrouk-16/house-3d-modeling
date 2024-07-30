import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../../Redux/slices/modelSlice";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Dresser3(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/dresser3/scene.gltf"
  );
  const { actions } = useAnimations(animations, group);
    const dispatch = useDispatch();
    const array = useSelector((state) => state.modelReducer.objectsArr);

    let object = array.filter((obj) => {
      return obj.name == "Dresser3";
    });
    function clickHandler() {
      dispatch(highlight("Dresser3"));
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
          ref={group}
          {...props}
          onClick={clickHandler}
          onDoubleClick={insertion}
          dispose={null}
          rotation={[0, object[0].rotate, 0]}
          position={object[0].position}
          scale={1.6}
        >
          <group name="Sketchfab_Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
              <group
                name="93c0e2cef0704b2ab6e3fa9e78132e28fbx"
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.001}
              >
                <group name="Object_2">
                  <group name="RootNode">
                    <group
                      name="Group008"
                      position={[500, 448.6, 315.97]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <group name="Group004" position={[0, -65.5, 308.4]}>
                        <group
                          name="VIFS019"
                          position={[-244.5, -191.53, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_7" position={[-790, -297.5, -8]}>
                            <mesh
                              name="VIFS019_U104_ST9_0"
                              geometry={nodes.VIFS019_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS020"
                          position={[-244.5, 242.47, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_10" position={[-790, -297.5, -8]}>
                            <mesh
                              name="VIFS020_U104_ST9_0"
                              geometry={nodes.VIFS020_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS013"
                          position={[244.5, 242.47, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_13" position={[-790, -297.5, -8]}>
                            <mesh
                              name="VIFS013_U104_ST9_0"
                              geometry={nodes.VIFS013_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group name="VIFS022" position={[-244.5, 25.47, -86]}>
                          <group name="Object_16" position={[-790, -1294, -8]}>
                            <mesh
                              name="VIFS022_U104_ST9_0"
                              geometry={nodes.VIFS022_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group name="VIFS015" position={[244.5, 25.47, -86]}>
                          <group name="Object_19" position={[-790, -1294, -8]}>
                            <mesh
                              name="VIFS015_U104_ST9_0"
                              geometry={nodes.VIFS015_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS012"
                          position={[244.5, -191.53, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_22" position={[-790, -297.5, -8]}>
                            <mesh
                              name="VIFS012_U104_ST9_0"
                              geometry={nodes.VIFS012_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS017"
                          position={[-420.4, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_25"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS017_Rubber_0"
                              geometry={nodes.VIFS017_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS011"
                          position={[420.4, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_28"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS011_Rubber_0"
                              geometry={nodes.VIFS011_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS014"
                          position={[468, 25.47, -1]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_31" position={[175, -283.5, -8]}>
                            <mesh
                              name="VIFS014_U104_ST9_0"
                              geometry={nodes.VIFS014_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS016"
                          position={[21, 25.47, -1]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_34" position={[-175, -283.5, -8]}>
                            <mesh
                              name="VIFS016_U104_ST9_0"
                              geometry={nodes.VIFS016_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS021"
                          position={[-21, 25.47, -1]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_37" position={[175, -283.5, -8]}>
                            <mesh
                              name="VIFS021_U104_ST9_0"
                              geometry={nodes.VIFS021_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS018"
                          position={[-68.6, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_40"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS018_Rubber_0"
                              geometry={nodes.VIFS018_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS010"
                          position={[68.6, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_43"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS010_Rubber_0"
                              geometry={nodes.VIFS010_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS024"
                          position={[-468, 25.47, -1]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_46" position={[-175, -283.5, -8]}>
                            <mesh
                              name="VIFS024_U104_ST9_0"
                              geometry={nodes.VIFS024_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group name="Group003" position={[0, -225, 0]}>
                          <group
                            name="Furniture_handle_05"
                            position={[0, -9.237, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group
                              name="Object_50"
                              position={[-18.752, 0, 2.841]}
                              rotation={[Math.PI, 0, -Math.PI]}
                            >
                              <mesh
                                name="Furniture_handle_05_Gold_0"
                                geometry={
                                  nodes.Furniture_handle_05_Gold_0.geometry
                                }
                                material={materials.Gold}
                              />
                            </group>
                          </group>
                          <group
                            name="Box001"
                            position={[0, 15.97, 0]}
                            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                          >
                            <group
                              name="Object_53"
                              position={[-610.67, 490.907, -9.5]}
                            >
                              <mesh
                                name="Box001_NCS_S_0502-Y_semiglos_0"
                                geometry={
                                  nodes["Box001_NCS_S_0502-Y_semiglos_0"]
                                    .geometry
                                }
                                material={materials["NCS_S_0502-Y_semiglos"]}
                              />
                            </group>
                          </group>
                          <group
                            name="Object"
                            position={[0, 7.47, -25]}
                            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                          >
                            <group
                              name="Object_56"
                              position={[-427.42, 490.907, -1]}
                            >
                              <mesh
                                name="Object_Gold_0"
                                geometry={nodes.Object_Gold_0.geometry}
                                material={materials.Gold}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Group005" position={[0, -65.5, 56.4]}>
                        <group
                          name="VIFS026"
                          position={[420.4, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_60"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS026_Rubber_0"
                              geometry={nodes.VIFS026_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS025"
                          position={[68.6, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_63"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS025_Rubber_0"
                              geometry={nodes.VIFS025_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS032"
                          position={[-420.4, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_66"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS032_Rubber_0"
                              geometry={nodes.VIFS032_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS033"
                          position={[-68.6, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_69"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS033_Rubber_0"
                              geometry={nodes.VIFS033_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group name="VIFS037" position={[-244.5, 25.47, -86]}>
                          <group name="Object_72" position={[-790, -1294, -8]}>
                            <mesh
                              name="VIFS037_U104_ST9_0"
                              geometry={nodes.VIFS037_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group name="VIFS030" position={[244.5, 25.47, -86]}>
                          <group name="Object_75" position={[-790, -1294, -8]}>
                            <mesh
                              name="VIFS030_U104_ST9_0"
                              geometry={nodes.VIFS030_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS031"
                          position={[21, 25.47, -1]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_78" position={[-175, -283.5, -8]}>
                            <mesh
                              name="VIFS031_U104_ST9_0"
                              geometry={nodes.VIFS031_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS039"
                          position={[-468, 25.47, -1]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_81" position={[-175, -283.5, -8]}>
                            <mesh
                              name="VIFS039_U104_ST9_0"
                              geometry={nodes.VIFS039_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS036"
                          position={[-21, 25.47, -1]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_84" position={[175, -283.5, -8]}>
                            <mesh
                              name="VIFS036_U104_ST9_0"
                              geometry={nodes.VIFS036_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS027"
                          position={[244.5, -191.53, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_87" position={[-790, -297.5, -8]}>
                            <mesh
                              name="VIFS027_U104_ST9_0"
                              geometry={nodes.VIFS027_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS035"
                          position={[-244.5, 242.47, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_90" position={[-790, -297.5, -8]}>
                            <mesh
                              name="VIFS035_U104_ST9_0"
                              geometry={nodes.VIFS035_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS034"
                          position={[-244.5, -191.53, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_93" position={[-790, -297.5, -8]}>
                            <mesh
                              name="VIFS034_U104_ST9_0"
                              geometry={nodes.VIFS034_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS028"
                          position={[244.5, 242.47, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_96" position={[-790, -297.5, -8]}>
                            <mesh
                              name="VIFS028_U104_ST9_0"
                              geometry={nodes.VIFS028_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS029"
                          position={[468, 25.47, -1]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_99" position={[175, -283.5, -8]}>
                            <mesh
                              name="VIFS029_U104_ST9_0"
                              geometry={nodes.VIFS029_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group name="Group002" position={[0, -225, 0]}>
                          <group
                            name="Furniture_handle_006"
                            position={[0, -9.237, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group
                              name="Object_103"
                              position={[-18.752, 0, 2.841]}
                              rotation={[Math.PI, 0, -Math.PI]}
                            >
                              <mesh
                                name="Furniture_handle_006_Gold_0"
                                geometry={
                                  nodes.Furniture_handle_006_Gold_0.geometry
                                }
                                material={materials.Gold}
                              />
                            </group>
                          </group>
                          <group
                            name="Object002"
                            position={[0, 7.47, 25]}
                            rotation={[Math.PI / 2, 0, Math.PI / 2]}
                          >
                            <group
                              name="Object_106"
                              position={[-427.42, 490.907, -1]}
                            >
                              <mesh
                                name="Object002_Gold_0"
                                geometry={nodes.Object002_Gold_0.geometry}
                                material={materials.Gold}
                              />
                            </group>
                          </group>
                          <group
                            name="Box003"
                            position={[0, 15.97, 0]}
                            rotation={[Math.PI / 2, 0, Math.PI / 2]}
                          >
                            <group
                              name="Object_109"
                              position={[-610.67, 490.907, -9.5]}
                            >
                              <mesh
                                name="Box003_NCS_S_0502-Y_semiglos_0"
                                geometry={
                                  nodes["Box003_NCS_S_0502-Y_semiglos_0"]
                                    .geometry
                                }
                                material={materials["NCS_S_0502-Y_semiglos"]}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Group006" position={[0, -65.5, -195.6]}>
                        <group
                          name="VIFS054"
                          position={[-468, 25.47, -1]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group
                            name="Object_113"
                            position={[-175, -283.5, -8]}
                          >
                            <mesh
                              name="VIFS054_U104_ST9_0"
                              geometry={nodes.VIFS054_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS051"
                          position={[-21, 25.47, -1]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_116" position={[175, -283.5, -8]}>
                            <mesh
                              name="VIFS051_U104_ST9_0"
                              geometry={nodes.VIFS051_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS046"
                          position={[21, 25.47, -1]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group
                            name="Object_119"
                            position={[-175, -283.5, -8]}
                          >
                            <mesh
                              name="VIFS046_U104_ST9_0"
                              geometry={nodes.VIFS046_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS044"
                          position={[468, 25.47, -1]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_122" position={[175, -283.5, -8]}>
                            <mesh
                              name="VIFS044_U104_ST9_0"
                              geometry={nodes.VIFS044_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group name="VIFS052" position={[-244.5, 25.47, -86]}>
                          <group name="Object_125" position={[-790, -1294, -8]}>
                            <mesh
                              name="VIFS052_U104_ST9_0"
                              geometry={nodes.VIFS052_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group name="VIFS045" position={[244.5, 25.47, -86]}>
                          <group name="Object_128" position={[-790, -1294, -8]}>
                            <mesh
                              name="VIFS045_U104_ST9_0"
                              geometry={nodes.VIFS045_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS048"
                          position={[-68.6, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_131"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS048_Rubber_0"
                              geometry={nodes.VIFS048_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS047"
                          position={[-420.4, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_134"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS047_Rubber_0"
                              geometry={nodes.VIFS047_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS041"
                          position={[420.4, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_137"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS041_Rubber_0"
                              geometry={nodes.VIFS041_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS040"
                          position={[68.6, -169.136, -101.375]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_140"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS040_Rubber_0"
                              geometry={nodes.VIFS040_Rubber_0.geometry}
                              material={materials.Rubber}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS050"
                          position={[-244.5, 242.47, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_143"
                            position={[-790, -297.5, -8]}
                          >
                            <mesh
                              name="VIFS050_U104_ST9_0"
                              geometry={nodes.VIFS050_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS049"
                          position={[-244.5, -191.53, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_146"
                            position={[-790, -297.5, -8]}
                          >
                            <mesh
                              name="VIFS049_U104_ST9_0"
                              geometry={nodes.VIFS049_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS043"
                          position={[244.5, 242.47, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_149"
                            position={[-790, -297.5, -8]}
                          >
                            <mesh
                              name="VIFS043_U104_ST9_0"
                              geometry={nodes.VIFS043_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS042"
                          position={[244.5, -191.53, 13]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_152"
                            position={[-790, -297.5, -8]}
                          >
                            <mesh
                              name="VIFS042_U104_ST9_0"
                              geometry={nodes.VIFS042_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group name="Group001" position={[0, -225, 0]}>
                          <group
                            name="Furniture_handle_007"
                            position={[0, -9.237, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group
                              name="Object_156"
                              position={[-18.752, 0, 2.841]}
                              rotation={[Math.PI, 0, -Math.PI]}
                            >
                              <mesh
                                name="Furniture_handle_007_Gold_0"
                                geometry={
                                  nodes.Furniture_handle_007_Gold_0.geometry
                                }
                                material={materials.Gold}
                              />
                            </group>
                          </group>
                          <group
                            name="Object001"
                            position={[0, 7.47, 25]}
                            rotation={[Math.PI / 2, 0, Math.PI / 2]}
                          >
                            <group
                              name="Object_159"
                              position={[-427.42, 490.907, -1]}
                            >
                              <mesh
                                name="Object001_Gold_0"
                                geometry={nodes.Object001_Gold_0.geometry}
                                material={materials.Gold}
                              />
                            </group>
                          </group>
                          <group
                            name="Box002"
                            position={[0, 15.97, 0]}
                            rotation={[Math.PI / 2, 0, Math.PI / 2]}
                          >
                            <group
                              name="Object_162"
                              position={[-610.67, 490.907, -9.5]}
                            >
                              <mesh
                                name="Box002_NCS_S_0502-Y_semiglos_0"
                                geometry={
                                  nodes["Box002_NCS_S_0502-Y_semiglos_0"]
                                    .geometry
                                }
                                material={materials["NCS_S_0502-Y_semiglos"]}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Group007" position={[0, 15.97, 0]}>
                        <group
                          name="VIFS075"
                          position={[-460.997, -236.296, -439.6]}
                          rotation={[Math.PI / 2, 1.571, 0]}
                        >
                          <group name="Object_166" position={[0.021, -9, -20]}>
                            <mesh
                              name="VIFS075_Chrome_0"
                              geometry={nodes.VIFS075_Chrome_0.geometry}
                              material={materials.Chrome}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS074"
                          position={[-470.665, -236.296, -430.75]}
                          rotation={[Math.PI / 2, 1.571, 0]}
                        >
                          <group
                            name="Object_169"
                            position={[0.021, -17.85, -10.333]}
                          >
                            <mesh
                              name="VIFS074_Chrome_0"
                              geometry={nodes.VIFS074_Chrome_0.geometry}
                              material={materials.Chrome}
                            />
                            <mesh
                              name="VIFS074_Chrome_0_1"
                              geometry={nodes.VIFS074_Chrome_0_1.geometry}
                              material={materials.Chrome}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS073"
                          position={[-460.997, -236.296, -448.65]}
                          rotation={[Math.PI / 2, 1.571, 0]}
                        >
                          <group
                            name="Object_173"
                            position={[0.021, 0.05, -20]}
                          >
                            <mesh
                              name="VIFS073_Material_#6_0"
                              geometry={nodes["VIFS073_Material_#6_0"].geometry}
                              material={materials.Material_6}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS109"
                          position={[460.998, -236.253, -448.65]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group
                            name="Object_176"
                            position={[0.021, 0.05, -20]}
                          >
                            <mesh
                              name="VIFS109_Material_#6_0"
                              geometry={nodes["VIFS109_Material_#6_0"].geometry}
                              material={materials.Material_6}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS110"
                          position={[470.665, -236.253, -430.75]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group
                            name="Object_179"
                            position={[0.021, -17.85, -10.333]}
                          >
                            <mesh
                              name="VIFS110_Chrome_0"
                              geometry={nodes.VIFS110_Chrome_0.geometry}
                              material={materials.Chrome}
                            />
                            <mesh
                              name="VIFS110_Chrome_0_1"
                              geometry={nodes.VIFS110_Chrome_0_1.geometry}
                              material={materials.Chrome}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS111"
                          position={[460.998, -236.253, -439.6]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_183" position={[0.021, -9, -20]}>
                            <mesh
                              name="VIFS111_Chrome_0"
                              geometry={nodes.VIFS111_Chrome_0.geometry}
                              material={materials.Chrome}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS112"
                          position={[-460.997, 214.992, -448.65]}
                          rotation={[Math.PI / 2, 1.571, 0]}
                        >
                          <group
                            name="Object_186"
                            position={[0.021, 0.05, -20]}
                          >
                            <mesh
                              name="VIFS112_Material_#6_0"
                              geometry={nodes["VIFS112_Material_#6_0"].geometry}
                              material={materials.Material_6}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS113"
                          position={[-470.665, 214.992, -430.75]}
                          rotation={[Math.PI / 2, 1.571, 0]}
                        >
                          <group
                            name="Object_189"
                            position={[0.021, -17.85, -10.333]}
                          >
                            <mesh
                              name="VIFS113_Chrome_0"
                              geometry={nodes.VIFS113_Chrome_0.geometry}
                              material={materials.Chrome}
                            />
                            <mesh
                              name="VIFS113_Chrome_0_1"
                              geometry={nodes.VIFS113_Chrome_0_1.geometry}
                              material={materials.Chrome}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS114"
                          position={[-460.997, 214.992, -439.6]}
                          rotation={[Math.PI / 2, 1.571, 0]}
                        >
                          <group name="Object_193" position={[0.021, -9, -20]}>
                            <mesh
                              name="VIFS114_Chrome_0"
                              geometry={nodes.VIFS114_Chrome_0.geometry}
                              material={materials.Chrome}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS115"
                          position={[460.998, 215.035, -448.65]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group
                            name="Object_196"
                            position={[0.021, 0.05, -20]}
                          >
                            <mesh
                              name="VIFS115_Material_#6_0"
                              geometry={nodes["VIFS115_Material_#6_0"].geometry}
                              material={materials.Material_6}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS116"
                          position={[470.665, 215.035, -430.75]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group
                            name="Object_199"
                            position={[0.021, -17.85, -10.333]}
                          >
                            <mesh
                              name="VIFS116_Chrome_0"
                              geometry={nodes.VIFS116_Chrome_0.geometry}
                              material={materials.Chrome}
                            />
                            <mesh
                              name="VIFS116_Chrome_0_1"
                              geometry={nodes.VIFS116_Chrome_0_1.geometry}
                              material={materials.Chrome}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS117"
                          position={[460.998, 215.035, -439.6]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_203" position={[0.021, -9, -20]}>
                            <mesh
                              name="VIFS117_Chrome_0"
                              geometry={nodes.VIFS117_Chrome_0.geometry}
                              material={materials.Chrome}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS002"
                          position={[-490.5, 10.5, -8.1]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group
                            name="Object_206"
                            position={[-289.5, -440.5, -9.5]}
                          >
                            <mesh
                              name="VIFS002_NCS_S_0502-Y_semiglos_0"
                              geometry={
                                nodes["VIFS002_NCS_S_0502-Y_semiglos_0"]
                                  .geometry
                              }
                              material={materials["NCS_S_0502-Y_semiglos"]}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS006"
                          position={[490.5, 10.5, -8.1]}
                          rotation={[Math.PI / 2, 1.571, 0]}
                        >
                          <group
                            name="Object_209"
                            position={[289.5, -440.5, -9.5]}
                          >
                            <mesh
                              name="VIFS006_NCS_S_0502-Y_semiglos_0"
                              geometry={
                                nodes["VIFS006_NCS_S_0502-Y_semiglos_0"]
                                  .geometry
                              }
                              material={materials["NCS_S_0502-Y_semiglos"]}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS008"
                          position={[0, -288.5, -386.1]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_212"
                            position={[-500, -62.5, -9.5]}
                          >
                            <mesh
                              name="VIFS008_NCS_S_0502-Y_semiglos_0"
                              geometry={
                                nodes["VIFS008_NCS_S_0502-Y_semiglos_0"]
                                  .geometry
                              }
                              material={materials["NCS_S_0502-Y_semiglos"]}
                            />
                          </group>
                        </group>
                        <group name="VIFS005" position={[0, 10.5, -315.6]}>
                          <group
                            name="Object_215"
                            position={[-500, -310.5, -8]}
                          >
                            <mesh
                              name="VIFS005_U104_ST9_0"
                              geometry={nodes.VIFS005_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS009"
                          position={[0, 5.5, 62.4]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group
                            name="Object_218"
                            position={[-294.5, -511, -8]}
                          >
                            <mesh
                              name="VIFS009_U104_ST9_0"
                              geometry={nodes.VIFS009_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS004"
                          position={[0, -271, -386.1]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_221" position={[-500, -62.5, -8]}>
                            <mesh
                              name="VIFS004_U104_ST9_0"
                              geometry={nodes.VIFS004_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS003"
                          position={[0, 252, -386.1]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_224" position={[-500, -62.5, -8]}>
                            <mesh
                              name="VIFS003_U104_ST9_0"
                              geometry={nodes.VIFS003_U104_ST9_0.geometry}
                              material={materials.U104_ST9}
                            />
                          </group>
                        </group>
                        <group name="VIFS001" position={[0, 0, 441.9]}>
                          <group
                            name="Object_227"
                            position={[-500, -300, -9.5]}
                          >
                            <mesh
                              name="VIFS001_NCS_S_0502-Y_semiglos_0"
                              geometry={
                                nodes["VIFS001_NCS_S_0502-Y_semiglos_0"]
                                  .geometry
                              }
                              material={materials["NCS_S_0502-Y_semiglos"]}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS007"
                          position={[-1, 295, 63.4]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_230" position={[-499, -512, -5]}>
                            <mesh
                              name="VIFS007_NCS_S_0502-Y_semiglos_0"
                              geometry={
                                nodes["VIFS007_NCS_S_0502-Y_semiglos_0"]
                                  .geometry
                              }
                              material={materials["NCS_S_0502-Y_semiglos"]}
                            />
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      )}
    </>
  );
}

useGLTF.preload("/models/dresser3/scene.gltf");
