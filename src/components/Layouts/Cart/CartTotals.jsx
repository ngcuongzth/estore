import styled from 'styled-components/macro'
import { formatPrice } from '../../../utils/format'
import { useSelector } from 'react-redux'
import { bRadius, colors } from '../../../styled/variables'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
const CartTotals = () => {

  const navigate = useNavigate();
  const { totalAmount, shipping_fee } = useSelector((state) => {
    return state.cart;
  })
  const { user } = useSelector((state) => {
    return state.user
  })
  const { loginWithPopup } = useAuth0()
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>${formatPrice(totalAmount)}</span>
          </h5>
          <p>
            shipping fee : <span>${formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{' '}
            <span>${formatPrice(totalAmount + shipping_fee)}</span>
          </h4>
        </article>

        {user ?
          <button onClick={() => {
            navigate('/checkout')
          }}>
            proceed to checkout
          </button>
          :
          <button onClick={() => {
            loginWithPopup()
          }}>
            login
          </button>

        }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid ${colors.title};
    border-radius: ${bRadius.b_radius_5};
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
    text-transform: capitalize;
  }

  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  button {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    background-color: ${colors.secondary};
    color: ${colors.text};
    padding: 5px 10px;
    border-radius: ${bRadius.b_radius_5};
    border-color: ${colors.white};
    &:hover{
      background-color: ${colors.white};
      border-color: ${colors.secondary};
      color: ${colors.secondary};
    }
  }
`

export default CartTotals