import { createSlice } from "@reduxjs/toolkit";
import bed1Img from "/images/bed1.png";
import bed2Img from "/images/bed2.png";
import bed3Img from "/images/bed3.png";
import chair1Img from "/images/chair1.png";
import door1Img from "/images/door1.png";
import dresser1Img from "/images/dresser1.png";
import dresser2Img from "/images/dresser2.png";
import dresser3Img from "/images/dresser3.png";
import fridge1Img from "/images/fridge1.png";
import fridge2Img from "/images/fridge2.png";
import sofa1Img from "/images/sofa1.png";
import sofa2Img from "/images/sofa2.png";
import sofa3Img from "/images/sofa3.png";
import sofa4Img from "/images/sofa4.png";
import sofa5Img from "/images/sofa5.png";
import stove1Img from "/images/stove1.png";
import stove2Img from "/images/stove2.png";
import table1Img from "/images/table1.png";
import table2Img from "/images/table2.png";
import table3Img from "/images/table3.png";
import toilet1Img from "/images/toilet1.png";
const modelSlice = createSlice({
  name: "model",
  initialState: {
    ModelName: "",
    objectsArr: [
      {
        id: Math.random() * 1000,
        name: "Bed1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,

        factor: 0.5,
        img: bed1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Bed2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 10,
        img: bed2Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Bed3",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 1,
        img: bed3Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Chair1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Door1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: door1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Dresser1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: dresser1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Dresser2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: dresser2Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Dresser3",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: dresser3Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Fridge1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: fridge1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Fridge2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: fridge2Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Sofa1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: sofa1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Sofa2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: sofa2Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Sofa3",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: sofa3Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Sofa4",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: sofa4Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Sofa5",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: sofa5Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Stove1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: stove1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Stove2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: stove2Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Table1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: table1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Table2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: table2Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Table3",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: table3Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Toilet1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: toilet1Img,
        count: 0,
      },
    ],
    addedObjects: [],
    intervId: "",
    isHighltighted: false,
    // isAdded: false,
    position: [0, 0, 0],
    rotate: 0,
  },
  reducers: {
    insert: (state, action) => {
      // const isDuplicate = state.objectsArr.some(
      //   (obj) => obj.name == action.payload.name
      // );
      // console.log(action.payload.name);
      // if (!isDuplicate) state.objectsArr.push({ ...action.payload });
    },
    addToScene: (state, action) => {
      state.objectsArr.map((obj) => {
        if (obj.name == action.payload) {
          // const newObj = {
          //   id: Math.random() * 1000,
          //   name: obj.name,
          //   position: [Math.random() * 10, 0, 0],
          //   rotate: 0,
          //   factor: obj.factor,
          // };
          obj.isAdded = true;
          state.addedObjects.push({ ...obj });
          // obj.count++;
          // obj.inst =()=>{return <Bed1 />};
        }
      });
    },
    removeFromScene: (state, action) => {
      state.objectsArr.map((obj) => {
        if (obj.name == action.payload) {
          // const newObj = {
          //   id: Math.random() * 1000,
          //   name: obj.name,
          //   position: [Math.random() * 10, 0, 0],
          //   rotate: 0,
          //   factor: obj.factor,
          // };
          obj.isAdded = false;
          state.addedObjects.splice({ ...obj }, 1);
          console.log("from redux=>", state.ModelName, state.isAdded);
          // obj.count++;
          // obj.inst =()=>{return <Bed1 />};
        }
      });
    },
    highlight: (state, action) => {
      state.ModelName = action.payload;
      state.isHighltighted = true;
      console.log("from redux=>", state.ModelName, state.isHighltighted);
    },
    moveUp: (state, action) => {
      if (state.isHighltighted) {
        state.objectsArr.map((obj) => {
          if (obj.name == state.ModelName) {
            state.position = obj.position;
            state.position[2] -= obj.factor;
          }
        });
      }
    },
    moveDown: (state, action) => {
      if (state.isHighltighted) {
        state.objectsArr.map((obj) => {
          if (obj.name == state.ModelName) {
            state.position = obj.position;
            state.position[2] += obj.factor;
          }
        });
      }
    },
    moveLeft: (state, action) => {
      if (state.isHighltighted) {
        state.objectsArr.map((obj) => {
          if (obj.name == state.ModelName) {
            state.position = obj.position;
            state.position[0] -= obj.factor;
          }
        });
      }
    },
    moveRight: (state, action) => {
      if (state.isHighltighted) {
        state.objectsArr.map((obj) => {
          if (obj.name == state.ModelName) {
            state.position = obj.position;
            state.position[0] += obj.factor;
          }
        });
      }
    },
    rotateRight: (state) => {
      if (state.isHighltighted) {
        state.objectsArr.map((obj) => {
          if (obj.name == state.ModelName) {
            state.rotate = obj.rotate;
            obj.rotate += 0.1;
          }
        });
      }
    },
    rotateLeft: (state) => {
      if (state.isHighltighted) {
        state.objectsArr.map((obj) => {
          if (obj.name == state.ModelName) {
            state.rotate = obj.rotate;
            obj.rotate -= 0.1;
          }
        });
      }
    },
    setIntervalId: (state, action) => {
      state.intervId = action.payload;
    },
    clear: (state) => {
      clearInterval(state.intervId);
    },
  },
});

export const {
  insert,
  addToScene,
  removeFromScene,
  highlight,
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
  rotateRight,
  rotateLeft,
  setIntervalId,
  clear,
} = modelSlice.actions;
export default modelSlice.reducer;
