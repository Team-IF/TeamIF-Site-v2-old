import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-self: center;
  transition: all 0.2s ease-in;

  margin: 0 1rem;
  padding: 5px 10px;

  &:hover {
    background-color: #434343;
    border-radius: 50px;
  }
`

const ItemStyle = styled.p`
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
`

const NavItem: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <ItemStyle>{children}</ItemStyle>
    </Wrapper>
  )
}

export default NavItem
