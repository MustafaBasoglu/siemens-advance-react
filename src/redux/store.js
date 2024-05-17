import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
    product: productSlice.reducer
  },
});

export default store;
