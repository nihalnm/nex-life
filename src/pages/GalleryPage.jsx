import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    
    .gallery-overlay {
      opacity: 1;
    }
  }
  
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    display: block;
  }
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(58, 111, 201, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 20px;
  text-align: center;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  
  img {
    max-width: 100%;
    max-height: 80vh;
    display: block;
    border-radius: 4px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
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

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const galleryItems = [
    {
      id: 1,
      image: '/images/modern-bus.jpg',
      title: 'Modern Fleet Bus',
      description: 'Our newest addition to the fleet, featuring modern amenities and comfort.',
      category: 'fleet'
    },
    {
      id: 2,
      image: '/images/interior-public-bus-transport.jpg',
      title: 'Bus Interior',
      description: 'Spacious and comfortable interior of our public transport buses.',
      category: 'interior'
    },
    {
      id: 3,
      image: '/images/airport-shuttle.jpg',
      title: 'Airport Shuttle',
      description: 'Dedicated airport shuttle service with luggage space.',
      category: 'service'
    },
    {
      id: 4,
      image: '/images/charter-bus.jpg',
      title: 'Charter Bus',
      description: 'Premium charter bus available for group events and tours.',
      category: 'fleet'
    },
    {
      id: 5,
      image: '/images/city-bus.jpg',
      title: 'City Bus',
      description: 'Regular city bus service covering all major routes.',
      category: 'service'
    },
    {
      id: 6,
      image: '/images/traffic-vehicle-urban-reflections-city.jpg',
      title: 'Urban Transport',
      description: 'Our vehicles navigating through the busy city streets.',
      category: 'service'
    },
    {
      id: 7,
      image: '/images/empty-seats-by-window-train.jpg',
      title: 'Comfortable Seating',
      description: 'Comfortable seating arrangements in our vehicles.',
      category: 'interior'
    },
    {
      id: 8,
      image: '/images/booking-process.jpg',
      title: 'Booking Process',
      description: 'Easy and convenient booking process for all our services.',
      category: 'service'
    }
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <div className="gallery-page">
      {/* Page Header */}
      <header className="page-header bg-primary text-white py-5">
        <div className="container">
          <h1>Our Gallery</h1>
          <p className="lead">Explore our fleet and services through images</p>
        </div>
      </header>
      
      {/* Gallery Content */}
      <section className="gallery-content container my-5">
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h2>Transport Fleet & Services</h2>
            <p className="lead">
              Browse through our collection of images showcasing our modern fleet, 
              comfortable interiors, and various transportation services.
            </p>
          </div>
        </div>
        
        <CategoryFilter>
          <FilterButton 
            active={activeCategory === 'all'} 
            onClick={() => setActiveCategory('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'fleet'} 
            onClick={() => setActiveCategory('fleet')}
          >
            Fleet
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'interior'} 
            onClick={() => setActiveCategory('interior')}
          >
            Interiors
          </FilterButton>
          <FilterButton 
            active={activeCategory === 'service'} 
            onClick={() => setActiveCategory('service')}
          >
            Services
          </FilterButton>
        </CategoryFilter>
        
        <GalleryGrid>
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} onClick={() => openModal(item)}>
              <img src={item.image} alt={item.title} />
              <GalleryOverlay className="gallery-overlay">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </GalleryOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </section>
      
      {/* Modal for enlarged image */}
      {selectedImage && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <div className="text-white text-center mt-3">
              <h4>{selectedImage.title}</h4>
              <p>{selectedImage.description}</p>
            </div>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default GalleryPage;

// Made with Bob
