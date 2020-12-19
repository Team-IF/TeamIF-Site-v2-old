import React from 'react'
import styled from 'styled-components'
import { Heading1 } from '../../../atomics/Typography/Heading'
import AlignContainer from '../../../utils/AlignContainer'
import ProjectCard from '../../ProjectCard'
import ProjectData from '../../../data/project.data.json'

const Container = styled.section`
  display: flex;
  align-items: center;

  height: 100vh;
`

const TitleStyle = styled(Heading1)`
  margin: 2rem 0;
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
        <TitleStyle>Project.</TitleStyle>

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
