import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from '../../atomics/Button';
import SCREEN_SIZE from '../../utils/ScreenSize';

const Card = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  padding: 1.5rem;

  display: grid;
  grid-template-rows: auto 80px;
`;

const CardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;

  @media screen and (max-width: ${SCREEN_SIZE.MOBILE}) {
    font-size: 1.3rem;
  }
`;

interface ProjectCardProps {
  readonly title: string;
  readonly github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, github, children }) => {
  return (
    <Card>
      <div>
        <CardTitle>{title}</CardTitle>
        <p>{children}</p>
      </div>
      <div>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Button>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </Button>
        </a>
      </div>
    </Card>
  );
};

export default ProjectCard;
