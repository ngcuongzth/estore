import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeSidebar } from "../redux/features/sidebarSlice"
import { advertisements } from "../utils/constants"
import ProductPR from '../components/Advertisement/ProductPR'
import styled from "styled-components/macro"
import ProductsContainer from "../components/ProductsPage/ProductsContainer"

const Products = () => {
    const { advertisement_3, advertisement_4 } = advertisements;
    const { img: img_3, content: content_3 } = advertisement_3;
    const { img: img_4, content: content_4 } = advertisement_4;
    const { f_title: f_title_3, s_title: s_title_3, desc: desc_3, content_btn: content_btn_3 } = content_3;
    const { f_title: f_title_4, s_title: s_title_4, desc: desc_4, content_btn: content_btn_4 } = content_4;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSidebar())
    }, [])
    return (
        <Wrapper>
            <ProductPR img={img_3} f_title={f_title_3} desc={desc_3} s_title={s_title_3} content_btn={content_btn_3} />
            <ProductsContainer />
        </Wrapper>
    )
}

const Wrapper = styled.main`
    padding-top: 100px;
`

export default Products