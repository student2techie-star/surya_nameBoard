import React, { useState, useEffect } from 'react';
import './IntroSplash.css';

export default function IntroSplash() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Wait for the entrance (1.2s), power on (0.5s + 1s delay), and sweep (0.8s + 1.4s delay)
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 4500);

    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`intro-splash-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      
      {/* Sleek Frosted Glass Board */}
      <div className="premium-glass-board">
        
        {/* Dynamic Light Flare */}
        <div className="glass-flare"></div>
        
        <div className="premium-text-container">
          {/* Neon Power-On Text */}
          <span className="neon-surya">Surya</span>
          
          {/* Golden Sweep-Up Text */}
          <span className="golden-designs">Designs</span>
        </div>

      </div>

    </div>
  );
}
