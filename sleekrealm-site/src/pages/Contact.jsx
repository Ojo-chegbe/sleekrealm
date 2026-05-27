import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SITE } from '../data/siteData';
import contactImage from '../../images/Portfolio/EntireHouse/house-3.jpg';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  
  const defaultMessage = searchParams.get('message') || '';
  const defaultSubject = searchParams.get('service') ? `Inquiry regarding ${searchParams.get('service')}` : '';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page__split">
      {/* Left Column: Visual & Info */}
      <section className="contact-page__visual">
        <img src={contactImage} alt="Sleekrealm Interior" className="contact-page__visual-img" />
        <div className="contact-page__visual-overlay"></div>
        
        <div className="contact-page__info">
          <h1 className="contact-page__info-title">Let's create your sanctuary.</h1>
          <p className="contact-page__info-desc">
            We approach every project as a sacred stewardship. Reach out to
            discuss your vision, and together we will craft an environment of
            intention and light.
          </p>
          
          <div className="contact-page__details">
            <div className="contact-page__detail-item">
              <h3 className="text-label-caps">Studio</h3>
              <p>{SITE.address}</p>
            </div>
            
            <div className="contact-page__detail-item">
              <h3 className="text-label-caps">Direct Line</h3>
              <a href={`tel:${SITE.phonePrimary}`}>{SITE.displayPhonePrimary}</a>
              <a href={`tel:${SITE.phoneSecondary}`}>{SITE.displayPhoneSecondary}</a>
            </div>

            <div className="contact-page__detail-item">
              <h3 className="text-label-caps">Email</h3>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>

            <div className="contact-page__detail-item">
              <h3 className="text-label-caps">Socials</h3>
              <div className="contact-socials">
                <a href={SITE.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href={SITE.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href={SITE.tiktok} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                  </svg>
                </a>
                <a href={SITE.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column: Form */}
      <section className="contact-page__form-section">
        {submitted ? (
          <div className="contact-success">
            <span className="material-symbols-outlined contact-success__icon">
              check_circle
            </span>
            <h2 className="text-headline-md contact-success__title">
              Inquiry Sent
            </h2>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
              Thank you for reaching out. We will get back to you shortly.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <header className="contact-form__header">
              <h2 className="contact-form__title">Start a Conversation</h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                Please fill out the form below and our studio will be in touch.
              </p>
            </header>

            <div className="contact-input-group">
              <input type="text" id="name" name="name" placeholder=" " required />
              <label htmlFor="name">Full Name</label>
            </div>

            <div className="contact-form__row">
              <div className="contact-input-group">
                <input type="email" id="email" name="email" placeholder=" " required />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="contact-input-group">
                <input type="tel" id="phone" name="phone" placeholder=" " />
                <label htmlFor="phone">Phone (Optional)</label>
              </div>
            </div>

            <div className="contact-input-group">
              <input type="text" id="subject" name="subject" placeholder=" " defaultValue={defaultSubject} required />
              <label htmlFor="subject">Project Inquiry</label>
            </div>

            <div className="contact-input-group" style={{ marginTop: 24 }}>
              <textarea id="message" name="message" rows="4" placeholder=" " defaultValue={defaultMessage} required></textarea>
              <label htmlFor="message">Tell us about your space...</label>
            </div>

            <div className="contact-form__submit">
              <button type="submit" className="contact-form__submit-btn">
                Send Inquiry
                <span className="material-symbols-outlined" style={{ fontSize: 18, marginLeft: 8 }}>
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
