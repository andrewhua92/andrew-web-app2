import React, {useEffect, useState} from 'react';
import styled, { keyframes } from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import 'fontsource-noto-sans-tc';

import { Link } from 'react-router-dom';

const Header = ({ sticky }) => {

    // gotta do this extra shit with hooks to update the indicator of the tabs manually
    const [value, setValue] = useState(window.location.pathname);

    const handleChange = (value) => {
        setValue(value)
    }

    useEffect(()=> {
        let path = window.location.pathname;
        if (path === '/') setValue(0)
        else if (path === '/projects') setValue(1)
        else if (path === '/contact') setValue (2)
    }, [value]);

  return (
    <StickyNav className={sticky ? 'header-sticky' : 'header'}>
      <NavTabsDiv>
        <NavTabs
            variant='fullWidth'
            value={value}
            onChange={handleChange}
            indicatorColor='primary'
        >
          <LinkTab value={0} to="/" label="Home" component={Link} />
          <LinkTab
            value={1}
            to="/projects"
            label="Projects"
            component={Link}
          />
          <LinkTab
            value={2}
            to="/contact"
            label="Contact"
            component={Link}
          />
        </NavTabs>
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
  width: inherit;
  background-color: black;

  &.header-sticky {
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 1px 1px 1px #222;
    animation: ${moveDown} 0.5s ease-in-out;
  }
`;

const NavTabs = styled(Tabs)`
  width: 100vw;
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
    }
`;

export default Header;
