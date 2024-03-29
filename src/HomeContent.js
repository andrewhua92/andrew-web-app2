import React from 'react';
import styled from 'styled-components';

import 'fontsource-noto-sans-tc';

const HomeContent = ({ atIntro, element }) => {
  return (
    <HomeContentDiv ref={element}>
      <Heading>Welcome to the home page.</Heading>
      <SubHeading>
        This is where you'll learn a little bit about me and this site. Feel
        free to explore my projects and contact info which can be found in the
        other tabs.
      </SubHeading>
    </HomeContentDiv>
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

const HomeContentDiv = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default HomeContent;
