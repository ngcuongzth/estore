import { bRadius, breakpoints } from "../../../styled/variables"
import styled from "styled-components/macro"

const Thumb = ({ img }) => {
  return (
    <Wrapper>
      <img src={img} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img{
    width: 400px;
    margin: 0 auto;
    border-radius: ${bRadius.b_radius_10};
    @media screen and (max-width: ${breakpoints.small}){
      width: 300px;
    }
  }
`
export default Thumb
