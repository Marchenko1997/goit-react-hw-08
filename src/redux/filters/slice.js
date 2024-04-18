import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: ""
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      console.log("Current filter value:", state.name);
      console.log("New filter value:", action.payload);
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
