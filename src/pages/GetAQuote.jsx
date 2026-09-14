import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Upload, MessageCircle, CheckCircle2, FileText } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getWhatsAppUrl } from '../components/WhatsAppButton';
import { SERVICES_LIST } from '../data/servicesData';

export default function GetAQuote() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'House Name Boards',
    size: '',
    location: '',
    requirements: ''
  });

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Direct WhatsApp quote trigger generator with prefilled inputs
  const buildWhatsAppUrl = () => {
    const text = `Hi Surya Designs, I would like a quotation.
- Name: ${formData.name || 'Customer'}
- Service: ${formData.service}
- Size: ${formData.size || 'Not specified'}
- Location: ${formData.location || 'Thiruvananthapuram'}
- Requirement: ${formData.requirements || 'N/A'}`;
    return `https://wa.me/919847000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="page-wrapper">
      <SEOHead
        title="Get a Signage Quote | Surya Designs Thiruvananthapuram"
        description="Request a quotation for house name boards, vehicle number plates, shop sign boards, LED signs, acrylic signs or custom signage from Surya Designs in Thiruvananthapuram."
        canonicalUrl="https://suryadesigns.in/get-a-quote/"
      />

      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="current">Get a Quote</span>
          </div>
          <h1 className="page-title">Request a Quote</h1>
          <p className="page-lead">
            Fill out your signage details below or send your reference image directly to get an accurate quotation.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="section-padding">
        <div className="container">
          <div className="quote-form-layout">
            <div className="quote-form-card">
              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={54} className="success-icon" />
                  <h2>Quote Request Received!</h2>
                  <p>Thank you for contacting Surya Designs. Our team will review your requirements and reach out to you shortly.</p>
                  <div className="margin-top-md">
                    <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">
                      <MessageCircle size={20} /> Also Send via WhatsApp for Faster Response
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="quote-form">
                  <div className="form-grid-2">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9847000000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-group">
                      <label>Service Required *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        {SERVICES_LIST.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Approximate Size / Dimensions</label>
                      <input
                        type="text"
                        placeholder="e.g. 18x12 inches, 10x3 feet..."
                        value={formData.size}
                        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Your Location in Thiruvananthapuram</label>
                    <input
                      type="text"
                      placeholder="e.g. Kowdiar, Kaimanam, Technopark Area..."
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label>Requirement Details</label>
                    <textarea
                      rows="4"
                      placeholder="Describe preferred materials (Acrylic, Teak Wood, LED, Brass), text content, font style..."
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    ></textarea>
                  </div>

                  {/* Reference Image Upload */}
                  <div className="form-group">
                    <label>Reference Image Upload (Optional)</label>
                    <div className="file-upload-box">
                      <input
                        type="file"
                        id="reference-upload"
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                        className="file-input-hidden"
                      />
                      <label htmlFor="reference-upload" className="file-upload-label">
                        <Upload size={24} />
                        <span>{fileName ? `Selected: ${fileName}` : 'Click to select reference image or sketch'}</span>
                      </label>
                    </div>
                  </div>

                  <div className="quote-form-actions margin-top-lg">
                    <button type="submit" className="btn btn-primary btn-block btn-lg">
                      <Send size={18} /> REQUEST QUOTE
                    </button>
                    
                    <div className="or-divider">
                      <span>OR</span>
                    </div>

                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp btn-block btn-lg"
                    >
                      <MessageCircle size={20} /> SEND DETAILS DIRECTLY VIA WHATSAPP
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Side Assistance Card */}
            <div className="quote-help-card">
              <h3>Fast Quotation Guide</h3>
              <ul className="help-bullets">
                <li><strong>Share Text Content:</strong> Mention exact text/name to be displayed on the board.</li>
                <li><strong>Language Preference:</strong> English, Malayalam, or bilingual.</li>
                <li><strong>Reference Photo:</strong> Sharing a photo of your wall or entrance helps us suggest exact proportions.</li>
              </ul>
              
              <div className="direct-call-box margin-top-lg">
                <h4>Prefer Talking Directly?</h4>
                <p>Call our Thiruvananthapuram desk to discuss your order.</p>
                <a href="tel:+919847000000" className="btn btn-secondary btn-block margin-top-sm">
                  📞 Call +91 98470 00000
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
