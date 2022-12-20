import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { bRadius, colors } from '../styled/variables'
import { PlusIcon, MinusIcon } from '../utils/icons'
import { updateBrand, updateColor, updateSize, setDefaultFilter, handleFilter } from '../redux/features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
const Category = ({ title, data }) => {
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const { filters, displayProducts } = useSelector((state) => {
        return state.products;
    })
    const toggleActive = () => {
        setActive(!active);
    }


    useEffect(() => {
        dispatch(handleFilter());
    }, [filters])

    let methodAction;
    if (title === "Brand") {
        methodAction = updateBrand;
    }
    if (title === "Color") {
        methodAction = updateColor;
    }
    if (title === "Size") {
        methodAction = updateSize;
    }
    if (title === "All") {
        methodAction = setDefaultFilter;
    }
    return (
        <Container>
            <Cate>
                <span>{title}</span>
                <button onClick={() => {
                    toggleActive();
                }} >
                    {active ?
                        <MinusIcon />
                        :
                        <PlusIcon />
                    }
                </button>
            </Cate>
            {active &&
                <List>
                    {data.map((item, index) => {
                        return <li key={index}
                            onClick={() => {
                                dispatch(methodAction(item))
                                toggleActive();
                            }}
                        >
                            {item.label}
                        </li>
                    })}
                </List>
            }
        </Container >
    )
}
const Container = styled.div`
    width: 200px;
    position: relative;
`
const Cate = styled.div`
    font-weight: 500;
    svg{
        width: 20px;
    }
    display: flex;
    justify-content: space-between;
    border-radius: ${bRadius.b_radius_5};
    color: ${colors.title};
    padding: 5px 10px;
    border: 1px solid #0f172a17;
    background-color: ${colors.white};
    cursor: pointer;
`

const List = styled.ul`
    position: absolute;
    top: 110%;
    left: 0;
    right: 0;
    border-radius: ${bRadius.b_radius_5};
    color: ${colors.title};
    border: 1px solid #0f172a17;
    z-index: 10;
    background-color: ${colors.white};
    li{
        padding: 5px 10px;
        cursor: pointer;
        transition: 0.2s linear all;
        &:hover{
            background-color: ${colors.secondary};
            color: ${colors.white};
        }
    }
`

export default Category