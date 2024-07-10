'use client'
import { GlobalStyle } from "@/styles/globals";
import { DarkTheme } from "@/styles/themes/dark";
import { useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { ButtonTheme, HeaderContainer, HeaderContent, Main, TopContainer } from "./styles";
import { LightTheme } from "@/styles/themes/light";
import { PiMoonBold, PiMoonFill } from "react-icons/pi";
import PaginatedCountries from "./components/PaginatedCountries/PaginatedCountries";
import SearchInput from "./components/SearchInput/SearchInput";
import SelectRegion from "./components/SelectRegion/SelectRegion";
import { Country } from "@/interfaces/interfaces";
import CountriesData from '@/data/data.json'

export default function Home() {
  const [theme, setTheme] = useState<DefaultTheme>(DarkTheme)
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const countries = CountriesData;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const regions = Array.from(new Set(CountriesData.map(country => country.region))).sort();
  regions.unshift('All');

  useEffect(() => {
    setFilteredCountries(selectedRegion === '' || selectedRegion === 'All' 
      ? countries
      : countries.filter(country => country.region === selectedRegion))
  }, [countries, selectedRegion])

  const toggleTheme = (theme: DefaultTheme) => {
    setTheme(theme === LightTheme ? DarkTheme : LightTheme);
  }

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setCurrentPage(1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    const filtered = countries.filter(country =>
      country.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredCountries(filtered);
  };
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
        <TopContainer>
          <SearchInput handleSearchChange={handleSearchChange} searchTerm={searchTerm}/>
          <SelectRegion selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} regions={regions} />
        </TopContainer>
        <PaginatedCountries countries={filteredCountries} currentPage={currentPage} handlePageChange={handlePageChange}/>
      </Main>
    </ThemeProvider>
    
  );
}
