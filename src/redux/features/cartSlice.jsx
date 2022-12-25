import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cart: [],
    totalProduct: 0,
    totalAmount: 0,

}
const cartSlice = createSlice({
    name: 'card',
    initialState: initialState,
    reducers: {

    },
})

export default cartSlice.reducer