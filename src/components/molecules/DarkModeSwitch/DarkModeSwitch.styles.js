import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 20px;
  width: 80px;

  p {
    font-size: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }

  svg {
    stroke: red;
  }
`;
