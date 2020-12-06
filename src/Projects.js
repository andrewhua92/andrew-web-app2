import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import ProjectsContent from './ProjectsContent';
import ProjectsOverview from './ProjectsOverview';

const Projects = ({ atIntro, element }) => {
  return (
    <HomeContainer maxWidth="md">
      <ProjectsContent atIntro={atIntro} element={element} />
      <ProjectsOverview/>
    </HomeContainer>
  );
};

const HomeContainer = styled(Container)`
  background-color: black;
`;

export default Projects;
