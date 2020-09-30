import React from 'react';
import styled from 'styled-components';
import Button from '../../atomics/Button';

const Card = styled.div`
  border: 1px solid #eaeaea;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(169, 169, 169, 0.2);

  padding: 1.5rem;

  display: grid;
  grid-template-rows: auto 80px;
`;

interface ProjectCardProps {
  readonly title: string;
  readonly github: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, github, children }) => {
  return (
    <Card>
      <div>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
      <div>
        <Button>
          <a href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
