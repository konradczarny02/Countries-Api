import styled from 'styled-components';

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.background};
`;
