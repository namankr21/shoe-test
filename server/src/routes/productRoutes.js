import { Router } from 'express';
import { getProduct, listProducts } from '../services/productService.js';

export const productRouter = Router();

productRouter.get('/', (req, res, next) => {
  try {
    res.json({ products: listProducts(req.query.category) });
  } catch (error) {
    next(error);
  }
});

productRouter.get('/:id', (req, res, next) => {
  try {
    res.json({ product: getProduct(req.params.id) });
  } catch (error) {
    next(error);
  }
});
