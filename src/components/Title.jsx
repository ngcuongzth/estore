import styled from "styled-components/macro"
import { breakpoints, colors } from "../styled/variables"
const Title = ({ text }) => {
    return (
        <Content>{text}</Content>
    )
}

const Content = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    color: ${colors.white};
    letter-spacing: 1px;
    text-shadow: 4px 2px 0px rgb(30 29 39 / 20%), 1px 2px 4px rgb(54 64 158 / 37%);
    padding: 1rem 0;
    filter: drop-shadow(0 10px 8px rgb(0 0 0 / .04)) drop-shadow(0 4px 3px rgb(0 0 0 / .1));
    @media screen and (max-width: ${breakpoints.extra_large}){
        font-size: 2rem;
    }

`
export default Title