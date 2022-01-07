import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import CountriesDashboard from 'views/CountriesDashboard';
import CountriesProvider from 'providers/CountriesProvider';
import CountryDetails from 'views/CountryDetails';

const Root = () => {
  const [themeMode, setThemeMode] = useState('light');

  const changeTheme = () => (themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light'));

  return (
    <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>
      <Router>
        <GlobalStyles />
        <CountriesProvider>
          <Routes>
            <Route path="countries" element={<CountriesDashboard changeTheme={changeTheme} />} />
            <Route path="countries/details/:name" element={<CountryDetails changeTheme={changeTheme} />} />
            <Route path="/" element={<Navigate to="countries" />} />
          </Routes>
        </CountriesProvider>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
