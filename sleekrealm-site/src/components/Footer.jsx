import { Link } from 'react-router-dom';
import { SERVICES_DATA, SITE } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__glow-effect"></div>
      <div className="footer__inner">
        <div className="footer__brand-col">
          <Link to="/" className="footer__brand-name">
            Sleekrealm
          </Link>
          <p className="footer__copyright">
            © {new Date().getFullYear()} Sleekrealm Interiors.<br />
            Interior design studio in Jos, Plateau State.
          </p>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__heading">Services</h4>
          <ul className="footer__list">
            {SERVICES_DATA.slice(0, 5).map((service) => (
              <li className="footer__list-item" key={service.id}>
                <Link to={`/services/${service.id}`} className="footer__link-hover">
                  {service.title}
                </Link>
              </li>
            ))}
            <li className="footer__list-item">
              <Link to="/services" className="footer__link-hover">All Services</Link>
            </li>
          </ul>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__heading">Connect</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href={`mailto:${SITE.email}`} className="footer__link-hover">
                {SITE.email}
              </a>
            </li>
            <li className="footer__list-item">
              <a href={`tel:${SITE.phonePrimary}`} className="footer__link-hover">{SITE.displayPhonePrimary}</a>
            </li>
            <li className="footer__list-item">
              <a href={`tel:${SITE.phoneSecondary}`} className="footer__link-hover">{SITE.displayPhoneSecondary}</a>
            </li>
            <li className="footer__list-item footer__list-text">
              {SITE.address}
            </li>
          </ul>
        </div>

        <div className="footer__links-col">
          <h4 className="footer__heading">Social</h4>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="footer__link-hover">
                Instagram
              </a>
            </li>
            <li className="footer__list-item">
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" className="footer__link-hover">
                Facebook
              </a>
            </li>
            <li className="footer__list-item">
              <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="footer__link-hover">
                TikTok
              </a>
            </li>
            <li className="footer__list-item">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="footer__link-hover">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom-bar">
        <p>Serving homes, offices, salons, restaurants, and commercial spaces in Jos and Plateau State.</p>
      </div>
    </footer>
  );
}
