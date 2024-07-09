'use client'
import { GlobalStyle } from "@/styles/globals";
import { DarkTheme } from "@/styles/themes/dark";
import { LightTheme } from "@/styles/themes/light";
import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import CountriesData from '@/data/data.json'
import { Country } from "@/interfaces/interfaces";
import Card from "./components/Card/Card";
import { GridCountries, Main } from "./styles";

export default function Home() {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme)

  const countries: Country[] = CountriesData;
  const toggleTheme = (theme: DefaultTheme) => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
        <button onClick={() => toggleTheme(theme)}>Tema</button>
        <GridCountries>
          {countries.map(country =>         
          <div key={country.numericCode}>
            <Card country={country}/>
          </div>)}
        </GridCountries>
      </Main>
    </ThemeProvider>
    
  );
}
