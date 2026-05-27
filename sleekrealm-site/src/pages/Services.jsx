import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/siteData';

export default function Services() {
  return (
    <>
      <section className="services-header">
        <h1 className="services-header__title">Interior Design Services in Jos</h1>
        <p className="services-header__subtitle">
          Sleekrealm Interiors creates premium residential and commercial spaces across Jos, Plateau State through intentional design, spiritual stewardship, and uncompromising luxury.
        </p>
      </section>

      <section className="seo-intro">
        <div className="seo-intro__inner">
          <p>
            From bedroom interior design and TV media walls to window blinds, restaurant styling, salon transformations, wine bars, backgrounds, and soft furnishings, our services are built for clients who want spaces that feel beautiful, practical, and deeply personal.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${index % 2 !== 0 ? 'service-card--offset' : ''}`}
            >
              <img
                src={service.cover}
                alt={`${service.seoTitle} by Sleekrealm Interiors`}
                className="service-card__bg"
                loading={index < 2 ? 'eager' : 'lazy'}
              />
              <div className="service-card__gradient"></div>
              <div className="service-card__content">
                <h2 className="service-card__title">{service.title}</h2>
                <p className="service-card__desc">{service.desc}</p>
                <Link to={`/services/${service.id}`} className="btn-ghost-light">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
