import styled from "styled-components/macro"
import { Rating } from "@mui/material"
import { colors, bRadius } from "../styled/variables"

const Star = ({ rating }) => {
    return (
        <Wrapper>
            <Rating size='small' name="half-rating-read" readOnly defaultValue={rating.rate} precision={0.5} />
            <p>{rating.rate} rate</p>
        </Wrapper>
    )
}

export default Star


const Wrapper = styled.div`
    display: flex;
    gap: 1rem;
    p{
        font-size: 0.9rem;
        font-weight: 600;
        color: ${colors.secondary};
        border-radius: ${bRadius.b_radius_5};
        padding:1px;
    }`