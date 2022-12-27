import styled from "styled-components"
import { breakpoints } from "../../../styled/variables"
import Thumb from "./Thumb"
import Description from "./Description"
import { useSelector } from "react-redux"
import ThumbLoading from "../../SkeletonLoading/ThumbLoading"
import DescriptionLoading from "../../SkeletonLoading/DescriptionLoading"
const ProductContent = () => {
  const { isSingleProductLoading, singleProduct } = useSelector((state) => {
    return state.products
  })
  return (
    <Wrapper>
      <div className="container">
        {isSingleProductLoading ?
          <ThumbLoading /> :
          <Thumb img={singleProduct.image} />
        }
        {
          isSingleProductLoading ?
            <DescriptionLoading />
            :
            <Description data={singleProduct} />
        }
      </div>
    </Wrapper>
  )
}



const Wrapper = styled.div`
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
