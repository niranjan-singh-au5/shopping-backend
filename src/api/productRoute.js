const express = require('express');
const router = express.Router();
const { getallProducts, addProducts } = require('../controllers/productController')
const { addOrder } = require('../controllers/orderController')

router.get('/', getallProducts)
router.post('/', addProducts)
router.post('/add', addOrder)
module.exports = router;
