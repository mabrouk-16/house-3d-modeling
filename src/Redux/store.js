import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./slices/modelSlice";
import canvaReducer from "./slices/canvaSlice";

export const Store = configureStore({
  reducer: {
    modelReducer,
    canvaReducer
  },
});