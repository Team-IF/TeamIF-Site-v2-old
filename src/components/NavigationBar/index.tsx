import React from 'react'
import styled from 'styled-components'
import NavTitle from './NavTitle'
import NavItem from './NavItem'
import SCREEN_SIZE from '../../utils/ScreenSize'
import NoStyleLink from '../../atomics/NoStyleLink'

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background: #201D20;

  height: 4rem;
`

const NavItemListStyle = styled.div`
  display: flex;
  flex-direction: row;

  margin-right: 20px;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    display: none;
  }
`

const NavigationBar: React.FC = () => {
  return (
    <NavContainer>
      <NoStyleLink to='/'>
        <NavTitle />
      </NoStyleLink>

      <NavItemListStyle>
        <NavItem>
          <NoStyleLink to='/'>Home</NoStyleLink>
        </NavItem>
        <NavItem>
          <NoStyleLink to='/about'>About</NoStyleLink>
        </NavItem>
        <NavItem>
          <NoStyleLink to='/recruit'>Recruit</NoStyleLink>
        </NavItem>
      </NavItemListStyle>
    </NavContainer>
  )
}

export default NavigationBar
