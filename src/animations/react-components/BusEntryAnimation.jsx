import React from 'react';
import { Link } from 'react-router-dom';
import '../bus_entry_animation.css';

const BusEntryAnimation = ({ title, subtitle, ctaText, ctaLink }) => {

  return (
    <div className="hero-section">
      {/* Floating circles for ambient animation */}
      <div className="floating-circle circle-1"></div>
      <div className="floating-circle circle-2"></div>
      <div className="floating-circle circle-3"></div>
      <div className="floating-circle circle-4"></div>
      
      {/* Particle system */}
      <div className="particles-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Hero content */}
      <div className="hero-content">
        <h1>{title || 'Nexlife Transport Solutions'}</h1>
        <p>{subtitle || 'Reliable, efficient, and sustainable transportation services for your needs.'}</p>
        {ctaText && ctaLink && (
          <Link to={ctaLink} className="service-card-button">{ctaText}</Link>
        )}
      </div>
      
      {/* School bus animation */}
      <div className="bus-container">
        <div className="road">
          <div className="road-line"></div>
          <div className="traffic-signal">
            <div className="signal-pole"></div>
            <div className="signal-head">
              <div className="signal-light red"></div>
              <div className="signal-light yellow"></div>
              <div className="signal-light green active"></div>
            </div>
          </div>
          <div className="road-sign bus-stop-sign">
            <div className="sign-pole"></div>
            <div className="sign-board">BUS STOP</div>
          </div>
          <div className="road-sign speed-limit-sign">
            <div className="sign-pole"></div>
            <div className="sign-board">SPEED<br/>LIMIT<br/>40</div>
          </div>
          <div className="road-sign yield-sign">
            <div className="sign-pole"></div>
            <div className="sign-board">YIELD</div>
          </div>
          <div className="road-sign crosswalk-sign">
            <div className="sign-pole"></div>
            <div className="sign-board">CROSS<br/>WALK</div>
          </div>
        </div>
        
        <div className="bus">
          <img src="/images/bus.png" alt="Nex-Life Transport Bus" className="bus-image" />
        </div>
      </div>
    </div>
  );
};

export default BusEntryAnimation;
