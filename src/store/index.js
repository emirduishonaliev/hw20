import { mealsSlice } from "./meals/mealsSlice";
import { basketSlice } from "./basket/basketSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [mealsSlice.name]: mealsSlice.reducer,
    [basketSlice.name]: basketSlice.reducer,
  },
});
