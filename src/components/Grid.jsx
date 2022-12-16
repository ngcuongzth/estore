import styled from "styled-components/macro"
import Title from "./Title"
import { breakpoints, colors, themes } from "../styled/variables"
import CardItem from './CardItem'
const Grid = ({ data }) => {
    return (
        <Wrapper>
            <div className="container">
                <Title text="Popular Products" />
                <Products>
                    {data.slice(0, 8).map((item) => {
                        return <CardItem data={item} key={item.id} />
                    })}
                </Products>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    background-image: ${themes.section};
    .container{
        padding: 0 2rem;
        padding-bottom: 3.5rem;
    }
`

const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 1.5rem;
    @media screen and (max-width: ${breakpoints.large}){
        grid-template-columns: repeat( 3,1fr);
        gap: 1.75rem;
    }
    @media screen and (max-width: ${breakpoints.medium}){
        grid-template-columns: repeat( 2,1fr);
        gap: 2rem;
    }
     @media screen and (max-width: ${breakpoints.small}){
        grid-template-columns: repeat( 1,1fr);
        gap: 2.25rem;
    }
`
export default Grid