import styled from 'styled-components';

export const Wrapper = styled.div`
  height: auto;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  transition: background-color 0.1s ease-in-out;
  background-color: ${({ theme }) => theme.background};
`;
