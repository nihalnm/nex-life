# Nex-Life Transport Website

A modern, responsive website for Nex-Life Transport, a transportation company providing services to educational institutions and corporate clients.

## Project Overview

This website is designed to showcase Nex-Life Transport's services with beautiful animations and an attractive design to appeal to potential clients. The website includes the following key features:

- Responsive design for all device sizes
- Vehicle-themed animations throughout the site
- Interactive components like image galleries and testimonial carousels
- Contact form for inquiries
- Optimized performance for fast loading

## Tech Stack

### Frontend
- React 18
- React Router for navigation
- Styled Components for styling
- Framer Motion for advanced animations
- React Helmet for SEO optimization

### Backend
- Spring Boot for RESTful API
- Java Mail for email notifications

## Project Structure

```
nex-life-transport/
├── public/                 # Public assets
├── src/
│   ├── animations/         # Vehicle-themed animations
│   ├── components/         # Reusable components
│   │   ├── layout/         # Layout components (Header, Footer)
│   │   └── ui/             # UI components
│   ├── context/            # React context providers
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── styles/             # Global styles and theme
│   ├── utils/              # Utility functions
│   ├── App.js              # Main App component
│   └── index.js            # Entry point
└── package.json            # Project dependencies
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm
- Java 11+ and Maven (for backend)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/nex-life-transport.git
cd nex-life-transport
```

2. Install frontend dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
mvn install
```

3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Deployment

### Frontend Deployment

1. Build the production version:
```bash
npm run build
```

2. Deploy the contents of the `build` folder to your web server or hosting service.

### Backend Deployment

1. Package the application:
```bash
mvn package
```

2. Deploy the generated JAR file to your server.

## Vehicle-Themed Animations

The website features several vehicle-themed animations:

1. **Bus Entry Animation**: An animated bus that enters from the side of the screen with rotating wheels and window reflections.
2. **Route Map Animation**: An animated route map with a bus moving along the path and location markers.
3. **Service Card Animation**: Service cards with a mini bus animation that appears on hover.
4. **Stats Counter Animation**: Wheel-inspired counters with animated progress circles for displaying company statistics.

These animations are implemented using CSS animations and transitions, with React components for easy integration.

## Performance Optimization

The website is optimized for performance with the following techniques:

- Code splitting for React components
- Lazy loading of images
- Optimized animations for mobile devices
- Efficient bundling with Webpack
- Caching strategy for static assets

## Browser Compatibility

The website is compatible with the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern transportation websites
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)