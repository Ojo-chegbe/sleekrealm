import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__inner">
        <span className="text-label-caps">Page not found</span>
        <h1>We could not find that space.</h1>
        <p>
          Return to Sleekrealm Interiors to explore our Jos interior design services, portfolio, and consultation details.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn-primary">Go Home</Link>
          <Link to="/services" className="btn-ghost">View Services</Link>
        </div>
      </div>
    </section>
  );
}
