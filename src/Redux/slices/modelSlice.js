import { createSlice } from "@reduxjs/toolkit";
const modelSlice = createSlice({
  name: "model",
  initialState: {
    ModelName: "",
    intervId: "",
    isHighltighted: false,
    position: [0, 0, 0],
    rotate: 0,
  },
  reducers: {
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
        state.rotate -= 0.1;
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
