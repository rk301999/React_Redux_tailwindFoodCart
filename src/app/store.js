import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice";
import connectionSlice from "../features/connectionSlice";

const store = configureStore({
    reducer:{
        cart : cartSlice,
        connect : connectionSlice
    }
})

export default store