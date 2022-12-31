import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./features/layoutSlice";
import productSlice from "./features/productSlice";
import cartSlice from "./features/cartSlice";
import filterSlice from "./features/filterSlice";
import userSlice from "./features/userSlice";
const store = configureStore({
    reducer: {
        layout: layoutSlice,
        products: productSlice,
        cart: cartSlice,
        filter: filterSlice,
        user: userSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store 