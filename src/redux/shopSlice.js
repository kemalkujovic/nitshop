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
    increment: (state, payload) => {
      state.value = state.value?.map((el) => {
        return el.id === payload.payload ? { ...el, qty: el.qty + 1 } : el;
      });
    },
    decrement: (state, payload) => {
      state.value = state.value?.map((el) => {
        return el.id === payload.payload ? { ...el, qty: el.qty - 1 } : el;
      });
    },
  },
});

export const { addToCart, removeToCart, increment, decrement } =
  shopSlice.actions;

export default shopSlice.reducer;
