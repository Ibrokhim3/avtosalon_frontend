import { createSlice } from "@reduxjs/toolkit";

export const { actions: userAction, reducer: userReducer } = createSlice({
  name: "users",
  initialState: {
    users: null,
    token: localStorage.getItem("token"),
    userRole: localStorage.getItem("userRole"),
  },
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUserRole: (state, { payload }) => {
      state.userRole = payload;
    },
  },
});
