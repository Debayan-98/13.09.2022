const express = require("express");
const { title } = require("process");
const app = express()
require("dotenv").config(); 

//in line 15 we take the path so here we have to take the path module
const path=require('path');

// in first app.ser view krar jnno home page k
// in second app .set line first views for view krbo tar jnno and second views ho66e amr folder name tai .amder jeta folder name hbe amra setai likhbno  second position a.
app.set("view engine","ejs");
app.set("views","views");


//way to make public folder static
app.use(express.static(path.join(__dirname,"public")))



// app.get("/",(req,res)=>{
//     res.send("HellO!!!")
// });
// //sending html code
// app.get("/",(req,res)=>{
//     res.send("<h1>HellO!!!</h1>")
// });
// app.get("/about-me",(req,res)=>{
//     res.send("Aboutme")
// })
//sending html code
// app.get("/about-me",(req,res)=>{
//     res.send("<h1>Aboutme</h1>")
// })


// usiing curly braces we can pass object from home page.
app.get("/",(req,res)=>{
    res.render("home",{
        page_title:"Debayan| Home"
    });
});

app.get("/about-me",(req,res)=>{
    res.render("about",{
        page_title: "Debayan| About-me"
    });
});
app.get("/contact-me",(req,res)=>{
    res.render("contact",{
        page_title: "Debayan| Contact-me"
    });
});

const port = process.env.PORT || 2000

app.listen(port, () => {
    console.log(`Server is running @ http://localhost:${port}`)
});
