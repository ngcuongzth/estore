import styled from "styled-components/macro"
import { NavLink, Link } from "react-router-dom"
import { navLinks } from "../../utils/constants"
import { colors, breakpoints, bRadius, transitions, shadows } from "../../styled/variables"
import logo from '../../assets/images/logo.png'
import { CartIcon, CloseIcon, LoginIcon } from '../../utils/icons'
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar } from "../../redux/features/layoutSlice"
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from "react-router-dom"
const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isSidebarOpen } = useSelector((state) => {
        return state.layout;
    })
    const { user } = useSelector((state) => {
        return state.user;
    })
    const { loginWithRedirect, logout } = useAuth0()
    return (
        <Wrapper className={`${isSidebarOpen ? "active" : ""}`}
            onClick={() => {
                dispatch(toggleSidebar())
            }}
        >
            <SidebarWrap onClick={(e) => {
                e.stopPropagation()
            }}>
                <CloseBtn onClick={() => {
                    dispatch(toggleSidebar())
                }}>
                    <CloseIcon />
                </CloseBtn>
                <Logo>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                        <h3>EStore</h3>
                    </Link>
                </Logo>
                <SidebarLinks>
                    {navLinks.map((item) => {
                        const { id, title, link, icon: Icon } = item;
                        return <NavLink key={id} to={link} onClick={() => {
                            dispatch(toggleSidebar())
                        }}>
                            <Icon />
                            {title}
                        </NavLink>
                    })}
                </SidebarLinks>
                <UserLinks>
                    <button onClick={() => {
                        dispatch(toggleSidebar())
                        navigate('/cart')
                    }}>
                        <CartIcon />
                        <span>Cart</span>
                    </button>
                    {user ?
                        <button onClick={() => {
                            logout()
                            dispatch(toggleSidebar())
                        }}>
                            <img src={user.picture} alt={user.name} />
                            <span>Logout</span>
                        </button>
                        :
                        <button onClick={() => {
                            loginWithRedirect()
                            dispatch(toggleSidebar())
                        }}>
                            <LoginIcon />
                            <span>Login</span>
                        </button>

                    }

                </UserLinks>
            </SidebarWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    background-color: ${colors.overlay};
    backdrop-filter: blur(4px);
    transform: translateX(-100%);
    transition: ${transitions.linear_4};
    &.active{
        transform: translateX(0);
    }
    img, svg{
        width: 30px;
    }
    img{
        border-radius: 50%;
    }
    @media screen and (max-width: ${breakpoints.medium}){
        svg{
            display: none;
        }
    }
`
const SidebarWrap = styled.aside`
    width: 50%;
    background-color : ${colors.white};
    height: 100%;
    position: relative;
    box-shadow: ${shadows.shadows_r};
    @media screen and (max-width: ${breakpoints.small}){
        width: 70%;
    }
`
const Logo = styled.div`
    padding-top: 40px;
    a{
        display: flex;
        justify-content: center;
       margin-top: 10px;
       margin-bottom: 20px;
    }
    img{
        width: 40px;
    }
    h3{
        text-shadow: 4px 2px 0px rgb(30 29 39 / 20%), 1px 2px 4px rgb(54 64 158 / 37%);
        color: ${colors.primary};
        font-size: 2rem;
    }
`

const SidebarLinks = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    @media screen and (max-width: ${breakpoints.medium}){
        gap: 1rem;
    }
    a{
        padding: 0.5rem 1rem;
        margin: 0 2rem;
        color: ${colors.black};
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        background-color: transparent;
        border-radius: ${bRadius.b_radius_10};
        &:hover{
            color: ${colors.white};
            background-color: ${colors.primary};
        }
    }
`

const UserLinks = styled.div`
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1.25rem;
    display: flex;
    @media screen and (max-width: ${breakpoints.medium}){
        gap: 1rem;
        margin-top: 1rem;
    }
button{
    padding: 0.5rem 1rem;
        color: ${colors.black};
        font-weight: 500;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
        margin: 0 2rem;
        &:hover{
            color: ${colors.primary};
        }
        background-color: transparent;
        border-radius: ${bRadius.b_radius_10};
        &:hover{
            color: ${colors.white};
            background-color: ${colors.primary};
        }
}

`

const CloseBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
    svg{
        transition: ${transitions.linear_4};
    }
    &:hover{
        svg{
            color: ${colors.primary};
        }
    }
`
export default Sidebar