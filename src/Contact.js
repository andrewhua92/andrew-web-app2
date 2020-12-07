import React from 'react';
import styled, { keyframes } from 'styled-components';

import Container from '@material-ui/core/Container';
import ContactContent from './ContactContent';
import ContactOverview from './ContactOverview';

const Contact = ({ atIntro, element }) => {
  return (
    <ContactContainer maxWidth="md" out={atIntro}>
      <ContactContent element={element} />
      <ContactOverview />
    </ContactContainer>
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

const ContactContainer = styled(Container)`
  visibility: ${(props) => (props.out ? 'hidden' : 'visible')};
  animation: ${(props) => (props.out ? fadeOut : fadeIn)} 2s linear;
  background-color: black;
`;

export default Contact;
