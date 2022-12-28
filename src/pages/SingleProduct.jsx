import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import styled from 'styled-components/macro'
import ProductContent from "../components/Layouts/SingleProduct/ProductContent";
import { updateIdSingleProduct, getSingleProduct } from "../redux/features/productSlice";


const SingleProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateIdSingleProduct(id))
        dispatch(getSingleProduct())
    }, [id])


    return (
        <Wrapper>
            <ProductContent />
        </Wrapper>
    )
}

const Wrapper = styled.main`
    padding-top: 100px;
`


const NoProduct = styled.div`
    

`

export default SingleProduct