import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  flex-basis: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export const ContentWrapper = styled.div`
  width: 320px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  button {
    margin: 30px 0;
  }

  img {
    margin: 30px 0;
    width: 100%;
    height: 230px;
    border-radius: 6px;
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
`;
export const BorderCountry = styled.p`
  width: 100px;
  height: 30px;
  margin: 3px;
  border-radius: 6px;
  box-shadow: 1px 4px 11px -6px rgba(0, 0, 0, 0.6);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;
