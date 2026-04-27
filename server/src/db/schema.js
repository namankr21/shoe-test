import { db } from './connection.js';

const products = [
  {
    name: 'Aster Leather Sneaker',
    category: 'Shoes',
    price: 129,
    badge: 'Best seller',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    description: 'Full-grain leather sneakers with cushioned support and a tailored city profile.'
  },
  {
    name: 'Harbor Walking Loafer',
    category: 'Shoes',
    price: 148,
    badge: 'New',
    imageUrl: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80',
    description: 'A breathable loafer made for long days, polished enough for dinner after work.'
  },
  {
    name: 'Solace Cloud Slipper',
    category: 'Slippers',
    price: 72,
    badge: 'Soft touch',
    imageUrl: 'https://images.unsplash.com/photo-1582897085656-c636d006a246?auto=format&fit=crop&w=900&q=80',
    description: 'Plush indoor slippers with memory-foam comfort and a quiet rubber sole.'
  },
  {
    name: 'Mira Woven Slide',
    category: 'Slippers',
    price: 86,
    badge: 'Limited',
    imageUrl: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=900&q=80',
    description: 'Woven open-toe slides with a contoured footbed for resort days and relaxed evenings.'
  },
  {
    name: 'Noir Chelsea Boot',
    category: 'Shoes',
    price: 182,
    badge: 'Premium',
    imageUrl: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=900&q=80',
    description: 'Weather-ready Chelsea boots with clean lines, elastic gussets, and a grippy outsole.'
  },
  {
    name: 'Breeze Travel Sandal',
    category: 'Slippers',
    price: 64,
    badge: 'Travel pick',
    imageUrl: 'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=900&q=80',
    description: 'Lightweight sandals with adjustable straps and easy all-day comfort.'
  }
];

export function initializeDatabase() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      category TEXT NOT NULL,
      price INTEGER NOT NULL,
      badge TEXT NOT NULL,
      image_url TEXT NOT NULL,
      description TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const count = db.prepare('SELECT COUNT(*) AS total FROM products').get().total;
  if (count > 0) {
    return;
  }

  const insert = db.prepare(`
    INSERT INTO products (name, category, price, badge, image_url, description)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  db.exec('BEGIN TRANSACTION');
  try {
    for (const item of products) {
      insert.run(item.name, item.category, item.price, item.badge, item.imageUrl, item.description);
    }
    db.exec('COMMIT');
  } catch (error) {
    db.exec('ROLLBACK');
    throw error;
  }
}
