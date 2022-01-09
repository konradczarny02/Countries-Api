import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export const ContentWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-wrap: wrap;

  button {
    margin: 20px 0;
  }

  img {
    width: 100%;
    height: 230px;
    border-radius: 6px;
  }

  @media (min-width: 1000px) {
    width: 90%;

    img {
      width: 400px;
      height: 300px;
      margin-right: 100px;

      @media (min-width: 1400px) {
        width: 560px;
        height: 400px;
      }
    }
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-rows: 75% 25%;

  @media (min-width: 1000px) {
    grid-template-rows: 60% 40%;
  }
`;

export const InfoParagraph = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.text};

  span {
    font-weight: 300;
  }
}
`;
export const BorderCountriesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  p {
    color: ${({ theme }) => theme.text};
  }

  h1 {
    margin-right: 5px;
  }
`;
export const BorderCountry = styled.p`
  width: 100px;
  height: 25px;
  margin: 3px;
  border-radius: 4px;
  box-shadow: 1px 4px 11px -6px rgba(0, 0, 0, 0.6);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;
