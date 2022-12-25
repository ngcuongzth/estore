import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./features/layoutSlice";
import productSlice from "./features/productSlice";
import cartSlice from "./features/cartSlice";
import filterSlice from "./features/filterSlice";

const store = configureStore({
    reducer: {
        layout: layoutSlice,
        products: productSlice,
        cart: cartSlice,
        filter: filterSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store 