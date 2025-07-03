import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//creating the redux store
const appStore = configureStore({
    reducer:{
        cart: cartReducer,
    },
})

export default appStore;