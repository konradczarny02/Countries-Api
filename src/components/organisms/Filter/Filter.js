import React from 'react';
import { StyledSelect } from 'components/organisms/Filter/Filter.styles';

const Filter = () => {
  return (
    <StyledSelect>
      <option value="All" hidden>
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </StyledSelect>
  );
};

export default Filter;
