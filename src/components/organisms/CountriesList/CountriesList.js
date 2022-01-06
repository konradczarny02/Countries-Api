import React, { useState, useEffect } from 'react';
import { API_URL } from 'helpers/API';
import Country from 'components/molecules/Country/Country';
import { Wrapper } from 'components/organisms/CountriesList/CountriesList.styles';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return <Wrapper>{countries ? countries.slice(0, 14).map((country) => <Country countryData={country} />) : null}</Wrapper>;
};

export default CountriesList;
