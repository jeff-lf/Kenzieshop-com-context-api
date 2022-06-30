import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background-color: none;
        
    }

    body, input, button{
        font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 1rem;
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
` 