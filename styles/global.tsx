import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
     * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
     }

     html {
        font: 500 16px 'Roboto Slab', sans-serif;
        color: #333;
     }

     p {
        font-family: 'Montserrat', sans-serif;
        font-family: Montserrat;
        font-size: 40px;
        font-weight: 600;
        line-height: 19px;
        letter-spacing: 0px;
        text-align: left;

     }

`

export default GlobalStyle