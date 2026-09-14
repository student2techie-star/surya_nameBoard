import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/WhatsAppButton';
import IntroSplash from './components/IntroSplash';
import Home from './pages/Home';
import About from './pages/About';
import ServicesHub from './pages/ServicesHub';
import ServiceDetail from './pages/ServiceDetail';
import Gallery from './pages/Gallery';
import OurWork from './pages/OurWork';
import Contact from './pages/Contact';
import GetAQuote from './pages/GetAQuote';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import LegacySinagesRedirect from './pages/LegacySinagesRedirect';

// Helper component to scroll window to top on page transition
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <IntroSplash />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/about/" element={<About />} />
            
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/" element={<ServicesHub />} />
            
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/services/:slug/" element={<ServiceDetail />} />
            
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery/" element={<Gallery />} />
            
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/our-work/" element={<OurWork />} />
            
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/" element={<Contact />} />
            
            <Route path="/get-a-quote" element={<GetAQuote />} />
            <Route path="/get-a-quote/" element={<GetAQuote />} />
            
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
            
            <Route path="/terms" element={<Terms />} />
            <Route path="/terms/" element={<Terms />} />

            {/* Legacy 301 Redirect for /sinages/ */}
            <Route path="/sinages" element={<LegacySinagesRedirect />} />
            <Route path="/sinages/" element={<LegacySinagesRedirect />} />
            
            {/* Fallback for unknown routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
