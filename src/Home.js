import React from 'react';
import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import Paper from '@material-ui/core/Paper';

import 'fontsource-noto-sans-tc';

import BabelLogo  from  './assets/Babel-logo.png';
import ReactLogo  from './assets/React-logo.png';
import JSLogo from './assets/JS-logo.png';
import MUILogo from './assets/MUI-logo.png';
import SCLogo from './assets/styled-components-logo.png';
import WebpackLogo from './assets/webpack-logo.png';

const Logos =  [
    {
        title: 'JavaScript Logo',
        img: JSLogo,
    },
    {
        title: 'React Logo',
        img: ReactLogo,
    },
    {
        title: 'Matierials UI Logo',
        img: MUILogo,
    },
    {
        title: 'Styled-Components Logo',
        img: SCLogo,
    },
    {
        title: 'Webpack Logo',
        img: WebpackLogo,
    },
    {
        title: 'Babel Logo',
        img: BabelLogo,
    },
];

const Home = () => {
  return (
    <HomeContainer maxWidth="md">
      <HomeContentDiv>
        <Heading>Welcome to the home page.</Heading>
        <SubHeading>
          This is where you'll learn a little bit about me and this site. Feel
          free to explore my projects and contact info which can be found in the
          other tabs. I hope you enjoy the journey.
        </SubHeading>
      </HomeContentDiv>
      <PersonalContentDiv>
        <CustomAvatar alt="Andrew Hua" src={require('./assets/my_face.JPG')} />
        <div>
          <Heading>About Me</Heading>
          <ContentParagraph>
            My name is Andrew Hua, a 3A Computer Engineering student at the
            University of Waterloo. I enjoy gaming just like any other guy,
            obsessing over sneakers, learning, coding, and I'm always looking
            for opportunites to grow. While my major is Computer Engineering, I
            take a great interest in Software Engineering and all things
            Computer Science as well.
          </ContentParagraph>
        </div>
      </PersonalContentDiv>
      <WorkContentDiv>
        <div>
          <Heading>My Experiences</Heading>
          <ContentParagraph>
            My previous co-ops so far have been at:
          </ContentParagraph>
        </div>
      </WorkContentDiv>
      <SiteContentDiv>
        <div>
          <Heading>About This Site</Heading>
          <ContentParagraph>
            This site was made with React and Javascript. It was styled using
            Styled-Components and Materials-UI. It was compiled using Webpack
            and Babel.
            <br/>
            <br/>
            I had a lot fun making this and I hope to add more features in the future!
          </ContentParagraph>
        </div>
        <CustomGrid cellHeight={150} spacing={5} cols={2}>
            {Logos.map((logo) => (
                <CustomGridTile key={logo.img} cols={1}>
                    <LogoImg src={logo.img} alt={logo.title} />
                </CustomGridTile>
            ))}
        </CustomGrid>
      </SiteContentDiv>
    </HomeContainer>
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

const SubHeading = styled.h1`
  font-family: 'Noto Sans TC', sans-serif;
  color: white;
  font-weight: normal;
`;

const ContentParagraph = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: normal;
  color: white;
  font-size: 1.5rem;
  max-width: 30vw;
`;

const HomeContentDiv = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PersonalContentDiv = styled.div`
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const WorkContentDiv = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SiteContentDiv = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HomeContainer = styled(Container)`
  background-color: black;
`;

const CustomGrid = styled(GridList)`
  height: 90vh;
  width: 30vw;
`;

const CustomGridTile = styled(GridListTile)`
  //  I don't know why this works
  text-align: center;
`;

const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export default Home;
