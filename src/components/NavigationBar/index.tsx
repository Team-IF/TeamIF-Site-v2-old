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
      <NavTitle>TeamIF</NavTitle>

      <NavItemListStyle>
        <NavItem>About</NavItem>
        <NavItem>Project</NavItem>
        <NavItem>Member</NavItem>
        <NavItem>Recruit</NavItem>
      </NavItemListStyle>
    </NavContainer>
  );
};

export default NavigationBar;
