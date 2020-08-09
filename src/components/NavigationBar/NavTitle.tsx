import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.p`
  font-weight: bold;
  font-size: 2rem;

  color: var(--color-teamif);

  background-size: 0% 100%;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease-in;
  background-image: linear-gradient(transparent 80%, #000 20%);
  
  cursor: pointer;

  &:hover {
    background-size: 100% 100%;
  }
`;

const NavTitle: React.FC = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export default NavTitle;
