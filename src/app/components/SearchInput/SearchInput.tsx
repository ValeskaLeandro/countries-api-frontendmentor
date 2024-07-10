import { ISearchInput } from '@/interfaces/interfaces';
import { InputContainer, InputSearch } from './styles';
import { IoMdSearch } from 'react-icons/io';

const SearchInput = ({ searchTerm, handleSearchChange }: ISearchInput) => {
  return (
    <InputContainer>
      <IoMdSearch size={25}/>
      <InputSearch
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </InputContainer>
  );
};

export default SearchInput;
