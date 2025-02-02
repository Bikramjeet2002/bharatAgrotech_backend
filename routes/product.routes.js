const express = require('express');
const { getproducts } = require('../controllers/product.controller');


const productRouter= express.Router()

productRouter.get('/getall',getproducts)


module.exports=productRouter