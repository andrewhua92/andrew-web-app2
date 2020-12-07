import React from 'react';
import styled, { keyframes } from 'styled-components';

import Container from '@material-ui/core/Container';

// import Paper from '@material-ui/core/Paper';

import HomeContent from './HomeContent';
import PersonalContent from './PersonalContent';
import WorkContent from './WorkContent';
import SiteContent from './SiteContent';

// TODO:
// Organize file structure into their respective pages
// Deal with eslint problems
// Make animations smoother. Options right now are react-transition-group or delay it with a timeout using useEffect hooks
// Make it prettier. Never stop doing this
// Make it responsive - BIG TASK ZZZZZZZZ
// add prop-types

const Home = ({ atIntro, element }) => {
  return (
    <HomeContainer out={atIntro} maxWidth="md">
      <HomeContent element={element} atIntro={atIntro} />
      <PersonalContent />
      <WorkContent />
      <SiteContent />
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

export default Home;
