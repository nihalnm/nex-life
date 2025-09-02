import React from 'react';
import { Link } from 'react-router-dom';
import { RouteMapAnimation } from '../animations';
import styled from 'styled-components';

const CompanyOverview = styled.section`
  padding: 4rem 0;
`;

const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const RouteMapSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
`;

const CoreValues = styled.section`
  padding: 4rem 0;
`;

const ValueCard = styled.div`
  height: 100%;
  text-align: center;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .value-icon {
    margin-bottom: 1.5rem;
    color: #1a3c6e;
  }
`;

const TeamSection = styled.section`
  padding: 4rem 0;
`;

const TeamCard = styled.div`
  height: 100%;
  text-align: center;
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
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
`;

const AboutPage = () => {
  // Custom stations for the route map
  const stations = [
    { id: 1, name: 'Downtown', position: 10 },
    { id: 2, name: 'Business District', position: 30 },
    { id: 3, name: 'School', position: 50 },
    { id: 4, name: 'Shopping Mall', position: 70 },
    { id: 5, name: 'Airport', position: 90 }
  ];

  return (
    <div className="about-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>About Nex-Life Transport</h1>
          <p className="lead">Your trusted transportation partner since 2000</p>
        </div>
      </header>
      
      {/* Company Overview */}
      <CompanyOverview className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2>Our Story</h2>
            <p>
              Founded in 2000, Nex-Life Transport began with a small fleet of just 5 buses 
              serving the downtown area. Over the years, we've grown to become the city's 
              leading transportation provider with a modern fleet of over 150 vehicles.
            </p>
            <p>
              Our mission is to provide safe, reliable, and environmentally friendly 
              transportation solutions that connect communities and enhance mobility for all.
            </p>
            <p>
              What sets us apart is our commitment to innovation, customer service, and 
              sustainability. We continuously invest in the latest technology and training 
              to ensure the highest standards of service and safety.
            </p>
          </div>
          <div className="col-md-6">
            <ImageContainer>
              <img
                src="/images/traffic-vehicle-urban-reflections-city.jpg"
                alt="Nex-Life Transport History"
              />
            </ImageContainer>
          </div>
        </div>
      </CompanyOverview>
      
      {/* Route Map Animation */}
      <RouteMapSection>
        <div className="container">
          <h2 className="text-center mb-4">Our Service Network</h2>
          <p className="text-center mb-5">
            We connect all major locations in the city with our extensive route network.
          </p>
          <RouteMapAnimation stations={stations} />
        </div>
      </RouteMapSection>
      
      {/* Core Values */}
      <CoreValues className="container">
        <h2 className="text-center mb-4">Our Core Values</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <ValueCard className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="value-icon">
                  <i className="fas fa-shield-alt fa-3x"></i>
                </div>
                <h5 className="card-title">Safety</h5>
                <p className="card-text">
                  Safety is our top priority. We maintain rigorous safety standards and 
                  regular vehicle inspections.
                </p>
              </div>
            </ValueCard>
          </div>
          <div className="col-md-3 mb-4">
            <ValueCard className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="value-icon">
                  <i className="fas fa-clock fa-3x"></i>
                </div>
                <h5 className="card-title">Reliability</h5>
                <p className="card-text">
                  We pride ourselves on punctuality and dependability, ensuring you reach 
                  your destination on time.
                </p>
              </div>
            </ValueCard>
          </div>
          <div className="col-md-3 mb-4">
            <ValueCard className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="value-icon">
                  <i className="fas fa-leaf fa-3x"></i>
                </div>
                <h5 className="card-title">Sustainability</h5>
                <p className="card-text">
                  We're committed to reducing our environmental impact with eco-friendly 
                  vehicles and practices.
                </p>
              </div>
            </ValueCard>
          </div>
          <div className="col-md-3 mb-4">
            <ValueCard className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <div className="value-icon">
                  <i className="fas fa-users fa-3x"></i>
                </div>
                <h5 className="card-title">Community</h5>
                <p className="card-text">
                  We actively engage with and support the communities we serve through 
                  various initiatives.
                </p>
              </div>
            </ValueCard>
          </div>
        </div>
      </CoreValues>
      
      {/* Leadership Team */}
      <TeamSection className="container">
        <h2 className="text-center mb-4">Our Leadership Team</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <TeamCard className="card h-100 border-0 shadow-sm">
              <img src="/images/ceo.jpg" alt="CEO" />
              <div className="card-body">
                <h5 className="card-title">John Smith</h5>
                <p className="card-subtitle text-muted mb-2">Chief Executive Officer</p>
                <p className="card-text">
                  With over 25 years of experience in the transportation industry, 
                  John leads our company with vision and expertise.
                </p>
              </div>
            </TeamCard>
          </div>
          <div className="col-md-4 mb-4">
            <TeamCard className="card h-100 border-0 shadow-sm">
              <img src="/images/coo.jpg" alt="COO" />
              <div className="card-body">
                <h5 className="card-title">Maria Rodriguez</h5>
                <p className="card-subtitle text-muted mb-2">Chief Operations Officer</p>
                <p className="card-text">
                  Maria ensures the smooth operation of our fleet and services, 
                  focusing on efficiency and customer satisfaction.
                </p>
              </div>
            </TeamCard>
          </div>
          <div className="col-md-4 mb-4">
            <TeamCard className="card h-100 border-0 shadow-sm">
              <img src="/images/cto.jpg" alt="CTO" />
              <div className="card-body">
                <h5 className="card-title">David Chen</h5>
                <p className="card-subtitle text-muted mb-2">Chief Technology Officer</p>
                <p className="card-text">
                  David leads our technology initiatives, implementing innovative 
                  solutions to enhance the customer experience.
                </p>
              </div>
            </TeamCard>
          </div>
        </div>
      </TeamSection>
      
      {/* Call to Action */}
      <CtaSection>
        <div className="container">
          <h2>Join Our Team</h2>
          <p className="lead">
            We're always looking for talented individuals to join our growing team.
          </p>
          <Link to="/careers" className="btn btn-light btn-lg">View Career Opportunities</Link>
        </div>
      </CtaSection>
    </div>
  );
};

export default AboutPage;

// Made with Bob
