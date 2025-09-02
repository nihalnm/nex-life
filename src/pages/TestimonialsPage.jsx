import React, { useState } from 'react';
import styled from 'styled-components';

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-bottom: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const QuoteIcon = styled.div`
  font-size: 48px;
  color: #3a6fc9;
  opacity: 0.2;
  margin-bottom: 20px;
  line-height: 1;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 20px;
  font-style: italic;
  color: #444;
`;

const CustomerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CustomerImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CustomerDetails = styled.div`
  h5 {
    margin: 0 0 5px 0;
    color: #333;
  }
  
  p {
    margin: 0;
    color: #666;
    font-size: 0.9rem;
  }
`;

const RatingStars = styled.div`
  color: #ffc107;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 10px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  background: ${props => props.active ? '#3a6fc9' : '#f8f9fa'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid #dee2e6;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? '#2c5999' : '#e9ecef'};
  }
`;

const TestimonialsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'Event Coordinator at TechCorp',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Nex-Life Transport has been our go-to transportation provider for our company events. Their service is always punctual and their drivers are professional and courteous. I highly recommend their charter bus service for corporate events.',
      rating: 5,
      category: 'corporate'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Regular Commuter',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'I use Nex-Life\'s city bus service daily for my commute to work. The buses are always clean, air-conditioned, and run on schedule. The mobile app makes it easy to track bus arrivals in real-time. Great service!',
      rating: 4,
      category: 'commuter'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Tour Guide',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'As a tour guide, I\'ve worked with many transportation companies, but Nex-Life stands out for their reliability and quality of vehicles. My tour groups always comment on how comfortable the buses are and how friendly the drivers are.',
      rating: 5,
      category: 'tourism'
    },
    {
      id: 4,
      name: 'David Wilson',
      position: 'School Principal',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      text: 'We\'ve been using Nex-Life for our school field trips for the past three years. Their safety record is impeccable, and they always provide well-maintained buses with experienced drivers. Parents feel confident knowing their children are in good hands.',
      rating: 5,
      category: 'education'
    },
    {
      id: 5,
      name: 'Jennifer Lee',
      position: 'Frequent Traveler',
      image: 'https://randomuser.me/api/portraits/women/90.jpg',
      text: 'The airport shuttle service by Nex-Life is a lifesaver! Always on time, clean vehicles, and courteous drivers. I travel frequently for business, and I can always count on them for reliable transportation to and from the airport.',
      rating: 4,
      category: 'airport'
    },
    {
      id: 6,
      name: 'Robert Martinez',
      position: 'Wedding Planner',
      image: 'https://randomuser.me/api/portraits/men/29.jpg',
      text: 'I\'ve recommended Nex-Life to all my wedding clients for guest transportation. They offer beautiful, well-maintained vehicles and their drivers are always professional. They help make the wedding day stress-free for everyone involved.',
      rating: 5,
      category: 'events'
    }
  ];
  
  const filteredTestimonials = activeCategory === 'all' 
    ? testimonials 
    : testimonials.filter(item => item.category === activeCategory);
  
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i key={i} className={i < rating ? "fas fa-star" : "far fa-star"}></i>
      );
    }
    return stars;
  };
  
  return (
    <div className="testimonials-page">
      {/* Page Header */}
      <header className="page-header bg-primary text-white py-5">
        <div className="container">
          <h1>Testimonials</h1>
          <p className="lead">What our customers say about our services</p>
        </div>
      </header>
      
      {/* Testimonials Content */}
      <section className="testimonials-content container my-5">
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h2>Customer Experiences</h2>
            <p className="lead">
              Don't just take our word for it. Read what our customers have to say about their experiences with Nex-Life Transport.
            </p>
          </div>
        </div>
        
        <CategoryFilter>
          <FilterButton 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          >
            All Testimonials
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'corporate'} 
            onClick={() => setActiveCategory('corporate')}
          >
            Corporate
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'commuter'} 
            onClick={() => setActiveCategory('commuter')}
          >
            Commuters
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'tourism'} 
            onClick={() => setActiveCategory('tourism')}
          >
            Tourism
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'education'} 
            onClick={() => setActiveCategory('education')}
          >
            Education
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'airport'} 
            onClick={() => setActiveCategory('airport')}
          >
            Airport
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'events'} 
            onClick={() => setActiveCategory('events')}
          >
            Events
          </FilterButton>
        </CategoryFilter>
        
        <div className="row">
          {filteredTestimonials.map((testimonial) => (
            <div className="col-lg-6" key={testimonial.id}>
              <TestimonialCard>
                <QuoteIcon>
                  <i className="fas fa-quote-left"></i>
                </QuoteIcon>
                <RatingStars>
                  {renderStars(testimonial.rating)}
                </RatingStars>
                <TestimonialText>
                  {testimonial.text}
                </TestimonialText>
                <CustomerInfo>
                  <CustomerImage>
                    <img src={testimonial.image} alt={testimonial.name} />
                  </CustomerImage>
                  <CustomerDetails>
                    <h5>{testimonial.name}</h5>
                    <p>{testimonial.position}</p>
                  </CustomerDetails>
                </CustomerInfo>
              </TestimonialCard>
            </div>
          ))}
        </div>
        
        <div className="row mt-5">
          <div className="col-12 text-center">
            <h3>Share Your Experience</h3>
            <p>We value your feedback! If you've used our services, we'd love to hear about your experience.</p>
            <a href="/contact" className="btn btn-primary mt-3">Submit Your Testimonial</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;

// Made with Bob
