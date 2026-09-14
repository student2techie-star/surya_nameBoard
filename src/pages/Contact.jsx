import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getWhatsAppUrl } from '../components/WhatsAppButton';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'House Name Boards',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <SEOHead
        title="Contact Surya Designs | Signage Solutions in Thiruvananthapuram"
        description="Contact Surya Designs for custom signage, house name boards, number plates, LED signs and other signage requirements in Thiruvananthapuram."
        canonicalUrl="https://suryadesigns.in/contact/"
      />

      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="current">Contact Us</span>
          </div>
          <h1 className="page-title">Contact Surya Designs</h1>
          <p className="page-lead">
            Get in touch for custom house name boards, shop sign boards, vehicle number plates, or LED signage inquiries in Thiruvananthapuram.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Details Card */}
            <div className="contact-info-card">
              <h2 className="contact-info-title">Surya Designs Studio</h2>
              <p className="contact-info-desc">
                Visit our office or reach out directly via phone or WhatsApp to discuss your signage requirements.
              </p>

              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="detail-icon-wrap">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4>Address</h4>
                    <p>Narayani Towers, Kaimanam Junction,<br />Thiruvananthapuram, Kerala 695040</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-wrap">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4>Phone Call</h4>
                    <p><a href="tel:+919847000000">+91 98470 00000</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-wrap">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h4>WhatsApp Enquiries</h4>
                    <p>
                      <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="whatsapp-text-link">
                        Click here to chat on WhatsApp
                      </a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-wrap">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:info@suryadesigns.in">info@suryadesigns.in</a></p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon-wrap">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4>Business Hours</h4>
                    <p>Monday – Saturday: 9:00 AM – 8:00 PM<br />Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-card">
              <h2 className="form-h2">Send Us a Message</h2>
              <p className="form-subtext">Fill out the form below and we will get back to you promptly.</p>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="House Name Boards">House Name Boards</option>
                      <option value="Vehicle Number Plates">Vehicle Number Plates</option>
                      <option value="Shop Sign Boards">Shop Sign Boards</option>
                      <option value="LED Sign Boards">LED Sign Boards</option>
                      <option value="Neon Signs">Neon Signs</option>
                      <option value="Acrylic Sign Boards">Acrylic Sign Boards</option>
                      <option value="3D Letter Signs">3D Letter Signs</option>
                      <option value="ACP Sign Boards">ACP Sign Boards</option>
                      <option value="LED Scrolling Boards">LED Scrolling Boards</option>
                      <option value="LED Video Walls">LED Video Walls</option>
                      <option value="Printing & Branding">Printing & Branding</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Your Message / Requirement</label>
                    <textarea
                      rows="4"
                      placeholder="Describe size, material preference, or location..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block btn-lg">
                    <Send size={18} /> SEND MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Google Maps Mockup Block */}
          <div className="map-container margin-top-xl">
            <h3 className="map-title">Location Map — Kaimanam Junction, Thiruvananthapuram</h3>
            <div className="map-embed-placeholder">
              <iframe
                title="Surya Designs Location Map"
                src="https://maps.google.com/maps?q=Kaimanam%20Junction,%20Thiruvananthapuram,%20Kerala%20695040&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="380"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
