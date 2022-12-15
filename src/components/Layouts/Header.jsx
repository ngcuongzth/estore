import styled from "styled-components"
import { colors, sizes, transitions, breakpoints } from '../../styled/variables'
import { useEffect, useState } from "react"
import logo from '../../assets/images/logo.png'
import { navLinks } from '../../utils/constants'
import { NavLink, useNavigate } from "react-router-dom"
import { UserIcon, SearchIcon, CartIcon, BarsIcon } from "../../utils/icons"
import SearchForm from "../SearchForm"

const Header = () => {
    const [isShrink, setIsShrink] = useState(false);
    const [isOpenForm, setIsOpenForm] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.scrollTop > 80 ||
                document.documentElement.scrollTop > 80) {
                if (!isShrink) {
                    setIsShrink(true);
                }
            }
            else {
                setIsShrink(false)
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        }
    }, [isShrink])

    const closeSearchForm = () => {
        setIsOpenForm(false);
    }
    return (
        <Wrapper className={`${isShrink ? "shrink" : ""}`}>
            <Container className="container">
                <SidebarBtn>
                    <BarsIcon />
                </SidebarBtn>
                <Logo onClick={() => {
                    navigate('/')
                }}>
                    <img src={logo} alt="mui-logo" />
                    <h1>EStore</h1>
                </Logo>
                <Nav>
                    {navLinks.map((item) => {
                        const { id, title, link } = item;
                        return <NavLink key={id} to={link}>
                            {title}
                        </NavLink>
                    })}
                </Nav>
                <UserWrapper>
                    <div className="user-item" onClick={() => {
                        setIsOpenForm(true);
                    }}>
                        <SearchIcon />
                    </div>
                    <div className="user-item">
                        <UserIcon />
                    </div>
                    <div className="user-item">
                        <CartIcon />
                    </div>
                </UserWrapper>
                <SearchForm handleClose={closeSearchForm} isOpen={isOpenForm} />
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    height: ${sizes.header_h};
    width: 100%;
    z-index: 99;
    background-color: ${colors.white};
    transition: ${transitions.linear_4};
    display: flex;
    align-items: center;
    &.shrink{
        height: ${sizes.header_shrink_h};
        background-color: ${colors.bg};
    }
`
const Container = styled.div`
    padding: 0 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`
const Logo = styled.div`
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    h1{
        text-shadow: 4px 2px 0px rgb(30 29 39 / 20%), 1px 2px 4px rgb(54 64 158 / 37%);
        color: ${colors.primary};
    }
    img{
        width: 2rem;
        height: 2rem;
    }
`
const Nav = styled.nav`
    display: flex;
    gap: 20px;
    a{
        font-size: 1.25rem; // 20px
        font-weight: 500;
        position: relative;
        &::after{
            content: "";
            position: absolute;
            bottom: -4px;
            right: 0;
            left: 0;
            height: 2px;
            background-color: ${colors.primary};
            width: 0;
            transition: ${transitions.linear_4};
        }
    }
    .active{
        color: ${colors.primary};
        &::after{
            width: 100%;
        }
    }
    @media screen and (max-width: ${breakpoints.large}){
        display: none;
    }
`

const UserWrapper = styled.div`
display: flex;
gap: 10px;
    svg{
       width: 30px;
        transition: ${transitions.linear_4};
        cursor: pointer;
       &:hover{
        color: ${colors.primary};
       }
    }
`
const SidebarBtn = styled.button`
    display: none;
    @media screen and (max-width: ${breakpoints.large}){
        display: block;
    }
    svg{
        width: 30px;
        transition: ${transitions.linear_4};
        cursor: pointer;
       &:hover{
        color: ${colors.primary};
       }
    }
  
`
export default Header