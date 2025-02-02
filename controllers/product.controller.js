 const productModel = require('../models/product.model')

 const getproducts= async (req,res)=>{
    try{
        const products = await productModel.find({})
        return res.status(200).json({
            message: "products fetched successfully",
            data:products
     } )
        }
    
    catch(error){
        return res.status(400).json({
            message: error.message || "something went wrong",
            success: false,
        });
    }
}

module.exports={getproducts}

