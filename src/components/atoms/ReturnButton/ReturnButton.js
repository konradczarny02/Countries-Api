import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ReturnIcon } from 'assets/images/ReturnIcon.svg';

const Wrapper = styled.div`
  flex-basis: 100%;
`;

const ButtonWrapper = styled.button`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  border-radius: 6px;
  box-shadow: 1px 4px 11px -6px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.backgroundSecondary};

  svg {
    stroke: ${({ theme }) => theme.text};
  }

  p {
    color: ${({ theme }) => theme.text};
  }
`;

const ReturnButton = ({ handleReturnToHome }) => {
  return (
    <Wrapper>
      <ButtonWrapper onClick={() => handleReturnToHome()}>
        <ReturnIcon />
        <p>Back</p>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default ReturnButton;
