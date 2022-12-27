import React from 'react'
import CartTitle from './CartTitle'
import styled from 'styled-components/macro'
import CardItem from './CartItem'
import { useSelector } from 'react-redux'
const CartContent = () => {
    const { cart } = useSelector((state) => {
        return state.cart
    })
    return (
        <Wrapper>
            <CartTitle />
            {cart.map((item) => {
                return <CardItem key={item.id} {...item} />
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`

export default CartContent