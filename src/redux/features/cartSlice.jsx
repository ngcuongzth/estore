import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    totalProducts: 0,
    totalAmount: 0,
    shipping_fee: 40000
    // 40k vnd to usd 
}
const cartSlice = createSlice({
    name: 'card',
    initialState: initialState,
    reducers: {
        addToCartFromCard: (state, action) => {
            const { id, infoProduct } = action.payload;
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
                state.cart = tempCart

            }
            // nếu kiểm tra chưa có mặt hàng này
            else {
                const newProduct = {
                    id: id,
                    name: infoProduct.title,
                    amount: 1,
                    image: infoProduct.image,
                    isFreeShip: infoProduct.isFreeShip,
                    price: infoProduct.salePrice
                }
                state.cart = [...state.cart, newProduct]
            }
            toast.success("Item added to cart ✔️")
        },
        addToCartFromAmountButton: (state, action) => {
            const { id, infoProduct, amount } = action.payload;
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
                state.cart = tempCart
            }
            else {
                const newProduct = {
                    id: id,
                    name: infoProduct.title,
                    amount: amount,
                    image: infoProduct.image,
                    isFreeShip: infoProduct.isFreeShip,
                    price: infoProduct.salePrice
                }
                state.cart = [...state.cart, newProduct]
            }
            toast.success("Item added to cart! 😃")
        },
        handleAmount: (state, action) => {
            const { type, id } = action.payload;
            const newCart = state.cart.map((cart) => {
                if (cart.id === id) {
                    if (type === "increase") {
                        return {
                            ...cart, amount: cart.amount + 1
                        }
                    }
                    if (type === "decrease") {
                        let newAmount = cart.amount - 1;
                        if (newAmount < 1) {
                            newAmount = 1;
                        }
                        return {
                            ...cart, amount: newAmount
                        }
                    }
                }
                return cart
            })
            state.cart = newCart
        },
        clearCartItem: (state, action) => {
            const id = action.payload;
            const newCart = state.cart.filter((cart) => {
                if (cart.id === id) {
                    return false;
                }
                return true;
            })
            state.cart = newCart;
            toast.info("Item deleted from cart! 😃")
        },
        clearCart: (state) => {
            state.cart = []
            toast.warning("Cart removed! 😥")
        },
        calcCartTotals: (state) => {
            const { totalProducts, totalAmount } =
                state.cart.reduce((total, item) => {
                    const { amount, price } = item;
                    total.totalProducts += amount;
                    total.totalAmount += amount * price;
                    return total;
                }, {
                    totalProducts: 0,
                    totalAmount: 0
                })

            state.totalProducts = totalProducts;
            state.totalAmount = totalAmount;
        }


    },
})
export const { addToCartFromCard, addToCartFromAmountButton,
    handleAmount, clearCartItem, clearCart, calcCartTotals } = cartSlice.actions;
export default cartSlice.reducer