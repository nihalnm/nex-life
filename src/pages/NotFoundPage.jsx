import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 2rem;
`;

const ErrorCode = styled.h1`
  font-size: 8rem;
  color: #ff7b25;
  margin-bottom: 1rem;
  line-height: 1;
`;

const ErrorMessage = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const BusAnimation = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  margin: 2rem 0;
  
  .bus {
    position: absolute;
    width: 200px;
    height: 80px;
    background-color: #ff7b25;
    border-radius: 10px 20px 10px 10px;
    animation: busMove 3s ease-in-out infinite alternate;
  }
  
  .wheel {
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #333;
    border-radius: 50%;
    bottom: 0;
    animation: wheelRotate 2s linear infinite;
  }
  
  .wheel-front {
    right: 30px;
  }
  
  .wheel-back {
    left: 30px;
  }
  
  @keyframes busMove {
    0% {
      transform: translateX(-50px) rotate(-1deg);
    }
    100% {
      transform: translateX(50px) rotate(1deg);
    }
  }
  
  @keyframes wheelRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Page Not Found</ErrorMessage>
      <p>Sorry, the page you are looking for doesn't exist or has been moved.</p>
      
      <BusAnimation>
        <div className="bus">
          <div className="wheel wheel-front"></div>
          <div className="wheel wheel-back"></div>
        </div>
      </BusAnimation>
      
      <Link to="/" className="btn btn-primary">
        Return to Home
      </Link>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

// Made with Bob
