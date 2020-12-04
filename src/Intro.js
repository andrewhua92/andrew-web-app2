import React from 'react';

import styled, { keyframes } from 'styled-components';
import Galaxy from './assets/galaxy_thing.gif';

import Button from '@material-ui/core/Button';

import 'fontsource-ubuntu';
import 'fontsource-noto-sans-tc';

const Background = ({ atIntro, setAtIntro }) => {
  return (
    <IntroBackgroundDiv>
      <ContentDiv out={!atIntro} >
        <ContentParagraph>
          Welcome traveler! This is my website. Ready for a tour in this part of
          the galaxy?
        </ContentParagraph>
        <ContentButton
          size="large"
          variant="contained"
          onClick={() => setAtIntro(false)}
        >
          Let's go!
        </ContentButton>
      </ContentDiv>
      <GifDiv out={!atIntro} />
    </IntroBackgroundDiv>
  );
};

const ContentButton = styled(Button)`
  width: fit-content;
  align-self: center;
  &&  {
    font-family: 'Noto Sans TC', sans-serif;
  }
`;

const ContentParagraph = styled.p`
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  color: white;
  font-size: 30px;
`;

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

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  width: 45vw;
  height: 100%;

  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? fadeOut : fadeIn} 2s linear;
`;

const GifDiv = styled.div`
  background-image: url(${Galaxy});
  background-size: cover;
  background-repeat: no-repeat;
  width: 45vw;
  height: 100%;

  visibility: ${props => props.out ? 'hidden' : 'visible'};
  animation: ${props => props.out ? fadeOut : fadeIn} 1s linear;
`;

const IntroBackgroundDiv = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
`;

export default Background;
