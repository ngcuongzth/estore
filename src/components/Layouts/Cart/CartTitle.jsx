import styled from 'styled-components/macro'
import { colors, breakpoints } from '../../../styled/variables'
const CartTitle = () => {
    return (
        <Wrapper>
            <div className='content'>
                <h5>item</h5>
                <h5>price</h5>
                <h5>quantity</h5>
                <h5>subtotal</h5>
                <span></span>
            </div>
            <hr />
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: none;

  @media (min-width: ${breakpoints.medium}) {
    display: block;
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      text-transform: capitalize;
      h5 {
        color: ${colors.primary};
        font-weight: 600;
      }
    }
    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      margin-top: 1rem;
      margin-bottom: 3rem;
    }
  }
`

export default CartTitle