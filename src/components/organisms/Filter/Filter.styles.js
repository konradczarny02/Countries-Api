import styled from 'styled-components';

export const StyledSelect = styled.select`
  margin: 25px 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
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
    width: 100%;
    height: 50px;
  }
`;
