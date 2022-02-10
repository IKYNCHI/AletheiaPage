import React from 'react';
import {FaFacebook,FaYoutube,FaGithub} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';

const Footer = () => {
  return (
      <FooterContainer>
          <FooterWrap>
              <FooterLinksContainer>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                        <FooterLinkTitle>Lorem</FooterLinkTitle>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
                  <FooterLinksWrapper>
                      <FooterLinkItems>
                        <FooterLinkTitle>Ipsum</FooterLinkTitle>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                      </FooterLinkItems>
                      <FooterLinkItems>
                        <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                            <FooterLink to="/benchmark">Lorem Ipsum</FooterLink>
                      </FooterLinkItems>
                  </FooterLinksWrapper>
              </FooterLinksContainer>
              <SocialMedia>
                  <SocialMediaWrap>
                      <SocialLogo to='/'>
                            Aletheia
                      </SocialLogo>
                      <WebsiteRights> Bridging Bois {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                      <SocialIcons>
                          <SocialIconLink href="https://www.facebook.com/Kynchiee/" target="_blank" aria-label="Facebook">
                              <FaFacebook/>
                          </SocialIconLink>
                          <SocialIconLink href="https://www.youtube.com/channel/UCWkt7xqxQUMbrb_Z-rzaAmw" target="_blank" aria-label="Youtube">
                              <FaYoutube/>
                          </SocialIconLink>
                          <SocialIconLink href="github.com/IKYNCHI" target="_blank" aria-label="Github">
                              <FaGithub/>
                          </SocialIconLink>
                      </SocialIcons>
                  </SocialMediaWrap>
              </SocialMedia>
          </FooterWrap>
      </FooterContainer>
  )
};

export default Footer;
