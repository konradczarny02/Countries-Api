import React, { useContext } from 'react';
import { CountriesContext } from 'providers/CountriesProvider';
import { StyledSelect } from 'components/organisms/Filter/Filter.styles';
import { Wrapper } from 'components/organisms/Filter/Filter.styles';

const Filter = () => {
  const { handleFilterChange } = useContext(CountriesContext);
  return (
    <Wrapper>
      <StyledSelect onChange={(event) => handleFilterChange(event.target.value)}>
        <option value="All">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </StyledSelect>
    </Wrapper>
  );
};

export default Filter;
