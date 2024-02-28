// import { OrbitControls } from "@react-three/drei";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import  Bed1  from "./modelsComp/Bed1";
import { Bed2 } from "./modelsComp/Bed2";
import { Bed3 } from "./modelsComp/Bed3";
import { Chair1 } from "./modelsComp/Chair1";
import { Door1 } from "./modelsComp/Door1";
import { Dresser1 } from "./modelsComp/Dresser1";
import { Dresser2 } from "./modelsComp/Dresser2";
import { Dresser3 } from "./modelsComp/Dresser3";
import { Fridge2 } from "./modelsComp/Fridge2";
import { Fridge1 } from "./modelsComp/Fridge1";
import { Sofa1 } from "./modelsComp/Sofa1";
import { Sofa2 } from "./modelsComp/Sofa2";
import { Sofa3 } from "./modelsComp/Sofa3";
import { Sofa4 } from "./modelsComp/Sofa4";
import { Sofa5 } from "./modelsComp/Sofa5";
import { Stove1 } from "./modelsComp/Stove1";
import { Stove2 } from "./modelsComp/Stove2";
import { Table1 } from "./modelsComp/Table1";
import { Table2 } from "./modelsComp/Table2";
import { Table3 } from "./modelsComp/Table3";
import { Toilet1 } from "./modelsComp/Toilet1";

function ModelGroup() {
  const [list, setList] = useState([]);
  const newList = [...list];
  const arrOfObj = useSelector((state) => state.modelReducer.objectsArr);
  const addedObjects = useSelector((state) => state.modelReducer.addedObjects);

  console.log(addedObjects);
  function showAll() {}
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      {/* {addedObjects.map((obj) => {
        switch (obj.name) {
          case "Bed1":
            return (
              <group Key={obj.id}>
                <Bed1 />
              </group>
            );
            break;
          case "Bed2":
            return (
              <group Key={obj.id}>
                <Bed2 />
              </group>
            );

            break;

          default:
            break;
        }
      })}  */}
      <Bed1 />
      <Bed2 />
      <Bed3 />
      {/* ------------------------------------- */}
      <Chair1 />
      <Door1/>
      <Dresser1 />
      <Dresser2 />
      <Dresser3/>
      {/*  */}
      <Fridge1 />
      <Fridge2 />
      <Sofa1/>
      <Sofa2/>
      <Sofa3/>
      <Sofa4/>
      <Sofa5/>
      <Stove1/>
      <Stove2/>
      <Table1/>
      <Table2/>
      <Table3/>
      <Toilet1/>
    </>
  );
}

export default ModelGroup;
