import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

export default function Terms() {
  return (
    <div className="page-wrapper">
      <SEOHead
        title="Terms & Conditions | Surya Designs Thiruvananthapuram"
        description="Terms and conditions for Surya Designs website and signage services."
        canonicalUrl="https://suryadesigns.in/terms/"
      />

      <section className="page-header-section">
        <div className="container">
          <div className="breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="current">Terms & Conditions</span>
          </div>
          <h1 className="page-title">Terms & Conditions</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container legal-content max-width-800">
          <h2>1. Quotation & Approval</h2>
          <p>All signage orders are produced based on customer-approved design mockups, size specifications, and material selections. Customers must review text spelling and dimensions prior to production approval.</p>

          <h2>2. Custom Order Policy</h2>
          <p>Because house name boards, shop boards, LED signs, and number plates are customized specifically for each customer, custom fabricated items are prepared according to agreed order terms.</p>

          <h2>3. Motor Vehicle Rules Compliance Notice</h2>
          <p>Customers ordering vehicle number plates are responsible for ensuring that their selected plate styles comply with standard motor vehicle regulations in their jurisdiction.</p>

          <h2>4. Contact & Support</h2>
          <p>For questions regarding terms or active orders, reach out to Surya Designs at Kaimanam Junction, Thiruvananthapuram.</p>
        </div>
      </section>
    </div>
  );
}
