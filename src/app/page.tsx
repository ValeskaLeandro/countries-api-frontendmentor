'use client'
import { GlobalStyle } from "@/styles/globals";
import { DarkTheme } from "@/styles/themes/dark";
import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { ButtonTheme, HeaderContainer, HeaderContent, Main } from "./styles";
import { LightTheme } from "@/styles/themes/light";
import { PiMoonBold, PiMoonFill } from "react-icons/pi";
import PaginatedCountries from "./components/PaginatedCountries/PaginatedCountries";

export default function Home() {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme)

  const toggleTheme = (theme: DefaultTheme) => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  }
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderContent>
          <h1>Where in the world?</h1>
          <ButtonTheme onClick={() => toggleTheme(theme)}>
            {theme === LightTheme ? (<PiMoonBold />) : (<PiMoonFill />)} 
            Dark Mode
          </ButtonTheme>
        </HeaderContent>
      </HeaderContainer>
      <Main>        
        <PaginatedCountries />
      </Main>
    </ThemeProvider>
    
  );
}
