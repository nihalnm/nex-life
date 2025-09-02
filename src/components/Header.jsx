import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.5s ease;
  background-color: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgb(4 27 61 / 80%)'};
  box-shadow: ${props => props.isScrolled ? '0 2px 20px rgba(0, 0, 0, 0.05)' : '0 2px 20px rgba(0, 0, 0, 0.1)'};
  backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  color: ${props => props.isScrolled ? '#3a6fc9' : 'white'};
  font-size: 1.5rem;
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  letter-spacing: -0.5px;
  transition: all 0.3s ease;
  
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(26, 60, 110, 0.9)'};
    padding: 1.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${props => props.isScrolled ? '#333' : 'white'};
  text-decoration: none;
  margin-left: 2rem;
  font-weight: 400;
  position: relative;
  padding: 0.5rem 0;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  text-shadow: ${props => props.isScrolled ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.2)'};
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${props => props.isScrolled ? '#3a6fc9' : 'white'};
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: ${props => props.isScrolled ? '#3a6fc9' : 'rgba(255, 255, 255, 0.8)'};
  }
  
  &:hover:after, 
  &.active:after {
    width: 100%;
  }
  
  &.active {
    color: ${props => props.isScrolled ? '#3a6fc9' : 'white'};
    font-weight: 500;
  }
  
  @media (max-width: 768px) {
    margin: 0.75rem 0;
    width: 100%;
    text-align: center;
    color: ${props => props.isScrolled ? '#333' : 'white'};
    
    &:after {
      background-color: ${props => props.isScrolled ? '#3a6fc9' : 'white'};
    }
    
    &:hover, &.active {
      color: ${props => props.isScrolled ? '#3a6fc9' : 'rgba(255, 255, 255, 0.8)'};
    }
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.isScrolled ? '#333' : 'white'};
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.isScrolled ? '#3a6fc9' : 'rgba(255, 255, 255, 0.8)'};
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <HeaderContainer isScrolled={isScrolled}>
      <NavContainer>
        <Logo to="/" onClick={closeMobileMenu} isScrolled={isScrolled}>
          <img src="images/logo.png" alt="Nex-Life Transport" />
          
        </Logo>
        
        <MobileMenuButton 
          onClick={toggleMobileMenu} 
          aria-label="Toggle menu"
          isScrolled={isScrolled}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
        
        <NavLinks isOpen={isMobileMenuOpen} isScrolled={isScrolled}>
          <StyledNavLink to="/" onClick={closeMobileMenu} isScrolled={isScrolled}>
            Home
          </StyledNavLink>
          <StyledNavLink to="/about" onClick={closeMobileMenu} isScrolled={isScrolled}>
            About
          </StyledNavLink>
          <StyledNavLink to="/services" onClick={closeMobileMenu} isScrolled={isScrolled}>
            Services
          </StyledNavLink>
          <StyledNavLink to="/gallery" onClick={closeMobileMenu} isScrolled={isScrolled}>
            Gallery
          </StyledNavLink>
          <StyledNavLink to="/testimonials" onClick={closeMobileMenu} isScrolled={isScrolled}>
            Testimonials
          </StyledNavLink>
          <StyledNavLink to="/contact" onClick={closeMobileMenu} isScrolled={isScrolled}>
            Contact
          </StyledNavLink>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;

// Made with Bob
