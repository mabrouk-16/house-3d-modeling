import { OrbitControls } from "@react-three/drei";
import { Bed1 } from "./Bed1";
import { Bed2 } from "./Bed2";
import { Bed3 } from "./Bed3";
let inst = <Bed1 />;

function Test() {
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.5} />
      <Bed1  />
      <Bed2 />
      {/* <Bed1/> */}
    </>
  );
}

export default Test;
