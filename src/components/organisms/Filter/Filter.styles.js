import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 100%;

  @media (min-width: 1150px) {
    justify-content: flex-end;
    flex-basis: 35%;
    margin: 25px auto;
  }
`;

export const StyledSelect = styled.select`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 6px;
  box-shadow: 1px 4px 11px -6px rgba(0, 0, 0, 0.2);
  width: 200px;
  height: 50px;
  padding: 0 15px;

  &:focus {
    outline: none;
  }

  option {
    color: ${({ theme }) => theme.text};
  }
`;
