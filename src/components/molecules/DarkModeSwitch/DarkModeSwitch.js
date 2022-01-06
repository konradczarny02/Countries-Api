import React from 'react';
import { ReactComponent as Moon } from 'assets/images/Moon.svg';
import { Wrapper } from 'components/molecules/DarkModeSwitch/DarkModeSwitch.styles';

const DarkModeSwitch = ({ changeTheme }) => {
  return (
    <Wrapper>
      <Moon onClick={changeTheme} />
      <p>Dark Mode</p>
    </Wrapper>
  );
};

export default DarkModeSwitch;
