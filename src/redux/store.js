import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
    product: productSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
