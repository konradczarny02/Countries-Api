import styled from 'styled-components';

export const Wrapper = styled.li`
  height: 336px;
  width: 264px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  list-style: none;
  border-radius: 6px;
  box-shadow: 1px 4px 11px -6px rgba(0, 0, 0, 0.2);

  img {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 100%;
    height: 50%;
  }
`;

export const Description = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 15px;

  h3 {
    font-size: 16px;
    font-weight: 800;
    color: ${({ theme }) => theme.text};
  }
  p {
    font-size: 14px;
    color: ${({ theme }) => theme.text};
    margin: 2px;
    font-weight: 600;
  }
  span {
    font-weight: 300;
    color: ${({ theme }) => theme.text};
  }
`;
