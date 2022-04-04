const mongoose = require('mongoose');
const slugify = require('slugify');

const productShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product must have a name'],
        trim: true
    },
    slug: String,
    imageCover1: {
        type: String,
        required: [true, 'Product must have imageCover']
    },
    imageCover2: {
        type: String,
        required: [true, 'Product must have imageCover']
    },
    imageCover3: {
        type: String,
        required: [true, 'Product must have imageCover']
    },
    summary: {
        type: String,
        required: [true, 'Product must have a summary']
    },
    description1: {
        type: String,
        required: [true, 'Product must have description']
    },
    description2: {
        type: String,
        required: [true, 'Product must have description']
    },
    description3: {
        type: String,
        required: [true, 'Product must have description']
    },
    createdAt:{ 
        type: Date,
        default: Date.now(),
        select:false 
    }
}, {
    toJSON: { virtuals:true },
    toObject: { virtuals:true }
});


productShema.index({ slug: 1});


// DOCUMENT MIDDLEWARE: runs before .save() and .create()
productShema.pre('save', function(next) {
    this.slug = slugify(this.name, { lower:true });

    next();
})



const Product = mongoose.model('Product', productShema);

module.exports = Product;