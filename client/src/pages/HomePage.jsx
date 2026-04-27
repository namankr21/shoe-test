import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="hero-section">
      <div className="hero-media" aria-hidden="true"></div>
      <div className="hero-content">
        <p>Comfort-first footwear, refined for every day</p>
        <h1>Stepwise Studio</h1>
        <p>
          Shop shoes and slippers designed with thoughtful materials, clean silhouettes,
          and all-day ease.
        </p>
        <div className="hero-actions">
          <Link to="/shop">Shop collection</Link>
          <Link to="/about">Our standards</Link>
        </div>
      </div>
      <div className="hero-strip" aria-label="Store highlights">
        <span>Free shipping over $100</span>
        <span>30-day fit promise</span>
        <span>Responsibly sourced materials</span>
      </div>
    </section>
  );
}
