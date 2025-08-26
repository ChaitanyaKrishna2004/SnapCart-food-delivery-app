import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./cartSlice";
const appStore = configureStore({
  reducer: {
    cart: carReducer,
  },
});

export default appStore;
