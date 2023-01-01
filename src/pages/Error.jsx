import error from '../assets/images/error.jpg'
import styled from 'styled-components/macro'
import { colors } from '../styled/variables'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Error = () => {
    const [count, setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(() => {
        const idSetTimeOut = setTimeout(() => {
            if (count <= 0) {
                navigate("/")
            }
            setCount((pre) => {
                if (pre <= 0) {
                    return 0
                }
                else {
                    return pre - 1
                }
            })
        }, 1000)
        return () => clearTimeout(idSetTimeOut);
    }, [count, navigate])

    return (
        <Wrapper>
            <h3>404</h3>
            <h4>Page not found!</h4>
            <p>Back to home page after {count}s</p>
            <img src={error} alt="404-error" />
        </Wrapper>
    )
}
const Wrapper = styled.main`
    padding-top: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h3{
        font-size: 6rem;
        color: ${colors.secondary};
        font-weight: 400;
        line-height: 5rem;
    }
    h4{
        font-size: 3rem;
    }
    img{
        width: 70%;
    }
`
export default Error