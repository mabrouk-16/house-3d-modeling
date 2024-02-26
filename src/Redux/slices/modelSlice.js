import { createSlice } from "@reduxjs/toolkit";
const modelSlice = createSlice({
  name: "model",
  initialState: {
    ModelName: "",
    objectsArr: [
      {
        name: "Bed1",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 0.5,
        // instance:<Bed1/>
      },
      {
        name: "Bed2",
        position: [0, 0, 0],
        rotate: 0,
        isAdded: false,
        factor: 10,
      },
    ],
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
          obj.isAdded = true;
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
