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

  width: 75vw;
  margin: 1rem auto;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    justify-content: center;
    align-items: center;
  }
`

const NavItemListStyle = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: ${SCREEN_SIZE.TABLET}) {
    display: none;
  }
`

const NavigationBar: React.FC = () => {
  return (
    <NavContainer>
      <NavTitle>
        <NoStyleLink to='/'>TeamIF</NoStyleLink>
      </NavTitle>

      <NavItemListStyle>
        <NavItem>
          <NoStyleLink to='/'>Home</NoStyleLink>
        </NavItem>
        <NavItem>
          <NoStyleLink to='/recruit'>Recruit</NoStyleLink>
        </NavItem>
      </NavItemListStyle>
    </NavContainer>
  )
}

export default NavigationBar
