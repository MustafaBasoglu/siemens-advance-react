import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totals: 0,
  },
  reducers: {
    addToCartHandler: (state, action) => {
      const cartItem = action.payload;
      const findProduct = state.cartItems.find(
        (item) => item.id === cartItem.id
      );
      if (findProduct) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.id === findProduct.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        state.cartItems = [action.payload, ...state.cartItems];
      }
    },
    removeFromCartHandler: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCartHandler, removeFromCartHandler } = cartSlice.actions;
export default cartSlice;
