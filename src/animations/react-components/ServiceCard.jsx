import React from 'react';
import PropTypes from 'prop-types';
import '../service_card_animation.css';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  buttonText, 
  buttonLink, 
  variant = 1 
}) => {
  return (
    <div className={`service-card variant-${variant}`}>
      <div className="service-card-header">
        {/* Mini bus animation in the header */}
        <div className="mini-bus-container">
          <div className="mini-bus-animation">
            <div className="mini-bus-top"></div>
            <div className="mini-bus-window window-1"></div>
            <div className="mini-bus-window window-2"></div>
            <div className="mini-bus-window window-3"></div>
            <div className="mini-bus-wheel mini-wheel-front"></div>
            <div className="mini-bus-wheel mini-wheel-back"></div>
            <div className="mini-bus-light"></div>
          </div>
          <div className="road-strip"></div>
        </div>
      </div>
      
      <div className="service-card-icon">
        {icon || (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4,16c0,0.88 0.39,1.67 1,2.22V20c0,0.55 0.45,1 1,1h1c0.55,0 1-0.45 1-1v-1h8v1c0,0.55 0.45,1 1,1h1c0.55,0 1-0.45 1-1v-1.78c0.61-0.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8,0.5-8,4V16z M7.5,17c-0.83,0-1.5-0.67-1.5-1.5S6.67,14 7.5,14s1.5,0.67 1.5,1.5S8.33,17 7.5,17z M16.5,17c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5 1.5-1.5 1.5,0.67 1.5,1.5S17.33,17 16.5,17z M18,11H6V6h12V11z"/>
          </svg>
        )}
      </div>
      
      <div className="service-card-content">
        <h3 className="service-card-title">{title || 'Service Title'}</h3>
        <p className="service-card-description">
          {description || 'This is a description of the service. It provides details about what the service offers and its benefits.'}
        </p>
        {buttonText && buttonLink && (
          <a href={buttonLink} className="service-card-button">{buttonText}</a>
        )}
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  variant: PropTypes.oneOf([1, 2, 3, 4])
};

// Service Cards Grid Component
export const ServiceCardsGrid = ({ children }) => {
  return (
    <div className="service-cards-grid">
      {children}
    </div>
  );
};

ServiceCardsGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default ServiceCard;

// Made with Bob
