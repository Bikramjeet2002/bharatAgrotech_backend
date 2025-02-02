const express = require('express');
const { getAllReview } = require('../controllers/review.controller');

const reviewRouter=express.Router()

reviewRouter.get('/reviews',getAllReview)


module.exports = reviewRouter;