import { Link } from 'react-router-dom';

import kicks2 from '../../images/Portfolio/HouseOfKeeks/Kicks (2).jpeg';
import kicks3 from '../../images/Portfolio/HouseOfKeeks/Kicks (3).jpeg';
import kicks7 from '../../images/Portfolio/HouseOfKeeks/Kicks (7).jpeg';

export default function CaseStudyKeeks() {
  return (
    <>
      <header className="casestudy-hero">
        <div className="casestudy-hero__bg">
          <img
            src={kicks2}
            alt="House of Keeks - Elegant arched shelving and styling chairs"
          />
        </div>
        <div className="casestudy-hero__content">
          <span className="text-label-caps casestudy-hero__label">
            Case Study • Premium Salon
          </span>
          <h1 className="casestudy-hero__title">
            House of Keeks:
            <br />The Grace of Curves.
          </h1>
        </div>
      </header>

      <section className="casestudy-challenge">
        <div className="casestudy-challenge__grid">
          <div className="casestudy-challenge__text">
            <h2 className="casestudy-challenge__heading">Architectural Softness.</h2>
            <p className="casestudy-challenge__quote">
              "We utilized repeating arched motifs to introduce a feminine, elegant grace to the commercial layout."
            </p>
            <p className="casestudy-challenge__body">
              For House of Keeks, the objective was to craft a space that felt both highly professional and inherently soothing. We achieved this by making the arch a central design pillar. Bespoke arched shelving units seamlessly integrate into the walls, while back-lit arched mirrors provide the perfect, shadow-free illumination needed for high-end styling. This repeating geometry softens the room, establishing an atmosphere of graceful luxury.
            </p>
          </div>
          <div className="casestudy-challenge__image-wrap">
            <img
              src={kicks3}
              alt="Custom arched shelving and back-lit mirrors in House of Keeks"
            />
          </div>
        </div>
      </section>

      <section className="casestudy-unseen">
        <div className="casestudy-unseen__inner">
          <div className="casestudy-unseen__header">
            <h2 className="casestudy-unseen__heading">Timeless Touchpoints.</h2>
            <p className="casestudy-unseen__sub">
              Crisp white bouclé-style seating paired with luxurious gold accents elevate the everyday salon experience into one of indulgence.
            </p>
          </div>
          <div className="casestudy-unseen__grid">
            <div className="casestudy-unseen__col1">
              <div className="casestudy-unseen__img1">
                <img
                  src={kicks2}
                  alt="White styling chairs with curved gold bases"
                />
              </div>
              <p className="text-label-caps casestudy-unseen__label">
                Refined Seating
              </p>
            </div>
            <div className="casestudy-unseen__col2">
              <div className="casestudy-unseen__img2">
                <img
                  src={kicks7}
                  alt="Detail of the golden pendant lighting and warm ambient glow"
                />
              </div>
              <p className="text-label-caps casestudy-unseen__label">
                Golden Glow
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="casestudy-reveal">
        <div className="casestudy-reveal__header">
          <h2 className="casestudy-reveal__heading">The Final Polish.</h2>
        </div>
        <div className="casestudy-reveal__main-img">
          <img
            src={kicks2}
            alt="Wide view of the styling stations showcasing the unified design language"
          />
        </div>
      </section>

      <section className="casestudy-result">
        <span className="material-symbols-outlined casestudy-result__icon">
          format_quote
        </span>
        <h2 className="casestudy-result__quote">
          "A space where every curve and every light
          <br />
          is designed to make clients feel celebrated."
        </h2>
        <p className="text-label-caps casestudy-result__author">— Lead Designer, Sleekrealm</p>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-cta__inner">
          <h2 className="portfolio-cta__title">
            Ready to design your boutique salon?
          </h2>
          <p className="portfolio-cta__desc">
            Let us craft an interior that perfectly matches the elegance of your brand.
          </p>
          <Link to="/contact" className="btn-ghost">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
