var express = require('express');
import Products from '../controller/products/products'
import Discover from '../controller/discover/discover'
var router = express.Router();


router.get('/getproducts', Products.getproducts);
router.get('/getdiscover', Discover.getdiscover);

export default router
