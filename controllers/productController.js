const products=require('..//models/productSchema')


// get all product


exports.getAllProductController=async(req,res)=>{
    try{

        const allProducts=await products.find()
        res.status(200).json(allProducts)
    }
    catch(err){
      res.status(401).json(err)
    }
}


// get a single product



exports.getAproduct=async(req,res)=>{
  const {id}=req.params

  try{
    const product=await products.findOne({id})
    res.status(200).json(product)
  }
  catch(err){
     res.status(401).json(err)
  }
}