// components/ThemeProviderWrapper.tsx
'use client'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "@/styles/globals";
import { DarkTheme } from "@/styles/themes/dark";
import { LightTheme } from "@/styles/themes/light";
import { DefaultTheme } from 'styled-components';
import { PiMoonBold, PiMoonFill } from "react-icons/pi";
import { ButtonTheme, HeaderContainer, HeaderContent, Main } from './styles';

export default function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<DefaultTheme>(LightTheme);

  const toggleTheme = () => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HeaderContainer>
        <HeaderContent>
          <h1>Where in the world?</h1>
          <ButtonTheme onClick={toggleTheme}>
            {theme === LightTheme ? (<PiMoonBold />) : (<PiMoonFill />)} 
            Dark Mode
          </ButtonTheme>
        </HeaderContent>
      </HeaderContainer>
      
      <Main>
        {children}
      </Main>
    </ThemeProvider>
  );
}
