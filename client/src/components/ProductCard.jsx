export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.imageUrl} alt={product.name} loading="lazy" />
        <span>{product.badge}</span>
      </div>
      <div className="product-copy">
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-footer">
          <strong>${product.price}</strong>
          <button type="button">Add to bag</button>
        </div>
      </div>
    </article>
  );
}
