import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1a3c6e;
  color: white;
  padding: 3rem 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 0 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    color: #ff7b25;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ff7b25;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    transition: background-color 0.3s ease;
    
    &:hover {
      background-color: #ff7b25;
    }
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About Us</h3>
          <p>
            Nex-Life Transport provides safe, reliable, and sustainable transportation 
            solutions for individuals and businesses.
          </p>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><FooterLink to="/">Home</FooterLink></li>
            <li><FooterLink to="/about">About Us</FooterLink></li>
            <li><FooterLink to="/services">Services</FooterLink></li>
            <li><FooterLink to="/gallery">Gallery</FooterLink></li>
            <li><FooterLink to="/testimonials">Testimonials</FooterLink></li>
            <li><FooterLink to="/contact">Contact</FooterLink></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Services</h3>
          <ul>
            <li><FooterLink to="/services/city-bus">City Bus Service</FooterLink></li>
            <li><FooterLink to="/services/airport-shuttle">Airport Shuttle</FooterLink></li>
            <li><FooterLink to="/services/charter-bus">Charter Bus</FooterLink></li>
            <li><FooterLink to="/services/express-routes">Express Routes</FooterLink></li>
            <li><FooterLink to="/services/school-bus">School Bus Service</FooterLink></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Us</h3>
          <ul>
            <li>123 Transport Avenue</li>
            <li>Cityville, ST 12345</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@nexlifetransport.com</li>
          </ul>
        </FooterSection>
      </FooterContent>
      
      <BottomBar>
        <p>&copy; {new Date().getFullYear()} Nex-Life Transport. All rights reserved.</p>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;

// Made with Bob
