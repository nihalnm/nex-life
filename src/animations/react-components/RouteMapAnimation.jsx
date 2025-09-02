import React, { useEffect } from 'react';
import '../route_map_animation.css';

const RouteMapAnimation = ({ stations = [] }) => {
  // Default stations if none are provided
  const defaultStations = [
    { id: 1, name: 'Downtown', position: 10 },
    { id: 2, name: 'Midtown', position: 30 },
    { id: 3, name: 'Uptown', position: 50 },
    { id: 4, name: 'Suburbs', position: 70 },
    { id: 5, name: 'Airport', position: 90 }
  ];
  
  // Use provided stations or defaults
  const routeStations = stations.length > 0 ? stations : defaultStations;
  
  useEffect(() => {
    // Any additional JavaScript functionality can be added here
    // For example, we could add intersection observers to trigger animations
    
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start animation when the component is visible
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2
    });
    
    const container = document.querySelector('.route-map-container');
    if (container) {
      observer.observe(container);
    }
    
    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <div className="route-map-container">
      <div className="map-background"></div>
      <div className="route-path"></div>
      
      {routeStations.map((station, index) => (
        <React.Fragment key={station.id || index}>
          <div 
            className={`route-station station-${index + 1}`} 
            style={{ left: `${station.position || (index + 1) * 20}%` }}
          ></div>
          <div 
            className={`station-label label-${index + 1}`}
            style={{ left: `${station.position || (index + 1) * 20}%` }}
          >
            {station.name}
          </div>
          <div 
            className={`city-icon city-${index + 1}`}
            style={{ left: `${station.position || (index + 1) * 20}%` }}
          ></div>
          <div 
            className={`pulse-effect pulse-${index + 1}`}
            style={{ left: `${station.position || (index + 1) * 20}%` }}
          ></div>
        </React.Fragment>
      ))}
      
      <div className="mini-bus">
        <div className="mini-wheel mini-wheel-front"></div>
        <div className="mini-wheel mini-wheel-back"></div>
      </div>
    </div>
  );
};

export default RouteMapAnimation;

// Made with Bob
