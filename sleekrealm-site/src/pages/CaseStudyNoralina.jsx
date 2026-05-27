import { Link } from 'react-router-dom';

import salon1 from '../../images/Portfolio/NoralinasCloset/salon-1.jpeg';
import salon2 from '../../images/Portfolio/NoralinasCloset/salon-2.jpeg';
import salon3 from '../../images/Portfolio/NoralinasCloset/salon-3.jpeg';
import salon4 from '../../images/Portfolio/NoralinasCloset/salon-4.jpeg';
import salon5 from '../../images/Portfolio/NoralinasCloset/salon-5.jpeg';
import salon6 from '../../images/Portfolio/NoralinasCloset/salon-6.jpeg';
import salon7 from '../../images/Portfolio/NoralinasCloset/salon-7.jpeg';
import salon8 from '../../images/Portfolio/NoralinasCloset/salon-8.jpeg';
import salon9 from '../../images/Portfolio/NoralinasCloset/salon-9.jpeg';
import salon10 from '../../images/Portfolio/NoralinasCloset/salon-10.jpeg';
import salon11 from '../../images/Portfolio/NoralinasCloset/salon-11.jpeg';
import salon12 from '../../images/Portfolio/NoralinasCloset/salon-12.jpeg';
import salon13 from '../../images/Portfolio/NoralinasCloset/salon-13.jpeg';
import salon14 from '../../images/Portfolio/NoralinasCloset/salon-14.jpeg';
import salon15 from '../../images/Portfolio/NoralinasCloset/salon-15.jpeg';
import salon16 from '../../images/Portfolio/NoralinasCloset/salon-16.jpeg';

export default function CaseStudyNoralina() {
  return (
    <>
      <header className="casestudy-hero">
        <div className="casestudy-hero__bg">
          <img
            src={salon5}
            alt="Noralina's Closet fully styled commercial space with bright white chairs"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="casestudy-hero__content">
          <span className="text-label-caps casestudy-hero__label">
            Case Study • Commercial Salon
          </span>
          <h1 className="casestudy-hero__title">
            Noralina's Closet:
            <br />A Commercial Sanctuary.
          </h1>
        </div>
      </header>

      <section className="casestudy-challenge">
        <div className="casestudy-challenge__grid">
          <div className="casestudy-challenge__text">
            <h2 className="casestudy-challenge__heading">From Concrete to Comfort.</h2>
            <p className="casestudy-challenge__quote">
              "We took a raw, exposed-brick shell and methodically breathed warmth, light, and architectural purpose into it."
            </p>
            <p className="casestudy-challenge__body">
              Transforming a bare construction site into a premium salon requires profound vision. Our journey with Noralina's Closet began amidst raw concrete blocks and exposed structural framework. We were determined to carve out an inviting, minimalist sanctuary from this brutalist shell. The goal was to construct a commercial space that felt deeply personal, blending high-end, crisp aesthetics with the supreme comfort necessary for long beauty sessions.
            </p>
          </div>
          <div className="casestudy-challenge__image-wrap">
            <img
              src={salon1}
              alt="Raw space during early construction phase showing exposed blockwork"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="casestudy-unseen">
        <div className="casestudy-unseen__inner">
          <div className="casestudy-unseen__header">
            <h2 className="casestudy-unseen__heading">Architectural Light.</h2>
            <p className="casestudy-unseen__sub">
              Every drop ceiling and recessed light was meticulously planned to eliminate harsh shadows and create a universally flattering glow.
            </p>
          </div>
          <div className="casestudy-unseen__grid">
            <div className="casestudy-unseen__col1">
              <div className="casestudy-unseen__img1">
                <img
                  src={salon4}
                  alt="Raw POP ceiling construction framing the lighting layout"
                  loading="lazy"
                />
              </div>
              <p className="text-label-caps casestudy-unseen__label">
                Structural Intent
              </p>
            </div>
            <div className="casestudy-unseen__col2">
              <div className="casestudy-unseen__img2">
                <img
                  src={salon2}
                  alt="Finished ceiling with warm recessed lighting and sleek white walls"
                  loading="lazy"
                />
              </div>
              <p className="text-label-caps casestudy-unseen__label">
                Luminous Execution
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="casestudy-reveal">
        <div className="casestudy-reveal__header">
          <h2 className="casestudy-reveal__heading">The Final Sanctuary.</h2>
        </div>
        <div className="casestudy-reveal__main-img">
          <img
            src={salon3}
            alt="Noralina's Closet illuminated logo wall reflecting the crisp white interior"
            loading="lazy"
          />
        </div>
        <div className="casestudy-reveal__grid">
          <div className="casestudy-reveal__detail">
            <img
              src={salon5}
              alt="Elegant white styling chairs, backlit mirrors, and clean lines"
              loading="lazy"
            />
          </div>
          <div className="casestudy-reveal__detail casestudy-reveal__detail--offset">
            <img
              src={salon7}
              alt="The designer and project manager reviewing the finished, serene space"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="casestudy-result">
        <span className="material-symbols-outlined casestudy-result__icon">
          format_quote
        </span>
        <h2 className="casestudy-result__quote">
          "A stunning transformation that redefined our business.
          <br />
          The space feels incredible, and our clients never want to leave."
        </h2>
        <p className="text-label-caps casestudy-result__author">— Noralina's Closet</p>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-cta__inner">
          <h2 className="portfolio-cta__title">
            Ready to transform your commercial space?
          </h2>
          <p className="portfolio-cta__desc">
            Let us bring the peace and poise of sacred minimalism to your business environment.
          </p>
          <Link to="/contact" className="btn-ghost">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
