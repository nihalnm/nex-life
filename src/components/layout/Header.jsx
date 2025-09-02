import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll event to change header style when scrolled
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

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderContainer scrolled={isScrolled}>
      <div className="container">
        <HeaderContent>
          <Logo to="/">
            <LogoText>Nex-Life Transport</LogoText>
          </Logo>

          {/* Desktop Navigation */}
          <Nav>
            <NavList>
              <NavItem>
                <NavLinkStyled to="/" end>Home</NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/about">About Us</NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/services">Services</NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/gallery">Gallery</NavLinkStyled>
              </NavItem>
              <NavItem>
                <NavLinkStyled to="/testimonials">Testimonials</NavLinkStyled>
              </NavItem>
              <NavItem>
                <ContactButton to="/contact">Contact Us</ContactButton>
              </NavItem>
            </NavList>
          </Nav>

          {/* Mobile Menu Button */}
          <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </MobileMenuButton>
        </HeaderContent>

        {/* Mobile Navigation */}
        <MobileNav isOpen={isMobileMenuOpen}>
          <MobileNavList>
            <MobileNavItem>
              <MobileNavLinkStyled to="/" end onClick={toggleMobileMenu}>Home</MobileNavLinkStyled>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLinkStyled to="/about" onClick={toggleMobileMenu}>About Us</MobileNavLinkStyled>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLinkStyled to="/services" onClick={toggleMobileMenu}>Services</MobileNavLinkStyled>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLinkStyled to="/gallery" onClick={toggleMobileMenu}>Gallery</MobileNavLinkStyled>
            </MobileNavItem>
            <MobileNavItem>
              <MobileNavLinkStyled to="/testimonials" onClick={toggleMobileMenu}>Testimonials</MobileNavLinkStyled>
            </MobileNavItem>
            <MobileNavItem>
              <MobileContactButton to="/contact" onClick={toggleMobileMenu}>Contact Us</MobileContactButton>
            </MobileNavItem>
          </MobileNavList>
        </MobileNav>
      </div>
    </HeaderContainer>
  );
};

// Styled Components
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  background-color: ${({ scrolled, theme }) => scrolled ? 'white' : 'transparent'};
  box-shadow: ${({ scrolled, theme }) => scrolled ? theme.shadows.md : 'none'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  
  .container {
    padding: ${({ scrolled }) => scrolled ? '0.5rem 1rem' : '1rem'};
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const Nav = styled.nav`
  display: none;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin-left: 1.5rem;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  padding: 0.5rem 0;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: width 0.3s ease;
  }
  
  &:hover:after,
  &.active:after {
    width: 100%;
  }
`;

const ContactButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    color: white;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
  
  span {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.3s ease;
  }
`;

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: ${({ theme }) => theme.zIndex.modal};
  transform: translateY(${({ isOpen }) => isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const MobileNavItem = styled.li`
  margin: 1.5rem 0;
`;

const MobileNavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: 1.5rem;
  
  &.active {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MobileContactButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: 1.5rem;
  margin-top: 1rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    color: white;
  }
`;

export default Header;

// Made with Bob
