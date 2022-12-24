import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./features/layoutSlice";
import productSlice from "./features/productSlice";


const store = configureStore({
    reducer: {
        layout: layoutSlice,
        products: productSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store 