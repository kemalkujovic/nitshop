import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, payload) => {
      state.value.push(payload);
    },
    removeToCart: (state, payload) => {},
  },
});

export const { addToCart, removeToCart } = shopSlice.actions;

export default shopSlice.reducer;
