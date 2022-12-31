import { useSelector } from "react-redux"
import styled from "styled-components/macro"
import CardItem from '../components/CardItem'
import { bRadius, breakpoints, colors } from "../styled/variables"
import CardLoading from '../components/SkeletonLoading/CardLoading'
import noProduct from '../assets/images/no_product.png'
const GridProducts = () => {

    // display 12 products loading skeleton
    const fakeArrLoading = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const { isLoading } = useSelector((state) => {
        return state.products
    })
    const { filteredProducts, filters, pagination } = useSelector((state) => {
        return state.filter;
    })
    const { productsPerPage } = pagination;
    if (filteredProducts.length <= 0) {
        return <NotFound>
            <h2>
                No product found
            </h2>
            <img src={noProduct} alt="not found" />

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
        text-align: center;
        margin:  1rem 0 ;
    }
    img{
        height: 300px;
        border-radius: ${bRadius.b_radius_10};
        object-fit: cover;
        margin: 0 auto;
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