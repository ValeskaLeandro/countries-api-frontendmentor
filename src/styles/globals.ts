import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.textColor};
  }
`