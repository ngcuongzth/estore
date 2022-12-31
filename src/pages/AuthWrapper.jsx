import React from 'react'
import styled from 'styled-components/macro'
import { useAuth0 } from '@auth0/auth0-react'
import { colors } from '@mui/material'
const AuthWrapper = ({ children }) => {

    const { isLoading, error } = useAuth0()

    if (isLoading) {
        return <Wrapper>
            <div className="loader">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="shadow" />
                <div className="shadow" />
                <div className="shadow" />
            </div>
        </Wrapper >
    }
    if (error) {
        return <Wrapper>
            <h1>{error.message}</h1>
        </Wrapper>
    }
    return (
        <> {children}</>
    )
}


const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    background-color: #ffffff89;
    .loader{
        color: red;
    }
`
export default AuthWrapper