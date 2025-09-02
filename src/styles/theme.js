// Theme configuration for the Nex-Life Transport website

const theme = {
  // Colors based on the brand guidelines from the architecture document
  colors: {
    primary: '#1a3c6e', // Deep Blue - Representing trust and professionalism
    primaryLight: '#2c5999',
    primaryDark: '#122c50',
    
    secondary: '#ff7b25', // Vibrant Orange - Representing energy and movement
    secondaryLight: '#ff9a55',
    secondaryDark: '#e66b15',
    
    accent: '#00a8a8', // Teal - For highlights and calls-to-action
    accentLight: '#33bebe',
    accentDark: '#008888',
    
    background: '#f5f5f5', // Light Gray - For backgrounds
    backgroundDark: '#e0e0e0',
    
    text: '#333333', // Charcoal - For text
    textLight: '#666666',
    textLighter: '#999999',
    
    white: '#ffffff',
    black: '#000000',
    
    success: '#28a745',
    error: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8'
  },
  
  // Typography
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Open Sans', sans-serif",
    accent: "'Montserrat', sans-serif"
  },
  
  // Font weights
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700
  },
  
  // Spacing
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem',  // 8px
    md: '1rem',    // 16px
    lg: '2rem',    // 32px
    xl: '4rem',    // 64px
    xxl: '8rem'    // 128px
  },
  
  // Breakpoints for responsive design
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px'
  },
  
  // Border radius
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
    round: '50%'
  },
  
  // Box shadows
  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.1)'
  },
  
  // Transitions
  transitions: {
    short: '0.2s ease',
    medium: '0.3s ease',
    long: '0.5s ease'
  },
  
  // Z-index levels
  zIndex: {
    base: 0,
    above: 1,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    modal: 1300,
    popover: 1400,
    tooltip: 1500
  },
  
  // Container max width
  maxWidth: '1200px'
};

export default theme;

// Made with Bob
