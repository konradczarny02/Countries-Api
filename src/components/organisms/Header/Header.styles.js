import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  height: 80px;
  padding: 0 16px;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 4px 11px -6px rgba(0, 0, 0, 0.2);
`;
