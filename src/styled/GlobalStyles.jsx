import { createGlobalStyle } from "styled-components";
import { fontFamily, colors, transitions, sizes, breakpoints } from "./variables";
const GlobalStyles = createGlobalStyle`
     *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        font: inherit;
        letter-spacing: 1px ;
        transition: ${transitions.linear_4};
    }
    body{
        font-family: ${fontFamily};
        font-weight: 400;
        line-height: 1.5;
    }
     img, svg{
        display: block;
        max-width: 100%;
    }
     p, h1, h2, h3, h4, h5, h6{
        overflow-wrap: break-word;
    }
    p, h5, a{
        font-size: 1rem;
    }
    h4{
        font-size: 1.25rem; //20px
    }
    h3{
        font-size: 1.5rem; // 24px;
    }
    h2{
        font-size: 1.75rem; // 28px
    }
    h1{
        font-size: 2rem; // 32px;
        line-height: normal;
    }
    ul, li{
        list-style-type: none;
    }
    a{
        text-decoration: none;
        cursor: pointer;
        line-height: normal;
        color: inherit;
        transition: ${transitions.linear_4};
    }
    button{
        outline: none;
        background-color: transparent;
        cursor: pointer;
        border-color: transparent;
    }
    .shrink{
        height: ${sizes.header_shrink_h};
    }
    .container{
        max-width: ${breakpoints.extra_large};
        margin: 0 auto;
    }
    .scroll-custom{
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        align-items: center;
        transform: scale(0.9);
        transition: all 0.3s linear 0s;
        box-shadow: 0 9px 25px 0 rgb(1 88 198 / 89%);
        svg{
            width: 30px;
            height: 30px;
        }
        &:hover{
            transform: scale(1);
            box-shadow: rgb(255 0 0 / 30%) 0px 0px 7px 8px;
        }
    }
    
  
  .loader {
    width: 56px;
    height: 56px;
    position: relative;
  }

  .circle {
    width: 14px;
    height: 14px;
    position: absolute;
    border-radius: 50%;
    background-color: #ff3e00;
    left: 0;
    animation: circle 0.5s alternate infinite ease;
  }

  .circle:nth-child(2) {
    left: 35%;
    animation-delay: 0.2s;
  }

  .circle:nth-child(3) {
    left: auto;
    right: 0;
    animation-delay: 0.3s;
  }

  .shadow {
    width: 14px;
    height: 4px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 35px;
    transform-origin: 50%;
    z-index: -1;
    left: 0;
    filter: blur(1px);
    animation: shadow 0.5s alternate infinite ease;
  }

  .shadow:nth-child(4) {
    left: 35%;
    animation-delay: 0.2s;
  }
  .shadow:nth-child(5) {
    left: auto;
    right: 0;
    animation-delay: 0.3s;
  }

  @keyframes circle {
    0% {
      top: 30px;
      height: 5px;
      border-radius: 50px 50px 25px 25px;
      transform: scaleX(1.7);
    }
    40% {
      height: 20px;
      border-radius: 50%;
      transform: scaleX(1);
    }
    100% {
      top: 0%;
    }
  }

  @keyframes shadow {
    0% {
      transform: scaleX(1.5);
    }
    40% {
      transform: scaleX(1);
      opacity: 0.7;
    }
    100% {
      transform: scaleX(0.2);
      opacity: 0.4;
    }
  }




`

export default GlobalStyles