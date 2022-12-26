import styled from "styled-components/macro"
import { colors, breakpoints } from "../../../styled/variables";
import {formatPrice} from '../../../utils/format'
import Amount from "../../Amount";
import AddToCart from "./AddToCart";
import Star from '../../../components/Star'
const Description = ({data}) => {
    const {
        id, color, image, isFreeShip, originalPrice, salePrice, promotionPercent,
        size, rating, title
    } = data;

  return (
    <Wrapper>
      <Title>
        {title.slice(4)}
      </Title>
      <Desc>Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Suscipit est corrupti tenetur assumenda,
          totam cum eum perspiciatis quas, architecto modi aut ratione
           culpa! Et nesciunt nisi aliquam consequuntur unde? Tenetur.</Desc>
           <Star rating={rating}/>
           <Price>
            <div className="original">
                ${formatPrice(originalPrice)}              
            </div>
            <div className="sale">
                ${formatPrice(salePrice)}              
            </div>
           </Price>
           <Amount/>
           <AddToCart/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    
`

const Desc = styled.p`
    color: ${colors.text};
    font-weight: 400;
`

const Price = styled.div`
    
`

const Title = styled.h2`
    font-size: 1.5rem;
    color: ${colors.text};
    font-weight: 600;
`
export default Description
