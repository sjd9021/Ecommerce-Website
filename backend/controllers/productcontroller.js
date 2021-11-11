const errors = require("../middlewares/errors");
const Product = require("../models/product");
const errorhandler = require("../utils/errorhandler");
const catchasynerrors = require("../middlewares/catchasyncerrors");
const APIfeatures = require("../utils/apifeatures");

exports.newproduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

exports.getproducts = async (req, res, next) => {
  const resperpage = 4;
  const productcount = await Product.countDocuments();

  const apifeatures = new APIfeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resperpage);
  const products = await apifeatures.query;

  res.status(200).json({
    success: true,
    count: products.length,
    productcount,
    products,
  });
};

// get single product details => /api/v1/products/:id

exports.getsingleProduct = catchasynerrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id).search();

  console.log(req.params.id);

  if (!product) {
    return next(new errorhandler("product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

exports.updateproduct = catchasynerrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

// // delete product

// exports.deleteProduct = async (res, req, next) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) {
//     return res.status(404).json({
//       success: false,
//       message: "Product not found",
//     });
//   }

//   await product.deleteOne();

//   res.status(200).json({
//     success: true,
//     message: "product is deleted",
//   });
// };
