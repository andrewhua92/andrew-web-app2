import React from 'react';
import styled from 'styled-components';
import { device  } from './Breakpoints';

import { useMediaQuery } from 'react-responsive';

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

  const isNotMobile = useMediaQuery({query: `${device.tablet}`});

  return (
    <ContactContentDiv>
      {isNotMobile && 
      <FireplaceDiv>
        <ContentParagraph>
          Thanks for taking the time to reach this section. Have a seat by the
          fire.
        </ContentParagraph>
        <GifDiv />
      </FireplaceDiv>}
      <ListDiv>
        <ContactList>
          <ContactListItem>
            <ContactListItemIcon>
              <EmailIcon style={{ color: 'white' }} />
            </ContactListItemIcon>
            <ContactListItemText
              primary="Personal Email"
              secondary="andrewhua90@gmail.com"
            />
          </ContactListItem>
          <ContactDivider />
          <ContactListItem>
            <ContactListItemIcon>
              <EmailIcon style={{ color: 'white' }} />
            </ContactListItemIcon>
            <ContactListItemText
              primary="School Email"
              secondary="a5hua@uwaterloo.ca"
            />
          </ContactListItem>
          <ContactDivider />
          <ContactListItem
            button
            component="a"
            href="https://github.com/andrewhua92"
            target="_blank"
          >
            <ContactListItemIcon>
              <GitHubIcon style={{ color: 'white' }} />
            </ContactListItemIcon>
            <ContactListItemText
              primary="GitHub"
              secondary="github.com/andrewhua92"
            />
          </ContactListItem>
          <ContactDivider />
          <ContactListItem
            button
            component="a"
            href="https://www.linkedin.com/in/andrew-hua90"
            target="_blank"
          >
            <ContactListItemIcon>
              <LinkedInIcon style={{ color: 'white' }} />
            </ContactListItemIcon>
            <ContactListItemText
              primary="LinkedIn"
              secondary="linkedin.com/in/andrew-hua90/"
            />
          </ContactListItem>
        </ContactList>
      </ListDiv>
    </ContactContentDiv>
  );
};

const ContactListItemIcon = styled(ListItemIcon)`

  && :only-child {
    @media ${device.desktop} {
      height: 3rem;
      width: 3rem;
    }
  }

  @media ${device.desktop} {
    height: 4rem;
    width: 4rem;
  }
`;

const ContactListItem = styled(ListItem)`

  @media ${device.desktop} {
    height: 10rem;
  }
`;

const ContactListItemText = styled(ListItemText)`
  
  .MuiListItemText-primary {
    color: white;

    font-size: 1.5rem;

    @media ${device.tablet} {
      font-size: 1rem;
    }

    @media ${device.desktop} {
      font-size: 2rem;
    }
  }

  .MuiListItemText-secondary {
    color: white;

    font-size: 1rem;

    @media ${device.tablet} {
      font-size: 0.875rem;
    }

    @media ${device.desktop} {
      font-size: 1.8rem;
    }
  }
`;

const ContactList = styled(List)`
`;

const ContactDivider = styled(Divider)`
  && {
    background-color: rgba(50, 50, 50, 0.9);
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

  @media ${device.desktop} {
    font-size: 1.7rem;
  }
`;

const GifDiv = styled.div`
  background-image: url(${Fireplace});
  background-size: 30rem;
  background-repeat: no-repeat;
  width: 30vw;
  height: 30vw;

  @media ${device.desktop} {
    background-size: 50rem;
  }
`;

const ListDiv = styled.div`
  height: 30vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    width: 30vw;
  }
`;

const ContactContentDiv = styled.div`
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export default ContactOverview;
