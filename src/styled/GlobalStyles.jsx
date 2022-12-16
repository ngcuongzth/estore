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
`

export default GlobalStyles