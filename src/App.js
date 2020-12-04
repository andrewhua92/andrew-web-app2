import React, { useState } from 'react';
import Intro from './Intro';
import Home from './Home';

import { createGlobalStyle } from 'styled-components';

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

  return (
    <>
      <GlobalStyle />
      {atIntro ? <Intro atIntro={atIntro} setAtIntro={setAtIntro} /> : <Home atIntro={atIntro} />}
    </>
  );
};

export default App;
