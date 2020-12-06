import React from 'react';
import styled, { keyframes } from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import 'fontsource-noto-sans-tc';

import { Link } from 'react-router-dom';

const Header = ({ sticky }) => {
  return (
    <StickyNav className={sticky ? 'header-sticky' : 'header'}>
      <NavTabsDiv>
        <Tabs
            value={location.pathname}
        >
          <LinkTab to="/" label="Home" component={Link} />
          <LinkTab
            to="/projects"
            label="Projects"
            component={Link}
          />
          <LinkTab
            to="/contact"
            label="Contact"
            component={Link}
          />
        </Tabs>
      </NavTabsDiv>
    </StickyNav>
  );
};

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
  position: absolute;
  z-index: 1;
  width: 100%;
  background-color: black;

  &.header-sticky {
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 1px 1px 1px #222;
    animation: ${moveDown} 0.5s ease-in-out;
  }
`;

const NavTabsDiv = styled(AppBar)`
  && {
    background-color: black;
  }
`;

const LinkTab = styled(Tab)`
  color: white;
  font-family: 'Noto Sans TC', sans-serif;
`;

export default Header;
