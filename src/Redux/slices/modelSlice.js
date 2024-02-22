import { createSlice } from "@reduxjs/toolkit";
const modelSlice = createSlice({
  name: "model",
  initialState: {
    ModelName: "",
    objectsArr: [
      { name: "vav" },
      { name: "Bed1", position: [0, 0, 0], rotate: 0 },
      { name: "Bed2", position: [0, 0, 0], rotate: 0 },
    ],
    intervId: "",
    isHighltighted: false,
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

      // state.objectsArr.forEach((ele) => {
      //   console.log(ele.name)
      //   if (ele.name !== action.payload.name)
      //     state.objectsArr.push({ ...action.payload });
      // });
      // if (state.objectsArr.indexOf( ) !== -1) {
      //   state.objectsArr.push({ ...action.payload });
      //   console.log(state.objectsArr[0].position);
      // }
    },
    highlight: (state, action) => {
      state.ModelName = action.payload;
      state.isHighltighted = true;
      console.log("from redux=>", state.ModelName, state.isHighltighted);
    },
    moveUp: (state, action) => {
      if (state.isHighltighted) {
        state.position[2] -= 0.5;
      }
    },
    moveDown: (state, action) => {
      if (state.isHighltighted) {
        state.position[2] += 0.5;
      }
    },
    moveLeft: (state, action) => {
      if (state.isHighltighted) {
        state.position[0] -= 0.5;
      }
    },
    moveRight: (state, action) => {
      if (state.isHighltighted) {
        state.position[0] += 0.5;
      }
    },
    rotateRight: (state) => {
      if (state.isHighltighted) {
        state.rotate += 0.1;
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
        // state.rotate -= 0.1;
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
