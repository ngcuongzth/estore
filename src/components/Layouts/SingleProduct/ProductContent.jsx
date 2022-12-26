import styled from "styled-components"
import { colors, themes, breakpoints } from "../../../styled/variables"
import Thumb from "./Thumb"
import Description from "./Description"
const ProductContent = ({data}) => {
    
  return (
    <Wrapper>
      <div className="container">
        <Thumb img={data.image} id={data.id}/>
        <Description data={data} />
      </div>
    </Wrapper>
  )
}



const Wrapper = styled.div`
    background-image: ${themes.section};
    .container{
        padding: 3rem 2rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;

        @media screen and (max-width: ${breakpoints.large}){
            grid-template-columns: unset;
        }
    }
`



export default ProductContent
