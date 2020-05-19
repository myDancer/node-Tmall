var express = require('express');
import Cart from '../controller/cart/cart'
var router = express.Router();


router.post('/addtocart', Cart.addToCart);
router.get('/getcart', Cart.getCart);

export default router
