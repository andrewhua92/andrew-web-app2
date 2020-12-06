import React, { useState } from 'react';
import Intro from './Intro';
import Home from './Home';
import Header from './Header';
import Projects from './Projects';
import Contact from './Contact';
import { CSSTransition } from 'react-transition-group';
import useSticky from './hooks/useSticky';

import { createGlobalStyle } from 'styled-components';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
    <Router>
      <GlobalStyle />
      <CSSTransition
        in={atIntro}
        timeout={{ appear: 500, enter: 500, exit: 1000 }}
        classNames="target"
        mountOnEnter
        unmountOnExit
        appear
      >
        {<Intro atIntro={atIntro} setAtIntro={setAtIntro} />}
      </CSSTransition>
      {!atIntro && (
          <>
          <Header sticky={isSticky} />
          <Switch>
            <Route path="/">
              <Home element={element} />
            </Route>
            <Route path="/projects">
              <Projects element={element} />
            </Route>
            <Route path="/contact">
              <Contact element={element} />
            </Route>
          </Switch>
          </>
      )}
    </Router>
  );
};

export default App;
