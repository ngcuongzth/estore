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

    displayProducts: [],
    pagination: {
        page: 1,
        products: [],
    },
    sort: 'low-to-high',
    filters: {
        brand: {
            label: 'All',
            value: 'All'
        },
        color: {
            label: 'All',
            value: 'All'
        },
        size: {
            label: 'All',
            value: 'All'
        }
    }
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
        updateFilters: (state, action) => {
            const { name, value, textContent } = action.payload.target;
            if (name === "brand") {
                state.filters.brand.label = textContent;
                state.filters.brand.value = value;
            }
            if (name === "color") {
                state.filters.color.label = textContent;
                state.filters.color.value = value;
            }
            if (name === "size") {
                state.filters.size.label = textContent;
                state.filters.size.value = value;
            }
        },
        clearFilters: (state) => {
            state.filters = {
                brand: {
                    label: 'All',
                    value: 'All'
                },
                color: {
                    label: 'All',
                    value: 'All'
                },
                size: {
                    label: 'All',
                    value: 'All'
                }
            }
        },
        filterProducts: (state) => {
            let tempProducts = state.allProducts;
            const brand = state.filters.brand.value;
            const color = state.filters.color.value;
            const size = state.filters.size.value;
            if (brand !== "All") {
                tempProducts = tempProducts.filter((product) => {
                    if (product.category === Number(brand)) {
                        return true;
                    }
                    return false;
                })
            }
            if (size !== "All") {
                tempProducts = tempProducts.filter((product) => {
                    if (product.size === Number(size)) {
                        return true;
                    }
                    return false;
                })
            }
            if (color !== "All") {
                tempProducts = tempProducts.filter((product) => {
                    if (product.color === color) {
                        return true;
                    }
                    return false;
                })
            }
            state.displayProducts = tempProducts;
        }
    }
})

export const { updateProductPerPage, updatePage, updateSort,
    updateFilters, clearFilters, filterProducts
} = productsSlice.actions;
export default productsSlice.reducer
