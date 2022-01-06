import React, { useState, useEffect } from 'react';
import { API_URL } from 'helpers/API';

export const CountriesContext = React.createContext({
  countries: [],
  filter: '',
  handleFilterChange: () => {},
});

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

  return <CountriesContext.Provider value={{ countries, filter, handleFilterChange }}>{children}</CountriesContext.Provider>;
};

export default CountriesProvider;
