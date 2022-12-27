import { formatPrice } from '../../../utils/format'
import styled from 'styled-components/macro'
import { TrashIcon } from '../../../utils/icons'
import { bRadius, colors } from '../../../styled/variables'
import CartAmount from './CartAmount'
import { clearCartItem } from '../../../redux/features/cartSlice'
import { useDispatch } from 'react-redux'
const CartItem = ({ id, image, name, price, amount }) => {
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <div className='title'>
                <img src={image} alt={name} />
                <div>
                    <h5 className='name'>{name.slice(4)}</h5>
                    <h5 className='price-small'>${formatPrice(price)}</h5>
                </div>
            </div>
            <h5 className='price'>${formatPrice(price)}</h5>
            <CartAmount
                amount={amount}
                id={id}
            />
            <h5 className='subtotal'>${formatPrice(price * amount)}</h5>
            <button
                type='button'
                className='remove-btn'
                onClick={() => {
                    dispatch(
                        clearCartItem(id)
                    )
                }}
            >
                <TrashIcon />
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.article`
.name{
    font-size: 0.85rem;
    color: ${colors.title};
    font-weight: 500;
}
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: 75px;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 3rem;
  align-items: center;
  .title {
    height: 100%;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    display: block;
    border-radius: ${bRadius.b_radius_5};
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }
  .price-small {
    color: ${colors.title};
  }
  .remove-btn {
    color: ${colors.secondary};
    background: transparent;
    border: transparent;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: ${colors.title};
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: ${colors.title};
      font-weight: 400;
    }
    .name {
      font-size: 1rem;
      color: ${colors.title};
      font-weight: 500;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 75px;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
   
  }
`


export default CartItem