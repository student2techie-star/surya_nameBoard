import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageCircle, Eye } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { getWhatsAppUrl } from '../components/WhatsAppButton';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="page-wrapper">
      <SEOHead
        title="Signage Gallery | Surya Designs Thiruvananthapuram"
        description="View signage projects including house name boards, shop signs, LED boards, acrylic signs, number plates and custom signage by Surya Designs."
        canonicalUrl="https://suryadesigns.in/gallery/"
      />

      {/* Page Header */}
      <section className="page-header-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="current">Gallery</span>
          </div>
          <h1 className="page-title">Our Signage Gallery</h1>
          <p className="page-lead">
            Explore sample work across house name boards, shop sign boards, LED displays, acrylic signs, neon signs, and vehicle number plates.
          </p>
        </div>
      </section>

      {/* Filter Tabs & Gallery Grid */}
      <section className="section-padding">
        <div className="container">
          {/* Category Filter Pills */}
          <div className="gallery-filter-tabs">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Modern Asymmetrical Collage Gallery Grid */}
          <div className="gallery-collage-grid margin-top-lg">
            {filteredItems.map((item, index) => {
              let collageSpanClass = 'span-standard';
              if (activeCategory === 'All') {
                if (index % 7 === 0) collageSpanClass = 'span-hero-large';
                else if (index % 5 === 2) collageSpanClass = 'span-tall';
                else if (index % 6 === 3) collageSpanClass = 'span-wide';
              }

              return (
                <div 
                  key={item.id} 
                  className={`collage-card ${collageSpanClass}`}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Removed Floating Category Badge */}

                  <ImagePlaceholder
                    src={`${import.meta.env.BASE_URL}images/${item.image}`}
                    alt={item.title}
                    title={item.placeholderTitle}
                    objectFit="cover"
                    height="100%"
                    className="collage-image"
                  />

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="lightbox-overlay" onClick={() => setSelectedItem(null)}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setSelectedItem(null)}>
              <X size={24} />
            </button>
            <div className="lightbox-media">
              <ImagePlaceholder
                src={`${import.meta.env.BASE_URL}images/${selectedItem.image}`}
                alt={selectedItem.title}
                title={selectedItem.placeholderTitle}
                aspectRatio="16/10"
              />
            </div>
            <div className="lightbox-details">
              <span className="gallery-badge">{selectedItem.category}</span>
              <h2>{selectedItem.title}</h2>
              <p>📍 Location: {selectedItem.location}</p>
              <div className="lightbox-actions margin-top-md">
                <a
                  href={getWhatsAppUrl(`this ${selectedItem.category} design (${selectedItem.title})`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <MessageCircle size={18} /> Inquire About This Design on WhatsApp
                </a>
                <Link to="/get-a-quote/" className="btn btn-primary">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
