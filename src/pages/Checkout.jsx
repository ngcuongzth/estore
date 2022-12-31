import styled from "styled-components/macro"
import { useSelector } from "react-redux"
import StripeCheckout from "../components/Layouts/Checkout/StripeCheckout"
import noProduct from '../assets/images/no_product.png'
import { useNavigate } from "react-router"
const Checkout = () => {
    const { cart } = useSelector((state) => {
        return state.cart;
    })
    const navigate = useNavigate()
    return (
        <main>
            <Wrapper className='page'>
                {cart.length < 1 ?
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
                    <StripeCheckout />
                }
            </Wrapper>
        </main>
    )
}

const Wrapper = styled.main`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  .empty {
    text-align: center;
  }
  a .btn{

  }
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
        color: rgb(15 23 42);
        font-weight: 500;
        text-align: center;
        @media screen and (max-width: 768px){
            font-size: 2rem;
        }
        @media screen and (max-width: 576px){
            font-size: 1.5rem;
        }
    }
    .fill-cart{
        background-color: #FF6651;
        color: white;;
        border-color: white;
        font-size: 1rem;
        text-transform: uppercase;
        border-radius: 5px;
        padding: 5px 10px;
        &:hover{
            border-color: FF6651;
            background-color: white;
            color: #FF6651;
        }
        @media screen and (max-width: 768px){
            font-size: 0.8rem;
        }
    }
`

export default Checkout