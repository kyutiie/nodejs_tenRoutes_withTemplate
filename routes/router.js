const express= require('express');
const router = express.Router();
const main =require('../controller/MainController.js');
router.get('/',main.index );
router.get('/index',main.index );
router.get('/about', main.about );
router.get('/contact-us', main.contact );
router.get('/shop', main.shop );
router.get('/recentproducts', main.recentproducts );
router.get('/trendy', main.trendy );
router.get('/photos', main.photos );
router.get('/availableflowers', main.availableflowers );
router.get('/productdetails', main.productdetails );
router.get('/examples', main.examples );

module.exports = router;