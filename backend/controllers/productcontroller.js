const Product = require('../models/product')

exports.newproduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    
    res.status(201).json({
        success: true,
        product
    })
}


exports.getproducts = async (req,res,next) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })}

// get single product details => /api/v1/products/:id

exports.getsingleProduct = async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    console.log(product)
    if(!product){
        return res.status(404).json({
            success: false, 
            message: 'Product not found'
        })
    }

    res.status(200).json({
        success:true,
        product
    })
}

