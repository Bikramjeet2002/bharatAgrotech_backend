const reviewModel = require("../models/review.model")

const getAllReview =async (req,res)=>{
    try {
        const getreview = await reviewModel.find({})
        return res.status(200).json({
            message:"review fetched successfully",
            data:getreview
        }) 
    } catch (error) {
        res.status(401).json({
            message:error.message || "something went wrong"
        })
    } 
}

module.exports={getAllReview}