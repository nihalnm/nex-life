import React from 'react';
import { Link } from 'react-router-dom';
import { BusEntryAnimation, StatsCounter, StatsContainer } from '../animations';
import styled from 'styled-components';

const WelcomeSection = styled.section`
  padding: 4rem 0;
  
  @media (max-width: 992px) {
    padding: 3.5rem 0;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 576px) {
    padding: 2.5rem 0;
  }
`;

const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 100%;
  min-height: 250px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    min-height: 220px;
  }
  
  @media (max-width: 576px) {
    min-height: 200px;
  }
`;

const FeaturedServices = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
  
  @media (max-width: 992px) {
    padding: 3.5rem 0;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 576px) {
    padding: 2.5rem 0;
  }
`;

const ServiceCard = styled.div`
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    .card-img-top {
      height: 180px;
    }
  }
  
  @media (max-width: 576px) {
    .card-img-top {
      height: 160px;
    }
  }
`;

const TestimonialsPreview = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
  
  .testimonial-card {
    padding: 2rem;
    
    p {
      font-size: 1.1rem;
      line-height: 1.7;
    }
  }
  
  @media (max-width: 992px) {
    padding: 3.5rem 0;
    
    .testimonial-card {
      padding: 1.8rem;
      
      p {
        font-size: 1.05rem;
      }
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
    
    .testimonial-card {
      padding: 1.5rem;
      
      p {
        font-size: 1rem;
      }
    }
  }
  
  @media (max-width: 576px) {
    padding: 2.5rem 0;
    
    .testimonial-card {
      padding: 1.2rem;
      
      p {
        font-size: 0.95rem;
        line-height: 1.6;
      }
    }
  }
`;

const CtaSection = styled.section`
  padding: 4rem 0;
  background: linear-gradient(135deg, #1a3c6e 0%, #2c5999 100%);
  color: white;
  text-align: center;
  
  h2 {
    color: white;
    margin-bottom: 1rem;
  }
  
  .lead {
    color: white;
    margin-bottom: 2rem;
    font-size: 1.25rem;
  }
  
  @media (max-width: 992px) {
    padding: 3.5rem 0;
    
    h2 {
      font-size: 1.8rem;
    }
    
    .lead {
      font-size: 1.15rem;
      margin-bottom: 1.8rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
    
    h2 {
      font-size: 1.6rem;
    }
    
    .lead {
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
    }
  }
  
  @media (max-width: 576px) {
    padding: 2.5rem 0;
    
    h2 {
      font-size: 1.5rem;
    }
    
    .lead {
      font-size: 1rem;
      margin-bottom: 1.2rem;
    }
  }
`;

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Bus Entry Animation */}
      <BusEntryAnimation 
        title="Nex-Life Passenger Transport" 
        subtitle="Reliable, efficient, and sustainable transportation services for your needs." 
        ctaText="Explore Services" 
        ctaLink="/services" 
      />
      
      {/* Welcome Section */}
      <WelcomeSection className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 mb-4 mb-lg-0">
            <h2 className="mb-3">Welcome to Nex-Life Transport</h2>
            <p className="lead mb-3">
              Your trusted partner for all transportation needs in the city and beyond.
            </p>
            <p className="mb-4">
              At Nex-Life Transport, we're committed to providing safe, reliable, and
              environmentally friendly transportation solutions. With our modern fleet
              and dedicated team, we ensure that you reach your destination comfortably
              and on time.
            </p>
            <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
          </div>
          <div className="col-lg-6 col-md-6">
            <ImageContainer>
              <img
                src="/images/modern-bus.jpg"
                alt="Modern Nex-Life Transport Bus"
                loading="lazy"
              />
            </ImageContainer>
          </div>
        </div>
      </WelcomeSection>
      
      {/* Stats Section with Wheel Counters */}
      <StatsContainer>
        <StatsCounter 
          value="500" 
          label="Daily Routes" 
          duration={2000} 
          variant={1} 
        />
        <StatsCounter 
          value="10000" 
          label="Daily Passengers" 
          duration={2500} 
          variant={2} 
          animationDirection="reverse" 
        />
        <StatsCounter 
          value="150" 
          label="Vehicles" 
          duration={1800} 
          variant={3} 
        />
        <StatsCounter 
          value="25" 
          label="Years of Service" 
          duration={1500} 
          variant={4} 
        />
      </StatsContainer>
      
      {/* Featured Services Section */}
      <FeaturedServices>
        <div className="container">
          <h2 className="text-center mb-4">Our Featured Services</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <ServiceCard className="card h-100">
                <img src="/images/city-bus.jpg" alt="City Bus Service" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">City Bus Service</h5>
                  <p className="card-text">Regular bus service covering all major city routes with frequent schedules.</p>
                  <Link to="/services/city-bus" className="btn btn-outline-primary">View Routes</Link>
                </div>
              </ServiceCard>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <ServiceCard className="card h-100">
                <img src="/images/airport-shuttle.jpg" alt="Airport Shuttle" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Airport Shuttle</h5>
                  <p className="card-text">Direct shuttle service to and from the airport, available 24/7.</p>
                  <Link to="/services/airport-shuttle" className="btn btn-outline-primary">Book Now</Link>
                </div>
              </ServiceCard>
            </div>
            <div className="col-lg-4 col-md-6 mx-auto mb-4">
              <ServiceCard className="card h-100">
                <img src="/images/charter-bus.jpg" alt="Charter Bus" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">Charter Bus</h5>
                  <p className="card-text">Custom charter bus services for events, tours, and group transportation.</p>
                  <Link to="/services/charter-bus" className="btn btn-outline-primary">Get Quote</Link>
                </div>
              </ServiceCard>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/services" className="btn btn-primary">View All Services</Link>
          </div>
        </div>
      </FeaturedServices>
      
      {/* Testimonials Preview */}
      <TestimonialsPreview>
        <div className="container">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div className="card border-0 shadow testimonial-card">
                <div className="card-body text-center">
                  <i className="fas fa-quote-left text-primary mb-3" style={{ fontSize: '1.5rem', opacity: 0.5 }}></i>
                  <p className="font-italic mb-4">
                    "Nex-Life Transport has been our go-to transportation provider for our company events.
                    Their service is always punctual and their drivers are professional and courteous."
                  </p>
                  <footer className="blockquote-footer">
                    Sarah Johnson, <cite title="Source Title">Event Coordinator at TechCorp</cite>
                  </footer>
                </div>
              </div>
              <div className="text-center mt-4">
                <Link to="/testimonials" className="btn btn-outline-primary">Read More Testimonials</Link>
              </div>
            </div>
          </div>
        </div>
      </TestimonialsPreview>
      
      {/* Call to Action */}
      <CtaSection>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <h2>Ready to Experience Nex-Life Transport?</h2>
              <p className="lead">
                Contact us today to learn more about our services or to book your next trip.
              </p>
              <Link to="/contact" className="btn btn-light btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </CtaSection>
    </div>
  );
};

export default HomePage;

// Made with Bob
