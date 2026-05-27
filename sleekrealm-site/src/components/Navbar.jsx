import { useState, useEffect, useCallback } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Close the menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          Sleekrealm
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-controls="mobile-navigation"
          aria-expanded={mobileOpen}
          type="button"
        >
          <span className="material-symbols-outlined" style={{ fontSize: 28 }}>
            menu
          </span>
        </button>
      </div>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`navbar__mobile-backdrop ${mobileOpen ? 'navbar__mobile-backdrop--visible' : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <nav
        id="mobile-navigation"
        className={`navbar__mobile-drawer ${mobileOpen ? 'navbar__mobile-drawer--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        {/* Drawer Header */}
        <div className="navbar__mobile-header">
          <Link to="/" className="navbar__mobile-logo" onClick={closeMobile}>
            Sleekrealm
          </Link>
          <button
            className="navbar__mobile-close"
            onClick={closeMobile}
            aria-label="Close menu"
            type="button"
          >
            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>
              close
            </span>
          </button>
        </div>

        {/* Drawer Navigation Links */}
        <div className="navbar__mobile-nav">
          {navItems.map((item, i) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
              }
              onClick={closeMobile}
              style={{ transitionDelay: mobileOpen ? `${0.08 + i * 0.05}s` : '0s' }}
            >
              <span className="navbar__mobile-link-text">{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Drawer Footer */}
        <div className="navbar__mobile-footer">
          <div className="navbar__mobile-contact">
            <a href="mailto:sleekrealmi@gmail.com" className="navbar__mobile-contact-item">
              sleekrealmi@gmail.com
            </a>
            <a href="tel:08165380417" className="navbar__mobile-contact-item">
              08165380417
            </a>
            <a href="tel:08030809692" className="navbar__mobile-contact-item">
              08030809692
            </a>
          </div>
          <div className="navbar__mobile-social">
            <a href="https://www.instagram.com/sleekrealm_interiors?igsh=eHZqd2duMWk5bGE4&utm_source=qr" target="_blank" rel="noopener noreferrer" className="navbar__mobile-social-link">Instagram</a>
            <span className="navbar__mobile-social-dot">·</span>
            <a href="https://www.facebook.com/share/1ELEe87xLj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="navbar__mobile-social-link">Facebook</a>
            <span className="navbar__mobile-social-dot">·</span>
            <a href="https://www.tiktok.com/@sleekrealminteriors?_r=1&_t=ZS-96ew9s8zvnd" target="_blank" rel="noopener noreferrer" className="navbar__mobile-social-link">TikTok</a>
            <span className="navbar__mobile-social-dot">Â·</span>
            <a href="https://wa.me/2348165380417" target="_blank" rel="noopener noreferrer" className="navbar__mobile-social-link">WhatsApp</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
