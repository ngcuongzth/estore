import styled from "styled-components/macro"
import CartContent from "../components/Layouts/Cart/CartContent"
import { useSelector, useDispatch } from 'react-redux';
import noProduct from '../assets/images/no_product.png';
import { bRadius, colors } from "../styled/variables";
import { useNavigate } from "react-router-dom";
import { breakpoints } from './../styled/variables';
import { useEffect } from "react";
import { calcCartTotals } from "../redux/features/cartSlice";
const Cart = () => {
    const dispatch = useDispatch()
    const { cart } = useSelector((state) => {
        return state.cart
    })

    useEffect(() => {
        dispatch(calcCartTotals())
    }, [cart])

    const navigate = useNavigate();
    return (
        <Wrapper>
            <Container className="container">
                {cart.length <= 0 ?
                    <NoProduct>
                        <img src={noProduct} className="no-product" alt="" />
                        <h4 className="message">
                            Your cart is empty
                        </h4>
                        <div className="btn-wrapper">
                            <button className="fill-cart" onClick={() => {
                                navigate('/store')
                            }}>
                                Shopping now
                            </button>
                        </div>
                    </NoProduct>
                    :
                    <CartContent />
                }
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.main`
    padding-top: 100px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    `

const NoProduct = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2rem;
    .no-product{
        margin: 0 auto;
    }
    h4{
        font-size: 2.4rem;
        color: ${colors.title};
        font-weight: 500;
        text-align: center;
        @media screen and (max-width: ${breakpoints.medium}){
            font-size: 2rem;
        }
        @media screen and (max-width: ${breakpoints.small}){
            font-size: 1.5rem;
        }
    }
    .fill-cart{
        background-color: ${colors.secondary};
        color: ${colors.text};
        border-color: ${colors.white};
        font-size: 1rem;
        text-transform: uppercase;
        border-radius: ${bRadius.b_radius_5};
        padding: 5px 10px;
        &:hover{
            border-color: ${colors.secondary};
            background-color: ${colors.white};
            color: ${colors.secondary};
        }
        @media screen and (max-width: ${breakpoints.medium}){
            font-size: 0.8rem;
        }
    }
`
const Container = styled.div`
    padding: 0 2rem;
`
export default Cart