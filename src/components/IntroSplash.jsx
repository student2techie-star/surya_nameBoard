import React, { useState, useEffect } from 'react';
import './IntroSplash.css';

export default function IntroSplash() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Wait for the engraving (1s) and neon animation (1.5s delay) to finish, then fade out
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
      
      {/* Non-structured, realistic vibrant wooden plate */}
      <div className="rustic-wood-plate">
        <div className="wood-content">
          
          {/* Engraving animation first */}
          <span className="golden-cursive-text">SURYA</span>
          
          {/* Cursive neon light turns on last */}
          <div className="neon-cursive-text">
            Designs
            <div className="neon-lotus"></div>
          </div>
          
        </div>
      </div>

    </div>
  );
}
