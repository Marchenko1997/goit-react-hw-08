import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  phone: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeNameFilter(state, action) { 
      state.name = action.payload;
    },
    changePhoneFilter(state, action) { 
      state.phone = action.payload;
    },
  },
});

export const { changeNameFilter, changePhoneFilter } = filtersSlice.actions; 

export default filtersSlice.reducer;
