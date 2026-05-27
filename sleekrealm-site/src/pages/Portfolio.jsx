import { useState } from 'react';
import { Link } from 'react-router-dom';

import salon5 from '../../images/Portfolio/NoralinasCloset/salon-5.jpeg';
import saloon2 from '../../images/Portfolio/Saloon/saloon-2.jpg';
import void3 from '../../images/Portfolio/Void/void-3.jpg';
import house3 from '../../images/Portfolio/EntireHouse/house-3.jpg';

const PROJECTS = [
  {
    id: 1,
    title: "Noralina's Closet",
    category: 'Commercial Salon',
    filterCategory: 'Commercial',
    image: salon5,
    alt: "Noralina's Closet finished styling stations",
    cardClass: 'portfolio-card--wide-start',
    link: '/portfolio/noralinas-closet'
  },
  {
    id: 2,
    title: 'The Luxe Beauty Bar',
    category: 'Beauty Space',
    filterCategory: 'Commercial',
    image: saloon2,
    alt: 'The Luxe Beauty Bar - Nail bar arched alcove',
    cardClass: 'portfolio-card--tall-end',
    link: '/portfolio/saloon'
  },
  {
    id: 3,
    title: 'The Void Lounge',
    category: 'Residential Living Space',
    filterCategory: 'Residential',
    image: void3,
    alt: 'The Void Lounge - Custom wood-paneled TV media wall',
    cardClass: 'portfolio-card--tall-start',
    link: '/portfolio/void'
  },
  {
    id: 4,
    title: 'The Modern Residence',
    category: 'Holistic Residential Design',
    filterCategory: 'Residential',
    image: house3,
    alt: 'Primary bedroom with olive green bed and marble flooring',
    cardClass: 'portfolio-card--wide-end',
    link: '/portfolio/entire-house'
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All Projects');
  
  const filteredProjects = PROJECTS.filter(p => activeFilter === 'All Projects' || p.filterCategory === activeFilter);
  return (
    <>
      {/* Page Header */}
      <section className="portfolio-header">
        <h1 className="portfolio-header__title">Interior Design Portfolio in Jos</h1>
        <p className="portfolio-header__subtitle">
          A selection of our residential and commercial interior projects in Jos, including salons, lounges, bedrooms, media walls, and full home transformations.
        </p>
      </section>

      {/* Featured Project */}
      <section className="portfolio-featured">
        <div className="portfolio-featured__wrap">
          <div
            className="portfolio-featured__bg"
            style={{
              backgroundImage: `url(${house3})`,
            }}
          />
          <div className="portfolio-featured__overlay" />
          <div className="portfolio-featured__content">
            <span className="text-label-caps portfolio-featured__label">
              Recent Masterpiece • Holistic Residential Design
            </span>
            <h2 className="portfolio-featured__title">The Modern Residence</h2>
            <p className="portfolio-featured__desc">
              A comprehensive residential transformation. We approached the entire 
              house as a cohesive series of experiences, anchored by crisp lines, 
              rich textures, and serene luxury.
            </p>
            <Link
              to="/portfolio/entire-house"
              className="btn-ghost-light"
              style={{ width: 'fit-content' }}
            >
              View Project{' '}
              <span
                className="material-symbols-outlined"
                style={{ fontSize: 16 }}
              >
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="portfolio-gallery">
        {/* Filter Bar */}
        <div className="portfolio-filters">
          {['All Projects', 'Residential', 'Content Studios', 'Commercial'].map(filter => (
            <button 
              key={filter}
              className={`portfolio-filters__btn ${activeFilter === filter ? 'portfolio-filters__btn--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Bento Grid */}
        <div className="portfolio-grid" style={{ minHeight: '600px' }}>
          {filteredProjects.length === 0 ? (
            <p className="text-body-md" style={{ gridColumn: '1 / -1', textAlign: 'center', paddingTop: 64 }}>No projects found in this category.</p>
          ) : (
            filteredProjects.map((project, index) => {
              const layouts = [
                'portfolio-card--wide-start',
                'portfolio-card--tall-end',
                'portfolio-card--tall-start',
                'portfolio-card--wide-end',
                'portfolio-card--full'
              ];
              const layoutClass = layouts[index % layouts.length];

              if (layoutClass === 'portfolio-card--full') {
                const CardWrapper = project.link ? Link : 'article';
                return (
                  <div key={project.id} className="portfolio-card--full">
                    <CardWrapper to={project.link} className="portfolio-card portfolio-card--full-inner" style={{ display: 'block', textDecoration: 'none' }}>
                      <img src={project.image} alt={project.alt} loading={index < 2 ? 'eager' : 'lazy'} />
                      <div className="portfolio-card__overlay">
                        <span className="text-label-caps portfolio-card__category">
                          {project.category}
                        </span>
                        <h3 className="portfolio-card__title" style={{ fontSize: 48, lineHeight: '56px' }}>
                          {project.title}
                        </h3>
                      </div>
                    </CardWrapper>
                  </div>
                );
              }
              const CardWrapper = project.link ? Link : 'article';
              return (
                <CardWrapper to={project.link} key={project.id} className={`portfolio-card ${layoutClass}`} style={{ display: 'block', textDecoration: 'none' }}>
                  <img src={project.image} alt={project.alt} loading={index < 2 ? 'eager' : 'lazy'} />
                  <div className="portfolio-card__overlay">
                    <span className="text-label-caps portfolio-card__category">
                      {project.category}
                    </span>
                    <h3 className="portfolio-card__title">{project.title}</h3>
                  </div>
                </CardWrapper>
              );
            })
          )}
        </div>

        {/* Pagination */}
        <div className="portfolio-pagination">
          <span className="portfolio-pagination__line portfolio-pagination__line--active" />
          <span className="portfolio-pagination__text">01 / 03</span>
          <span className="portfolio-pagination__line portfolio-pagination__line--inactive" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta">
        <div className="portfolio-cta__inner">
          <h2 className="portfolio-cta__title">
            Ready to transform your space?
          </h2>
          <p className="portfolio-cta__desc">
            Let us bring the peace and poise of sacred minimalism to your
            environment.
          </p>
          <Link to="/contact" className="btn-ghost">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
