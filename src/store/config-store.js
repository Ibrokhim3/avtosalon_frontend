import { configureStore } from "@reduxjs/toolkit";
import { modelsReducer, userReducer } from "./models";

export const store = configureStore({
  reducer: {
    models: modelsReducer,
    users: userReducer,
  },
});
