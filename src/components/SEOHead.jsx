import React, { useEffect } from 'react';

/**
 * SEOHead component
 * Dynamically updates document title, meta tags, canonical link, and injects Schema.org JSON-LD microdata
 */
export default function SEOHead({
  title = 'Surya Designs | Custom Signage & Name Boards in Thiruvananthapuram',
  description = 'Surya Designs creates custom house name boards, number plates, shop sign boards, LED signs, acrylic signs, neon signs and other signage solutions in Thiruvananthapuram, Kerala.',
  canonicalUrl = 'https://suryadesigns.in/',
  schemaType = 'LocalBusiness',
  faqData = null
}) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // Build JSON-LD Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://suryadesigns.in/#organization",
      "name": "Surya Designs",
      "image": "https://suryadesigns.in/images/surya-designs-custom-signage-thiruvananthapuram.webp",
      "url": canonicalUrl,
      "telephone": "+919847000000",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Narayani Towers, Kaimanam Junction",
        "addressLocality": "Thiruvananthapuram",
        "addressRegion": "Kerala",
        "postalCode": "695040",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 8.4682,
        "longitude": 76.9734
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "sameAs": [
        "https://suryadesigns1.wordpress.com/"
      ],
      "areaServed": {
        "@type": "City",
        "name": "Thiruvananthapuram"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Signage & Name Board Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Name Boards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle Number Plates" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shop Sign Boards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LED Sign Boards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Neon Signs" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Acrylic Sign Boards" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "3D Letter Signs" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ACP Sign Boards" } }
        ]
      }
    };

    // FAQ Schema if provided
    let faqSchema = null;
    if (faqData && faqData.length > 0) {
      faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.question || item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer || item.a
          }
        }))
      };
    }

    // Inject JSON-LD scripts
    let scriptLb = document.getElementById('json-ld-localbusiness');
    if (!scriptLb) {
      scriptLb = document.createElement('script');
      scriptLb.id = 'json-ld-localbusiness';
      scriptLb.type = 'application/ld+json';
      document.head.appendChild(scriptLb);
    }
    scriptLb.text = JSON.stringify(localBusinessSchema);

    let scriptFaq = document.getElementById('json-ld-faq');
    if (faqSchema) {
      if (!scriptFaq) {
        scriptFaq = document.createElement('script');
        scriptFaq.id = 'json-ld-faq';
        scriptFaq.type = 'application/ld+json';
        document.head.appendChild(scriptFaq);
      }
      scriptFaq.text = JSON.stringify(faqSchema);
    } else if (scriptFaq) {
      scriptFaq.remove();
    }

  }, [title, description, canonicalUrl, schemaType, faqData]);

  return null;
}
