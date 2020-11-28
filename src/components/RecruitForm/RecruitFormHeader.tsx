import React from 'react'
import styled from 'styled-components'
import { Heading2 } from '../../atomics/Typography/Heading'

const TipText = styled.p`
  color: var(--color-tip);
  font-size: 14px;

  margin: 0 10px 2rem 10px;
`

const RecruitFormHeader = () => {
  return (
    <div>
      <Heading2>신청하기</Heading2>
      <TipText>
        디스코드는 닉네임#태그 형태가 아닌 숫자로 이루어진 ID를 입력해주세요.
      </TipText>
    </div>
  )
}

export default RecruitFormHeader
