import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import background from '../../../assets/background.jpg'
import Button from '../../../atomics/Button'
import { Heading1 } from '../../../atomics/Typography/Heading'
import SCREEN_SIZE from '../../../utils/ScreenSize'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: calc(100vh - 64px);

  background-image: url(${background});
  background-size: cover;

  color: white;
`

const SubTitleStyle = styled.p`
  font-size: 1.3rem;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    font-size: 1.1rem;
  }
`

const ButtonStyle = styled(Button)`
  background-color: white;
  color: black;
`

const About: React.FC = () => {
  return (
    <Container id='about'>
      <div>
        <Heading1>We Make IF to Reality, Dream to Action.</Heading1>
        <SubTitleStyle>청소년 프로그래머 팀, TeamIF</SubTitleStyle>

        <ButtonStyle>
          <Link to='/recruit'>지원하기</Link>
        </ButtonStyle>
      </div>
    </Container>
  )
}

export default About
