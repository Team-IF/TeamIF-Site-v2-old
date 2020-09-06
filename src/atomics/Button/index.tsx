import styled from 'styled-components';

const Button = styled.button`
  margin-top: 2rem;
  border: none;

  background-color: #333333;
  color: white;

  width: 120px;
  height: 40px;
  border-radius: 50px;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--color-teamif);
    color: white;
  }
`;

export default Button;