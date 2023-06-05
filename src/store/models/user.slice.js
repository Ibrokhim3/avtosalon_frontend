import { createSlice } from "@reduxjs/toolkit";

export const { actions: userAction, reducer: userReducer } = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token"),
    
  },
  reducers: {
    setLogin: (state, { payload }) => {
      state.list = payload;
      state.loading = false;
    },
  },
});
