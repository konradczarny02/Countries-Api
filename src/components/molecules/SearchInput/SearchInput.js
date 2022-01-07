import React, { useContext, useState } from 'react';
import { ReactComponent as Loop } from 'assets/images/Loop.svg';
import { SearchInputWrapper, Wrapper } from 'components/molecules/SearchInput/SearchInput.styles';
import { CountriesContext } from 'providers/CountriesProvider';

const SearchInput = () => {
  const { handleSearchCountry } = useContext(CountriesContext);
  return (
    <Wrapper>
      <SearchInputWrapper>
        <Loop />
        <input type="text" placeholder="Search for a country..." onChange={(event) => handleSearchCountry(event.target.value)} />
      </SearchInputWrapper>
    </Wrapper>
  );
};

export default SearchInput;
