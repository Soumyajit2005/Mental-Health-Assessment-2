import React from 'react'
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

function Hero() {
  // Define animations for the hero section elements
  const heroSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { duration: 1000 },
  });

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { duration: 800, delay: 500 },
  });


return (
  <div className="hero-section">
    <animated.h1 style={heroSpring} className="hero-title">
      Welcome to the PsycheWell
    </animated.h1>
    <animated.p style={heroSpring} className="hero-description">
      Take the next step in your Mental Health Assessment journey.
    </animated.p>
    <Link to='/assessment'>
    <animated.button style={buttonSpring} className="start-button">
      Start Assessment
    </animated.button>
    </Link>
  </div>
);
}


export default Hero
