import React, { useState, useEffect, } from 'react'
import styled from 'styled-components/macro'
import { bRadius, breakpoints, colors } from '../../../styled/variables'
import { PlusIcon, MinusIcon } from '../../../utils/icons'
import { updateFilters } from '../../../redux/features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
const Category = ({ title, data, name }) => {

    // data is selections of menu 
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();
    const { filters, displayProducts } = useSelector((state) => {
        return state.products;
    })

    const toggleActive = () => {
        setActive(!active);
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
                        return <button key={index}
                            value={item.value}
                            name={name}
                            onClick={(e) => {
                                toggleActive();
                                dispatch(updateFilters(e))
                            }}
                        >
                            {item.label}
                        </button>
                    })}
                </List>
            }
        </Container >
    )
}
const Container = styled.div`
    width: 200px;
    position: relative;

    @media screen and (max-width: ${breakpoints.medium}){
        width: 50%;
    }
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
    
    button{
        padding: 5px 10px;
        cursor: pointer;
        transition: 0.2s linear all;
        width: 100%;
        text-align: left;
        &:hover{
            background-color: ${colors.secondary};
            color: ${colors.white};
        }
       
    }
`

export default Category