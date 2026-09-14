import React, { useState } from 'react';
import { Image as ImageIcon, Upload } from 'lucide-react';

/**
 * ImagePlaceholder component
 * Handles placeholder graphics and gracefully fallback to styled SVG placeholder 
 * if real user image is not yet provided.
 */
export default function ImagePlaceholder({ 
  src, 
  alt = 'Surya Designs Signage', 
  title = 'Signage Image Placeholder',
  aspectRatio = '16/9',
  className = '',
  objectFit = 'contain',
  height = 'auto'
}) {
  const [imageError, setImageError] = useState(false);

  // If user provided a valid image path and it hasn't errored out, render real img tag
  if (src && !imageError) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setImageError(true)}
        loading="lazy"
        style={{ width: '100%', height, objectFit }}
      />
    );
  }

  // Visual placeholder designed to show where images go and look sleek
  return (
    <div 
      className={`surya-image-placeholder ${className}`}
      style={{
        aspectRatio: aspectRatio,
        width: '100%',
        height: height !== 'auto' ? height : '100%',
        backgroundColor: '#1e293b',
        backgroundImage: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        border: '1px dashed #334155',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        color: '#94a3b8',
        position: 'relative',
        overflow: 'hidden',
        boxSizing: 'border-box',
        transition: 'all 0.3s ease'
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          background: 'rgba(245, 158, 11, 0.15)',
          color: '#f59e0b',
          fontSize: '0.7rem',
          fontWeight: '600',
          padding: '4px 10px',
          borderBottomLeftRadius: '8px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}
      >
        Photo Placeholder
      </div>

      <div 
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#f59e0b',
          marginBottom: '0.75rem',
          boxShadow: '0 0 15px rgba(245, 158, 11, 0.15)'
        }}
      >
        <ImageIcon size={26} />
      </div>

      <p 
        style={{ 
          fontSize: '0.9rem', 
          fontWeight: '600', 
          color: '#f8fafc', 
          margin: '0 0 0.25rem 0',
          textAlign: 'center'
        }}
      >
        {title}
      </p>

      <span 
        style={{ 
          fontSize: '0.75rem', 
          color: '#64748b', 
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        <Upload size={12} /> Replace with real photo ({aspectRatio})
      </span>
    </div>
  );
}
