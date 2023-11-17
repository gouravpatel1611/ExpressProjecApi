import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    "title": {type:String,required:true},
    "price": {type:Number,required:[true ,"Prize Must be Provided"]},
    "description": {type:String},
    "rating": {type:Number,required:[true,"Rating Must be Provided"],default:4.9},
    "brand": {type:String},
    "category": {type:String}
})


const ProductModel = mongoose.model('product',productSchema);


export default ProductModel;