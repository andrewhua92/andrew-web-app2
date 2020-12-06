import React from 'react';
import styled, { keyframes } from 'styled-components';

import Container from '@material-ui/core/Container';
import ProjectsContent from './ProjectsContent';
import ProjectsOverview from './ProjectsOverview';

const Projects = ({ atIntro, element }) => {
  return (
    <HomeContainer atIntro={atIntro} maxWidth="md">
      <ProjectsContent element={element} />
      <ProjectsOverview />
    </HomeContainer>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const HomeContainer = styled(Container)`
  visibility: ${(props) => (props.out ? 'hidden' : 'visible')};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 2s linear;
  background-color: black;
`;

export default Projects;
