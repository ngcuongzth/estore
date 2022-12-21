import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { advertisements } from "../utils/constants"
import ProductPR from '../components/Advertisement/ProductPR'
import styled from "styled-components/macro"
import { getProducts, setDefaultFilter, updateSize } from '../redux/features/productSlice'
import Filter from "../components/Filter"
import GridProducts from '../components/GridProducts'
import Pagination from "../components/Pagination"
import Sort from '../components/Sort'
import { bRadius, colors, themes } from "../styled/variables"
import FilterConfig from "../components/FilterConfig"

const Products = () => {
    const { advertisement_3, advertisement_4 } = advertisements;
    const { img: img_3, content: content_3 } = advertisement_3;
    const { img: img_4, content: content_4 } = advertisement_4;
    const { f_title: f_title_3, s_title: s_title_3, desc: desc_3, content_btn: content_btn_3 } = content_3;
    const { f_title: f_title_4, s_title: s_title_4, desc: desc_4, content_btn: content_btn_4 } = content_4;

    const dispatch = useDispatch();
    const { allProducts, displayProducts, pagination, filters } = useSelector((state) => {
        return state.products
    })


    useEffect(() => {
        dispatch(getProducts());
        dispatch(setDefaultFilter());
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pagination])

    return (
        <Wrapper>
            <ProductPR img={img_3} f_title={f_title_3} desc={desc_3} s_title={s_title_3}
                content_btn={content_btn_3} />
            <ProductContainter>
                <Container className="container">
                    <Filter />
                    <ConfigWrapper>
                        <h4>Categories:</h4>
                        <FilterConfig name="Brand" config={filters.category.label} />
                        <FilterConfig name="Color" config={filters.color.label} />
                        <FilterConfig name="Size" config={filters.size.label} />
                        <button onClick={() => {
                            dispatch(setDefaultFilter())
                        }}>
                            Reset filter
                        </button>
                    </ConfigWrapper>
                    <Sort />
                    <GridProducts />
                    <Pagination data={displayProducts} size={12} />
                </Container>
            </ProductContainter>
            <ProductPR img={img_4} f_title={f_title_4} desc={desc_4} s_title={s_title_4}
                content_btn={content_btn_4} />
        </Wrapper>
    )
}
const Wrapper = styled.main`
    padding-top: 100px;
`

const ProductContainter = styled.div`
    background-image: ${themes.section};
`
const Container = styled.div`
padding: 3rem 2rem;
`
const ConfigWrapper = styled.div`
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    align-items: center;
    div{
        box-shadow: 0px 0px 1px #ebebeb, 0px 3px 4px #fff;
    }
    h4{
        color: ${colors.text};
        font-weight: 600;
        font-size: 1rem;
    }
    button{
        background-color:${colors.white};
        color: ${colors.secondary};
        padding: 5px 10px;
        border-radius: ${bRadius.b_radius_20};
        box-shadow: 0px 0px 1px #ebebeb, 0px 3px 4px #fff;
        border: none;
        &:hover{
        background-color:${colors.secondary};
        color: ${colors.text};
        }
    }
`


export default Products