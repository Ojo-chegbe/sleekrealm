import { Link } from 'react-router-dom';

import void1 from '../../images/Portfolio/Void/void-1.jpg';
import void2 from '../../images/Portfolio/Void/void-2.jpg';
import void3 from '../../images/Portfolio/Void/void-3.jpg';

export default function CaseStudyVoid() {
  return (
    <>
      <header className="casestudy-hero">
        <div className="casestudy-hero__bg">
          <img
            src={void3}
            alt="The Void Lounge - Custom wood-paneled TV media wall"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="casestudy-hero__content">
          <span className="text-label-caps casestudy-hero__label">
            Case Study • Residential Lounge
          </span>
          <h1 className="casestudy-hero__title">
            The Void Lounge:
            <br />Atmospheric Warmth.
          </h1>
        </div>
      </header>

      <section className="casestudy-challenge">
        <div className="casestudy-challenge__grid">
          <div className="casestudy-challenge__text">
            <h2 className="casestudy-challenge__heading">The Interplay of Textures.</h2>
            <p className="casestudy-challenge__quote">
              "We masterfully balanced the imposing presence of raw, dark slate against the smooth, inviting warmth of wood grain."
            </p>
            <p className="casestudy-challenge__body">
              Moving away from stark minimalism, we embraced a moody, deeply textured aesthetic to craft a cinematic living environment. The Void Lounge is a masterclass in balance. We juxtaposed the raw, dark slate-like accent panels against the smooth warmth of the custom wood-grain media wall. This bold architectural contrast provides a sophisticated backdrop for the room's most vibrant element: the organic, curved mustard sofa. Its plush fabric and inviting shape soften the hard architectural lines, creating a space that feels highly curated yet instantly comfortable.
            </p>
          </div>
          <div className="casestudy-challenge__image-wrap">
            <img
              src={void1}
              alt="Designer standing in front of the textured dark slate and wood media wall"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="casestudy-unseen">
        <div className="casestudy-unseen__inner">
          <div className="casestudy-unseen__header">
            <h2 className="casestudy-unseen__heading">Sculpting with Light.</h2>
            <p className="casestudy-unseen__sub">
              Lighting here isn't just functional; it's architectural. Vertical LED strips cut sharply through the wood, casting a cinematic glow.
            </p>
          </div>
          <div className="casestudy-unseen__grid">
            <div className="casestudy-unseen__col1">
              <div className="casestudy-unseen__img1">
                <img
                  src={void2}
                  alt="Curved mustard sofa, layered gold-accented rug, and wood nesting tables"
                  loading="lazy"
                />
              </div>
              <p className="text-label-caps casestudy-unseen__label">
                Organic Forms
              </p>
            </div>
            <div className="casestudy-unseen__col2">
              <div className="casestudy-unseen__img2">
                <img
                  src={void3}
                  alt="Illuminated shelving and back-lit media console"
                  loading="lazy"
                />
              </div>
              <p className="text-label-caps casestudy-unseen__label">
                Ambient Glow
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="casestudy-reveal">
        <div className="casestudy-reveal__header">
          <h2 className="casestudy-reveal__heading">The Final Space.</h2>
        </div>
        <div className="casestudy-reveal__main-img">
          <img
            src={void2}
            alt="Gold-accented rug and curved mustard seating arrangement"
            loading="lazy"
          />
        </div>
      </section>

      <section className="casestudy-result">
        <span className="material-symbols-outlined casestudy-result__icon">
          format_quote
        </span>
        <h2 className="casestudy-result__quote">
          "A living space that feels like a warm embrace.
          <br />
          Moody, sophisticated, and deeply comfortable."
        </h2>
        <p className="text-label-caps casestudy-result__author">— Lead Designer, Sleekrealm</p>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-cta__inner">
          <h2 className="portfolio-cta__title">
            Want to bring atmospheric warmth to your home?
          </h2>
          <p className="portfolio-cta__desc">
            Let us design a bespoke living space that perfectly balances texture and light.
          </p>
          <Link to="/contact" className="btn-ghost">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
