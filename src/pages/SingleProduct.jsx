import { useParams } from "react-router-dom"
import { getProducts } from '../redux/features/productSlice'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from 'styled-components/macro'
import ProductPR from "../components/ProductPR";
import { advertisements } from "../utils/constants"
import ProductContent from "../components/Layouts/SingleProduct/ProductContent";

const SingleProduct = () => {
    const { id: idProd } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const { advertisement_1, advertisement_2 } = advertisements;
    const { img: img_1, content: content_1 } = advertisement_1;
    const { img: img_2, content: content_2 } = advertisement_2;
    const { f_title: f_title_1, s_title: s_title_1, desc: desc_1, content_btn: content_btn_1 } = content_1;
    const { f_title: f_title_2, s_title: s_title_2, desc: desc_2, content_btn: content_btn_2 } = content_2;
    const { allProducts } = useSelector((state) => {
        return state.products
    })

    const singleProduct = allProducts.find((prod) => {
        if (prod.id === Number(idProd)) {
            return true;
        }
        return false
    })
    return (
        <Wrapper>
            <ProductPR img={img_1} f_title={f_title_1} desc={desc_1} s_title={s_title_1} content_btn={content_btn_1} />
            <ProductContent data={singleProduct}/>
            <ProductPR img={img_2} f_title={f_title_2} desc={desc_2} s_title={s_title_2} content_btn={content_btn_2} />
        </Wrapper>
    )
}

const Wrapper = styled.main`
    padding-top: 100px;
`

export default SingleProduct