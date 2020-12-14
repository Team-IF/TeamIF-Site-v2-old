import React from 'react'
import styled from 'styled-components'
import Logo from '../../assets/logo.png'
import SCREEN_SIZE from '../../utils/ScreenSize'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  background-color: var(--color-teamif);
  width: 150px;
  height: 64px;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    width: 120px;
  }
`

const ImageStyle = styled.img`
  width: 80px;
  height: 80px;

  margin-left: -20px;
  margin-top: -8px;

  cursor: pointer;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    margin-left: -14px;
  }
`

const NavTitle: React.FC = () => {
  return (
    <Wrapper>
      <ImageStyle src={Logo} />
    </Wrapper>
  )
}

export default NavTitle
