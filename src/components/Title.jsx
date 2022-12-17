import styled from "styled-components/macro"
import { bRadius, breakpoints, colors } from "../styled/variables"
import { Link } from "react-router-dom"
const Title = ({ text }) => {
    return (
        <Content>
            <h1>{text}</h1>
            <Link to="/store">See more</Link>
        </Content>
    )
}

const Content = styled.div`
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
a{
    color: inherit;
    font-weight: 600;
    padding: 5px 10px;
    border: 2px solid ${colors.white};
    border-radius: ${bRadius.b_radius_10};
    font-size: 1rem;
    text-align: center;
    @media screen and (max-width: ${breakpoints.large}){
        font-size: 0.9rem;
        padding: 4px 6px;
    }
    @media screen and (max-width: ${breakpoints.small}){
        font-size: 0.8rem;
        padding: 2px 4px;
    }
    &:hover{
        color: ${colors.white};
        background-color: ${colors.secondary};
    }
}
h1{
    color: inherit;
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: 4px 2px 0px rgb(30 29 39 / 20%), 1px 2px 4px rgb(54 64 158 / 37%);
    padding: 1rem 0;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / .04)) drop-shadow(0 4px 3px rgb(0 0 0 / .1));
    text-transform: capitalize;
    @media screen and (max-width: ${breakpoints.extra_large}){
        font-size: 2rem;
    }
    @media screen and (max-width: ${breakpoints.large}){
        font-size: 1.8rem;
    }
    @media screen and (max-width: ${breakpoints.small}){
        font-size: 1.4rem;
    }
}
`
export default Title