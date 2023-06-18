import { createSlice } from "@reduxjs/toolkit";
import { getMeals } from "./mealsThunk";

const initialState = {
  meals: [],
  isLoading: false,
  isError: "",
};

export const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {
    getMeals(state, action) {
      state.meals = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMeals.fulfilled, (state, action) => {
        state.meals = action.payload;
        state.isLoading = false;
        state.isError = "";
      })
      .addCase(getMeals.pending, (state) => {
        state.meals = [];
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getMeals.rejected, (state, action) => {
        state.meals = [];
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
