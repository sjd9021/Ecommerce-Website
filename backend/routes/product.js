const express = require('express')
const router = express.Router();

const { newproduct ,getproducts, getsingleProduct } = require('../controllers/productcontroller')

router.route('/products').get(getproducts);
router.route('/products/:id').get(getsingleProduct);

router.route('/products/new').post(newproduct);

module.exports = router
