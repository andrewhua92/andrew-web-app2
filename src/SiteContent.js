import React from 'react';
import styled from 'styled-components';

import BabelLogo from './assets/Babel-logo.png';
import ReactLogo from './assets/React-logo.png';
import JSLogo from './assets/JS-logo.png';
import MUILogo from './assets/MUI-logo.png';
import SCLogo from './assets/styled-components-logo.png';
import WebpackLogo from './assets/webpack-logo.png';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import 'fontsource-noto-sans-tc';

const Logos = [
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

const SiteContent = () => {
  return (
    <SiteContentDiv>
      <div>
        <Heading>About This Site</Heading>
        <ContentParagraph>
          This site was primarily made with React and Javascript. It was styled
          using Styled-Components and Materials-UI. It was compiled using
          Webpack and Babel.
          <br />
          <br />I had a lot fun making this and I hope to add more features in
          the future!
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
  );
};

const Heading = styled.h1`
  color: white;
  font-family: 'Noto Sans TC', sans-serif;
`;

const ContentParagraph = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: normal;
  color: white;
  font-size: 1.4rem;
  max-width: 30vw;
`;

const SiteContentDiv = styled.div`
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CustomGrid = styled(GridList)`
  height: 85vh;
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

export default SiteContent;
