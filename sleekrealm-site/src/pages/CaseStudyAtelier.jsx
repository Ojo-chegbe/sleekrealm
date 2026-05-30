import { Link } from 'react-router-dom';

import atelier1 from '../../images/Portfolio/HairAtelier/atelier.jpeg';
import atelier3 from '../../images/Portfolio/HairAtelier/atelier (3).jpeg';
import atelier4 from '../../images/Portfolio/HairAtelier/atelier (4).jpeg';

export default function CaseStudyAtelier() {
  return (
    <>
      <header className="casestudy-hero">
        <div className="casestudy-hero__bg">
          <img
            src={atelier1}
            alt="The Hair Atelier - Vibrant pink lounge and styling stations"
          />
        </div>
        <div className="casestudy-hero__content">
          <span className="text-label-caps casestudy-hero__label">
            Case Study • Boutique Studio
          </span>
          <h1 className="casestudy-hero__title">
            The Hair Atelier:
            <br />Bold & Beautiful.
          </h1>
        </div>
      </header>

      <section className="casestudy-challenge">
        <div className="casestudy-challenge__grid">
          <div className="casestudy-challenge__text">
            <h2 className="casestudy-challenge__heading">A Vibrant Atmosphere.</h2>
            <p className="casestudy-challenge__quote">
              "We fully embraced a bold, monochromatic pink aesthetic to create an instantly memorable, high-energy salon experience."
            </p>
            <p className="casestudy-challenge__body">
              The Hair Atelier is a masterclass in confident, bold design. We transformed the studio into a vibrant statement piece, utilizing a rich palette of pinks anchored by luxurious gold accents. From the plush velvet seating to the custom gold-framed product shelving, every element was chosen to inject a modern, playful energy into the room. It is an environment designed not just for styling, but for celebrating bold aesthetics.
            </p>
          </div>
          <div className="casestudy-challenge__image-wrap">
            <img
              src={atelier1}
              alt="Lounge area featuring the pink velvet sofa, gold shelving, and styling stations"
            />
          </div>
        </div>
      </section>

      <section className="casestudy-unseen">
        <div className="casestudy-unseen__inner">
          <div className="casestudy-unseen__header">
            <h2 className="casestudy-unseen__heading">Neon & Velvet.</h2>
            <p className="casestudy-unseen__sub">
              Bespoke backlit 'melting drip' logo walls and striking blue neon-edged styling mirrors serve as the perfect Instagram-ready focal points.
            </p>
          </div>
          <div className="casestudy-unseen__grid">
            <div className="casestudy-unseen__col1">
              <div className="casestudy-unseen__img1">
                <img
                  src={atelier4}
                  alt="Styling stations with pink chairs and blue neon-backlit arched mirrors"
                />
              </div>
              <p className="text-label-caps casestudy-unseen__label">
                Neon Highlights
              </p>
            </div>
            <div className="casestudy-unseen__col2">
              <div className="casestudy-unseen__img2">
                <img
                  src={atelier3}
                  alt="Detail of the bespoke 'melting drip' custom backlit wall cutout"
                  style={{ objectPosition: 'top center' }}
                />
              </div>
              <p className="text-label-caps casestudy-unseen__label">
                Custom Backlighting
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="casestudy-reveal">
        <div className="casestudy-reveal__header">
          <h2 className="casestudy-reveal__heading">The Complete Look.</h2>
        </div>
        <div className="casestudy-reveal__main-img">
          <img
            src={atelier1}
            alt="The stunning studio area featuring the pink velvet sofa and dripping logo wall"
          />
        </div>
      </section>

      <section className="casestudy-result">
        <span className="material-symbols-outlined casestudy-result__icon">
          format_quote
        </span>
        <h2 className="casestudy-result__quote">
          "A space that is unapologetically vibrant.
          <br />
          It's not just a salon; it's a creative statement."
        </h2>
        <p className="text-label-caps casestudy-result__author">— Lead Designer, Sleekrealm</p>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-cta__inner">
          <h2 className="portfolio-cta__title">
            Want to make a bold statement?
          </h2>
          <p className="portfolio-cta__desc">
            Let us design a commercial space that perfectly captures your brand's unique energy.
          </p>
          <Link to="/contact" className="btn-ghost">
            Discuss Your Vision
          </Link>
        </div>
      </section>
    </>
  );
}
