import React, { useState } from 'react';
import Intro from './Intro';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: black;
    }

`;

const App = () => {
    const [atIntro, setAtIntro] = useState(true);

    console.log(atIntro);
    return (
        <>
            <GlobalStyle />
            {atIntro && <Intro setAtIntro={setAtIntro} />}
        </>
    );
};

export default App;
