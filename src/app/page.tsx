'use client'
import { GlobalStyle } from "@/styles/globals";
import { DarkTheme } from "@/styles/themes/dark";
import { LightTheme } from "@/styles/themes/light";
import { useState } from "react";
import styled, { DefaultTheme, ThemeProvider } from "styled-components";

export default function Home() {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme)
  const Main = styled.main`
   
  `

const toggleTheme = (theme: DefaultTheme) => {
  setTheme(theme === LightTheme ? DarkTheme : LightTheme);
}
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
      <button onClick={() => toggleTheme(theme)}>Tema</button>
        Olá, mundo!
      </Main>
    </ThemeProvider>
    
  );
}
