import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filteredProducts: [],
    allProducts: [],
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
        },
        search: {
            value: ''
        }
    },
    search: null,
    pagination: {
        page: 1,
        productsPerPage: []
    }
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        loadProducts: (state, action) => {
            state.allProducts = action.payload;
            state.filteredProducts = action.payload;
        },

        // pagination 
        updateProductsPerPage: (state, action) => {
            state.pagination.productsPerPage = action.payload;
        },
        // update page 
        updatePage: (state, action) => {
            state.pagination.page = action.payload;
        },
        // sort 
        updateSort: (state, action) => {
            state.sort = action.payload;
            const newProducts = state.allProducts.sort((a, b) => {
                if (action.payload === "low-to-high") {
                    return a.salePrice - b.salePrice
                }
                if (action.payload === "high-to-low") {
                    return b.salePrice - a.salePrice
                }
            })
            state.filteredProducts = newProducts
            state.pagination.page = 1;
        },
        // update filters
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
            state.pagination.page = 1;
        },
        // clear filters
        clearFilters: (state) => {
            state.filteredProducts = state.allProducts;
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
            state.search = ""
        },
        // handleFilter 
        handleFilter: (state) => {
            const brand = state.filters.brand.value;
            const color = state.filters.color.value;
            const size = state.filters.size.value;
            let tempProducts = state.allProducts;

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
            state.filteredProducts = tempProducts;
        },
        //search products
        searchProduct: (state, action) => {
            const keywords = action.payload.trim();
            state.search = keywords;
            let tempProducts = state.allProducts;
            tempProducts = tempProducts.filter((prod) => {
                if (prod.title.toLocaleLowerCase().includes(keywords.toLocaleLowerCase())) {
                    return true;
                }
                else {
                    return false
                }
            })
            state.filteredProducts = tempProducts;
        }

    }
})
export const { loadProducts, updateProductsPerPage, updatePage,
    updateSort, updateFilters, clearFilters, handleFilter, searchProduct } = filterSlice.actions;
export default filterSlice.reducer