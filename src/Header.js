import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { device } from './Breakpoints';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import AHIcon from './assets/ah_icon.png';

import 'fontsource-noto-sans-tc';

import { Link } from 'react-router-dom';

const Header = ({ sticky, atIntro }) => {
  // gotta do this extra shit with hooks to update the indicator of the tabs manually
  const [value, setValue] = useState(window.location.pathname);

  const handleChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    let path = window.location.hash;
    console.log(path);
    if (path === '#/') setValue(0);
    else if (path === '#/projects') setValue(1);
    else if (path === '#/contact') setValue(2);
  }, [value]);

  return (
    <StickyNav out={atIntro} className={sticky ? 'header-sticky' : 'header'}>
      <Link to="/">
        <LogoImg src={AHIcon} onClick={() => handleChange(0)} />
      </Link>
      <div>
        <NavTabsDiv position="inherit">
          <NavTabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
          >
            <LinkTab value={0} to="/" label="Home" component={Link} />
            <LinkTab
              value={1}
              to="/projects"
              label="Projects"
              component={Link}
            />
            <LinkTab value={2} to="/contact" label="Contact" component={Link} />
          </NavTabs>
        </NavTabsDiv>
      </div>
    </StickyNav>
  );
};

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

const LogoImg = styled.img`
  max-height: 2rem;
  max-width: 2rem;

  @media ${device.desktop} {
    max-height: 4rem;
    max-width: 4rem;
  }
`;

const moveDown = keyframes`
    from {
      transform: translateY(-5rem);
    }
    to {
      transform: translateY(0rem);
    }
`;

const StickyNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 2.5rem;
  z-index: 1;
  width: 90%;
  background-color: black;
  box-shadow: none;


  visibility: ${(props) => (props.out ? 'hidden' : 'visible')};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 4s linear;

  @media ${device.tablet} {
    width: 93%;
  }

  &.header-sticky {
    position: fixed;
    animation: ${moveDown} 0.5s ease-in-out;
  }
`;

const NavTabs = styled(Tabs)`
`;

const NavTabsDiv = styled(AppBar)`
  && {
    background-color: black;
  }
`;

const LinkTab = styled(Tab)`
  && {
    color: white;
    font-family: 'Noto Sans TC', sans-serif;
    @media  ${device.desktop} { 
      font-size: 1.5rem;
      width: 15vw;
    }
  }
`;

export default Header;
