'use client'
import { GlobalStyle } from "@/styles/globals";
import { DarkTheme } from "@/styles/themes/dark";
import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import CountriesData from '@/data/data.json'
import { Country } from "@/interfaces/interfaces";
import Card from "./components/Card/Card";
import { ButtonTheme, GridCountries, HeaderContainer, HeaderContent, Main } from "./styles";
import { LightTheme } from "@/styles/themes/light";
import { PiMoonBold, PiMoonFill } from "react-icons/pi";
import Link from "next/link";

export default function Home() {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme)

  const countries: Country[] = CountriesData;

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
        <GridCountries>
          {countries.map(country =>         
          <Link href={`/${country.numericCode}`} key={country.numericCode}>
            <Card country={country}/>
          </Link>)}
        </GridCountries>
      </Main>
    </ThemeProvider>
    
  );
}
