import { createSlice } from "@reduxjs/toolkit";

export const { actions: userAction, reducer: userReducer } = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem("token"),
    userRole: localStorage.getItem("userRole"),
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUserRole: (state, { payload }) => {
      state.userRole = payload;
    },
  },
});
