import React, { useState } from 'react';
import { ISelectRegion } from '@/interfaces/interfaces';
import { SelectContainer, SelectHeader, SelectList, SelectListItem } from './styles'; // Importe seus estilos personalizados
import { IoIosArrowDown } from 'react-icons/io';

const SelectRegion = ({ selectedRegion, handleRegionChange, regions }: ISelectRegion) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (region: string) => {
    handleRegionChange(region);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectHeader onClick={toggleOptions}>
        {selectedRegion ? <span>{selectedRegion}</span> : <span>Filter by region</span>}
        <span><IoIosArrowDown /></span>
      </SelectHeader>
      {isOpen && (
        <SelectList>
          {regions.map((region) => (
            <SelectListItem key={region} onClick={() => handleOptionClick(region)}>
              {region}
            </SelectListItem>
          ))}
        </SelectList>
      )}
    </SelectContainer>
  );
};

export default SelectRegion;
