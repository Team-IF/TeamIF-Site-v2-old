import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  height: 26rem;
  background-color: #f5f8ff;

  display: flex;
  align-items: center;
`;

const BodyStyle = styled.div`
  margin-left: 10vw;
`;

const TitleStyle = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

const SubTitleStyle = styled.p`
  font-size: 1.3rem;
`;

const ButtonStyle = styled.button`
  margin-top: 2rem;
  border: none;

  background-color: #333333;
  color: white;

  width: 120px;
  height: 40px;
  border-radius: 50px;

  cursor: pointer;

  &:hover {
    background-color: var(--color-teamif);
    color: white;
  }
`;

const About: React.FC = () => {
  return (
    <>
      <Container>
        <BodyStyle>
          <TitleStyle>We Make IF to Reality, Dream to Action.</TitleStyle>
          <SubTitleStyle>청소년 프로그래머 팀, TeamIF</SubTitleStyle>

          <ButtonStyle>지원하기</ButtonStyle>
        </BodyStyle>
      </Container>
    </>
  );
};

export default About;
