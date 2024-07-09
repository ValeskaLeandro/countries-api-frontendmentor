import { IGetPageNumbers } from "@/interfaces/interfaces";

export const getPageNumbers = ({MAX_PAGE_NUMBERS, totalPages, currentPage}: IGetPageNumbers) => {
  let startPage: number, endPage: number;
  
  if (totalPages <= MAX_PAGE_NUMBERS) {
    startPage = 1;
    endPage = totalPages;
  } else {
    if (currentPage <= Math.floor(MAX_PAGE_NUMBERS / 2)) {
      startPage = 1;
      endPage = MAX_PAGE_NUMBERS;
    } else if (currentPage + Math.floor(MAX_PAGE_NUMBERS / 2) >= totalPages) {
      startPage = totalPages - MAX_PAGE_NUMBERS + 1;
      endPage = totalPages;
    } else {
      startPage = currentPage - Math.floor(MAX_PAGE_NUMBERS / 2);
      endPage = currentPage + Math.floor(MAX_PAGE_NUMBERS / 2);
    }
  }

  return Array.from({ length: (endPage - startPage + 1) }, (_, index) => startPage + index);
};