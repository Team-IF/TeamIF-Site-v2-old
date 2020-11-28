import styled from 'styled-components'
import SCREEN_SIZE from '../../utils/ScreenSize'

export const Heading1 = styled.p`
  font-size: 2rem;
  font-weight: bold;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    font-size: 1.6rem;
  }
`
export const Heading2 = styled.p`
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    font-size: 1.6rem;
  }
`
