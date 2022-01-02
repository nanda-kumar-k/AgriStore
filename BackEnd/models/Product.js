const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
{
    title:{type:String, required:true, unique:true},
    desc:{type:String, required:true},
    img:{type:String, required:true},
    categories:{type:Array},
    companyname:{type:String},
    price:{type:Number, required:true},   
    inStock:{type:Boolean, default:true},
    offer:{type:Number},
    size:{type:Array}
},
    {timestamps:true}

);

module.exports = mongoose.model("Product", ProductSchema);

