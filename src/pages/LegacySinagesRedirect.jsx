import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Handles 301 legacy URL redirect for /sinages/ to /services/
 */
export default function LegacySinagesRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // Perform client-side 301 style instant redirect to /services/
    navigate('/services/', { replace: true });
  }, [navigate]);

  return (
    <div style={{ padding: '4rem', textAlign: 'center', color: '#94a3b8' }}>
      <p>Redirecting to updated services page...</p>
      <a href="/services/" style={{ color: '#f59e0b', textDecoration: 'underline' }}>
        Click here if you are not redirected automatically.
      </a>
    </div>
  );
}
