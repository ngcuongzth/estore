import CartTitle from './CartTitle'
import styled from 'styled-components/macro'
import CardItem from './CartItem'
import { useSelector } from 'react-redux'
import { bRadius, colors } from '../../../styled/variables'
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../../redux/features/cartSlice'
import { useDispatch } from 'react-redux'
import CartTotals from './CartTotals'

const CartContent = () => {
    const navigate = useNavigate();
    const { cart } = useSelector((state) => {
        return state.cart
    })


    const dispatch = useDispatch();
    return (
        <Wrapper>
            <CartTitle />
            {cart.map((item) => {
                return <CardItem key={item.id} {...item} />
            })}
            <LinkContainer>
                <button onClick={() => {
                    navigate('/store')
                }}>Continue shopping</button>
                <button onClick={() => {
                    dispatch(clearCart())
                }}>
                    Clear Shopping
                </button>
            </LinkContainer>
            <CartTotals />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`

const LinkContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 2rem 0;
    button{
        border-color: transparent;
        color: ${colors.white};
        background-color: ${colors.secondary};
        padding: 5px 10px;
        border-radius: ${bRadius.b_radius_5};
        border-color: ${colors.white};

        &:hover{
            border-color: ${colors.secondary};
            background-color: ${colors.white};
            color: ${colors.secondary};
        }
    }
`

export default CartContent