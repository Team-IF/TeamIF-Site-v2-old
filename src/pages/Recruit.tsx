import React from 'react'
import styled from 'styled-components'
import RecruitAbout from '../components/Sections/RecruitAbout'
import RecruitFormHeader from '../components/RecruitForm/RecruitFormHeader'
import Button from '../atomics/Button'
import { Input, Label, TextArea } from '../atomics/Form'

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  margin: 2rem 0;
`

const Form = styled.div`
  display: flex;
  justify-content: center;

  & input,
  textarea {
    display: block;
  }

  & label {
    text-align: left;
  }
`

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`

const StyledButton = styled(Button)`
  margin-top: 1rem;
`

const Recruit: React.FC = () => {
  return (
    <>
      <RecruitAbout />

      <Container>
        <div>
          <RecruitFormHeader />

          <Form>
            <div>
              <InputWrapper>
                <Label htmlFor='discord'>디스코드 ID</Label>
                <Input id='discord' type='number' placeholder='디스코드 ID' />
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor='email'>이메일</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='결과를 받을 이메일'
                />
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor='github'>GitHub ID</Label>
                <Input id='github' type='text' placeholder='GitHub ID' />
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor='age'>나이</Label>
                <Input id='age' type='number' placeholder='나이' />
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor='comment'>자기소개</Label>
                <TextArea
                  id='comment'
                  placeholder='자기소개, 다짐 등 하고 싶은 말을 적어주세요.'
                />
              </InputWrapper>
            </div>
          </Form>

          <StyledButton>제출</StyledButton>
        </div>
      </Container>
    </>
  )
}

export default Recruit
