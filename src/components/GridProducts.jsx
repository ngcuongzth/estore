import { useSelector } from "react-redux"
import styled from "styled-components/macro"
import CardItem from '../components/CardItem'
import { breakpoints } from "../styled/variables"
import CardLoading from '../components/SkeletonLoading/CardLoading'
const GridProducts = () => {

    // display 12 products loading skeleton
    const fakeArrLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const { displayProducts, isLoading, pagination } = useSelector((state) => {
        return state.products
    })
    const { products } = pagination;
    return (
        <Wrapper>
            <Grid>
                {isLoading ?
                    <>{fakeArrLoading.map((item, index) => {
                        return <CardLoading key={index} />
                    })}</>
                    :
                    <>
                        {products.map((product) => {
                            return <CardItem key={product.id} data={product} />
                        })}
                    </>

                }
            </Grid>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 3rem 0;
    `
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 24px;
@media screen and (max-width: ${breakpoints.large}){
    grid-template-columns: repeat(3,1fr);
}
@media screen and (max-width: ${breakpoints.medium}){
    grid-template-columns: repeat(2,1fr);
}
 @media screen and (max-width: ${breakpoints.small}){
    grid-template-columns: repeat(1,1fr);
}
`

export default GridProducts