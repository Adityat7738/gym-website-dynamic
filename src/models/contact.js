const mongoose=require("mongoose")

const contact=mongoose.Schema({

    email:String,
    phone:String,
    about:String

})

module.exports=mongoose.model("info",contact)