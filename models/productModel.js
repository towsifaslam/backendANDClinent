import mongoose from "mongoose";

const productSchma = new mongoose.Schema({
  image:{
    type: String,
    required:true,
  },
  title:{
    type:String,
    required:true,

  },
  price:{
    type:Number,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  description:{
    type:String
  }
},{
  timestamps:true
})

const Product = mongoose.model('Product',productSchma)

export default Product