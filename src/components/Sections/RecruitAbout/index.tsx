import React from 'react'
import styled from 'styled-components'
import { Heading1 } from '../../../atomics/Typography/Heading'
import AlignContainer from '../../../utils/AlignContainer'

import background from '../../../assets/recruit_background.jpg'

const Container = styled.section`
  height: 26rem;

  background-image: url(${background});
  background-size: cover;

  background-position-y: 10%;

  display: flex;
  align-items: center;

  text-align: center;
`

const StyledHeading = styled(Heading1)`
  color: black;
  opacity: 0.8;
`

const RecruitAbout: React.FC = () => {
  return (
    <Container>
      <AlignContainer>
        <StyledHeading>
          TeamIF와 함께할
          <br />
          청소년 팀원을 모집합니다
        </StyledHeading>
      </AlignContainer>
    </Container>
  )
}

export default RecruitAbout
