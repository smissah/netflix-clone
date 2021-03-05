import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html, body {
    font-size: 62.5%;
font-family: "Helvetica Neue",Helvetica, Arial, sans-serif;
-webkit-font-smoothing:antialiased;
-moz-osx-font-smoothing: grayscale;
background: black;
color: #fff;






}



 /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: red;
} 

`;
