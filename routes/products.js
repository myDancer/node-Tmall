var express = require('express');
import Products from '../controller/products/products'
var router = express.Router();


router.get('/getproducts', Products.getproducts);

export default router
