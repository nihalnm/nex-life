# Nex-Life Transport Animations

This directory contains vehicle-themed animations for the Nex-Life Transport website. These animations are implemented as reusable React components with corresponding CSS files.

## Available Animations

### 1. Bus Entry Animation
A hero section animation featuring a bus entering the screen with animated wheels and road.

```jsx
import { BusEntryAnimation } from '../animations';

<BusEntryAnimation 
  title="Nexlife Transport Solutions" 
  subtitle="Reliable, efficient, and sustainable transportation services for your needs." 
  ctaText="Learn More" 
  ctaLink="/about" 
/>
```

### 2. Route Map Animation
An interactive route map with a moving bus that travels between stations.

```jsx
import { RouteMapAnimation } from '../animations';

// Default stations will be used if none are provided
<RouteMapAnimation />

// Or with custom stations
<RouteMapAnimation 
  stations={[
    { id: 1, name: 'Downtown', position: 10 },
    { id: 2, name: 'Midtown', position: 30 },
    { id: 3, name: 'Uptown', position: 50 },
    { id: 4, name: 'Suburbs', position: 70 },
    { id: 5, name: 'Airport', position: 90 }
  ]} 
/>
```

### 3. Service Card with Mini Bus
Service cards with a mini bus animation in the header.

```jsx
import { ServiceCard, ServiceCardsGrid } from '../animations';

<ServiceCardsGrid>
  <ServiceCard 
    title="City Bus Service" 
    description="Regular bus service covering all major city routes with frequent schedules." 
    buttonText="View Routes" 
    buttonLink="/services/city-bus" 
    variant={1} 
  />
  <ServiceCard 
    title="Airport Shuttle" 
    description="Direct shuttle service to and from the airport, available 24/7." 
    buttonText="Book Now" 
    buttonLink="/services/airport-shuttle" 
    variant={2} 
  />
  {/* Add more service cards as needed */}
</ServiceCardsGrid>
```

### 4. Stats Counter with Wheel Design
Animated counters with a wheel design that counts up to the specified value.

```jsx
import { StatsCounter, StatsContainer } from '../animations';

<StatsContainer>
  <StatsCounter 
    value="500" 
    label="Daily Routes" 
    duration={2000} 
    variant={1} 
  />
  <StatsCounter 
    value="10000" 
    label="Daily Passengers" 
    duration={2500} 
    variant={2} 
    animationDirection="reverse" 
  />
  <StatsCounter 
    value="150" 
    label="Vehicles" 
    duration={1800} 
    variant={3} 
  />
  <StatsCounter 
    value="25" 
    label="Years of Service" 
    duration={1500} 
    variant={4} 
  />
</StatsContainer>
```

## Component Props

### BusEntryAnimation
- `title` (string): Main heading text
- `subtitle` (string): Subheading text
- `ctaText` (string): Call-to-action button text
- `ctaLink` (string): Call-to-action button link

### RouteMapAnimation
- `stations` (array): Array of station objects with properties:
  - `id` (number/string): Unique identifier
  - `name` (string): Station name
  - `position` (number): Position percentage (0-100)

### ServiceCard
- `title` (string): Card title
- `description` (string): Service description
- `icon` (node): Custom icon (optional)
- `buttonText` (string): Button text
- `buttonLink` (string): Button link
- `variant` (number): Style variant (1-4)

### StatsCounter
- `value` (string/number): Target value to count to
- `label` (string): Label text
- `duration` (number): Animation duration in milliseconds
- `variant` (number): Style variant (1-4)
- `animationDirection` (string): Direction of wheel animation ('normal' or 'reverse')

## CSS Customization

Each animation has its own CSS file that can be customized:

- `bus_entry_animation.css`
- `route_map_animation.css`
- `service_card_animation.css`
- `stats_counter_animation.css`

## Performance Considerations

- The animations use CSS for most of the animation work to ensure good performance
- React's useEffect is used to handle intersection observers that trigger animations when components are visible
- For low-power devices, consider adding a `reducedMotion` prop to disable animations