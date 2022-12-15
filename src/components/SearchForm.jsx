import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { colors } from '../styled/variables';
import { transitions, breakpoints } from '../styled/variables';
import { SearchIcon } from '../utils/icons';
const SearchForm = ({ handleClose, isOpen }) => {
    const [value, setValue] = useState("");
    return (
        <Wrapper className={`${isOpen ? "active" : ''}`}>
            <Form>
                <TextField size='small' variant="outlined" className='input-field' value={value} onChange={(e) => {
                    setValue(e.target.value);
                }} />
                <Button className="search-btn" variant="contained">
                    <SearchIcon />
                </Button>
                <Button onClick={() => {
                    handleClose()
                }}>
                    Close
                </Button>
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
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    opacity: 0;
    transition: ${transitions.linear_4};
    
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
    padding: 30px;
    background-color: ${colors.bg};
    border-radius: 10px;
    max-width: 80%;
    input{
        width: 300px;
        box-sizing: border-box;
    }
    input, button{
        height: 40px;
    }
    svg{
        width: 20px;
    }
    @media screen and (max-width: ${breakpoints.medium}){
        padding: 15px;
        width: 90%;
        input, button{
            height: 30px;
        }
        button{
            width: 30px;
        }
    }
    
`

export default SearchForm