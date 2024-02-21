import { createSlice } from "@reduxjs/toolkit";

const canvaSlice = createSlice({
  name: "canva",
  initialState: {
    lines: [],
  },
  reducers: {
    generate: (state, action) => {},
  },
});

export const { generate } = canvaSlice.actions;
export default canvaSlice.reducer;
