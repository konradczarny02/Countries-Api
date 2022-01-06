import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;

  @media (min-width: 1150px) {
    justify-content: flex-start;
    flex-basis: 35%;
    margin: 25px auto;
  }
`;

export const SearchInputWrapper = styled.form`
  height: 50px;
  border-radius: 6px;
  width: 90%;
  max-width: 450px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  box-shadow: 1px 4px 11px -6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    margin-left: 10px;
  }

  input {
    background-color: transparent;
    border: none;
    flex-basis: 80%;
    color: ${({ theme }) => theme.textSecondary};

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${({ theme }) => theme.textSecondary};
    }
  }
`;
