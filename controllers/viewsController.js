const Product = require('../models/productModel');

exports.getOverview = async (req, res) => {
    const products = await Product.find();

    res.status(200).render('overview', { 
        title: 'Welcome to De-jerry Interbizz',
        products
    });
};


exports.getProduct = async (req, res) => {
    const product = await Product.findOne({ slug: req.params.slug })

    res.status(200).render('one-product', {
        title: `${product.name}`,
        product
      });
};


exports.getContactPage = async (req, res) => {
    res.status(200).render('contact', { 
        title: 'Contact us'
    });
};

