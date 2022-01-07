import React, { useState, useContext, useEffect } from 'react';
import Country from 'components/molecules/Country/Country';
import { CountriesContext } from 'providers/CountriesProvider';
import { Wrapper } from 'components/organisms/CountriesList/CountriesList.styles';

const CountriesList = () => {
  const { countries, filter, searchValue } = useContext(CountriesContext);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    filter === 'All'
      ? setFilteredCountries(countries)
      : setFilteredCountries(countries.filter((country) => country.region === filter));
  }, [filter, countries]);

  return (
    <Wrapper>
      {searchValue
        ? filteredCountries
            .filter((country) => country.name.common.toLowerCase().includes(searchValue.toLowerCase()))
            .map((country) => <Country countryData={country} key={country.population.toString()} />)
        : filteredCountries.map((country) => <Country countryData={country} />)}
    </Wrapper>
  );
};

export default CountriesList;
