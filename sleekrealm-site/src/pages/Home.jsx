import { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../images/Hero.jpg';

import salon5 from '../../images/Portfolio/NoralinasCloset/salon-5.jpeg';
import saloon2 from '../../images/Portfolio/Saloon/saloon-2.jpg';
import void3 from '../../images/Portfolio/Void/void-3.jpg';
import house3 from '../../images/Portfolio/EntireHouse/house-3.jpg';

const PROJECTS = [
  {
    src: salon5,
    alt: "Noralina's Closet finished styling stations",
    title: "NORALINA'S CLOSET",
    category: 'COMMERCIAL SALON',
    link: '/portfolio/noralinas-closet'
  },
  {
    src: saloon2,
    alt: 'The Luxe Beauty Bar - Nail bar arched alcove',
    title: 'THE LUXE BEAUTY BAR',
    category: 'BEAUTY SPACE',
    link: '/portfolio/saloon'
  },
  {
    src: void3,
    alt: 'The Void Lounge - Custom wood-paneled TV media wall',
    title: 'THE VOID LOUNGE',
    category: 'RESIDENTIAL LIVING SPACE',
    link: '/portfolio/void'
  },
  {
    src: house3,
    alt: 'Primary bedroom with olive green bed and marble flooring',
    title: 'THE MODERN RESIDENCE',
    category: 'HOLISTIC RESIDENTIAL DESIGN',
    link: '/portfolio/entire-house'
  },
];


const TESTIMONIALS = [
  {
    quote: "Sleekrealm transformed our penthouse into a peaceful sanctuary. The intention behind every shadow and light source is sublime.",
    author: "ELEANOR VANCE",
    location: "LONDON"
  },
  {
    quote: "Sacred Minimalism is not just a style; it's a way of living. Our home now breathes quiet luxury and absolute comfort.",
    author: "MARCUS THORNE",
    location: "ST. MORITZ"
  },
  {
    quote: "Their eye for texture and natural stone created a kitchen that feels more like museum-grade art than utility.",
    author: "SOPHIA LOREN",
    location: "MILAN"
  }
];

export default function Home() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Drag to scroll state
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.pageX - scrollRef.current.offsetLeft;
    dragScrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleTestimonialChange = useCallback((newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial(newIndex);
      setIsTransitioning(false);
    }, 350);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleTestimonialChange((activeTestimonial + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [activeTestimonial, isHovered, handleTestimonialChange]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -600, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 600, behavior: 'smooth' });
    }
  };

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.home-works__card');
    if (!cards.length) return;

    const containerLeft = el.getBoundingClientRect().left;
    const containerCenter = containerLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;

    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const dist = Math.abs(cardCenter - containerCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToCard = (index) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.home-works__card');
    if (cards[index]) {
      const card = cards[index];
      const scrollPosition = card.offsetLeft - (el.clientWidth - card.clientWidth) / 2;
      el.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero__bg">
          <img
            src={heroImage}
            alt="Luxury interior design by Sleekrealm Interiors in Jos"
            loading="eager"
            fetchPriority="high"
          />
          <div className="home-hero__gradient"></div>
        </div>
        <div className="home-hero__content">
          <div className="home-hero__text-block">
            <span className="text-label-caps home-hero__kicker animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Interior Design & Space Styling
            </span>
            <h1 className="home-hero__title animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Interior design in Jos for spaces that reflect beauty, comfort, personality, and peace.
            </h1>

            <div className="home-hero__actions animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <Link to="/portfolio" className="btn-ghost">
                View Selected Works
              </Link>
              <Link to="/contact" className="btn-primary">
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
        <div className="home-hero__scroll-indicator">
          <span className="home-hero__scroll-text text-label-caps">Scroll</span>
          <div className="home-hero__scroll-line"></div>
        </div>
      </section>

      {/* The Greatest Designer Section */}
      <section className="home-philosophy">
        <div className="home-philosophy__grid">
          <div className="home-philosophy__text">
            <h2 className="home-philosophy__heading">
              We believe God is the greatest Designer.
            </h2>
            <p className="home-philosophy__body">
              The beauty and perfection seen in the world inspire every space we
              touch. Our philosophy is rooted in Sacred Minimalism—creating
              spaces that are not merely empty, but filled with intention, light,
              and quiet awe.
            </p>
          </div>
          <div className="home-philosophy__image-wrap">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAocofxQmBYKzgfSpcQiOdYtBKNTATj8WPS8ygVV8mFFA2GAJwZdspqeUsJyA6IArPxWi_AJbyUJIDYsvx9Gxv_f2RXyrMCC_BtDR2jYQSXfaf_Vw0coE6atsJ5_KEtf5V223KDMGLzS3PgWGDjRifgTZmXhPgbyEX82vPuQOOn4mHMu64MASHsbIs2fNi_9jWh-mF7pRbE-w3ZKWUIJ5uF12f282RPvD1zuL_qDgHdPzDF2DB7_gGvUjWmcY236muDnYUZ7p9LzrHv"
              alt="Detail of beautiful interior texture with alabaster vase"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Featured Work Horizontal Scroll */}
      <section className="home-works">
        <div className="container home-works__top">
          <div className="home-works__header">
            <h2 className="home-works__title">Selected Works</h2>
            <p className="home-works__label text-label-caps">A GLIMPSE INTO OUR SANCTUARIES</p>
          </div>
          <div className="home-works__nav desktop-only">
            <button className="home-works__nav-btn" onClick={scrollLeft} aria-label="Scroll left">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button className="home-works__nav-btn" onClick={scrollRight} aria-label="Scroll right">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
        <div 
          className={`home-works__scroll hide-scrollbar ${isDragging ? 'dragging' : ''}`} 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          {PROJECTS.map((project, i) => (
            <Link to={project.link} className="home-works__card" key={i} style={{ textDecoration: 'none', display: 'block' }}>
              <div className="home-works__card-image">
                <img src={project.src} alt={project.alt} draggable="false" loading={i === 0 ? 'eager' : 'lazy'} />
              </div>
              <h3 className="home-works__card-title">{project.title}</h3>
              <p className="home-works__card-category">{project.category}</p>
            </Link>
          ))}
        </div>
        <div className="home-works__dots">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`home-works__dot${i === activeIndex ? ' home-works__dot--active' : ''}`}
              onClick={() => scrollToCard(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="home-testimonials"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="container home-testimonials__container">
          <div className="home-testimonials__layout">
            
            {/* Left Column: Kicker and minimal numbers */}
            <div className="home-testimonials__meta">
              <span className="text-label-caps home-testimonials__kicker">Client Stories</span>
              <div className="home-testimonials__fraction">
                <span className="home-testimonials__current">0{activeTestimonial + 1}</span>
                <span className="home-testimonials__divider">/</span>
                <span className="home-testimonials__total">0{TESTIMONIALS.length}</span>
              </div>
            </div>

            {/* Right Column: Quotes & Author */}
            <div className="home-testimonials__content">
              <div className={`home-testimonials__quote-wrap ${isTransitioning ? 'home-testimonials__quote-wrap--fading' : ''}`}>
                <span className="material-symbols-outlined home-testimonials__quote-icon">format_quote</span>
                <blockquote className="home-testimonials__quote">
                  "{TESTIMONIALS[activeTestimonial].quote}"
                </blockquote>
                <cite className="home-testimonials__author text-label-caps">
                  {TESTIMONIALS[activeTestimonial].author} <span className="home-testimonials__location">— {TESTIMONIALS[activeTestimonial].location}</span>
                </cite>
              </div>

              {/* Navigation Controls */}
              <div className="home-testimonials__nav">
                <button 
                  className="home-testimonials__nav-btn" 
                  onClick={() => handleTestimonialChange((activeTestimonial - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  aria-label="Previous testimonial"
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                <button 
                  className="home-testimonials__nav-btn" 
                  onClick={() => handleTestimonialChange((activeTestimonial + 1) % TESTIMONIALS.length)}
                  aria-label="Next testimonial"
                >
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Origin Story Teaser */}
      <section className="home-origin">
        <div className="home-origin__grid">
          <div className="home-origin__image-wrap">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvOi8xVIz6JFkKlQTGDV_bJiO8pG1vApBtizxjnyx2zO39glqfVSvax2-ltZnFG6xrwJyw0UbPKLjju2ZhbD79xovcyZVEHNv9M-Juk-gqpzrA71Y1hqTqDP0Fjv0xgzXDoc6EDCTbFVd1-3dB9jjn2M2YJLODRNTSJIwAOTDT2YIHHT0OdrCpcVXKSUrEZ8g_IhmHd2OmHF_qHsihwNmN5dcxG7siNuD-t4QTL4iLTnITpv1YrZB-gIX_cq9gM-PMJAFPEM0ByG0-"
              alt="Curated interior corner with vintage chair and vase"
              loading="lazy"
            />
          </div>
          <div className="home-origin__text">
            <p className="home-origin__quote">
              "Born from a childhood love for beautiful spaces, Sleekrealm was
              founded on the belief that our surroundings deeply impact our
              spirit."
            </p>
            <Link to="/about" className="btn-ghost">
              <span>Discover Our Story</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
