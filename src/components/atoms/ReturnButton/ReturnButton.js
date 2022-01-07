import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReturnIcon } from 'assets/images/ReturnIcon.svg';

const Wrapper = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 4px 11px -6px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const ReturnButton = ({ handleReturnToHome }) => {
  return (
    <Wrapper onClick={() => handleReturnToHome()}>
      <ReturnIcon />
      <p>Back</p>
    </Wrapper>
  );
};

export default ReturnButton;
