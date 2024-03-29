/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { device } from './Breakpoints';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { useMediaQuery } from 'react-responsive';

import CPPLogo from './assets/CPP-logo.png';
import PythonLogo from './assets/python-logo.png';
import ReactLogo from './assets/React-logo.png';
import JavaLogo from './assets/java-logo.png';

import 'fontsource-noto-sans-tc';
import 'fontsource-roboto';

const Projects = [
  {
    title: 'andrew-web-app2',
    description: 'The very same web app you are seeing right now!',
    link: 'https://github.com/andrewhua92/andrew-web-app2',
    languageLogo: ReactLogo,
  },
  {
    title: 'SunTracker',
    description:
      'A Hackathon Arduino Project meant to track the sun efficiently.',
    link: 'https://github.com/andrewhua92/SunTracker/',
    languageLogo: CPPLogo,
  },
  {
    title: 'andrew-web-app',
    description:
      'My first personal frontend project to experiment with React and styling.',
    link: 'https://github.com/andrewhua92/andrew-web-app/',
    languageLogo: ReactLogo,
  },
  {
    title: 'AYJ-Simulator',
    description: 'A Choose Your Own Adventure game I made in high school!',
    link: 'https://github.com/andrewhua92/AYJ-Simulator/',
    languageLogo: JavaLogo,
  },
  {
    title: 'lineFollower',
    description:
      'A Python/Raspberry Pi rover that follows lines with a camera.',
    link: 'https://github.com/andrewhua92/lineFollower/',
    languageLogo: PythonLogo,
  },
  {
    title: 'GPIO-python-library',
    description:
      "A custom Raspberry Pi library in Python for CARobot's sCHEESE module.",
    link: 'https://github.com/andrewhua92/GPIO-python-library/',
    languageLogo: PythonLogo,
  },
];

const ProjectsOverview = () => {

  const isNotMobile = useMediaQuery({query: `${device.tablet}`});

  return (
    <ProjectsContentDiv>
      <CustomGrid cellHeight={isNotMobile ? 300 : 250} spacing={30} cols={isNotMobile ? 3 : 2}>
        {Projects.map(({ title, description, link, languageLogo }) => (
          <CustomGridTile>
            <ProjectCard>
              <ProjectCardContent>
                <HeadingDiv>
                  <LogoImg src={languageLogo} />
                  <Heading>{title}</Heading>
                </HeadingDiv>
                <SubHeading>{description}</SubHeading>
              </ProjectCardContent>
              <ProjectCardActions>
                <CardButton href={link} target="_blank">
                  Learn More
                </CardButton>
              </ProjectCardActions>
            </ProjectCard>
          </CustomGridTile>
        ))}
      </CustomGrid>
    </ProjectsContentDiv>
  );
};

const HeadingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ProjectCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CardButton = styled(Button)`
  && {
    color: #3f51b5;

    @media ${device.desktop} {
      font-size: 1.3rem;
    }

    &&:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const ProjectCardActions = styled(CardActions)`
  justify-content: center;
`;

const ProjectCard = styled(Card)`
  && {
    border-radius: 0;
    border: 1px solid grey;
    background: rgba(1,1,1,0.5);
    height: 99%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &&:hover {
      background-color: rgba(10,10,10,0.9);
    }
  }
`;

const Heading = styled.h1`
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;

  @media ${device.desktop} {
    font-size: 2rem;
  }
`;

const SubHeading = styled.h1`
  margin-top: 1rem;
  font-family: 'Noto Sans TC', sans-serif;
  color: white;
  font-weight: normal;
  font-size: 0.8rem;
  text-align: left;
  max-width: 13rem;
  align-self: center;

  @media ${device.tablet} {
    margin-top: 2rem;
  }

  @media ${device.desktop} {
    margin-top: 0.8rem;
    font-size: 1.3rem;
    max-width: 15rem;
  }
`;

const ProjectsContentDiv = styled.div`
  height: 110vh;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomGrid = styled(GridList)``;

const CustomGridTile = styled(GridListTile)`
  //  I don't know why this works
  text-align: center;
`;

const LogoImg = styled.img`
  max-height: 3.5rem;
  max-width: 4rem;
`;

export default ProjectsOverview;
