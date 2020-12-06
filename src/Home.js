import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';

// import Paper from '@material-ui/core/Paper';

import HomeContent from './HomeContent';
import PersonalContent from './PersonalContent';
import WorkContent from './WorkContent';
import SiteContent from './SiteContent';

// TODO: Make other tabs/pages  with React Router or something
// Make animations smoother. Options right now are react-transition-group or delay it with a timeout using useEffect hooks
// Make it prettier. Never stop doing this
// Make it responsive
// Add my co-ops/experiences
// add prop-types

const Home = ({ atIntro, element }) => {
  return (
    <HomeContainer maxWidth="md">
      <HomeContent element={element} atIntro={atIntro} />
      <PersonalContent />
      <WorkContent />
      <SiteContent />
    </HomeContainer>
  );
};

const HomeContainer = styled(Container)`
  background-color: black;
`;

export default Home;
