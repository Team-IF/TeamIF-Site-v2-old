import React from 'react'
import styled from 'styled-components'
import { Heading1 } from '../../../atomics/Typography/Heading'
import AlignContainer from '../../../utils/AlignContainer'
import MemberCard from '../../MemberCard'

import MemberData from '../../../data/member.data.json'

const Container = styled.section`
  display: flex;
  align-items: center;

  height: calc(100vh);
`

const TitleStyle = styled(Heading1)`
  margin: 2rem 0;
`

const MemberList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Member: React.FC = () => {
  return (
    <Container id='member'>
      <AlignContainer>
        <TitleStyle>Member.</TitleStyle>
        <MemberList>
          {MemberData.map((member) => (
            <MemberCard
              key={member.nickname}
              email={member.email}
              nickname={member.nickname}
              color={member.color}
              github={member.github}
            />
          ))}
        </MemberList>
      </AlignContainer>
    </Container>
  )
}

export default Member
