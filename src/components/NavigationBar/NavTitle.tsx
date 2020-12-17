import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import SCREEN_SIZE from '../../utils/ScreenSize'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-teamif);
  width: 150px;
  height: 64px;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    width: 120px;
  }
`

const StyledLogo = styled(Logo)`
  width: 76px;
  height: 76px;

  margin-left: -10px;
  margin-top: 5px;

  cursor: pointer;

  fill: white;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    margin-left: -9px;
  }
`

const NavTitle: React.FC = () => {
  return (
    <Wrapper>
      <div>
        <StyledLogo />
      </div>
    </Wrapper>
  )
}

export default NavTitle
