import React from 'react'
import styled from 'styled-components'

const ItemStyle = styled.p`
  display: flex;
  align-self: center;
  font-weight: bold;
  font-size: 1.3rem;

  color: black;

  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in;
  background-image: linear-gradient(transparent 80%, var(--color-teamif) 20%);

  margin: 0 2rem;
  cursor: pointer;

  &:hover {
    background-size: 100% 100%;
  }
`

const NavItem: React.FC = ({ children }) => {
  return <ItemStyle>{children}</ItemStyle>
}

export default NavItem
