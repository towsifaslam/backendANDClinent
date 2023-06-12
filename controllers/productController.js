// get produtcs function 
import Product from "../models/productModel.js"
const getAllProducts = async(req,res)=>{
  try {
    const products = await Product.find({});
     res.json(products)
  } catch (error) {
    res.status(500).json({message:"fetching faild for this products"})
    console.log(error)
    
  }
}
const createProduct =async(req,res)=>{
  const {image,title,price,category,description} = req.body
  try {
     const product = await Product.create({image,title,price,category,description})
    res.json(product)
  } catch (error) {
    res.status(500).json({message:"crate faild for this products"})
    console.log(error)
    
  }
}
// single prodduct
const getProductById = async(req,res)=>{
  //  const {id} = req.params;
   try {
    if(req.params?.id){
      const product = await Product.findById(req.params.id)
      res.json(product)
    }
    else{
    res.status(404).json({message: "Product not found"})
          
    }
    
   } catch (error) {
    res.status(500).json({message:"getting single product faild for this products"})
    console.log(error)
   }


}
export{getAllProducts,createProduct,getProductById}