import { createSlice } from "@reduxjs/toolkit";
import { addItem, getBasket } from "./basketThunk";

const initialState = {
  basketData: [],
  isLoading: false,
  isError: "",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    getBasketSuccess(state, action) {
      state.basketData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBasket.fulfilled, (state, action) => {
        state.basketData = action.payload;
        state.isLoading = false;
        state.isError = "";
      })
      .addCase(getBasket.pending, (state) => {
        state.basketData = [];
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(getBasket.rejected, (state, action) => {
        state.basketData = [];
        state.isLoading = true;
        state.isError = action.payload;
      })
      .addCase(addItem.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = "";
      })
      .addCase(addItem.pending, (state) => {
        state.isLoading = true;
        state.isError = "";
      })
      .addCase(addItem.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});
