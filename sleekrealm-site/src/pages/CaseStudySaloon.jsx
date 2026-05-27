import { Link } from 'react-router-dom';

import saloon1 from '../../images/Portfolio/Saloon/saloon-1.jpg';
import saloon2 from '../../images/Portfolio/Saloon/saloon-2.jpg';
import saloon3 from '../../images/Portfolio/Saloon/saloon-3.jpg';

export default function CaseStudySaloon() {
  return (
    <>
      <header className="casestudy-hero">
        <div className="casestudy-hero__bg">
          <img
            src={saloon2}
            alt="The Luxe Beauty Bar - Nail bar arched alcove"
            loading="eager"
            fetchPriority="high"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
        <div className="casestudy-hero__content">
          <span className="text-label-caps casestudy-hero__label">
            Case Study • Commercial Beauty
          </span>
          <h1 className="casestudy-hero__title">
            The Luxe Beauty Bar:
            <br />The Geometry of Glamour.
          </h1>
        </div>
      </header>

      <section className="casestudy-challenge">
        <div className="casestudy-challenge__grid">
          <div className="casestudy-challenge__text">
            <h2 className="casestudy-challenge__heading">Reflecting Light & Luxury.</h2>
            <p className="casestudy-challenge__quote">
              "We utilized diamond-patterned mirrors not just for aesthetics, but as an architectural tool to endlessly bounce warm light."
            </p>
            <p className="casestudy-challenge__body">
              A compact commercial space transformed into a radiant sanctuary. The challenge was to create an illusion of expansive luxury while maintaining intimate service zones. We anchored the space with custom, floor-to-ceiling diamond-cut mirror walls. This deliberate decision endlessly reflects the soft, ambient light around the room, making the footprint feel twice its actual size. Against this reflective backdrop, the crisp white bouclé-style seating of the styling stations stands out beautifully alongside sleek black accents, creating a timeless monochrome foundation.
            </p>
          </div>
          <div className="casestudy-challenge__image-wrap">
            <img
              src={saloon3}
              alt="Diamond patterned mirror wall reflecting the expansive space"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="casestudy-unseen">
        <div className="casestudy-unseen__inner">
          <div className="casestudy-unseen__header">
            <h2 className="casestudy-unseen__heading">The Glow of the Nail Bar.</h2>
            <p className="casestudy-unseen__sub">
              A bespoke arched alcove creates a soft, halo-like glow, juxtaposed playfully with modern neon signage.
            </p>
          </div>
          <div className="casestudy-unseen__grid">
            <div className="casestudy-unseen__col1">
              <div className="casestudy-unseen__img1">
                <img
                  src={saloon2}
                  alt="Backlit arched nail bar alcove with display shelves"
                  loading="lazy"
                />
              </div>
              <p className="text-label-caps casestudy-unseen__label">
                Ambient Architecture
              </p>
            </div>
            <div className="casestudy-unseen__col2">
              <div className="casestudy-unseen__img2">
                <img
                  src={saloon1}
                  alt="Backlit styling mirrors and plush white bouclé seating"
                />
              </div>
              <p className="text-label-caps casestudy-unseen__label">
                Timeless Monochrome
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="casestudy-reveal">
        <div className="casestudy-reveal__header">
          <h2 className="casestudy-reveal__heading">The Complete Experience.</h2>
        </div>
        <div className="casestudy-reveal__main-img">
          <img
            src={saloon1}
            alt="Wide view of the styling stations showing the harmonious design"
            loading="lazy"
          />
        </div>
      </section>

      <section className="casestudy-result">
        <span className="material-symbols-outlined casestudy-result__icon">
          format_quote
        </span>
        <h2 className="casestudy-result__quote">
          "A stunningly radiant environment.
          <br />
          Every angle is meticulously designed to make clients feel beautiful."
        </h2>
        <p className="text-label-caps casestudy-result__author">— Lead Designer, Sleekrealm</p>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-cta__inner">
          <h2 className="portfolio-cta__title">
            Ready to elevate your beauty space?
          </h2>
          <p className="portfolio-cta__desc">
            Let us design an environment that reflects the premium quality of your services.
          </p>
          <Link to="/contact" className="btn-ghost">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
