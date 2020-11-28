import React from 'react'
import styled from 'styled-components'
import { Heading1 } from '../../../atomics/Typography/Heading'
import AlignContainer from '../../../utils/AlignContainer'

import background from '../../../assets/recruit_background.jpg'

const Container = styled.section`
  height: 26rem;

  background-image: url(${background});
  background-size: cover;

  display: flex;
  align-items: center;

  text-align: center;

  color: black;
`

const SubTitleStyle = styled.p`
  font-size: 1.3rem;
`

const RecruitAbout: React.FC = () => {
  return (
    <Container>
      <AlignContainer>
        <Heading1>TeamIF와 함께할 팀원을 모집합니다</Heading1>
        <SubTitleStyle>청소년이라면 누구나 함께할 수 있습니다</SubTitleStyle>
      </AlignContainer>
    </Container>
  )
}

export default RecruitAbout
