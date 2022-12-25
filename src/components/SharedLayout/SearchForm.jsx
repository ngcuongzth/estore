import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components/macro';
import { bRadius, colors } from '../../styled/variables';
import { transitions, breakpoints } from '../../styled/variables';
import { SearchIcon } from '../../utils/icons';
import { useDispatch, useSelector } from 'react-redux';
import { closeSearchForm } from '../../redux/features/layoutSlice';
import { useNavigate } from 'react-router-dom';
import { searchProduct, clearFilters, updateFilters } from '../../redux/features/filterSlice';
const SearchForm = () => {

    const [value, setValue] = useState("");
    const inputRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSearchFormOpen } = useSelector((state) => {
        return state.layout
    })
    useEffect(() => {
        inputRef.current.focus()
    }, [isSearchFormOpen])

    return (
        <Wrapper className={`${isSearchFormOpen ? "active" : ''}`}>
            <Form onSubmit={(e) => {
                return e.preventDefault();
            }}>
                <input className='input-field' value={value} onChange={(e) => {
                    setValue(e.target.value);
                }} ref={inputRef} />
                <button className="search-btn" name='search'
                    onClick={(e) => {
                        dispatch(clearFilters())
                        dispatch(searchProduct(value))
                        navigate('/store')
                        dispatch(closeSearchForm())
                        setValue("");
                        dispatch(updateFilters(e))
                    }} >
                    <SearchIcon />
                </button>
                <button onClick={() => {
                    dispatch(closeSearchForm())
                }}>
                    Close
                </button>
            </Form>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    position: fixed;
   top: 0;
   right: 0;
   left: 0;
   bottom: 0;
    background-color: ${colors.overlay};
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    opacity: 0;
    transition: ${transitions.linear_4};
    z-index: 99;

    
    &.active{
    transform: scale(1);
    opacity: 1;
    }
`
const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 10px;
    max-width: 80%;
    input{
        width: 300px;
        box-sizing: border-box;
        border-radius: ${bRadius.b_radius_10};
        padding: 10px;
        outline: none;
        border-color: transparent;
        &:focus{
            border-color: ${colors.primary};
        }
    }
    input, button{
        height: 40px;
    }
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.text};
        background-color: ${colors.secondary};
        border-radius: ${bRadius.b_radius_10};
        padding: 5px;
    }
    btn.search-btn{
        padding: 0;
    }
    svg{
        width: 30px;
        color: ${colors.text};
    }
    @media screen and (max-width: ${breakpoints.medium}){
        max-width: 90%;
    }
    
`


export default SearchForm