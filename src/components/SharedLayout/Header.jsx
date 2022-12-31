import styled from "styled-components/macro"
import { colors, sizes, transitions, breakpoints, shadows, bRadius } from '../../styled/variables'
import { useEffect, useState } from "react"
import logo from '../../assets/images/logo.png'
import { navLinks } from '../../utils/constants'
import { NavLink, useNavigate } from "react-router-dom"
import { CartIcon, BarsIcon, LoginIcon } from "../../utils/icons"
import { toggleSidebar } from "../../redux/features/layoutSlice"
import { useDispatch, useSelector } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"

const Header = () => {
    const [isShrink, setIsShrink] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { totalProducts } = useSelector((state) => {
        return state.cart;
    })
    const [openLogout, setOpenLogout] = useState(false);
    const toggleLogout = () => {
        setOpenLogout(!openLogout)
    }
    const { user } = useSelector((state) => {
        return state.user
    })

    const { loginWithRedirect, logout } = useAuth0()

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


    return (
        <Wrapper className={`${isShrink ? "shrink" : ""}`}>
            <Container className="container">
                <SidebarBtn onClick={() => {
                    dispatch(toggleSidebar());
                }}>
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
                    {user &&
                        <NavLink to="/checkout">
                            Checkout
                        </NavLink>
                    }
                </Nav>
                <UserWrapper>

                    <div className="user-item cart" onClick={() => {
                        navigate("/cart")
                    }}>
                        <CartIcon />
                        <div className="cart-total">
                            {totalProducts}
                        </div>
                    </div>
                    {user ?
                        <div className="user-item user-logout" onClick={() => {
                            toggleLogout()
                        }}>
                            <img src={user.picture} alt={user.name} className="user-thumb" />
                            {user.name}
                            {openLogout &&
                                <button className="logout-btn" onClick={() => {
                                    logout({ returnTo: window.location.origin })
                                }}>
                                    Logout
                                </button>
                            }
                        </div>
                        :
                        <div className="user-item" onClick={() => {
                            loginWithRedirect()
                        }}>
                            <LoginIcon />
                            Đăng nhập
                        </div>
                    }
                </UserWrapper>
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
    box-shadow: ${shadows.shadows_b};
    &.shrink{
        height: ${sizes.header_shrink_h};
        background-color: rgba(255,255,255,0.9);
    }
   ;
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
        font-size: 2rem;
         @media screen and (max-width: ${breakpoints.small}){
        font-size: 1.8rem;
    }
    }
    img{
        width: 2rem;
        height: 2rem;
         @media screen and (max-width: ${breakpoints.small}){
        width: 1.8rem;
    }
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
gap: 20px;
    svg{
       width: 30px;
        transition: ${transitions.linear_4};
        cursor: pointer;
       &:hover{
        color: ${colors.primary};
       }
        @media screen and (max-width: ${breakpoints.small}){
        width: 20px;
    }
    }
    .user-item{
        display: flex;
        align-items: center;
        cursor: pointer;
        font-weight: 600;
        display: flex;
        gap: 5px;
        position: relative;
        .logout-btn{
            position: absolute;
            bottom: -160%;
            right: 0;
            left: 0;
            font-weight: 600;
            padding: 5px 10px;
            border-radius: ${bRadius.b_radius_20};
            border-color: ${colors.primary};
            background-color: ${colors.white};
            color: ${colors.primary};
            &:hover{
                background-color: ${colors.primary};
                color: ${colors.white};
                border-color: ${colors.white};
            }
            
        }
        .user-thumb{
            height: 30px;
            width: 30px;
            border-radius: 50%;
        }
        &:hover{
            color: ${colors.primary};
        }
    }
    .user-item.cart{
        position: relative;

        .cart-total{
            position: absolute;
            content: "";
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: ${colors.text};
            top: -40%;
            right: -5px;
            border-radius: 50%;
            background-color: red;

            @media screen and (max-width: ${breakpoints.small}){
                font-size: 0.8rem;
                height: 1rem;
                width: 1rem;
            }
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
        @media screen and (max-width: ${breakpoints.small}){
        width: 20px;
    }
    }

`
export default Header