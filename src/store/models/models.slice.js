import { createSlice } from "@reduxjs/toolkit";

export const { actions: modelsAction, reducer: modelsReducer } = createSlice({
  name: "models",
  initialState: {
    list: null,
    loading: false,
    error: null,
    formType: "",
    tableType: "",
    searchValue: "",
    filterValue: null,
    dateValue: "",
    checkboxDirValue: "",
  },
  reducers: {
    setList: (state, { payload }) => {
      state.list = payload;
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
    setSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
    setDateValue: (state, { payload }) => {
      state.dateValue = payload;
    },
    setDirCheckboxValue: (state, { payload }) => {
      state.checkboxDirValue = payload;
    },
    setFilterValue: (state, { payload }) => {
      state.filterValue = payload;
    },
  },
});
