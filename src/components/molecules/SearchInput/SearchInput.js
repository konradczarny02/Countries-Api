import React, { useState } from 'react';
import { ReactComponent as Loop } from 'assets/images/Loop.svg';
import { SearchInputWrapper, Wrapper } from 'components/molecules/SearchInput/SearchInput.styles';

const SearchInput = () => {
  return (
    <Wrapper>
      <SearchInputWrapper>
        <Loop />
        <input type="text" placeholder="Search for a country..." />
      </SearchInputWrapper>
    </Wrapper>
  );
};

export default SearchInput;
