import express, { Router } from 'express';
const router = express.Router();
import productController from '../controllers/productController.js';

router.get('/',productController.getAllProduct);
router.get('/testing',productController.getAllProductTesting);


export default router;