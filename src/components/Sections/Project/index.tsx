import React from 'react';
import styled from 'styled-components';
import { Heading1 } from '../../../atomics/Typography/Heading';
import AlignContainer from '../../../utils/AlignContainer';
import ProjectCard from '../../ProjectCard';

const Container = styled.section`
  display: flex;
  align-items: center;
`;

const TitleStyle = styled(Heading1)`
  margin: 2rem 0;
`;

const CardStyle = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  padding: 1.5rem;

  display: grid;
  grid-template-rows: auto 80px;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
`;

const Project: React.FC = () => {
  return (
    <Container id="project">
      <AlignContainer>
        <TitleStyle>Project.</TitleStyle>

        <CardList>
          <ProjectCard title="JustHear.me" github="https://github.com/Team-IF/JustHear.me">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id purus dui. Praesent
            sit amet mi turpis. Nullam viverra, quam eget posuere bibendum, lorem lectus vestibulum
            risus, a venenatis risus diam sit amet ipsum.
          </ProjectCard>

          <ProjectCard title="comcigan-py" github="https://github.com/Team-IF/comcigan-py">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id purus dui. Praesent
            sit amet mi turpis. Nullam viverra, quam eget posuere bibendum, lorem lectus vestibulum
            risus, a venenatis risus diam sit amet ipsum.
          </ProjectCard>

          <ProjectCard title="프로젝트" github="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id purus dui. Praesent
            sit amet mi turpis. Nullam viverra, quam eget posuere bibendum, lorem lectus vestibulum
            risus, a venenatis risus diam sit amet ipsum.
          </ProjectCard>
        </CardList>
      </AlignContainer>
    </Container>
  );
};

export default Project;
