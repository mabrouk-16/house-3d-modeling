import React from "react";
import { useDispatch, useSelector } from "react-redux";
import bed1Img from "../../public/images/Screenshot 2024-02-26 114143.png";
import { addToScene } from "../Redux/slices/modelSlice";

function AddObjects() {
  const dispatch = useDispatch();
  const arrOfObj = useSelector((state) => state.modelReducer.objectsArr);
  console.log(arrOfObj);

  function addObjToScene(name) {
    // arrOfObj.map((obj) => {
    //   if (obj.name == name) {
        dispatch(addToScene(name));
    //   }
    // });
  }
  return (
    <>
      <div>AddObjects</div>
      <div className="container">
        {arrOfObj.map((obj) => {
          return (
            <div key={obj.name} onClick={() => addObjToScene(obj.name)}>
              {obj.name} <img src={bed1Img} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AddObjects;
