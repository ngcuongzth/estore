import { bRadius, colors } from "../../../styled/variables"
import styled from "styled-components/macro"


const AddToCart = () => {
  return (
    <Wrapper>
      <button>Add to cart</button>
    </Wrapper>
  )
}

const Wrapper = styled.button`
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
    &:hover{
      color: ${colors.text};
      background-color: ${colors.secondary};
    border-color: ${colors.white};

    }
  }
`

export default AddToCart