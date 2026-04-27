import { db } from '../db/connection.js';

const mapProduct = (row) => ({
  id: row.id,
  name: row.name,
  category: row.category,
  price: row.price,
  badge: row.badge,
  imageUrl: row.image_url,
  description: row.description
});

export function findProducts({ category } = {}) {
  if (category && category !== 'All') {
    return db
      .prepare('SELECT * FROM products WHERE category = ? ORDER BY id ASC')
      .all(category)
      .map(mapProduct);
  }

  return db.prepare('SELECT * FROM products ORDER BY id ASC').all().map(mapProduct);
}

export function findProductById(id) {
  const row = db.prepare('SELECT * FROM products WHERE id = ?').get(id);
  return row ? mapProduct(row) : null;
}
