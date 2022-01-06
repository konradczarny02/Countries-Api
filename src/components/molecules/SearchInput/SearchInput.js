import React from 'react';
import { ReactComponent as Loop } from 'assets/images/Loop.svg';
import { Wrapper } from 'components/molecules/SearchInput/SearchInput.styles';

const SearchInput = () => {
  return (
    <Wrapper>
      <Loop />
      <input type="text" placeholder="Search for a country..." />
    </Wrapper>
  );
};

export default SearchInput;
