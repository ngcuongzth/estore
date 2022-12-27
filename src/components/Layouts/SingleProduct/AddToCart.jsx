import { bRadius, colors, breakpoints } from "../../../styled/variables"
import styled from "styled-components/macro"
import { useDispatch } from "react-redux"
import { addToCartFromAmountButton } from "../../../redux/features/cartSlice"
import { useNavigate } from "react-router-dom"

const AddToCart = ({ id, infoProduct, amount }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <button onClick={() => {
        dispatch(addToCartFromAmountButton({
          id: id,
          infoProduct: infoProduct,
          amount: amount
        }))
        navigate('/cart')
      }}>Add to cart</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  button{
    text-transform: uppercase;
    padding: 5px 10px;
    border-radius: ${bRadius.b_radius_5};
    border-color: ${colors.secondary};
    background-color: ${colors.white};
    color: ${colors.secondary};
    font-size: 1rem;
      @media screen and (max-width: ${breakpoints.small}){
      font-size: 0.8rem;
    }
    &:hover{
      color: ${colors.text};
      background-color: ${colors.secondary};
    border-color: ${colors.white};

    }
  }
`

export default AddToCart