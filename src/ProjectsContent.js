import React from 'react';
import styled, { keyframes } from 'styled-components';

import 'fontsource-noto-sans-tc';

const ProjectsContent = ({ atIntro, element }) => {
  return (
    <ProjectContentDiv ref={element} atIntro={atIntro}  >
      <Heading>Welcome to the projects page.</Heading>
      <SubHeading>
        This is where you'll read about my projects and links to their respective Github repositories.
      </SubHeading>
    </ProjectContentDiv>
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

const Heading = styled.h1`
  color: white;
  font-family: 'Noto Sans TC', sans-serif;
`;

const SubHeading = styled.h1`
  font-family: 'Noto Sans TC', sans-serif;
  color: white;
  font-weight: normal;
`;

const ProjectContentDiv = styled.div`
  height: 110vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;

  visibility: ${(props) => (props.out ? 'hidden' : 'visible')};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 2s linear;
`;

export default ProjectsContent;
