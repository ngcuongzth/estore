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
    categories: [],
    filters: {
        category: {
            value: null,
            label: null
        },
        color: {
            value: null,
            label: null
        },
        size: {
            value: null,
            label: null
        }
    },


    displayProducts: [],
    pagination: {
        page: 1,
        products: [],
    },
    sort: 'low-to-high'
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
    },
    reducers: {
        updateBrand: (state, action) => {
            state.filters.category = action.payload;
            state.displayProducts = state.displayProducts.filter((item) => {
                if (state.filters.category.value !== "All") {
                    if (item.category === state.filters.category.value) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                if (state.filters.category === "All") {
                    return true;
                }
            })
        },
        updateColor: (state, action) => {
            state.filters.color = action.payload;
            state.displayProducts = state.displayProducts.filter((item) => {
                if (state.filters.color.value !== "All") {
                    if (item.color === state.filters.color.value) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            })
        },
        updateSize: (state, action) => {
            state.filters.size = action.payload
            state.displayProducts = state.displayProducts.filter((item) => {
                if (state.filters.size.value !== "All") {
                    if (item.size === state.filters.size.value) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                if (state.filters.size.value === "All") {
                    return true
                }
            })
        },
        updateProductPerPage: (state, action) => {
            state.pagination.products = action.payload
        },
        updatePage: (state, action) => {
            state.pagination.page = action.payload
        },
        updateSort: (state, action) => {
            state.sort = action.payload;
            state.displayProducts = [...state.displayProducts].sort((a, b) => {
                if (action.payload === 'low-to-high') {
                    return a.salePrice - b.salePrice
                }
                if (action.payload === 'high-to-low') {
                    return b.salePrice - a.salePrice
                }
            })
        },
        setDefaultFilter: (state) => {
            state.filters = {
                category: {
                    value: null,
                    label: null
                },
                color: {
                    value: null,
                    label: null
                },
                size: {
                    value: null,
                    label: null
                }
            }
            state.displayProducts = state.allProducts;
        }
    }
})

export const { updateBrand, updateColor, updateSize, updateProductPerPage, updatePage, updateSort
    , setDefaultFilter } = productsSlice.actions;
export default productsSlice.reducer
