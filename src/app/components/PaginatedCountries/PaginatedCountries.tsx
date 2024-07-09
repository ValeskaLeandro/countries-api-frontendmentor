'use client'
import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import Link from 'next/link';
import { Country } from '@/interfaces/interfaces';
import CountriesData from '@/data/data.json'
import { GridCountries, PagesContainer, TopContainer } from './styles';
import { getPageNumbers } from '@/app/utils/util';
import SelectRegion from '../SelectRegion/SelectRegion';

const ITEMS_PER_PAGE = 8;
const MAX_PAGE_NUMBERS = 7;

const PaginatedCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const regions = Array.from(new Set(CountriesData.map(country => country.region))).sort();
  regions.unshift('All');

  useEffect(() => {
    setCountries(CountriesData);
  }, []);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  
  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setCurrentPage(1);
  };
  
  const filteredCountries = selectedRegion === '' || selectedRegion === 'All' 
  ? countries
  : countries.filter(country => country.region === selectedRegion);
  
  const totalPages = Math.ceil(filteredCountries.length / ITEMS_PER_PAGE);
  
  const currentCountries = filteredCountries.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const pageNumbers = getPageNumbers({ MAX_PAGE_NUMBERS, totalPages, currentPage });

  return (
    <>
      <TopContainer>
        <input type="text" />
        <SelectRegion selectedRegion={selectedRegion} handleRegionChange={handleRegionChange} regions={regions} />
      </TopContainer>
      
      <GridCountries>
          {currentCountries.map((country) => (
            <Link href={`/${country.numericCode}`} key={country.numericCode}>
              <Card country={country}/>
            </Link>
          ))}      
      </GridCountries>
      <PagesContainer>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </button>
          ))}
      </PagesContainer>
    </>
  );
};

export default PaginatedCountries;