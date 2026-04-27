import { useEffect, useMemo, useState } from 'react';
import { getProducts } from '../api/products.js';
import ProductCard from '../components/ProductCard.jsx';

const categories = ['All', 'Shoes', 'Slippers'];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let ignore = false;
    setStatus('loading');

    getProducts(activeCategory)
      .then((items) => {
        if (!ignore) {
          setProducts(items);
          setStatus('ready');
        }
      })
      .catch(() => {
        if (!ignore) {
          setStatus('error');
        }
      });

    return () => {
      ignore = true;
    };
  }, [activeCategory]);

  const countLabel = useMemo(() => `${products.length} styles`, [products.length]);

  return (
    <section className="shop-page">
      <div className="page-heading">
        <p>Curated collection</p>
        <h1>Shop shoes and slippers</h1>
        <span>{countLabel}</span>
      </div>

      <div className="filter-bar" aria-label="Product category filter">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            className={category === activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {status === 'loading' && <p className="state-message">Loading collection...</p>}
      {status === 'error' && (
        <p className="state-message">The collection could not be loaded right now.</p>
      )}
      {status === 'ready' && (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
