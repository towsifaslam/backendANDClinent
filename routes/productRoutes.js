import express from'express';
import { getAllProducts,createProduct,getProductById } from '../controllers/productController.js';

const router = express.Router()


//routes for all endponts

// get  all products
router.get('/getAlProducts',getAllProducts)

router.post('/addProduct',createProduct)

router.get('/product/:id',getProductById)
export default router