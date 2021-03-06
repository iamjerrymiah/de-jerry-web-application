const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) =>{
    try {
        const products = await Product.find();

        res.status(200).json({
            status: 'success',
            result: products.length,
            data: {
                products
            }
        })

    } catch (err) {
        res.status(400).json({
            status:'fail',
            message: err
    })
    }
};

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data:{
                product
            }
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message: err
        })
    }
};

exports.createProduct = async (req, res) => {
    try {
        const newProd = await Product.create(req.body);

        res.status(201).json({
            status:'success',
            data: {
                newProd
            }
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message: err
        })
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updateProd = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        res.status(200).json({
            status: 'success',
            data: {
                updateProd
            }
        })
        
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message: err
        })
    }
};

exports.deleteProduct = async (req, res)=> {
    try {
        await Product.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            data: null
          })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
          })
    }
};