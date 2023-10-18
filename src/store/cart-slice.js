import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalQuantity: 0,
    items: [],
  },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existsItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existsItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existsItem.quantity++;
        existsItem.totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existsItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existsItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existsItem.quantity--;
        existsItem.totalPrice -= existsItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
