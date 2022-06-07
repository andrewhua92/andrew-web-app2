import React, { useState } from 'react';
import Intro from './Intro';
import Home from './Home';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import { CSSTransition } from 'react-transition-group';
import useSticky from './hooks/useSticky';
import ScrollToTop from './hooks/ScrollToTop';

import { createGlobalStyle } from 'styled-components';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: black;
        margin: 0;
    }

    ::-webkit-scrollbar {
        width: 15px;
        background:black;
    }
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,1); 
    }
    
    ::-webkit-scrollbar-thumb {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
        background: #0a0a0a;
    } 

`;

const App = () => {
  const [atIntro, setAtIntro] = useState(true);
  const { isSticky, element } = useSticky();

  return (
    <Router >
      <GlobalStyle />
      <CSSTransition
        in={atIntro}
        timeout={{ appear: 250, enter: 250, exit: 500 }}
        classNames="target"
        mountOnEnter
        unmountOnExit
        appear
      >
        {<Intro atIntro={atIntro} setAtIntro={setAtIntro} />}
      </CSSTransition>
      {!atIntro && (
        <>
          <Header sticky={isSticky} atIntro={atIntro} />
          <Switch>
            <Route path="/projects">
              <ScrollToTop />
              <Projects element={element} />
            </Route>
            <Route path="/contact">
              <ScrollToTop />
              <Contact element={element} />
            </Route>
            <Route path="/">
              <ScrollToTop />
              <Home element={element} />
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
};

export default App;
