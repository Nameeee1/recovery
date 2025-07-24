import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


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
        <source src="../src/assets/img/recovery.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </StyledVideo>
    </VideoWrapper>
      
      <CarouselSection>
  <CarouselTitle>Elevate Your Recovery Experience Today</CarouselTitle>

  <CarouselWrapper>
    <CarouselSlider $currentSlide={slide}>
      <SlideGroup>
        <CardContainer>
          <ImageCard src="../src/assets/img/sports.png" alt="Sports" />
          <CardText>SPORTS MASSAGE</CardText>
        </CardContainer>
        <CardContainer>
          <ImageCard src="../src/assets/img/sauna.jpg" alt="Sauna" />
          <CardText>INFRARED SAUNA & COLD PLUNGE</CardText>
        </CardContainer>
        <CardContainer>
          <ImageCard src="../src/assets/img/injuryassessment.png" alt="Assessment" />
          <CardText>INJURY ASSESMENT</CardText>
        </CardContainer>
        <CardContainer>
          <ImageCard src="../src/assets/img/normatec.png" alt="Normatec" />
          <CardText>NORMATEC LEG COMPRESSION</CardText>
        </CardContainer>
      </SlideGroup>

      <SlideGroup>
        <CardContainer>
          <ImageCard src="../src/assets/img/localized.png" alt="Localized" />
          <CardText>LOCALIZED CRYOTHERAPY</CardText>
        </CardContainer>
        <CardContainer>
          <ImageCard src="../src/assets/img/oxygen.png" alt="Oxygen" />
          <CardText>OXYGEN THERAPY</CardText>
        </CardContainer>
        <CardContainer>
          <ImageCard src="../src/assets/img/1on1.png" alt="1 on 1" />
          <CardText>1 ON 1 BREATH WORK COACHING</CardText>
        </CardContainer>
        <CardContainer>
          <ImageCard src="../src/assets/img/iv.png" alt="IV" />
          <CardText>IV THERAPY</CardText>
        </CardContainer>
      </SlideGroup>
    </CarouselSlider>
  </CarouselWrapper>
</CarouselSection>


    </>
  );
}
