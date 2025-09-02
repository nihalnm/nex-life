import React from 'react';
import { Link } from 'react-router-dom';
import { ServiceCard, ServiceCardsGrid } from '../animations';
import styled from 'styled-components';

const ServicesIntro = styled.section`
  padding: 4rem 0;
`;

const ServicesGridSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
`;

const ServiceFeatures = styled.section`
  padding: 4rem 0;
`;

const FeatureCard = styled.div`
  height: 100%;
  text-align: center;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .feature-icon {
    margin-bottom: 1.5rem;
    color: #1a3c6e;
  }
`;

const BookingInfo = styled.section`
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

const FaqSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
  
  .card {
    margin-bottom: 1rem;
    border: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  
  .card-header {
    background-color: white;
    padding: 0;
    border-bottom: none;
  }
  
  .btn-link {
    display: block;
    width: 100%;
    text-align: left;
    color: #1a3c6e;
    font-weight: 500;
    text-decoration: none;
    padding: 1rem;
  }
  
  .btn-link:hover, .btn-link:focus {
    text-decoration: none;
    color: #ff7b25;
  }
  
  .card-body {
    padding: 1rem;
    color: #555;
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

const ServicesPage = () => {
  // Service data
  const services = [
    {
      id: 1,
      title: "City Bus Service",
      description: "Regular bus service covering all major city routes with frequent schedules throughout the day. Our modern fleet ensures comfortable and reliable transportation for daily commuters.",
      buttonText: "View Routes",
      buttonLink: "/services/city-bus",
      variant: 1
    },
    {
      id: 2,
      title: "Airport Shuttle",
      description: "Direct shuttle service to and from the airport, available 24/7. Pre-book your ride for hassle-free travel to catch your flight or return home after landing.",
      buttonText: "Book Now",
      buttonLink: "/services/airport-shuttle",
      variant: 2
    },
    {
      id: 3,
      title: "Charter Bus",
      description: "Custom charter bus services for events, tours, and group transportation. Perfect for corporate events, school trips, or private tours with professional drivers.",
      buttonText: "Get Quote",
      buttonLink: "/services/charter-bus",
      variant: 3
    },
    {
      id: 4,
      title: "Express Routes",
      description: "Fast, limited-stop service between major destinations. Save time on your commute with our express routes that connect key locations with minimal stops.",
      buttonText: "Check Schedule",
      buttonLink: "/services/express-routes",
      variant: 4
    },
    {
      id: 5,
      title: "School Bus Service",
      description: "Safe and reliable transportation for students. Our school bus service prioritizes safety with trained drivers and well-maintained vehicles.",
      buttonText: "Learn More",
      buttonLink: "/services/school-bus",
      variant: 1
    },
    {
      id: 6,
      title: "Senior & Accessibility",
      description: "Specialized service for seniors and passengers with disabilities. All our vehicles are equipped with accessibility features and our drivers are trained to assist.",
      buttonText: "View Details",
      buttonLink: "/services/accessibility",
      variant: 2
    }
  ];

  return (
    <div className="services-page">
      {/* Page Header */}
      <header className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p className="lead">Comprehensive transportation solutions for all your needs</p>
        </div>
      </header>
      
      {/* Services Introduction */}
      <ServicesIntro className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2>Transportation Solutions Tailored to You</h2>
            <p className="lead">
              At Nex-Life Transport, we offer a wide range of transportation services 
              designed to meet the diverse needs of our community. From daily commutes 
              to special events, we've got you covered.
            </p>
            <p>
              All our services feature modern, well-maintained vehicles, professional drivers, 
              and a commitment to safety, reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </ServicesIntro>
      
      {/* Service Cards with Animation */}
      <ServicesGridSection>
        <div className="container">
          <h2 className="text-center mb-5">Explore Our Services</h2>
          <ServiceCardsGrid>
            {services.map(service => (
              <ServiceCard 
                key={service.id}
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                buttonLink={service.buttonLink}
                variant={service.variant}
              />
            ))}
          </ServiceCardsGrid>
        </div>
      </ServicesGridSection>
      
      {/* Service Features */}
      <ServiceFeatures className="container">
        <h2 className="text-center mb-4">Why Choose Our Services</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <FeatureCard className="card h-100 border rounded shadow-sm">
              <div className="card-body">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt fa-3x"></i>
                </div>
                <h4>Safety First</h4>
                <p>
                  All our vehicles undergo regular maintenance and safety checks. 
                  Our drivers are professionally trained and follow strict safety protocols.
                </p>
              </div>
            </FeatureCard>
          </div>
          <div className="col-md-4 mb-4">
            <FeatureCard className="card h-100 border rounded shadow-sm">
              <div className="card-body">
                <div className="feature-icon">
                  <i className="fas fa-clock fa-3x"></i>
                </div>
                <h4>Punctuality</h4>
                <p>
                  We understand the importance of being on time. Our services are 
                  scheduled with precision to ensure you reach your destination when expected.
                </p>
              </div>
            </FeatureCard>
          </div>
          <div className="col-md-4 mb-4">
            <FeatureCard className="card h-100 border rounded shadow-sm">
              <div className="card-body">
                <div className="feature-icon">
                  <i className="fas fa-leaf fa-3x"></i>
                </div>
                <h4>Eco-Friendly</h4>
                <p>
                  Our fleet includes hybrid and electric vehicles, and we're constantly 
                  working to reduce our carbon footprint and promote sustainable transportation.
                </p>
              </div>
            </FeatureCard>
          </div>
        </div>
      </ServiceFeatures>
      
      {/* Booking Information */}
      <BookingInfo className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <h2>How to Book Our Services</h2>
            <p>
              Booking with Nex-Life Transport is easy and convenient. You can book our 
              services through multiple channels:
            </p>
            <ul className="list-group list-group-flush mb-4">
              <li className="list-group-item">
                <i className="fas fa-globe text-primary"></i> Online through our website
              </li>
              <li className="list-group-item">
                <i className="fas fa-mobile-alt text-primary"></i> Via our mobile app
              </li>
              <li className="list-group-item">
                <i className="fas fa-phone text-primary"></i> By calling our customer service
              </li>
              <li className="list-group-item">
                <i className="fas fa-building text-primary"></i> In person at our offices
              </li>
            </ul>
            <Link to="/booking" className="btn btn-primary">Book Now</Link>
          </div>
          <div className="col-md-6">
            <ImageContainer>
              <img 
                src="/images/booking-process.jpg" 
                alt="Booking Process" 
              />
            </ImageContainer>
          </div>
        </div>
      </BookingInfo>
      
      {/* FAQ Section */}
      <FaqSection>
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="servicesAccordion">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
                        How early should I book for charter services?
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#servicesAccordion">
                    <div className="card-body">
                      We recommend booking charter services at least 2 weeks in advance to ensure availability, 
                      especially during peak seasons. For large events, booking 1-2 months ahead is advisable.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo">
                        Are your vehicles accessible for passengers with disabilities?
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#servicesAccordion">
                    <div className="card-body">
                      Yes, all our city buses and many of our charter vehicles are equipped with accessibility 
                      features including wheelchair ramps, designated seating areas, and audio-visual announcements.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree">
                        Can I track my bus in real-time?
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#servicesAccordion">
                    <div className="card-body">
                      Yes, our mobile app provides real-time tracking for all city bus routes and airport shuttles. 
                      You can see exactly where your bus is and get accurate arrival time predictions.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FaqSection>
      
      {/* Call to Action */}
      <CtaSection>
        <div className="container">
          <h2>Ready to Get Moving?</h2>
          <p className="lead">
            Contact our team to learn more about our services or to make a booking.
          </p>
          <div className="mt-4">
            <Link to="/contact" className="btn btn-light btn-lg mr-3">Contact Us</Link>
            <Link to="/booking" className="btn btn-outline-light btn-lg">Book Now</Link>
          </div>
        </div>
      </CtaSection>
    </div>
  );
};

export default ServicesPage;

// Made with Bob
