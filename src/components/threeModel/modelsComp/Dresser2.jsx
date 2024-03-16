import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { highlight, insert } from "../../Redux/slices/modelSlice";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Dresser2(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/dresser2/scene.gltf"
  );
  const { actions } = useAnimations(animations, group);
  const dispatch = useDispatch();
  const array = useSelector((state) => state.modelReducer.objectsArr);

  let object = array.filter((obj) => {
    return obj.name == "Dresser2";
  });
  function clickHandler() {
    dispatch(highlight("Dresser2"));
  }
  function insertion() {
    // console.log("objects", array);
    // dispatch(
    //   insert({
    //     name: "Dresser2",
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
          scale={2}
        >
          <group name="Sketchfab_Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
              <group
                name="5eb5a5b5b2c24588bca081461ccedb90fbx"
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.001}
              >
                <group name="Object_2">
                  <group name="RootNode">
                    <group
                      name="Group014"
                      position={[650, 375, 756]}
                      rotation={[-Math.PI / 2, 0, 0]}
                    >
                      <group name="Group013" position={[14.5, 442.296, 21.5]}>
                        <group
                          name="VIFS050"
                          position={[145.9, -147.902, -74.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_7"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS050_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS050_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group name="VIFS054" position={[-4, 21.704, -59.5]}>
                          <group
                            name="Object_10"
                            position={[-720.5, -1269, -8]}
                          >
                            <mesh
                              name="VIFS054_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS054_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS053"
                          position={[193.5, 21.704, 0]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_13" position={[200, -237, -8]}>
                            <mesh
                              name="VIFS053_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS053_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS052"
                          position={[-4, 213.704, 14]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_16" position={[-720.5, -251, -8]}>
                            <mesh
                              name="VIFS052_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS052_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS051"
                          position={[-4, -170.296, 14]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_19" position={[-720.5, -251, -8]}>
                            <mesh
                              name="VIFS051_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS051_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS049"
                          position={[-153.9, -147.902, -74.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_22"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS049_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS049_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS055"
                          position={[-201.5, 21.704, 0]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_25" position={[-200, -237, -8]}>
                            <mesh
                              name="VIFS055_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS055_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group name="Group004" position={[0, -200, 0]}>
                          <group
                            name="Hafele_handles_wooden_and_metal_Part_013"
                            position={[0, -9.091, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group
                              name="Object_29"
                              position={[25, 1.629, 1.731]}
                              rotation={[-Math.PI / 2, 0, 0]}
                            >
                              <mesh
                                name="Hafele_handles_wooden_and_metal_Part_013_������������_0"
                                geometry={
                                  nodes[
                                    "Hafele_handles_wooden_and_metal_Part_013_������������_0"
                                  ].geometry
                                }
                                material={materials.material_2}
                              />
                            </group>
                          </group>
                          <group
                            name="Rectangle004"
                            position={[39, 12.204, 822.5]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group name="Object_32" position={[0, 0, -9.5]}>
                              <mesh
                                name="Rectangle004_NCS_S_0300_N_semiglos_0"
                                geometry={
                                  nodes.Rectangle004_NCS_S_0300_N_semiglos_0
                                    .geometry
                                }
                                material={materials.NCS_S_0300_N_semiglos}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Group012" position={[14.5, 442.296, -202.5]}>
                        <group
                          name="VIFS042"
                          position={[145.9, -147.902, -73.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_36"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS042_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS042_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS045"
                          position={[193.5, 21.704, 1]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_39" position={[200, -237, -8]}>
                            <mesh
                              name="VIFS045_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS045_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS043"
                          position={[-4, -170.296, 15]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_42" position={[-720.5, -251, -8]}>
                            <mesh
                              name="VIFS043_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS043_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS044"
                          position={[-4, 213.704, 15]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_45" position={[-720.5, -251, -8]}>
                            <mesh
                              name="VIFS044_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS044_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS041"
                          position={[-153.9, -147.901, -73.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_48"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS041_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS041_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS047"
                          position={[-201.5, 21.704, 1]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_51" position={[-200, -237, -8]}>
                            <mesh
                              name="VIFS047_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS047_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group name="VIFS046" position={[-4, 21.704, -58.5]}>
                          <group
                            name="Object_54"
                            position={[-720.5, -1269, -8]}
                          >
                            <mesh
                              name="VIFS046_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS046_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group name="Group006" position={[0, -200, 0]}>
                          <group
                            name="Hafele_handles_wooden_and_metal_Part_015"
                            position={[0, -9.091, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group
                              name="Object_58"
                              position={[25, 1.629, 1.731]}
                              rotation={[-Math.PI / 2, 0, 0]}
                            >
                              <mesh
                                name="Hafele_handles_wooden_and_metal_Part_015_������������_0"
                                geometry={
                                  nodes[
                                    "Hafele_handles_wooden_and_metal_Part_015_������������_0"
                                  ].geometry
                                }
                                material={materials.material_2}
                              />
                            </group>
                          </group>
                          <group
                            name="Rectangle006"
                            position={[39, 12.204, 822.5]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group name="Object_61" position={[0, 0, -9.5]}>
                              <mesh
                                name="Rectangle006_NCS_S_0300_N_semiglos_0"
                                geometry={
                                  nodes.Rectangle006_NCS_S_0300_N_semiglos_0
                                    .geometry
                                }
                                material={materials.NCS_S_0300_N_semiglos}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="Group011"
                        position={[-428.5, 442.296, -202.5]}
                      >
                        <group
                          name="VIFS033"
                          position={[-145.9, -147.901, -73.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_65"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS033_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS033_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS034"
                          position={[153.9, -147.902, -73.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_68"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS034_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS034_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS035"
                          position={[4, -170.296, 15]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_71" position={[-720.5, -251, -8]}>
                            <mesh
                              name="VIFS035_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS035_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS039"
                          position={[-193.5, 21.704, 1]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_74" position={[-200, -237, -8]}>
                            <mesh
                              name="VIFS039_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS039_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS036"
                          position={[4, 213.704, 15]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group name="Object_77" position={[-720.5, -251, -8]}>
                            <mesh
                              name="VIFS036_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS036_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS037"
                          position={[201.5, 21.704, 1]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_80" position={[200, -237, -8]}>
                            <mesh
                              name="VIFS037_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS037_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group name="VIFS038" position={[4, 21.704, -58.5]}>
                          <group
                            name="Object_83"
                            position={[-720.5, -1269, -8]}
                          >
                            <mesh
                              name="VIFS038_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS038_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group name="Group005" position={[0, -200, 0]}>
                          <group
                            name="Hafele_handles_wooden_and_metal_Part_016"
                            position={[0, -9.091, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group
                              name="Object_87"
                              position={[25, 1.629, 1.731]}
                              rotation={[-Math.PI / 2, 0, 0]}
                            >
                              <mesh
                                name="Hafele_handles_wooden_and_metal_Part_016_������������_0"
                                geometry={
                                  nodes[
                                    "Hafele_handles_wooden_and_metal_Part_016_������������_0"
                                  ].geometry
                                }
                                material={materials.material_2}
                              />
                            </group>
                          </group>
                          <group
                            name="Rectangle005"
                            position={[39, 12.204, 822.5]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group name="Object_90" position={[0, 0, -9.5]}>
                              <mesh
                                name="Rectangle005_NCS_S_0300_N_semiglos_0"
                                geometry={
                                  nodes.Rectangle005_NCS_S_0300_N_semiglos_0
                                    .geometry
                                }
                                material={materials.NCS_S_0300_N_semiglos}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Group010" position={[-428.5, 442.296, 21.5]}>
                        <group
                          name="VIFS026"
                          position={[153.9, -147.902, -74.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_94"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS026_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS026_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS025"
                          position={[-145.9, -147.902, -74.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_97"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS025_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS025_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group name="VIFS030" position={[4, 21.704, -59.5]}>
                          <group
                            name="Object_100"
                            position={[-720.5, -1269, -8]}
                          >
                            <mesh
                              name="VIFS030_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS030_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS028"
                          position={[4, 213.704, 14]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_103"
                            position={[-720.5, -251, -8]}
                          >
                            <mesh
                              name="VIFS028_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS028_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS027"
                          position={[4, -170.296, 14]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_106"
                            position={[-720.5, -251, -8]}
                          >
                            <mesh
                              name="VIFS027_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS027_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS029"
                          position={[201.5, 21.704, 0]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_109" position={[200, -237, -8]}>
                            <mesh
                              name="VIFS029_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS029_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS031"
                          position={[-193.5, 21.704, 0]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_112" position={[-200, -237, -8]}>
                            <mesh
                              name="VIFS031_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS031_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group name="Group003" position={[0, -200, 0]}>
                          <group
                            name="Hafele_handles_wooden_and_metal_Part_014"
                            position={[0, -9.091, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group
                              name="Object_116"
                              position={[25, 1.629, 1.731]}
                              rotation={[-Math.PI / 2, 0, 0]}
                            >
                              <mesh
                                name="Hafele_handles_wooden_and_metal_Part_014_������������_0"
                                geometry={
                                  nodes[
                                    "Hafele_handles_wooden_and_metal_Part_014_������������_0"
                                  ].geometry
                                }
                                material={materials.material_2}
                              />
                            </group>
                          </group>
                          <group
                            name="Rectangle003"
                            position={[39, 12.204, 822.5]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group name="Object_119" position={[0, 0, -9.5]}>
                              <mesh
                                name="Rectangle003_NCS_S_0300_N_semiglos_0"
                                geometry={
                                  nodes.Rectangle003_NCS_S_0300_N_semiglos_0
                                    .geometry
                                }
                                material={materials.NCS_S_0300_N_semiglos}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Group009" position={[14.5, 442.296, 244.5]}>
                        <group
                          name="VIFS059"
                          position={[-4, -170.296, 14]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_123"
                            position={[-720.5, -251, -8]}
                          >
                            <mesh
                              name="VIFS059_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS059_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS060"
                          position={[-4, 213.704, 14]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_126"
                            position={[-720.5, -251, -8]}
                          >
                            <mesh
                              name="VIFS060_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS060_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group name="VIFS062" position={[-4, 21.704, -59.5]}>
                          <group
                            name="Object_129"
                            position={[-720.5, -1269, -8]}
                          >
                            <mesh
                              name="VIFS062_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS062_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS057"
                          position={[-153.9, -147.901, -74.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_132"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS057_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS057_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS063"
                          position={[-201.5, 21.704, 0]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_135" position={[-200, -237, -8]}>
                            <mesh
                              name="VIFS063_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS063_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS061"
                          position={[193.5, 21.704, 0]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_138" position={[200, -237, -8]}>
                            <mesh
                              name="VIFS061_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS061_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS058"
                          position={[145.9, -147.902, -74.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_141"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS058_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS058_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group name="Group002" position={[0, -200, 0]}>
                          <group
                            name="Hafele_handles_wooden_and_metal_Part_012"
                            position={[0, -9.091, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group
                              name="Object_145"
                              position={[25, 1.629, 1.731]}
                              rotation={[-Math.PI / 2, 0, 0]}
                            >
                              <mesh
                                name="Hafele_handles_wooden_and_metal_Part_012_������������_0"
                                geometry={
                                  nodes[
                                    "Hafele_handles_wooden_and_metal_Part_012_������������_0"
                                  ].geometry
                                }
                                material={materials.material_2}
                              />
                            </group>
                          </group>
                          <group
                            name="Rectangle002"
                            position={[39, 12.204, 822.5]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group name="Object_148" position={[0, 0, -9.5]}>
                              <mesh
                                name="Rectangle002_NCS_S_0300_N_semiglos_0"
                                geometry={
                                  nodes.Rectangle002_NCS_S_0300_N_semiglos_0
                                    .geometry
                                }
                                material={materials.NCS_S_0300_N_semiglos}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group
                        name="Group008"
                        position={[-428.5, 442.296, 244.5]}
                      >
                        <group
                          name="VIFS017"
                          position={[153.9, -147.902, -74.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_152"
                            position={[-482.4, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS017_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS017_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS022"
                          position={[-193.5, 21.704, 0]}
                          rotation={[Math.PI / 2, -1.571, 0]}
                        >
                          <group name="Object_155" position={[-200, -237, -8]}>
                            <mesh
                              name="VIFS022_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS022_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS018"
                          position={[4, -170.296, 14]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_158"
                            position={[-720.5, -251, -8]}
                          >
                            <mesh
                              name="VIFS018_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS018_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS019"
                          position={[4, 213.704, 14]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_161"
                            position={[-720.5, -251, -8]}
                          >
                            <mesh
                              name="VIFS019_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS019_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS016"
                          position={[-145.9, -147.901, -74.875]}
                          rotation={[Math.PI / 2, 0, 0]}
                        >
                          <group
                            name="Object_164"
                            position={[-39.6, -7.375, 30.394]}
                          >
                            <mesh
                              name="VIFS016_��������������_������_������������_0"
                              geometry={
                                nodes[
                                  "VIFS016_��������������_������_������������_0"
                                ].geometry
                              }
                              material={materials.material}
                            />
                          </group>
                        </group>
                        <group name="VIFS021" position={[4, 21.704, -59.5]}>
                          <group
                            name="Object_167"
                            position={[-720.5, -1269, -8]}
                          >
                            <mesh
                              name="VIFS021_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS021_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS020"
                          position={[201.5, 21.704, 0]}
                          rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        >
                          <group name="Object_170" position={[200, -237, -8]}>
                            <mesh
                              name="VIFS020_W1100_ST9_����������_��������������������__0"
                              geometry={
                                nodes[
                                  "VIFS020_W1100_ST9_����������_��������������������__0"
                                ].geometry
                              }
                              material={materials.W1100_ST9}
                            />
                          </group>
                        </group>
                        <group name="Group001" position={[0, -200, 0]}>
                          <group
                            name="Hafele_handles_wooden_and_metal_Part_11"
                            position={[0, -9.091, 0]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group
                              name="Object_174"
                              position={[25, 1.629, 1.731]}
                              rotation={[-Math.PI / 2, 0, 0]}
                            >
                              <mesh
                                name="Hafele_handles_wooden_and_metal_Part_11_������������_0"
                                geometry={
                                  nodes[
                                    "Hafele_handles_wooden_and_metal_Part_11_������������_0"
                                  ].geometry
                                }
                                material={materials.material_2}
                              />
                            </group>
                          </group>
                          <group
                            name="Rectangle001"
                            position={[39, 12.204, 822.5]}
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group name="Object_177" position={[0, 0, -9.5]}>
                              <mesh
                                name="Rectangle001_NCS_S_0300_N_semiglos_0"
                                geometry={
                                  nodes.Rectangle001_NCS_S_0300_N_semiglos_0
                                    .geometry
                                }
                                material={materials.NCS_S_0300_N_semiglos}
                              />
                            </group>
                          </group>
                        </group>
                      </group>
                      <group name="Group007" position={[612.237, -257, 363.5]}>
                        <group
                          name="Object001"
                          position={[-176.237, 0, -7]}
                          rotation={[0, 0, -Math.PI / 2]}
                        >
                          <group
                            name="Object_181"
                            position={[-501, -184, 134.559]}
                          >
                            <mesh
                              name="Object001_��������������_0"
                              geometry={
                                nodes["Object001_��������������_0"].geometry
                              }
                              material={materials.material_4}
                            />
                          </group>
                        </group>
                        <group
                          name="VIFS085"
                          position={[-176.237, 0, 2]}
                          rotation={[0, 0, -Math.PI / 2]}
                        >
                          <group
                            name="Object_184"
                            position={[-501, -184, -9.5]}
                          >
                            <mesh
                              name="VIFS085_NCS_S_2010-Y80R_semiglos_0"
                              geometry={
                                nodes["VIFS085_NCS_S_2010-Y80R_semiglos_0"]
                                  .geometry
                              }
                              material={materials["NCS_S_2010-Y80R_semiglos"]}
                            />
                          </group>
                        </group>
                      </group>
                      <group
                        name="Rectangle009"
                        position={[262.5, -727.5, 281]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_187" position={[39, 786, -9.5]}>
                          <mesh
                            name="Rectangle009_NCS_S_0300_N_semiglos_0"
                            geometry={
                              nodes.Rectangle009_NCS_S_0300_N_semiglos_0
                                .geometry
                            }
                            material={materials.NCS_S_0300_N_semiglos}
                          />
                        </group>
                      </group>
                      <group
                        name="Rectangle008"
                        position={[262.5, -227.5, 281]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_190" position={[39, 786, -9.5]}>
                          <mesh
                            name="Rectangle008_NCS_S_0300_N_semiglos_0"
                            geometry={
                              nodes.Rectangle008_NCS_S_0300_N_semiglos_0
                                .geometry
                            }
                            material={materials.NCS_S_0300_N_semiglos}
                          />
                        </group>
                      </group>
                      <group
                        name="Rectangle007"
                        position={[262.5, 22.5, 281]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_193" position={[39, 786, -9.5]}>
                          <mesh
                            name="Rectangle007_NCS_S_0300_N_semiglos_0"
                            geometry={
                              nodes.Rectangle007_NCS_S_0300_N_semiglos_0
                                .geometry
                            }
                            material={materials.NCS_S_0300_N_semiglos}
                          />
                        </group>
                      </group>
                      <group name="VIFS087" position={[297, -715, -84.5]}>
                        <group name="Object_196" position={[0, 0, -290.5]}>
                          <mesh
                            name="VIFS087_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS087_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group name="VIFS088" position={[607, -715, -84.5]}>
                        <group name="Object_199" position={[0, 0, -290.5]}>
                          <mesh
                            name="VIFS088_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS088_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS075"
                        position={[446, -14, 279]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                      >
                        <group name="Object_202" position={[-204, -654, -8]}>
                          <mesh
                            name="VIFS075_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS075_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS072"
                        position={[461, -748, 281]}
                        rotation={[Math.PI / 2, 0, 0]}
                      >
                        <group name="Object_205" position={[189, -656, -8]}>
                          <mesh
                            name="VIFS072_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS072_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS070"
                        position={[456, -514, 289]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                      >
                        <group name="Object_208" position={[-194, -664, -8]}>
                          <mesh
                            name="VIFS070_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS070_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS069"
                        position={[456, 2, 289]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                      >
                        <group name="Object_211" position={[-194, -664, -8]}>
                          <mesh
                            name="VIFS069_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS069_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS067"
                        position={[461, 236, 281]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                      >
                        <group name="Object_214" position={[-189, -656, -8]}>
                          <mesh
                            name="VIFS067_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS067_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS015"
                        position={[-207, 505, 28.5]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_217" position={[-251, -403.5, -8]}>
                          <mesh
                            name="VIFS015_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS015_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS009"
                        position={[228, 505, 28.5]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_220" position={[-251, -403.5, -8]}>
                          <mesh
                            name="VIFS009_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS009_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS008"
                        position={[244, 500, -9.5]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_223" position={[-256, -365.5, -8]}>
                          <mesh
                            name="VIFS008_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS008_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS004"
                        position={[642, 500, -9.5]}
                        rotation={[Math.PI / 2, 1.571, 0]}
                      >
                        <group name="Object_226" position={[256, -365.5, -8]}>
                          <mesh
                            name="VIFS004_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS004_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS002"
                        position={[-642, 510, -9.5]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_229" position={[-246, -365.5, -8]}>
                          <mesh
                            name="VIFS002_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS002_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS076"
                        position={[446, -498, 279]}
                        rotation={[Math.PI / 2, 0, 0]}
                      >
                        <group name="Object_232" position={[204, -654, -8]}>
                          <mesh
                            name="VIFS076_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS076_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group name="VIFS086" position={[443, 495, -53.5]}>
                        <group name="Object_235" position={[-1093, -251, -9.5]}>
                          <mesh
                            name="VIFS086_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS086_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS068"
                        position={[461, -256, 214]}
                        rotation={[0, 0, -Math.PI / 2]}
                      >
                        <group name="Object_238" position={[-500, -209, -8]}>
                          <mesh
                            name="VIFS068_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS068_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS066"
                        position={[451, -256, 365.5]}
                        rotation={[0, 0, -Math.PI / 2]}
                      >
                        <group name="Object_241" position={[-500, -199, -9.5]}>
                          <mesh
                            name="VIFS066_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS066_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group name="VIFS014" position={[443, 510, -323]}>
                        <group name="Object_244" position={[695, -266, -8]}>
                          <mesh
                            name="VIFS014_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS014_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group name="VIFS012" position={[443, 495, 214]}>
                        <group name="Object_247" position={[-1093, -251, -8]}>
                          <mesh
                            name="VIFS012_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS012_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group name="VIFS003" position={[-199, 510, -307]}>
                        <group name="Object_250" position={[-451, -266, -8]}>
                          <mesh
                            name="VIFS003_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS003_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group name="VIFS001" position={[0, 500, 365.5]}>
                        <group name="Object_253" position={[-650, -256, -9.5]}>
                          <mesh
                            name="VIFS001_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS001_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS078"
                        position={[628, -256, 289]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_256" position={[-234, -67, -8]}>
                          <mesh
                            name="VIFS078_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS078_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS071"
                        position={[645, -256, 289]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_259" position={[-500, -664, -5]}>
                          <mesh
                            name="VIFS071_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS071_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS065"
                        position={[443, 272, -353]}
                        rotation={[Math.PI / 2, 0, 0]}
                      >
                        <group name="Object_262" position={[-207, -22, -8]}>
                          <mesh
                            name="VIFS065_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS065_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS064"
                        position={[443, 708, -353]}
                        rotation={[Math.PI / 2, 0, 0]}
                      >
                        <group name="Object_265" position={[-207, -22, -8]}>
                          <mesh
                            name="VIFS064_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS064_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS013"
                        position={[443, 252, 289]}
                        rotation={[Math.PI / 2, 0, 0]}
                      >
                        <group name="Object_268" position={[-1093, -664, -8]}>
                          <mesh
                            name="VIFS013_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS013_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS011"
                        position={[443, 254.5, -345]}
                        rotation={[Math.PI / 2, 0, 0]}
                      >
                        <group name="Object_271" position={[-229, -30, -9.5]}>
                          <mesh
                            name="VIFS011_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS011_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS010"
                        position={[-207, 254.5, -345]}
                        rotation={[Math.PI / 2, 0, 0]}
                      >
                        <group name="Object_274" position={[-459, -30, -9.5]}>
                          <mesh
                            name="VIFS010_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS010_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS007"
                        position={[-199, 272, -345]}
                        rotation={[Math.PI / 2, 0, 0]}
                      >
                        <group name="Object_277" position={[-451, -30, -8]}>
                          <mesh
                            name="VIFS007_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS007_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS006"
                        position={[-199, 708, -345]}
                        rotation={[Math.PI / 2, 0, 0]}
                      >
                        <group name="Object_280" position={[-451, -30, -8]}>
                          <mesh
                            name="VIFS006_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS006_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS005"
                        position={[0, 751, 20.5]}
                        rotation={[Math.PI / 2, 0, 0]}
                      >
                        <group name="Object_283" position={[-650, -395.5, -5]}>
                          <mesh
                            name="VIFS005_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS005_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS080"
                        position={[446, -337, 279]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                      >
                        <group name="Object_286" position={[-224, -654, -8]}>
                          <mesh
                            name="VIFS080_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS080_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS079"
                        position={[446, -175, 279]}
                        rotation={[-Math.PI / 2, 0, Math.PI]}
                      >
                        <group name="Object_289" position={[-224, -654, -8]}>
                          <mesh
                            name="VIFS079_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS079_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS081"
                        position={[385, -94.5, 279]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_292" position={[-338.5, -654, -8]}>
                          <mesh
                            name="VIFS081_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS081_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS082"
                        position={[506, -94.5, 279]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_295" position={[-338.5, -654, -8]}>
                          <mesh
                            name="VIFS082_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS082_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS083"
                        position={[506, -417.5, 279]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_298" position={[-661.5, -654, -8]}>
                          <mesh
                            name="VIFS083_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS083_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
                          />
                        </group>
                      </group>
                      <group
                        name="VIFS084"
                        position={[385, -417.5, 279]}
                        rotation={[Math.PI / 2, -1.571, 0]}
                      >
                        <group name="Object_301" position={[-661.5, -654, -8]}>
                          <mesh
                            name="VIFS084_NCS_S_2010-Y80R_semiglos_0"
                            geometry={
                              nodes["VIFS084_NCS_S_2010-Y80R_semiglos_0"]
                                .geometry
                            }
                            material={materials["NCS_S_2010-Y80R_semiglos"]}
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
      )}
    </>
  );
}

useGLTF.preload("/models/dresser2/scene.gltf");
