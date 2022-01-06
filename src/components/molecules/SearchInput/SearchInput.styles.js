import styled from 'styled-components';

export const Wrapper = styled.form`
  margin: 25px 0;
  height: 50px;
  border-radius: 6px;
  width: 90%;
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
