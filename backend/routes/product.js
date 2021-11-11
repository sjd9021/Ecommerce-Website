const express = require("express");
const router = express.Router();

const {
  newproduct,
  getproducts,
  getsingleProduct,
  updateproduct,
} = require("../controllers/productcontroller");

router.route("/products").get(getproducts);
router.route("/products/:id").get(getsingleProduct);

router.route("/admin/products/:id").put(updateproduct);
router.route("/admin/products/new").post(newproduct);
// .delete(deleteProduct);

module.exports = router;
