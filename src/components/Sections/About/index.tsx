import React from 'react';
import styled from 'styled-components';
import Button from '../../../atomics/Button';
import { Heading1 } from '../../../atomics/Typography/Heading';

const Container = styled.section`
  height: 26rem;
  background-color: #f1f6ff;

  display: flex;
  align-items: center;
`;

const BodyStyle = styled.div`
  margin-left: 20vw;
`;

const SubTitleStyle = styled.p`
  font-size: 1.3rem;
`;

const About: React.FC = () => {
  return (
    <Container id="about">
      <BodyStyle>
        <Heading1>We Make IF to Reality, Dream to Action.</Heading1>
        <SubTitleStyle>청소년 프로그래머 팀, TeamIF</SubTitleStyle>

        <Button>지원하기</Button>
      </BodyStyle>
    </Container>
  );
};

export default About;
