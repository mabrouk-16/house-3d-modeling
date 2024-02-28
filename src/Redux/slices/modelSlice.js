import { createSlice } from "@reduxjs/toolkit";
import bed1Img from "/images/bed1.png";
import bed2Img from "/images/bed2.png";
import bed3Img from "/images/bed3.png";
import Chair1Img from "/images/chair1.png";
import Bed1 from "../../components/modelsComp/Bed1";
// import Bed1  from "../../components/modelsComp/Bed1";
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
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Door1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Dresser1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Dresser2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Dresser3",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Fridge1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Fridge2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Sofa1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Sofa2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Sofa3",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Sofa4",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Sofa5",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Stove1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Stove2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Table1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Table2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Table3",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
        count: 0,
      },
      {
        id: Math.random() * 1000,
        name: "Toilet1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        img: Chair1Img,
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
      const isDuplicate = state.objectsArr.some(
        (obj) => obj.name == action.payload.name
      );
      console.log(action.payload.name);
      if (!isDuplicate) state.objectsArr.push({ ...action.payload });
    },
    addToScene: (state, action) => {
      state.objectsArr.map((obj) => {
        if (obj.name == action.payload) {
          const newObj = {
            id: Math.random() * 1000,
            name: obj.name,
            position: [Math.random() * 10, 0, 0],
            rotate: 0,
            factor: obj.factor,
          };
          state.addedObjects.push({ ...newObj });
          obj.isAdded = true;
          obj.count++;
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
