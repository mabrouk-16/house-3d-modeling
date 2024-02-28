import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToScene } from "../Redux/slices/modelSlice";
import classes from "./AddObjects.module.css";

function AddObjects() {
  const dispatch = useDispatch();
  const arrOfObj = useSelector((state) => state.modelReducer.objectsArr);
  console.log(arrOfObj);

  function addObjToScene(name) {
    dispatch(addToScene(name));
  }
  return (
    <div className={classes.addSection}>
      <h1>Add Objects</h1>
      <div className={classes.container}>
        {arrOfObj.map((obj, index) => {
          return (
            <div
              className={classes.card}
              key={obj.name}
              onClick={() => addObjToScene(obj.name)}
            >
              {/* {obj.name} */}
               <img src={obj.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddObjects;
