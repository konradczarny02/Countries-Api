import React, { useState } from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import CountriesDashboard from 'views/CountriesDashboard';
import CountriesProvider from 'providers/CountriesProvider';

const Root = () => {
  const [themeMode, setThemeMode] = useState('light');

  const changeTheme = () => (themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light'));

  return (
    <ThemeProvider theme={themeMode === 'light' ? theme.light : theme.dark}>
      <GlobalStyles />
      <CountriesProvider>
        <CountriesDashboard changeTheme={changeTheme} />
      </CountriesProvider>
    </ThemeProvider>
  );
};

export default Root;
