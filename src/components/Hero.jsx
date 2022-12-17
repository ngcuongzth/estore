import styled from 'styled-components/macro'
import { themes, colors, bRadius, transitions, breakpoints } from '../styled/variables'
import { useNavigate } from 'react-router-dom'
import { heroVideos } from '../utils/constants'
import { PlayIcon, BagIcon } from '../utils/icons'
import hero_img from '../assets/images/hero-img.png';
import { Link } from 'react-router-dom'
import { socialLinks } from './../utils/constants';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <Wrapper className='override'>
            <Title>
                <h1>
                    Play With Electric Nike
                </h1>
                <h1>
                    Adapt 2.0 Sneakers
                </h1>
                <button onClick={() => {
                    navigate('/store')
                }}>
                    <span>Start Shopping</span>
                    <BagIcon />
                </button>
            </Title>
            <Description>
                <Videos>
                    {heroVideos.map((item) => {
                        const { id, img, video } = item;
                        return <div className="video" key={id}>
                            <img src={img} alt="img" />
                            <div className="play-btn">
                                <PlayIcon />
                            </div>
                            <video autoPlay loop playsInline>
                                <source type="video/mp4" src={video} />
                            </video>
                        </div>
                    })}
                </Videos>
                <Product>
                    <img src={hero_img} alt="hero-img" />
                </Product>
                <Links>
                    {socialLinks.map((item) => {
                        const { id, link, icon, title } = item;
                        return <Link to={link} key={id}>
                            <img src={icon} alt={title} />
                        </Link>
                    })}
                </Links>
            </Description>
        </Wrapper>
    )
}
const Wrapper = styled.section`
    padding: 0 2rem;
    background-image: ${themes.hero};
    padding-bottom: 100px;
    margin-bottom: 2rem;
    &.override{
        margin-top: 50px;
    }
    svg{
        width: 30px;
    }
`

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 40px;
    h1{
        font-size: 4rem;
        line-height: 4rem;
        color: rgba(226,232,240);
        font-weight: 600;
        text-align: center;
    @media screen and (max-width: ${breakpoints.large}){
            font-size: 3rem;
            line-height: 3rem;
    }
    @media screen and (max-width: ${breakpoints.medium}){
            font-size: 2rem;
            line-height: 2rem;
    }
    }
        button{
            text-transform: uppercase;
            letter-spacing: 2px;
            border-top: 1px;
            border-right: 1px;
            padding: 0.75rem 1.75rem;
            border-radius: ${bRadius.b_radius_20};
            background-color: ${colors.secondary};
            color: ${colors.white};
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.4rem;
            box-shadow: 0 4px 6px 1px rgb(0 0 0 / 0.1) , 0 2px 4px 2px rgb(0 0 0 / 0.1);
            font-size: 1rem;
            margin: 2rem;
            @media screen and (max-width: ${breakpoints.small}){
                font-size: 0.8rem;
                padding: 0.5rem 1.5rem;
            } 
            svg{
                width: 1.5rem;
            }
            &:hover{
                background-color: transparent;
                border-color: ${colors.white};
                color: ${colors.white};
            }
        }
`

const Description = styled.div`
    display: grid;
    grid-template-columns: 2fr 8fr 2fr;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    @media screen and (max-width: ${breakpoints.large}){
        grid-template-columns: 2fr 8fr 1fr;
    }
    @media screen and (max-width: ${breakpoints.small}){
        grid-template-columns: 2fr 8fr 2fr;
    }
`

const Videos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    gap: 1rem;
    @media screen and (max-width: ${breakpoints.large}){
        align-items: flex-start;
    }

.play-btn{
    background-color: ${colors.bg};
    svg{
        color: ${colors.primary};
    }
}

.video{
        border-radius: ${bRadius.b_radius_20};
        width: 125px;
        height: 125px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        cursor: pointer;
        @media screen and (max-width: ${breakpoints.large}){
            width: 100px;
            height: 100px;
        border-radius: ${bRadius.b_radius_10};
            
        }
        @media screen and (max-width: ${breakpoints.medium}){
            width: 80px;
            height: 80px;
        }
        @media screen and (max-width: ${breakpoints.small}){
            width: 60px;
            height: 60px;
        }
        &:hover{
            img{
                opacity: 0;
            }
        }
        img{
            width: 100%;
            height: 100%;
            position: absolute;
            top:0;
            bottom: 0;
            z-index: 20;
            transition: ${transitions.linear_4};
        }
        .play-btn{
            position: absolute;
            z-index: 20;
            background-color: transparent;
            border-radius: 999px;
            svg{
                color: ${colors.white};
            }
        }
        video{
           position: absolute;
           z-index: 1;
           height: 100%;
           width: 100%;
           object-fit: cover;
        }
       
    }
`

const Product = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        cursor: pointer;
        transition: ${transitions.linear_4};
        transform: rotate(-25deg);
        &:hover{
            transform: rotate(0);
        }
    }
`

const Links = styled.div`
    img{
        width: 2rem;
        height: 2rem;
    }
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-end;
`
export default Hero
