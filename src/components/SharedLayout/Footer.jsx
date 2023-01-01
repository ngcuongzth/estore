import styled from "styled-components/macro"
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { footer_contacts, footer_links } from "../../utils/constants";
import bg from '../../assets/images/footer_bg.jpg';
import { bRadius, breakpoints, colors } from '../../styled/variables'

const Footer = () => {
    return (
        <Wrapper>
            <Container className="container">
                <Header>
                    <Link className="footer-link" to="/">
                        <img src={logo} alt="footer-logo" />
                        <h5>EStore</h5>
                    </Link>
                    <div className="social-links">
                        <h6>Follow our Socials</h6>
                        {footer_contacts.map((item) => {
                            const { id, link, icon } = item;
                            return <Link key={id} to={link}>
                                <img src={icon} alt={`footer-icon-${id}`} />
                            </Link>
                        })}
                    </div>
                </Header>
                <Links>
                    {
                        footer_links.map((item) => {
                            const { id, title, subLinks } = item;
                            return <Col key={id}>
                                <h3>{title}</h3>
                                <div className="links">
                                    {subLinks.map((item) => {
                                        const { id, text, link } = item;
                                        return <Link to={link} key={id}>
                                            {text}
                                        </Link>
                                    })}
                                </div>
                            </Col>
                        })
                    }
                </Links>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
    background-image: url(${bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem ;
    img{
        width: 30px;
    }
`
const Container = styled.div`
    padding: 0 2rem;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: ${breakpoints.medium}){
        display: unset;
    }
    .footer-link {
        display: flex;
        align-items: center;
        h5{
            font-size: 2rem;
            color: ${colors.primary};
            text-shadow: 4px 2px 0px rgb(30 29 39 / 20%), 1px 2px 4px rgb(54 64 158 / 37%);
        }
        img{
            width: 60px;
        }
         @media screen and (max-width: ${breakpoints.medium}){
            justify-content: center;
    }
    }
    .social-links{
        display: flex;
        gap: 5px;
        align-items: center;
        gap: 1rem;
            background-color: ${colors.bg};
            padding: 0 2rem;
            border-radius: ${bRadius.b_radius_20};
        h6{
            font-size: 1rem;
            color: ${colors.primary};
            font-weight: 600;
             @media screen and (max-width: ${breakpoints.small}){
                display: none;
    }
        }
        @media screen and (max-width: ${breakpoints.medium}){
            padding: 5px 10px;
            justify-content: center;
    }
    }

`
const Links = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 3rem;
    background-color: ${colors.bg};
    padding: 2rem;
    border-radius: ${bRadius.b_radius_20};
    row-gap: 2rem;

    @media screen and (max-width: ${breakpoints.medium}){
        grid-template-columns: repeat(2,1fr);
    }
     @media screen and (max-width: ${breakpoints.x_small}){
        grid-template-columns: repeat(1,1fr);
    }
`
const Col = styled.div`
    display: flex;
    flex-direction: column;
    color: ${colors.primary};
     @media screen and (max-width: ${breakpoints.x_small}){
        align-items: center;
    }
    h3{
        font-weight: 500;
        margin-bottom: 0.8rem;
        text-transform: capitalize;;
        @media screen and (max-width: ${breakpoints.medium}){
        font-size: 1.25rem;
    }
    }
    .links{
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        a{
            color: ${colors.title};
            font-size: 1rem;
             @media screen and (max-width: ${breakpoints.medium}){
            font-size: 0.75rem;
    }
    
            &:hover{
                color: ${colors.primary_hover};
            }
        }
}
`

export default Footer