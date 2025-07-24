import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import recoveryVideo from '../src/assets/img/recovery.mp4';
import sportsImg from '../src/assets/img/sports.png';
import saunaImg from '../src/assets/img/sauna.jpg';
import injuryImg from '../src/assets/img/injuryassessment.png';
import normatecImg from '../src/assets/img/normatec.png';
import localizedImg from '../src/assets/img/localized.png';
import oxygenImg from '../src/assets/img/oxygen.png';
import oneononeImg from '../src/assets/img/oneonone.png';
import ivImg from '../src/assets/img/iv.png';

import { useLocation } from 'react-router-dom';
import {
  HeaderContainer,
  LogoContainer,
  LogoName,
  Nav,
  NavList,
  NavItem,
  StyledNavLink,
  StyledButton,
  DropdownMenu,
  DropdownItem
} from './styles/HeaderStyles';

import { 
  ImageCard, 
  CarouselWrapper, 
  CarouselSlider,
  SlideGroup, 
  CardText, 
  CardContainer,
  CarouselSection,
  CarouselTitle
 } from './styles/Card';

import { VideoWrapper, StyledVideo } from './styles/Video';

export default function Dashboard() {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  const [slide, setSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(prev => (prev === 0 ? 1 : 0));
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);
  

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <LogoName>RECOVERY MODE</LogoName>
        </LogoContainer>
        <Nav>
          <NavList>
            <NavItem>
              <StyledNavLink to="/" $active={location.pathname === '/'}>Home</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/about" $active={location.pathname === '/about'}>About</StyledNavLink>
            </NavItem>
            <NavItem
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ position: "relative" }}
              >
              <StyledNavLink to="/services" $active={location.pathname === '/services'}>Services</StyledNavLink>
                  {dropdownOpen && (
                <DropdownMenu>
                    <DropdownItem>Service 1</DropdownItem>
                    <DropdownItem>Service 2</DropdownItem>
                    <DropdownItem>Service 3</DropdownItem>
                  </DropdownMenu>
                     )}
              </NavItem>
            <NavItem>
              <StyledNavLink to="/contact" $active={location.pathname === '/contact'}>Contact</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledButton onClick={() => window.location.href = '/contact'}>Sign Up</StyledButton>
            </NavItem>
            <NavItem>
              <StyledButton onClick={() => window.location.href = '/contact'}>Book Now</StyledButton>
            </NavItem>
          </NavList>
        </Nav>
      </HeaderContainer>

      <VideoWrapper>
      <StyledVideo autoPlay muted loop playsInline>
      <source src={recoveryVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
    </VideoWrapper>
      
      <CarouselSection>
  <CarouselTitle>Elevate Your Recovery Experience Today</CarouselTitle>

  <CarouselWrapper>
    <CarouselSlider $currentSlide={slide}>
      <SlideGroup>
        <CardContainer>
        <ImageCard src={sportsImg} alt="Sports" />
          <CardText>SPORTS MASSAGE</CardText>
        </CardContainer>
        <CardContainer>
        <ImageCard src={saunaImg} alt="Sauna" />
          <CardText>INFRARED SAUNA & COLD PLUNGE</CardText>
        </CardContainer>
        <CardContainer>
        <ImageCard src={injuryImg} alt="Injury Assesment" />
          <CardText>INJURY ASSESMENT</CardText>
        </CardContainer>
        <CardContainer>
        <ImageCard src={normatecImg} alt="Normatec Leg Suppression" />
          <CardText>NORMATEC LEG COMPRESSION</CardText>
        </CardContainer>
      </SlideGroup>

      <SlideGroup>
        <CardContainer>
        <ImageCard src={localizedImg} alt="Localized Cryotherapy" />
          <CardText>LOCALIZED CRYOTHERAPY</CardText>
        </CardContainer>
        <CardContainer>
        <ImageCard src={oxygenImg} alt="Oxygen Theraphy" />
          <CardText>OXYGEN THERAPY</CardText>
        </CardContainer>
        <CardContainer>
        <ImageCard src={oneononeImg} alt="1 on 1 Breath Work Coaching" />
          <CardText>1 ON 1 BREATH WORK COACHING</CardText>
        </CardContainer>
        <CardContainer>
        <ImageCard src={ivImg} alt="IV Theraphy" />
          <CardText>IV THERAPY</CardText>
        </CardContainer>
      </SlideGroup>
    </CarouselSlider>
  </CarouselWrapper>
</CarouselSection>


    </>
  );
}
