import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productsAPI } from "./../../api/apiConfig";
import axios from "axios"

const initialState = {
    isLoading: false,
    // đang sale
    onSaleOffs: [],
    //  bán chạy 
    bestSellers: [],
    // siêu giảm giá
    bigSaleOffs: [],
    allProducts: [],
    singleProduct: {},
    idSingleProduct: null,
    isSingleProductLoading: true,
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

export const getSingleProduct = createAsyncThunk("products/getSingleProduct",
    async (name, thunkAPI) => {
        try {
            const { idSingleProduct } = thunkAPI.getState().products;
            const resp = await axios.get(`${productsAPI}/${idSingleProduct}`)
            return resp.data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue("get single product failure", error);
        }
    }
)
const productsSlice = createSlice({
    name: "products",
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
            state.displayProducts = action.payload.sort((a, b) => {
                return a.salePrice - b.salePrice
            })
            state.onSaleOffs = onSaleOffs
            state.bigSaleOffs = bigSaleOffs
            state.bestSellers = bestSellers
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        })
        builder.addCase(getSingleProduct.pending, (state) => {
            state.isSingleProductLoading = true;
        })
        builder.addCase(getSingleProduct.fulfilled, (state, action) => {
            state.isSingleProductLoading = false;
            state.singleProduct = action.payload;
        })
        builder.addCase(getSingleProduct.rejected, (state) => {
            state.isSingleProductLoading = false;
        })
    },
    reducers: {
        updateIdSingleProduct: (state, action) => {
            state.idSingleProduct = action.payload
        }
    }
})
export const { updateIdSingleProduct } = productsSlice.actions;
export default productsSlice.reducer
