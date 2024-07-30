import { createSlice } from "@reduxjs/toolkit";

const canvaSlice = createSlice({
  name: "canva",
  initialState: {
    lines: [],
  },
  reducers: {
    setLines: (state, action) => {
      state.lines = [...action.payload];
    },
  },
});

export const { setLines } = canvaSlice.actions;
export default canvaSlice.reducer;
