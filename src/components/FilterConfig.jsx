import styled from "styled-components/macro"
import { bRadius, colors } from "../styled/variables"
const FilterConfig = ({ name, config }) => {
    return (
        <Wrapper>
            <h6>{name}</h6> :
            <span>{config}</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    background-color: ${colors.white};
    border-radius: ${bRadius.b_radius_20};
    padding: 5px 10px;
    gap:2px;
    min-width: 100px;
    justify-content: center;
    h6,span{
        font-size: 1rem;
        color: ${colors.title};
    }
    h6{
        font-weight: 600;
        color: ${colors.title};
    }
    span{
        color: ${colors.secondary};
        text-transform: capitalize;
    }
    
`

export default FilterConfig