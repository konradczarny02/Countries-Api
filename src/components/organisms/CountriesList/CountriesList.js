import React, { useState, useContext, useEffect } from 'react';
import Country from 'components/molecules/Country/Country';
import { CountriesContext } from 'providers/CountriesProvider';
import { Wrapper } from 'components/organisms/CountriesList/CountriesList.styles';

const CountriesList = () => {
  const { countries, filter } = useContext(CountriesContext);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    console.log('hi');
    filter === 'All'
      ? setFilteredCountries(countries)
      : setFilteredCountries(countries.filter((country) => country.region === filter));
  }, [filter, countries]);

  return (
    <Wrapper>
      {filteredCountries
        ? filteredCountries.map((country) => <Country countryData={country} key={country.name.common} />)
        : countries.map((country) => <Country countryData={country} key={country.name.common} />)}
    </Wrapper>
  );
};

export default CountriesList;
