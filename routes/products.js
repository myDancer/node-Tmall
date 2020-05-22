var express = require('express');
import Products from '../controller/products/products'
var router = express.Router();


router.get('/getProductDetailById', Products.getProductDetailById);
router.get('/fuzzySearchByProductName', Products.getProductFuzzySearchByName);

export default router
