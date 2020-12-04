import React from 'react';

import styled from 'styled-components';
import Galaxy from '../public/galaxy_thing.gif';

import Button from '@material-ui/core/Button';

import 'fontsource-ubuntu';

const Background = ({ setAtIntro }) => {
    return (
        <IntroBackgroundDiv>
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
            <GifDiv />
        </IntroBackgroundDiv>
    );
};

const ContentButton = styled(Button)`
  width: fit-content;
  align-self: center;
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
  width: 45vw;
  height: 100%;
`;

const GifDiv = styled.div`
  background-image: url(${Galaxy});
  background-color: black;
  width: 45vw;
  height: 100%;
`;

const IntroBackgroundDiv = styled.div`
  width: inherit;
  height: 600px;
  display: flex;
  justify-content: space-evenly;
`;

export default Background;
