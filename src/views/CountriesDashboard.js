import React from 'react';
import { Wrapper } from 'views/CountriesDashboard.styles';
import Header from 'components/organisms/Header/Header';
import CountriesList from 'components/organisms/CountriesList/CountriesList';
import SearchInput from 'components/molecules/SearchInput/SearchInput';
import Filter from 'components/organisms/Filter/Filter';

const CountriesDashboard = ({ changeTheme }) => {
  return (
    <Wrapper>
      <Header changeTheme={changeTheme} />
      <SearchInput />
      <Filter />
      <CountriesList />
    </Wrapper>
  );
};

export default CountriesDashboard;
