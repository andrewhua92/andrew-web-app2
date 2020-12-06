import React from 'react';
import styled from 'styled-components';

import Container from '@material-ui/core/Container';
import ContactContent from './ContactContent';

const Contact = ({ atIntro, element }) => {
  console.log('YOOO');
  return (
    <HomeContainer maxWidth="md">
      <ContactContent atIntro={atIntro} element={element} />
    </HomeContainer>
  );
};

const HomeContainer = styled(Container)`
  background-color: black;
`;

export default Contact;
