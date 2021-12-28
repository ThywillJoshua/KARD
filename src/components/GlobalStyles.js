//Styling and Animation
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    &::-webkit-scrollbar{
    width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    }

    font-family: 'Montserrat', sans-serif;

    width: 100%;
}

h2 {
    font-size: 2.5em;
    font-family: 'Lora', serif;
    font-weight: 700;
    color: #333;
   
}

h3 {
    font-size: 1.1em;
    color: #333;
    padding: 1.5rem 0;
   
}
p {
    font-size: 0.9em;
    line-height: 200%;
    color: #696969;
   
}
a {
   text-decoration: none;
   color: #333;
}

img{
    display: block;
}

`;

export default GlobalStyles;
