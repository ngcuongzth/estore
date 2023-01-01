import styled from "styled-components/macro"
import Skeleton from "react-loading-skeleton"
import { bRadius, colors } from "../../styled/variables"

const CardLoading = () => {
    return (
        <Wrapper>
            <Thumb>
                <Skeleton className="loading-thumb" />
            </Thumb>
            <Header>
                <Skeleton className="loading-header" />
            </Header>
            <Feedback>
                <div>
                    <Skeleton />
                </div>
                <div >
                    <Skeleton />
                </div>
            </Feedback>
            <PriceOrignal>
                <div>
                    <Skeleton />
                </div>
                <div>
                    <Skeleton />
                </div>
            </PriceOrignal>
            <PriceSale>
                <div>
                    <Skeleton />
                </div>
                <div>
                    <Skeleton />
                </div>
            </PriceSale>
            <BtnWrap>
                <div>
                    <Skeleton />
                </div>
                <div>
                    <Skeleton />
                </div>
            </BtnWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${colors.white};
    border-radius: ${bRadius.b_radius_10};
    padding: 1rem;
`
const Thumb = styled.div`
    .loading-thumb{
        height: 200px;
    }
`
const Header = styled.div`
    .loading-header{
        height: 30px;
    }
`
const Feedback = styled.div`
    display: grid;
    grid-template-columns: 4fr 3fr;
    gap: 1rem;
`

const PriceOrignal = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr 4fr;
    gap: 0.5rem;
`
const PriceSale = styled.div`
display: flex;
justify-content: space-between;
    div{
        width: 40%;
    }
`
const BtnWrap = styled.div`
    display: flex;
    justify-content: space-between;
    div{
        width: 30%;
    }
`
export default CardLoading