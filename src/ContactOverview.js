import React from 'react';
import styled from 'styled-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Fireplace from './assets/fireplace.gif';

const ContactOverview = () => {
  return (
    <ContactContentDiv>
      <FireplaceDiv>
        <ContentParagraph>
          Thanks for taking the time to reach this section. Have a seat by the
          fire.
        </ContentParagraph>
        <GifDiv />
      </FireplaceDiv>
      <ListDiv>
        <ContactList>
          <ListItem>
            <ListItemIcon>
              <EmailIcon style={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText
              primary="Personal Email"
              secondary="andrewhua90@gmail.com"
              primaryTypographyProps={{ style: { color: 'white' } }}
              secondaryTypographyProps={{ style: { color: 'white' } }}
            />
          </ListItem>
          <ContactDivider />
          <ListItem>
            <ListItemIcon>
              <EmailIcon style={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText
              primary="School Email"
              secondary="a5hua@uwaterloo.ca"
              primaryTypographyProps={{ style: { color: 'white' } }}
              secondaryTypographyProps={{ style: { color: 'white' } }}
            />
          </ListItem>
          <ContactDivider />
          <ListItem button component="a" href="https://github.com/andrewhua92" target="_blank">
            <ListItemIcon>
              <GitHubIcon style={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText
              primary="GitHub"
              secondary="github.com/andrewhua92"
              primaryTypographyProps={{ style: { color: 'white' } }}
              secondaryTypographyProps={{ style: { color: 'white' } }}
            />
          </ListItem>
          <ContactDivider />
          <ListItem button component="a" href="https://www.linkedin.com/in/andrew-hua90" target="_blank">
            <ListItemIcon>
              <LinkedInIcon style={{color: 'white'}} />
            </ListItemIcon>
            <ListItemText
              primary="LinkedIn"
              secondary="linkedin.com/in/andrew-hua90/"
              primaryTypographyProps={{ style: { color: 'white' } }}
              secondaryTypographyProps={{ style: { color: 'white' } }}
            />
          </ListItem>
        </ContactList>
      </ListDiv>
    </ContactContentDiv>
  );
};

const ContactList = styled(List)`
    width: 25vw;
`;

const ContactDivider = styled(Divider)`
&& {
    background-color:  rgba(50, 50, 50, 0.9);
    height: 2px;
}
`;

const FireplaceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  max-width: 35vw;
`;

const ContentParagraph = styled.p`
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: normal;
  color: white;
  font-size: 1.3rem;
  max-width: 25vw;
  align-self: center;
`;

const GifDiv = styled.div`
  background-image: url(${Fireplace});
  background-size: 30rem;
  background-repeat: no-repeat;
  width: 30vw;
  height: 30vw;
`;

const ListDiv = styled.div``;

const ContactContentDiv = styled.div`
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default ContactOverview;
