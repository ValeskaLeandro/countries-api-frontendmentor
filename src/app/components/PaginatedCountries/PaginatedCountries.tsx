'use client'
import Card from '../Card/Card';
import Link from 'next/link';
import { IPaginatedCountries } from '@/interfaces/interfaces';
import { GridCountries, PagesContainer } from './styles';
import { getPageNumbers } from '@/app/utils/util';

const ITEMS_PER_PAGE = 8;
const MAX_PAGE_NUMBERS = 7;

const PaginatedCountries = ({ countries, currentPage, handlePageChange }: IPaginatedCountries) => {
  const totalPages = Math.ceil(countries.length / ITEMS_PER_PAGE);
  
   const currentCountries = countries.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const pageNumbers = getPageNumbers({ MAX_PAGE_NUMBERS, totalPages, currentPage });

  return (
    <>     
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