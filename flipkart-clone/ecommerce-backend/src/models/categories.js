const mongoose=require('mongoose')
const categoriesSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    parendId:{
        type:String,
        required:true,
        trim:true
    },






},{timestamp:true})

module.exports=mongoose.model("Categories",categoriesSchema)