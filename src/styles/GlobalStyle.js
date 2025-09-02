import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  h1 {
    font-size: 3rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2.5rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 2rem;
    }
  }
  
  h2 {
    font-size: 2.5rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 2rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 1.75rem;
    }
  }
  
  h3 {
    font-size: 2rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 1.75rem;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 1.5rem;
    }
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.secondaryDark};
    }
  }
  
  button {
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1;
  }
  
  .container {
    width: 100%;
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  
  .section {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
  
  .section-title {
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
  
  .section-description {
    text-align: center;
    max-width: 800px;
    margin: 0 auto ${({ theme }) => theme.spacing.lg};
  }
  
  /* Utility classes */
  .text-center {
    text-align: center;
  }
  
  .text-right {
    text-align: right;
  }
  
  .mb-sm {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }
  
  .mb-md {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  .mb-lg {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
  
  .mb-xl {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export default GlobalStyle;

// Made with Bob
