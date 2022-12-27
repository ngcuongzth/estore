import styled from "styled-components/macro"
import Skeleton from "react-loading-skeleton"
import { bRadius } from "../../styled/variables"

const DescriptionLoading = () => {
    return (
        <Wrapper>
            <Title>
                <Skeleton className="title" />
            </Title>
            <Desc>
                <Skeleton className="desc" />
            </Desc>
            <Other>
                <Skeleton className="other" />
            </Other>
            <Other>
                <Skeleton className="other" />
            </Other>
            <Other>
                <Skeleton className="other" />
            </Other>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`

const Title = styled.div`
    .title{
        height: 2rem;
    }
`
const Desc = styled.div`
    .desc{
        height: 5rem;
    }
`
const Other = styled.div`
    .other{
        height: 1rem;
    }
`

export default DescriptionLoading