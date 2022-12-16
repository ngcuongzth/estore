import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice";
import productSlice from "./features/productSlice";
const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        products: productSlice,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store 