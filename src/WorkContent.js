import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from './Breakpoints';

import Button from '@material-ui/core/Button';

import CaROBOTLogo from './assets/Carobot-logo.png';
import CareGuideLogo from './assets/careguide-logo.png';
import XELogo from './assets/XE-logo.png';
import StackAdaptLogo from './assets/stackadapt-logo.png';

import { useTransition, animated } from 'react-spring';

import 'fontsource-noto-sans-tc';

// this component will basically need to be reworked for sizing every time I get a new job lol
// consider optimizing by mapping the TextButtons and strings

const slides = [
  {
    id: 0,
    img: CaROBOTLogo,
    title: 'CaROBOT',
    position: 'Software Developer',
    languages: ['C++', 'Python'],
  },
  {
    id: 1,
    img: CareGuideLogo,
    title: 'CareGuide',
    position: 'Software Engineer',
    languages: ['React', 'Ruby on Rails'],
  },
  {
    id: 2,
    img: XELogo,
    title: 'XE.com',
    position: 'Full Stack Developer',
    languages: ['React', 'PHP'],
  },
  {
    id: 3,
    img: StackAdaptLogo,
    title: 'StackAdapt',
    position: 'Software Engineer',
    languages: ['React', 'Redux', 'TypeScript', 'Ruby on Rails'],
  }
];

const WorkContent = () => {
  const [company, setCompany] = useState(3);

  const transitions = useTransition(slides[company], (item) => item.id, {
    from: { opacity: 0 }, // I don't know why I have to force position, but it prevents snap entry animation
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });

  return (
    <WorkContentDiv>
      <ContentDiv>
        <Heading>My Experiences</Heading>
        <ContentParagraph>
          My previous internships have been at (descending in recency):
          <br />
          <br />
          <TextButton variant='outlined' onClick={() => setCompany(3)}>StackAdapt</TextButton>
          <br />
          <br />
          <TextButton variant='outlined' onClick={() => setCompany(2)}>XE.com</TextButton>
          <br />
          <br />
          <TextButton variant='outlined' onClick={() => setCompany(1)}>CareGuide</TextButton>
          <br />
          <br />
          <TextButton variant='outlined' onClick={() => setCompany(0)}>CaROBOT</TextButton>
        </ContentParagraph>
      </ContentDiv>
      <div style={{ maxWidth: '25vw' }}>
        {transitions.map(({ item, props, key }) => (
          <SlideDiv key={key} style={props}>
            <LogoImg src={item.img} />
            <Heading>Role</Heading>
            <ContentParagraph>{item.position}</ContentParagraph>
            <Heading>Tech Stack</Heading>
            <ContentParagraph>
              {item.languages.map((language, key) => (
                <span key={key}>
                  {language} {key < item.languages.length - 1 ? ', ' : ' '}
                </span>
              ))}
            </ContentParagraph>
          </SlideDiv>
        ))}
      </div>
    </WorkContentDiv>
  );
};

const TextButton = styled(Button)`
  && {
    color: white;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 1.5rem;
    text-transform: none;
    background-color: rgba(255,255,255,0.05);
    border-color:white;
    border-width: 1px;

    @media ${device.tablet} {
      font-size: 2.2rem;
    }

    &&:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const Heading = styled.h1`
  color: white;
  font-family: 'Noto Sans TC', sans-serif;
  max-width: 20vw;
  font-size: 1.5rem;

  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

const ContentParagraph = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: normal;
  color: white;
  font-size: 1.2rem;
  max-width: 40vw;

  @media ${device.tablet} {
    max-width: 20vw;
    font-size: 1.4rem;
  }
`;

const WorkContentDiv = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media ${device.tablet} {
    justify-content: space-between;
  }
`;

const SlideDiv = styled(animated.div)`
  height: 100vh;
  width: 35vw;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  will-change: opacity;

  @media ${device.desktop} {
    width: 30vw;
    align-items:center;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LogoImg = styled.img`
  max-width: 5rem;
  max-height: 10rem;

  @media ${device.tablet} {
    max-width: 10rem;
    max-height: 15rem;
  }
`;

export default WorkContent;
