import styled from "styled-components/macro"
import Skeleton from "react-loading-skeleton"
import { bRadius } from "../../styled/variables"

const ThumbLoading = () => {
    return (
        <Wrapper>
            <Skeleton className="loading" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 400px;
    height: 400px;
    margin: 0 auto;
    .loading{
        border-radius: ${bRadius.b_radius_10};
        height: 100%;
        width: 100%;
    }
`

export default ThumbLoading