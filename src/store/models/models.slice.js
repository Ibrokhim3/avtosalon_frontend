import { createSlice } from "@reduxjs/toolkit";

export const { actions: modelsAction, reducer: modelsReducer } = createSlice({
  name: "models",
  initialState: {
    listCategory: null,
    listCars: null,
    loading: false,
    error: null,
    formType: "",
    pageType: "",
    tableType: "",
    clickedId: null,
  },
  reducers: {
    setListCategory: (state, { payload }) => {
      state.listCategory = payload;
      state.loading = false;
    },
    setListCars: (state, { payload }) => {
      state.listCars = payload;
      state.loading = false;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    setFormType: (state, { payload }) => {
      state.formType = payload;
    },
    setTableType: (state, { payload }) => {
      state.tableType = payload;
    },
    setClickedId: (state, { payload }) => {
      state.clickedId = payload;
    },

    setPageType: (state, { payload }) => {
      state.pageType = payload;
    },
  },
});
