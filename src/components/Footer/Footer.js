import React from 'react';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
  AiFillLinkedin
} from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Mobile</LinkTitle>
          <LinkItem href="tel:+2348147219564" target="_blank" rel="noopener noreferrer">+234-814-721-9564</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:josh.sylvanus.c@gmail.com" target="_blank" rel="noopener noreferrer">josh.sylvanus.c@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building world-class applications</Slogan>
        </CompanyContainer>

        <SocialContainer>
          <SocialIcons href="https://github.com/Yungjay131" target="_blank" rel="noopener noreferrer">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/josh-sylvanus" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/josh_sylvanus" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
          {/*  <SocialIcons href="https://instagram.com">
            <AiFillInstagram size="3rem" />
          </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
