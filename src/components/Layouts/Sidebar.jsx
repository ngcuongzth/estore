import styled from "styled-components/macro"
import { NavLink, Link } from "react-router-dom"
import { navLinks } from "../../utils/constants"
import { colors } from "../../styled/variables"
import logo from '../../assets/images/logo.png'
const Sidebar = () => {
    return (
        <Wrapper>
            <SidebarWrap>
                <Logo>
                    <Link to="/">
                        <img src={logo} alt="logo" />
                        <h3>EStore</h3>
                    </Link>
                </Logo>
                {navLinks.map((item) => {
                    const { id, title, link } = item;
                    return <NavLink key={id} to={link}>
                        {title}
                    </NavLink>
                })}
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
`
const SidebarWrap = styled.aside`
    width: 40%;
    background-color : ${colors.bg};
    height: 100%;
`
const Logo = styled.div`
a{
    display: flex;
    justify-content: center;
}
    img{
        width: 30px;
    }
    h3{
        text-shadow: 4px 2px 0px rgb(30 29 39 / 20%), 1px 2px 4px rgb(54 64 158 / 37%);
        color: ${colors.primary};
    }
`
export default Sidebar