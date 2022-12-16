import styled from "styled-components/macro"
import { breakpoints } from "../../styled/variables"
const VideoPR = ({url}) => {
  return (
    <Wrapper>
        <video loop autoPlay playsInline>
            <source src={url}/>
        </video>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    width: 100%;
    height: 500px;

    display: flex;
    margin: 2rem 0;
    @media screen and (max-width: ${breakpoints.medium}){
      height: 300px;
    }
    video{
        object-fit: cover;
        width: 100%;
    }
`

export default VideoPR