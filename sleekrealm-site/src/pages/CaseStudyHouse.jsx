import { Link } from 'react-router-dom';

import house1 from '../../images/Portfolio/EntireHouse/house-1.jpg';
import house2 from '../../images/Portfolio/EntireHouse/house-2.jpg';
import house3 from '../../images/Portfolio/EntireHouse/house-3.jpg';
import house4 from '../../images/Portfolio/EntireHouse/house-4.jpg';
import house5 from '../../images/Portfolio/EntireHouse/house-5.jpg';
import house6 from '../../images/Portfolio/EntireHouse/house-6.jpg';

export default function CaseStudyHouse() {
  return (
    <>
      <header className="casestudy-hero">
        <div className="casestudy-hero__bg">
          <img
            src={house6}
            alt="Master suite with geometric padded headboard and gold pendant lights"
            loading="eager"
            fetchPriority="high"
          />
        </div>
        <div className="casestudy-hero__content">
          <span className="text-label-caps casestudy-hero__label">
            Case Study • Full Home Design
          </span>
          <h1 className="casestudy-hero__title">
            The Full House:
            <br />Room by Room.
          </h1>
        </div>
      </header>

      {/* --- Intro Story --- */}
      <section className="casestudy-story">
        <div className="casestudy-story__inner">
          <h2 className="casestudy-story__heading">Six Rooms. One Vision.</h2>
          <p className="casestudy-story__body">
            This wasn't just one room or one corner — we designed an entire home from scratch. Every single space had to feel connected, like chapters of the same book. The family wanted something that felt luxurious but not over the top, warm but still clean. So we went room by room, giving each space its own personality while keeping a thread running through all of them: warm lighting, rich textures, and that feeling you get when a space just... makes sense.
          </p>
        </div>
      </section>

      {/* --- Room 1: The Master Suite --- */}
      <section className="casestudy-room">
        <div className="casestudy-room__grid">
          <div className="casestudy-room__text">
            <span className="text-label-caps casestudy-room__label">
              Room 01
            </span>
            <h2 className="casestudy-room__heading">The Master Suite.</h2>
            <p className="casestudy-room__body">
              This is the room that sets the tone for the whole house. We went with a statement headboard — it's this geometric, padded panel in a soft taupe suede, framed on either side by tall dark wood columns. The pattern isn't random; those angled lines and gold metal inlays catch the light from the pendant lamps hanging on each side. Speaking of those pendants — they're these delicate ring-shaped lights on slim gold stems. They give off just enough light to read by without flooding the room. At the foot of the bed, there's a matching upholstered bench on slim gold legs, sitting on a vintage-inspired rug. And on the left wall, we hung an abstract piece in warm golds and creams to tie everything together. The whole room just feels like a five-star hotel suite, but it's home.
            </p>
          </div>
          <div className="casestudy-room__image-wrap">
            <img
              src={house6}
              alt="Master suite with geometric padded headboard flanked by dark wood columns, gold pendant lights, and upholstered bench"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* --- Full Width Image: Bedroom 2 --- */}
      <div className="casestudy-fullimg">
        <img
          src={house3}
          alt="Primary bedroom with olive green velvet bed, tray ceiling with cove lighting, wall moldings, and marble flooring"
          loading="lazy"
        />
      </div>

      {/* --- Room 2: The Green Bedroom --- */}
      <section className="casestudy-room">
        <div className="casestudy-room__grid casestudy-room__grid--reversed">
          <div className="casestudy-room__text">
            <span className="text-label-caps casestudy-room__label">
              Room 02
            </span>
            <h2 className="casestudy-room__heading">The Green Bedroom.</h2>
            <p className="casestudy-room__body">
              This bedroom is all about that olive green velvet bed. It's deep, rich, and instantly grounds the entire room. Against the white marble-look flooring, the green just pops. Above, we designed a layered tray ceiling with warm cove lighting tucked into the recesses — it washes the room in this golden glow that makes everything feel cozy, even though the space is generous. On the walls, there are clean panel moldings that add a classic touch without making it feel old-fashioned. A slim gold wall sconce on the left, sheer curtains that pool on the floor, and an asymmetric mirror next to the bed. The artwork on the right wall? It's a large green and gold abstract piece in a dark frame, mounted right into the wall. The whole room says: "relax, you're home."
            </p>
          </div>
          <div className="casestudy-room__image-wrap">
            <img
              src={house3}
              alt="Olive green velvet bed with recessed tray ceiling featuring warm cove lighting"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* --- Room 3: The Organic Bedroom --- */}
      <section className="casestudy-room casestudy-room--alt">
        <div className="casestudy-room__inner">
          <div className="casestudy-room__grid">
            <div className="casestudy-room__text">
              <span className="text-label-caps casestudy-room__label">
                Room 03
              </span>
              <h2 className="casestudy-room__heading">The Wave Room.</h2>
              <p className="casestudy-room__body">
                This one's different from the rest — and that was the point. While the other bedrooms lean into straight lines and symmetry, this room plays with curves. The headboard is this massive, organic wave shape that flows across the wall, backlit with warm LED strips that make it look like it's floating. It almost feels like a piece of modern art. The bed itself has a channel-tufted headboard in a creamy beige, stacked with soft pillows. On the left side, there's a floor-to-ceiling wood panel wall with built-in shelving — each shelf glowing with its own warm backlight, showcasing small decorative objects and books. The bedside table has a glass globe lamp and a round black decorative piece. And running across the ceiling, there's a sleek linear LED track light. The whole room feels like it belongs in a design magazine.
              </p>
            </div>
            <div className="casestudy-room__image-wrap">
              <img
                src={house4}
                alt="Bedroom with organic wave-shaped LED headboard, wood panel shelving with warm backlighting, and linear ceiling track light"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Room 4: The Kitchen --- */}
      <section className="casestudy-room">
        <div className="casestudy-room__grid casestudy-room__grid--reversed">
          <div className="casestudy-room__text">
            <span className="text-label-caps casestudy-room__label">
              Room 04
            </span>
            <h2 className="casestudy-room__heading">The Kitchen.</h2>
            <p className="casestudy-room__body">
              The kitchen was designed to be the engine room of the house — serious, functional, but still absolutely stunning. We went dark here. Matte dark grey cabinets run along three walls in a U-shape, with a large center island anchoring the space. The countertops are white quartz — that contrast against the dark cabinetry is electric. Underneath the upper cabinets, there's a continuous strip of warm LED backlighting that illuminates the entire workspace. The upper cabinets? Some of them have glass fronts with that same warm glow inside — you can see through to the shelving, and it adds depth to the room. On the ceiling, there's a recessed tray with cove lighting matching the rest of the house, plus a pendant and directional spotlights. A full-size stainless steel fridge sits flush against the right wall. And the flooring is a light wood-look tile that balances all that dark cabinetry.
            </p>
          </div>
          <div className="casestudy-room__image-wrap">
            <img
              src={house5}
              alt="Dark grey U-shaped kitchen with white quartz countertops, LED under-cabinet lighting, glass-front upper cabinets, and center island"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* --- Two-up Gallery: Wardrobe + Bathroom --- */}
      <section className="casestudy-gallery casestudy-gallery--alt">
        <div className="casestudy-gallery__inner">
          <div className="casestudy-gallery__header">
            <h2 className="casestudy-gallery__heading">The Details.</h2>
            <p className="casestudy-gallery__sub">
              A home isn't just about the rooms you sleep in. The wardrobe, the bathroom — these are the spaces you start and end your day in. They deserve just as much attention.
            </p>
          </div>
          <div className="casestudy-gallery__grid">
            <div className="casestudy-gallery__item">
              <div className="casestudy-gallery__img">
                <img
                  src={house2}
                  alt="Custom glass-fronted wardrobe with smoked glass doors and warm LED shelf lighting"
                  loading="lazy"
                />
              </div>
              <p className="text-label-caps casestudy-gallery__caption">
                The Walk-In — Smoked glass doors with warm LED-lit shelving. Everything has a place. The wardrobe feels like walking into a boutique store.
              </p>
            </div>
            <div className="casestudy-gallery__item">
              <div className="casestudy-gallery__img">
                <img
                  src={house1}
                  alt="Minimalist bathroom with black-framed glass shower enclosure and floating dark marble sink console"
                  loading="lazy"
                />
              </div>
              <p className="text-label-caps casestudy-gallery__caption">
                The Bathroom — A frameless glass shower with black steel framing, warm beige tiles, a floating dark marble sink console, and wall-mounted matte black fixtures. Clean, spa-like, no clutter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Full Width Bathroom Shot --- */}
      <div className="casestudy-fullimg">
        <img
          src={house1}
          alt="Wide view of the minimalist bathroom with glass shower enclosure and marble vanity"
          loading="lazy"
        />
      </div>

      {/* --- Result Quote --- */}
      <section className="casestudy-result">
        <span className="material-symbols-outlined casestudy-result__icon">
          format_quote
        </span>
        <h2 className="casestudy-result__quote">
          "Every room has its own vibe,
          <br />
          but walk through the whole house and you just know — it's all one story."
        </h2>
        <p className="text-label-caps casestudy-result__author">— Lead Designer, Sleekrealm</p>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-cta__inner">
          <h2 className="portfolio-cta__title">
            Want this kind of complete home transformation?
          </h2>
          <p className="portfolio-cta__desc">
            We don't just design rooms — we design the way a home feels. Let's talk about yours.
          </p>
          <Link to="/contact" className="btn-ghost">
            Let's Talk
          </Link>
        </div>
      </section>
    </>
  );
}
