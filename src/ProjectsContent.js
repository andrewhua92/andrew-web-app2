import React from 'react';
import styled from 'styled-components';

import 'fontsource-noto-sans-tc';

const ProjectsContent = ({ atIntro, element }) => {
  return (
    <ProjectContentDiv ref={element} atIntro={atIntro}>
      <Heading>Welcome to the projects page.</Heading>
      <SubHeading>
        This is where you'll read about my projects and links to their
        respective Github repositories.
      </SubHeading>
    </ProjectContentDiv>
  );
};

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
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default ProjectsContent;
