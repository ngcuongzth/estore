import styled from 'styled-components/macro'
import aboutHero from '../assets/images/about.jpg'
import { bRadius, breakpoints, colors } from '../styled/variables'

const About = () => {

    return (
        <Wrapper>
            <div className="container">
                <Hero src={aboutHero} alt="about-hero" />
                <Desc>
                    <div className="title">
                        <h3>Our Story</h3>
                        <div className="underline"></div>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                </Desc>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.main`
    padding-top: 100px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    .container{
        padding: 3rem 2rem;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap: 2rem;
        @media screen and (max-width: ${breakpoints.large}){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
`

const Hero = styled.img`
    border-radius: ${bRadius.b_radius_5};
    object-fit: cover;
    height: 500px;
      @media screen and (max-width: ${breakpoints.large}){
           width: 100%;
        }
`

const Desc = styled.div`
    .title{
        h3{
            font-size: 2.5rem;
            color: ${colors.title};
            font-weight: 500;
        }
        .underline{
            width: 6rem;
            height: 3px;
            background-color: ${colors.primary};

        }
        margin-bottom: 2rem;
    }
    p{
        font-size: 0.9rem;
        color: ${colors.title};
        letter-spacing: 1px;
        line-height: 1.5;
    }
`
export default About