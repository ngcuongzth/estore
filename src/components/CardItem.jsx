import { formatName, formatPrice } from '../utils/format'
import styled from 'styled-components/macro';
import { bRadius, breakpoints, colors, gradient_themes, transitions } from '../styled/variables';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import { CartIcon, BagIcon } from '../utils/icons'

console.log(CartIcon);
const CardItem = ({ data }) => {
    const { id, title, color, image, promotionPercent,
        originalPrice, salePrice, rating } = data;
    const name = formatName(title);
    const navigate = useNavigate();
    return (
        <Wrapper onClick={() => {
            navigate(`/store/product/${id}`)
        }}>
            <Thumb>
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
                        <h4>${formatPrice(salePrice)}</h4>
                        <ButtonWrapper>
                            <button className='bag'>
                                <BagIcon />
                                Add to cart
                            </button>
                            <button className='cart'>
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
        transform: scale(1.05, 1.05);
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
       font-weight: 600;
       text-align: right;
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
            border-radius: ${bRadius.b_radius_10};
            background-color: ${colors.primary};
            color: ${colors.text};
                &:hover{
                background-color: ${colors.secondary};
                }
            svg{
                color: ${colors.white};
                width: 20px;
            }
    }
    `

export default CardItem