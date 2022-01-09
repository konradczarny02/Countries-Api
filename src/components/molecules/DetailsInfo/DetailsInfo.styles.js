import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-template-columns: 100%;
  @media (min-width: 1000px) {
    grid-template-columns: repeat(2, 50%);
    display: grid;
    grid-template-rows: 10% 90%;
    grid-gap: 10px;
  }
`;

export const GeoInfo = styled.div`
  grid-column: 1/2;
`;

export const FormalInfo = styled.div`
  grid-column: 2/3;
`;
