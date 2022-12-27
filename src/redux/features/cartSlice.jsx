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
        addToCartFromCard: (state, action) => {
            const { id, infoProduct } = action.payload;
            console.log(id, infoProduct);
            const isIncluded = state.cart.find((prod) => {
                return prod.id === id;
            })
            if (isIncluded) {
                // xử lý + amount 
                const tempCart = state.cart.map((cart) => {

                    if (cart.id === id) {
                        const newAmount = cart.amount + 1;
                        return { ...cart, amount: newAmount }
                    }
                    else {
                        return cart
                    }
                })
                return {
                    ...state, cart: tempCart
                }
            }
            // nếu kiểm tra chưa có mặt hàng này
            else {
                const newProduct = {
                    id: id,
                    name: infoProduct.title,
                    amount: 1,
                    image: infoProduct.image,
                    isFreeShip: infoProduct.isFreeShip
                }
                return { ...state, cart: [...state.cart, newProduct] }
            }
        },
        addToCartFromAmountButton: (state, action) => {
            const { id, infoProduct, amount } = action.payload;
            console.log(amount)
            const isIncluded = state.cart.find((cart) => {
                return cart.id === id
            })
            if (isIncluded) {
                const tempCart = state.cart.map((cart) => {
                    if (cart.id === id) {
                        // xử lý + amount 
                        const newAmount = cart.amount + amount
                        return { ...cart, amount: newAmount }
                    }
                    else {
                        return cart;
                    }
                })
                return { ...state, cart: tempCart }
            }
            else {
                const newProduct = {
                    id: id,
                    name: infoProduct.title,
                    amount: amount,
                    image: infoProduct.image,
                    isFreeShip: infoProduct.isFreeShip
                }
                return { ...state, cart: [...state.cart, newProduct] }
            }
        }
    },
})
export const { addToCartFromCard, addToCartFromAmountButton } = cartSlice.actions;
export default cartSlice.reducer