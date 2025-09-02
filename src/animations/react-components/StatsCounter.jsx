import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../stats_counter_animation.css';

const StatsCounter = ({ 
  value, 
  label, 
  duration = 2000, 
  variant = 1,
  animationDirection = 'normal' 
}) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const targetValue = parseInt(value, 10) || 0;
  
  useEffect(() => {
    let startTime;
    let animationFrameId;
    let observer;
    
    const easeOutQuad = t => t * (2 - t);
    
    const animateCount = timestamp => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutQuad(progress);
      
      setCount(Math.floor(easedProgress * targetValue));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      }
    };
    
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start counter animation when the component is visible
          entry.target.classList.add('animate');
          animationFrameId = requestAnimationFrame(animateCount);
          observer.unobserve(entry.target);
        }
      });
    };
    
    // Set up intersection observer to trigger animation when visible
    observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (observer && counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetValue, duration]);
  
  const wheelAnimationClass = animationDirection === 'reverse' 
    ? 'wheel-animation-reverse' 
    : 'wheel-animation';
  
  return (
    <div className={`stats-item variant-${variant}`} ref={counterRef}>
      <div className="wheel-counter">
        <div className="wheel-outer"></div>
        <div className={`wheel-inner ${wheelAnimationClass}`}>
          <div className="counter-wrapper">
            <span className="counter-value js-counter">{count}</span>
          </div>
        </div>
        <div className="wheel-spoke spoke-1"></div>
        <div className="wheel-spoke spoke-2"></div>
        <div className="wheel-spoke spoke-3"></div>
        <div className="wheel-spoke spoke-4"></div>
        <div className="wheel-spoke spoke-5"></div>
        <div className="wheel-spoke spoke-6"></div>
        <div className="wheel-spoke spoke-7"></div>
        <div className="wheel-spoke spoke-8"></div>
        <div className="highlight-pulse"></div>
      </div>
      <div className="counter-label">{label || 'Stat'}</div>
    </div>
  );
};

StatsCounter.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  duration: PropTypes.number,
  variant: PropTypes.oneOf([1, 2, 3, 4]),
  animationDirection: PropTypes.oneOf(['normal', 'reverse'])
};

// Stats Container Component
export const StatsContainer = ({ children }) => {
  return (
    <div className="stats-section">
      <div className="stats-container">
        {children}
      </div>
    </div>
  );
};

StatsContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default StatsCounter;

// Made with Bob
