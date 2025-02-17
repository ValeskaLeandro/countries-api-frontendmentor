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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.textColor};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.textColor};
  }
`