import React from 'react'
import styled from 'styled-components'
import { Heading1 } from '../../../atomics/Typography/Heading'
import AlignContainer from '../../../utils/AlignContainer'
import ProjectCard from '../../ProjectCard'
import ProjectData from '../../../data/project.data.json'

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  padding-top: 4rem;
`

const Header = styled.div`
  margin-bottom: 3rem;
`

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
`

const Project: React.FC = () => {
  return (
    <Container id='project'>
      <AlignContainer>
        <Header>
          <Heading1>Project.</Heading1>
          <h3>TeamIF가 만드는 프로젝트를 소개합니다.</h3>
        </Header>

        <CardList>
          {ProjectData.map((project) => (
            <ProjectCard
              key={project.name}
              title={project.name}
              github={project.github}>
              {project.description}
            </ProjectCard>
          ))}
        </CardList>
      </AlignContainer>
    </Container>
  )
}

export default Project
