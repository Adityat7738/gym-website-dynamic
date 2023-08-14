const express=require("express")
const{route}=require('express/lib/application')
const routes=express.Router()
const Detail=require("../models/details")
const slider=require("../models/slider")
const info=require("../models/contact")

routes.get("/",async(req,res)=>{

    const details=await Detail.findOne({"_id":"64968e24db38c25e4d7f2ac6"})
    const slides=await slider.find()
  
    res.render("index",{
        details:details,
        slides:slides
    })

})



routes.get("/gallery",async (req,res)=>{
    const details= await  Detail.findOne({"_id":"64968e24db38c25e4d7f2ac6"})


    res.render("gallery",{
        details:details


    })
})

routes.post("/contact-us",async (request,response)=>{


    console.log("submitted")
    console.log(request.body)
    try{
        const data=info.create(request.body)
        response.redirect("/")



    }
    catch(e){
        console.log(e)
        response.redirect("/")


    }
     
})
module.exports=routes;