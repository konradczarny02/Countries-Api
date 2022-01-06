import React from 'react';
import { Wrapper } from 'views/CountriesDashboard.styles';
import Header from 'components/organisms/Header/Header';
import CountriesList from 'components/organisms/CountriesList/CountriesList';
import SearchInput from 'components/molecules/SearchInput/SearchInput';
import Filter from 'components/organisms/Filter/Filter';
import CountriesProvider from 'providers/CountriesProvider';

const CountriesDashboard = ({ changeTheme }) => {
  return (
    <Wrapper>
      <Header changeTheme={changeTheme} />
      <CountriesProvider>
        <SearchInput />
        <Filter />
        <CountriesList />
      </CountriesProvider>
    </Wrapper>
  );
};

export default CountriesDashboard;
