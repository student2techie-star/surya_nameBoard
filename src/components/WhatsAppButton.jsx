import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919847000000'; // Default placeholder business WhatsApp number

export function getWhatsAppUrl(serviceName = '') {
  let text = 'Hi Surya Designs, I would like to enquire about a signage requirement.';
  if (serviceName) {
    text = `Hi Surya Designs, I would like a quotation for ${serviceName}.`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function WhatsAppCTA({ serviceName = '', className = '', label = 'WHATSAPP US', iconSize = 18 }) {
  const url = getWhatsAppUrl(serviceName);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-whatsapp ${className}`}
    >
      <MessageCircle size={iconSize} />
      <span>{label}</span>
    </a>
  );
}

export default function FloatingWhatsApp() {
  const defaultUrl = getWhatsAppUrl();

  return (
    <a
      href={defaultUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      title="Chat with Surya Designs on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-pulse"></div>
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
    </a>
  );
}
