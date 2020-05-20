var express = require('express');
import Home from '../controller/home/home'

var router = express.Router();


router.get('/getHomeData', Home.getHomeData);

export default router
