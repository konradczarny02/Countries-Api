import styled from 'styled-components';

export const Wrapper = styled.ul`
  padding: 0;
  max-height: 80%;
  margin: 25px auto;
  flex-basis: 90%;
  background-color: transparent;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: 1fr;
  justify-items: center;
  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
