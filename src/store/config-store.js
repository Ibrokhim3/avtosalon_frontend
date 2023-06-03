import { configureStore } from "@reduxjs/toolkit";
import { modelsReducer } from "./models";



export const store = configureStore({
  reducer: {
    models: modelsReducer,
  },
});
