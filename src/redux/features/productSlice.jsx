import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsAPI } from "./../../api/apiConfig";
import axios from "axios"

const initialState = {
    isLoading: false,
    onSaleOffs: [],
    bestSellers: [],
    bigSaleOffs: [],
    allProducts: [],
}

export const getProducts = createAsyncThunk("products/getProducts", async (name, thunkAPI) => {
    try {
        const resp = await axios.get(productsAPI);
        return resp.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue("get products failure", error);
    }
})

const productsSlice = createSlice({
    name: "search",
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;

            const onSaleOffs = action.payload.filter((product) => {
                if (product.isPromotion) {
                    return true;
                }
                return false;
            }).slice(0, 15)
            const bigSaleOffs = action.payload.sort((a, b) => {
                return b.promotionPercent - a.promotionPercent
            }).slice(0, 15)
            const bestSellers = action.payload.sort((a, b) => {
                return b.rating.count - a.rating.count
            }).slice(0, 15)

            state.allProducts = action.payload
            state.onSaleOffs = onSaleOffs
            state.bigSaleOffs = bigSaleOffs
            state.bestSellers = bestSellers
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        })

    }
})
export default productsSlice.reducer
