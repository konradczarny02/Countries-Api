import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    padding: 0;
    margin: 0;
  }

  *, *::after, *::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
  }

  a, button {
    font-family: 'Nunito Sans', sans-serif;
  }
`;
