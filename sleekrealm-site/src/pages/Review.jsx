import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import reviewImage from '../../images/Portfolio/Void/void-3.jpg';

// Reusing the Web3Forms key from the contact page
const WEB3FORMS_KEY = '8d49ffe1-0d4c-46be-95ee-0d4b101a2082';
const FORM_API = ['https://api', 'web3forms', 'com/submit'].join('.');

export default function Review() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating === 0) {
      setError('Please select a star rating.');
      return;
    }

    setSending(true);
    setError('');

    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('from_name', 'Sleekrealm Reviews');
    formData.append('subject', 'New Client Testimonial Received');
    formData.append('Rating', `${rating} Stars`);

    try {
      const res = await fetch(FORM_API, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="contact-page__split">
      {/* Left Column: Visual and Info */}
      <section className="contact-page__visual">
        <img src={reviewImage} alt="Sleekrealm Interior Design" className="contact-page__visual-img" />
        <div className="contact-page__visual-overlay"></div>
        
        <div className="contact-page__info">
          <h1 className="contact-page__info-title">Your feedback is our greatest reward.</h1>
          <p className="contact-page__info-desc">
            We are deeply honored to have designed your sanctuary. Your words 
            help us continue creating spaces filled with intention and light. 
            Thank you for trusting Sleekrealm.
          </p>
        </div>
      </section>

      {/* Right Column: Review Form */}
      <section className="contact-page__form-section">
        {submitted ? (
          <div className="contact-success">
            <span className="material-symbols-outlined contact-success__icon">
              favorite
            </span>
            <h2 className="text-headline-md contact-success__title">
              Thank You!
            </h2>
            <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
              We truly appreciate you taking the time to share your experience with us.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <header className="contact-form__header">
              <h2 className="contact-form__title">Share Your Experience</h2>
              <p className="text-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>
                Tell us about your time working with Sleekrealm.
              </p>
            </header>

            {/* Star Rating System */}
            <div className="review-rating-group" style={{ marginBottom: 32 }}>
              <label className="text-label-caps" style={{ display: 'block', marginBottom: 12, color: 'var(--color-on-surface-variant)' }}>
                How was your experience?
              </label>
              <div className="review-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={`review-star ${(hoverRating || rating) >= star ? 'review-star--active' : ''}`}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`Rate ${star} out of 5 stars`}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: (hoverRating || rating) >= star ? "'FILL' 1" : "'FILL' 0" }}>
                      star
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="contact-input-group">
              <input type="text" id="name" name="Client Name" placeholder=" " required />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="contact-input-group">
              <input type="text" id="project" name="Project Type" placeholder=" " required />
              <label htmlFor="project">Project / Space Name (e.g., Living Room Design)</label>
            </div>

            <div className="contact-input-group" style={{ marginTop: 24 }}>
              <textarea id="testimonial" name="Testimonial" rows="5" placeholder=" " required></textarea>
              <label htmlFor="testimonial">Your Review...</label>
            </div>

            <div className="review-consent-group" style={{ marginTop: 24, marginBottom: 32, display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <input 
                type="checkbox" 
                id="consent" 
                name="Permission to Publish" 
                value="Granted"
                className="review-checkbox"
                required 
              />
              <label htmlFor="consent" className="text-body-md" style={{ fontSize: '14px', lineHeight: '20px', color: 'var(--color-on-surface-variant)', cursor: 'pointer' }}>
                I give Sleekrealm permission to share my review and first name on their website and social media channels.
              </label>
            </div>

            {error && (
              <p style={{ color: 'var(--color-error)', fontSize: '14px', marginBottom: '16px' }}>{error}</p>
            )}

            <div className="contact-form__submit">
              <button type="submit" className="contact-form__submit-btn" disabled={sending}>
                {sending ? 'Submitting...' : 'Submit Review'}
                <span className="material-symbols-outlined" style={{ fontSize: 18, marginLeft: 8 }}>
                  {sending ? 'hourglass_empty' : 'arrow_forward'}
                </span>
              </button>
            </div>
          </form>
        )}
      </section>
    </main>
  );
}
