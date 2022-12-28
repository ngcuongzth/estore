import { formatName, formatPrice } from '../utils/format'
import styled from 'styled-components/macro';
import { bRadius, breakpoints, colors } from '../styled/variables';
import { useNavigate } from 'react-router-dom';
import { CartIcon, BagIcon, CarIcon } from '../utils/icons'
import 'react-loading-skeleton/dist/skeleton.css'
import Star from './Star';
import { addToCartFromCard } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';

const CardItem = ({ data }) => {
    const { id, title, image, promotionPercent,
        originalPrice, salePrice, rating } = data;
    const name = formatName(title);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return (
        <Wrapper>
            <Thumb onClick={() => {
                navigate(`/store/product/${id}`)
            }}>
                <img src={image} alt={name} />
            </Thumb>
            <Description>
                <h3>
                    {name.length > 40 ?
                        `${name.substr(0, 40)}...`
                        : name
                    }
                </h3>
                <Star rating={rating} />
                <Prices>
                    <div className="origin-price">
                        <h5>${formatPrice(originalPrice)}</h5>
                        {promotionPercent > 5 &&
                            <p>-{promotionPercent}% </p>
                        }
                    </div>
                    <div className="sale-off-price">
                        <div className="price">
                            <h4>${formatPrice(salePrice)}</h4>
                        </div>
                        <ButtonWrapper>
                            <button className='bag'
                                onClick={() => {
                                    dispatch(addToCartFromCard({
                                        id: id,
                                        infoProduct: data,
                                    }))
                                }}
                            >
                                <BagIcon />
                                Add to cart
                            </button>
                            <button className='cart' onClick={() => {
                                navigate("/cart");
                                dispatch(addToCartFromCard({
                                    id: id,
                                    infoProduct: data,
                                }))
                            }}>
                                <CartIcon />
                            </button>
                        </ButtonWrapper>
                    </div>
                </Prices>
            </Description>
        </Wrapper>
    )
}
export const Wrapper = styled.div`
    background-color: ${colors.white};
    border-radius: ${bRadius.b_radius_10};
    cursor: pointer;
    &:hover{
        background: linear-gradient(225deg,#e6e6e6,#fff);
        box-shadow: -12px 12px 24px #d1d1d1, 12px -12px 24px #fff
    }
`
export const Thumb = styled.div`
    img{
        padding: 1rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const Description = styled.div`
padding: 1rem;
padding-top: 0;
h3{
    font-size: 1rem;
    color: ${colors.title};
    font-weight: 600;
    letter-spacing: 1px;
    height: 50px;
    overflow: hidden;
    &:hover{
        color: ${colors.primary};
    }
    @media screen and (max-width: ${breakpoints.medium}){
           height: unset;
    }
    }
`
// const Stars = styled.div`
//     display: flex;
//     gap: 1rem;
//     p{
//         font-size: 0.9rem;
//         font-weight: 600;
//         color: ${colors.secondary};
//         border-radius: ${bRadius.b_radius_5};
//         padding:1px;
//     }
// `

const Prices = styled.div`
svg{
    width: 20px;
}
span{
    display: flex; 
    align-items: center;
    gap: 2px;
    color: ${colors.secondary};
}
.price{
    display: flex;
    justify-content: space-between;
}
    .origin-price{
        display: flex;
        gap: 1rem;
    }
    h5{
        font-size: 0.9rem;
        font-weight: 400;
        color: ${colors.title};
        text-decoration: line-through;
    }
    h4{
       color: ${colors.secondary};
       font-weight: 700;
    }
    p{
        font-size: 0.9rem;
        color: ${colors.black};
        background-color: ${colors.primary};
        color: ${colors.text};
        font-weight: 500;
        border-radius: ${bRadius.b_radius_10};
    }
`

export const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
    button{
            display: flex;
            padding: 5px;
            gap: 2px;
            border-radius: ${bRadius.b_radius_20};
            background-color: ${colors.primary};
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${colors.text};
                &:hover{
                background-color: ${colors.secondary};
                }
            svg{
                color: ${colors.white};
                width: 20px;
            }
            &.cart{
                width: 2rem;
            }
    }
    `

export default CardItem