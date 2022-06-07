/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { device } from './Breakpoints';

import Galaxy from './assets/galaxy_thing.gif';
import Button from '@material-ui/core/Button';

import { useMediaQuery } from 'react-responsive';

import 'fontsource-ubuntu';
import 'fontsource-noto-sans-tc';

const Background = ({ atIntro, setAtIntro }) => {

  const isNotMobile = useMediaQuery({query: `${device.tablet}`});

  return (
    <IntroBackgroundDiv className="target">
      <ContentDiv>
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
      {isNotMobile && <GifDiv className="target" />}
    </IntroBackgroundDiv>
  );
};

const ContentButton = styled(Button)`
  width: fit-content;
  align-self: center;
  && {
    font-family: 'Noto Sans TC', sans-serif;
  }
`;

const ContentParagraph = styled.p`
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  color: white;
  font-size: 30px;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  height: 100%;

  @media ${device.tablet} { 
    width: 45vw;
  }
`;

const GifDiv = styled.div`
  background-image: url(${Galaxy});
  background-size: cover;
  background-repeat: no-repeat;
  width: 45vw;
  height: 100%;
`;

const IntroBackgroundDiv = styled.div`
  width: 98vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  margin: 0;

  &&.target-appear {
    opacity: 0.01;
  }

  &&.target-appear-active {
    opacity: 0.01;
  }

  &&.target-appear-done {
    opacity: 1;
    transition: opacity 500ms;
  }

  &&.target-exit {
    opacity: 1;
  }

  &&.target-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`;

export default Background;
