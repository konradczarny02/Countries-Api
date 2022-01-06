import React from 'react';
import DarkModeSwitch from 'components/molecules/DarkModeSwitch/DarkModeSwitch';
import { Wrapper } from 'components/organisms/Header/Header.styles';
import { Title } from 'components/atoms/Title/Title';

const Header = ({ changeTheme }) => {
  return (
    <Wrapper>
      <Title>Where in the world?</Title>
      <DarkModeSwitch changeTheme={changeTheme} />
    </Wrapper>
  );
};

export default Header;
