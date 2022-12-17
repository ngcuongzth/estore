import styled from "styled-components/macro"
import { bRadius, breakpoints, colors } from "../styled/variables"
import { offerContents } from "../utils/constants"

const Offer = () => {
    return (
        <Wrapper>
            <Container className="container">
                <Header>
                    <h1>What we <span>offer</span></h1>
                </Header>
                <MyOffer>
                    {offerContents.map((item) => {
                        const { id, label, content, thumb, thumb_title } = item
                        return <OfferItem key={id}>
                            <div className="img-wrap">
                                <img src={thumb} alt={label} className="thumb" />
                            </div>
                            <h3>
                                {label}
                            </h3>
                            <p>
                                {content}
                            </p>
                            <img src={thumb_title} alt="thub-title" className="thumb-title" />

                        </OfferItem>
                    })}
                </MyOffer>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.section`
    background-color: ${colors.section};
    `
const Container = styled.div`
    padding: 3.5rem 2rem;
`
const Header = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 40px;
    h1{
        font-size: 45px;
        span{
            font-size: inherit;
            color: ${colors.secondary};
        }
    @media screen and (max-width: ${breakpoints.small}){
        font-size: 40px;
    }
    }
    `

const MyOffer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,minmax(0,1fr));
    gap: 2rem;
    @media screen and (max-width: ${breakpoints.large}){
    grid-template-columns: repeat(2,minmax(0,1fr));

    }
    @media screen and (max-width: ${breakpoints.small}){
        grid-template-columns: repeat(1,minmax(0,1fr));
    }
    
`

const OfferItem = styled.div`
    &:hover{
        background-color: ${colors.primary_hover};
        color: ${colors.white};
        h3,p{
            color: ${colors.white};
        }
    }
    cursor: pointer;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: ${bRadius.b_radius_10};
    gap: 1rem;
    .img-wrap{
        width: 160px;
        height: 160px;
        background-color: ${colors.white};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .thumb{
        width: 50%;
        height: 50%;
    }
    h3{
        font-size: 1.25rem;
        color: ${colors.primary};
        font-weight: 500;
    }
    p{
        color: #222;
        font-weight: 400;
        line-height: 0.9rem;
        font-size: 0.9rem;
        text-align: center;
    }
    .thumb-title{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`
export default Offer