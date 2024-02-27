import { OrbitControls } from "@react-three/drei";
import { Bed1 } from "./modelsComp/Bed1";
import { Bed2 } from "./modelsComp/Bed2";
import { Bed3 } from "./modelsComp/Bed3";
let inst = <Bed1 />;

function Test() {
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <Bed1 />
      <Bed2 />
      {/* <Bed1/> */}
    </>
  );
}

export default Test;
