import React from 'react'
import styled from 'styled-components'

const TitleStyle = styled.p`
  font-weight: 600;
  font-size: 2rem;
  font-family: 'Fira Sans', sans-serif;

  color: var(--color-teamif);

  background-size: 0% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in;
  background-image: linear-gradient(transparent 80%, #000 20%);

  cursor: pointer;

  &:hover {
    background-size: 100% 100%;
  }
`

const NavTitle: React.FC = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>
}

export default NavTitle
