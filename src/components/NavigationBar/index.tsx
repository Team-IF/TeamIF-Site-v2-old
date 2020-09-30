import React from 'react';
import styled from 'styled-components';
import NavTitle from './NavTitle';
import NavItem from './NavItem';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 75vw;
  margin: 1rem auto;
`;

const NavItemListStyle = styled.div`
  display: flex;
  flex-direction: row;
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
