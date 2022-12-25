import { useParams } from "react-router-dom"
import { getProducts } from '../redux/features/productSlice'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import styled from 'styled-components/macro'
const SingleProduct = () => {
    const { id: idProd } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [])

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
        <Wrapper>SingleProduct</Wrapper>
    )
}

const Wrapper = styled.main`
    padding-top: 100px;
`

export default SingleProduct