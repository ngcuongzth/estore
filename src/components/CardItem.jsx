import { formatName, formatPrice } from '../utils/format'
import styled from 'styled-components/macro';
import { bRadius, breakpoints, colors } from '../styled/variables';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import { CartIcon, BagIcon, CarIcon } from '../utils/icons'

const CardItem = ({ data }) => {
    const { id, title, image, promotionPercent,
        originalPrice, salePrice, rating, isFreeShip } = data;
    const name = formatName(title);
    const navigate = useNavigate();
    return (
        <Wrapper >
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
                <Stars>
                    <Rating size='small' name="half-rating-read" readOnly defaultValue={rating.rate} precision={0.5} />
                    <p>{rating.rate} rate</p>
                </Stars>
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
                            <span>
                                {isFreeShip &&
                                    <>
                                        <CarIcon /> Free ship
                                    </>
                                }

                            </span>
                        </div>
                        <ButtonWrapper>
                            <button className='bag'>
                                <BagIcon />
                                Add to cart
                            </button>
                            <button className='cart' onClick={() => {
                                navigate("/checkout")
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

const Wrapper = styled.div`
    background-color: ${colors.white};
    border-radius: ${bRadius.b_radius_10};
    cursor: pointer;
    &:hover{
        background: linear-gradient(225deg,#e6e6e6,#fff);
        box-shadow: -12px 12px 24px #d1d1d1, 12px -12px 24px #fff
    }
`
const Thumb = styled.div`
    img{
        padding: 1rem;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
const Description = styled.div`
padding: 1rem;
padding-top: 0;
h3{
    font-size: 1rem;
    color: ${colors.title};
    font-weight: 600;
    letter-spacing: 1px;
    height: 50px;
    &:hover{
        color: ${colors.primary};
    }
    @media screen and (max-width: ${breakpoints.medium}){
           height: unset;
    }
    }
`
const Stars = styled.div`
    display: flex;
    gap: 1rem;
    p{
        font-size: 0.9rem;
        font-weight: 600;
        color: ${colors.secondary};
        border-radius: ${bRadius.b_radius_5};
        padding:1px;
    }
`

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

const ButtonWrapper = styled.div`
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