import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        font-size: 62.5%;
    }

    .sr-only {
        width: 1px;
        height: 1px;
        position: absolute;
        overflow: hidden;
        
        margin: -1px;
        padding: 0px;
        border: 0;
        appearance: none;
        
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        
        border-width: 0;
    } 
  
    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
            -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
    }
  
    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
  
    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;