import { bRadius } from "../../../styled/variables"
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
  }
`
export default Thumb
