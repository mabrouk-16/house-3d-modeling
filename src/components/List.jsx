import React from "react";
import { useSelector } from "react-redux";
import bed1Img from "../../public/images/Screenshot 2024-02-26 114143.png";
function List() {
  const arrOfObj = useSelector((state) => state.modelReducer.objectsArr);
  console.log(arrOfObj);
  return (
    <>
      <img src={bed1Img} alt="" />
      <select id="objects" name="objects">
        <option value="none">...</option>
        {arrOfObj.map((obj) => {
          return (
            <option value={obj.name}>
              {obj.name} <img src={bed1Img} alt="" />
            </option>
          );
        })}
        {/* <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option> */}
      </select>
    </>
  );
}

export default List;
