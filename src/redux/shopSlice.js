import { createSlice } from "@reduxjs/toolkit";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.value.push(payload);
      console.log(state.value);
    },

    removeToCart: (state, payload) => {
      console.log(payload.payload);
      state.value = state.value?.map((el) => {
        return el.filter((el) => el.id !== payload.payload);
      });
    },
  },
});

export const { addToCart, removeToCart } = shopSlice.actions;

export default shopSlice.reducer;
