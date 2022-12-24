import styled from "styled-components/macro"
import { bRadius, breakpoints, colors } from "../styled/variables"
import { Link } from "react-router-dom"

const ProductPR = ({ img, f_title, s_title, desc, content_btn }) => {
    return (
        <Wrapper>
            <Container className="container">
                <Thumb>
                    <img src={img} alt={s_title} />
                </Thumb>
                <Description>
                    <h4>{f_title}</h4>
                    <h2>{s_title}</h2>
                    <p>{desc}</p>
                    <Link to="/store">
                        {content_btn}
                    </Link>
                </Description>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    margin: 2rem 0;
`
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 2rem;
    padding: 0 2rem;

    @media screen and (max-width: ${breakpoints.large}){
        grid-template-columns: 1fr;
        gap: 1rem;
    }
`

const Thumb = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        object-fit: cover;
        width: 100%;
        cursor: pointer;
        &:hover{
            transform: rotate(-15deg)
        }
    }
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
      @media screen and (max-width: ${breakpoints.large}){
        align-items: center;
    }
    h4{
        font-size: 1.5rem;
        text-transform: uppercase;
        font-weight: 700;
        color: ${colors.primary};
        line-height: 1.5rem;
    }
    h2{
        font-size: 3rem;
        line-height: 3rem;
        font-weight: 700;
        filter: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
        color: ${colors.title};
    @media screen and (max-width: ${breakpoints.large}){
        font-size: 2rem;
        text-align: center;
        line-height: 2rem;
    }
    }
    p{
        margin: 1rem 0;
        font-size: 0.9rem;
        color: ${colors.black};
        font-weight: 400;
         @media screen and (max-width: ${breakpoints.large}){
        text-align: center;
        margin: 0.5rem;
    }
    }
    a{
        box-shadow: 0 4px 6px 1px rgb(0 0 0 / 10%), 0 2px 4px 2px rgb(0 0 0 / 10%);
        color: ${colors.white};
        background-color: ${colors.title};
        border-radius: ${bRadius.b_radius_10};
        padding: 8px 10px;
        text-transform: capitalize;
        font-weight: 400;
        max-width: 150px;
        text-align: center;
        &:hover{
            background-color: ${colors.primary};
        }
    }
`
export default ProductPR