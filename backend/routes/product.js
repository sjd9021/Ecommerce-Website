const express = require("express");
const router = express.Router();

const {
  newproduct,
  getproducts,
  getsingleProduct,
  updateproduct,
  deleteProduct,
} = require("../controllers/productcontroller");

router.route("/products").get(getproducts);
router.route("/products/:id").get(getsingleProduct);

router.route("/admin/products/:id").put(updateproduct).delete(deleteProduct);
router.route("admin/products/new").post(newproduct);

module.exports = router;
