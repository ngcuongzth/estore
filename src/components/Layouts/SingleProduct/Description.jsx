import styled from "styled-components/macro"
import { useState } from "react";
import { colors, breakpoints } from "../../../styled/variables";
import { formatPrice } from '../../../utils/format'
import Amount from "../../Amount";
import AddToCart from "./AddToCart";
import Star from '../../../components/Star'
import { useDispatch } from "react-redux";
const Description = ({ data }) => {
  const { title, rating, originalPrice, salePrice, id } = data;
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount(amount + 1);
  };

  const decrease = () => {
    let newAmount = amount - 1;
    if (newAmount < 1) {
      newAmount = 1;
    }
    setAmount(newAmount);
  };
  return (
    <Wrapper>
      <Title>
        {title.slice(4)}
      </Title>
      <Desc>Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Suscipit est corrupti tenetur assumenda,
        totam cum eum perspiciatis quas, architecto modi aut ratione
        culpa! Et nesciunt nisi aliquam consequuntur unde? Tenetur.</Desc>
      <Star rating={rating} />
      <Price>
        <p className="original">
          ${formatPrice(originalPrice)}
        </p>
        <p className="sale">
          ${formatPrice(salePrice)}
        </p>
      </Price>
      <Amount amount={amount} increase={increase} decrease={decrease} />
      <AddToCart amount={amount} id={id} infoProduct={data} />
    </Wrapper>

  )

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const Desc = styled.p`
    color: ${colors.black};
    font-weight: 400;
    font-size: 0.9rem;
    @media screen and (max-width: ${breakpoints.small}){
      font-size: 0.8rem;
    }
`

const Price = styled.div`
    display: flex;
    gap: 1rem;
    p{
      color: ${colors.black};
      font-weight: 500;
    }
    p.original{
      text-decoration: line-through;
      font-size: 1rem;
      @media screen and (max-width: ${breakpoints.small}){
      font-size: 0.8rem;
    }
    }
    p.sale{
      color: ${colors.secondary};
      font-weight: 600;
      font-size: 1.2rem;
       @media screen and (max-width: ${breakpoints.small}){
      font-size: 1rem;
    }
    }
`

const Title = styled.h2`
    font-size: 1.5rem;
    line-height: 1.7rem;
    color: ${colors.title};
    font-weight: 600;
    @media screen and (max-width: ${breakpoints.small}){
      font-size: 1.3rem;
      line-height: 1.5rem;
    }
`
export default Description
