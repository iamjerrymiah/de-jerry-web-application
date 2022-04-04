const path = require('path');
const express = require('express');
const { json } = require('express');
const compression = require('compression');

const productRouter = require('./routes/productRoutes');
const viewsRouter = require('./routes/viewsRoutes');


const app = express();
app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views')); 


// GLOBAL MIDDLEWARES
//middleWare for serving static files like HTML
app.use(express.static(path.join(__dirname, 'public')));


// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use(compression());

//Routes
app.use('/', viewsRouter);
app.use('/api/v1/products', productRouter);


module.exports = app;