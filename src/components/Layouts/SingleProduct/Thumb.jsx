import { bRadius } from "../../../styled/variables"
import styled from "styled-components/macro"
const Thumb = ({img, id}) => {
  return (
    <Wrapper>
      <img src={img} alt={`product_${id}`} />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  overflow: hidden;
  img{
    /* height: 500px; */
    width: 500px;
    margin: 0 auto;
    border-radius: ${bRadius.b_radius_10};
  }
`
export default Thumb
