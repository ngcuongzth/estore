import { useSelector } from "react-redux"
import styled from "styled-components/macro"
import CardItem from '../components/CardItem'
import { bRadius, breakpoints, colors } from "../styled/variables"
import CardLoading from '../components/SkeletonLoading/CardLoading'
import important from '../assets/svg/important.svg'
const GridProducts = () => {

    // display 12 products loading skeleton
    const fakeArrLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const { isLoading } = useSelector((state) => {
        return state.products
    })
    const { filteredProducts, search, pagination } = useSelector((state) => {
        return state.filter;
    })
    const { productsPerPage } = pagination;
    if (filteredProducts.length <= 0 && search) {
        return <NotFound>
            <h2>
                The product you requested could not be found :((
            </h2>
            <img src={important} alt="not found" />

        </NotFound>
    }
    return (
        <Wrapper>
            <Grid>
                {isLoading ?
                    <>{fakeArrLoading.map((item, index) => {
                        return <CardLoading key={index} />
                    })}</>
                    :
                    <>
                        {productsPerPage.map((product) => {
                            return <CardItem key={product.id} data={product} />
                        })}
                    </>

                }
            </Grid>
        </Wrapper>
    )
}

const NotFound = styled.div`
    h2{
        color: ${colors.text};
        font-weight: 600;
        margin-top: 3rem;
        text-align: center;
    }
    img{
        height: 300px;
        width: 100%;
        border-radius: ${bRadius.b_radius_10};
    }
`
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