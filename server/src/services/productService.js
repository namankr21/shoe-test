import { findProductById, findProducts } from '../repositories/productRepository.js';

const allowedCategories = new Set(['All', 'Shoes', 'Slippers']);

export function listProducts(category = 'All') {
  if (!allowedCategories.has(category)) {
    const error = new Error('Unsupported product category.');
    error.status = 400;
    throw error;
  }

  return findProducts({ category });
}

export function getProduct(id) {
  const product = findProductById(Number(id));
  if (!product) {
    const error = new Error('Product not found.');
    error.status = 404;
    throw error;
  }

  return product;
}
