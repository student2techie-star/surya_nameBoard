import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicy() {
  return (
    <div className="page-wrapper">
      <SEOHead
        title="Privacy Policy | Surya Designs Thiruvananthapuram"
        description="Privacy policy details for Surya Designs signage services website."
        canonicalUrl="https://suryadesigns.in/privacy-policy/"
      />

      <section className="page-header-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="current">Privacy Policy</span>
          </div>
          <h1 className="page-title">Privacy Policy</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container legal-content max-width-800">
          <h2>1. Information We Collect</h2>
          <p>Surya Designs collects information you voluntarily provide when requesting a quote or contacting us through WhatsApp, phone, or website forms. This includes name, phone number, location, and signage design specifications.</p>

          <h2>2. How We Use Your Information</h2>
          <p>Your details are strictly used to prepare quotations, clarify design specifications, coordinate signage delivery/installation, and respond to customer service inquiries.</p>

          <h2>3. Data Protection</h2>
          <p>We implement reasonable security precautions to protect your personal contact information from unauthorized disclosure or misuse. We do not sell or trade your details to third-party marketing services.</p>

          <h2>4. Contact Us</h2>
          <p>If you have any questions regarding this Privacy Policy, please contact Surya Designs at Narayani Towers, Kaimanam Junction, Thiruvananthapuram, Kerala 695040.</p>
        </div>
      </section>
    </div>
  );
}
