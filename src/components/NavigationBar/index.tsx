import React from 'react';
import styled from 'styled-components';
import NavTitle from './NavTitle';
import NavItem from './NavItem';
import SCREEN_SIZE from '../../utils/ScreenSize';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 75vw;
  margin: 1rem auto;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    justify-content: center;
    align-items: center;
  }
`;

const NavItemListStyle = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    display: none;
  }
`;

const NavigationBar: React.FC = () => {
  return (
    <NavContainer>
      <NavTitle>
        <a href="/">TeamIF</a>
      </NavTitle>

      <NavItemListStyle>
        <NavItem>
          <a href="#project">Project</a>
        </NavItem>
        <NavItem>
          <a href="#member">Member</a>
        </NavItem>
        <NavItem>
          <a href="#recruit">Recruit</a>
        </NavItem>
      </NavItemListStyle>
    </NavContainer>
  );
};

export default NavigationBar;
