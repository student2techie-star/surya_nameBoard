import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Layers, CheckCircle, MessageCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { getWhatsAppUrl } from '../components/WhatsAppButton';
import { FEATURED_PROJECTS } from '../data/projectsData';

export default function OurWork() {
  return (
    <div className="page-wrapper">
      <SEOHead
        title="Our Signage Work | Surya Designs"
        description="Explore completed signage projects by Surya Designs including house name boards, shop boards, LED signs, acrylic signs and 3D letters in Thiruvananthapuram."
        canonicalUrl="https://suryadesigns.in/our-work/"
      />

      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="current">Our Work</span>
          </div>
          <h1 className="page-title">Our Work</h1>
          <p className="page-lead">
            Detailed case studies and project highlights of custom signage delivered across Thiruvananthapuram.
          </p>
        </div>
      </section>

      {/* Projects Showcase List */}
      <section className="section-padding">
        <div className="container">
          <div className="projects-showcase-list">
            {FEATURED_PROJECTS.map((proj, idx) => (
              <div key={proj.id} className={`project-case-card ${idx % 2 !== 0 ? 'project-reverse' : ''}`}>
                <div className="project-case-image">
                  <ImagePlaceholder
                    src={`${import.meta.env.BASE_URL}images/${proj.image}`}
                    alt={proj.title}
                    title={proj.placeholderTitle}
                    aspectRatio="16/10"
                  />
                </div>
                <div className="project-case-content">
                  <span className="project-type-tag">{proj.projectType}</span>
                  <h2 className="project-case-title">{proj.title}</h2>
                  <p className="project-case-desc">{proj.description}</p>
                  
                  <div className="project-specs-list">
                    <div className="spec-item">
                      <MapPin size={16} className="spec-icon" />
                      <span><strong>Location:</strong> {proj.location}</span>
                    </div>
                    <div className="spec-item">
                      <Layers size={16} className="spec-icon" />
                      <span><strong>Materials:</strong> {proj.materials}</span>
                    </div>
                  </div>

                  <div className="project-case-actions margin-top-md">
                    <a
                      href={getWhatsAppUrl(`project design like ${proj.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp-sm"
                    >
                      <MessageCircle size={16} /> Enquire Similar Design
                    </a>
                    <Link to="/get-a-quote/" className="btn btn-primary-sm">
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
