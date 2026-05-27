import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/siteData';
import { useEffect } from 'react';

// Use Vite's glob import to get all service images as URLs
const imageModules = import.meta.glob('../../images/Services/**/*.jpg', { eager: true, query: '?url', import: 'default' });

export default function ServiceDetail() {
  const { id } = useParams();
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Map the service id back to the folder name used in the filesystem
  const folderMap = {
    'backgrounds': 'Background',
    'throw-pillows': 'Pillows',
    'blinds': 'Blinds',
    'wine-bars': 'Wine',
    'bedrooms': 'Bedroom',
    'restaurants': 'Resturant',
    'tv-media-walls': 'TV'
  };

  const folderName = folderMap[id];
  
  // Filter the globbed images to only those in the current service's folder
  const serviceImages = Object.keys(imageModules)
    .filter(path => path.includes(`/${folderName}/`))
    .map(path => imageModules[path]);

  // Pre-filled message for the contact form
  const prefilledMessage = encodeURIComponent(
    `Hello Sleekrealm Interiors,\n\nI am interested in your ${service.title} services. I would love to discuss a project with you.`
  );

  return (
    <div className="service-detail">
      <header className="service-detail__header">
        <span className="text-label-caps animate-fade-in-up" style={{ color: 'var(--color-primary)' }}>
          Service Overview
        </span>
        <h1 className="service-detail__title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {service.title}
        </h1>
        <p className="service-detail__desc animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {service.desc}
        </p>
      </header>

      <section className="service-detail__seo-content">
        <div className="service-detail__seo-inner">
          <div className="service-detail__seo-copy">
            <span className="text-label-caps">Interior Design in Jos</span>
            <h2>{service.seoTitle} by Sleekrealm Interiors</h2>
            <p>{service.intro}</p>
          </div>
          <div className="service-detail__seo-list">
            <h3>Why clients choose this service</h3>
            <ul>
              {service.benefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="service-detail__process">
        <div className="service-detail__process-inner">
          <h2>Our process for {service.title.toLowerCase()}</h2>
          <div className="service-detail__process-grid">
            {service.process.map((step, index) => (
              <article key={step} className="service-detail__process-card">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="service-detail__gallery">
        {/* We'll use CSS columns for a simple Masonry effect */}
        <div className="masonry-grid">
          {serviceImages.map((imgUrl, idx) => (
            <div key={idx} className="masonry-grid__item animate-fade-in-up" style={{ animationDelay: `${0.1 * (idx % 5)}s` }}>
              <img src={imgUrl} alt={`${service.seoTitle} project detail ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <section className="service-detail__faq">
        <div className="service-detail__faq-inner">
          <h2>Frequently asked questions</h2>
          <div className="service-detail__faq-list">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="service-detail__faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-cta__inner">
          <h2 className="portfolio-cta__title">
            Ready to elevate your space?
          </h2>
          <p className="portfolio-cta__desc">
            Let us bring our expertise in {service.title.toLowerCase()} to your environment.
          </p>
          <Link to={`/contact?service=${encodeURIComponent(service.title)}&message=${prefilledMessage}`} className="btn-ghost">
            Book {service.title}
          </Link>
        </div>
      </section>
    </div>
  );
}
