import React from "react";
import { FooterContainer, FooterWrap, FooterLinksWrapper, FooterLinksContainer, FooterLinkTitle, FooterLinkItems, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIconsLink, SocialIcons, WebsiteRights } from "./FooterElements";
import { FaFacebook, FaInstagram, FaReddit, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Our Company</FooterLinkTitle>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Milano</FooterLinkTitle>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Milano</FooterLinkTitle>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Milano</FooterLinkTitle>
              <FooterLink to="/signin">About us</FooterLink>
              <FooterLink to="/signin">How it works</FooterLink>
              <FooterLink to="/signin">Testimonials</FooterLink>
              <FooterLink to="/signin">Careers</FooterLink>
              <FooterLink to="/signin">Investors</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              Milano
            </SocialLogo>
            <WebsiteRights>
              Milano © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink href='/' target='_blank'>
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink href='/' target='_blank'>
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink href='/' target='_blank'>
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink href='/' target='_blank'>
                <FaReddit />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
