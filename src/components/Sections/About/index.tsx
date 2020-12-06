import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../../../atomics/Button'
import { Heading1 } from '../../../atomics/Typography/Heading'
import AlignContainer from '../../../utils/AlignContainer'

import background from '../../../assets/background.jpg'

const Container = styled.section`
  height: 26rem;

  background-image: url(${background});
  background-size: cover;

  display: flex;
  align-items: center;

  color: white;
`

const SubTitleStyle = styled.p`
  font-size: 1.3rem;
`

const ButtonStyle = styled(Button)`
  background-color: white;
  color: black;
`

const About: React.FC = () => {
  return (
    <Container id='about'>
      <AlignContainer>
        <Heading1>We Make IF to Reality, Dream to Action.</Heading1>
        <SubTitleStyle>청소년 프로그래머 팀, TeamIF</SubTitleStyle>

        <ButtonStyle>
          <Link to='/recruit'>지원하기</Link>
        </ButtonStyle>
      </AlignContainer>
    </Container>
  )
}

export default About
