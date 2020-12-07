import React from 'react';
import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';

import 'fontsource-noto-sans-tc';

const PersonalContent = () => {
  return (
    <PersonalContentDiv>
      <CustomAvatar alt="Andrew Hua" src={require('./assets/my_face.JPG')} />
      <div>
        <Heading>About Me</Heading>
        <ContentParagraph>
          My name is Andrew Hua, a 3A Computer Engineering student at the
          University of Waterloo. I enjoy gaming just like any other guy,
          obsessing over sneakers, learning, coding, and I'm always looking for
          opportunites to grow. While my major is Computer Engineering, I take a
          great interest in Software Engineering and all things Computer Science
          as well.
          <br />
          <br />
          I'm very experienced with Java, C++, JavasScript with React, Python,
          Ruby on Rails and have working knowledge with Git, PHP, and C.
        </ContentParagraph>
      </div>
    </PersonalContentDiv>
  );
};

const CustomAvatar = styled(Avatar)`
  && {
    height: 20rem;
    width: 20rem;
  }
`;

const Heading = styled.h1`
  color: white;
  font-family: 'Noto Sans TC', sans-serif;
`;

const ContentParagraph = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: normal;
  color: white;
  font-size: 1.3rem;
  max-width: 35vw;
`;

const PersonalContentDiv = styled.div`
  height: 110vh;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default PersonalContent;
