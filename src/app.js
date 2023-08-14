const express=require("express")
const app= express()
const hbs=require("hbs")
const routes=require("./routes/main")
const mongoose=require("mongoose")
const detail=require("./models/details")
const Slider=require("./models/slider")
const bodyparse=require("body-parser")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended:true

}))




app.use('',routes)

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")

app.use('/static',express.static("public"))
mongoose.connect("mongodb://localhost/website",()=>{
    console.log("Database connected bro!")

    
    

    



    // Slider.create([
    //     {
    //         title:"body building is confidence",  
    //         subtitle:"regular workout gives the confidence",
    //         imgurl:'/static/images/p1.jpg',
    //         class:"active"
    //     },{
    //         title:"proteins are the key to strong body",

    //         subtitle:"regular workout gives the confidence",
    //         imgurl:'/static/images/p2.jpg',
    //         class:""
        
    //     },
    //     {
    //         title:"biceps are good. aren't they?",

    //         subtitle:"regular workout gives the confidence",
    //         imgurl:'/static/images/p3.jpg',
    //         class:""
        
    //     },

    // ]);















//     detail.create({
//         brandname:"Grow muscle",
//         brandurl:"/static/images/logo.png",
//         links:[{
//             label:"home",
//             url:"/"




//         },
//        {
//           label:"services",
//            url:"/#services_section"

//        },
//     {
//            label:"about",
//         url:"/#about_us"

//         },
//         { label:"gallery",
//             url:"/gallery"

//         },
//         {

//             label:"contact-us",
//             url:"/#contact-us"
//         }
    
    
    
//     ]



//     })

});


app.listen(5554,()=>{

    console.log("sever running bro!")
})





