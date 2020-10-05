import styled from 'styled-components'
import SCREEN_SIZE from '../../utils/ScreenSize'

// eslint-disable-next-line import/prefer-default-export
export const Heading1 = styled.p`
  font-size: 2rem;
  font-weight: bold;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    font-size: 1.6rem;
  }
`
